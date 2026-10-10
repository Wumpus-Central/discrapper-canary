(n.d(t, { En: () => V, K4: () => L, YX: () => F, eL: () => O, n5: () => D, sV: () => _, uO: () => W, ys: () => H }),
    n(323874),
    n(14289),
    n(35956));
var i = n(141931),
    a = n(941426),
    r = n(73153),
    l = n(756042),
    u = n(933958),
    o = n(824613),
    d = n(587895),
    c = n(91242),
    s = n(484697),
    p = n(616356),
    f = n(192820),
    m = n(309010),
    h = n(338771),
    g = n(652215),
    A = n(165610),
    I = n(731854);
let y = "activity-frame:",
    S = new a.Vy("activityStreamSource"),
    w = new Map(),
    E = new Set(),
    v = null,
    C = 0,
    T = 0,
    R = new Set(),
    b = !1,
    $ = null;
function P() {
    return window.DiscordNative?.activityCapture ?? null;
}
function _() {
    return null != P() && f.Ay.supports(I.O5.ACTIVITY_CAPTURE);
}
function D(e) {
    return _() && l.h.getConfig({ location: e }).enabled;
}
function M() {
    let e = m.Ay.getVoiceChannelId(),
        t = m.Ay.getChannelId();
    return [
        c.A.getMainFrame(),
        ...(null != e ? c.A.getFramesForChannel(e) : []),
        ...(null != t && t !== e ? c.A.getFramesForChannel(t) : []),
    ]
        .map(A.ny)
        .filter((e) => null != e);
}
function O() {
    return M()[0] ?? null;
}
function F() {
    let e = (function () {
        let e = u.Ay.getCurrentEmbeddedActivity(),
            t = null != e ? (0, o.XZ)(e.applicationId) : null;
        if (null != e && null != t) return { applicationId: e.applicationId, iframeId: t };
        for (let t of M())
            if ((null == e || t.applicationId === e.applicationId) && null != t.data.iframeId)
                return { applicationId: t.applicationId, iframeId: t.data.iframeId };
        return null;
    })();
    if (null == e) return null;
    let t = d.A.getApplication(e.applicationId);
    return {
        id: `${y}${e.iframeId}`,
        name: t?.name ?? "",
        url: t?.getIconURL(256) ?? "",
        icon: t?.getIconURL(64) ?? void 0,
    };
}
function L(e) {
    return e.id.startsWith(y);
}
function k(e) {
    return L(e) ? e.id.slice(y.length) : null;
}
function U(e, t, n) {
    let i,
        a = P();
    if (null == a) return null;
    let r = (0, s.fl)(e);
    if (null != r && r.clientWidth > 0 && r.clientHeight > 0) {
        let e = Math.min(t.width / r.clientWidth, t.height / r.clientHeight);
        i = { width: Math.max(1, Math.round(r.clientWidth * e)), height: Math.max(1, Math.round(r.clientHeight * e)) };
    }
    return a
        .captureImage({ frameId: e, outputSize: i, format: "jpeg", quality: 80, timeoutMs: n })
        .then((e) => new Blob([e.data], { type: e.mimeType }));
}
async function V(e, t) {
    let n = k(e),
        i = null != n ? U(n, t, 2e3) : null;
    if (null == i) return null;
    try {
        return URL.createObjectURL(await i);
    } catch (e) {
        return (S.warn("Failed to capture activity preview", e), null);
    }
}
async function W(e, t) {
    let n = k(e),
        i = null != n ? U(n, t, 500) : null;
    if (null == n || null == i) return null;
    let a = $?.frameId === n ? $.url : null;
    try {
        var r;
        let e = await ((r = await i),
        new Promise((e, t) => {
            let n = new FileReader();
            ((n.onload = () => e(n.result)), (n.onerror = () => t(n.error)), n.readAsDataURL(r));
        }));
        return (($ = { frameId: n, url: e }), e);
    } catch {
        return a;
    }
}
function G(e) {
    P()
        ?.stop(e)
        .catch((t) => S.warn(`Failed to stop activity capture ${e}`, t));
}
function N(e, t) {
    let { sound: n, frameRate: i } = t;
    P()
        ?.update(e, { audio: n, maxFrameRate: i })
        .catch((t) => S.warn(`Failed to update activity capture ${e}`, t));
}
function j() {
    let e = null != v && R.has(v);
    e !== b &&
        ((b = e),
        r.h.dispatch({
            type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
            context: I.x.STREAM,
            videoState: e ? g.uPF.PAUSED : g.uPF.PLAYING,
        }));
}
function x(e) {
    let t = w.get(e);
    null != t && (clearTimeout(t), w.delete(e));
}
function Y(e) {
    w.has(e) && (x(e), E.add(e));
}
async function H(e, t) {
    let n,
        { audio: a, maxFrameRate: r } = t,
        l = P();
    if (null == l || !L(e)) return null;
    let u = ++C;
    try {
        ({ captureId: n } = await l.captureStream({ frameId: e.id.slice(y.length), audio: a, maxFrameRate: r }));
    } catch (e) {
        return (S.warn("Failed to start activity capture", e), null);
    }
    return u < T
        ? (G(n), null)
        : ((T = u),
          w.set(
              n,
              window.setTimeout(() => {
                  (S.warn(`Activity capture ${n} was never picked up by a stream`), Y(n), G(n));
              }, 15e3),
          ),
          { ...e, id: `${i.fS.ACTIVITY}:${n}` });
}
(r.h.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", (e) => {
    let { settings: t } = e;
    if (t?.context != null && t.context !== I.x.STREAM) return;
    let n = t?.desktopSettings?.sourceId,
        a = `${i.fS.ACTIVITY}:`,
        r = n?.startsWith(a) ? n.slice(a.length) : null;
    if (null != r && E.delete(r)) {
        (S.warn(`Activity capture ${r} stopped before the stream picked it up`),
            setTimeout(() => (0, h.A)(p.A.getCurrentUserActiveStream())));
        return;
    }
    let l = { sound: t?.desktopSettings?.sound, frameRate: t?.qualityOptions?.frameRate };
    if (null != r && w.has(r)) {
        (null != v && v !== r && G(v), (v = r), x(r), N(r, l), setTimeout(j));
        return;
    }
    null != r && r === v ? N(r, l) : null != v && n !== `${i.fS.ACTIVITY}:${v}` && (G(v), (v = null), setTimeout(j));
}),
    P()?.onStopped((e, t) => {
        (S.info(`Activity capture ${e} stopped: ${t}`), R.delete(e), e === v ? (v = null) : Y(e));
    }),
    P()?.onPausedChanged((e, t) => {
        (S.info(`Activity capture ${e} ${t ? "paused" : "resumed"}`), t ? R.add(e) : R.delete(e), j());
    }));

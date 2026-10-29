(n.d(t, { En: () => L, K4: () => O, YX: () => M, n5: () => D, sV: () => _, uO: () => U, ys: () => x }),
    n(323874),
    n(14289),
    n(35956));
var i = n(141931),
    a = n(941426),
    l = n(73153),
    r = n(756042),
    u = n(933958),
    o = n(824613),
    d = n(587895),
    s = n(91242),
    c = n(484697),
    p = n(616356),
    f = n(999926),
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
    return _() && r.h.getConfig({ location: e }).enabled;
}
function M() {
    let e = (function () {
        let e,
            t,
            n = u.Ay.getCurrentEmbeddedActivity(),
            i = null != n ? (0, o.XZ)(n.applicationId) : null;
        if (null != n && null != i) return { applicationId: n.applicationId, iframeId: i };
        for (let i of ((e = m.Ay.getVoiceChannelId()),
        (t = m.Ay.getChannelId()),
        [
            s.A.getMainFrame(),
            ...(null != e ? s.A.getFramesForChannel(e) : []),
            ...(null != t && t !== e ? s.A.getFramesForChannel(t) : []),
        ]
            .map(A.ny)
            .filter((e) => null != e)))
            if ((null == n || i.applicationId === n.applicationId) && null != i.data.iframeId)
                return { applicationId: i.applicationId, iframeId: i.data.iframeId };
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
function O(e) {
    return e.id.startsWith(y);
}
function F(e) {
    return O(e) ? e.id.slice(y.length) : null;
}
function k(e, t, n) {
    let i,
        a = P();
    if (null == a) return null;
    let l = (0, c.fl)(e);
    if (null != l && l.clientWidth > 0 && l.clientHeight > 0) {
        let e = Math.min(t.width / l.clientWidth, t.height / l.clientHeight);
        i = { width: Math.max(1, Math.round(l.clientWidth * e)), height: Math.max(1, Math.round(l.clientHeight * e)) };
    }
    return a
        .captureImage({ frameId: e, outputSize: i, format: "jpeg", quality: 80, timeoutMs: n })
        .then((e) => new Blob([e.data], { type: e.mimeType }));
}
async function L(e, t) {
    let n = F(e),
        i = null != n ? k(n, t, 2e3) : null;
    if (null == i) return null;
    try {
        return URL.createObjectURL(await i);
    } catch (e) {
        return (S.warn("Failed to capture activity preview", e), null);
    }
}
async function U(e, t) {
    let n = F(e),
        i = null != n ? k(n, t, 500) : null;
    if (null == n || null == i) return null;
    let a = $?.frameId === n ? $.url : null;
    try {
        var l;
        let e = await ((l = await i),
        new Promise((e, t) => {
            let n = new FileReader();
            ((n.onload = () => e(n.result)), (n.onerror = () => t(n.error)), n.readAsDataURL(l));
        }));
        return (($ = { frameId: n, url: e }), e);
    } catch {
        return a;
    }
}
function V(e) {
    P()
        ?.stop(e)
        .catch((t) => S.warn(`Failed to stop activity capture ${e}`, t));
}
function W(e, t) {
    let { sound: n, frameRate: i } = t;
    P()
        ?.update(e, { audio: n, maxFrameRate: i })
        .catch((t) => S.warn(`Failed to update activity capture ${e}`, t));
}
function G() {
    let e = null != v && R.has(v);
    e !== b &&
        ((b = e),
        l.h.dispatch({
            type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
            context: I.x.STREAM,
            videoState: e ? g.uPF.PAUSED : g.uPF.PLAYING,
        }));
}
function N(e) {
    let t = w.get(e);
    null != t && (clearTimeout(t), w.delete(e));
}
function j(e) {
    w.has(e) && (N(e), E.add(e));
}
async function x(e, t) {
    let n,
        { audio: a, maxFrameRate: l } = t,
        r = P();
    if (null == r || !O(e)) return null;
    let u = ++C;
    try {
        ({ captureId: n } = await r.captureStream({ frameId: e.id.slice(y.length), audio: a, maxFrameRate: l }));
    } catch (e) {
        return (S.warn("Failed to start activity capture", e), null);
    }
    return u < T
        ? (V(n), null)
        : ((T = u),
          w.set(
              n,
              window.setTimeout(() => {
                  (S.warn(`Activity capture ${n} was never picked up by a stream`), j(n), V(n));
              }, 15e3),
          ),
          { ...e, id: `${i.fS.ACTIVITY}:${n}` });
}
(l.h.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", (e) => {
    let { settings: t } = e;
    if (t?.context != null && t.context !== I.x.STREAM) return;
    let n = t?.desktopSettings?.sourceId,
        a = `${i.fS.ACTIVITY}:`,
        l = n?.startsWith(a) ? n.slice(a.length) : null;
    if (null != l && E.delete(l)) {
        (S.warn(`Activity capture ${l} stopped before the stream picked it up`),
            setTimeout(() => (0, h.A)(p.A.getCurrentUserActiveStream())));
        return;
    }
    let r = { sound: t?.desktopSettings?.sound, frameRate: t?.qualityOptions?.frameRate };
    if (null != l && w.has(l)) {
        (null != v && v !== l && V(v), (v = l), N(l), W(l, r), setTimeout(G));
        return;
    }
    null != l && l === v ? W(l, r) : null != v && n !== `${i.fS.ACTIVITY}:${v}` && (V(v), (v = null), setTimeout(G));
}),
    P()?.onStopped((e, t) => {
        (S.info(`Activity capture ${e} stopped: ${t}`), R.delete(e), e === v ? (v = null) : j(e));
    }),
    P()?.onPausedChanged((e, t) => {
        (S.info(`Activity capture ${e} ${t ? "paused" : "resumed"}`), t ? R.add(e) : R.delete(e), G());
    }));

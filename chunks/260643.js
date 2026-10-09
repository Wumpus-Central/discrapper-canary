(n.d(e, { En: () => N, K4: () => x, YX: () => V, eL: () => U, n5: () => M, sV: () => _, uO: () => O, ys: () => j }),
    n(323874),
    n(14289),
    n(35956));
var l = n(141931),
    i = n(941426),
    a = n(73153),
    r = n(756042),
    u = n(933958),
    c = n(824613),
    o = n(587895),
    d = n(91242),
    p = n(484697),
    s = n(616356),
    f = n(192820),
    h = n(309010),
    m = n(338771),
    I = n(652215),
    y = n(165610),
    A = n(731854);
let g = "activity-frame:",
    w = new i.Vy("activityStreamSource"),
    v = new Map(),
    T = new Set(),
    C = null,
    S = 0,
    E = 0,
    $ = new Set(),
    F = !1,
    R = null;
function b() {
    return window.DiscordNative?.activityCapture ?? null;
}
function _() {
    return null != b() && f.Ay.supports(A.O5.ACTIVITY_CAPTURE);
}
function M(t) {
    return _() && r.h.getConfig({ location: t }).enabled;
}
function k() {
    let t = h.Ay.getVoiceChannelId(),
        e = h.Ay.getChannelId();
    return [
        d.A.getMainFrame(),
        ...(null != t ? d.A.getFramesForChannel(t) : []),
        ...(null != e && e !== t ? d.A.getFramesForChannel(e) : []),
    ]
        .map(y.ny)
        .filter((t) => null != t);
}
function U() {
    return k()[0] ?? null;
}
function V() {
    let t = (function () {
        let t = u.Ay.getCurrentEmbeddedActivity(),
            e = null != t ? (0, c.XZ)(t.applicationId) : null;
        if (null != t && null != e) return { applicationId: t.applicationId, iframeId: e };
        for (let e of k())
            if ((null == t || e.applicationId === t.applicationId) && null != e.data.iframeId)
                return { applicationId: e.applicationId, iframeId: e.data.iframeId };
        return null;
    })();
    if (null == t) return null;
    let e = o.A.getApplication(t.applicationId);
    return {
        id: `${g}${t.iframeId}`,
        name: e?.name ?? "",
        url: e?.getIconURL(256) ?? "",
        icon: e?.getIconURL(64) ?? void 0,
    };
}
function x(t) {
    return t.id.startsWith(g);
}
function L(t) {
    return x(t) ? t.id.slice(g.length) : null;
}
function D(t, e, n) {
    let l,
        i = b();
    if (null == i) return null;
    let a = (0, p.fl)(t);
    if (null != a && a.clientWidth > 0 && a.clientHeight > 0) {
        let t = Math.min(e.width / a.clientWidth, e.height / a.clientHeight);
        l = { width: Math.max(1, Math.round(a.clientWidth * t)), height: Math.max(1, Math.round(a.clientHeight * t)) };
    }
    return i
        .captureImage({ frameId: t, outputSize: l, format: "jpeg", quality: 80, timeoutMs: n })
        .then((t) => new Blob([t.data], { type: t.mimeType }));
}
async function N(t, e) {
    let n = L(t),
        l = null != n ? D(n, e, 2e3) : null;
    if (null == l) return null;
    try {
        return URL.createObjectURL(await l);
    } catch (t) {
        return (w.warn("Failed to capture activity preview", t), null);
    }
}
async function O(t, e) {
    let n = L(t),
        l = null != n ? D(n, e, 500) : null;
    if (null == n || null == l) return null;
    let i = R?.frameId === n ? R.url : null;
    try {
        var a;
        let t = await ((a = await l),
        new Promise((t, e) => {
            let n = new FileReader();
            ((n.onload = () => t(n.result)), (n.onerror = () => e(n.error)), n.readAsDataURL(a));
        }));
        return ((R = { frameId: n, url: t }), t);
    } catch {
        return i;
    }
}
function P(t) {
    b()
        ?.stop(t)
        .catch((e) => w.warn(`Failed to stop activity capture ${t}`, e));
}
function Y(t, e) {
    let { sound: n, frameRate: l } = e;
    b()
        ?.update(t, { audio: n, maxFrameRate: l })
        .catch((e) => w.warn(`Failed to update activity capture ${t}`, e));
}
function G() {
    let t = null != C && $.has(C);
    t !== F &&
        ((F = t),
        a.h.dispatch({
            type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
            context: A.x.STREAM,
            videoState: t ? I.uPF.PAUSED : I.uPF.PLAYING,
        }));
}
function W(t) {
    let e = v.get(t);
    null != e && (clearTimeout(e), v.delete(t));
}
function H(t) {
    v.has(t) && (W(t), T.add(t));
}
async function j(t, e) {
    let n,
        { audio: i, maxFrameRate: a } = e,
        r = b();
    if (null == r || !x(t)) return null;
    let u = ++S;
    try {
        ({ captureId: n } = await r.captureStream({ frameId: t.id.slice(g.length), audio: i, maxFrameRate: a }));
    } catch (t) {
        return (w.warn("Failed to start activity capture", t), null);
    }
    return u < E
        ? (P(n), null)
        : ((E = u),
          v.set(
              n,
              window.setTimeout(() => {
                  (w.warn(`Activity capture ${n} was never picked up by a stream`), H(n), P(n));
              }, 15e3),
          ),
          { ...t, id: `${l.fS.ACTIVITY}:${n}` });
}
(a.h.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", (t) => {
    let { settings: e } = t;
    if (e?.context != null && e.context !== A.x.STREAM) return;
    let n = e?.desktopSettings?.sourceId,
        i = `${l.fS.ACTIVITY}:`,
        a = n?.startsWith(i) ? n.slice(i.length) : null;
    if (null != a && T.delete(a)) {
        (w.warn(`Activity capture ${a} stopped before the stream picked it up`),
            setTimeout(() => (0, m.A)(s.A.getCurrentUserActiveStream())));
        return;
    }
    let r = { sound: e?.desktopSettings?.sound, frameRate: e?.qualityOptions?.frameRate };
    if (null != a && v.has(a)) {
        (null != C && C !== a && P(C), (C = a), W(a), Y(a, r), setTimeout(G));
        return;
    }
    null != a && a === C ? Y(a, r) : null != C && n !== `${l.fS.ACTIVITY}:${C}` && (P(C), (C = null), setTimeout(G));
}),
    b()?.onStopped((t, e) => {
        (w.info(`Activity capture ${t} stopped: ${e}`), $.delete(t), t === C ? (C = null) : H(t));
    }),
    b()?.onPausedChanged((t, e) => {
        (w.info(`Activity capture ${t} ${e ? "paused" : "resumed"}`), e ? $.add(t) : $.delete(t), G());
    }));

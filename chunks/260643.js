(n(323874), n(14289), n(35956));
var i = n(141931),
    a = n(611599),
    l = n(73153),
    r = n(756042),
    u = n(933958),
    o = n(824613),
    d = n(587895),
    c = n(91242),
    s = n(484697),
    p = n(616356),
    f = n(754712),
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
    return e.id.startsWith(y);
}
function F(e) {
    return D(e) ? e.id.slice(y.length) : null;
}
function M(e, t, n) {
    let i,
        a = P();
    if (null == a) return null;
    let l = (0, s.fl)(e);
    if (null != l && l.clientWidth > 0 && l.clientHeight > 0) {
        let e = Math.min(t.width / l.clientWidth, t.height / l.clientHeight);
        i = { width: Math.max(1, Math.round(l.clientWidth * e)), height: Math.max(1, Math.round(l.clientHeight * e)) };
    }
    return a
        .captureImage({ frameId: e, outputSize: i, format: "jpeg", quality: 80, timeoutMs: n })
        .then((e) => new Blob([e.data], { type: e.mimeType }));
}
function O(e) {
    P()
        ?.stop(e)
        .catch((t) => S.warn(`Failed to stop activity capture ${e}`, t));
}
function k(e, t) {
    let { sound: n, frameRate: i } = t;
    P()
        ?.update(e, { audio: n, maxFrameRate: i })
        .catch((t) => S.warn(`Failed to update activity capture ${e}`, t));
}
function L() {
    let e = null != v && R.has(v);
    e !== b &&
        ((b = e),
        l.h.dispatch({
            type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
            context: I.x.STREAM,
            videoState: e ? g.uPF.PAUSED : g.uPF.PLAYING,
        }));
}
function U(e) {
    let t = w.get(e);
    null != t && (clearTimeout(t), w.delete(e));
}
function V(e) {
    w.has(e) && (U(e), E.add(e));
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
        (null != v && v !== l && O(v), (v = l), U(l), k(l, r), setTimeout(L));
        return;
    }
    null != l && l === v ? k(l, r) : null != v && n !== `${i.fS.ACTIVITY}:${v}` && (O(v), (v = null), setTimeout(L));
}),
    P()?.onStopped((e, t) => {
        (S.info(`Activity capture ${e} stopped: ${t}`), R.delete(e), e === v ? (v = null) : V(e));
    }),
    P()?.onPausedChanged((e, t) => {
        (S.info(`Activity capture ${e} ${t ? "paused" : "resumed"}`), t ? R.add(e) : R.delete(e), L());
    }),
    n.d(
        t,
        {},
        {
            En: async function (e, t) {
                let n = F(e),
                    i = null != n ? M(n, t, 2e3) : null;
                if (null == i) return null;
                try {
                    return URL.createObjectURL(await i);
                } catch (e) {
                    return (S.warn("Failed to capture activity preview", e), null);
                }
            },
            K4: D,
            YX: function () {
                let e = (function () {
                    let e,
                        t,
                        n = u.Ay.getCurrentEmbeddedActivity(),
                        i = null != n ? (0, o.XZ)(n.applicationId) : null;
                    if (null != n && null != i) return { applicationId: n.applicationId, iframeId: i };
                    for (let i of ((e = m.Ay.getVoiceChannelId()),
                    (t = m.Ay.getChannelId()),
                    [
                        c.A.getMainFrame(),
                        ...(null != e ? c.A.getFramesForChannel(e) : []),
                        ...(null != t && t !== e ? c.A.getFramesForChannel(t) : []),
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
            },
            n5: function (e) {
                return _() && r.h.getConfig({ location: e }).enabled;
            },
            sV: _,
            uO: async function (e, t) {
                let n = F(e),
                    i = null != n ? M(n, t, 500) : null;
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
            },
            ys: async function (e, t) {
                let n,
                    { audio: a, maxFrameRate: l } = t,
                    r = P();
                if (null == r || !D(e)) return null;
                let u = ++C;
                try {
                    ({ captureId: n } = await r.captureStream({
                        frameId: e.id.slice(y.length),
                        audio: a,
                        maxFrameRate: l,
                    }));
                } catch (e) {
                    return (S.warn("Failed to start activity capture", e), null);
                }
                return u < T
                    ? (O(n), null)
                    : ((T = u),
                      w.set(
                          n,
                          window.setTimeout(() => {
                              (S.warn(`Activity capture ${n} was never picked up by a stream`), V(n), O(n));
                          }, 15e3),
                      ),
                      { ...e, id: `${i.fS.ACTIVITY}:${n}` });
            },
        },
    ));

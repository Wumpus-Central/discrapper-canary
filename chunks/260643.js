(n(323874), n(14289), n(35956));
var i = n(141931),
    a = n(611599),
    r = n(73153),
    l = n(933958),
    u = n(824613),
    o = n(587895),
    d = n(91242),
    c = n(484697),
    s = n(616356),
    p = n(988468),
    f = n(309010),
    m = n(338771),
    h = n(652215),
    A = n(165610),
    g = n(731854);
let I = "activity-frame:",
    y = new a.Vy("activityStreamSource"),
    S = new Map(),
    w = new Set(),
    E = null,
    v = 0,
    C = 0,
    T = new Set(),
    R = !1,
    $ = null;
function P() {
    return window.DiscordNative?.activityCapture ?? null;
}
let _ = null;
function b(e) {
    return e.id.startsWith(I);
}
function D(e) {
    return b(e) ? e.id.slice(I.length) : null;
}
function F(e, t, n) {
    let i,
        a = P();
    if (null == a) return null;
    let r = (0, c.fl)(e);
    if (null != r && r.clientWidth > 0 && r.clientHeight > 0) {
        let e = Math.min(t.width / r.clientWidth, t.height / r.clientHeight);
        i = { width: Math.max(1, Math.round(r.clientWidth * e)), height: Math.max(1, Math.round(r.clientHeight * e)) };
    }
    return a
        .captureImage({ frameId: e, outputSize: i, format: "jpeg", quality: 80, timeoutMs: n })
        .then((e) => new Blob([e.data], { type: e.mimeType }));
}
function M(e) {
    P()
        ?.stop(e)
        .catch((t) => y.warn(`Failed to stop activity capture ${e}`, t));
}
function O(e, t) {
    let { sound: n, frameRate: i } = t;
    P()
        ?.update(e, { audio: n, maxFrameRate: i })
        .catch((t) => y.warn(`Failed to update activity capture ${e}`, t));
}
function L() {
    let e = null != E && T.has(E);
    e !== R &&
        ((R = e),
        r.h.dispatch({
            type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
            context: g.x.STREAM,
            videoState: e ? h.uPF.PAUSED : h.uPF.PLAYING,
        }));
}
function U(e) {
    let t = S.get(e);
    null != t && (clearTimeout(t), S.delete(e));
}
function V(e) {
    S.has(e) && (U(e), w.add(e));
}
(r.h.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", (e) => {
    let { settings: t } = e;
    if (t?.context != null && t.context !== g.x.STREAM) return;
    let n = t?.desktopSettings?.sourceId,
        a = `${i.fS.ACTIVITY}:`,
        r = n?.startsWith(a) ? n.slice(a.length) : null;
    if (null != r && w.delete(r)) {
        (y.warn(`Activity capture ${r} stopped before the stream picked it up`),
            setTimeout(() => (0, m.A)(s.A.getCurrentUserActiveStream())));
        return;
    }
    let l = { sound: t?.desktopSettings?.sound, frameRate: t?.qualityOptions?.frameRate };
    if (null != r && S.has(r)) {
        (null != E && E !== r && M(E), (E = r), U(r), O(r, l), setTimeout(L));
        return;
    }
    null != r && r === E ? O(r, l) : null != E && n !== `${i.fS.ACTIVITY}:${E}` && (M(E), (E = null), setTimeout(L));
}),
    P()?.onStopped((e, t) => {
        (y.info(`Activity capture ${e} stopped: ${t}`), T.delete(e), e === E ? (E = null) : V(e));
    }),
    P()?.onPausedChanged((e, t) => {
        (y.info(`Activity capture ${e} ${t ? "paused" : "resumed"}`), t ? T.add(e) : T.delete(e), L());
    }),
    n.d(
        t,
        {},
        {
            En: async function (e, t) {
                let n = D(e),
                    i = null != n ? F(n, t, 2e3) : null;
                if (null == i) return null;
                try {
                    return URL.createObjectURL(await i);
                } catch (e) {
                    return (y.warn("Failed to capture activity preview", e), null);
                }
            },
            K4: b,
            YX: function () {
                let e = (function () {
                    let e,
                        t,
                        n = l.Ay.getCurrentEmbeddedActivity(),
                        i = null != n ? (0, u.XZ)(n.applicationId) : null;
                    if (null != n && null != i) return { applicationId: n.applicationId, iframeId: i };
                    for (let i of ((e = f.Ay.getVoiceChannelId()),
                    (t = f.Ay.getChannelId()),
                    [
                        d.A.getMainFrame(),
                        ...(null != e ? d.A.getFramesForChannel(e) : []),
                        ...(null != t && t !== e ? d.A.getFramesForChannel(t) : []),
                    ]
                        .map(A.ny)
                        .filter((e) => null != e)))
                        if ((null == n || i.applicationId === n.applicationId) && null != i.data.iframeId)
                            return { applicationId: i.applicationId, iframeId: i.data.iframeId };
                    return null;
                })();
                if (null == e) return null;
                let t = o.A.getApplication(e.applicationId);
                return {
                    id: `${I}${e.iframeId}`,
                    name: t?.name ?? "",
                    url: t?.getIconURL(256) ?? "",
                    icon: t?.getIconURL(64) ?? void 0,
                };
            },
            sV: function () {
                return (_ ??= P()?.canCaptureStream?.() === !0) && p.Ay.supports(g.O5.ACTIVITY_CAPTURE);
            },
            uO: async function (e, t) {
                let n = D(e),
                    i = null != n ? F(n, t, 500) : null;
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
            },
            ys: async function (e, t) {
                let n,
                    { audio: a, maxFrameRate: r } = t,
                    l = P();
                if (null == l || !b(e)) return null;
                let u = ++v;
                try {
                    ({ captureId: n } = await l.captureStream({
                        frameId: e.id.slice(I.length),
                        audio: a,
                        maxFrameRate: r,
                    }));
                } catch (e) {
                    return (y.warn("Failed to start activity capture", e), null);
                }
                return u < C
                    ? (M(n), null)
                    : ((C = u),
                      S.set(
                          n,
                          window.setTimeout(() => {
                              (y.warn(`Activity capture ${n} was never picked up by a stream`), V(n), M(n));
                          }, 15e3),
                      ),
                      { ...e, id: `${i.fS.ACTIVITY}:${n}` });
            },
        },
    ));

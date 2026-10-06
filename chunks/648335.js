(n.r(t),
    n.d(t, {
        promoteFrame: () => m,
        launchFrame: () => I,
        resetFrameLayoutModes: () => C,
        demoteMainFrame: () => T,
        refreshProxyTicket: () => D,
        attachFrameIframe: () => O,
        attachFrameHostWindow: () => L,
        detachFrameHostWindow: () => y,
        setFramePrefersPictureInPictureOnNavigateAway: () => S,
        detachFrameIframe: () => R,
        updateFrameLayoutMode: () => g,
        updateFramePanelMode: () => N,
        clearMainFrameSlot: () => p,
    }));
var i = n(73153),
    r = n(795816),
    a = n(950803),
    s = n(574152),
    l = n(933958);
function o() {
    let e = l.Ay.getCurrentEmbeddedActivity();
    null != e && (0, s.A)().leaveActivity({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
}
var d = n(91242),
    c = n(991690),
    u = n(823809),
    _ = n(734057);
function E(e) {
    if (e.type === c.U.APP_CHANNEL && null != e.channelId) {
        let t = _.A.getChannel(e.channelId);
        if (null != t && (0, u.sq)(t.type, t.topic_)) return c.U.MAIN;
    }
    return e.type;
}
var A = n(580954),
    h = n(165610),
    f = n(5867);
async function I(e) {
    let { applicationId: t, surface: n, customId: l, referrerId: c, analyticsContext: u, hostWindowKey: _ } = e,
        A = (0, h.VA)(t, n),
        f = d.A.getFrame(A);
    if (null != f) return (f.intent === h.sV.MAIN && (m(A), g({ frameId: A, layoutMode: h.y0.FOCUSED })), A);
    ((0, h.Yf)(n) === h.sV.MAIN && (o(), p()),
        i.h.dispatch({ type: "FRAME_LAUNCH_START", applicationId: t, frameId: A, surface: n }));
    try {
        let e = await (0, r.D2)(t, (0, h.h)(n), E(n));
        return (
            i.h.dispatch({
                type: "FRAME_LAUNCH",
                applicationId: t,
                frameId: A,
                surface: n,
                proxyTicket: e,
                customId: l,
                referrerId: c,
                analyticsContext: u,
                hostWindowKey: _,
            }),
            A
        );
    } catch (r) {
        let e = (0, s.A)(),
            n = await (0, a.f)(r, t);
        throw (
            e.showLaunchErrorModal(n.message),
            i.h.dispatch({ type: "FRAME_LAUNCH_FAIL", applicationId: t, frameId: A, error: r, analyticsContext: u }),
            r
        );
    }
}
function p() {
    let e = d.A.getMainFrame();
    null != e && (e.intent === h.sV.MAIN ? (0, A.A)().leaveFrame(e.id) : T(e.id));
}
function T(e) {
    d.A.getMainFrame()?.id === e && (C(e), i.h.dispatch({ type: "FRAME_CLEAR_MAIN_SLOT", frameId: e }));
}
function m(e) {
    null != d.A.getFrame(e) &&
        d.A.getMainFrame()?.id !== e &&
        (o(), p(), i.h.dispatch({ type: "FRAME_PROMOTE", frameId: e }));
}
function g(e) {
    let { frameId: t, layoutMode: n } = e,
        r = d.A.getFrame(t);
    null != r &&
        i.h.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: r.applicationId, frameId: t, layoutMode: n });
}
function S(e, t) {
    i.h.dispatch({ type: "FRAME_SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY", frameId: e, enabled: t });
}
function N(e, t) {
    i.h.dispatch({ type: "FRAME_SET_PANEL_MODE", frameId: e, activityPanelMode: t });
}
function C(e) {
    (g({ frameId: e, layoutMode: h.y0.FOCUSED }), N(e, f.Gd.PANEL));
}
function O(e, t) {
    i.h.dispatch({ type: "FRAME_IFRAME_MOUNT", frameId: e, iframeId: t });
}
function R(e, t) {
    i.h.dispatch({ type: "FRAME_IFRAME_UNMOUNT", frameId: e, iframeId: t });
}
function L(e, t) {
    i.h.dispatch({ type: "FRAME_HOST_WINDOW_MOUNT", frameId: e, windowKey: t });
}
function y(e, t) {
    i.h.dispatch({ type: "FRAME_HOST_WINDOW_UNMOUNT", frameId: e, windowKey: t });
}
async function D(e) {
    let t = d.A.getFrame(e);
    if (null == t) return !1;
    let { applicationId: n, surface: l } = t;
    i.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: n, frameId: e, refreshing: !0 });
    try {
        let t = await (0, r.D2)(n, (0, h.h)(l), E(l));
        i.h.dispatch({ type: "FRAME_UPDATE_PROXY_TICKET", applicationId: n, frameId: e, proxyTicket: t });
    } catch (i) {
        let e = (0, s.A)(),
            t = await (0, a.f)(i, n);
        return (e.showLaunchErrorModal(t.message), !1);
    } finally {
        i.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: n, frameId: e, refreshing: !1 });
    }
    return !0;
}

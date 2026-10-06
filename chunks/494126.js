(n.r(t),
    n.d(t, {
        promoteFrame: () => I,
        launchFrame: () => A,
        resetFrameLayoutModes: () => g,
        demoteMainFrame: () => f,
        refreshProxyTicket: () => R,
        attachFrameIframe: () => S,
        attachFrameHostWindow: () => C,
        detachFrameHostWindow: () => O,
        setFramePrefersPictureInPictureOnNavigateAway: () => T,
        detachFrameIframe: () => N,
        updateFrameLayoutMode: () => p,
        updateFramePanelMode: () => m,
        clearMainFrameSlot: () => h,
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
    c = n(297878),
    u = n(580954),
    _ = n(165610),
    E = n(5867);
async function A(e) {
    let { applicationId: t, surface: n, customId: l, referrerId: u, analyticsContext: E, hostWindowKey: A } = e,
        f = (0, _.VA)(t, n),
        T = d.A.getFrame(f);
    if (null != T) return (T.intent === _.sV.MAIN && (I(f), p({ frameId: f, layoutMode: _.y0.FOCUSED })), f);
    ((0, _.Yf)(n) === _.sV.MAIN && (o(), h()),
        i.h.dispatch({ type: "FRAME_LAUNCH_START", applicationId: t, frameId: f, surface: n }));
    try {
        let e = await (0, r.D2)(t, (0, _.h)(n), (0, c.A)(n));
        return (
            i.h.dispatch({
                type: "FRAME_LAUNCH",
                applicationId: t,
                frameId: f,
                surface: n,
                proxyTicket: e,
                customId: l,
                referrerId: u,
                analyticsContext: E,
                hostWindowKey: A,
            }),
            f
        );
    } catch (r) {
        let e = (0, s.A)(),
            n = await (0, a.f)(r, t);
        throw (
            e.showLaunchErrorModal(n.message),
            i.h.dispatch({ type: "FRAME_LAUNCH_FAIL", applicationId: t, frameId: f, error: r, analyticsContext: E }),
            r
        );
    }
}
function h() {
    let e = d.A.getMainFrame();
    null != e && (e.intent === _.sV.MAIN ? (0, u.A)().leaveFrame(e.id) : f(e.id));
}
function f(e) {
    d.A.getMainFrame()?.id === e && (g(e), i.h.dispatch({ type: "FRAME_CLEAR_MAIN_SLOT", frameId: e }));
}
function I(e) {
    null != d.A.getFrame(e) &&
        d.A.getMainFrame()?.id !== e &&
        (o(), h(), i.h.dispatch({ type: "FRAME_PROMOTE", frameId: e }));
}
function p(e) {
    let { frameId: t, layoutMode: n } = e,
        r = d.A.getFrame(t);
    null != r &&
        i.h.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: r.applicationId, frameId: t, layoutMode: n });
}
function T(e, t) {
    i.h.dispatch({ type: "FRAME_SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY", frameId: e, enabled: t });
}
function m(e, t) {
    i.h.dispatch({ type: "FRAME_SET_PANEL_MODE", frameId: e, activityPanelMode: t });
}
function g(e) {
    (p({ frameId: e, layoutMode: _.y0.FOCUSED }), m(e, E.Gd.PANEL));
}
function S(e, t) {
    i.h.dispatch({ type: "FRAME_IFRAME_MOUNT", frameId: e, iframeId: t });
}
function N(e, t) {
    i.h.dispatch({ type: "FRAME_IFRAME_UNMOUNT", frameId: e, iframeId: t });
}
function C(e, t) {
    i.h.dispatch({ type: "FRAME_HOST_WINDOW_MOUNT", frameId: e, windowKey: t });
}
function O(e, t) {
    i.h.dispatch({ type: "FRAME_HOST_WINDOW_UNMOUNT", frameId: e, windowKey: t });
}
async function R(e) {
    let t = d.A.getFrame(e);
    if (null == t) return !1;
    let { applicationId: n, surface: l } = t;
    i.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: n, frameId: e, refreshing: !0 });
    try {
        let t = await (0, r.D2)(n, (0, _.h)(l), (0, c.A)(l));
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

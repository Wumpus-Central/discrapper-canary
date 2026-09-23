(n.r(t),
    n.d(t, {
        promoteFrame: () => I,
        launchFrame: () => E,
        resetFrameLayoutModes: () => m,
        demoteMainFrame: () => h,
        refreshProxyTicket: () => O,
        attachFrameIframe: () => g,
        attachFrameHostWindow: () => N,
        detachFrameHostWindow: () => C,
        setFramePrefersPictureInPictureOnNavigateAway: () => p,
        detachFrameIframe: () => S,
        updateFrameLayoutMode: () => f,
        updateFramePanelMode: () => T,
        clearMainFrameSlot: () => A,
    }));
var i = n(228366),
    r = n(795816),
    a = n(907645),
    s = n(574152),
    l = n(933958);
function o() {
    let e = l.Ay.getCurrentEmbeddedActivity();
    null != e && (0, s.A)().leaveActivity({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
}
var d = n(91242),
    c = n(580954),
    u = n(165610),
    _ = n(5867);
async function E(e) {
    let { applicationId: t, surface: n, customId: l, referrerId: c, analyticsContext: _, hostWindowKey: E } = e,
        h = (0, u.VA)(t, n),
        p = d.A.getFrame(h);
    if (null != p) return (p.intent === u.sV.MAIN && (I(h), f({ frameId: h, layoutMode: u.y0.FOCUSED })), h);
    ((0, u.Yf)(n) === u.sV.MAIN && (o(), A()),
        i.h.dispatch({ type: "FRAME_LAUNCH_START", applicationId: t, frameId: h, surface: n }));
    try {
        let e = await (0, r.D2)(t, (0, u.h)(n));
        return (
            i.h.dispatch({
                type: "FRAME_LAUNCH",
                applicationId: t,
                frameId: h,
                surface: n,
                proxyTicket: e,
                customId: l,
                referrerId: c,
                analyticsContext: _,
                hostWindowKey: E,
            }),
            h
        );
    } catch (r) {
        let e = (0, s.A)(),
            n = await (0, a.f)(r, t);
        throw (
            e.showLaunchErrorModal(n.message),
            i.h.dispatch({ type: "FRAME_LAUNCH_FAIL", applicationId: t, frameId: h, error: r, analyticsContext: _ }),
            r
        );
    }
}
function A() {
    let e = d.A.getMainFrame();
    null != e && (e.intent === u.sV.MAIN ? (0, c.A)().leaveFrame(e.id) : h(e.id));
}
function h(e) {
    d.A.getMainFrame()?.id === e && (m(e), i.h.dispatch({ type: "FRAME_CLEAR_MAIN_SLOT", frameId: e }));
}
function I(e) {
    null != d.A.getFrame(e) &&
        d.A.getMainFrame()?.id !== e &&
        (o(), A(), i.h.dispatch({ type: "FRAME_PROMOTE", frameId: e }));
}
function f(e) {
    let { frameId: t, layoutMode: n } = e,
        r = d.A.getFrame(t);
    null != r &&
        i.h.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: r.applicationId, frameId: t, layoutMode: n });
}
function p(e, t) {
    i.h.dispatch({ type: "FRAME_SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY", frameId: e, enabled: t });
}
function T(e, t) {
    i.h.dispatch({ type: "FRAME_SET_PANEL_MODE", frameId: e, activityPanelMode: t });
}
function m(e) {
    (f({ frameId: e, layoutMode: u.y0.FOCUSED }), T(e, _.Gd.PANEL));
}
function g(e, t) {
    i.h.dispatch({ type: "FRAME_IFRAME_MOUNT", frameId: e, iframeId: t });
}
function S(e, t) {
    i.h.dispatch({ type: "FRAME_IFRAME_UNMOUNT", frameId: e, iframeId: t });
}
function N(e, t) {
    i.h.dispatch({ type: "FRAME_HOST_WINDOW_MOUNT", frameId: e, windowKey: t });
}
function C(e, t) {
    i.h.dispatch({ type: "FRAME_HOST_WINDOW_UNMOUNT", frameId: e, windowKey: t });
}
async function O(e) {
    let t = d.A.getFrame(e);
    if (null == t) return !1;
    let { applicationId: n, surface: l } = t;
    i.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: n, frameId: e, refreshing: !0 });
    try {
        let t = await (0, r.D2)(n, (0, u.h)(l));
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

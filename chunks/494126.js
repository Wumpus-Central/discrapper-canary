(n.r(t),
    n.d(t, {
        promoteFrame: () => p,
        launchFrame: () => h,
        resetFrameLayoutModes: () => S,
        demoteMainFrame: () => I,
        refreshProxyTicket: () => L,
        attachFrameIframe: () => N,
        attachFrameHostWindow: () => O,
        detachFrameHostWindow: () => R,
        setFramePrefersPictureInPictureOnNavigateAway: () => m,
        detachFrameIframe: () => C,
        updateFrameLayoutMode: () => T,
        updateFramePanelMode: () => g,
        clearMainFrameSlot: () => f,
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
var d = n(197184),
    c = n(91242),
    u = n(297878),
    _ = n(580954),
    E = n(165610),
    A = n(5867);
async function h(e) {
    let { applicationId: t, surface: n, launch: l, analyticsContext: _, hostWindowKey: A, showErrorModal: h = !0 } = e,
        I = (0, E.VA)(t, n),
        m = c.A.getFrame(I);
    if (null != m) return (m.intent === E.sV.MAIN && (p(I), T({ frameId: I, layoutMode: E.y0.FOCUSED })), I);
    ((0, E.Yf)(n) === E.sV.MAIN && (o(), f()),
        i.h.dispatch({ type: "FRAME_LAUNCH_START", applicationId: t, frameId: I, surface: n }));
    try {
        let e = await (0, r.D2)(t, (0, d.A)(n), (0, u.A)(n));
        return (
            i.h.dispatch({
                type: "FRAME_LAUNCH",
                applicationId: t,
                frameId: I,
                surface: n,
                proxyTicket: e,
                analyticsContext: _,
                launch: l ?? {},
                hostWindowKey: A,
            }),
            I
        );
    } catch (e) {
        if (h) {
            let n = (0, s.A)(),
                i = await (0, a.f)(e, t);
            n.showLaunchErrorModal(i.message);
        }
        throw (
            i.h.dispatch({ type: "FRAME_LAUNCH_FAIL", applicationId: t, frameId: I, error: e, analyticsContext: _ }), e
        );
    }
}
function f() {
    let e = c.A.getMainFrame();
    null != e && (e.intent === E.sV.MAIN ? (0, _.A)().leaveFrame(e.id) : I(e.id));
}
function I(e) {
    c.A.getMainFrame()?.id === e && (S(e), i.h.dispatch({ type: "FRAME_CLEAR_MAIN_SLOT", frameId: e }));
}
function p(e) {
    null != c.A.getFrame(e) &&
        c.A.getMainFrame()?.id !== e &&
        (o(), f(), i.h.dispatch({ type: "FRAME_PROMOTE", frameId: e }));
}
function T(e) {
    let { frameId: t, layoutMode: n } = e,
        r = c.A.getFrame(t);
    null != r &&
        i.h.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: r.applicationId, frameId: t, layoutMode: n });
}
function m(e, t) {
    i.h.dispatch({ type: "FRAME_SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY", frameId: e, enabled: t });
}
function g(e, t) {
    i.h.dispatch({ type: "FRAME_SET_PANEL_MODE", frameId: e, activityPanelMode: t });
}
function S(e) {
    (T({ frameId: e, layoutMode: E.y0.FOCUSED }), g(e, A.Gd.PANEL));
}
function N(e, t) {
    i.h.dispatch({ type: "FRAME_IFRAME_MOUNT", frameId: e, iframeId: t });
}
function C(e, t) {
    i.h.dispatch({ type: "FRAME_IFRAME_UNMOUNT", frameId: e, iframeId: t });
}
function O(e, t) {
    i.h.dispatch({ type: "FRAME_HOST_WINDOW_MOUNT", frameId: e, windowKey: t });
}
function R(e, t) {
    i.h.dispatch({ type: "FRAME_HOST_WINDOW_UNMOUNT", frameId: e, windowKey: t });
}
async function L(e) {
    let t = c.A.getFrame(e);
    if (null == t) return !1;
    let { applicationId: n, surface: l } = t;
    i.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: n, frameId: e, refreshing: !0 });
    try {
        let t = await (0, r.D2)(n, (0, d.A)(l), (0, u.A)(l));
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

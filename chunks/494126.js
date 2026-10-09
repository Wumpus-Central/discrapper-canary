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
    r = n(730602),
    a = n(950803),
    s = n(933958),
    l = n(988534);
function o() {
    let e = s.Ay.getCurrentEmbeddedActivity();
    null != e && (0, l.d)({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
}
var d = n(85982),
    c = n(197184),
    u = n(91242),
    _ = n(457827),
    E = n(165610),
    A = n(5867);
async function h(e) {
    let { applicationId: t, surface: n, launch: s, analyticsContext: l, hostWindowKey: _, showErrorModal: A = !0 } = e,
        h = (0, E.VA)(t, n),
        I = u.A.getFrame(h);
    if (null != I) return (I.intent === E.sV.MAIN && (p(h), T({ frameId: h, layoutMode: E.y0.FOCUSED })), h);
    ((0, E.Yf)(n) === E.sV.MAIN && (o(), f()),
        i.h.dispatch({ type: "FRAME_LAUNCH_START", applicationId: t, frameId: h, surface: n, hostWindowKey: _ }));
    try {
        let e = await (0, r.D)(t, (0, c.A)(n), n.type);
        return (
            i.h.dispatch({
                type: "FRAME_LAUNCH",
                applicationId: t,
                frameId: h,
                surface: n,
                proxyTicket: e,
                analyticsContext: l,
                launch: s ?? {},
                hostWindowKey: _,
            }),
            h
        );
    } catch (e) {
        if (A) {
            let n = await (0, a.f)(e, t);
            (0, d.A)(n.message);
        }
        throw (
            i.h.dispatch({ type: "FRAME_LAUNCH_FAIL", applicationId: t, frameId: h, error: e, analyticsContext: l }), e
        );
    }
}
function f() {
    let e = u.A.getMainFrame();
    null != e && (e.intent === E.sV.MAIN ? (0, _.r)(e.id) : I(e.id));
}
function I(e) {
    u.A.getMainFrame()?.id === e && (S(e), i.h.dispatch({ type: "FRAME_CLEAR_MAIN_SLOT", frameId: e }));
}
function p(e) {
    null != u.A.getFrame(e) &&
        u.A.getMainFrame()?.id !== e &&
        (o(), f(), i.h.dispatch({ type: "FRAME_PROMOTE", frameId: e }));
}
function T(e) {
    let { frameId: t, layoutMode: n } = e,
        r = u.A.getFrame(t);
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
    let t = u.A.getFrame(e);
    if (null == t) return !1;
    let { applicationId: n, surface: s } = t;
    i.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: n, frameId: e, refreshing: !0 });
    try {
        let t = await (0, r.D)(n, (0, c.A)(s), s.type);
        i.h.dispatch({ type: "FRAME_UPDATE_PROXY_TICKET", applicationId: n, frameId: e, proxyTicket: t });
    } catch (t) {
        let e = await (0, a.f)(t, n);
        return ((0, d.A)(e.message), !1);
    } finally {
        i.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: n, frameId: e, refreshing: !1 });
    }
    return !0;
}

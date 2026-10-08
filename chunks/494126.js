(n.r(t),
    n.d(t, {
        promoteFrame: () => T,
        launchFrame: () => f,
        resetFrameLayoutModes: () => N,
        demoteMainFrame: () => p,
        refreshProxyTicket: () => y,
        attachFrameIframe: () => C,
        attachFrameHostWindow: () => R,
        detachFrameHostWindow: () => L,
        setFramePrefersPictureInPictureOnNavigateAway: () => g,
        detachFrameIframe: () => O,
        updateFrameLayoutMode: () => m,
        updateFramePanelMode: () => S,
        clearMainFrameSlot: () => I,
    }));
var i = n(73153),
    r = n(795816),
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
    E = n(297878),
    A = n(165610),
    h = n(5867);
async function f(e) {
    let { applicationId: t, surface: n, launch: s, analyticsContext: l, hostWindowKey: _, showErrorModal: h = !0 } = e,
        f = (0, A.VA)(t, n),
        p = u.A.getFrame(f);
    if (null != p) return (p.intent === A.sV.MAIN && (T(f), m({ frameId: f, layoutMode: A.y0.FOCUSED })), f);
    ((0, A.Yf)(n) === A.sV.MAIN && (o(), I()),
        i.h.dispatch({ type: "FRAME_LAUNCH_START", applicationId: t, frameId: f, surface: n, hostWindowKey: _ }));
    try {
        let e = await (0, r.D2)(t, (0, c.A)(n), (0, E.A)(n));
        return (
            i.h.dispatch({
                type: "FRAME_LAUNCH",
                applicationId: t,
                frameId: f,
                surface: n,
                proxyTicket: e,
                analyticsContext: l,
                launch: s ?? {},
                hostWindowKey: _,
            }),
            f
        );
    } catch (e) {
        if (h) {
            let n = await (0, a.f)(e, t);
            (0, d.A)(n.message);
        }
        throw (
            i.h.dispatch({ type: "FRAME_LAUNCH_FAIL", applicationId: t, frameId: f, error: e, analyticsContext: l }), e
        );
    }
}
function I() {
    let e = u.A.getMainFrame();
    null != e && (e.intent === A.sV.MAIN ? (0, _.r)(e.id) : p(e.id));
}
function p(e) {
    u.A.getMainFrame()?.id === e && (N(e), i.h.dispatch({ type: "FRAME_CLEAR_MAIN_SLOT", frameId: e }));
}
function T(e) {
    null != u.A.getFrame(e) &&
        u.A.getMainFrame()?.id !== e &&
        (o(), I(), i.h.dispatch({ type: "FRAME_PROMOTE", frameId: e }));
}
function m(e) {
    let { frameId: t, layoutMode: n } = e,
        r = u.A.getFrame(t);
    null != r &&
        i.h.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: r.applicationId, frameId: t, layoutMode: n });
}
function g(e, t) {
    i.h.dispatch({ type: "FRAME_SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY", frameId: e, enabled: t });
}
function S(e, t) {
    i.h.dispatch({ type: "FRAME_SET_PANEL_MODE", frameId: e, activityPanelMode: t });
}
function N(e) {
    (m({ frameId: e, layoutMode: A.y0.FOCUSED }), S(e, h.Gd.PANEL));
}
function C(e, t) {
    i.h.dispatch({ type: "FRAME_IFRAME_MOUNT", frameId: e, iframeId: t });
}
function O(e, t) {
    i.h.dispatch({ type: "FRAME_IFRAME_UNMOUNT", frameId: e, iframeId: t });
}
function R(e, t) {
    i.h.dispatch({ type: "FRAME_HOST_WINDOW_MOUNT", frameId: e, windowKey: t });
}
function L(e, t) {
    i.h.dispatch({ type: "FRAME_HOST_WINDOW_UNMOUNT", frameId: e, windowKey: t });
}
async function y(e) {
    let t = u.A.getFrame(e);
    if (null == t) return !1;
    let { applicationId: n, surface: s } = t;
    i.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: n, frameId: e, refreshing: !0 });
    try {
        let t = await (0, r.D2)(n, (0, c.A)(s), (0, E.A)(s));
        i.h.dispatch({ type: "FRAME_UPDATE_PROXY_TICKET", applicationId: n, frameId: e, proxyTicket: t });
    } catch (t) {
        let e = await (0, a.f)(t, n);
        return ((0, d.A)(e.message), !1);
    } finally {
        i.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: n, frameId: e, refreshing: !1 });
    }
    return !0;
}

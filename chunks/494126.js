(n.r(t),
    n.d(t, {
        promoteFrame: () => m,
        launchFrame: () => I,
        resetFrameLayoutModes: () => O,
        demoteMainFrame: () => T,
        refreshProxyTicket: () => v,
        attachFrameIframe: () => R,
        attachFrameHostWindow: () => y,
        detachFrameHostWindow: () => D,
        setFrameUserMuted: () => N,
        detachFrameIframe: () => L,
        setFrameRunsInBackground: () => S,
        updateFrameLayoutMode: () => g,
        updateFramePanelMode: () => C,
        clearMainFrameSlot: () => p,
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
    c = n(982844),
    u = n(197184),
    _ = n(91242),
    E = n(457827),
    A = n(165610),
    h = n(5867);
let f = 0;
async function I(e) {
    let {
            applicationId: t,
            surface: n,
            launch: s,
            analyticsContext: l,
            hostWindowKey: E,
            showErrorModal: h = !0,
            invite: I,
        } = e,
        T = (0, A.VA)(t, n),
        S = _.A.getFrame(T);
    if (null != S) return (S.intent === A.sV.MAIN && (m(T), g({ frameId: T, layoutMode: A.y0.FOCUSED })), T);
    (0, A.Yf)(n) === A.sV.MAIN && (o(), p());
    let N = ++f;
    i.h.dispatch({
        type: "FRAME_LAUNCH_START",
        applicationId: t,
        frameId: T,
        surface: n,
        hostWindowKey: E,
        launch: s,
        invite: I,
        launchRequestId: N,
    });
    try {
        let [e] = await Promise.all([(0, r.D2)(t, (0, u.A)(n), n.type, I), (0, c.A)(t)]);
        return (
            i.h.dispatch({
                type: "FRAME_LAUNCH",
                applicationId: t,
                frameId: T,
                surface: n,
                proxyTicket: e,
                analyticsContext: l,
                launch: s ?? {},
                invite: I,
                hostWindowKey: E,
                launchRequestId: N,
            }),
            T
        );
    } catch (e) {
        if (h) {
            let n = await (0, a.f)(e, t);
            (0, d.A)(n.message);
        }
        throw (
            i.h.dispatch({
                type: "FRAME_LAUNCH_FAIL",
                applicationId: t,
                frameId: T,
                launchRequestId: N,
                error: e,
                analyticsContext: l,
            }),
            e
        );
    }
}
function p() {
    let e = _.A.getMainFrame();
    null != e && (e.intent === A.sV.MAIN ? (0, E.r)(e.id) : T(e.id));
}
function T(e) {
    _.A.getMainFrame()?.id === e && (O(e), i.h.dispatch({ type: "FRAME_CLEAR_MAIN_SLOT", frameId: e }));
}
function m(e) {
    null != _.A.getFrame(e) &&
        _.A.getMainFrame()?.id !== e &&
        (o(), p(), i.h.dispatch({ type: "FRAME_PROMOTE", frameId: e }));
}
function g(e) {
    let { frameId: t, layoutMode: n } = e,
        r = _.A.getFrame(t);
    null != r &&
        i.h.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: r.applicationId, frameId: t, layoutMode: n });
}
function S(e, t) {
    i.h.dispatch({ type: "FRAME_SET_RUNS_IN_BACKGROUND", frameId: e, enabled: t });
}
function N(e, t) {
    i.h.dispatch({ type: "FRAME_SET_USER_MUTED", frameId: e, muted: t });
}
function C(e, t) {
    i.h.dispatch({ type: "FRAME_SET_PANEL_MODE", frameId: e, activityPanelMode: t });
}
function O(e) {
    (g({ frameId: e, layoutMode: A.y0.FOCUSED }), C(e, h.Gd.PANEL));
}
function R(e, t) {
    i.h.dispatch({ type: "FRAME_IFRAME_MOUNT", frameId: e, iframeId: t });
}
function L(e, t) {
    i.h.dispatch({ type: "FRAME_IFRAME_UNMOUNT", frameId: e, iframeId: t });
}
function y(e, t) {
    i.h.dispatch({ type: "FRAME_HOST_WINDOW_MOUNT", frameId: e, windowKey: t });
}
function D(e, t) {
    i.h.dispatch({ type: "FRAME_HOST_WINDOW_UNMOUNT", frameId: e, windowKey: t });
}
async function v(e) {
    let t = _.A.getFrame(e);
    if (null == t) return !1;
    let { applicationId: n, surface: s } = t,
        l = (0, A.x1)(t) ? t.data.invite : t.invite;
    i.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: n, frameId: e, refreshing: !0 });
    try {
        let t = await (0, r.D2)(n, (0, u.A)(s), s.type, l);
        i.h.dispatch({ type: "FRAME_UPDATE_PROXY_TICKET", applicationId: n, frameId: e, proxyTicket: t });
    } catch (t) {
        let e = await (0, a.f)(t, n);
        return ((0, d.A)(e.message), !1);
    } finally {
        i.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: n, frameId: e, refreshing: !1 });
    }
    return !0;
}

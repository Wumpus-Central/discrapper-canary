(n.r(t),
    n.d(t, {
        attachFrameHostWindow: () => P,
        attachFrameIframe: () => b,
        clearMainFrameSlot: () => g,
        demoteMainFrame: () => T,
        detachFrameHostWindow: () => M,
        detachFrameIframe: () => v,
        launchFrame: () => m,
        promoteFrame: () => S,
        refreshProxyTicket: () => U,
        resetFrameGuestClaims: () => R,
        resetFrameLayoutModes: () => D,
        setFramePictureInPictureInteractive: () => O,
        setFrameRunsInBackground: () => C,
        setFrameUserMuted: () => L,
        updateFrameLayoutMode: () => N,
        updateFramePanelMode: () => y,
    }));
var i = n(73153),
    r = n(730602),
    a = n(872142),
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
    E = n(105790),
    A = n(182025),
    f = n(534645),
    h = n(165610),
    I = n(5867);
let p = 0;
async function m(e) {
    let {
            applicationId: t,
            surface: n,
            launch: s,
            analyticsContext: l,
            hostWindowKey: _,
            showErrorModal: I = !0,
            invite: m,
        } = e,
        T = (0, h.VA)(t, n),
        C = u.A.getFrame(T);
    if (null != C) {
        let e = (0, E.zN)(T);
        return (
            null == e && (e = (0, E.U)(A.cu.LAUNCH_FRAME, T, t, n)),
            e.finish({ type: A.Vj.REUSED }),
            C.intent === h.sV.MAIN && (S(T), N({ frameId: T, layoutMode: h.y0.FOCUSED })),
            T
        );
    }
    (0, h.Yf)(n) === h.sV.MAIN && (o(), g());
    let O = (0, E.U)(A.cu.LAUNCH_FRAME, T, t, n),
        R = ++p;
    i.h.dispatch({
        type: "FRAME_LAUNCH_START",
        applicationId: t,
        frameId: T,
        surface: n,
        hostWindowKey: _,
        launch: s,
        invite: m,
        launchRequestId: R,
    });
    try {
        let e = O.span(A.aY.PROXY_TICKET, async (e) => {
                let i = (0, c.V)(n),
                    a = await (0, r.Gt)(t, i, n.type, m);
                return (a.prefetched && e.setStatus(A.xo.PREFETCHED), a.ticket);
            }),
            a = (0, f.U)(O, t),
            [o] = await Promise.all([e, a]);
        return (
            i.h.dispatch({
                type: "FRAME_LAUNCH",
                applicationId: t,
                frameId: T,
                surface: n,
                proxyTicket: o,
                analyticsContext: l,
                launch: s ?? {},
                invite: m,
                hostWindowKey: _,
                launchRequestId: R,
            }),
            T
        );
    } catch (e) {
        if (I) {
            let n = await (0, a.f)(e, t);
            (0, d.A)(n.message);
        }
        throw (
            i.h.dispatch({
                type: "FRAME_LAUNCH_FAIL",
                applicationId: t,
                frameId: T,
                launchRequestId: R,
                error: e,
                analyticsContext: l,
            }),
            e
        );
    }
}
function g() {
    let e = u.A.getMainFrame();
    null != e && (e.intent === h.sV.MAIN ? (0, _.r)(e.id) : T(e.id));
}
function T(e) {
    u.A.getMainFrame()?.id === e && (D(e), i.h.dispatch({ type: "FRAME_CLEAR_MAIN_SLOT", frameId: e }));
}
function S(e) {
    null != u.A.getFrame(e) &&
        u.A.getMainFrame()?.id !== e &&
        (o(), g(), i.h.dispatch({ type: "FRAME_PROMOTE", frameId: e }));
}
function N(e) {
    let { frameId: t, layoutMode: n } = e,
        r = u.A.getFrame(t);
    null != r &&
        i.h.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: r.applicationId, frameId: t, layoutMode: n });
}
function C(e, t) {
    i.h.dispatch({ type: "FRAME_SET_RUNS_IN_BACKGROUND", frameId: e, enabled: t });
}
function O(e, t) {
    i.h.dispatch({ type: "FRAME_SET_PICTURE_IN_PICTURE_INTERACTIVE", frameId: e, enabled: t });
}
function R(e) {
    O(e, !1);
}
function L(e, t) {
    i.h.dispatch({ type: "FRAME_SET_USER_MUTED", frameId: e, muted: t });
}
function y(e, t) {
    i.h.dispatch({ type: "FRAME_SET_PANEL_MODE", frameId: e, activityPanelMode: t });
}
function D(e) {
    (N({ frameId: e, layoutMode: h.y0.FOCUSED }), y(e, I.Gd.PANEL));
}
function b(e, t) {
    i.h.dispatch({ type: "FRAME_IFRAME_MOUNT", frameId: e, iframeId: t });
}
function v(e, t) {
    i.h.dispatch({ type: "FRAME_IFRAME_UNMOUNT", frameId: e, iframeId: t });
}
function P(e, t) {
    i.h.dispatch({ type: "FRAME_HOST_WINDOW_MOUNT", frameId: e, windowKey: t });
}
function M(e, t) {
    i.h.dispatch({ type: "FRAME_HOST_WINDOW_UNMOUNT", frameId: e, windowKey: t });
}
async function U(e) {
    let t = u.A.getFrame(e);
    if (null == t) return !1;
    let { applicationId: n, surface: s } = t,
        l = (0, h.x1)(t) ? t.data.invite : t.invite;
    i.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: n, frameId: e, refreshing: !0 });
    try {
        let t = await (0, r.D2)(n, (0, c.V)(s), s.type, l);
        i.h.dispatch({ type: "FRAME_UPDATE_PROXY_TICKET", applicationId: n, frameId: e, proxyTicket: t });
    } catch (t) {
        let e = await (0, a.f)(t, n);
        return ((0, d.A)(e.message), !1);
    } finally {
        i.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: n, frameId: e, refreshing: !1 });
    }
    return !0;
}

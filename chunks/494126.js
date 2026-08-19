"use strict";
n.r(t),
    n.d(t, {
        clearMainFrameSlot: () => A,
        launchFrame: () => E,
        resetFrameLayoutModes: () => T,
        refreshProxyTicket: () => S,
        attachFrameIframe: () => m,
        updateFrameLayoutMode: () => I,
        setFramePrefersPictureInPictureOnNavigateAway: () => f,
        detachFrameIframe: () => g,
        updateFramePanelMode: () => p,
        promoteFrame: () => h,
    });
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
    let { applicationId: t, surface: n } = e,
        l = (0, u.VA)(t, n),
        c = d.A.getFrame(l);
    if (null != c) return c.intent === u.sV.MAIN && I({ frameId: l, layoutMode: u.y0.FOCUSED }), l;
    (0, u.Yf)(n) === u.sV.MAIN && (o(), A()),
        i.h.dispatch({ type: "FRAME_LAUNCH_START", applicationId: t, frameId: l, surface: n });
    try {
        let e = await (0, r.D2)(t, (0, u.h)(n));
        return i.h.dispatch({ type: "FRAME_LAUNCH", applicationId: t, frameId: l, surface: n, proxyTicket: e }), l;
    } catch (r) {
        let e = (0, s.A)(),
            n = await (0, a.f)(r, t);
        throw (
            (e.showLaunchErrorModal(n.message),
            i.h.dispatch({ type: "FRAME_LAUNCH_FAIL", applicationId: t, frameId: l, error: r }),
            r)
        );
    }
}
function A() {
    let e = d.A.getMainFrame();
    null != e &&
        (e.intent === u.sV.MAIN
            ? (0, c.A)().leaveFrame(e.id)
            : (T(e.id), i.h.dispatch({ type: "FRAME_CLEAR_MAIN_SLOT", frameId: e.id })));
}
function h(e) {
    null != d.A.getFrame(e) &&
        d.A.getMainFrame()?.id !== e &&
        (o(), A(), i.h.dispatch({ type: "FRAME_PROMOTE", frameId: e }));
}
function I(e) {
    let { frameId: t, layoutMode: n } = e,
        r = d.A.getFrame(t);
    null != r &&
        i.h.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: r.applicationId, frameId: t, layoutMode: n });
}
function f(e, t) {
    i.h.dispatch({ type: "FRAME_SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY", frameId: e, enabled: t });
}
function p(e, t) {
    i.h.dispatch({ type: "FRAME_SET_PANEL_MODE", frameId: e, activityPanelMode: t });
}
function T(e) {
    I({ frameId: e, layoutMode: u.y0.FOCUSED }), p(e, _.Gd.PANEL);
}
function m(e, t) {
    i.h.dispatch({ type: "FRAME_IFRAME_MOUNT", frameId: e, iframeId: t });
}
function g(e, t) {
    i.h.dispatch({ type: "FRAME_IFRAME_UNMOUNT", frameId: e, iframeId: t });
}
async function S(e) {
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
        return e.showLaunchErrorModal(t.message), !1;
    } finally {
        i.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: n, frameId: e, refreshing: !1 });
    }
    return !0;
}

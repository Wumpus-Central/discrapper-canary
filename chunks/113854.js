"use strict";
n.d(t, { A: () => O });
var i = {};
n.r(i),
    n.d(i, {
        attachFrameIframe: () => m,
        detachFrameIframe: () => g,
        launchFrame: () => I,
        refreshProxyTicket: () => S,
        stopFrame: () => f,
        updateFrameLayoutMode: () => p,
        updateFramePanelMode: () => T,
    });
var r = n(523527),
    a = n(267102),
    s = n(567249),
    l = n(574172),
    o = n(228366),
    d = n(795816),
    c = n(907645),
    u = n(574152),
    _ = n(933958),
    E = n(582776),
    A = n(91242),
    h = n(165610);
async function I(e) {
    let t,
        { applicationId: n, surface: i } = e,
        r = (0, h.VA)(n, i),
        a = A.A.getFrame(r);
    if (null != a) return a.intent === h.sV.MAIN && p({ frameId: r, layoutMode: h.y0.FOCUSED }), r;
    null != (t = _.Ay.getCurrentEmbeddedActivity()) &&
        (0, u.A)().leaveActivity({ location: t.location, applicationId: t.applicationId, showFeedback: !1 }),
        (0, E.Q)(),
        o.h.dispatch({ type: "FRAME_LAUNCH_START", applicationId: n, frameId: r, surface: i });
    try {
        let e = await (0, d.D2)(n, (0, h.h)(i));
        return o.h.dispatch({ type: "FRAME_LAUNCH", applicationId: n, frameId: r, surface: i, proxyTicket: e }), r;
    } catch (i) {
        let e = (0, u.A)(),
            t = await (0, c.f)(i, n);
        throw (
            (e.showLaunchErrorModal(t.message),
            o.h.dispatch({ type: "FRAME_LAUNCH_FAIL", applicationId: n, frameId: r, error: i }),
            i)
        );
    }
}
function f(e) {
    let t = A.A.getFrame(e);
    null != t && o.h.dispatch({ type: "FRAME_STOP", applicationId: t.applicationId, frameId: e });
}
function p(e) {
    let { frameId: t, layoutMode: n } = e,
        i = A.A.getFrame(t);
    null != i &&
        o.h.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: i.applicationId, frameId: t, layoutMode: n });
}
function T(e) {
    o.h.dispatch({ type: "FRAME_SET_PANEL_MODE", activityPanelMode: e });
}
function m(e, t) {
    o.h.dispatch({ type: "FRAME_IFRAME_MOUNT", frameId: e, iframeId: t });
}
function g(e, t) {
    o.h.dispatch({ type: "FRAME_IFRAME_UNMOUNT", frameId: e, iframeId: t });
}
async function S(e) {
    let t = A.A.getFrame(e);
    if (null == t) return !1;
    let { applicationId: n, surface: i } = t;
    o.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: n, frameId: e, refreshing: !0 });
    try {
        let t = await (0, d.D2)(n, (0, h.h)(i));
        o.h.dispatch({ type: "FRAME_UPDATE_PROXY_TICKET", applicationId: n, frameId: e, proxyTicket: t });
    } catch (i) {
        let e = (0, u.A)(),
            t = await (0, c.f)(i, n);
        return e.showLaunchErrorModal(t.message), !1;
    } finally {
        o.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: n, frameId: e, refreshing: !1 });
    }
    return !0;
}
var N = n(652215);
async function C(e) {
    let t = (0, a.zd)();
    s.A.getWindowOpen(N.MLl.ACTIVITY_POPOUT) && (0, l.close)(N.MLl.ACTIVITY_POPOUT);
    let n = await I(e);
    return t === N.BRT.POPOUT && (0, r.A)(), n;
}
let O = { ...i, launchFrame: C };

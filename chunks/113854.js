"use strict";
n.d(t, { A: () => S });
var i = {};
n.r(i),
    n.d(i, {
        launchFrame: () => h,
        refreshProxyTicket: () => T,
        stopFrame: () => I,
        updateFrameLayoutMode: () => f,
        updateFramePanelMode: () => p,
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
    A = n(91242);
async function h(e) {
    let { applicationId: t, channelId: n } = e;
    o.h.dispatch({ type: "FRAME_LAUNCH_START", applicationId: t });
    try {
        let e,
            i = await (0, d.D2)(t, n);
        (e = _.Ay.getCurrentEmbeddedActivity()),
            null != e &&
                (0, u.A)().leaveActivity({ location: e.location, applicationId: e.applicationId, showFeedback: !1 }),
            (0, E.Q)(),
            o.h.dispatch({ type: "FRAME_LAUNCH", applicationId: t, proxyTicket: i, channelId: n });
    } catch (i) {
        let e = (0, u.A)(),
            n = await (0, c.f)(i, t);
        throw (
            (e.showLaunchErrorModal(n.message),
            o.h.dispatch({ type: "FRAME_LAUNCH_FAIL", applicationId: t, error: i }),
            i)
        );
    }
}
function I(e) {
    let { applicationId: t } = e;
    o.h.dispatch({ type: "FRAME_STOP", applicationId: t });
}
function f(e) {
    let { applicationId: t, layoutMode: n } = e;
    o.h.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: t, layoutMode: n });
}
function p(e) {
    o.h.dispatch({ type: "FRAME_SET_PANEL_MODE", activityPanelMode: e });
}
async function T(e) {
    let { applicationId: t } = e;
    o.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: t, refreshing: !0 });
    try {
        let e = A.A.getConnectedFrame(),
            n = e?.applicationId === t ? e.channelId : void 0,
            i = await (0, d.D2)(t, n);
        o.h.dispatch({ type: "FRAME_UPDATE_PROXY_TICKET", applicationId: t, proxyTicket: i });
    } catch (i) {
        let e = (0, u.A)(),
            n = await (0, c.f)(i, t);
        return e.showLaunchErrorModal(n.message), !1;
    } finally {
        o.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: t, refreshing: !1 });
    }
    return !0;
}
var m = n(652215);
async function g(e) {
    let t = (0, a.zd)();
    s.A.getWindowOpen(m.MLl.ACTIVITY_POPOUT) && (0, l.close)(m.MLl.ACTIVITY_POPOUT),
        await h(e),
        t === m.BRT.POPOUT && (0, r.A)();
}
let S = { ...i, launchFrame: g };

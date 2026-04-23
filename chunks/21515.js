"use strict";
n.r(t),
    n.d(t, {
        launchFrame: () => u,
        refreshProxyTicket: () => f,
        stopFrame: () => c,
        updateFrameLayoutMode: () => d,
        updateFramePanelMode: () => _,
    });
var r = n(73153),
    i = n(795816),
    s = n(907645),
    a = n(574152),
    o = n(989451),
    l = n(448739);
async function u(e) {
    let { applicationId: t } = e;
    r.h.dispatch({ type: "FRAME_LAUNCH_START", applicationId: t });
    try {
        let e = await (0, i.D2)(t);
        (0, o.a)(), (0, l.Q)(), r.h.dispatch({ type: "FRAME_LAUNCH", applicationId: t, proxyTicket: e });
    } catch (i) {
        let e = (0, a.A)(),
            n = await (0, s.f)(i, t);
        throw (
            (e.showLaunchErrorModal(n.message),
            r.h.dispatch({ type: "FRAME_LAUNCH_FAIL", applicationId: t, error: i }),
            i)
        );
    }
}
function c(e) {
    let { applicationId: t } = e;
    r.h.dispatch({ type: "FRAME_STOP", applicationId: t });
}
function d(e) {
    let { applicationId: t, layoutMode: n } = e;
    r.h.dispatch({ type: "FRAME_UPDATE_LAYOUT_MODE", applicationId: t, layoutMode: n });
}
function _(e) {
    r.h.dispatch({ type: "FRAME_SET_PANEL_MODE", activityPanelMode: e });
}
async function f(e) {
    let { applicationId: t } = e;
    r.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: t, refreshing: !0 });
    try {
        let e = await (0, i.D2)(t);
        r.h.dispatch({ type: "FRAME_UPDATE_PROXY_TICKET", applicationId: t, proxyTicket: e });
    } catch (r) {
        let e = (0, a.A)(),
            n = await (0, s.f)(r, t);
        return e.showLaunchErrorModal(n.message), !1;
    } finally {
        r.h.dispatch({ type: "FRAME_SET_PROXY_TICKET_REFRESHING", applicationId: t, refreshing: !1 });
    }
    return !0;
}

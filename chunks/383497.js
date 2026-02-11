"use strict";
n.d(t, { O: () => I });
var r = n(344351),
    i = n(73153),
    a = n(198982),
    s = n(20015),
    o = n(734057),
    l = n(933958),
    u = n(710839),
    c = n(825591),
    d = n(123281),
    _ = n(969151),
    f = n(817636),
    p = n(574152),
    h = n(652215);
async function m(e) {
    let { applicationId: t, channelId: n, guildId: s } = e;
    try {
        return await (0, f.A)(t, n);
    } catch (o) {
        let e = null != s ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        i.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
            nonce: "",
            applicationId: t,
            channelId: n ?? null,
            guildId: s ?? null,
            error: new a.LG(o),
            locationKind: e,
        });
    }
}
async function g(e) {
    let {
        currentEmbeddedApplication: t,
        shouldClosePopoutOnLeaveCurrentEmbeddedApplication: n,
        onConfirmActivityLaunchChecksAlertOpen: r,
    } = e;
    return (
        (null == t ||
            !!(await new Promise((e) => {
                let i = l.Ay.getSelfEmbeddedActivities().get(t.id),
                    a = (0, _.H)(i?.location),
                    s = o.A.getChannel(a);
                null == i || null == s
                    ? e(!0)
                    : (r?.(),
                      (0, c.A)(
                          t,
                          s,
                          () => {
                              (0, p.A)().leaveActivity({
                                  location: i.location,
                                  applicationId: t.id,
                                  shouldClosePopout: n,
                              }),
                                  e(!0);
                          },
                          () => e(!1),
                      ));
            }))) &&
        !0
    );
}
async function E(e) {
    let { application: t, applicationId: n, channel: r, user: i, onConfirmActivityLaunchChecksAlertOpen: a } = e;
    if (null == i.nsfwAllowed) {
        let e = t ?? (await m({ applicationId: n, channelId: r?.id, guildId: r?.getGuildId() ?? void 0 }));
        if (
            null == e ||
            (e.embeddedActivityConfig?.requires_age_gate &&
                !(await new Promise((t) => {
                    a?.(),
                        (0, u.i)({ application: e, channelId: r?.id, onAgree: () => t(!0), onDisagree: () => t(!1) });
                })))
        )
            return !1;
    }
    return !0;
}
async function A(e) {
    let { application: t, applicationId: n, channel: r, onConfirmActivityLaunchChecksAlertOpen: i } = e,
        a = t ?? (await m({ applicationId: n, channelId: r?.id, guildId: r?.getGuildId() ?? void 0 }));
    return (
        null != a &&
        (!!((0, s.n)(a, h.gfo.EMBEDDED_RELEASED) || a.isVerified || l.Ay.hasActivityEverBeenLaunched(n)) ||
            new Promise((e) => {
                i?.(), (0, d.q)({ application: a, onConfirm: () => e(!0), onCancel: () => e(!1) });
            }))
    );
}
async function I(e) {
    return (
        !!(await g({
            currentEmbeddedApplication: e.currentEmbeddedApplication,
            shouldClosePopoutOnLeaveCurrentEmbeddedApplication: e.shouldClosePopoutOnLeaveCurrentEmbeddedApplication,
            onConfirmActivityLaunchChecksAlertOpen: e.onConfirmActivityLaunchChecksAlertOpen,
        })) &&
        !!(await E(e)) &&
        !!(await A(e))
    );
}

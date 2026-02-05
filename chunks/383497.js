"use strict";
n.d(t, { O: () => I }), n(938796);
var r = n(344351),
    i = n(665260),
    a = n(73153),
    s = n(198982),
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
    let { applicationId: t, channelId: n, guildId: i } = e;
    try {
        return await (0, f.A)(t, n);
    } catch (o) {
        let e = null != i ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        a.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
            nonce: "",
            applicationId: t,
            channelId: n ?? null,
            guildId: i ?? null,
            error: new s.LG(o),
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
    let { application: t, applicationId: n, channel: r, onConfirmActivityLaunchChecksAlertOpen: a } = e,
        s = t ?? (await m({ applicationId: n, channelId: r?.id, guildId: r?.getGuildId() ?? void 0 }));
    return (
        null != s &&
        (!!((0, i.Lt)(s.flags, h.gfo.EMBEDDED_RELEASED) || s.isVerified || l.Ay.hasActivityEverBeenLaunched(n)) ||
            new Promise((e) => {
                a?.(), (0, d.q)({ application: s, onConfirm: () => e(!0), onCancel: () => e(!1) });
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

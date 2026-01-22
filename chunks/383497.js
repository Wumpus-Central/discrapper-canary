n.d(t, {
    O: () => y,
}),
    n(938796);
var r = n(344351),
    i = n(665260),
    a = n(73153),
    s = n(198982),
    o = n(734057),
    l = n(933958),
    c = n(710839),
    u = n(825591),
    d = n(123281),
    f = n(969151),
    p = n(817636),
    _ = n(574152),
    h = n(652215);
async function m(e) {
    let { applicationId: t, channelId: n, guildId: i } = e;
    try {
        return await (0, p.A)(t, n);
    } catch (o) {
        let e = null != i ? r.T.GUILD_CHANNEL : r.T.PRIVATE_CHANNEL;
        a.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
            nonce: "",
            applicationId: t,
            channelId: null != n ? n : null,
            guildId: null != i ? i : null,
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
                    a = (0, f.H)(null == i ? void 0 : i.location),
                    s = o.A.getChannel(a);
                null == i || null == s
                    ? e(!0)
                    : (null == r || r(),
                      (0, u.A)(
                          t,
                          s,
                          () => {
                              (0, _.A)().leaveActivity({
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
        var s, o, l;
        let e =
            null != t
                ? t
                : await m({
                      applicationId: n,
                      channelId: null == r ? void 0 : r.id,
                      guildId: null != (s = null == r ? void 0 : r.getGuildId()) ? s : void 0,
                  });
        if (
            null == e ||
            (null != (o = null == (l = e.embeddedActivityConfig) ? void 0 : l.requires_age_gate) &&
                o &&
                !(await new Promise((t) => {
                    null == a || a(),
                        (0, c.i)({
                            application: e,
                            channelId: null == r ? void 0 : r.id,
                            onAgree: () => t(!0),
                            onDisagree: () => t(!1),
                        });
                })))
        )
            return !1;
    }
    return !0;
}
async function b(e) {
    var t;
    let { application: n, applicationId: r, channel: a, onConfirmActivityLaunchChecksAlertOpen: s } = e,
        o =
            null != n
                ? n
                : await m({
                      applicationId: r,
                      channelId: null == a ? void 0 : a.id,
                      guildId: null != (t = null == a ? void 0 : a.getGuildId()) ? t : void 0,
                  });
    return (
        null != o &&
        (!!((0, i.Lt)(o.flags, h.gfo.EMBEDDED_RELEASED) || o.isVerified || l.Ay.hasActivityEverBeenLaunched(r)) ||
            new Promise((e) => {
                null == s || s(),
                    (0, d.q)({
                        application: o,
                        onConfirm: () => e(!0),
                        onCancel: () => e(!1),
                    });
            }))
    );
}
async function y(e) {
    return (
        !!(await g({
            currentEmbeddedApplication: e.currentEmbeddedApplication,
            shouldClosePopoutOnLeaveCurrentEmbeddedApplication: e.shouldClosePopoutOnLeaveCurrentEmbeddedApplication,
            onConfirmActivityLaunchChecksAlertOpen: e.onConfirmActivityLaunchChecksAlertOpen,
        })) &&
        !!(await E(e)) &&
        !!(await b(e))
    );
}

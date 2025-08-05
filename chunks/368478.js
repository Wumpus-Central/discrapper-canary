(n.d(t, {
    J: () => E,
    Z: () => g
}),
    n(388685),
    n(997841));
var r = n(73800),
    i = n(442837),
    a = n(317381),
    o = n(122613),
    s = n(16609),
    l = n(574952),
    c = n(100527),
    u = n(906732),
    d = n(783097),
    f = n(895924),
    _ = n(812236),
    p = n(630388),
    h = n(981631),
    m = n(388032);
function g(e) {
    let { context: t, primaryEntryPointCommand: n, application: o, showAppLauncherPopup: l = !1 } = e,
        [f, g] = r.useState(!1),
        E = (0, i.e7)([a.ZP], () => a.ZP.getCurrentEmbeddedActivity()),
        b = l ? m.t.cpT0Cg : m.t['0hKkS0'],
        y = r.useMemo(() => (null != n ? (0, d.XZ)(n.displayName) : m.intl.string(m.t['3xjX0d'])), [n]),
        O = void 0 !== o.flags && (0, p.yE)(o.flags, h.udG.EMBEDDED),
        v = null != E && E.applicationId === o.id && (0, s.p)(E.location) === t.channel.id,
        { analyticsLocations: I } = (0, u.ZP)(c.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON),
        T = null != t.channel.recipients ? t.channel.recipients[0] : void 0;
    return {
        isExecutingLaunchInteraction: f,
        buttonText:
            (0, _.ms)({
                context: t,
                applicationId: o.id,
                botUserId: T
            }) && O
                ? v
                    ? m.intl.string(m.t['Hi1/aW'])
                    : null != y
                      ? y
                      : m.intl.string(m.t.zKX8Nj)
                : m.intl.string(b),
        hasActiveMatchingEmbeddedActivity: v,
        isEmbeddedApp: O,
        currentEmbeddedActivity: E,
        channelRecipientUserId: T,
        setIsExecutingLaunchInteraction: g,
        analyticsLocations: I
    };
}
function E(e) {
    let { context: t, application: n, isEmbeddedApp: i, hasActiveMatchingEmbeddedActivity: a, currentEmbeddedActivity: s, onOpenButtonPress: c, channelRecipientUserId: u, setIsExecutingLaunchInteraction: d, analyticsLocations: p } = e,
        h =
            (0, _.ms)({
                context: t,
                applicationId: n.id,
                botUserId: u
            }) && i,
        m = r.useCallback(() => {
            a && null != s
                ? (0, l.Z)().leaveActivity({
                      location: s.location,
                      applicationId: s.applicationId
                  })
                : (d(!0),
                  (0, o.Z)({
                      targetApplicationId: n.id,
                      channelId: t.channel.id,
                      analyticsLocations: p,
                      onExecutedCallback: () => {
                          d(!1);
                      },
                      commandOrigin: f.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON
                  }));
        }, [a, t.channel.id, n.id, s, p, d]);
    return h ? m : c;
}

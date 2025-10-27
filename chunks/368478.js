n.d(t, {
    J: () => C,
    Z: () => b,
}),
    n(388685),
    n(997841);
var i = n(647438),
    r = n(442837),
    l = n(317381),
    a = n(122613),
    o = n(16609),
    s = n(574952),
    c = n(100527),
    u = n(906732),
    d = n(783097),
    p = n(895924),
    h = n(812236),
    f = n(630388),
    m = n(981631),
    g = n(388032);
function b(e) {
    let { context: t, primaryEntryPointCommand: n, application: a, showAppLauncherPopup: s = !1 } = e,
        [p, b] = i.useState(!1),
        C = (0, r.e7)([l.ZP], () => l.ZP.getCurrentEmbeddedActivity()),
        y = s ? g.t.cpT0Cq : g.t["0hKkS+"],
        _ = i.useMemo(() => (null != n ? (0, d.XZ)(n.displayName) : g.intl.string(g.t["3xjX0U"])), [n]),
        v = void 0 !== a.flags && (0, f.yE)(a.flags, m.udG.EMBEDDED),
        x = null != C && C.applicationId === a.id && (0, o.p)(C.location) === t.channel.id,
        { analyticsLocations: O } = (0, u.ZP)(c.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON),
        j = null != t.channel.recipients ? t.channel.recipients[0] : void 0;
    return {
        isExecutingLaunchInteraction: p,
        buttonText:
            (0, h.ms)({
                context: t,
                applicationId: a.id,
                botUserId: j,
            }) && v
                ? x
                    ? g.intl.string(g.t["Hi1/aQ"])
                    : null != _
                      ? _
                      : g.intl.string(g.t.zKX8Nu)
                : g.intl.string(y),
        hasActiveMatchingEmbeddedActivity: x,
        isEmbeddedApp: v,
        currentEmbeddedActivity: C,
        channelRecipientUserId: j,
        setIsExecutingLaunchInteraction: b,
        analyticsLocations: O,
    };
}
function C(e) {
    let {
            context: t,
            application: n,
            isEmbeddedApp: r,
            hasActiveMatchingEmbeddedActivity: l,
            currentEmbeddedActivity: o,
            onOpenButtonPress: c,
            channelRecipientUserId: u,
            setIsExecutingLaunchInteraction: d,
            analyticsLocations: f,
        } = e,
        m = (0, h.ms)({
            context: t,
            applicationId: n.id,
            botUserId: u,
        }),
        g = i.useCallback(() => {
            l && null != o
                ? (0, s.Z)().leaveActivity({
                      location: o.location,
                      applicationId: o.applicationId,
                  })
                : (d(!0),
                  (0, a.Z)({
                      targetApplicationId: n.id,
                      channelId: t.channel.id,
                      analyticsLocations: f,
                      onExecutedCallback: () => {
                          d(!1);
                      },
                      commandOrigin: p.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
                  }));
        }, [l, t.channel.id, n.id, o, f, d]);
    return m && r ? g : c;
}

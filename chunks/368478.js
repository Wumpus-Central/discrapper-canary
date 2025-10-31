n.d(t, {
    J: () => _,
    Z: () => b,
}),
    n(388685),
    n(997841);
var r = n(647438),
    i = n(442837),
    l = n(317381),
    a = n(122613),
    o = n(16609),
    s = n(574952),
    c = n(100527),
    u = n(906732),
    d = n(783097),
    p = n(895924),
    f = n(812236),
    h = n(630388),
    m = n(981631),
    g = n(388032);
function b(e) {
    let { context: t, primaryEntryPointCommand: n, application: a, showAppLauncherPopup: s = !1 } = e,
        [p, b] = r.useState(!1),
        _ = (0, i.e7)([l.ZP], () => l.ZP.getCurrentEmbeddedActivity()),
        y = s ? g.t.cpT0Cq : g.t["0hKkS+"],
        C = r.useMemo(() => (null != n ? (0, d.XZ)(n.displayName) : g.intl.string(g.t["3xjX0U"])), [n]),
        v = void 0 !== a.flags && (0, h.yE)(a.flags, m.udG.EMBEDDED),
        O = null != _ && _.applicationId === a.id && (0, o.p)(_.location) === t.channel.id,
        { analyticsLocations: x } = (0, u.ZP)(c.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON),
        E = null != t.channel.recipients ? t.channel.recipients[0] : void 0;
    return {
        isExecutingLaunchInteraction: p,
        buttonText:
            (0, f.ms)({
                context: t,
                applicationId: a.id,
                botUserId: E,
            }) && v
                ? O
                    ? g.intl.string(g.t["Hi1/aQ"])
                    : null != C
                      ? C
                      : g.intl.string(g.t.zKX8Nu)
                : g.intl.string(y),
        hasActiveMatchingEmbeddedActivity: O,
        isEmbeddedApp: v,
        currentEmbeddedActivity: _,
        channelRecipientUserId: E,
        setIsExecutingLaunchInteraction: b,
        analyticsLocations: x,
    };
}
function _(e) {
    let {
            context: t,
            application: n,
            isEmbeddedApp: i,
            hasActiveMatchingEmbeddedActivity: l,
            currentEmbeddedActivity: o,
            onOpenButtonPress: c,
            channelRecipientUserId: u,
            setIsExecutingLaunchInteraction: d,
            analyticsLocations: h,
        } = e,
        m = (0, f.ms)({
            context: t,
            applicationId: n.id,
            botUserId: u,
        }),
        g = r.useCallback(() => {
            l && null != o
                ? (0, s.Z)().leaveActivity({
                      location: o.location,
                      applicationId: o.applicationId,
                  })
                : (d(!0),
                  (0, a.Z)({
                      targetApplicationId: n.id,
                      channelId: t.channel.id,
                      analyticsLocations: h,
                      onExecutedCallback: () => {
                          d(!1);
                      },
                      commandOrigin: p.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
                  }));
        }, [l, t.channel.id, n.id, o, h, d]);
    return m && i ? g : c;
}

(n.d(t, {
    J: () => _,
    Z: () => b
}),
    n(388685),
    n(997841));
var r = n(73800),
    i = n(442837),
    l = n(317381),
    o = n(122613),
    a = n(16609),
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
    let { context: t, primaryEntryPointCommand: n, application: o, showAppLauncherPopup: s = !1 } = e,
        [p, b] = r.useState(!1),
        _ = (0, i.e7)([l.ZP], () => l.ZP.getCurrentEmbeddedActivity()),
        y = s ? g.t.cpT0Cg : g.t['0hKkS0'],
        C = r.useMemo(() => (null != n ? (0, d.XZ)(n.displayName) : g.intl.string(g.t['3xjX0d'])), [n]),
        x = void 0 !== o.flags && (0, f.yE)(o.flags, m.udG.EMBEDDED),
        v = null != _ && _.applicationId === o.id && (0, a.p)(_.location) === t.channel.id,
        { analyticsLocations: O } = (0, u.ZP)(c.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON),
        j = null != t.channel.recipients ? t.channel.recipients[0] : void 0;
    return {
        isExecutingLaunchInteraction: p,
        buttonText:
            (0, h.ms)({
                context: t,
                applicationId: o.id,
                botUserId: j
            }) && x
                ? v
                    ? g.intl.string(g.t['Hi1/aW'])
                    : null != C
                      ? C
                      : g.intl.string(g.t.zKX8Nj)
                : g.intl.string(y),
        hasActiveMatchingEmbeddedActivity: v,
        isEmbeddedApp: x,
        currentEmbeddedActivity: _,
        channelRecipientUserId: j,
        setIsExecutingLaunchInteraction: b,
        analyticsLocations: O
    };
}
function _(e) {
    let { context: t, application: n, isEmbeddedApp: i, hasActiveMatchingEmbeddedActivity: l, currentEmbeddedActivity: a, onOpenButtonPress: c, channelRecipientUserId: u, setIsExecutingLaunchInteraction: d, analyticsLocations: f } = e,
        m = (0, h.ms)({
            context: t,
            applicationId: n.id,
            botUserId: u
        }),
        g = r.useCallback(() => {
            l && null != a
                ? (0, s.Z)().leaveActivity({
                      location: a.location,
                      applicationId: a.applicationId
                  })
                : (d(!0),
                  (0, o.Z)({
                      targetApplicationId: n.id,
                      channelId: t.channel.id,
                      analyticsLocations: f,
                      onExecutedCallback: () => {
                          d(!1);
                      },
                      commandOrigin: p.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON
                  }));
        }, [l, t.channel.id, n.id, a, f, d]);
    return m && i ? g : c;
}

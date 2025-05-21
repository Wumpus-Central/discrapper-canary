n.d(t, {
    J: () => x,
    Z: () => _
}),
    n(388685),
    n(997841);
var r = n(73800),
    i = n(252258),
    l = n(442837),
    a = n(317381),
    o = n(122613),
    s = n(16609),
    c = n(574952),
    u = n(100527),
    d = n(906732),
    p = n(783097),
    h = n(895924),
    f = n(812236),
    m = n(630388),
    g = n(981631),
    b = n(388032);
function _(e) {
    let { context: t, primaryEntryPointCommand: n, application: o, showAppLauncherPopup: c = !1 } = e,
        [h, _] = r.useState(!1),
        x = (0, l.e7)([a.ZP], () => a.ZP.getCurrentEmbeddedActivity()),
        C = c ? b.t.cpT0Cg : b.t['0hKkS0'],
        y = r.useMemo(() => (null != n ? (0, p.XZ)(n.displayName) : b.intl.string(b.t['3xjX0d'])), [n]),
        v = void 0 !== o.flags && (0, m.yE)(o.flags, g.udG.EMBEDDED),
        j = null != x && x.applicationId === o.id && (x.location.kind === i.E.CONTEXTLESS || (0, s.pY)(x.location) === t.channel.id),
        { analyticsLocations: O } = (0, d.ZP)(u.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON),
        E = null != t.channel.recipients ? t.channel.recipients[0] : void 0;
    return {
        isExecutingLaunchInteraction: h,
        buttonText:
            (0, f.ms)({
                context: t,
                applicationId: o.id,
                botUserId: E
            }) && v
                ? j
                    ? b.intl.string(b.t['Hi1/aW'])
                    : null != y
                      ? y
                      : b.intl.string(b.t.zKX8Nj)
                : b.intl.string(C),
        hasActiveMatchingEmbeddedActivity: j,
        isEmbeddedApp: v,
        currentEmbeddedActivity: x,
        channelRecipientUserId: E,
        setIsExecutingLaunchInteraction: _,
        analyticsLocations: O
    };
}
function x(e) {
    let { context: t, application: n, isEmbeddedApp: i, hasActiveMatchingEmbeddedActivity: l, currentEmbeddedActivity: a, onOpenButtonPress: s, channelRecipientUserId: u, setIsExecutingLaunchInteraction: d, analyticsLocations: p } = e,
        m = (0, f.ms)({
            context: t,
            applicationId: n.id,
            botUserId: u
        }),
        g = r.useCallback(() => {
            l && null != a
                ? (0, c.Z)().leaveActivity({
                      location: a.location,
                      applicationId: a.applicationId
                  })
                : (d(!0),
                  (0, o.Z)({
                      targetApplicationId: n.id,
                      channelId: t.channel.id,
                      analyticsLocations: p,
                      onExecutedCallback: () => {
                          d(!1);
                      },
                      commandOrigin: h.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON
                  }));
        }, [l, t.channel.id, n.id, a, p, d]);
    return m && i ? g : s;
}

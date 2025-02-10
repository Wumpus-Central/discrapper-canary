n.d(t, {
    J: () => x,
    Z: () => C
}),
    n(47120),
    n(789020);
var i = n(192379),
    l = n(442837),
    a = n(774226),
    r = n(317381),
    s = n(122613),
    o = n(16609),
    c = n(574952),
    d = n(100527),
    u = n(906732),
    h = n(783097),
    p = n(895924),
    m = n(812236),
    f = n(630388),
    g = n(981631),
    _ = n(388032);
function C(e) {
    let { context: t, primaryEntryPointCommand: n, application: s, showAppLauncherPopup: c = !1 } = e,
        [p, C] = i.useState(!1),
        x = (0, l.e7)([r.ZP], () => r.ZP.getCurrentEmbeddedActivity()),
        v = (0, a.GK)(),
        E = c ? _.t.cpT0Cg : _.t['0hKkS0'],
        I = i.useMemo(() => (null != n ? (0, h.XZ)(n.displayName) : _.intl.string(_.t['3xjX0d'])), [n]),
        b = void 0 !== s.flags && (0, f.yE)(s.flags, g.udG.EMBEDDED),
        Z = null != x && x.applicationId === s.id && (v || (0, o.pY)(x.location) === t.channel.id),
        { analyticsLocations: N } = (0, u.ZP)(d.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON),
        T = null != t.channel.recipients ? t.channel.recipients[0] : void 0;
    return {
        isExecutingLaunchInteraction: p,
        buttonText:
            (0, m.ms)({
                context: t,
                applicationId: s.id,
                botUserId: T
            }) && b
                ? Z
                    ? _.intl.string(_.t['Hi1/aW'])
                    : null != I
                      ? I
                      : _.intl.string(_.t.zKX8Nj)
                : _.intl.string(E),
        hasActiveMatchingEmbeddedActivity: Z,
        isEmbeddedApp: b,
        currentEmbeddedActivity: x,
        channelRecipientUserId: T,
        setIsExecutingLaunchInteraction: C,
        analyticsLocations: N
    };
}
function x(e) {
    let { context: t, application: n, isEmbeddedApp: l, hasActiveMatchingEmbeddedActivity: a, currentEmbeddedActivity: r, onOpenButtonPress: o, channelRecipientUserId: d, setIsExecutingLaunchInteraction: u, analyticsLocations: h } = e,
        f = (0, m.ms)({
            context: t,
            applicationId: n.id,
            botUserId: d
        }),
        g = i.useCallback(() => {
            a && null != r
                ? (0, c.Z)().leaveActivity({
                      location: r.location,
                      applicationId: r.applicationId
                  })
                : (u(!0),
                  (0, s.Z)({
                      targetApplicationId: n.id,
                      channelId: t.channel.id,
                      analyticsLocations: h,
                      onExecutedCallback: () => {
                          u(!1);
                      },
                      commandOrigin: p.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON
                  }));
        }, [a, t.channel.id, n.id, r, h, u]);
    return f && l ? g : o;
}

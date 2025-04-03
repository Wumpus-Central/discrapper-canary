n.d(t, {
    J: () => C,
    Z: () => _
}),
    n(47120),
    n(789020);
var r = n(192379),
    i = n(252258),
    l = n(442837),
    o = n(317381),
    a = n(122613),
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
    let { context: t, primaryEntryPointCommand: n, application: a, showAppLauncherPopup: c = !1 } = e,
        [h, _] = r.useState(!1),
        C = (0, l.e7)([o.ZP], () => o.ZP.getCurrentEmbeddedActivity()),
        y = c ? b.t.cpT0Cg : b.t['0hKkS0'],
        x = r.useMemo(() => (null != n ? (0, p.XZ)(n.displayName) : b.NW.string(b.t['3xjX0d'])), [n]),
        v = void 0 !== a.flags && (0, m.yE)(a.flags, g.udG.EMBEDDED),
        j = null != C && C.applicationId === a.id && (C.location.kind === i.E.CONTEXTLESS || (0, s.pY)(C.location) === t.channel.id),
        { analyticsLocations: O } = (0, d.ZP)(u.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON),
        E = null != t.channel.recipients ? t.channel.recipients[0] : void 0;
    return {
        isExecutingLaunchInteraction: h,
        buttonText:
            (0, f.ms)({
                context: t,
                applicationId: a.id,
                botUserId: E
            }) && v
                ? j
                    ? b.NW.string(b.t['Hi1/aW'])
                    : null != x
                      ? x
                      : b.NW.string(b.t.zKX8Nj)
                : b.NW.string(y),
        hasActiveMatchingEmbeddedActivity: j,
        isEmbeddedApp: v,
        currentEmbeddedActivity: C,
        channelRecipientUserId: E,
        setIsExecutingLaunchInteraction: _,
        analyticsLocations: O
    };
}
function C(e) {
    let { context: t, application: n, isEmbeddedApp: i, hasActiveMatchingEmbeddedActivity: l, currentEmbeddedActivity: o, onOpenButtonPress: s, channelRecipientUserId: u, setIsExecutingLaunchInteraction: d, analyticsLocations: p } = e,
        m = (0, f.ms)({
            context: t,
            applicationId: n.id,
            botUserId: u
        }),
        g = r.useCallback(() => {
            l && null != o
                ? (0, c.Z)().leaveActivity({
                      location: o.location,
                      applicationId: o.applicationId
                  })
                : (d(!0),
                  (0, a.Z)({
                      targetApplicationId: n.id,
                      channelId: t.channel.id,
                      analyticsLocations: p,
                      onExecutedCallback: () => {
                          d(!1);
                      },
                      commandOrigin: h.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON
                  }));
        }, [l, t.channel.id, n.id, o, p, d]);
    return m && i ? g : s;
}

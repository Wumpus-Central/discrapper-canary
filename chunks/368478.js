n.d(t, {
    J: function () {
        return v;
    },
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(789020);
var i = n(192379),
    l = n(442837),
    r = n(774226),
    a = n(317381),
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
    C = n(388032);
function x(e) {
    let { channel: t, primaryEntryPointCommand: n, application: s, showAppLauncherPopup: c = !1 } = e,
        [p, x] = i.useState(!1),
        v = (0, l.e7)([a.ZP], () => a.ZP.getCurrentEmbeddedActivity()),
        _ = (0, r.G)(),
        I = c ? C.t.cpT0Cg : C.t['0hKkS0'],
        E = i.useMemo(() => (null != n ? (0, h.XZ)(n.displayName) : C.intl.string(C.t['3xjX0d'])), [n]),
        b = void 0 !== s.flags && (0, f.yE)(s.flags, g.udG.EMBEDDED),
        Z = null != v && v.applicationId === s.id && (_ || (0, o.p)(v.location) === t.id),
        { analyticsLocations: N } = (0, u.ZP)(d.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON),
        S = null != t.recipients ? t.recipients[0] : void 0,
        T = (0, m.ms)({
            channel: t,
            applicationId: s.id,
            botUserId: S
        });
    return {
        isExecutingLaunchInteraction: p,
        buttonText: T && b ? (Z ? C.intl.string(C.t['Hi1/aW']) : null != E ? E : C.intl.string(C.t.zKX8Nj)) : C.intl.string(I),
        hasActiveMatchingEmbeddedActivity: Z,
        isEmbeddedApp: b,
        currentEmbeddedActivity: v,
        channelRecipientUserId: S,
        setIsExecutingLaunchInteraction: x,
        analyticsLocations: N
    };
}
function v(e) {
    let { channel: t, application: n, isEmbeddedApp: l, hasActiveMatchingEmbeddedActivity: r, currentEmbeddedActivity: a, onOpenButtonPress: o, channelRecipientUserId: d, setIsExecutingLaunchInteraction: u, analyticsLocations: h } = e,
        f = (0, m.ms)({
            channel: t,
            applicationId: n.id,
            botUserId: d
        }),
        g = i.useCallback(() => {
            r && null != a
                ? (0, c.Z)().leaveActivity({
                      location: a.location,
                      applicationId: a.applicationId
                  })
                : (u(!0),
                  (0, s.Z)({
                      targetApplicationId: n.id,
                      channelId: t.id,
                      analyticsLocations: h,
                      onExecutedCallback: () => {
                          u(!1);
                      },
                      commandOrigin: p.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON
                  }));
        }, [r, t.id, n.id, a, h, u]);
    return f && l ? g : o;
}

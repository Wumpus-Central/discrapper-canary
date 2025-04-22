n.d(t, { Z: () => j }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    u = n(2052),
    c = n(638880),
    d = n(413458),
    f = n(620662),
    m = n(778569),
    p = n(100527),
    E = n(906732),
    g = n(835473),
    v = n(314897),
    h = n(592125),
    S = n(594174),
    b = n(849171),
    y = n(981631),
    O = n(388032),
    Z = n(164914);
function j(e) {
    let { participant: t, width: n, channelId: i } = e,
        { analyticsLocations: a } = (0, E.ZP)(p.Z.PRESENCE_ACTIVITY_TILE),
        { activity: o } = t,
        s = o.application_id,
        [u] = (0, g.Z)([s]),
        { url: c } = (0, m.Z)({
            applicationId: s,
            names: b.Ix,
            size: b.bn
        }),
        d = l.useMemo(
            () => ({
                userId: t.user.id,
                activity: t.activity
            }),
            [t]
        );
    return (0, r.jsx)(E.Gt, {
        value: a,
        children: (0, r.jsxs)('div', {
            className: Z.container,
            children: [
                null != u && null != s && null != c && '' !== c
                    ? (0, r.jsx)('img', {
                          className: Z.splashImage,
                          alt: u.name,
                          src: c
                      })
                    : null,
                null != u && null != s
                    ? (0, r.jsx)(I, {
                          width: n,
                          channelId: i,
                          participant: d,
                          applicationId: s
                      })
                    : null
            ]
        })
    });
}
function I(e) {
    var t, n;
    let { width: i, channelId: m, participant: p, applicationId: j } = e,
        I = (0, b.V_)(i),
        [_] = (0, b.Ym)(i),
        P = (0, o.e7)([h.Z], () => h.Z.getChannel(m)),
        x = (0, o.e7)([S.default, v.default], () => ((0, d.J)(p, v.default) ? null : S.default.getUser(p.userId))),
        w = l.useMemo(() => (null != x ? [x] : []), [x]),
        A = (0, g.q)(j),
        { analyticsLocations: R } = (0, E.ZP)(),
        N = (0, u.O)(),
        C = p.activity.session_id,
        T = (0, f.Z)(p.activity, y.xjy.EMBEDDED) && (0, f.Z)(p.activity, y.xjy.CONTEXTLESS),
        [D, M] = l.useState(!1),
        L = null == x ? void 0 : x.id,
        k = l.useCallback(
            async (e) => {
                var t, n;
                e.stopPropagation(),
                    null != j &&
                        null != L &&
                        (M(!0),
                        await (0, c.Z)({
                            applicationId: j,
                            activityChannelId: m,
                            locationObject: N.location,
                            analyticsLocations: R,
                            joinUserId: L,
                            joinSessionId: C,
                            partyId: null == (n = p.activity) || null == (t = n.party) ? void 0 : t.id,
                            instanceId: void 0,
                            isContextlessActivity: T
                        }),
                        M(!1));
            },
            [j, L, N.location, R, C, m, T, null == (n = p.activity) || null == (t = n.party) ? void 0 : t.id]
        );
    return null == P || null == x || null == A
        ? null
        : (0, r.jsxs)('div', {
              className: Z.splash,
              children: [
                  (0, r.jsx)(b.OV, {
                      avatarSize: _,
                      guildId: P.guild_id,
                      channelId: P.id,
                      users: w
                  }),
                  (0, r.jsx)(s.Text, {
                      className: a()(Z.subheader, {
                          [Z.small]: I === b.nR.SMALL,
                          [Z.medium]: I === b.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: O.intl.formatToPlainString(O.t['7Uuia2'], { username: x.username })
                  }),
                  (0, r.jsx)(s.Text, {
                      className: a()(Z.header, {
                          [Z.small]: I === b.nR.SMALL,
                          [Z.medium]: I === b.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: A.name
                  }),
                  (0, r.jsx)('div', {
                      className: Z.buttons,
                      children: (0, r.jsx)(s.zxk, {
                          onClick: k,
                          submitting: D,
                          size: (0, b.ac)(I),
                          className: Z.button,
                          color: s.zxk.Colors.PRIMARY,
                          children: O.intl.string(O.t['4i2vj4'])
                      })
                  })
              ]
          });
}

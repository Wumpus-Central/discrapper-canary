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
    h = n(314897),
    v = n(592125),
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
    let { width: t, channelId: n, participant: i, applicationId: m } = e,
        p = (0, b.V_)(t),
        [j] = (0, b.Ym)(t),
        I = (0, o.e7)([v.Z], () => v.Z.getChannel(n)),
        _ = (0, o.e7)([S.default, h.default], () => ((0, d.J)(i, h.default) ? null : S.default.getUser(i.userId))),
        P = l.useMemo(() => (null != _ ? [_] : []), [_]),
        x = (0, g.q)(m),
        { analyticsLocations: w } = (0, E.ZP)(),
        A = (0, u.O)(),
        R = i.activity.session_id,
        N = (0, f.Z)(i.activity, y.xjy.EMBEDDED) && (0, f.Z)(i.activity, y.xjy.CONTEXTLESS),
        [C, T] = l.useState(!1),
        D = null == _ ? void 0 : _.id,
        M = l.useCallback(
            async (e) => {
                e.stopPropagation(),
                    null != m &&
                        null != D &&
                        (T(!0),
                        await (0, c.Z)({
                            applicationId: m,
                            activityChannelId: n,
                            locationObject: A.location,
                            analyticsLocations: w,
                            joinUserId: D,
                            joinSessionId: R,
                            instanceId: void 0,
                            isContextlessActivity: N
                        }),
                        T(!1));
            },
            [m, D, A.location, w, R, n, N]
        );
    return null == I || null == _ || null == x
        ? null
        : (0, r.jsxs)('div', {
              className: Z.splash,
              children: [
                  (0, r.jsx)(b.OV, {
                      avatarSize: j,
                      guildId: I.guild_id,
                      channelId: I.id,
                      users: P
                  }),
                  (0, r.jsx)(s.Text, {
                      className: a()(Z.subheader, {
                          [Z.small]: p === b.nR.SMALL,
                          [Z.medium]: p === b.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: O.intl.formatToPlainString(O.t['7Uuia2'], { username: _.username })
                  }),
                  (0, r.jsx)(s.Text, {
                      className: a()(Z.header, {
                          [Z.small]: p === b.nR.SMALL,
                          [Z.medium]: p === b.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: x.name
                  }),
                  (0, r.jsx)('div', {
                      className: Z.buttons,
                      children: (0, r.jsx)(s.zxk, {
                          onClick: M,
                          submitting: C,
                          size: (0, b.ac)(p),
                          className: Z.button,
                          color: s.zxk.Colors.PRIMARY,
                          children: O.intl.string(O.t['4i2vj4'])
                      })
                  })
              ]
          });
}

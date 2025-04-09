n.d(t, { Z: () => _ }), n(388685);
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
    I = n(164914);
function _(e) {
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
            className: I.container,
            children: [
                null != u && null != s && null != c && '' !== c
                    ? (0, r.jsx)('img', {
                          className: I.splashImage,
                          alt: u.name,
                          src: c
                      })
                    : null,
                null != u && null != s
                    ? (0, r.jsx)(j, {
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
function j(e) {
    let { width: t, channelId: n, participant: i, applicationId: m } = e,
        p = (0, b.V_)(t),
        [_] = (0, b.Ym)(t),
        j = (0, o.e7)([v.Z], () => v.Z.getChannel(n)),
        Z = (0, o.e7)([S.default, h.default], () => ((0, d.J)(i, h.default) ? null : S.default.getUser(i.userId))),
        x = l.useMemo(() => (null != Z ? [Z] : []), [Z]),
        N = (0, g.q)(m),
        { analyticsLocations: P } = (0, E.ZP)(),
        w = (0, u.O)(),
        R = i.activity.session_id,
        A = (0, f.Z)(i.activity, y.xjy.EMBEDDED) && (0, f.Z)(i.activity, y.xjy.CONTEXTLESS),
        [T, C] = l.useState(!1),
        D = null == Z ? void 0 : Z.id,
        M = l.useCallback(
            async (e) => {
                e.stopPropagation(),
                    null != m &&
                        null != D &&
                        (C(!0),
                        await (0, c.Z)({
                            applicationId: m,
                            activityChannelId: n,
                            locationObject: w.location,
                            analyticsLocations: P,
                            joinUserId: D,
                            joinSessionId: R,
                            instanceId: void 0,
                            isContextlessActivity: A
                        }),
                        C(!1));
            },
            [m, D, w.location, P, R, n, A]
        );
    return null == j || null == Z || null == N
        ? null
        : (0, r.jsxs)('div', {
              className: I.splash,
              children: [
                  (0, r.jsx)(b.OV, {
                      avatarSize: _,
                      guildId: j.guild_id,
                      channelId: j.id,
                      users: x
                  }),
                  (0, r.jsx)(s.Text, {
                      className: a()(I.subheader, {
                          [I.small]: p === b.nR.SMALL,
                          [I.medium]: p === b.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: O.NW.formatToPlainString(O.t['7Uuia2'], { username: Z.username })
                  }),
                  (0, r.jsx)(s.Text, {
                      className: a()(I.header, {
                          [I.small]: p === b.nR.SMALL,
                          [I.medium]: p === b.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: N.name
                  }),
                  (0, r.jsx)('div', {
                      className: I.buttons,
                      children: (0, r.jsx)(s.zxk, {
                          onClick: M,
                          submitting: T,
                          size: (0, b.ac)(p),
                          className: I.button,
                          color: s.zxk.Colors.PRIMARY,
                          children: O.NW.string(O.t['4i2vj4'])
                      })
                  })
              ]
          });
}

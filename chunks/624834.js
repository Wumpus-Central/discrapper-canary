n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(2052),
    u = n(638880),
    d = n(413458),
    m = n(778569),
    f = n(100527),
    p = n(906732),
    h = n(835473),
    g = n(314897),
    v = n(592125),
    _ = n(594174),
    S = n(849171),
    I = n(388032),
    x = n(712434);
function E(e) {
    let { participant: t, width: n, channelId: a } = e,
        { analyticsLocations: r } = (0, p.ZP)(f.Z.PRESENCE_ACTIVITY_TILE),
        { activity: s } = t,
        o = s.application_id,
        [c] = (0, h.Z)([o]),
        { url: u } = (0, m.Z)({
            applicationId: o,
            names: S.Ix,
            size: S.bn
        }),
        d = l.useMemo(
            () => ({
                userId: t.user.id,
                sessionId: t.activity.session_id
            }),
            [t]
        );
    return (0, i.jsx)(p.Gt, {
        value: r,
        children: (0, i.jsx)('div', {
            className: x.container,
            children: (0, i.jsxs)(i.Fragment, {
                children: [
                    null != c && null != o && null != u && '' !== u
                        ? (0, i.jsx)('img', {
                              className: x.splashImage,
                              alt: c.name,
                              src: u
                          })
                        : null,
                    null != c && null != o
                        ? (0, i.jsx)(C, {
                              width: n,
                              channelId: a,
                              participant: d,
                              applicationId: o
                          })
                        : null
                ]
            })
        })
    });
}
function C(e) {
    let { width: t, channelId: n, participant: a, applicationId: m } = e,
        f = (0, S.V_)(t),
        [E] = (0, S.Ym)(t),
        C = (0, s.e7)([v.Z], () => v.Z.getChannel(n)),
        Z = (0, s.e7)([_.default, g.default], () => ((0, d.J)(a, g.default) ? null : _.default.getUser(a.userId))),
        y = l.useMemo(() => (null != Z ? [Z] : []), [Z]),
        b = (0, h.q)(m),
        { analyticsLocations: N } = (0, p.ZP)(),
        T = (0, c.O)(),
        A = a.sessionId,
        [w, P] = l.useState(!1),
        j = null == Z ? void 0 : Z.id,
        R = l.useCallback(
            async (e) => {
                e.stopPropagation(),
                    null != m &&
                        null != j &&
                        (P(!0),
                        await (0, u.Z)({
                            applicationId: m,
                            activityChannelId: void 0,
                            locationObject: T.location,
                            analyticsLocations: N,
                            joinUserId: j,
                            joinSessionId: A
                        }),
                        P(!1));
            },
            [m, j, T.location, N, A]
        );
    return null == C || null == Z || null == b
        ? null
        : (0, i.jsxs)('div', {
              className: x.splash,
              children: [
                  (0, i.jsx)(S.OV, {
                      avatarSize: E,
                      guildId: C.guild_id,
                      channelId: C.id,
                      users: y
                  }),
                  (0, i.jsx)(o.Text, {
                      className: r()(x.subheader, {
                          [x.small]: f === S.nR.SMALL,
                          [x.medium]: f === S.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: I.intl.formatToPlainString(I.t['7Uuia2'], { username: Z.username })
                  }),
                  (0, i.jsx)(o.Text, {
                      className: r()(x.header, {
                          [x.small]: f === S.nR.SMALL,
                          [x.medium]: f === S.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: b.name
                  }),
                  (0, i.jsx)('div', {
                      className: x.buttons,
                      children: (0, i.jsx)(o.zxk, {
                          onClick: R,
                          submitting: w,
                          size: (0, S.ac)(f),
                          className: x.button,
                          color: o.zxk.Colors.PRIMARY,
                          children: I.intl.string(I.t['4i2vj4'])
                      })
                  })
              ]
          });
}

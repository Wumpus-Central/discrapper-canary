n.d(t, { Z: () => C }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    u = n(2052),
    c = n(638880),
    d = n(413458),
    m = n(778569),
    f = n(100527),
    h = n(906732),
    p = n(835473),
    v = n(314897),
    g = n(592125),
    E = n(594174),
    Z = n(849171),
    x = n(388032),
    S = n(712434);
function C(e) {
    let { participant: t, width: n, channelId: r } = e,
        { analyticsLocations: a } = (0, h.ZP)(f.Z.PRESENCE_ACTIVITY_TILE),
        { activity: s } = t,
        o = s.application_id,
        [u] = (0, p.Z)([o]),
        { url: c } = (0, m.Z)({
            applicationId: o,
            names: Z.Ix,
            size: Z.bn
        }),
        d = i.useMemo(
            () => ({
                userId: t.user.id,
                sessionId: t.activity.session_id
            }),
            [t]
        );
    return (0, l.jsx)(h.Gt, {
        value: a,
        children: (0, l.jsx)('div', {
            className: S.container,
            children: (0, l.jsxs)(l.Fragment, {
                children: [
                    null != u && null != o && null != c && '' !== c
                        ? (0, l.jsx)('img', {
                              className: S.splashImage,
                              alt: u.name,
                              src: c
                          })
                        : null,
                    null != u && null != o
                        ? (0, l.jsx)(b, {
                              width: n,
                              channelId: r,
                              participant: d,
                              applicationId: o
                          })
                        : null
                ]
            })
        })
    });
}
function b(e) {
    let { width: t, channelId: n, participant: r, applicationId: m } = e,
        f = (0, Z.V_)(t),
        [C] = (0, Z.Ym)(t),
        b = (0, s.e7)([g.Z], () => g.Z.getChannel(n)),
        I = (0, s.e7)([E.default, v.default], () => ((0, d.J)(r, v.default) ? null : E.default.getUser(r.userId))),
        _ = i.useMemo(() => (null != I ? [I] : []), [I]),
        N = (0, p.q)(m),
        { analyticsLocations: R } = (0, h.ZP)(),
        y = (0, u.O)(),
        T = r.sessionId,
        [j, w] = i.useState(!1),
        A = null == I ? void 0 : I.id,
        O = i.useCallback(
            async (e) => {
                e.stopPropagation(),
                    null != m &&
                        null != A &&
                        (w(!0),
                        await (0, c.Z)({
                            applicationId: m,
                            activityChannelId: void 0,
                            locationObject: y.location,
                            analyticsLocations: R,
                            joinUserId: A,
                            joinSessionId: T
                        }),
                        w(!1));
            },
            [m, A, y.location, R, T]
        );
    return null == b || null == I || null == N
        ? null
        : (0, l.jsxs)('div', {
              className: S.splash,
              children: [
                  (0, l.jsx)(Z.OV, {
                      avatarSize: C,
                      guildId: b.guild_id,
                      channelId: b.id,
                      users: _
                  }),
                  (0, l.jsx)(o.Text, {
                      className: a()(S.subheader, {
                          [S.small]: f === Z.nR.SMALL,
                          [S.medium]: f === Z.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: x.intl.formatToPlainString(x.t['7Uuia2'], { username: I.username })
                  }),
                  (0, l.jsx)(o.Text, {
                      className: a()(S.header, {
                          [S.small]: f === Z.nR.SMALL,
                          [S.medium]: f === Z.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: N.name
                  }),
                  (0, l.jsx)('div', {
                      className: S.buttons,
                      children: (0, l.jsx)(o.zxk, {
                          onClick: O,
                          submitting: j,
                          size: (0, Z.ac)(f),
                          className: S.button,
                          color: o.zxk.Colors.PRIMARY,
                          children: x.intl.string(x.t['4i2vj4'])
                      })
                  })
              ]
          });
}

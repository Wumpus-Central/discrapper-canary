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
    x = n(849171),
    Z = n(388032),
    S = n(712434);
function C(e) {
    let { participant: t, width: n, channelId: r } = e,
        { analyticsLocations: a } = (0, h.ZP)(f.Z.PRESENCE_ACTIVITY_TILE),
        { activity: s } = t,
        o = s.application_id,
        [u] = (0, p.Z)([o]),
        { url: c } = (0, m.Z)({
            applicationId: o,
            names: x.Ix,
            size: x.bn
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
        f = (0, x.V_)(t),
        [C] = (0, x.Ym)(t),
        b = (0, s.e7)([g.Z], () => g.Z.getChannel(n)),
        I = (0, s.e7)([E.default, v.default], () => ((0, d.J)(r, v.default) ? null : E.default.getUser(r.userId))),
        _ = i.useMemo(() => (null != I ? [I] : []), [I]),
        R = (0, p.q)(m),
        { analyticsLocations: y } = (0, h.ZP)(),
        j = (0, u.O)(),
        N = r.sessionId,
        [w, A] = i.useState(!1),
        T = null == I ? void 0 : I.id,
        k = i.useCallback(
            async (e) => {
                e.stopPropagation(),
                    null != m &&
                        null != T &&
                        (A(!0),
                        await (0, c.Z)({
                            applicationId: m,
                            activityChannelId: void 0,
                            locationObject: j.location,
                            analyticsLocations: y,
                            joinUserId: T,
                            joinSessionId: N
                        }),
                        A(!1));
            },
            [m, T, j.location, y, N]
        );
    return null == b || null == I || null == R
        ? null
        : (0, l.jsxs)('div', {
              className: S.splash,
              children: [
                  (0, l.jsx)(x.OV, {
                      avatarSize: C,
                      guildId: b.guild_id,
                      channelId: b.id,
                      users: _
                  }),
                  (0, l.jsx)(o.Text, {
                      className: a()(S.subheader, {
                          [S.small]: f === x.nR.SMALL,
                          [S.medium]: f === x.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: Z.intl.formatToPlainString(Z.t['7Uuia2'], { username: I.username })
                  }),
                  (0, l.jsx)(o.Text, {
                      className: a()(S.header, {
                          [S.small]: f === x.nR.SMALL,
                          [S.medium]: f === x.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: R.name
                  }),
                  (0, l.jsx)('div', {
                      className: S.buttons,
                      children: (0, l.jsx)(o.zxk, {
                          onClick: k,
                          submitting: w,
                          size: (0, x.ac)(f),
                          className: S.button,
                          color: o.zxk.Colors.PRIMARY,
                          children: Z.intl.string(Z.t['4i2vj4'])
                      })
                  })
              ]
          });
}

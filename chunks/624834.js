n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    S = n(594174),
    I = n(849171),
    x = n(388032),
    _ = n(712434);
function C(e) {
    let { participant: t, width: n, channelId: r } = e,
        { analyticsLocations: a } = (0, p.ZP)(f.Z.PRESENCE_ACTIVITY_TILE),
        { activity: s } = t,
        o = s.application_id,
        [c] = (0, h.Z)([o]),
        { url: u } = (0, m.Z)({
            applicationId: o,
            names: I.Ix,
            size: I.bn
        }),
        d = l.useMemo(
            () => ({
                userId: t.user.id,
                sessionId: t.activity.session_id
            }),
            [t]
        );
    return (0, i.jsx)(p.Gt, {
        value: a,
        children: (0, i.jsx)('div', {
            className: _.container,
            children: (0, i.jsxs)(i.Fragment, {
                children: [
                    null != c && null != o && null != u && '' !== u
                        ? (0, i.jsx)('img', {
                              className: _.splashImage,
                              alt: c.name,
                              src: u
                          })
                        : null,
                    null != c && null != o
                        ? (0, i.jsx)(b, {
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
        f = (0, I.V_)(t),
        [C] = (0, I.Ym)(t),
        b = (0, s.e7)([v.Z], () => v.Z.getChannel(n)),
        E = (0, s.e7)([S.default, g.default], () => ((0, d.J)(r, g.default) ? null : S.default.getUser(r.userId))),
        y = l.useMemo(() => (null != E ? [E] : []), [E]),
        Z = (0, h.q)(m),
        { analyticsLocations: T } = (0, p.ZP)(),
        N = (0, c.O)(),
        A = r.sessionId,
        [j, w] = l.useState(!1),
        P = null == E ? void 0 : E.id,
        R = l.useCallback(
            async (e) => {
                if ((e.stopPropagation(), null != m && null != P))
                    w(!0),
                        await (0, u.Z)({
                            applicationId: m,
                            activityChannelId: void 0,
                            locationObject: N.location,
                            analyticsLocations: T,
                            joinUserId: P,
                            joinSessionId: A
                        }),
                        w(!1);
            },
            [m, P, N.location, T, A]
        );
    return null == b || null == E || null == Z
        ? null
        : (0, i.jsxs)('div', {
              className: _.splash,
              children: [
                  (0, i.jsx)(I.OV, {
                      avatarSize: C,
                      guildId: b.guild_id,
                      channelId: b.id,
                      users: y
                  }),
                  (0, i.jsx)(o.Text, {
                      className: a()(_.subheader, {
                          [_.small]: f === I.nR.SMALL,
                          [_.medium]: f === I.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: x.intl.formatToPlainString(x.t['7Uuia2'], { username: E.username })
                  }),
                  (0, i.jsx)(o.Text, {
                      className: a()(_.header, {
                          [_.small]: f === I.nR.SMALL,
                          [_.medium]: f === I.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: Z.name
                  }),
                  (0, i.jsx)('div', {
                      className: _.buttons,
                      children: (0, i.jsx)(o.Button, {
                          onClick: R,
                          submitting: j,
                          size: (0, I.ac)(f),
                          className: _.button,
                          color: o.Button.Colors.PRIMARY,
                          children: x.intl.string(x.t['4i2vj4'])
                      })
                  })
              ]
          });
}

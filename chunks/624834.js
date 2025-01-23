n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
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
    I = n(594174),
    S = n(849171),
    _ = n(388032),
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
        y = (0, s.e7)([I.default, g.default], () => ((0, d.J)(a, g.default) ? null : I.default.getUser(a.userId))),
        b = l.useMemo(() => (null != y ? [y] : []), [y]),
        Z = (0, h.q)(m),
        { analyticsLocations: T } = (0, p.ZP)(),
        N = (0, c.O)(),
        A = a.sessionId,
        [j, w] = l.useState(!1),
        P = null == y ? void 0 : y.id,
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
    return null == C || null == y || null == Z
        ? null
        : (0, i.jsxs)('div', {
              className: x.splash,
              children: [
                  (0, i.jsx)(S.OV, {
                      avatarSize: E,
                      guildId: C.guild_id,
                      channelId: C.id,
                      users: b
                  }),
                  (0, i.jsx)(o.Text, {
                      className: r()(x.subheader, {
                          [x.small]: f === S.nR.SMALL,
                          [x.medium]: f === S.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: _.intl.formatToPlainString(_.t['7Uuia2'], { username: y.username })
                  }),
                  (0, i.jsx)(o.Text, {
                      className: r()(x.header, {
                          [x.small]: f === S.nR.SMALL,
                          [x.medium]: f === S.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: Z.name
                  }),
                  (0, i.jsx)('div', {
                      className: x.buttons,
                      children: (0, i.jsx)(o.Button, {
                          onClick: R,
                          submitting: j,
                          size: (0, S.ac)(f),
                          className: x.button,
                          color: o.Button.Colors.PRIMARY,
                          children: _.intl.string(_.t['4i2vj4'])
                      })
                  })
              ]
          });
}

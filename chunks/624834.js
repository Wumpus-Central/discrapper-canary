n.d(t, { Z: () => j }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    c = n(2052),
    u = n(774226),
    d = n(638880),
    f = n(413458),
    m = n(778569),
    p = n(100527),
    h = n(906732),
    v = n(835473),
    g = n(314897),
    b = n(592125),
    y = n(594174),
    E = n(849171),
    O = n(388032),
    S = n(943339);
function j(e) {
    let { participant: t, width: n, channelId: i } = e,
        { analyticsLocations: a } = (0, h.ZP)(p.Z.PRESENCE_ACTIVITY_TILE),
        { activity: o } = t,
        s = o.application_id,
        [c] = (0, v.Z)([s]),
        { url: u } = (0, m.Z)({
            applicationId: s,
            names: E.Ix,
            size: E.bn
        }),
        d = l.useMemo(
            () => ({
                userId: t.user.id,
                sessionId: t.activity.session_id
            }),
            [t]
        );
    return (0, r.jsx)(h.Gt, {
        value: a,
        children: (0, r.jsx)('div', {
            className: S.container,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    null != c && null != s && null != u && '' !== u
                        ? (0, r.jsx)('img', {
                              className: S.splashImage,
                              alt: c.name,
                              src: u
                          })
                        : null,
                    null != c && null != s
                        ? (0, r.jsx)(x, {
                              width: n,
                              channelId: i,
                              participant: d,
                              applicationId: s
                          })
                        : null
                ]
            })
        })
    });
}
function x(e) {
    let { width: t, channelId: n, participant: i, applicationId: m } = e,
        p = (0, E.V_)(t),
        [j] = (0, E.Ym)(t),
        x = (0, o.e7)([b.Z], () => b.Z.getChannel(n)),
        Z = (0, o.e7)([y.default, g.default], () => ((0, f.J)(i, g.default) ? null : y.default.getUser(i.userId))),
        w = l.useMemo(() => (null != Z ? [Z] : []), [Z]),
        C = (0, v.q)(m),
        { analyticsLocations: P } = (0, h.ZP)(),
        N = (0, c.O)(),
        I = i.sessionId,
        [R, _] = l.useState(!1),
        k = null == Z ? void 0 : Z.id,
        A = l.useCallback(
            async (e) => {
                if ((e.stopPropagation(), null == m || null == k)) return;
                _(!0);
                let t = (0, u.sq)() && null != C && (0, u.Kb)(C);
                await (0, d.Z)({
                    applicationId: m,
                    activityChannelId: t ? void 0 : n,
                    locationObject: N.location,
                    analyticsLocations: P,
                    joinUserId: k,
                    joinSessionId: I,
                    isContextlessActivity: t
                }),
                    _(!1);
            },
            [m, k, N.location, P, I, C, n]
        );
    return null == x || null == Z || null == C
        ? null
        : (0, r.jsxs)('div', {
              className: S.splash,
              children: [
                  (0, r.jsx)(E.OV, {
                      avatarSize: j,
                      guildId: x.guild_id,
                      channelId: x.id,
                      users: w
                  }),
                  (0, r.jsx)(s.Text, {
                      className: a()(S.subheader, {
                          [S.small]: p === E.nR.SMALL,
                          [S.medium]: p === E.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: O.NW.formatToPlainString(O.t['7Uuia2'], { username: Z.username })
                  }),
                  (0, r.jsx)(s.Text, {
                      className: a()(S.header, {
                          [S.small]: p === E.nR.SMALL,
                          [S.medium]: p === E.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: C.name
                  }),
                  (0, r.jsx)('div', {
                      className: S.buttons,
                      children: (0, r.jsx)(s.zxk, {
                          onClick: A,
                          submitting: R,
                          size: (0, E.ac)(p),
                          className: S.button,
                          color: s.zxk.Colors.PRIMARY,
                          children: O.NW.string(O.t['4i2vj4'])
                      })
                  })
              ]
          });
}

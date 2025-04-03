n.d(t, { Z: () => I }), n(47120);
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
    g = n(906732),
    E = n(835473),
    h = n(314897),
    v = n(592125),
    b = n(594174),
    S = n(849171),
    y = n(981631),
    O = n(388032),
    Z = n(164914);
function I(e) {
    let { participant: t, width: n, channelId: i } = e,
        { analyticsLocations: a } = (0, g.ZP)(p.Z.PRESENCE_ACTIVITY_TILE),
        { activity: o } = t,
        s = o.application_id,
        [u] = (0, E.Z)([s]),
        { url: c } = (0, m.Z)({
            applicationId: s,
            names: S.Ix,
            size: S.bn
        }),
        d = l.useMemo(
            () => ({
                userId: t.user.id,
                activity: t.activity
            }),
            [t]
        );
    return (0, r.jsx)(g.Gt, {
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
        p = (0, S.V_)(t),
        [I] = (0, S.Ym)(t),
        j = (0, o.e7)([v.Z], () => v.Z.getChannel(n)),
        x = (0, o.e7)([b.default, h.default], () => ((0, d.J)(i, h.default) ? null : b.default.getUser(i.userId))),
        N = l.useMemo(() => (null != x ? [x] : []), [x]),
        _ = (0, E.q)(m),
        { analyticsLocations: w } = (0, g.ZP)(),
        P = (0, u.O)(),
        R = i.activity.session_id,
        A = (0, f.Z)(i.activity, y.xjy.EMBEDDED) && (0, f.Z)(i.activity, y.xjy.CONTEXTLESS),
        [C, T] = l.useState(!1),
        D = null == x ? void 0 : x.id,
        M = l.useCallback(
            async (e) => {
                e.stopPropagation(),
                    null != m &&
                        null != D &&
                        (T(!0),
                        await (0, c.Z)({
                            applicationId: m,
                            activityChannelId: n,
                            locationObject: P.location,
                            analyticsLocations: w,
                            joinUserId: D,
                            joinSessionId: R,
                            instanceId: void 0,
                            isContextlessActivity: A
                        }),
                        T(!1));
            },
            [m, D, P.location, w, R, n, A]
        );
    return null == j || null == x || null == _
        ? null
        : (0, r.jsxs)('div', {
              className: Z.splash,
              children: [
                  (0, r.jsx)(S.OV, {
                      avatarSize: I,
                      guildId: j.guild_id,
                      channelId: j.id,
                      users: N
                  }),
                  (0, r.jsx)(s.Text, {
                      className: a()(Z.subheader, {
                          [Z.small]: p === S.nR.SMALL,
                          [Z.medium]: p === S.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: O.NW.formatToPlainString(O.t['7Uuia2'], { username: x.username })
                  }),
                  (0, r.jsx)(s.Text, {
                      className: a()(Z.header, {
                          [Z.small]: p === S.nR.SMALL,
                          [Z.medium]: p === S.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: _.name
                  }),
                  (0, r.jsx)('div', {
                      className: Z.buttons,
                      children: (0, r.jsx)(s.zxk, {
                          onClick: M,
                          submitting: C,
                          size: (0, S.ac)(p),
                          className: Z.button,
                          color: s.zxk.Colors.PRIMARY,
                          children: O.NW.string(O.t['4i2vj4'])
                      })
                  })
              ]
          });
}

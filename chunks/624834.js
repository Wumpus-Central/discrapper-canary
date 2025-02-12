n.d(t, { Z: () => b }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    u = n(2052),
    c = n(774226),
    d = n(638880),
    m = n(413458),
    f = n(778569),
    h = n(100527),
    p = n(906732),
    v = n(835473),
    g = n(314897),
    E = n(592125),
    x = n(594174),
    Z = n(849171),
    S = n(388032),
    C = n(881489);
function b(e) {
    let { participant: t, width: n, channelId: r } = e,
        { analyticsLocations: a } = (0, p.ZP)(h.Z.PRESENCE_ACTIVITY_TILE),
        { activity: s } = t,
        o = s.application_id,
        [u] = (0, v.Z)([o]),
        { url: c } = (0, f.Z)({
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
    return (0, l.jsx)(p.Gt, {
        value: a,
        children: (0, l.jsx)('div', {
            className: C.container,
            children: (0, l.jsxs)(l.Fragment, {
                children: [
                    null != u && null != o && null != c && '' !== c
                        ? (0, l.jsx)('img', {
                              className: C.splashImage,
                              alt: u.name,
                              src: c
                          })
                        : null,
                    null != u && null != o
                        ? (0, l.jsx)(I, {
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
function I(e) {
    let { width: t, channelId: n, participant: r, applicationId: f } = e,
        h = (0, Z.V_)(t),
        [b] = (0, Z.Ym)(t),
        I = (0, s.e7)([E.Z], () => E.Z.getChannel(n)),
        _ = (0, s.e7)([x.default, g.default], () => ((0, m.J)(r, g.default) ? null : x.default.getUser(r.userId))),
        R = i.useMemo(() => (null != _ ? [_] : []), [_]),
        y = (0, v.q)(f),
        { analyticsLocations: j } = (0, p.ZP)(),
        N = (0, u.O)(),
        w = r.sessionId,
        [A, T] = i.useState(!1),
        k = null == _ ? void 0 : _.id,
        O = i.useCallback(
            async (e) => {
                if ((e.stopPropagation(), null == f || null == k)) return;
                T(!0);
                let t = (0, c.sq)() && null != y && (0, c.Kb)(y);
                await (0, d.Z)({
                    applicationId: f,
                    activityChannelId: t ? void 0 : n,
                    locationObject: N.location,
                    analyticsLocations: j,
                    joinUserId: k,
                    joinSessionId: w,
                    isContextlessActivity: t
                }),
                    T(!1);
            },
            [f, k, N.location, j, w, y, n]
        );
    return null == I || null == _ || null == y
        ? null
        : (0, l.jsxs)('div', {
              className: C.splash,
              children: [
                  (0, l.jsx)(Z.OV, {
                      avatarSize: b,
                      guildId: I.guild_id,
                      channelId: I.id,
                      users: R
                  }),
                  (0, l.jsx)(o.Text, {
                      className: a()(C.subheader, {
                          [C.small]: h === Z.nR.SMALL,
                          [C.medium]: h === Z.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: S.intl.formatToPlainString(S.t['7Uuia2'], { username: _.username })
                  }),
                  (0, l.jsx)(o.Text, {
                      className: a()(C.header, {
                          [C.small]: h === Z.nR.SMALL,
                          [C.medium]: h === Z.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: y.name
                  }),
                  (0, l.jsx)('div', {
                      className: C.buttons,
                      children: (0, l.jsx)(o.zxk, {
                          onClick: O,
                          submitting: A,
                          size: (0, Z.ac)(h),
                          className: C.button,
                          color: o.zxk.Colors.PRIMARY,
                          children: S.intl.string(S.t['4i2vj4'])
                      })
                  })
              ]
          });
}

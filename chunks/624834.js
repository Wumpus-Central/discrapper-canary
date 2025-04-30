n.d(t, { Z: () => j }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    u = n(2052),
    c = n(638880),
    d = n(620662),
    f = n(778569),
    m = n(100527),
    p = n(906732),
    E = n(835473),
    g = n(592125),
    v = n(831506),
    h = n(594174),
    S = n(823379),
    b = n(849171),
    y = n(981631),
    O = n(388032),
    Z = n(164914);
function j(e) {
    let { participant: t, width: n, channelId: i } = e,
        { analyticsLocations: a } = (0, p.ZP)(m.Z.PRESENCE_ACTIVITY_TILE),
        { activity: o } = t,
        s = o.application_id,
        [u] = (0, E.Z)([s]),
        { url: c } = (0, f.Z)({
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
    return (0, r.jsx)(p.Gt, {
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
    var t, n;
    let { width: i, channelId: f, participant: m, applicationId: j } = e,
        I = (0, b.V_)(i),
        [_] = (0, b.Ym)(i),
        P = (0, o.e7)([g.Z], () => g.Z.getChannel(f)),
        w = null == (n = m.activity) || null == (t = n.party) ? void 0 : t.id,
        x = (0, o.Wu)(
            [h.default, v.Z],
            () => {
                var e;
                return Array.from(null != (e = v.Z.getParty(w)) ? e : new Set())
                    .map((e) => h.default.getUser(e))
                    .filter(S.lm);
            },
            [w]
        ),
        A = (0, o.e7)([h.default], () => h.default.getUser(m.userId), [m]),
        R = (0, E.q)(j),
        { analyticsLocations: N } = (0, p.ZP)(),
        C = (0, u.O)(),
        T = m.activity.session_id,
        D = (0, d.Z)(m.activity, y.xjy.EMBEDDED) && (0, d.Z)(m.activity, y.xjy.CONTEXTLESS),
        [M, L] = l.useState(!1),
        k = null == A ? void 0 : A.id,
        U = l.useCallback(
            async (e) => {
                e.stopPropagation(),
                    null != j &&
                        null != k &&
                        (L(!0),
                        await (0, c.Z)({
                            applicationId: j,
                            activityChannelId: f,
                            locationObject: C.location,
                            analyticsLocations: N,
                            joinUserId: k,
                            joinSessionId: T,
                            partyId: w,
                            instanceId: void 0,
                            isContextlessActivity: D
                        }),
                        L(!1));
            },
            [j, k, C.location, N, T, f, D, w]
        );
    return null == P || null == A || null == R
        ? null
        : (0, r.jsxs)('div', {
              className: Z.splash,
              children: [
                  (0, r.jsx)(b.OV, {
                      avatarSize: _,
                      guildId: P.guild_id,
                      channelId: P.id,
                      users: x
                  }),
                  (0, r.jsx)(s.Text, {
                      className: a()(Z.subheader, {
                          [Z.small]: I === b.nR.SMALL,
                          [Z.medium]: I === b.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: x.length > 1 ? O.intl.formatToPlainString(O.t.vYZFzc, { count: x.length }) : O.intl.formatToPlainString(O.t['7Uuia2'], { username: A.username })
                  }),
                  (0, r.jsx)(s.Text, {
                      className: a()(Z.header, {
                          [Z.small]: I === b.nR.SMALL,
                          [Z.medium]: I === b.nR.MEDIUM
                      }),
                      variant: 'text-sm/normal',
                      children: R.name
                  }),
                  (0, r.jsx)('div', {
                      className: Z.buttons,
                      children: (0, r.jsx)(s.zxk, {
                          onClick: U,
                          submitting: M,
                          size: (0, b.ac)(I),
                          className: Z.button,
                          color: s.zxk.Colors.PRIMARY,
                          children: O.intl.string(O.t['4i2vj4'])
                      })
                  })
              ]
          });
}

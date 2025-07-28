n.d(t, { Z: () => N });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(866442),
    s = n(399606),
    c = n(481060),
    u = n(100527),
    d = n(906732),
    h = n(204418),
    p = n(879892),
    f = n(742409),
    g = n(970731),
    m = n(485386),
    b = n(594174),
    _ = n(5192),
    O = n(944888),
    y = n(234368),
    C = n(981631),
    v = n(921944),
    j = n(93841),
    E = n(388032),
    S = n(951078),
    x = n(183375),
    I = n(445648),
    P = n(128647);
function N(e) {
    var t;
    let { guild: n, markAsDismissed: l } = e,
        N = (null == n ? void 0 : n.premiumProgressBarEnabled) === !0 ? g.DF.LEFT_TOP : g.DF.TOP_CENTER,
        w = N === g.DF.TOP_CENTER || N === g.DF.LEFT_TOP ? S[N] : '',
        { analyticsLocations: Z } = (0, d.ZP)(u.Z.GUILD_BOOSTING_ENHANCED_ROLE_COLOR_COACHMARK),
        T = i.useCallback(() => {
            (0, p.u)({
                analyticsLocation: { section: C.jXE.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK },
                numberOfBoostsToAdd: 1,
                analyticsLocations: Z,
                guild: n
            });
        }, [n, Z]),
        A = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        R =
            ((t = n.id),
            (0, s.e7)([m.Z], () => {
                let e = Object.values(m.Z.getRoles(t)).find((e) => (0, O.YB)(e));
                return null == e
                    ? {
                          primary_color: y.oC.primary_color,
                          secondary_color: y.oC.secondary_color
                      }
                    : e.colors;
            })),
        { gradientStyle: D, gradientClassname: L } = (0, c.Icv)({
            primaryColor: (0, a.Rf)(R.primary_color),
            secondaryColor: (0, a.Rf)(R.secondary_color),
            tertiaryColor: null != R.tertiary_color ? (0, a.Rf)(R.tertiary_color) : void 0,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: !0
        });
    return (0, r.jsx)(g.ZP, {
        asset: (0, r.jsxs)('div', {
            className: S.imageContainer,
            children: [
                null != A
                    ? (0, r.jsx)('div', {
                          className: S.messageContainer,
                          children: (0, r.jsx)(f.l, {
                              avatar: (0, r.jsx)(h.Z, {
                                  user: A,
                                  guildId: n.id,
                                  avatarSize: c.EFr.SIZE_40,
                                  'aria-hidden': !0
                              }),
                              usernameStyle: D,
                              usernameClassName: o()(L, x.animateGradient),
                              username: _.ZP.getName(n.id, null, A),
                              asset: (0, r.jsx)('img', {
                                  alt: '',
                                  src: I.Z
                              })
                          })
                      })
                    : (0, r.jsx)('img', {
                          alt: '',
                          src: P.Z,
                          className: S.image
                      }),
                (0, r.jsx)(c.olH, {
                    className: S.close,
                    innerClassName: S.innerClose,
                    onClick: () => (null == l ? void 0 : l(v.L.USER_DISMISS))
                })
            ]
        }),
        header: (0, r.jsx)(c.Text, {
            variant: 'text-md/semibold',
            children: E.intl.string(j.default.bw76aG)
        }),
        content: (0, r.jsx)(c.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: E.intl.string(j.default['/DTbiY'])
        }),
        buttonCTA: E.intl.string(E.t['oPAx7+']),
        onClick: T,
        className: o()(S.container, w),
        caretPosition: N,
        markAsDismissed: l
    });
}

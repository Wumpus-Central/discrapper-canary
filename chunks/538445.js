n.d(t, { Z: () => P });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(866442),
    a = n(399606),
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
    v = n(981631),
    C = n(921944),
    j = n(93841),
    E = n(388032),
    x = n(951078),
    S = n(183375),
    I = n(128647);
function P(e) {
    var t;
    let { guild: n, markAsDismissed: l } = e,
        P = (null == n ? void 0 : n.premiumProgressBarEnabled) === !0 ? g.DF.LEFT_TOP : g.DF.TOP_CENTER,
        N = P === g.DF.TOP_CENTER || P === g.DF.LEFT_TOP ? x[P] : '',
        { analyticsLocations: w } = (0, d.ZP)(u.Z.GUILD_BOOSTING_ENHANCED_ROLE_COLOR_COACHMARK),
        Z = i.useCallback(() => {
            (0, p.u)({
                analyticsLocation: { section: v.jXE.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK },
                numberOfBoostsToAdd: 1,
                analyticsLocations: w,
                guild: n
            });
        }, [n, w]),
        T = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
        A =
            ((t = n.id),
            (0, a.e7)([m.Z], () => {
                let e = Object.values(m.Z.getRoles(t)).find((e) => (0, O.YB)(e));
                return null == e
                    ? {
                          primary_color: y.oC.primary_color,
                          secondary_color: y.oC.secondary_color
                      }
                    : e.colors;
            })),
        { gradientStyle: R, gradientClassname: D } = (0, c.Icv)({
            primaryColor: (0, s.Rf)(A.primary_color),
            secondaryColor: (0, s.Rf)(A.secondary_color),
            tertiaryColor: null != A.tertiary_color ? (0, s.Rf)(A.tertiary_color) : void 0,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: !0
        });
    return (0, r.jsx)(g.ZP, {
        asset: (0, r.jsxs)('div', {
            className: x.imageContainer,
            children: [
                null != T
                    ? (0, r.jsx)('div', {
                          className: x.messageContainer,
                          children: (0, r.jsx)(f.l, {
                              avatar: (0, r.jsx)(h.Z, {
                                  user: T,
                                  guildId: n.id,
                                  avatarSize: c.EFr.SIZE_40,
                                  'aria-hidden': !0
                              }),
                              usernameStyle: R,
                              usernameClassName: o()(D, S.animateGradient),
                              username: _.ZP.getName(n.id, null, T),
                              message: E.intl.string(E.t['6OSasb'])
                          })
                      })
                    : (0, r.jsx)('img', {
                          alt: '',
                          src: I.Z,
                          className: x.image
                      }),
                (0, r.jsx)(c.olH, {
                    className: x.close,
                    innerClassName: x.innerClose,
                    onClick: () => (null == l ? void 0 : l(C.L.USER_DISMISS))
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
        onClick: Z,
        className: o()(x.container, N),
        caretPosition: P,
        markAsDismissed: l
    });
}

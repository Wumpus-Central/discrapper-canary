n.d(t, { Z: () => S });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(866442),
    s = n(399606),
    a = n(481060),
    c = n(100527),
    u = n(204418),
    d = n(18857),
    h = n(742409),
    p = n(970731),
    f = n(485386),
    g = n(594174),
    m = n(5192),
    b = n(944888),
    _ = n(234368),
    O = n(981631),
    y = n(921944),
    v = n(93841),
    C = n(388032),
    j = n(951078),
    E = n(183375),
    x = n(128647);
function S(e) {
    var t;
    let { guild: n, markAsDismissed: i } = e,
        S = (null == n ? void 0 : n.premiumProgressBarEnabled) === !0 ? p.DF.LEFT_TOP : p.DF.TOP_CENTER,
        I = S === p.DF.TOP_CENTER || S === p.DF.LEFT_TOP ? j[S] : '',
        P = (0, d.Z)(n, c.Z.GUILD_BOOSTING_ENHANCED_ROLE_COLOR_COACHMARK, O.jXE.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK),
        N = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        w =
            ((t = n.id),
            (0, s.e7)([f.Z], () => {
                let e = Object.values(f.Z.getRoles(t)).find((e) => (0, b.YB)(e));
                return null == e
                    ? {
                          primary_color: _.oC.primary_color,
                          secondary_color: _.oC.secondary_color
                      }
                    : e.colors;
            })),
        { gradientStyle: Z, gradientClassname: T } = (0, a.Icv)({
            primaryColor: (0, o.Rf)(w.primary_color),
            secondaryColor: (0, o.Rf)(w.secondary_color),
            tertiaryColor: null != w.tertiary_color ? (0, o.Rf)(w.tertiary_color) : void 0,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: !0
        });
    return (0, r.jsx)(p.ZP, {
        asset: (0, r.jsxs)('div', {
            className: j.imageContainer,
            children: [
                null != N
                    ? (0, r.jsx)('div', {
                          className: j.messageContainer,
                          children: (0, r.jsx)(h.l, {
                              avatar: (0, r.jsx)(u.Z, {
                                  user: N,
                                  guildId: n.id,
                                  avatarSize: a.EFr.SIZE_40,
                                  'aria-hidden': !0
                              }),
                              usernameStyle: Z,
                              usernameClassName: l()(T, E.animateGradient),
                              username: m.ZP.getName(n.id, null, N),
                              message: C.intl.string(C.t['6OSasb'])
                          })
                      })
                    : (0, r.jsx)('img', {
                          alt: '',
                          src: x.Z,
                          className: j.image
                      }),
                (0, r.jsx)(a.olH, {
                    className: j.close,
                    innerClassName: j.innerClose,
                    onClick: () => (null == i ? void 0 : i(y.L.USER_DISMISS))
                })
            ]
        }),
        header: (0, r.jsx)(a.Text, {
            variant: 'text-md/semibold',
            children: C.intl.string(v.default.bw76aG)
        }),
        content: (0, r.jsx)(a.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: C.intl.string(v.default['/DTbiY'])
        }),
        buttonCTA: C.intl.string(C.t['oPAx7+']),
        onClick: P,
        className: l()(j.container, I),
        caretPosition: S,
        markAsDismissed: i
    });
}

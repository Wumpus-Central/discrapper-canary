n.d(t, { Z: () => N });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(866442),
    s = n(399606),
    c = n(481060),
    u = n(100527),
    d = n(906732),
    p = n(204418),
    h = n(879892),
    f = n(742409),
    g = n(970731),
    m = n(485386),
    b = n(594174),
    O = n(5192),
    y = n(944888),
    _ = n(234368),
    j = n(981631),
    v = n(921944),
    x = n(989308),
    C = n(388032),
    E = n(49777),
    S = n(842926),
    P = n(445648),
    I = n(128647);
function N(e) {
    let { guild: t, markAsDismissed: n } = e,
        l = (null == t ? void 0 : t.premiumProgressBarEnabled) === !0 ? g.DF.LEFT_TOP : g.DF.TOP_CENTER,
        N = l === g.DF.TOP_CENTER || l === g.DF.LEFT_TOP ? E[l] : "",
        { analyticsLocations: w } = (0, d.ZP)(u.Z.GUILD_BOOSTING_ENHANCED_ROLE_COLOR_COACHMARK),
        Z = i.useCallback(() => {
            (0, h.u)({
                analyticsLocation: { section: j.jXE.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK },
                numberOfBoostsToAdd: 1,
                analyticsLocations: w,
                guild: t,
            });
        }, [t, w]),
        T = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        A = (function (e) {
            let t = (0, s.e7)([m.Z], () => m.Z.getSortedRoles(e).find(y.YB));
            return (null == t ? void 0 : t.colorStrings) != null
                ? t.colorStrings
                : {
                      primaryColor: (0, a.Rf)(_.oC.primary_color),
                      secondaryColor: (0, a.Rf)(_.oC.secondary_color),
                      tertiaryColor: null,
                  };
        })(t.id),
        { gradientStyle: R, gradientClassname: D } = (0, c.Icv)({
            colorStrings: A,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0,
        });
    return (0, r.jsx)(g.ZP, {
        asset: (0, r.jsxs)("div", {
            className: E.imageContainer,
            children: [
                null != T
                    ? (0, r.jsx)("div", {
                          className: E.messageContainer,
                          children: (0, r.jsx)(f.l, {
                              avatar: (0, r.jsx)(p.Z, {
                                  user: T,
                                  guildId: t.id,
                                  avatarSize: c.EFr.SIZE_40,
                                  "aria-hidden": !0,
                              }),
                              usernameStyle: R,
                              usernameClassName: o()(D, S.animateGradient),
                              username: O.ZP.getName(t.id, null, T),
                              asset: (0, r.jsx)("img", {
                                  alt: "",
                                  src: P.Z,
                              }),
                          }),
                      })
                    : (0, r.jsx)("img", {
                          alt: "",
                          src: I.Z,
                          className: E.image,
                      }),
                (0, r.jsx)(c.olH, {
                    className: E.close,
                    innerClassName: E.innerClose,
                    onClick: () => (null == n ? void 0 : n(v.L.USER_DISMISS)),
                }),
            ],
        }),
        header: (0, r.jsx)(c.Text, {
            variant: "text-md/semibold",
            children: C.intl.string(x.default.bw76aG),
        }),
        content: (0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: C.intl.string(x.default["/DTbiY"]),
        }),
        buttonCTA: C.intl.string(C.t["oPAx7+"]),
        onClick: Z,
        className: o()(E.container, N),
        caretPosition: l,
        markAsDismissed: n,
    });
}

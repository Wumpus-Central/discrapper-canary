t.d(n, { default: () => F }), t(415506);
var i = t(951288),
    l = t(647438),
    a = t(120356),
    r = t.n(a),
    s = t(990547),
    o = t(399606),
    c = t(481060),
    u = t(588705),
    d = t(700582),
    m = t(100527),
    _ = t(906732),
    p = t(388905),
    x = t(600164),
    g = t(436774),
    N = t(313201),
    h = t(44609),
    I = t(731971),
    E = t(451603),
    v = t(885714),
    f = t(973616),
    j = t(594174),
    S = t(855981),
    C = t(55543),
    A = t(626135),
    T = t(768581),
    L = t(358085),
    P = t(998502),
    b = t(379164),
    R = t(590965),
    Z = t(981631),
    z = t(474936),
    M = t(388032),
    D = t(12205),
    k = t(197571);
function O() {
    let { analyticsLocations: e, sourceAnalyticsLocations: n } = (0, _.ZP)(m.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        l.useEffect(() => {
            A.default.track(Z.rMx.PREMIUM_UPSELL_VIEWED, {
                type: z.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: Z.ZY5.NATIVE_INVITE_MODAL },
                location_stack: n,
            });
        }, [n]),
        (0, i.jsxs)(c.P3F, {
            onClick: () =>
                (0, v.Z)({
                    analyticsSource: { page: Z.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: Z.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: Z.jXE.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: e,
                }),
            className: D.experimentUpsellError,
            children: [
                (0, i.jsx)(c.SrA, {
                    size: "md",
                    className: D.experimentUpsellIcon,
                    color: g.JX.PREMIUM_TIER_2,
                }),
                (0, i.jsx)("span", {
                    className: D.experimentUpsellText,
                    children: M.intl.string(M.t["4/W4Pz"]),
                }),
                (0, i.jsx)("span", {
                    className: D.experimentGetNitro,
                    children: M.intl.string(M.t.b6KOkJ),
                }),
            ],
        })
    );
}
function U(e) {
    let { className: n } = e;
    return (0, i.jsxs)("div", {
        "aria-hidden": "true",
        className: r()(D.iconContainer, n),
        children: [
            (0, i.jsx)(S.Z, { className: D.iconSparklePlus }),
            (0, i.jsx)(c.xPt, {
                size: "custom",
                color: "currentColor",
                className: D.iconLink,
                width: 40,
                height: 40,
            }),
            (0, i.jsx)(C.Z, { className: D.iconSparkleStar }),
        ],
    });
}
function y(e) {
    let { transitionState: n } = e,
        t = (0, N.Dt)(),
        { analyticsLocations: l } = (0, _.ZP)(m.Z.INVITE_MODAL);
    return (0, i.jsx)(_.Gt, {
        value: l,
        children: (0, i.jsx)(c.Y0X, {
            "aria-labelledby": t,
            transitionState: n,
            parentComponent: "AcceptInviteModal",
            children: (0, i.jsxs)(c.hzk, {
                className: D.errorContent,
                children: [
                    (0, i.jsx)(U, { className: D.errorImage }),
                    (0, i.jsx)(c.X6q, {
                        id: t,
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        children: M.intl.string(M.t.u9zxnZ),
                    }),
                    (0, i.jsx)("div", {
                        className: D.errorBody,
                        children: M.intl.string(M.t.FWkU6O),
                    }),
                    (0, i.jsx)(p.zx, {
                        size: p.zx.Sizes.LARGE,
                        onClick: () => b.Z.close(),
                        color: p.zx.Colors.BRAND,
                        children: M.intl.string(M.t.wcqOoK),
                    }),
                ],
            }),
        }),
    });
}
function F(e) {
    var n;
    let t,
        a,
        r,
        { transitionState: g } = e,
        v = (0, h.WR)({ location: "AcceptInviteModal" });
    (0, o.e7)([j.default], () => {
        var e;
        return null == (e = j.default.getCurrentUser()) ? void 0 : e.premiumType;
    });
    let S = (0, o.e7)([j.default], () => j.default.getCurrentUser()),
        { invite: C, error: z, submitting: U } = (0, o.cj)([R.Z], () => R.Z.getProps());
    l.useEffect(() => {
        if (null != C && null != C.guild) {
            var e;
            (0, I.pB)(null != (e = C.approximate_member_count) ? e : 0, C.code, C.guild.id);
        }
    }, [
        C,
        null == C ? void 0 : C.approximate_member_count,
        null == C ? void 0 : C.code,
        null == C || null == (n = C.guild) ? void 0 : n.id,
    ]);
    let F = (0, I.yr)();
    l.useEffect(() => {
        !__OVERLAY__ && L.isPlatformEmbedded && ((0, L.isWindows)() ? P.ZP.minimize() : P.ZP.restore(), P.ZP.focus());
    }, []);
    let G = (0, N.Dt)(),
        { analyticsLocations: V } = (0, _.ZP)(m.Z.INVITE_MODAL);
    if (null == C || null == S) return null;
    if (C.state === Z.r2o.EXPIRED || C.state === Z.r2o.BANNED || C.state === Z.r2o.ERROR)
        return (0, i.jsx)(y, { transitionState: g });
    if (null == C.channel) return null;
    function W() {
        null != C && b.Z.acceptInvite(C);
    }
    let { guild: B, channel: w, inviter: K, target_application: Y } = C,
        H = null != B,
        Q = null == C.guild && null == C.channel && null != C.inviter;
    if (null != Y) (t = null == B ? void 0 : B.name), (a = f.ZP.createFromServer(Y).getCoverImageURL(1024));
    else if (null != B)
        (t = B.name),
            (a = T.ZP.getGuildSplashURL({
                id: B.id,
                splash: B.splash,
            }));
    else if (((null == (t = w.name) || "" === t) && null != K && (t = K.username), null == t))
        throw Error("no name for group DM invite");
    let X = (0, E.yU)();
    return (
        (r = v
            ? M.intl.format(M.t["9sWQNT"], { usernameHook: () => (0, i.jsx)("span", { children: F }) })
            : Q
              ? M.intl.string(M.t["e/6Ogo"])
              : M.intl.format(M.t.QD7BDA, { guildName: t })),
        (0, i.jsx)(_.Gt, {
            value: V,
            children: (0, i.jsxs)(c.Y0X, {
                size: c.CgR.DYNAMIC,
                "aria-labelledby": G,
                transitionState: g,
                className: D.container,
                impression: {
                    impressionName: s.ImpressionNames.INVITE_ACCEPT,
                    impressionProperties: {
                        guild_id: null == B ? void 0 : B.id,
                        invite_code: C.code,
                    },
                },
                parentComponent: "AcceptInviteModal",
                children: [
                    (0, i.jsx)(c.hzk, {
                        className: D.contentWrapper,
                        children: (0, i.jsxs)(x.Z, {
                            className: D.inviteContent,
                            direction: x.Z.Direction.VERTICAL,
                            justify: x.Z.Justify.BETWEEN,
                            children: [
                                (0, i.jsx)("div", {
                                    id: G,
                                    children: (0, i.jsx)(u.Z, {
                                        invite: C,
                                        disableUser: H,
                                        error: z,
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: D.ctas,
                                    children: [
                                        X ? (0, i.jsx)(O, {}) : null,
                                        null == Y
                                            ? (0, i.jsx)(c.ua7, {
                                                  text: X ? M.intl.string(M.t.iLyuDA) : null,
                                                  position: "bottom",
                                                  children: (e) => {
                                                      let { onMouseEnter: n, onMouseLeave: t } = e;
                                                      return (0, i.jsx)(p.zx, {
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: W,
                                                          submitting: U,
                                                          disabled: X,
                                                          color: p.zx.Colors.BRAND,
                                                          onMouseEnter: n,
                                                          onMouseLeave: t,
                                                          children: X
                                                              ? M.intl.string(M.t.ZNCziI)
                                                              : (0, i.jsxs)("div", {
                                                                    className: D.acceptAs,
                                                                    children: [
                                                                        v &&
                                                                            (0, i.jsx)(d.Z, {
                                                                                "aria-hidden": !0,
                                                                                size: c.EFr.SIZE_16,
                                                                                user: S,
                                                                                className: D.acceptAsAvatar,
                                                                            }),
                                                                        (0, i.jsx)("span", {
                                                                            className: D.acceptAsName,
                                                                            children: r,
                                                                        }),
                                                                    ],
                                                                }),
                                                      });
                                                  },
                                              })
                                            : (0, i.jsxs)("div", {
                                                  className: D.buttonGroup,
                                                  children: [
                                                      (0, i.jsx)(p.zx, {
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: W,
                                                          submitting: U,
                                                          children: M.intl.string(M.t.RscU7O),
                                                      }),
                                                      (0, i.jsx)(p.zx, {
                                                          color: p.zx.Colors.PRIMARY,
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: W,
                                                          submitting: U,
                                                          children: M.intl.string(M.t.eylRaW),
                                                      }),
                                                  ],
                                              }),
                                        (0, i.jsx)(x.Z, {
                                            justify: x.Z.Justify.CENTER,
                                            className: k.marginTop8,
                                            children: (0, i.jsx)(p.zx, {
                                                look: p.zx.Looks.LINK,
                                                className: D.noThanksButton,
                                                onClick: function () {
                                                    var e;
                                                    A.default.track(Z.rMx.INVITE_ACCEPT_DISMISSED, {
                                                        invite_code: null == C ? void 0 : C.code,
                                                        guild_id: null == C || null == (e = C.guild) ? void 0 : e.id,
                                                    }),
                                                        b.Z.close();
                                                },
                                                color: p.zx.Colors.TRANSPARENT,
                                                children: M.intl.string(M.t.ndsK4e),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    null != a &&
                        (0, i.jsx)("div", {
                            className: D.inviteSplash,
                            style: { backgroundImage: "url(".concat(a, ")") },
                        }),
                ],
            }),
        })
    );
}

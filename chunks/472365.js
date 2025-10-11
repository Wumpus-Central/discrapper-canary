t.d(n, { default: () => y }), t(415506);
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
    h = t(731971),
    E = t(451603),
    I = t(885714),
    f = t(973616),
    v = t(594174),
    j = t(855981),
    S = t(55543),
    C = t(626135),
    A = t(768581),
    T = t(358085),
    P = t(998502),
    L = t(379164),
    b = t(590965),
    R = t(981631),
    z = t(474936),
    Z = t(388032),
    M = t(12205),
    D = t(197571);
function k() {
    let { analyticsLocations: e, sourceAnalyticsLocations: n } = (0, _.ZP)(m.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        l.useEffect(() => {
            C.default.track(R.rMx.PREMIUM_UPSELL_VIEWED, {
                type: z.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: R.ZY5.NATIVE_INVITE_MODAL },
                location_stack: n,
            });
        }, [n]),
        (0, i.jsxs)(c.P3F, {
            onClick: () =>
                (0, I.Z)({
                    analyticsSource: { page: R.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: R.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: R.jXE.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: e,
                }),
            className: M.experimentUpsellError,
            children: [
                (0, i.jsx)(c.SrA, {
                    size: "md",
                    className: M.experimentUpsellIcon,
                    color: g.JX.PREMIUM_TIER_2,
                }),
                (0, i.jsx)("span", {
                    className: M.experimentUpsellText,
                    children: Z.intl.string(Z.t["4/W4Pz"]),
                }),
                (0, i.jsx)("span", {
                    className: M.experimentGetNitro,
                    children: Z.intl.string(Z.t.b6KOkJ),
                }),
            ],
        })
    );
}
function O(e) {
    let { className: n } = e;
    return (0, i.jsxs)("div", {
        "aria-hidden": "true",
        className: r()(M.iconContainer, n),
        children: [
            (0, i.jsx)(j.Z, { className: M.iconSparklePlus }),
            (0, i.jsx)(c.xPt, {
                size: "custom",
                color: "currentColor",
                className: M.iconLink,
                width: 40,
                height: 40,
            }),
            (0, i.jsx)(S.Z, { className: M.iconSparkleStar }),
        ],
    });
}
function U(e) {
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
                className: M.errorContent,
                children: [
                    (0, i.jsx)(O, { className: M.errorImage }),
                    (0, i.jsx)(c.Heading, {
                        id: t,
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        children: Z.intl.string(Z.t.u9zxnZ),
                    }),
                    (0, i.jsx)("div", {
                        className: M.errorBody,
                        children: Z.intl.string(Z.t.FWkU6O),
                    }),
                    (0, i.jsx)(p.zx, {
                        size: p.zx.Sizes.LARGE,
                        onClick: () => L.Z.close(),
                        color: p.zx.Colors.BRAND,
                        children: Z.intl.string(Z.t.wcqOoK),
                    }),
                ],
            }),
        }),
    });
}
function y(e) {
    var n;
    let t,
        a,
        r,
        { transitionState: g } = e;
    (0, o.e7)([v.default], () => {
        var e;
        return null == (e = v.default.getCurrentUser()) ? void 0 : e.premiumType;
    });
    let I = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
        { invite: j, error: S, submitting: z } = (0, o.cj)([b.Z], () => b.Z.getProps());
    l.useEffect(() => {
        if (null != j && null != j.guild) {
            var e;
            (0, h.pB)(null != (e = j.approximate_member_count) ? e : 0, j.code, j.guild.id);
        }
    }, [
        j,
        null == j ? void 0 : j.approximate_member_count,
        null == j ? void 0 : j.code,
        null == j || null == (n = j.guild) ? void 0 : n.id,
    ]);
    let O = (0, h.yr)();
    l.useEffect(() => {
        !__OVERLAY__ && T.isPlatformEmbedded && ((0, T.isWindows)() ? P.ZP.minimize() : P.ZP.restore(), P.ZP.focus());
    }, []);
    let y = (0, N.Dt)(),
        { analyticsLocations: F } = (0, _.ZP)(m.Z.INVITE_MODAL);
    if (null == j || null == I) return null;
    if (j.state === R.r2o.EXPIRED || j.state === R.r2o.BANNED || j.state === R.r2o.ERROR)
        return (0, i.jsx)(U, { transitionState: g });
    if (null == j.channel) return null;
    function G() {
        null != j && L.Z.acceptInvite(j);
    }
    let { guild: V, channel: W, inviter: B, target_application: w } = j,
        H = null != V,
        Y = null == j.guild && null == j.channel && null != j.inviter;
    if (null != w) (t = null == V ? void 0 : V.name), (a = f.ZP.createFromServer(w).getCoverImageURL(1024));
    else if (null != V)
        (t = V.name),
            (a = A.ZP.getGuildSplashURL({
                id: V.id,
                splash: V.splash,
            }));
    else if (((null == (t = W.name) || "" === t) && null != B && (t = B.username), null == t))
        throw Error("no name for group DM invite");
    let K = (0, E.yU)();
    return (
        (r = Y
            ? Z.intl.string(Z.t["e/6Ogo"])
            : Z.intl.format(Z.t["9sWQNT"], { usernameHook: () => (0, i.jsx)("span", { children: O }) })),
        (0, i.jsx)(_.Gt, {
            value: F,
            children: (0, i.jsxs)(c.Y0X, {
                size: c.CgR.DYNAMIC,
                "aria-labelledby": y,
                transitionState: g,
                className: M.container,
                impression: {
                    impressionName: s.ImpressionNames.INVITE_ACCEPT,
                    impressionProperties: {
                        guild_id: null == V ? void 0 : V.id,
                        invite_code: j.code,
                    },
                },
                parentComponent: "AcceptInviteModal",
                children: [
                    (0, i.jsx)(c.hzk, {
                        className: M.contentWrapper,
                        children: (0, i.jsxs)(x.Z, {
                            className: M.inviteContent,
                            direction: x.Z.Direction.VERTICAL,
                            justify: x.Z.Justify.BETWEEN,
                            children: [
                                (0, i.jsx)("div", {
                                    id: y,
                                    children: (0, i.jsx)(u.Z, {
                                        invite: j,
                                        disableUser: H,
                                        error: S,
                                    }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: M.ctas,
                                    children: [
                                        K ? (0, i.jsx)(k, {}) : null,
                                        null == w
                                            ? (0, i.jsx)(c.ua7, {
                                                  "data-migration-pending": !0,
                                                  text: K ? Z.intl.string(Z.t.iLyuDA) : null,
                                                  position: "bottom",
                                                  children: (e) => {
                                                      let { onMouseEnter: n, onMouseLeave: t } = e;
                                                      return (0, i.jsx)(p.zx, {
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: G,
                                                          submitting: z,
                                                          disabled: K,
                                                          color: p.zx.Colors.BRAND,
                                                          onMouseEnter: n,
                                                          onMouseLeave: t,
                                                          children: K
                                                              ? Z.intl.string(Z.t.ZNCziI)
                                                              : (0, i.jsxs)("div", {
                                                                    className: M.acceptAs,
                                                                    children: [
                                                                        (0, i.jsx)(d.Z, {
                                                                            "aria-hidden": !0,
                                                                            size: c.EFr.SIZE_16,
                                                                            user: I,
                                                                            className: M.acceptAsAvatar,
                                                                        }),
                                                                        (0, i.jsx)("span", {
                                                                            className: M.acceptAsName,
                                                                            children: r,
                                                                        }),
                                                                    ],
                                                                }),
                                                      });
                                                  },
                                              })
                                            : (0, i.jsxs)("div", {
                                                  className: M.buttonGroup,
                                                  children: [
                                                      (0, i.jsx)(p.zx, {
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: G,
                                                          submitting: z,
                                                          children: Z.intl.string(Z.t.RscU7O),
                                                      }),
                                                      (0, i.jsx)(p.zx, {
                                                          color: p.zx.Colors.PRIMARY,
                                                          size: p.zx.Sizes.LARGE,
                                                          onClick: G,
                                                          submitting: z,
                                                          children: Z.intl.string(Z.t.eylRaW),
                                                      }),
                                                  ],
                                              }),
                                        (0, i.jsx)(x.Z, {
                                            justify: x.Z.Justify.CENTER,
                                            className: D.marginTop8,
                                            children: (0, i.jsx)(p.zx, {
                                                look: p.zx.Looks.LINK,
                                                className: M.noThanksButton,
                                                onClick: function () {
                                                    var e;
                                                    C.default.track(R.rMx.INVITE_ACCEPT_DISMISSED, {
                                                        invite_code: null == j ? void 0 : j.code,
                                                        guild_id: null == j || null == (e = j.guild) ? void 0 : e.id,
                                                    }),
                                                        L.Z.close();
                                                },
                                                color: p.zx.Colors.TRANSPARENT,
                                                children: Z.intl.string(Z.t.ndsK4e),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    null != a &&
                        (0, i.jsx)("div", {
                            className: M.inviteSplash,
                            style: { backgroundImage: "url(".concat(a, ")") },
                        }),
                ],
            }),
        })
    );
}

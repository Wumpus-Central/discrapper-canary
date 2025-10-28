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
    p = t(906732),
    _ = t(388905),
    x = t(600164),
    g = t(436774),
    N = t(313201),
    h = t(978986),
    f = t(451603),
    E = t(885714),
    I = t(973616),
    v = t(594174),
    j = t(855981),
    S = t(55543),
    C = t(626135),
    T = t(768581),
    A = t(358085),
    L = t(998502),
    P = t(379164),
    b = t(590965),
    R = t(981631),
    Z = t(474936),
    M = t(388032),
    z = t(12205),
    k = t(197571);
function D() {
    let { analyticsLocations: e, sourceAnalyticsLocations: n } = (0, p.ZP)(m.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        l.useEffect(() => {
            C.default.track(R.rMx.PREMIUM_UPSELL_VIEWED, {
                type: Z.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: R.ZY5.NATIVE_INVITE_MODAL },
                location_stack: n,
            });
        }, [n]),
        (0, i.jsxs)(c.P3F, {
            onClick: () =>
                (0, E.Z)({
                    analyticsSource: { page: R.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: R.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: R.jXE.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: e,
                }),
            className: z.experimentUpsellError,
            children: [
                (0, i.jsx)(c.SrA, {
                    size: "md",
                    className: z.experimentUpsellIcon,
                    color: g.JX.PREMIUM_TIER_2,
                }),
                (0, i.jsx)("span", {
                    className: z.experimentUpsellText,
                    children: M.intl.string(M.t["4/W4Pz"]),
                }),
                (0, i.jsx)("span", {
                    className: z.experimentGetNitro,
                    children: M.intl.string(M.t.b6KOkI),
                }),
            ],
        })
    );
}
function O(e) {
    let { className: n } = e;
    return (0, i.jsxs)("div", {
        "aria-hidden": "true",
        className: r()(z.iconContainer, n),
        children: [
            (0, i.jsx)(j.Z, { className: z.iconSparklePlus }),
            (0, i.jsx)(c.xPt, {
                size: "custom",
                color: "currentColor",
                className: z.iconLink,
                width: 40,
                height: 40,
            }),
            (0, i.jsx)(S.Z, { className: z.iconSparkleStar }),
        ],
    });
}
function U(e) {
    let { transitionState: n } = e,
        t = (0, N.Dt)(),
        { analyticsLocations: l } = (0, p.ZP)(m.Z.INVITE_MODAL);
    return (0, i.jsx)(p.Gt, {
        value: l,
        children: (0, i.jsx)(c.Y0X, {
            "aria-labelledby": t,
            transitionState: n,
            parentComponent: "AcceptInviteModal",
            children: (0, i.jsxs)(c.hzk, {
                className: z.errorContent,
                children: [
                    (0, i.jsx)(O, { className: z.errorImage }),
                    (0, i.jsx)(c.Heading, {
                        id: t,
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        children: M.intl.string(M.t.u9zxnX),
                    }),
                    (0, i.jsx)("div", {
                        className: z.errorBody,
                        children: M.intl.string(M.t.FWkU6P),
                    }),
                    (0, i.jsx)(_.zx, {
                        size: _.zx.Sizes.LARGE,
                        onClick: () => P.Z.close(),
                        color: _.zx.Colors.BRAND,
                        children: M.intl.string(M.t.wcqOoF),
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
    let E = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
        { invite: j, error: S, submitting: Z } = (0, o.cj)([b.Z], () => b.Z.getProps());
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
        !__OVERLAY__ && A.isPlatformEmbedded && ((0, A.isWindows)() ? L.ZP.minimize() : L.ZP.restore(), L.ZP.focus());
    }, []);
    let y = (0, N.Dt)(),
        { analyticsLocations: F } = (0, p.ZP)(m.Z.INVITE_MODAL);
    if (null == j || null == E) return null;
    if (j.state === R.r2o.EXPIRED || j.state === R.r2o.BANNED || j.state === R.r2o.ERROR)
        return (0, i.jsx)(U, { transitionState: g });
    if (null == j.channel) return null;
    function G() {
        null != j && P.Z.acceptInvite(j);
    }
    let { guild: V, channel: B, inviter: W, target_application: w } = j,
        H = null != V,
        Y = null == j.guild && null == j.channel && null != j.inviter;
    if (null != w) (t = null == V ? void 0 : V.name), (a = I.ZP.createFromServer(w).getCoverImageURL(1024));
    else if (null != V)
        (t = V.name),
            (a = T.ZP.getGuildSplashURL({
                id: V.id,
                splash: V.splash,
            }));
    else if (((null == (t = B.name) || "" === t) && null != W && (t = W.username), null == t))
        throw Error("no name for group DM invite");
    let K = (0, f.yU)();
    return (
        (r = Y
            ? M.intl.string(M.t["e/6Ogt"])
            : M.intl.format(M.t["9sWQNT"], { usernameHook: () => (0, i.jsx)("span", { children: O }) })),
        (0, i.jsx)(p.Gt, {
            value: F,
            children: (0, i.jsxs)(c.Y0X, {
                size: c.CgR.DYNAMIC,
                "aria-labelledby": y,
                transitionState: g,
                className: z.container,
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
                        className: z.contentWrapper,
                        children: (0, i.jsxs)(x.Z, {
                            className: z.inviteContent,
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
                                    className: z.ctas,
                                    children: [
                                        K ? (0, i.jsx)(D, {}) : null,
                                        null == w
                                            ? (0, i.jsx)(c.aML, {
                                                  "data-migration-pending": !0,
                                                  text: K ? M.intl.string(M.t.iLyuDO) : null,
                                                  position: "bottom",
                                                  children: (e) => {
                                                      let { onMouseEnter: n, onMouseLeave: t } = e;
                                                      return (0, i.jsx)(_.zx, {
                                                          size: _.zx.Sizes.LARGE,
                                                          onClick: G,
                                                          submitting: Z,
                                                          disabled: K,
                                                          color: _.zx.Colors.BRAND,
                                                          onMouseEnter: n,
                                                          onMouseLeave: t,
                                                          children: K
                                                              ? M.intl.string(M.t.ZNCziL)
                                                              : (0, i.jsxs)("div", {
                                                                    className: z.acceptAs,
                                                                    children: [
                                                                        (0, i.jsx)(d.Z, {
                                                                            "aria-hidden": !0,
                                                                            size: c.EFr.SIZE_16,
                                                                            user: E,
                                                                            className: z.acceptAsAvatar,
                                                                        }),
                                                                        (0, i.jsx)("span", {
                                                                            className: z.acceptAsName,
                                                                            children: r,
                                                                        }),
                                                                    ],
                                                                }),
                                                      });
                                                  },
                                              })
                                            : (0, i.jsxs)("div", {
                                                  className: z.buttonGroup,
                                                  children: [
                                                      (0, i.jsx)(_.zx, {
                                                          size: _.zx.Sizes.LARGE,
                                                          onClick: G,
                                                          submitting: Z,
                                                          children: M.intl.string(M.t.RscU7I),
                                                      }),
                                                      (0, i.jsx)(_.zx, {
                                                          color: _.zx.Colors.PRIMARY,
                                                          size: _.zx.Sizes.LARGE,
                                                          onClick: G,
                                                          submitting: Z,
                                                          children: M.intl.string(M.t.eylRaY),
                                                      }),
                                                  ],
                                              }),
                                        (0, i.jsx)(x.Z, {
                                            justify: x.Z.Justify.CENTER,
                                            className: k.marginTop8,
                                            children: (0, i.jsx)(_.zx, {
                                                look: _.zx.Looks.LINK,
                                                className: z.noThanksButton,
                                                onClick: function () {
                                                    var e;
                                                    C.default.track(R.rMx.INVITE_ACCEPT_DISMISSED, {
                                                        invite_code: null == j ? void 0 : j.code,
                                                        guild_id: null == j || null == (e = j.guild) ? void 0 : e.id,
                                                    }),
                                                        P.Z.close();
                                                },
                                                color: _.zx.Colors.TRANSPARENT,
                                                children: M.intl.string(M.t.ndsK4Z),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    null != a &&
                        (0, i.jsx)("div", {
                            className: z.inviteSplash,
                            style: { backgroundImage: "url(".concat(a, ")") },
                        }),
                ],
            }),
        })
    );
}

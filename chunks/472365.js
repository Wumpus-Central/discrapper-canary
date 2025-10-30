t.d(n, { default: () => G }), t(415506);
var l = t(951288),
    i = t(647438),
    r = t(120356),
    a = t.n(r),
    s = t(990547),
    o = t(399606),
    c = t(755721),
    u = t(481060),
    d = t(588705),
    m = t(700582),
    p = t(100527),
    _ = t(906732),
    x = t(600164),
    g = t(436774),
    f = t(313201),
    N = t(978986),
    h = t(451603),
    v = t(885714),
    E = t(973616),
    I = t(594174),
    j = t(855981),
    S = t(55543),
    b = t(626135),
    C = t(768581),
    L = t(358085),
    A = t(998502),
    P = t(379164),
    T = t(590965),
    O = t(981631),
    R = t(474936),
    Z = t(388032),
    k = t(838655),
    M = t(646668),
    y = t(10198);
let D = (e) => {
    var { className: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                l,
                i = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        l,
                        i = {},
                        r = Object.keys(e);
                    for (l = 0; l < r.length; l++) (t = r[l]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (l = 0; l < r.length; l++)
                    (t = r[l]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
            }
            return i;
        })(e, ["className"]);
    let i = t.look === c.zx.Looks.LINK;
    return (0, l.jsx)(
        c.zx,
        (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    l = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }),
                    )),
                    l.forEach(function (n) {
                        var l;
                        (l = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[n] = l);
                    });
            }
            return e;
        })(
            {
                size: i ? c.zx.Sizes.MIN : c.zx.Sizes.LARGE,
                fullWidth: !i,
                className: a()(n, {
                    [M.button]: !i,
                    [M.linkButton]: i,
                }),
            },
            t,
        ),
    );
};
function z() {
    let { analyticsLocations: e, sourceAnalyticsLocations: n } = (0, _.ZP)(p.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        i.useEffect(() => {
            b.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
                type: R.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: O.ZY5.NATIVE_INVITE_MODAL },
                location_stack: n,
            });
        }, [n]),
        (0, l.jsxs)(u.P3F, {
            onClick: () =>
                (0, v.Z)({
                    analyticsSource: { page: O.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: O.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: O.jXE.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: e,
                }),
            className: k.experimentUpsellError,
            children: [
                (0, l.jsx)(u.SrA, {
                    size: "md",
                    className: k.experimentUpsellIcon,
                    color: g.JX.PREMIUM_TIER_2,
                }),
                (0, l.jsx)("span", {
                    className: k.experimentUpsellText,
                    children: Z.intl.string(Z.t["4/W4Pz"]),
                }),
                (0, l.jsx)("span", {
                    className: k.experimentGetNitro,
                    children: Z.intl.string(Z.t.b6KOkI),
                }),
            ],
        })
    );
}
function U(e) {
    let { className: n } = e;
    return (0, l.jsxs)("div", {
        "aria-hidden": "true",
        className: a()(k.iconContainer, n),
        children: [
            (0, l.jsx)(j.Z, { className: k.iconSparklePlus }),
            (0, l.jsx)(u.xPt, {
                size: "custom",
                color: "currentColor",
                className: k.iconLink,
                width: 40,
                height: 40,
            }),
            (0, l.jsx)(S.Z, { className: k.iconSparkleStar }),
        ],
    });
}
function F(e) {
    let { transitionState: n } = e,
        t = (0, f.Dt)(),
        { analyticsLocations: i } = (0, _.ZP)(p.Z.INVITE_MODAL);
    return (0, l.jsx)(_.Gt, {
        value: i,
        children: (0, l.jsx)(u.Y0X, {
            "aria-labelledby": t,
            transitionState: n,
            parentComponent: "AcceptInviteModal",
            children: (0, l.jsxs)(u.hzk, {
                className: k.errorContent,
                children: [
                    (0, l.jsx)(U, { className: k.errorImage }),
                    (0, l.jsx)(u.Heading, {
                        id: t,
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        children: Z.intl.string(Z.t.u9zxnX),
                    }),
                    (0, l.jsx)("div", {
                        className: k.errorBody,
                        children: Z.intl.string(Z.t.FWkU6P),
                    }),
                    (0, l.jsx)(D, {
                        size: D.Sizes.LARGE,
                        onClick: () => P.Z.close(),
                        color: D.Colors.BRAND,
                        children: Z.intl.string(Z.t.wcqOoF),
                    }),
                ],
            }),
        }),
    });
}
function G(e) {
    var n;
    let t,
        r,
        a,
        { transitionState: c } = e;
    (0, o.e7)([I.default], () => {
        var e;
        return null == (e = I.default.getCurrentUser()) ? void 0 : e.premiumType;
    });
    let g = (0, o.e7)([I.default], () => I.default.getCurrentUser()),
        { invite: v, error: j, submitting: S } = (0, o.cj)([T.Z], () => T.Z.getProps());
    i.useEffect(() => {
        if (null != v && null != v.guild) {
            var e;
            (0, N.pB)(null != (e = v.approximate_member_count) ? e : 0, v.code, v.guild.id);
        }
    }, [
        v,
        null == v ? void 0 : v.approximate_member_count,
        null == v ? void 0 : v.code,
        null == v || null == (n = v.guild) ? void 0 : n.id,
    ]);
    let R = (0, N.yr)();
    i.useEffect(() => {
        !__OVERLAY__ && L.isPlatformEmbedded && ((0, L.isWindows)() ? A.ZP.minimize() : A.ZP.restore(), A.ZP.focus());
    }, []);
    let M = (0, f.Dt)(),
        { analyticsLocations: U } = (0, _.ZP)(p.Z.INVITE_MODAL);
    if (null == v || null == g) return null;
    if (v.state === O.r2o.EXPIRED || v.state === O.r2o.BANNED || v.state === O.r2o.ERROR)
        return (0, l.jsx)(F, { transitionState: c });
    if (null == v.channel) return null;
    function G() {
        null != v && P.Z.acceptInvite(v);
    }
    let { guild: V, channel: w, inviter: B, target_application: W } = v,
        H = null != V,
        Y = null == v.guild && null == v.channel && null != v.inviter;
    if (null != W) (t = null == V ? void 0 : V.name), (r = E.ZP.createFromServer(W).getCoverImageURL(1024));
    else if (null != V)
        (t = V.name),
            (r = C.ZP.getGuildSplashURL({
                id: V.id,
                splash: V.splash,
            }));
    else if (((null == (t = w.name) || "" === t) && null != B && (t = B.username), null == t))
        throw Error("no name for group DM invite");
    let K = (0, h.yU)();
    return (
        (a = Y
            ? Z.intl.string(Z.t["e/6Ogt"])
            : Z.intl.format(Z.t["9sWQNT"], { usernameHook: () => (0, l.jsx)("span", { children: R }) })),
        (0, l.jsx)(_.Gt, {
            value: U,
            children: (0, l.jsxs)(u.Y0X, {
                size: u.CgR.DYNAMIC,
                "aria-labelledby": M,
                transitionState: c,
                className: k.container,
                impression: {
                    impressionName: s.ImpressionNames.INVITE_ACCEPT,
                    impressionProperties: {
                        guild_id: null == V ? void 0 : V.id,
                        invite_code: v.code,
                    },
                },
                parentComponent: "AcceptInviteModal",
                children: [
                    (0, l.jsx)(u.hzk, {
                        className: k.contentWrapper,
                        children: (0, l.jsxs)(x.Z, {
                            className: k.inviteContent,
                            direction: x.Z.Direction.VERTICAL,
                            justify: x.Z.Justify.BETWEEN,
                            children: [
                                (0, l.jsx)("div", {
                                    id: M,
                                    children: (0, l.jsx)(d.Z, {
                                        invite: v,
                                        disableUser: H,
                                        error: j,
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: k.ctas,
                                    children: [
                                        K ? (0, l.jsx)(z, {}) : null,
                                        null == W
                                            ? (0, l.jsx)(u.aML, {
                                                  "data-migration-pending": !0,
                                                  text: K ? Z.intl.string(Z.t.iLyuDO) : null,
                                                  position: "bottom",
                                                  children: (e) => {
                                                      let { onMouseEnter: n, onMouseLeave: t } = e;
                                                      return (0, l.jsx)(D, {
                                                          size: D.Sizes.LARGE,
                                                          onClick: G,
                                                          submitting: S,
                                                          disabled: K,
                                                          color: D.Colors.BRAND,
                                                          onMouseEnter: n,
                                                          onMouseLeave: t,
                                                          children: K
                                                              ? Z.intl.string(Z.t.ZNCziL)
                                                              : (0, l.jsxs)("div", {
                                                                    className: k.acceptAs,
                                                                    children: [
                                                                        (0, l.jsx)(m.Z, {
                                                                            "aria-hidden": !0,
                                                                            size: u.EFr.SIZE_16,
                                                                            user: g,
                                                                            className: k.acceptAsAvatar,
                                                                        }),
                                                                        (0, l.jsx)("span", {
                                                                            className: k.acceptAsName,
                                                                            children: a,
                                                                        }),
                                                                    ],
                                                                }),
                                                      });
                                                  },
                                              })
                                            : (0, l.jsxs)("div", {
                                                  className: k.buttonGroup,
                                                  children: [
                                                      (0, l.jsx)(D, {
                                                          size: D.Sizes.LARGE,
                                                          onClick: G,
                                                          submitting: S,
                                                          children: Z.intl.string(Z.t.RscU7I),
                                                      }),
                                                      (0, l.jsx)(D, {
                                                          color: D.Colors.PRIMARY,
                                                          size: D.Sizes.LARGE,
                                                          onClick: G,
                                                          submitting: S,
                                                          children: Z.intl.string(Z.t.eylRaY),
                                                      }),
                                                  ],
                                              }),
                                        (0, l.jsx)(x.Z, {
                                            justify: x.Z.Justify.CENTER,
                                            className: y.marginTop8,
                                            children: (0, l.jsx)(D, {
                                                look: D.Looks.LINK,
                                                className: k.noThanksButton,
                                                onClick: function () {
                                                    var e;
                                                    b.default.track(O.rMx.INVITE_ACCEPT_DISMISSED, {
                                                        invite_code: null == v ? void 0 : v.code,
                                                        guild_id: null == v || null == (e = v.guild) ? void 0 : e.id,
                                                    }),
                                                        P.Z.close();
                                                },
                                                color: D.Colors.TRANSPARENT,
                                                children: Z.intl.string(Z.t.ndsK4Z),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    null != r &&
                        (0, l.jsx)("div", {
                            className: k.inviteSplash,
                            style: { backgroundImage: "url(".concat(r, ")") },
                        }),
                ],
            }),
        })
    );
}
(D.Looks = c.zx.Looks), (D.Colors = c.zx.Colors), (D.Sizes = c.zx.Sizes);

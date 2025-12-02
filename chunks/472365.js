t.d(n, { default: () => V }), t(415506);
var r = t(54381),
    i = t(473749),
    a = t(120356),
    l = t.n(a),
    o = t(990547),
    s = t(399606),
    c = t(755721),
    u = t(481060),
    d = t(588705),
    _ = t(700582),
    p = t(100527),
    f = t(906732),
    m = t(600164),
    I = t(436774),
    E = t(313201),
    N = t(978986),
    x = t(451603),
    b = t(885714),
    v = t(973616),
    g = t(701190),
    S = t(594174),
    L = t(855981),
    h = t(55543),
    C = t(626135),
    A = t(768581),
    j = t(358085),
    T = t(998502),
    O = t(379164),
    k = t(590965),
    P = t(981631),
    R = t(474936),
    M = t(388032),
    y = t(12205),
    z = t(28731),
    Z = t(197571);
let U = (e) => {
    var { className: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                i = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (t = a[r]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
            }
            return i;
        })(e, ["className"]);
    let i = t.look === c.zx.Looks.LINK;
    return (0, r.jsx)(
        c.zx,
        (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }),
                    )),
                    r.forEach(function (n) {
                        var r;
                        (r = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[n] = r);
                    });
            }
            return e;
        })(
            {
                size: i ? c.zx.Sizes.MIN : c.zx.Sizes.LARGE,
                fullWidth: !i,
                className: l()(n, {
                    [z.button]: !i,
                    [z.linkButton]: i,
                }),
            },
            t,
        ),
    );
};
function D() {
    let { analyticsLocations: e, sourceAnalyticsLocations: n } = (0, f.ZP)(p.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        i.useEffect(() => {
            C.default.track(P.rMx.PREMIUM_UPSELL_VIEWED, {
                type: R.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: P.ZY5.NATIVE_INVITE_MODAL },
                location_stack: n,
            });
        }, [n]),
        (0, r.jsxs)(u.P3F, {
            onClick: () =>
                (0, b.Z)({
                    analyticsSource: { page: P.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: P.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: P.jXE.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: e,
                }),
            className: y.experimentUpsellError,
            children: [
                (0, r.jsx)(u.SrA, {
                    size: "md",
                    className: y.experimentUpsellIcon,
                    color: I.JX.PREMIUM_TIER_2,
                }),
                (0, r.jsx)("span", {
                    className: y.experimentUpsellText,
                    children: M.intl.string(M.t["4/W4Pz"]),
                }),
                (0, r.jsx)("span", {
                    className: y.experimentGetNitro,
                    children: M.intl.string(M.t.b6KOkI),
                }),
            ],
        })
    );
}
function G(e) {
    let { className: n } = e;
    return (0, r.jsxs)("div", {
        "aria-hidden": "true",
        className: l()(y.iconContainer, n),
        children: [
            (0, r.jsx)(L.Z, { className: y.iconSparklePlus }),
            (0, r.jsx)(u.xPt, {
                size: "custom",
                color: "currentColor",
                className: y.iconLink,
                width: 40,
                height: 40,
            }),
            (0, r.jsx)(h.Z, { className: y.iconSparkleStar }),
        ],
    });
}
function B(e) {
    let { transitionState: n } = e,
        t = (0, E.Dt)(),
        { analyticsLocations: i } = (0, f.ZP)(p.Z.INVITE_MODAL);
    return (0, r.jsx)(f.Gt, {
        value: i,
        children: (0, r.jsx)(u.Y0X, {
            "aria-labelledby": t,
            transitionState: n,
            parentComponent: "AcceptInviteModal",
            children: (0, r.jsxs)(u.hzk, {
                className: y.errorContent,
                children: [
                    (0, r.jsx)(G, { className: y.errorImage }),
                    (0, r.jsx)(u.Heading, {
                        id: t,
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        children: M.intl.string(M.t.u9zxnX),
                    }),
                    (0, r.jsx)("div", {
                        className: y.errorBody,
                        children: M.intl.string(M.t.FWkU6P),
                    }),
                    (0, r.jsx)(U, {
                        size: U.Sizes.LARGE,
                        onClick: () => O.Z.close(),
                        color: U.Colors.BRAND,
                        children: M.intl.string(M.t.wcqOoF),
                    }),
                ],
            }),
        }),
    });
}
function V(e) {
    var n;
    let t,
        a,
        l,
        { transitionState: c } = e;
    (0, s.e7)([S.default], () => {
        var e;
        return null == (e = S.default.getCurrentUser()) ? void 0 : e.premiumType;
    });
    let I = (0, s.e7)([S.default], () => S.default.getCurrentUser()),
        { invite: b, error: L, submitting: h } = (0, s.cj)([k.Z], () => k.Z.getProps()),
        R = (0, s.e7)([g.Z], () => {
            var e;
            return g.Z.getFriendMemberIds(null != (e = null == b ? void 0 : b.code) ? e : "");
        });
    i.useEffect(() => {
        if (null != b && null != b.guild) {
            var e;
            (0, N.pB)(null != (e = b.approximate_member_count) ? e : 0, b.code, b.guild.id);
        }
    }, [
        b,
        null == b ? void 0 : b.approximate_member_count,
        null == b ? void 0 : b.code,
        null == b || null == (n = b.guild) ? void 0 : n.id,
    ]);
    let z = (0, N.yr)();
    i.useEffect(() => {
        !__OVERLAY__ && j.isPlatformEmbedded && ((0, j.isWindows)() ? T.ZP.minimize() : T.ZP.restore(), T.ZP.focus());
    }, []);
    let G = (0, E.Dt)(),
        { analyticsLocations: V } = (0, f.ZP)(p.Z.INVITE_MODAL);
    if (null == b || null == I) return null;
    if (b.state === P.r2o.EXPIRED || b.state === P.r2o.BANNED || b.state === P.r2o.ERROR)
        return (0, r.jsx)(B, { transitionState: c });
    if (null == b.channel) return null;
    function W() {
        null != b && O.Z.acceptInvite(b);
    }
    let { guild: F, channel: w, inviter: Y, target_application: H } = b,
        X = null != F,
        K = null == b.guild && null == b.channel && null != b.inviter;
    if (null != H) (t = null == F ? void 0 : F.name), (a = v.ZP.createFromServer(H).getCoverImageURL(1024));
    else if (null != F)
        (t = F.name),
            (a = A.ZP.getGuildSplashURL({
                id: F.id,
                splash: F.splash,
            }));
    else if (((null == (t = w.name) || "" === t) && null != Y && (t = Y.username), null == t))
        throw Error("no name for group DM invite");
    let J = (0, x.yU)();
    return (
        (l = K
            ? M.intl.string(M.t["e/6Ogt"])
            : M.intl.format(M.t["9sWQNT"], { usernameHook: () => (0, r.jsx)("span", { children: z }) })),
        (0, r.jsx)(f.Gt, {
            value: V,
            children: (0, r.jsxs)(u.Y0X, {
                size: u.CgR.DYNAMIC,
                "aria-labelledby": G,
                transitionState: c,
                className: y.container,
                impression: {
                    impressionName: o.ImpressionNames.INVITE_ACCEPT,
                    impressionProperties: {
                        guild_id: null == F ? void 0 : F.id,
                        invite_code: b.code,
                    },
                },
                parentComponent: "AcceptInviteModal",
                children: [
                    (0, r.jsx)(u.hzk, {
                        className: y.contentWrapper,
                        children: (0, r.jsxs)(m.Z, {
                            className: y.inviteContent,
                            direction: m.Z.Direction.VERTICAL,
                            justify: m.Z.Justify.BETWEEN,
                            children: [
                                (0, r.jsx)("div", {
                                    id: G,
                                    children: (0, r.jsx)(d.Z, {
                                        invite: b,
                                        disableUser: X,
                                        error: L,
                                        friendMemberIds: R,
                                    }),
                                }),
                                (0, r.jsxs)("div", {
                                    className: y.ctas,
                                    children: [
                                        J ? (0, r.jsx)(D, {}) : null,
                                        null == H
                                            ? (0, r.jsx)(u.aML, {
                                                  "data-migration-pending": !0,
                                                  text: J ? M.intl.string(M.t.iLyuDO) : null,
                                                  position: "bottom",
                                                  children: (e) => {
                                                      let { onMouseEnter: n, onMouseLeave: t } = e;
                                                      return (0, r.jsx)(U, {
                                                          size: U.Sizes.LARGE,
                                                          onClick: W,
                                                          submitting: h,
                                                          disabled: J,
                                                          color: U.Colors.BRAND,
                                                          onMouseEnter: n,
                                                          onMouseLeave: t,
                                                          children: J
                                                              ? M.intl.string(M.t.ZNCziL)
                                                              : (0, r.jsxs)("div", {
                                                                    className: y.acceptAs,
                                                                    children: [
                                                                        (0, r.jsx)(_.Z, {
                                                                            "aria-hidden": !0,
                                                                            size: u.EFr.SIZE_16,
                                                                            user: I,
                                                                            className: y.acceptAsAvatar,
                                                                        }),
                                                                        (0, r.jsx)("span", {
                                                                            className: y.acceptAsName,
                                                                            children: l,
                                                                        }),
                                                                    ],
                                                                }),
                                                      });
                                                  },
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: y.buttonGroup,
                                                  children: [
                                                      (0, r.jsx)(U, {
                                                          size: U.Sizes.LARGE,
                                                          onClick: W,
                                                          submitting: h,
                                                          children: M.intl.string(M.t.RscU7I),
                                                      }),
                                                      (0, r.jsx)(U, {
                                                          color: U.Colors.PRIMARY,
                                                          size: U.Sizes.LARGE,
                                                          onClick: W,
                                                          submitting: h,
                                                          children: M.intl.string(M.t.eylRaY),
                                                      }),
                                                  ],
                                              }),
                                        (0, r.jsx)(m.Z, {
                                            justify: m.Z.Justify.CENTER,
                                            className: Z.marginTop8,
                                            children: (0, r.jsx)(U, {
                                                look: U.Looks.LINK,
                                                className: y.noThanksButton,
                                                onClick: function () {
                                                    var e;
                                                    C.default.track(P.rMx.INVITE_ACCEPT_DISMISSED, {
                                                        invite_code: null == b ? void 0 : b.code,
                                                        guild_id: null == b || null == (e = b.guild) ? void 0 : e.id,
                                                    }),
                                                        O.Z.close();
                                                },
                                                color: U.Colors.TRANSPARENT,
                                                children: M.intl.string(M.t.ndsK4Z),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    null != a &&
                        (0, r.jsx)("div", {
                            className: y.inviteSplash,
                            style: { backgroundImage: "url(".concat(a, ")") },
                        }),
                ],
            }),
        })
    );
}
(U.Looks = c.zx.Looks), (U.Colors = c.zx.Colors), (U.Sizes = c.zx.Sizes);

t.d(n, { default: () => W }), t(415506);
var i = t(54381),
    r = t(473749),
    l = t(120356),
    a = t.n(l),
    o = t(990547),
    s = t(793030),
    c = t(399606),
    u = t(681715),
    d = t(755721),
    _ = t(481060),
    p = t(588705),
    m = t(700582),
    f = t(100527),
    I = t(906732),
    v = t(436774),
    x = t(313201),
    b = t(978986),
    E = t(451603),
    N = t(885714),
    h = t(973616),
    g = t(598077),
    C = t(701190),
    S = t(594174),
    L = t(855981),
    j = t(55543),
    T = t(626135),
    A = t(768581),
    O = t(358085),
    k = t(998502),
    P = t(756679),
    R = t(379164),
    z = t(590965),
    M = t(981631),
    y = t(474936),
    Z = t(388032),
    U = t(12205),
    D = t(28731);
let G = (e) => {
    var { className: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                i,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (t = l[i]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (t = l[i]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ["className"]);
    let r = t.look === d.zx.Looks.LINK;
    return (0, i.jsx)(
        d.zx,
        (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    i = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }),
                    )),
                    i.forEach(function (n) {
                        var i;
                        (i = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[n] = i);
                    });
            }
            return e;
        })(
            {
                size: r ? d.zx.Sizes.MIN : d.zx.Sizes.LARGE,
                fullWidth: !r,
                className: a()(n, {
                    [D.button]: !r,
                    [D.linkButton]: r,
                }),
            },
            t,
        ),
    );
};
function B() {
    let { analyticsLocations: e, sourceAnalyticsLocations: n } = (0, I.ZP)(f.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        r.useEffect(() => {
            T.default.track(M.rMx.PREMIUM_UPSELL_VIEWED, {
                type: y.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: M.ZY5.NATIVE_INVITE_MODAL },
                location_stack: n,
            });
        }, [n]),
        (0, i.jsxs)(_.P3F, {
            onClick: () =>
                (0, N.Z)({
                    analyticsSource: { page: M.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: M.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: M.jXE.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: e,
                }),
            className: U.experimentUpsellError,
            children: [
                (0, i.jsx)(_.SrA, {
                    size: "md",
                    className: U.experimentUpsellIcon,
                    color: v.JX.PREMIUM_TIER_2,
                }),
                (0, i.jsx)("span", {
                    className: U.experimentUpsellText,
                    children: Z.intl.string(Z.t["4/W4Pz"]),
                }),
                (0, i.jsx)("span", {
                    className: U.experimentGetNitro,
                    children: Z.intl.string(Z.t.b6KOkI),
                }),
            ],
        })
    );
}
function w(e) {
    let { className: n } = e;
    return (0, i.jsxs)("div", {
        "aria-hidden": "true",
        className: a()(U.iconContainer, n),
        children: [
            (0, i.jsx)(L.Z, { className: U.iconSparklePlus }),
            (0, i.jsx)(_.xPt, {
                size: "custom",
                color: "currentColor",
                className: U.iconLink,
                width: 40,
                height: 40,
            }),
            (0, i.jsx)(j.Z, { className: U.iconSparkleStar }),
        ],
    });
}
function V(e) {
    let { transitionState: n } = e,
        t = (0, x.Dt)(),
        { analyticsLocations: r } = (0, I.ZP)(f.Z.INVITE_MODAL);
    return (0, i.jsx)(I.Gt, {
        value: r,
        children: (0, i.jsx)(s.IX, {
            "aria-label": Z.intl.string(Z.t.u9zxnX),
            transitionState: n,
            onClose: () => (R.Z.close(), Promise.resolve()),
            size: "sm",
            children: (0, i.jsxs)("div", {
                className: U.errorContent,
                children: [
                    (0, i.jsx)(w, { className: U.errorImage }),
                    (0, i.jsx)(_.Heading, {
                        id: t,
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        children: Z.intl.string(Z.t.u9zxnX),
                    }),
                    (0, i.jsx)("div", {
                        className: U.errorBody,
                        children: Z.intl.string(Z.t.FWkU6P),
                    }),
                    (0, i.jsx)(G, {
                        size: G.Sizes.LARGE,
                        onClick: () => R.Z.close(),
                        color: G.Colors.BRAND,
                        children: Z.intl.string(Z.t.wcqOoF),
                    }),
                ],
            }),
        }),
    });
}
function W(e) {
    var n, t, l, a;
    let d,
        v,
        N,
        { transitionState: L } = e;
    (0, c.e7)([S.default], () => {
        var e;
        return null == (e = S.default.getCurrentUser()) ? void 0 : e.premiumType;
    });
    let j = (0, c.e7)([S.default], () => S.default.getCurrentUser()),
        { invite: y, error: D, submitting: w } = (0, c.cj)([z.Z], () => z.Z.getProps()),
        W = (0, c.e7)([C.Z], () => {
            var e;
            return C.Z.getFriendMemberIds(null != (e = null == y ? void 0 : y.code) ? e : "");
        });
    r.useEffect(() => {
        if (null != y && null != y.guild) {
            var e;
            (0, b.pB)(null != (e = y.approximate_member_count) ? e : 0, y.code, y.guild.id);
        }
    }, [
        y,
        null == y ? void 0 : y.approximate_member_count,
        null == y ? void 0 : y.code,
        null == y || null == (n = y.guild) ? void 0 : n.id,
    ]);
    let F = (0, b.yr)(),
        { showInviter: H } = (0, P.v9)({
            location: "accept_invite_modal",
            autoTrackExposure: !0,
        });
    r.useEffect(() => {
        !__OVERLAY__ && O.isPlatformEmbedded && ((0, O.isWindows)() ? k.ZP.minimize() : k.ZP.restore(), k.ZP.focus());
    }, []);
    let X = (0, x.Dt)(),
        { analyticsLocations: Y } = (0, I.ZP)(f.Z.INVITE_MODAL);
    if (null == y || null == j) return null;
    if (y.state === M.r2o.EXPIRED || y.state === M.r2o.BANNED || y.state === M.r2o.ERROR)
        return (0, i.jsx)(V, { transitionState: L });
    if (null == y.channel) return null;
    function K() {
        null != y && R.Z.acceptInvite(y);
    }
    function Q() {
        var e;
        T.default.track(M.rMx.INVITE_ACCEPT_DISMISSED, {
            invite_code: null == y ? void 0 : y.code,
            guild_id: null == y || null == (e = y.guild) ? void 0 : e.id,
        }),
            R.Z.close();
    }
    let { guild: q, channel: J, inviter: $, target_application: ee } = y,
        en = null == y.guild && null == y.channel && null != y.inviter,
        et = H && (null != (t = null == W ? void 0 : W.length) ? t : 0) > 0 && null != $,
        ei = null != q || et;
    if (null != ee) (d = null == q ? void 0 : q.name), (v = h.ZP.createFromServer(ee).getCoverImageURL(1024));
    else if (null != q)
        (d = q.name),
            (v = A.ZP.getGuildSplashURL({
                id: q.id,
                splash: q.splash,
            }));
    else if (((null == (d = J.name) || "" === d) && null != $ && (d = $.username), null == d))
        throw Error("no name for group DM invite");
    let er = (0, E.yU)();
    return (
        (N = en
            ? Z.intl.string(Z.t["e/6Ogt"])
            : Z.intl.format(Z.t["9sWQNT"], { usernameHook: () => (0, i.jsx)("span", { children: F }) })),
        (0, i.jsx)(I.Gt, {
            value: Y,
            children: (0, i.jsx)(s.IX, {
                size: null != v ? "xl" : "sm",
                "aria-labelledby": X,
                "aria-label":
                    null != (a = null != (l = null == q ? void 0 : q.name) ? l : null == J ? void 0 : J.name) ? a : "",
                transitionState: L,
                onClose: () => (Q(), Promise.resolve()),
                trackingProps: {
                    impression: {
                        impressionName: o.ImpressionNames.INVITE_ACCEPT,
                        impressionProperties: {
                            guild_id: null == q ? void 0 : q.id,
                            invite_code: y.code,
                        },
                    },
                },
                children: (0, i.jsxs)("div", {
                    className: U.modalContainer,
                    children: [
                        (0, i.jsxs)("div", {
                            className: U.contentWrapper,
                            children: [
                                et &&
                                    (0, i.jsxs)("div", {
                                        className: U.inviterContainer,
                                        children: [
                                            (0, i.jsx)(m.Z, {
                                                user: new g.Z($),
                                                size: _.EFr.SIZE_20,
                                            }),
                                            (0, i.jsx)(_.Text, {
                                                tag: "span",
                                                variant: "text-md/medium",
                                                color: "text-subtle",
                                                children: Z.intl.format(Z.t.ri1ubC, {
                                                    usernameHook: (e, n) =>
                                                        (0, i.jsx)(
                                                            _.Text,
                                                            {
                                                                variant: "text-md/semibold",
                                                                color: "text-default",
                                                                tag: "span",
                                                                children: $.username,
                                                            },
                                                            n,
                                                        ),
                                                }),
                                            }),
                                        ],
                                    }),
                                (0, i.jsxs)("div", {
                                    className: U.inviteContent,
                                    children: [
                                        (0, i.jsx)("div", {
                                            id: X,
                                            children: (0, i.jsx)(p.Z, {
                                                invite: y,
                                                disableUser: ei,
                                                error: D,
                                                friendMemberIds: W,
                                                showInvitedByHeader: !et,
                                            }),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: U.ctas,
                                            children: [
                                                er ? (0, i.jsx)(B, {}) : null,
                                                null == ee
                                                    ? (0, i.jsx)(u.u, {
                                                          text: er ? Z.intl.string(Z.t.iLyuDO) : void 0,
                                                          position: "bottom",
                                                          children: (0, i.jsx)(G, {
                                                              size: G.Sizes.LARGE,
                                                              onClick: K,
                                                              submitting: w,
                                                              disabled: er,
                                                              color: G.Colors.BRAND,
                                                              children: er
                                                                  ? Z.intl.string(Z.t.ZNCziL)
                                                                  : (0, i.jsxs)("div", {
                                                                        className: U.acceptAs,
                                                                        children: [
                                                                            (0, i.jsx)(m.Z, {
                                                                                "aria-hidden": !0,
                                                                                size: _.EFr.SIZE_16,
                                                                                user: j,
                                                                                className: U.acceptAsAvatar,
                                                                            }),
                                                                            (0, i.jsx)("span", {
                                                                                className: U.acceptAsName,
                                                                                children: N,
                                                                            }),
                                                                        ],
                                                                    }),
                                                          }),
                                                      })
                                                    : (0, i.jsxs)("div", {
                                                          className: U.buttonGroup,
                                                          children: [
                                                              (0, i.jsx)(G, {
                                                                  size: G.Sizes.LARGE,
                                                                  onClick: K,
                                                                  submitting: w,
                                                                  children: Z.intl.string(Z.t.RscU7I),
                                                              }),
                                                              (0, i.jsx)(G, {
                                                                  color: G.Colors.PRIMARY,
                                                                  size: G.Sizes.LARGE,
                                                                  onClick: K,
                                                                  submitting: w,
                                                                  children: Z.intl.string(Z.t.eylRaY),
                                                              }),
                                                          ],
                                                      }),
                                                (0, i.jsx)("div", {
                                                    className: U.noThanksContainer,
                                                    children: (0, i.jsx)(G, {
                                                        look: G.Looks.LINK,
                                                        className: U.noThanksButton,
                                                        onClick: Q,
                                                        color: G.Colors.TRANSPARENT,
                                                        children: Z.intl.string(Z.t.ndsK4Z),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        null != v &&
                            (0, i.jsx)("div", {
                                className: U.inviteSplash,
                                style: { backgroundImage: "url(".concat(v, ")") },
                            }),
                    ],
                }),
            }),
        })
    );
}
(G.Looks = d.zx.Looks), (G.Colors = d.zx.Colors), (G.Sizes = d.zx.Sizes);

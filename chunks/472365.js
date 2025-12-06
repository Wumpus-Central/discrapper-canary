t.d(n, { default: () => w }), t(415506);
var i = t(54381),
    l = t(473749),
    r = t(120356),
    a = t.n(r),
    o = t(990547),
    s = t(793030),
    c = t(399606),
    u = t(681715),
    d = t(755721),
    _ = t(481060),
    p = t(588705),
    f = t(700582),
    m = t(100527),
    I = t(906732),
    v = t(436774),
    x = t(313201),
    E = t(978986),
    b = t(451603),
    h = t(885714),
    g = t(973616),
    N = t(598077),
    S = t(701190),
    C = t(594174),
    L = t(855981),
    j = t(55543),
    T = t(626135),
    A = t(768581),
    O = t(358085),
    k = t(998502),
    P = t(756679),
    R = t(379164),
    M = t(590965),
    z = t(981631),
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
                l = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        i,
                        l = {},
                        r = Object.keys(e);
                    for (i = 0; i < r.length; i++) (t = r[i]), n.indexOf(t) >= 0 || (l[t] = e[t]);
                    return l;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (i = 0; i < r.length; i++)
                    (t = r[i]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t]);
            }
            return l;
        })(e, ["className"]);
    let l = t.look === d.zx.Looks.LINK;
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
                size: l ? d.zx.Sizes.MIN : d.zx.Sizes.LARGE,
                fullWidth: !l,
                className: a()(n, {
                    [D.button]: !l,
                    [D.linkButton]: l,
                }),
            },
            t,
        ),
    );
};
function W() {
    let { analyticsLocations: e, sourceAnalyticsLocations: n } = (0, I.ZP)(m.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        l.useEffect(() => {
            T.default.track(z.rMx.PREMIUM_UPSELL_VIEWED, {
                type: y.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: z.ZY5.NATIVE_INVITE_MODAL },
                location_stack: n,
            });
        }, [n]),
        (0, i.jsxs)(_.P3F, {
            onClick: () =>
                (0, h.Z)({
                    analyticsSource: { page: z.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: z.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: z.jXE.GUILD_CAP_UPSELL_MODAL,
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
function B(e) {
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
        { analyticsLocations: l } = (0, I.ZP)(m.Z.INVITE_MODAL);
    return (0, i.jsx)(I.Gt, {
        value: l,
        children: (0, i.jsx)(s.IX, {
            "aria-label": Z.intl.string(Z.t.u9zxnX),
            transitionState: n,
            onClose: () => (R.Z.close(), Promise.resolve()),
            size: "sm",
            children: (0, i.jsxs)("div", {
                className: U.errorContent,
                children: [
                    (0, i.jsx)(B, { className: U.errorImage }),
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
function w(e) {
    var n, t, r, a, d, v;
    let h,
        L,
        j,
        { transitionState: y } = e;
    (0, c.e7)([C.default], () => {
        var e;
        return null == (e = C.default.getCurrentUser()) ? void 0 : e.premiumType;
    });
    let D = (0, c.e7)([C.default], () => C.default.getCurrentUser()),
        { invite: B, error: w, submitting: F } = (0, c.cj)([M.Z], () => M.Z.getProps()),
        H = (0, c.e7)([S.Z], () => {
            var e;
            return S.Z.getFriendMemberIds(null != (e = null == B ? void 0 : B.code) ? e : "");
        });
    l.useEffect(() => {
        if (null != B && null != B.guild) {
            var e;
            (0, E.pB)(null != (e = B.approximate_member_count) ? e : 0, B.code, B.guild.id);
        }
    }, [
        B,
        null == B ? void 0 : B.approximate_member_count,
        null == B ? void 0 : B.code,
        null == B || null == (n = B.guild) ? void 0 : n.id,
    ]);
    let X = (0, E.yr)(),
        { showFriendsInServer: Y, showInviter: K } = (0, P.cJ)({
            location: "accept_invite_modal",
            autoTrackExposure: !0,
            guild: null == B ? void 0 : B.guild,
        }),
        J = Y ? H : null;
    l.useEffect(() => {
        !__OVERLAY__ && O.isPlatformEmbedded && ((0, O.isWindows)() ? k.ZP.minimize() : k.ZP.restore(), k.ZP.focus());
    }, []);
    let Q = (0, x.Dt)(),
        { analyticsLocations: q } = (0, I.ZP)(m.Z.INVITE_MODAL),
        $ = null != (r = null == J ? void 0 : J.length) ? r : 0,
        ee = $ > 0;
    if (
        (l.useEffect(() => {
            if (ee && (null == B ? void 0 : B.code) != null) {
                var e;
                T.default.track(z.rMx.INVITE_FRIEND_MEMBERS_VIEWED, {
                    invite_code: null == B ? void 0 : B.code,
                    guild_id: null == (e = B.guild) ? void 0 : e.id,
                    friend_count: $,
                });
            }
        }, [ee, $, null == B ? void 0 : B.code, null == B || null == (t = B.guild) ? void 0 : t.id]),
        null == B || null == D)
    )
        return null;
    if (B.state === z.r2o.EXPIRED || B.state === z.r2o.BANNED || B.state === z.r2o.ERROR)
        return (0, i.jsx)(V, { transitionState: y });
    if (null == B.channel) return null;
    function en() {
        null != B && R.Z.acceptInvite(B);
    }
    function et() {
        var e;
        T.default.track(z.rMx.INVITE_ACCEPT_DISMISSED, {
            invite_code: null == B ? void 0 : B.code,
            guild_id: null == B || null == (e = B.guild) ? void 0 : e.id,
        }),
            R.Z.close();
    }
    let { guild: ei, channel: el, inviter: er, target_application: ea } = B,
        eo = null == B.guild && null == B.channel && null != B.inviter,
        es = K && (null != (a = null == J ? void 0 : J.length) ? a : 0) > 0 && null != er,
        ec = null != ei || es;
    if (null != ea) (h = null == ei ? void 0 : ei.name), (L = g.ZP.createFromServer(ea).getCoverImageURL(1024));
    else if (null != ei)
        (h = ei.name),
            (L = A.ZP.getGuildSplashURL({
                id: ei.id,
                splash: ei.splash,
            }));
    else if (((null == (h = el.name) || "" === h) && null != er && (h = er.username), null == h))
        throw Error("no name for group DM invite");
    let eu = (0, b.yU)();
    return (
        (j = eo
            ? Z.intl.string(Z.t["e/6Ogt"])
            : Z.intl.format(Z.t["9sWQNT"], { usernameHook: () => (0, i.jsx)("span", { children: X }) })),
        (0, i.jsx)(I.Gt, {
            value: q,
            children: (0, i.jsx)(s.IX, {
                size: null != L ? "xl" : "sm",
                "aria-labelledby": Q,
                "aria-label":
                    null != (v = null != (d = null == ei ? void 0 : ei.name) ? d : null == el ? void 0 : el.name)
                        ? v
                        : "",
                transitionState: y,
                onClose: () => (et(), Promise.resolve()),
                trackingProps: {
                    impression: {
                        impressionName: o.ImpressionNames.INVITE_ACCEPT,
                        impressionProperties: {
                            guild_id: null == ei ? void 0 : ei.id,
                            invite_code: B.code,
                        },
                    },
                },
                children: (0, i.jsxs)("div", {
                    className: U.modalContainer,
                    children: [
                        (0, i.jsxs)("div", {
                            className: U.contentWrapper,
                            children: [
                                es &&
                                    (0, i.jsxs)("div", {
                                        className: U.inviterContainer,
                                        children: [
                                            (0, i.jsx)(f.Z, {
                                                user: new N.Z(er),
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
                                                                children: er.username,
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
                                            id: Q,
                                            children: (0, i.jsx)(p.Z, {
                                                invite: B,
                                                disableUser: ec,
                                                error: w,
                                                friendMemberIds: J,
                                                showInvitedByHeader: !es,
                                            }),
                                        }),
                                        (0, i.jsxs)("div", {
                                            children: [
                                                eu ? (0, i.jsx)(W, {}) : null,
                                                null == ea
                                                    ? (0, i.jsx)(u.u, {
                                                          text: eu ? Z.intl.string(Z.t.iLyuDO) : void 0,
                                                          position: "bottom",
                                                          children: (0, i.jsx)(G, {
                                                              size: G.Sizes.LARGE,
                                                              onClick: en,
                                                              submitting: F,
                                                              disabled: eu,
                                                              color: G.Colors.BRAND,
                                                              fullWidth: !0,
                                                              children: eu
                                                                  ? Z.intl.string(Z.t.ZNCziL)
                                                                  : (0, i.jsxs)("div", {
                                                                        className: U.acceptAs,
                                                                        children: [
                                                                            (0, i.jsx)(f.Z, {
                                                                                "aria-hidden": !0,
                                                                                size: _.EFr.SIZE_16,
                                                                                user: D,
                                                                                className: U.acceptAsAvatar,
                                                                            }),
                                                                            (0, i.jsx)("span", {
                                                                                className: U.acceptAsName,
                                                                                children: j,
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
                                                                  onClick: en,
                                                                  submitting: F,
                                                                  fullWidth: !0,
                                                                  children: Z.intl.string(Z.t.RscU7I),
                                                              }),
                                                              (0, i.jsx)(G, {
                                                                  color: G.Colors.PRIMARY,
                                                                  size: G.Sizes.LARGE,
                                                                  onClick: en,
                                                                  submitting: F,
                                                                  fullWidth: !0,
                                                                  children: Z.intl.string(Z.t.eylRaY),
                                                              }),
                                                          ],
                                                      }),
                                                (0, i.jsx)("div", {
                                                    className: U.noThanksContainer,
                                                    children: (0, i.jsx)(G, {
                                                        look: G.Looks.LINK,
                                                        className: U.noThanksButton,
                                                        onClick: et,
                                                        color: G.Colors.TRANSPARENT,
                                                        fullWidth: !0,
                                                        children: Z.intl.string(Z.t.ndsK4Z),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        null != L &&
                            (0, i.jsx)("div", {
                                className: U.inviteSplash,
                                style: { backgroundImage: "url(".concat(L, ")") },
                            }),
                    ],
                }),
            }),
        })
    );
}
(G.Looks = d.zx.Looks), (G.Colors = d.zx.Colors), (G.Sizes = d.zx.Sizes);

t.d(n, { default: () => w }), t(415506);
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
    E = t(978986),
    b = t(451603),
    N = t(885714),
    g = t(973616),
    h = t(598077),
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
            T.default.track(z.rMx.PREMIUM_UPSELL_VIEWED, {
                type: y.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: z.ZY5.NATIVE_INVITE_MODAL },
                location_stack: n,
            });
        }, [n]),
        (0, i.jsxs)(_.P3F, {
            onClick: () =>
                (0, N.Z)({
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
function V(e) {
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
function W(e) {
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
                    (0, i.jsx)(V, { className: U.errorImage }),
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
    var n, t, l, a, d, v;
    let N,
        L,
        j,
        { transitionState: y } = e;
    (0, c.e7)([C.default], () => {
        var e;
        return null == (e = C.default.getCurrentUser()) ? void 0 : e.premiumType;
    });
    let D = (0, c.e7)([C.default], () => C.default.getCurrentUser()),
        { invite: V, error: w, submitting: F } = (0, c.cj)([M.Z], () => M.Z.getProps()),
        H = (0, c.e7)([S.Z], () => {
            var e;
            return S.Z.getFriendMemberIds(null != (e = null == V ? void 0 : V.code) ? e : "");
        });
    r.useEffect(() => {
        if (null != V && null != V.guild) {
            var e;
            (0, E.pB)(null != (e = V.approximate_member_count) ? e : 0, V.code, V.guild.id);
        }
    }, [
        V,
        null == V ? void 0 : V.approximate_member_count,
        null == V ? void 0 : V.code,
        null == V || null == (n = V.guild) ? void 0 : n.id,
    ]);
    let X = (0, E.yr)(),
        { showInviter: Y } = (0, P.v9)({
            location: "accept_invite_modal",
            autoTrackExposure: !0,
        });
    r.useEffect(() => {
        !__OVERLAY__ && O.isPlatformEmbedded && ((0, O.isWindows)() ? k.ZP.minimize() : k.ZP.restore(), k.ZP.focus());
    }, []);
    let K = (0, x.Dt)(),
        { analyticsLocations: Q } = (0, I.ZP)(f.Z.INVITE_MODAL),
        q = null != (l = null == H ? void 0 : H.length) ? l : 0,
        J = q > 0;
    if (
        (r.useEffect(() => {
            if (J && (null == V ? void 0 : V.code) != null) {
                var e;
                T.default.track(z.rMx.INVITE_FRIEND_MEMBERS_VIEWED, {
                    invite_code: null == V ? void 0 : V.code,
                    guild_id: null == (e = V.guild) ? void 0 : e.id,
                    friend_count: q,
                });
            }
        }, [J, q, null == V ? void 0 : V.code, null == V || null == (t = V.guild) ? void 0 : t.id]),
        null == V || null == D)
    )
        return null;
    if (V.state === z.r2o.EXPIRED || V.state === z.r2o.BANNED || V.state === z.r2o.ERROR)
        return (0, i.jsx)(W, { transitionState: y });
    if (null == V.channel) return null;
    function $() {
        null != V && R.Z.acceptInvite(V);
    }
    function ee() {
        var e;
        T.default.track(z.rMx.INVITE_ACCEPT_DISMISSED, {
            invite_code: null == V ? void 0 : V.code,
            guild_id: null == V || null == (e = V.guild) ? void 0 : e.id,
        }),
            R.Z.close();
    }
    let { guild: en, channel: et, inviter: ei, target_application: er } = V,
        el = null == V.guild && null == V.channel && null != V.inviter,
        ea = Y && (null != (a = null == H ? void 0 : H.length) ? a : 0) > 0 && null != ei,
        eo = null != en || ea;
    if (null != er) (N = null == en ? void 0 : en.name), (L = g.ZP.createFromServer(er).getCoverImageURL(1024));
    else if (null != en)
        (N = en.name),
            (L = A.ZP.getGuildSplashURL({
                id: en.id,
                splash: en.splash,
            }));
    else if (((null == (N = et.name) || "" === N) && null != ei && (N = ei.username), null == N))
        throw Error("no name for group DM invite");
    let es = (0, b.yU)();
    return (
        (j = el
            ? Z.intl.string(Z.t["e/6Ogt"])
            : Z.intl.format(Z.t["9sWQNT"], { usernameHook: () => (0, i.jsx)("span", { children: X }) })),
        (0, i.jsx)(I.Gt, {
            value: Q,
            children: (0, i.jsx)(s.IX, {
                size: null != L ? "xl" : "sm",
                "aria-labelledby": K,
                "aria-label":
                    null != (v = null != (d = null == en ? void 0 : en.name) ? d : null == et ? void 0 : et.name)
                        ? v
                        : "",
                transitionState: y,
                onClose: () => (ee(), Promise.resolve()),
                trackingProps: {
                    impression: {
                        impressionName: o.ImpressionNames.INVITE_ACCEPT,
                        impressionProperties: {
                            guild_id: null == en ? void 0 : en.id,
                            invite_code: V.code,
                        },
                    },
                },
                children: (0, i.jsxs)("div", {
                    className: U.modalContainer,
                    children: [
                        (0, i.jsxs)("div", {
                            className: U.contentWrapper,
                            children: [
                                ea &&
                                    (0, i.jsxs)("div", {
                                        className: U.inviterContainer,
                                        children: [
                                            (0, i.jsx)(m.Z, {
                                                user: new h.Z(ei),
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
                                                                children: ei.username,
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
                                            id: K,
                                            children: (0, i.jsx)(p.Z, {
                                                invite: V,
                                                disableUser: eo,
                                                error: w,
                                                friendMemberIds: H,
                                                showInvitedByHeader: !ea,
                                            }),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: U.ctas,
                                            children: [
                                                es ? (0, i.jsx)(B, {}) : null,
                                                null == er
                                                    ? (0, i.jsx)(u.u, {
                                                          text: es ? Z.intl.string(Z.t.iLyuDO) : void 0,
                                                          position: "bottom",
                                                          children: (0, i.jsx)(G, {
                                                              size: G.Sizes.LARGE,
                                                              onClick: $,
                                                              submitting: F,
                                                              disabled: es,
                                                              color: G.Colors.BRAND,
                                                              children: es
                                                                  ? Z.intl.string(Z.t.ZNCziL)
                                                                  : (0, i.jsxs)("div", {
                                                                        className: U.acceptAs,
                                                                        children: [
                                                                            (0, i.jsx)(m.Z, {
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
                                                                  onClick: $,
                                                                  submitting: F,
                                                                  children: Z.intl.string(Z.t.RscU7I),
                                                              }),
                                                              (0, i.jsx)(G, {
                                                                  color: G.Colors.PRIMARY,
                                                                  size: G.Sizes.LARGE,
                                                                  onClick: $,
                                                                  submitting: F,
                                                                  children: Z.intl.string(Z.t.eylRaY),
                                                              }),
                                                          ],
                                                      }),
                                                (0, i.jsx)("div", {
                                                    className: U.noThanksContainer,
                                                    children: (0, i.jsx)(G, {
                                                        look: G.Looks.LINK,
                                                        className: U.noThanksButton,
                                                        onClick: ee,
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

n.d(l, { default: () => z }), n(415506);
var t = n(54381),
    i = n(473749),
    a = n(120356),
    r = n.n(a),
    s = n(990547),
    u = n(793030),
    d = n(399606),
    c = n(481060),
    o = n(588705),
    m = n(700582),
    x = n(100527),
    g = n(906732),
    v = n(436774),
    h = n(313201),
    j = n(978986),
    p = n(451603),
    E = n(885714),
    _ = n(973616),
    I = n(598077),
    N = n(701190),
    f = n(594174),
    S = n(855981),
    T = n(55543),
    P = n(626135),
    C = n(768581),
    L = n(358085),
    Z = n(998502),
    M = n(756679),
    A = n(379164),
    R = n(590965),
    D = n(981631),
    k = n(474936),
    O = n(388032),
    b = n(12205);
function F() {
    let { analyticsLocations: e, sourceAnalyticsLocations: l } = (0, g.ZP)(x.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        i.useEffect(() => {
            P.default.track(D.rMx.PREMIUM_UPSELL_VIEWED, {
                type: k.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: D.ZY5.NATIVE_INVITE_MODAL },
                location_stack: l,
            });
        }, [l]),
        (0, t.jsxs)(c.P3F, {
            onClick: () =>
                (0, E.Z)({
                    analyticsSource: { page: D.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: D.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: D.jXE.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: e,
                }),
            className: b.experimentUpsellError,
            children: [
                (0, t.jsx)(c.SrA, {
                    size: "md",
                    className: b.experimentUpsellIcon,
                    color: v.JX.PREMIUM_TIER_2,
                }),
                (0, t.jsx)("span", {
                    className: b.experimentUpsellText,
                    children: O.intl.string(O.t["4/W4Pz"]),
                }),
                (0, t.jsx)("span", {
                    className: b.experimentGetNitro,
                    children: O.intl.string(O.t.b6KOkI),
                }),
            ],
        })
    );
}
function U(e) {
    let { className: l } = e;
    return (0, t.jsxs)("div", {
        "aria-hidden": "true",
        className: r()(b.iconContainer, l),
        children: [
            (0, t.jsx)(S.Z, { className: b.iconSparklePlus }),
            (0, t.jsx)(c.xPt, {
                size: "custom",
                color: "currentColor",
                className: b.iconLink,
                width: 40,
                height: 40,
            }),
            (0, t.jsx)(T.Z, { className: b.iconSparkleStar }),
        ],
    });
}
function y(e) {
    let { transitionState: l } = e,
        n = (0, h.Dt)(),
        { analyticsLocations: i } = (0, g.ZP)(x.Z.INVITE_MODAL);
    return (0, t.jsx)(g.Gt, {
        value: i,
        children: (0, t.jsx)(u.IX, {
            "aria-label": O.intl.string(O.t.u9zxnX),
            transitionState: l,
            onClose: () => (A.Z.close(), Promise.resolve()),
            size: "sm",
            children: (0, t.jsxs)("div", {
                className: b.errorContent,
                children: [
                    (0, t.jsx)(U, { className: b.errorImage }),
                    (0, t.jsx)(c.Heading, {
                        id: n,
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        children: O.intl.string(O.t.u9zxnX),
                    }),
                    (0, t.jsx)("div", {
                        className: b.errorBody,
                        children: O.intl.string(O.t.FWkU6P),
                    }),
                    (0, t.jsx)(u.zxk, {
                        fullWidth: !0,
                        onClick: () => A.Z.close(),
                        variant: "primary",
                        text: O.intl.string(O.t.wcqOoF),
                    }),
                ],
            }),
        }),
    });
}
function z(e) {
    var l, n, a, r, v, E;
    let S,
        T,
        k,
        { transitionState: U } = e;
    (0, d.e7)([f.default], () => {
        var e;
        return null == (e = f.default.getCurrentUser()) ? void 0 : e.premiumType;
    });
    let z = (0, d.e7)([f.default], () => f.default.getCurrentUser()),
        { invite: V, error: w, submitting: H } = (0, d.cj)([R.Z], () => R.Z.getProps()),
        K = (0, d.e7)([N.Z], () => {
            var e;
            return N.Z.getFriendMemberIds(null != (e = null == V ? void 0 : V.code) ? e : "");
        });
    i.useEffect(() => {
        if (null != V && null != V.guild) {
            var e;
            (0, j.pB)(null != (e = V.approximate_member_count) ? e : 0, V.code, V.guild.id);
        }
    }, [
        V,
        null == V ? void 0 : V.approximate_member_count,
        null == V ? void 0 : V.code,
        null == V || null == (l = V.guild) ? void 0 : l.id,
    ]);
    let W = (0, j.yr)(),
        { showFriendsInServer: G, showInviter: X } = (0, M.cJ)({
            location: "accept_invite_modal",
            autoTrackExposure: !0,
            guild: null == V ? void 0 : V.guild,
        }),
        q = G ? K : null;
    i.useEffect(() => {
        !__OVERLAY__ && L.isPlatformEmbedded && ((0, L.isWindows)() ? Z.ZP.minimize() : Z.ZP.restore(), Z.ZP.focus());
    }, []);
    let B = (0, h.Dt)(),
        { analyticsLocations: Q } = (0, g.ZP)(x.Z.INVITE_MODAL),
        Y = null != (a = null == q ? void 0 : q.length) ? a : 0,
        J = Y > 0;
    if (
        (i.useEffect(() => {
            if (J && (null == V ? void 0 : V.code) != null) {
                var e;
                P.default.track(D.rMx.INVITE_FRIEND_MEMBERS_VIEWED, {
                    invite_code: null == V ? void 0 : V.code,
                    guild_id: null == (e = V.guild) ? void 0 : e.id,
                    friend_count: Y,
                });
            }
        }, [J, Y, null == V ? void 0 : V.code, null == V || null == (n = V.guild) ? void 0 : n.id]),
        null == V || null == z)
    )
        return null;
    if (V.state === D.r2o.EXPIRED || V.state === D.r2o.BANNED || V.state === D.r2o.ERROR)
        return (0, t.jsx)(y, { transitionState: U });
    if (null == V.channel) return null;
    function $() {
        null != V && A.Z.acceptInvite(V);
    }
    function ee() {
        var e;
        P.default.track(D.rMx.INVITE_ACCEPT_DISMISSED, {
            invite_code: null == V ? void 0 : V.code,
            guild_id: null == V || null == (e = V.guild) ? void 0 : e.id,
        }),
            A.Z.close();
    }
    let { guild: el, channel: en, inviter: et, target_application: ei } = V,
        ea = null == V.guild && null == V.channel && null != V.inviter,
        er = X && (null != (r = null == q ? void 0 : q.length) ? r : 0) > 0 && null != et,
        es = null != el || er;
    if (null != ei) (S = null == el ? void 0 : el.name), (T = _.ZP.createFromServer(ei).getCoverImageURL(1024));
    else if (null != el)
        (S = el.name),
            (T = C.ZP.getGuildSplashURL({
                id: el.id,
                splash: el.splash,
            }));
    else if (((null == (S = en.name) || "" === S) && null != et && (S = et.username), null == S))
        throw Error("no name for group DM invite");
    let eu = (0, p.yU)();
    return (
        (k = ea
            ? O.intl.string(O.t["e/6Ogt"])
            : O.intl.format(O.t["9sWQNT"], { usernameHook: () => (0, t.jsx)("span", { children: W }) })),
        (0, t.jsx)(g.Gt, {
            value: Q,
            children: (0, t.jsx)(u.IX, {
                size: null != T ? "xl" : "sm",
                "aria-labelledby": B,
                "aria-label":
                    null != (E = null != (v = null == el ? void 0 : el.name) ? v : null == en ? void 0 : en.name)
                        ? E
                        : "",
                transitionState: U,
                onClose: () => (ee(), Promise.resolve()),
                trackingProps: {
                    impression: {
                        impressionName: s.ImpressionNames.INVITE_ACCEPT,
                        impressionProperties: {
                            guild_id: null == el ? void 0 : el.id,
                            invite_code: V.code,
                        },
                    },
                },
                children: (0, t.jsxs)("div", {
                    className: b.modalContainer,
                    children: [
                        (0, t.jsxs)("div", {
                            className: b.contentWrapper,
                            children: [
                                er &&
                                    (0, t.jsxs)("div", {
                                        className: b.inviterContainer,
                                        children: [
                                            (0, t.jsx)(m.Z, {
                                                user: new I.Z(et),
                                                size: c.EFr.SIZE_20,
                                            }),
                                            (0, t.jsx)(c.Text, {
                                                tag: "span",
                                                variant: "text-md/medium",
                                                color: "text-subtle",
                                                children: O.intl.format(O.t.ri1ubC, {
                                                    usernameHook: (e, l) =>
                                                        (0, t.jsx)(
                                                            c.Text,
                                                            {
                                                                variant: "text-md/semibold",
                                                                color: "text-default",
                                                                tag: "span",
                                                                children: et.username,
                                                            },
                                                            l,
                                                        ),
                                                }),
                                            }),
                                        ],
                                    }),
                                (0, t.jsxs)("div", {
                                    className: b.inviteContent,
                                    children: [
                                        (0, t.jsx)("div", {
                                            id: B,
                                            children: (0, t.jsx)(o.Z, {
                                                invite: V,
                                                disableUser: es,
                                                error: w,
                                                friendMemberIds: q,
                                                showInvitedByHeader: !er,
                                            }),
                                        }),
                                        (0, t.jsxs)("div", {
                                            children: [
                                                eu ? (0, t.jsx)(F, {}) : null,
                                                (0, t.jsxs)(u.Kqy, {
                                                    gap: 8,
                                                    align: "center",
                                                    children: [
                                                        null == ei
                                                            ? (0, t.jsx)(u.zxk, {
                                                                  onClick: $,
                                                                  loading: H,
                                                                  disabled: eu,
                                                                  variant: "primary",
                                                                  fullWidth: !0,
                                                                  text: eu ? O.intl.string(O.t.ZNCziL) : k,
                                                                  icon:
                                                                      eu || null == z
                                                                          ? void 0
                                                                          : () =>
                                                                                (0, t.jsx)(m.Z, {
                                                                                    "aria-hidden": !0,
                                                                                    size: c.EFr.SIZE_16,
                                                                                    user: z,
                                                                                    className: b.acceptAsAvatar,
                                                                                }),
                                                              })
                                                            : (0, t.jsxs)(u.hE2, {
                                                                  fullWidth: !0,
                                                                  children: [
                                                                      (0, t.jsx)(u.zxk, {
                                                                          variant: "secondary",
                                                                          text: O.intl.string(O.t.eylRaY),
                                                                          onClick: $,
                                                                          loading: H,
                                                                      }),
                                                                      (0, t.jsx)(u.zxk, {
                                                                          variant: "primary",
                                                                          text: O.intl.string(O.t.RscU7I),
                                                                          onClick: $,
                                                                          loading: H,
                                                                      }),
                                                                  ],
                                                              }),
                                                        (0, t.jsx)(u.Avr, {
                                                            onClick: ee,
                                                            variant: "secondary",
                                                            text: O.intl.string(O.t.ndsK4Z),
                                                            textVariant: "text-sm/medium",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        null != T &&
                            (0, t.jsx)("div", {
                                className: b.inviteSplash,
                                style: { backgroundImage: "url(".concat(T, ")") },
                            }),
                    ],
                }),
            }),
        })
    );
}

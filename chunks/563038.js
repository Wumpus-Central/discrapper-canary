n.d(l, {
    default: () => V,
}),
    n(65821);
var t = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(110259),
    u = n(158954),
    d = n(417597),
    c = n(397927),
    o = n(890698),
    m = n(966327),
    x = n(793574),
    g = n(688810),
    h = n(404374),
    _ = n(915089),
    v = n(960736),
    E = n(398884),
    j = n(772366),
    A = n(611010),
    I = n(427157),
    N = n(299091),
    f = n(287809),
    p = n(44998),
    T = n(597222),
    L = n(954571),
    S = n(486020),
    C = n(723702),
    M = n(837921),
    y = n(430914),
    R = n(972387),
    P = n(539895),
    b = n(652215),
    O = n(788868),
    k = n(985018),
    D = n(929252);

function U() {
    let { analyticsLocations: e, sourceAnalyticsLocations: l } = (0, g.Ay)(x.A.PREMIUM_UPSELL_TOOLTIP);
    return (
        i.useEffect(() => {
            L.default.track(b.HAw.PREMIUM_UPSELL_VIEWED, {
                type: O.e.GUILD_CAP_INLINE_INVITE_MODAL,
                location: {
                    page: b.liQ.NATIVE_INVITE_MODAL,
                },
                location_stack: l,
            });
        }, [l]),
        (0, t.jsxs)(c.DUT, {
            onClick: () =>
                (0, j.A)({
                    analyticsSource: {
                        page: b.ThZ.EXTERNAL_INVITE_LINK_MODAL,
                    },
                    analyticsLocation: {
                        page: b.ThZ.EXTERNAL_INVITE_LINK_MODAL,
                        section: b.JJy.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: e,
                }),
            className: D.fA,
            children: [
                (0, t.jsx)(c.tvc, {
                    size: "md",
                    className: D.Y2,
                    color: h.k0.PREMIUM_TIER_2,
                }),
                (0, t.jsx)("span", {
                    className: D.Cq,
                    children: k.intl.string(k.t["4/W4Pz"]),
                }),
                (0, t.jsx)("span", {
                    className: D.MY,
                    children: k.intl.string(k.t.b6KOkI),
                }),
            ],
        })
    );
}

function z(e) {
    let { className: l } = e;
    return (0, t.jsxs)("div", {
        "aria-hidden": "true",
        className: a()(D.zc, l),
        children: [
            (0, t.jsx)(p.A, {
                className: D.Mk,
            }),
            (0, t.jsx)(c.qYV, {
                size: "custom",
                color: "currentColor",
                className: D._Q,
                width: 40,
                height: 40,
            }),
            (0, t.jsx)(T.A, {
                className: D.sY,
            }),
        ],
    });
}

function F(e) {
    let { transitionState: l } = e,
        n = (0, _.GV)(),
        { analyticsLocations: i } = (0, g.Ay)(x.A.INVITE_MODAL);
    return (0, t.jsx)(g.f5, {
        value: i,
        children: (0, t.jsx)(u.dWK, {
            "aria-label": k.intl.string(k.t.u9zxnX),
            transitionState: l,
            onClose: () => (R.A.close(), Promise.resolve()),
            size: "sm",
            children: (0, t.jsxs)("div", {
                className: D.ow,
                children: [
                    (0, t.jsx)(z, {
                        className: D.M6,
                    }),
                    (0, t.jsx)(c.Heading, {
                        id: n,
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: k.intl.string(k.t.u9zxnX),
                    }),
                    (0, t.jsx)("div", {
                        className: D.t4,
                        children: k.intl.string(k.t.FWkU6P),
                    }),
                    (0, t.jsx)(u.$nd, {
                        fullWidth: !0,
                        onClick: () => R.A.close(),
                        variant: "primary",
                        text: k.intl.string(k.t.wcqOoF),
                    }),
                ],
            }),
        }),
    });
}

function V(e) {
    var l, n, s, a, h, j;
    let p,
        T,
        O,
        { transitionState: z } = e;
    (0, d.bG)([f.default], () => {
        var e;
        return null == (e = f.default.getCurrentUser()) ? void 0 : e.premiumType;
    });
    let V = (0, d.bG)([f.default], () => f.default.getCurrentUser()),
        { invite: w, error: H, submitting: G } = (0, d.cf)([P.A], () => P.A.getProps()),
        J = (0, d.bG)([N.A], () => {
            var e;
            return N.A.getFriendMemberIds(null != (e = null == w ? void 0 : w.code) ? e : "");
        });
    i.useEffect(() => {
        if (null != w && null != w.guild) {
            var e;
            (0, v.dR)(null != (e = w.approximate_member_count) ? e : 0, w.code, w.guild.id);
        }
    }, [
        w,
        null == w ? void 0 : w.approximate_member_count,
        null == w ? void 0 : w.code,
        null == w || null == (h = w.guild) ? void 0 : h.id,
    ]);
    let K = (0, v.uE)(),
        { showFriendsInServer: W, showInviter: Y } = (0, y.uS)({
            location: "accept_invite_modal",
            autoTrackExposure: !0,
            guild: null == w ? void 0 : w.guild,
        }),
        B = W ? J : null;
    i.useEffect(() => {
        !__OVERLAY__ && C.isPlatformEmbedded && ((0, C.isWindows)() ? M.Ay.minimize() : M.Ay.restore(), M.Ay.focus());
    }, []);
    let Z = (0, _.GV)(),
        { analyticsLocations: $ } = (0, g.Ay)(x.A.INVITE_MODAL),
        Q = null != (l = null == B ? void 0 : B.length) ? l : 0,
        q = Q > 0;
    if (
        (i.useEffect(() => {
            if (q && (null == w ? void 0 : w.code) != null) {
                var e;
                L.default.track(b.HAw.INVITE_FRIEND_MEMBERS_VIEWED, {
                    invite_code: null == w ? void 0 : w.code,
                    guild_id: null == (e = w.guild) ? void 0 : e.id,
                    friend_count: Q,
                });
            }
        }, [q, Q, null == w ? void 0 : w.code, null == w || null == (j = w.guild) ? void 0 : j.id]),
        null == w || null == V)
    )
        return null;
    if (w.state === b.elq.EXPIRED || w.state === b.elq.BANNED || w.state === b.elq.ERROR)
        return (0, t.jsx)(F, {
            transitionState: z,
        });
    if (null == w.channel) return null;

    function X() {
        null != w && R.A.acceptInvite(w);
    }

    function ee() {
        var e;
        L.default.track(b.HAw.INVITE_ACCEPT_DISMISSED, {
            invite_code: null == w ? void 0 : w.code,
            guild_id: null == w || null == (e = w.guild) ? void 0 : e.id,
        }),
            R.A.close();
    }
    let { guild: el, channel: en, inviter: et, target_application: ei } = w,
        es = null == w.guild && null == w.channel && null != w.inviter,
        ea = Y && (null != (n = null == B ? void 0 : B.length) ? n : 0) > 0 && null != et,
        er = null != el || ea;
    if (null != ei) (p = null == el ? void 0 : el.name), (T = A.Ay.createFromServer(ei).getCoverImageURL(1024));
    else if (null != el)
        (p = el.name),
            (T = S.Ay.getGuildSplashURL({
                id: el.id,
                splash: el.splash,
            }));
    else if (((null == (p = en.name) || "" === p) && null != et && (p = et.username), null == p))
        throw Error("no name for group DM invite");
    let eu = (0, E.Sn)();
    return (
        (O = es
            ? k.intl.string(k.t["e/6Ogt"])
            : k.intl.format(k.t["9sWQNT"], {
                  usernameHook: () =>
                      (0, t.jsx)("span", {
                          children: K,
                      }),
              })),
        (0, t.jsx)(g.f5, {
            value: $,
            children: (0, t.jsx)(u.dWK, {
                size: null != T ? "xl" : "sm",
                "aria-labelledby": Z,
                "aria-label":
                    null != (s = null != (a = null == el ? void 0 : el.name) ? a : null == en ? void 0 : en.name)
                        ? s
                        : "",
                transitionState: z,
                onClose: () => (ee(), Promise.resolve()),
                trackingProps: {
                    impression: {
                        impressionName: r.ImpressionNames.INVITE_ACCEPT,
                        impressionProperties: {
                            guild_id: null == el ? void 0 : el.id,
                            invite_code: w.code,
                        },
                    },
                },
                children: (0, t.jsxs)("div", {
                    className: D.jT,
                    children: [
                        (0, t.jsxs)("div", {
                            className: D.FG,
                            children: [
                                ea &&
                                    (0, t.jsxs)("div", {
                                        className: D.$N,
                                        children: [
                                            (0, t.jsx)(m.A, {
                                                user: new I.A(et),
                                                size: c._3J.SIZE_20,
                                            }),
                                            (0, t.jsx)(c.Text, {
                                                tag: "span",
                                                variant: "text-md/medium",
                                                color: "text-subtle",
                                                children: k.intl.format(k.t.ri1ubC, {
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
                                    className: D.Ro,
                                    children: [
                                        (0, t.jsx)("div", {
                                            id: Z,
                                            children: (0, t.jsx)(o.A, {
                                                invite: w,
                                                disableUser: er,
                                                error: H,
                                                friendMemberIds: B,
                                                showInvitedByHeader: !ea,
                                            }),
                                        }),
                                        (0, t.jsxs)("div", {
                                            children: [
                                                eu ? (0, t.jsx)(U, {}) : null,
                                                (0, t.jsxs)(u.BJc, {
                                                    gap: 8,
                                                    align: "center",
                                                    children: [
                                                        null == ei
                                                            ? (0, t.jsx)(u.$nd, {
                                                                  onClick: X,
                                                                  loading: G,
                                                                  disabled: eu,
                                                                  variant: "primary",
                                                                  fullWidth: !0,
                                                                  text: eu ? k.intl.string(k.t.ZNCziL) : O,
                                                                  icon:
                                                                      eu || null == V
                                                                          ? void 0
                                                                          : () =>
                                                                                (0, t.jsx)(m.A, {
                                                                                    "aria-hidden": !0,
                                                                                    size: c._3J.SIZE_16,
                                                                                    user: V,
                                                                                    className: D.Mp,
                                                                                }),
                                                              })
                                                            : (0, t.jsxs)(u.e2v, {
                                                                  fullWidth: !0,
                                                                  children: [
                                                                      (0, t.jsx)(u.$nd, {
                                                                          variant: "secondary",
                                                                          text: k.intl.string(k.t.eylRaY),
                                                                          onClick: X,
                                                                          loading: G,
                                                                      }),
                                                                      (0, t.jsx)(u.$nd, {
                                                                          variant: "primary",
                                                                          text: k.intl.string(k.t.RscU7I),
                                                                          onClick: X,
                                                                          loading: G,
                                                                      }),
                                                                  ],
                                                              }),
                                                        (0, t.jsx)(u.QWc, {
                                                            onClick: ee,
                                                            variant: "secondary",
                                                            text: k.intl.string(k.t.ndsK4Z),
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
                                className: D.ll,
                                style: {
                                    backgroundImage: "url(".concat(T, ")"),
                                },
                            }),
                    ],
                }),
            }),
        })
    );
}

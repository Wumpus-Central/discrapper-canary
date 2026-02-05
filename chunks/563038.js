t.d(l, { default: () => V });
var n = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(110259),
    c = t(158954),
    u = t(417597),
    d = t(397927),
    o = t(890698),
    m = t(966327),
    x = t(793574),
    g = t(688810),
    h = t(404374),
    _ = t(915089),
    E = t(960736),
    j = t(398884),
    A = t(772366),
    I = t(611010),
    N = t(427157),
    f = t(299091),
    v = t(287809),
    p = t(44998),
    T = t(597222),
    L = t(954571),
    S = t(486020),
    C = t(723702),
    M = t(837921),
    y = t(430914),
    R = t(972387),
    P = t(539895),
    b = t(652215),
    O = t(788868),
    k = t(985018),
    D = t(929252);
function U() {
    let { analyticsLocations: e, sourceAnalyticsLocations: l } = (0, g.Ay)(x.A.PREMIUM_UPSELL_TOOLTIP);
    return (
        i.useEffect(() => {
            L.default.track(b.HAw.PREMIUM_UPSELL_VIEWED, {
                type: O.e.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: b.liQ.NATIVE_INVITE_MODAL },
                location_stack: l,
            });
        }, [l]),
        (0, n.jsxs)(d.DUT, {
            onClick: () =>
                (0, A.A)({
                    analyticsSource: { page: b.ThZ.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: b.ThZ.EXTERNAL_INVITE_LINK_MODAL,
                        section: b.JJy.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: e,
                }),
            className: D.fA,
            children: [
                (0, n.jsx)(d.tvc, { size: "md", className: D.Y2, color: h.k0.PREMIUM_TIER_2 }),
                (0, n.jsx)("span", { className: D.Cq, children: k.intl.string(k.t["4/W4Pz"]) }),
                (0, n.jsx)("span", { className: D.MY, children: k.intl.string(k.t.b6KOkI) }),
            ],
        })
    );
}
function z(e) {
    let { className: l } = e;
    return (0, n.jsxs)("div", {
        "aria-hidden": "true",
        className: a()(D.zc, l),
        children: [
            (0, n.jsx)(p.A, { className: D.Mk }),
            (0, n.jsx)(d.qYV, { size: "custom", color: "currentColor", className: D._Q, width: 40, height: 40 }),
            (0, n.jsx)(T.A, { className: D.sY }),
        ],
    });
}
function F(e) {
    let { transitionState: l } = e,
        t = (0, _.GV)(),
        { analyticsLocations: i } = (0, g.Ay)(x.A.INVITE_MODAL);
    return (0, n.jsx)(g.f5, {
        value: i,
        children: (0, n.jsx)(c.dWK, {
            "aria-label": k.intl.string(k.t.u9zxnX),
            transitionState: l,
            onClose: () => (R.A.close(), Promise.resolve()),
            size: "sm",
            children: (0, n.jsxs)("div", {
                className: D.ow,
                children: [
                    (0, n.jsx)(z, { className: D.M6 }),
                    (0, n.jsx)(d.Heading, {
                        id: t,
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: k.intl.string(k.t.u9zxnX),
                    }),
                    (0, n.jsx)("div", { className: D.t4, children: k.intl.string(k.t.FWkU6P) }),
                    (0, n.jsx)(c.$nd, {
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
    let l,
        t,
        s,
        { transitionState: a } = e;
    (0, u.bG)([v.default], () => v.default.getCurrentUser()?.premiumType);
    let h = (0, u.bG)([v.default], () => v.default.getCurrentUser()),
        { invite: A, error: p, submitting: T } = (0, u.cf)([P.A], () => P.A.getProps()),
        O = (0, u.bG)([f.A], () => f.A.getFriendMemberIds(A?.code ?? ""));
    i.useEffect(() => {
        null != A && null != A.guild && (0, E.dR)(A.approximate_member_count ?? 0, A.code, A.guild.id);
    }, [A, A?.approximate_member_count, A?.code, A?.guild?.id]);
    let z = (0, E.uE)(),
        { showFriendsInServer: V, showInviter: w } = (0, y.uS)({
            location: "accept_invite_modal",
            autoTrackExposure: !0,
            guild: A?.guild,
        }),
        H = V ? O : null;
    i.useEffect(() => {
        !__OVERLAY__ && C.isPlatformEmbedded && ((0, C.isWindows)() ? M.Ay.minimize() : M.Ay.restore(), M.Ay.focus());
    }, []);
    let G = (0, _.GV)(),
        { analyticsLocations: J } = (0, g.Ay)(x.A.INVITE_MODAL),
        K = H?.length ?? 0,
        W = K > 0;
    if (
        (i.useEffect(() => {
            W &&
                A?.code != null &&
                L.default.track(b.HAw.INVITE_FRIEND_MEMBERS_VIEWED, {
                    invite_code: A?.code,
                    guild_id: A.guild?.id,
                    friend_count: K,
                });
        }, [W, K, A?.code, A?.guild?.id]),
        null == A || null == h)
    )
        return null;
    if (A.state === b.elq.EXPIRED || A.state === b.elq.BANNED || A.state === b.elq.ERROR)
        return (0, n.jsx)(F, { transitionState: a });
    if (null == A.channel) return null;
    function Y() {
        null != A && R.A.acceptInvite(A);
    }
    function $() {
        L.default.track(b.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: A?.code, guild_id: A?.guild?.id }), R.A.close();
    }
    let { guild: B, channel: Z, inviter: Q, target_application: q } = A,
        X = null == A.guild && null == A.channel && null != A.inviter,
        ee = w && (H?.length ?? 0) > 0 && null != Q,
        el = null != B || ee;
    if (null != q) (l = B?.name), (t = I.Ay.createFromServer(q).getCoverImageURL(1024));
    else if (null != B) (l = B.name), (t = S.Ay.getGuildSplashURL({ id: B.id, splash: B.splash }));
    else if (((null == (l = Z.name) || "" === l) && null != Q && (l = Q.username), null == l))
        throw Error("no name for group DM invite");
    let et = (0, j.Sn)();
    return (
        (s = X
            ? k.intl.string(k.t["e/6Ogt"])
            : k.intl.format(k.t["9sWQNT"], { usernameHook: () => (0, n.jsx)("span", { children: z }) })),
        (0, n.jsx)(g.f5, {
            value: J,
            children: (0, n.jsx)(c.dWK, {
                size: null != t ? "xl" : "sm",
                "aria-labelledby": G,
                "aria-label": B?.name ?? Z?.name ?? "",
                transitionState: a,
                onClose: () => ($(), Promise.resolve()),
                trackingProps: {
                    impression: {
                        impressionName: r.ImpressionNames.INVITE_ACCEPT,
                        impressionProperties: { guild_id: B?.id, invite_code: A.code },
                    },
                },
                children: (0, n.jsxs)("div", {
                    className: D.jT,
                    children: [
                        (0, n.jsxs)("div", {
                            className: D.FG,
                            children: [
                                ee &&
                                    (0, n.jsxs)("div", {
                                        className: D.$N,
                                        children: [
                                            (0, n.jsx)(m.A, { user: new N.A(Q), size: d._3J.SIZE_20 }),
                                            (0, n.jsx)(d.Text, {
                                                tag: "span",
                                                variant: "text-md/medium",
                                                color: "text-subtle",
                                                children: k.intl.format(k.t.ri1ubC, {
                                                    usernameHook: (e, l) =>
                                                        (0, n.jsx)(
                                                            d.Text,
                                                            {
                                                                variant: "text-md/semibold",
                                                                color: "text-default",
                                                                tag: "span",
                                                                children: Q.username,
                                                            },
                                                            l,
                                                        ),
                                                }),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)("div", {
                                    className: D.Ro,
                                    children: [
                                        (0, n.jsx)("div", {
                                            id: G,
                                            children: (0, n.jsx)(o.A, {
                                                invite: A,
                                                disableUser: el,
                                                error: p,
                                                friendMemberIds: H,
                                                showInvitedByHeader: !ee,
                                            }),
                                        }),
                                        (0, n.jsxs)("div", {
                                            children: [
                                                et ? (0, n.jsx)(U, {}) : null,
                                                (0, n.jsxs)(c.BJc, {
                                                    gap: 8,
                                                    align: "center",
                                                    children: [
                                                        null == q
                                                            ? (0, n.jsx)(c.$nd, {
                                                                  onClick: Y,
                                                                  loading: T,
                                                                  disabled: et,
                                                                  variant: "primary",
                                                                  fullWidth: !0,
                                                                  text: et ? k.intl.string(k.t.ZNCziL) : s,
                                                                  icon:
                                                                      et || null == h
                                                                          ? void 0
                                                                          : () =>
                                                                                (0, n.jsx)(m.A, {
                                                                                    "aria-hidden": !0,
                                                                                    size: d._3J.SIZE_16,
                                                                                    user: h,
                                                                                    className: D.Mp,
                                                                                }),
                                                              })
                                                            : (0, n.jsxs)(c.e2v, {
                                                                  fullWidth: !0,
                                                                  children: [
                                                                      (0, n.jsx)(c.$nd, {
                                                                          variant: "secondary",
                                                                          text: k.intl.string(k.t.eylRaY),
                                                                          onClick: Y,
                                                                          loading: T,
                                                                      }),
                                                                      (0, n.jsx)(c.$nd, {
                                                                          variant: "primary",
                                                                          text: k.intl.string(k.t.RscU7I),
                                                                          onClick: Y,
                                                                          loading: T,
                                                                      }),
                                                                  ],
                                                              }),
                                                        (0, n.jsx)(c.QWc, {
                                                            onClick: $,
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
                        null != t && (0, n.jsx)("div", { className: D.ll, style: { backgroundImage: `url(${t})` } }),
                    ],
                }),
            }),
        })
    );
}

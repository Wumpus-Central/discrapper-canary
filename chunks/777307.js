l.d(i, { default: () => H });
var t = l(477900),
    n = l(582128),
    s = l(562708),
    a = l(189213),
    r = l(224640),
    d = l(289873),
    o = l(331322),
    c = l(821609),
    u = l(825484),
    m = l(123292),
    _ = l(702841),
    I = l(778712),
    A = l(504394),
    E = l(966327),
    g = l(964486),
    x = l(793574),
    p = l(688810),
    N = l(915089),
    f = l(960736),
    h = l(79190),
    v = l(398884),
    j = l(395671),
    L = l(71393),
    P = l(287809),
    C = l(174459),
    y = l(486020),
    M = l(723702),
    b = l(19575),
    D = l(972387),
    R = l(539895),
    T = l(503698),
    k = l.n(T),
    U = l(939249),
    O = l(403581),
    S = l(404374),
    V = l(10392),
    q = l(82498),
    z = l(772366),
    G = l(652215),
    w = l(202541),
    W = l(375708),
    X = l(396554);
function F(e) {
    let { className: i } = e,
        { analyticsLocations: l, sourceAnalyticsLocations: s } = (0, p.Ay)(x.A.PREMIUM_UPSELL_TOOLTIP);
    return (
        n.useEffect(() => {
            (C.default.track(G.HAw.PREMIUM_UPSELL_VIEWED, {
                type: w.e.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: G.liQ.NATIVE_INVITE_MODAL },
                location_stack: s,
            }),
                (0, V.sq)(G.U7l.PREMIUM_UPSELL_VIEWED, s, () => (0, q.uq)(w.e.GUILD_CAP_INLINE_INVITE_MODAL)));
        }, [s]),
        (0, t.jsxs)(U.D, {
            onClick: () =>
                (0, z.A)({
                    analyticsSource: { page: G.ThZ.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: G.ThZ.EXTERNAL_INVITE_LINK_MODAL,
                        section: G.JJy.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: l,
                }),
            className: k()(X.fA, i),
            children: [
                (0, t.jsx)(O.t, { size: "md", className: X.Y2, color: S.k0.PREMIUM_TIER_2 }),
                (0, t.jsx)("span", { className: X.Cq, children: W.intl.string(W.t["4/W4Pz"]) }),
                (0, t.jsx)("span", { className: X.MY, children: W.intl.string(W.t.b6KOkI) }),
            ],
        })
    );
}
function Z(e) {
    let { transitionState: i, inviteCode: l } = e,
        { analyticsLocations: n } = (0, p.Ay)(x.A.INVITE_MODAL);
    return (0, t.jsx)(p.f5, {
        value: n,
        children: (0, t.jsx)(a.Modal, {
            "aria-label": W.intl.string(W.t.u9zxnX),
            title: W.intl.string(W.t.u9zxnX),
            subtitle: W.intl.string(W.t.FWkU6P),
            transitionState: i,
            onClose: () => (D.A.close(l), Promise.resolve()),
            size: "sm",
            actions: [{ text: W.intl.string(W.t.wcqOoF), onClick: () => D.A.close(l) }],
        }),
    });
}
function H(e) {
    let i,
        l,
        a,
        { transitionState: T } = e;
    (0, _.bG)([P.default], () => P.default.getCurrentUser()?.premiumType);
    let k = (0, _.bG)([P.default], () => P.default.getCurrentUser()),
        { invite: U, error: O, submitting: S, invite_instance_id: V } = (0, _.cf)([R.A], () => R.A.getProps());
    n.useEffect(() => {
        null != U && null != U.guild && (0, f.dR)(U.approximate_member_count ?? 0, U.code, U.guild.id);
    }, [U, U?.approximate_member_count, U?.code, U?.guild?.id]);
    let q = (0, f.uE)();
    (n.useEffect(() => {
        !__OVERLAY__ &&
            M.isPlatformEmbedded &&
            (document.hasFocus() || ((0, M.isWindows)() ? b.Ay.minimize() : b.Ay.restore(), b.Ay.focus()));
    }, []),
        (0, g.Ay)(() => {
            let e = U?.state === G.elq.EXPIRED || U?.state === G.elq.BANNED || U?.state === G.elq.ERROR;
            C.default.track(G.HAw.OPEN_MODAL, {
                type: e ? "Invalid Invite" : "Accept Invite",
                invite_code: U?.code,
                guild_id: U?.guild?.id,
            });
        }));
    let z = (0, N.GV)(),
        { analyticsLocations: w } = (0, p.Ay)(x.A.INVITE_MODAL);
    if (null == U || null == k)
        return (0, t.jsx)(r.d, {
            size: "md",
            "aria-labelledby": z,
            transitionState: T,
            onClose: () => (D.A.close(U?.code), Promise.resolve()),
            children: (0, t.jsx)("div", { className: X.g4, children: (0, t.jsx)(d.y, {}) }),
        });
    if (U.state === G.elq.EXPIRED || U.state === G.elq.BANNED || U.state === G.elq.ERROR)
        return (0, t.jsx)(Z, { transitionState: T, inviteCode: U.code });
    if (null == U.channel)
        return (0, t.jsx)(r.d, {
            size: "md",
            "aria-labelledby": z,
            transitionState: T,
            onClose: () => (D.A.close(U.code), Promise.resolve()),
            children: (0, t.jsx)("div", { className: X.g4, children: (0, t.jsx)(d.y, {}) }),
        });
    function H() {
        if (null == U) return;
        let { guild: e } = U;
        (0, h.qC)({
            guild: e,
            isMember: null != e && null != L.A.getGuild(e.id),
            onConfirm: () => D.A.acceptInvite(U, V),
        }) || D.A.acceptInvite(U, V);
    }
    function K() {
        (C.default.track(G.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: U?.code, guild_id: U?.guild?.id }),
            D.A.close(U?.code));
    }
    let { guild: Y, channel: $, inviter: B, target_application: Q } = U,
        J = null == U.guild && null == U.channel && null != B,
        ee = null != Y;
    if (null != Q) ((i = Y?.name), (l = j.Ay.createFromServer(Q).getCoverImageURL(1024)));
    else if (null != Y) ((i = Y.name), (l = y.Ay.getGuildSplashURL({ id: Y.id, splash: Y.splash })));
    else if (((null == (i = $.name) || "" === i) && null != B && (i = B.username), null == i))
        throw Error("no name for group DM invite");
    let ei = null != Y && (0, v.Sn)();
    return (
        (a = J
            ? W.intl.string(W.t["e/6Ogt"])
            : W.intl.format(W.t["9sWQNT"], {
                  usernameHook: () => (0, t.jsx)("span", { className: X.Pb, children: q }),
              })),
        (0, t.jsx)(p.f5, {
            value: w,
            children: (0, t.jsx)(r.d, {
                size: null != l ? "xl" : "sm",
                "aria-labelledby": z,
                "aria-label": Y?.name ?? $?.name ?? "",
                transitionState: T,
                onClose: () => (K(), Promise.resolve()),
                trackingProps: {
                    impression: {
                        impressionName: s.ImpressionNames.INVITE_ACCEPT,
                        impressionProperties: { guild_id: Y?.id, invite_code: U.code },
                    },
                },
                children: (0, t.jsxs)("div", {
                    className: X.jT,
                    children: [
                        (0, t.jsx)("div", {
                            className: X.FG,
                            children: (0, t.jsxs)("div", {
                                className: X.Ro,
                                children: [
                                    (0, t.jsx)("div", {
                                        id: z,
                                        children: (0, t.jsx)(A.A, { invite: U, disableUser: ee, error: O }),
                                    }),
                                    (0, t.jsxs)("div", {
                                        children: [
                                            ei ? (0, t.jsx)(F, {}) : null,
                                            (0, t.jsxs)(o.B, {
                                                gap: 8,
                                                align: "center",
                                                children: [
                                                    null == Q
                                                        ? (0, t.jsx)(c.$, {
                                                              onClick: H,
                                                              loading: S,
                                                              disabled: ei,
                                                              variant: "primary",
                                                              fullWidth: !0,
                                                              text: ei ? W.intl.string(W.t.ZNCziL) : a,
                                                              icon:
                                                                  ei || null == k
                                                                      ? void 0
                                                                      : () =>
                                                                            (0, t.jsx)(E.A, {
                                                                                "aria-hidden": !0,
                                                                                size: I._3.SIZE_16,
                                                                                user: k,
                                                                                className: X.Mp,
                                                                            }),
                                                          })
                                                        : (0, t.jsxs)(u.e, {
                                                              fullWidth: !0,
                                                              children: [
                                                                  (0, t.jsx)(c.$, {
                                                                      variant: "secondary",
                                                                      text: W.intl.string(W.t.eylRaY),
                                                                      onClick: H,
                                                                      loading: S,
                                                                  }),
                                                                  (0, t.jsx)(c.$, {
                                                                      variant: "primary",
                                                                      text: W.intl.string(W.t.RscU7I),
                                                                      onClick: H,
                                                                      loading: S,
                                                                  }),
                                                              ],
                                                          }),
                                                    (0, t.jsx)(m.Q, {
                                                        onClick: K,
                                                        variant: "secondary",
                                                        text: W.intl.string(W.t.ndsK4Z),
                                                        textVariant: "text-sm/medium",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        null != l && (0, t.jsx)("div", { className: X.ll, style: { backgroundImage: `url(${l})` } }),
                    ],
                }),
            }),
        })
    );
}

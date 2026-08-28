l.d(i, { default: () => F });
var t = l(477900),
    s = l(582128),
    n = l(562708),
    a = l(189213),
    r = l(224640),
    d = l(289873),
    o = l(331322),
    c = l(821609),
    u = l(825484),
    m = l(123292),
    _ = l(702841),
    I = l(778712),
    E = l(504394),
    A = l(966327),
    x = l(964486),
    g = l(793574),
    p = l(688810),
    N = l(915089),
    f = l(960736),
    h = l(398884),
    v = l(395671),
    j = l(287809),
    L = l(174459),
    P = l(486020),
    y = l(723702),
    C = l(19575),
    D = l(972387),
    M = l(539895),
    R = l(503698),
    T = l.n(R),
    b = l(939249),
    k = l(403581),
    U = l(404374),
    O = l(10392),
    S = l(82498),
    V = l(772366),
    z = l(652215),
    q = l(202541),
    w = l(375708),
    G = l(396554);
function W(e) {
    let { className: i } = e,
        { analyticsLocations: l, sourceAnalyticsLocations: n } = (0, p.Ay)(g.A.PREMIUM_UPSELL_TOOLTIP);
    return (
        s.useEffect(() => {
            L.default.track(z.HAw.PREMIUM_UPSELL_VIEWED, {
                type: q.e.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: z.liQ.NATIVE_INVITE_MODAL },
                location_stack: n,
            }),
                (0, O.sq)(z.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, S.uq)(q.e.GUILD_CAP_INLINE_INVITE_MODAL));
        }, [n]),
        (0, t.jsxs)(b.D, {
            onClick: () =>
                (0, V.A)({
                    analyticsSource: { page: z.ThZ.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: z.ThZ.EXTERNAL_INVITE_LINK_MODAL,
                        section: z.JJy.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: l,
                }),
            className: T()(G.fA, i),
            children: [
                (0, t.jsx)(k.t, { size: "md", className: G.Y2, color: U.k0.PREMIUM_TIER_2 }),
                (0, t.jsx)("span", { className: G.Cq, children: w.intl.string(w.t["4/W4Pz"]) }),
                (0, t.jsx)("span", { className: G.MY, children: w.intl.string(w.t.b6KOkI) }),
            ],
        })
    );
}
function X(e) {
    let { transitionState: i, inviteCode: l } = e,
        { analyticsLocations: s } = (0, p.Ay)(g.A.INVITE_MODAL);
    return (0, t.jsx)(p.f5, {
        value: s,
        children: (0, t.jsx)(a.Modal, {
            "aria-label": w.intl.string(w.t.u9zxnX),
            title: w.intl.string(w.t.u9zxnX),
            subtitle: w.intl.string(w.t.FWkU6P),
            transitionState: i,
            onClose: () => (D.A.close(l), Promise.resolve()),
            size: "sm",
            actions: [{ text: w.intl.string(w.t.wcqOoF), onClick: () => D.A.close(l) }],
        }),
    });
}
function F(e) {
    let i,
        l,
        a,
        { transitionState: R } = e;
    (0, _.bG)([j.default], () => j.default.getCurrentUser()?.premiumType);
    let T = (0, _.bG)([j.default], () => j.default.getCurrentUser()),
        { invite: b, error: k, submitting: U, invite_instance_id: O } = (0, _.cf)([M.A], () => M.A.getProps());
    s.useEffect(() => {
        null != b && null != b.guild && (0, f.dR)(b.approximate_member_count ?? 0, b.code, b.guild.id);
    }, [b, b?.approximate_member_count, b?.code, b?.guild?.id]);
    let S = (0, f.uE)();
    s.useEffect(() => {
        !__OVERLAY__ &&
            y.isPlatformEmbedded &&
            (document.hasFocus() || ((0, y.isWindows)() ? C.Ay.minimize() : C.Ay.restore(), C.Ay.focus()));
    }, []),
        (0, x.Ay)(() => {
            let e = b?.state === z.elq.EXPIRED || b?.state === z.elq.BANNED || b?.state === z.elq.ERROR;
            L.default.track(z.HAw.OPEN_MODAL, {
                type: e ? "Invalid Invite" : "Accept Invite",
                invite_code: b?.code,
                guild_id: b?.guild?.id,
            });
        });
    let V = (0, N.GV)(),
        { analyticsLocations: q } = (0, p.Ay)(g.A.INVITE_MODAL);
    if (null == b || null == T)
        return (0, t.jsx)(r.d, {
            size: "md",
            "aria-labelledby": V,
            transitionState: R,
            onClose: () => (D.A.close(b?.code), Promise.resolve()),
            children: (0, t.jsx)("div", { className: G.g4, children: (0, t.jsx)(d.y, {}) }),
        });
    if (b.state === z.elq.EXPIRED || b.state === z.elq.BANNED || b.state === z.elq.ERROR)
        return (0, t.jsx)(X, { transitionState: R, inviteCode: b.code });
    if (null == b.channel)
        return (0, t.jsx)(r.d, {
            size: "md",
            "aria-labelledby": V,
            transitionState: R,
            onClose: () => (D.A.close(b.code), Promise.resolve()),
            children: (0, t.jsx)("div", { className: G.g4, children: (0, t.jsx)(d.y, {}) }),
        });
    function F() {
        null != b && D.A.acceptInvite(b, O);
    }
    function Z() {
        L.default.track(z.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: b?.code, guild_id: b?.guild?.id }),
            D.A.close(b?.code);
    }
    let { guild: H, channel: K, inviter: Y, target_application: $ } = b,
        B = null == b.guild && null == b.channel && null != Y,
        Q = null != H;
    if (null != $) (i = H?.name), (l = v.Ay.createFromServer($).getCoverImageURL(1024));
    else if (null != H) (i = H.name), (l = P.Ay.getGuildSplashURL({ id: H.id, splash: H.splash }));
    else if (((null == (i = K.name) || "" === i) && null != Y && (i = Y.username), null == i))
        throw Error("no name for group DM invite");
    let J = null != H && (0, h.Sn)();
    return (
        (a = B
            ? w.intl.string(w.t["e/6Ogt"])
            : w.intl.format(w.t["9sWQNT"], {
                  usernameHook: () => (0, t.jsx)("span", { className: G.Pb, children: S }),
              })),
        (0, t.jsx)(p.f5, {
            value: q,
            children: (0, t.jsx)(r.d, {
                size: null != l ? "xl" : "sm",
                "aria-labelledby": V,
                "aria-label": H?.name ?? K?.name ?? "",
                transitionState: R,
                onClose: () => (Z(), Promise.resolve()),
                trackingProps: {
                    impression: {
                        impressionName: n.ImpressionNames.INVITE_ACCEPT,
                        impressionProperties: { guild_id: H?.id, invite_code: b.code },
                    },
                },
                children: (0, t.jsxs)("div", {
                    className: G.jT,
                    children: [
                        (0, t.jsx)("div", {
                            className: G.FG,
                            children: (0, t.jsxs)("div", {
                                className: G.Ro,
                                children: [
                                    (0, t.jsx)("div", {
                                        id: V,
                                        children: (0, t.jsx)(E.A, { invite: b, disableUser: Q, error: k }),
                                    }),
                                    (0, t.jsxs)("div", {
                                        children: [
                                            J ? (0, t.jsx)(W, {}) : null,
                                            (0, t.jsxs)(o.B, {
                                                gap: 8,
                                                align: "center",
                                                children: [
                                                    null == $
                                                        ? (0, t.jsx)(c.$, {
                                                              onClick: F,
                                                              loading: U,
                                                              disabled: J,
                                                              variant: "primary",
                                                              fullWidth: !0,
                                                              text: J ? w.intl.string(w.t.ZNCziL) : a,
                                                              icon:
                                                                  J || null == T
                                                                      ? void 0
                                                                      : () =>
                                                                            (0, t.jsx)(A.A, {
                                                                                "aria-hidden": !0,
                                                                                size: I._3.SIZE_16,
                                                                                user: T,
                                                                                className: G.Mp,
                                                                            }),
                                                          })
                                                        : (0, t.jsxs)(u.e, {
                                                              fullWidth: !0,
                                                              children: [
                                                                  (0, t.jsx)(c.$, {
                                                                      variant: "secondary",
                                                                      text: w.intl.string(w.t.eylRaY),
                                                                      onClick: F,
                                                                      loading: U,
                                                                  }),
                                                                  (0, t.jsx)(c.$, {
                                                                      variant: "primary",
                                                                      text: w.intl.string(w.t.RscU7I),
                                                                      onClick: F,
                                                                      loading: U,
                                                                  }),
                                                              ],
                                                          }),
                                                    (0, t.jsx)(m.Q, {
                                                        onClick: Z,
                                                        variant: "secondary",
                                                        text: w.intl.string(w.t.ndsK4Z),
                                                        textVariant: "text-sm/medium",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        null != l && (0, t.jsx)("div", { className: G.ll, style: { backgroundImage: `url(${l})` } }),
                    ],
                }),
            }),
        })
    );
}

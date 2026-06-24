l.d(i, { default: () => W });
var t = l(627968),
    s = l(64700),
    n = l(562708),
    a = l(189213),
    r = l(224640),
    d = l(289873),
    o = l(331322),
    c = l(821609),
    u = l(825484),
    m = l(123292),
    _ = l(702841),
    A = l(778712),
    x = l(504394),
    E = l(966327),
    I = l(964486),
    g = l(793574),
    p = l(688810),
    N = l(915089),
    f = l(960736),
    h = l(398884),
    v = l(395671),
    j = l(287809),
    L = l(174459),
    y = l(486020),
    P = l(723702),
    C = l(19575),
    b = l(972387),
    R = l(539895),
    T = l(503698),
    k = l.n(T),
    D = l(939249),
    M = l(403581),
    O = l(404374),
    S = l(772366),
    U = l(652215),
    V = l(788868),
    z = l(375708),
    q = l(310253);
function w(e) {
    let { className: i } = e,
        { analyticsLocations: l, sourceAnalyticsLocations: n } = (0, p.Ay)(g.A.PREMIUM_UPSELL_TOOLTIP);
    return (
        s.useEffect(() => {
            L.default.track(U.HAw.PREMIUM_UPSELL_VIEWED, {
                type: V.e.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: U.liQ.NATIVE_INVITE_MODAL },
                location_stack: n,
            });
        }, [n]),
        (0, t.jsxs)(D.D, {
            onClick: () =>
                (0, S.A)({
                    analyticsSource: { page: U.ThZ.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: U.ThZ.EXTERNAL_INVITE_LINK_MODAL,
                        section: U.JJy.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: l,
                }),
            className: k()(q.fA, i),
            children: [
                (0, t.jsx)(M.t, { size: "md", className: q.Y2, color: O.k0.PREMIUM_TIER_2 }),
                (0, t.jsx)("span", { className: q.Cq, children: z.intl.string(z.t["4/W4Pz"]) }),
                (0, t.jsx)("span", { className: q.MY, children: z.intl.string(z.t.b6KOkI) }),
            ],
        })
    );
}
function G(e) {
    let { transitionState: i, inviteCode: l } = e,
        { analyticsLocations: s } = (0, p.Ay)(g.A.INVITE_MODAL);
    return (0, t.jsx)(p.f5, {
        value: s,
        children: (0, t.jsx)(a.Modal, {
            "aria-label": z.intl.string(z.t.u9zxnX),
            title: z.intl.string(z.t.u9zxnX),
            subtitle: z.intl.string(z.t.FWkU6P),
            transitionState: i,
            onClose: () => (b.A.close(l), Promise.resolve()),
            size: "sm",
            actions: [{ text: z.intl.string(z.t.wcqOoF), onClick: () => b.A.close(l) }],
        }),
    });
}
function W(e) {
    let i,
        l,
        a,
        { transitionState: T } = e;
    (0, _.bG)([j.default], () => j.default.getCurrentUser()?.premiumType);
    let k = (0, _.bG)([j.default], () => j.default.getCurrentUser()),
        { invite: D, error: M, submitting: O, invite_instance_id: S } = (0, _.cf)([R.A], () => R.A.getProps());
    s.useEffect(() => {
        null != D && null != D.guild && (0, f.dR)(D.approximate_member_count ?? 0, D.code, D.guild.id);
    }, [D, D?.approximate_member_count, D?.code, D?.guild?.id]);
    let V = (0, f.uE)();
    s.useEffect(() => {
        !__OVERLAY__ &&
            P.isPlatformEmbedded &&
            (document.hasFocus() || ((0, P.isWindows)() ? C.Ay.minimize() : C.Ay.restore(), C.Ay.focus()));
    }, []),
        (0, I.Ay)(() => {
            let e = D?.state === U.elq.EXPIRED || D?.state === U.elq.BANNED || D?.state === U.elq.ERROR;
            L.default.track(U.HAw.OPEN_MODAL, {
                type: e ? "Invalid Invite" : "Accept Invite",
                invite_code: D?.code,
                guild_id: D?.guild?.id,
            });
        });
    let W = (0, N.GV)(),
        { analyticsLocations: X } = (0, p.Ay)(g.A.INVITE_MODAL);
    if (null == D || null == k)
        return (0, t.jsx)(r.d, {
            size: "md",
            "aria-labelledby": W,
            transitionState: T,
            onClose: () => (b.A.close(D?.code), Promise.resolve()),
            children: (0, t.jsx)("div", { className: q.g4, children: (0, t.jsx)(d.y, {}) }),
        });
    if (D.state === U.elq.EXPIRED || D.state === U.elq.BANNED || D.state === U.elq.ERROR)
        return (0, t.jsx)(G, { transitionState: T, inviteCode: D.code });
    if (null == D.channel)
        return (0, t.jsx)(r.d, {
            size: "md",
            "aria-labelledby": W,
            transitionState: T,
            onClose: () => (b.A.close(D.code), Promise.resolve()),
            children: (0, t.jsx)("div", { className: q.g4, children: (0, t.jsx)(d.y, {}) }),
        });
    function F() {
        null != D && b.A.acceptInvite(D, S);
    }
    function Z() {
        L.default.track(U.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: D?.code, guild_id: D?.guild?.id }),
            b.A.close(D?.code);
    }
    let { guild: H, channel: K, inviter: Y, target_application: $ } = D,
        B = null == D.guild && null == D.channel && null != Y,
        Q = null != H;
    if (null != $) (i = H?.name), (l = v.Ay.createFromServer($).getCoverImageURL(1024));
    else if (null != H) (i = H.name), (l = y.Ay.getGuildSplashURL({ id: H.id, splash: H.splash }));
    else if (((null == (i = K.name) || "" === i) && null != Y && (i = Y.username), null == i))
        throw Error("no name for group DM invite");
    let J = (0, h.Sn)();
    return (
        (a = B
            ? z.intl.string(z.t["e/6Ogt"])
            : z.intl.format(z.t["9sWQNT"], {
                  usernameHook: () => (0, t.jsx)("span", { className: q.Pb, children: V }),
              })),
        (0, t.jsx)(p.f5, {
            value: X,
            children: (0, t.jsx)(r.d, {
                size: null != l ? "xl" : "sm",
                "aria-labelledby": W,
                "aria-label": H?.name ?? K?.name ?? "",
                transitionState: T,
                onClose: () => (Z(), Promise.resolve()),
                trackingProps: {
                    impression: {
                        impressionName: n.ImpressionNames.INVITE_ACCEPT,
                        impressionProperties: { guild_id: H?.id, invite_code: D.code },
                    },
                },
                children: (0, t.jsxs)("div", {
                    className: q.jT,
                    children: [
                        (0, t.jsx)("div", {
                            className: q.FG,
                            children: (0, t.jsxs)("div", {
                                className: q.Ro,
                                children: [
                                    (0, t.jsx)("div", {
                                        id: W,
                                        children: (0, t.jsx)(x.A, { invite: D, disableUser: Q, error: M }),
                                    }),
                                    (0, t.jsxs)("div", {
                                        children: [
                                            J ? (0, t.jsx)(w, {}) : null,
                                            (0, t.jsxs)(o.B, {
                                                gap: 8,
                                                align: "center",
                                                children: [
                                                    null == $
                                                        ? (0, t.jsx)(c.$, {
                                                              onClick: F,
                                                              loading: O,
                                                              disabled: J,
                                                              variant: "primary",
                                                              fullWidth: !0,
                                                              text: J ? z.intl.string(z.t.ZNCziL) : a,
                                                              icon:
                                                                  J || null == k
                                                                      ? void 0
                                                                      : () =>
                                                                            (0, t.jsx)(E.A, {
                                                                                "aria-hidden": !0,
                                                                                size: A._3.SIZE_16,
                                                                                user: k,
                                                                                className: q.Mp,
                                                                            }),
                                                          })
                                                        : (0, t.jsxs)(u.e, {
                                                              fullWidth: !0,
                                                              children: [
                                                                  (0, t.jsx)(c.$, {
                                                                      variant: "secondary",
                                                                      text: z.intl.string(z.t.eylRaY),
                                                                      onClick: F,
                                                                      loading: O,
                                                                  }),
                                                                  (0, t.jsx)(c.$, {
                                                                      variant: "primary",
                                                                      text: z.intl.string(z.t.RscU7I),
                                                                      onClick: F,
                                                                      loading: O,
                                                                  }),
                                                              ],
                                                          }),
                                                    (0, t.jsx)(m.Q, {
                                                        onClick: Z,
                                                        variant: "secondary",
                                                        text: z.intl.string(z.t.ndsK4Z),
                                                        textVariant: "text-sm/medium",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        null != l && (0, t.jsx)("div", { className: q.ll, style: { backgroundImage: `url(${l})` } }),
                    ],
                }),
            }),
        })
    );
}

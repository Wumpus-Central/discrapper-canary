l.d(i, { default: () => K });
var t = l(477900),
    n = l(582128),
    s = l(562708),
    a = l(702841),
    r = l(189213),
    d = l(224640),
    c = l(289873),
    o = l(331322),
    u = l(821609),
    m = l(778712),
    _ = l(825484),
    A = l(123292),
    I = l(504394),
    E = l(966327),
    x = l(964486),
    g = l(793574),
    p = l(688810),
    N = l(915089),
    f = l(960736),
    v = l(804070),
    h = l(79190),
    j = l(398884),
    L = l(395671),
    P = l(71393),
    C = l(287809),
    y = l(174459),
    M = l(486020),
    b = l(723702),
    D = l(19575),
    R = l(972387),
    T = l(539895),
    k = l(503698),
    U = l.n(k),
    O = l(939249),
    S = l(403581),
    V = l(404374),
    q = l(10392),
    z = l(82498),
    G = l(772366),
    w = l(652215),
    W = l(202541),
    X = l(375708),
    F = l(396554);
function Z(e) {
    let { className: i } = e,
        { analyticsLocations: l, sourceAnalyticsLocations: s } = (0, p.Ay)(g.A.PREMIUM_UPSELL_TOOLTIP);
    return (
        n.useEffect(() => {
            (y.default.track(w.HAw.PREMIUM_UPSELL_VIEWED, {
                type: W.e.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: w.liQ.NATIVE_INVITE_MODAL },
                location_stack: s,
            }),
                (0, q.sq)(w.U7l.PREMIUM_UPSELL_VIEWED, s, () => (0, z.uq)(W.e.GUILD_CAP_INLINE_INVITE_MODAL)));
        }, [s]),
        (0, t.jsxs)(O.D, {
            onClick: () =>
                (0, G.A)({
                    analyticsSource: { page: w.ThZ.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: w.ThZ.EXTERNAL_INVITE_LINK_MODAL,
                        section: w.JJy.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: l,
                }),
            className: U()(F.fA, i),
            children: [
                (0, t.jsx)(S.t, { size: "md", className: F.Y2, color: V.k0.PREMIUM_TIER_2 }),
                (0, t.jsx)("span", { className: F.Cq, children: X.intl.string(X.t["4/W4Pz"]) }),
                (0, t.jsx)("span", { className: F.MY, children: X.intl.string(X.t.b6KOkI) }),
            ],
        })
    );
}
function H(e) {
    let { transitionState: i, inviteCode: l } = e,
        { analyticsLocations: n } = (0, p.Ay)(g.A.INVITE_MODAL);
    return (0, t.jsx)(p.f5, {
        value: n,
        children: (0, t.jsx)(r.a, {
            "aria-label": X.intl.string(X.t.u9zxnX),
            title: X.intl.string(X.t.u9zxnX),
            subtitle: X.intl.string(X.t.FWkU6P),
            transitionState: i,
            onClose: () => (R.A.close(l), Promise.resolve()),
            size: "sm",
            actions: [{ text: X.intl.string(X.t.wcqOoF), onClick: () => R.A.close(l) }],
        }),
    });
}
function K(e) {
    let i,
        l,
        r,
        { transitionState: k } = e;
    (0, a.bG)([C.default], () => C.default.getCurrentUser()?.premiumType);
    let U = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        { invite: O, error: S, submitting: V, invite_instance_id: q } = (0, a.cf)([T.A], () => T.A.getProps());
    n.useEffect(() => {
        null != O && null != O.guild && (0, f.dR)(O.approximate_member_count ?? 0, O.code, O.guild.id);
    }, [O, O?.approximate_member_count, O?.code, O?.guild?.id]);
    let z = (0, f.uE)();
    (n.useEffect(() => {
        !__OVERLAY__ &&
            b.isPlatformEmbedded &&
            (document.hasFocus() || ((0, b.isWindows)() ? D.Ay.minimize() : D.Ay.restore(), D.Ay.focus()));
    }, []),
        (0, x.Ay)(() => {
            let e = O?.state === w.elq.EXPIRED || O?.state === w.elq.BANNED || O?.state === w.elq.ERROR;
            y.default.track(w.HAw.OPEN_MODAL, {
                type: e ? "Invalid Invite" : "Accept Invite",
                invite_code: O?.code,
                guild_id: O?.guild?.id,
            });
        }));
    let G = (0, N.GV)(),
        { analyticsLocations: W } = (0, p.Ay)(g.A.INVITE_MODAL);
    if (null == O || null == U)
        return (0, t.jsx)(d.d, {
            size: "md",
            "aria-labelledby": G,
            transitionState: k,
            onClose: () => (R.A.close(O?.code), Promise.resolve()),
            children: (0, t.jsx)("div", { className: F.g4, children: (0, t.jsx)(c.y, {}) }),
        });
    if (O.state === w.elq.EXPIRED || O.state === w.elq.BANNED || O.state === w.elq.ERROR)
        return (0, t.jsx)(H, { transitionState: k, inviteCode: O.code });
    if (null == O.channel)
        return (0, t.jsx)(d.d, {
            size: "md",
            "aria-labelledby": G,
            transitionState: k,
            onClose: () => (R.A.close(O.code), Promise.resolve()),
            children: (0, t.jsx)("div", { className: F.g4, children: (0, t.jsx)(c.y, {}) }),
        });
    function K() {
        if (null == O) return;
        let { guild: e } = O;
        (0, h.qC)({
            guild: e,
            isMember: null != e && null != P.A.getGuild(e.id),
            onConfirm: () => R.A.acceptInvite(O, q),
        }) || R.A.acceptInvite(O, q);
    }
    function Y() {
        (y.default.track(w.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: O?.code, guild_id: O?.guild?.id }),
            R.A.close(O?.code));
    }
    let { guild: $, channel: B, inviter: Q, target_application: J } = O,
        ee = null == O.guild && null == O.channel && null != Q,
        ei = null != $;
    if (null != J) ((i = $?.name), (l = L.Ay.createFromServer(J).getCoverImageURL(1024)));
    else if (null != $) ((i = $.name), (l = M.Ay.getGuildSplashURL({ id: $.id, splash: $.splash })));
    else if (((null == (i = B.name) || "" === i) && null != Q && (i = Q.username), null == i))
        throw Error("no name for group DM invite");
    let el = null != $ && (0, j.Sn)();
    return (
        (r = ee
            ? X.intl.string(X.t["e/6Ogt"])
            : X.intl.format(X.t["9sWQNT"], {
                  usernameHook: () => (0, t.jsx)("span", { className: F.Pb, children: z }),
              })),
        (0, t.jsx)(p.f5, {
            value: W,
            children: (0, t.jsx)(d.d, {
                size: null != l ? "xl" : "sm",
                "aria-labelledby": G,
                "aria-label": $?.name ?? B?.name ?? "",
                transitionState: k,
                onClose: () => (Y(), Promise.resolve()),
                trackingProps: {
                    impression: {
                        impressionName: s.ImpressionNames.INVITE_ACCEPT,
                        impressionProperties: { guild_id: $?.id, invite_code: O.code },
                    },
                },
                children: (0, t.jsxs)("div", {
                    className: F.jT,
                    children: [
                        (0, t.jsx)("div", {
                            className: F.FG,
                            children: (0, t.jsxs)("div", {
                                className: F.Ro,
                                children: [
                                    (0, t.jsx)("div", {
                                        id: G,
                                        children: (0, t.jsx)(I.A, { invite: O, disableUser: ei, error: S }),
                                    }),
                                    (0, t.jsxs)("div", {
                                        children: [
                                            el ? (0, t.jsx)(Z, {}) : null,
                                            (0, t.jsxs)(o.B, {
                                                gap: 8,
                                                align: "center",
                                                children: [
                                                    (0, t.jsx)(v.A, { invite: O, location: "AcceptInviteModal" }),
                                                    null == J
                                                        ? (0, t.jsx)(u.$, {
                                                              onClick: K,
                                                              loading: V,
                                                              disabled: el,
                                                              variant: "primary",
                                                              fullWidth: !0,
                                                              text: el ? X.intl.string(X.t.ZNCziL) : r,
                                                              icon:
                                                                  el || null == U
                                                                      ? void 0
                                                                      : () =>
                                                                            (0, t.jsx)(E.A, {
                                                                                "aria-hidden": !0,
                                                                                size: m._3.SIZE_16,
                                                                                user: U,
                                                                                className: F.Mp,
                                                                            }),
                                                          })
                                                        : (0, t.jsxs)(_.e, {
                                                              fullWidth: !0,
                                                              children: [
                                                                  (0, t.jsx)(u.$, {
                                                                      variant: "secondary",
                                                                      text: X.intl.string(X.t.eylRaY),
                                                                      onClick: K,
                                                                      loading: V,
                                                                  }),
                                                                  (0, t.jsx)(u.$, {
                                                                      variant: "primary",
                                                                      text: X.intl.string(X.t.RscU7I),
                                                                      onClick: K,
                                                                      loading: V,
                                                                  }),
                                                              ],
                                                          }),
                                                    (0, t.jsx)(A.Q, {
                                                        onClick: Y,
                                                        variant: "secondary",
                                                        text: X.intl.string(X.t.ndsK4Z),
                                                        textVariant: "text-sm/medium",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        null != l && (0, t.jsx)("div", { className: F.ll, style: { backgroundImage: `url(${l})` } }),
                    ],
                }),
            }),
        })
    );
}

l.d(i, { default: () => K });
var t = l(477900),
    n = l(582128),
    s = l(613412),
    a = l(164636),
    r = l(189213),
    d = l(224640),
    o = l(289873),
    c = l(331322),
    u = l(821609),
    m = l(778712),
    _ = l(825484),
    I = l(123292),
    A = l(700156),
    E = l(966327),
    g = l(964486),
    x = l(793574),
    p = l(688810),
    N = l(915089),
    f = l(960736),
    h = l(999527),
    v = l(963055),
    j = l(398884),
    L = l(327891),
    P = l(71393),
    y = l(287809),
    C = l(129230),
    b = l(486020),
    M = l(723702),
    D = l(253400),
    R = l(972387),
    T = l(539895),
    k = l(503698),
    U = l.n(k),
    O = l(939249),
    S = l(403581),
    V = l(404374),
    q = l(739053),
    z = l(82498),
    G = l(772366),
    W = l(652215),
    w = l(682901),
    F = l(792996),
    X = l(396554);
function Z(e) {
    let { className: i } = e,
        { analyticsLocations: l, sourceAnalyticsLocations: s } = (0, p.Ay)(x.A.PREMIUM_UPSELL_TOOLTIP);
    return (
        n.useEffect(() => {
            (C.default.track(W.HAw.PREMIUM_UPSELL_VIEWED, {
                type: w.e.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: W.liQ.NATIVE_INVITE_MODAL },
                location_stack: s,
            }),
                (0, q.sq)(W.U7l.PREMIUM_UPSELL_VIEWED, s, () => (0, z.uq)(w.e.GUILD_CAP_INLINE_INVITE_MODAL)));
        }, [s]),
        (0, t.jsxs)(O.D, {
            onClick: () =>
                (0, G.A)({
                    analyticsSource: { page: W.ThZ.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: W.ThZ.EXTERNAL_INVITE_LINK_MODAL,
                        section: W.JJy.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: l,
                }),
            className: U()(X.fA, i),
            children: [
                (0, t.jsx)(S.NitroWheelIcon, { size: "md", className: X.Y2, color: V.k0.PREMIUM_TIER_2 }),
                (0, t.jsx)("span", { className: X.Cq, children: F.intl.string(F.t["4/W4Pz"]) }),
                (0, t.jsx)("span", { className: X.MY, children: F.intl.string(F.t.b6KOkI) }),
            ],
        })
    );
}
function H(e) {
    let { transitionState: i, inviteCode: l } = e,
        { analyticsLocations: n } = (0, p.Ay)(x.A.INVITE_MODAL);
    return (0, t.jsx)(p.f5, {
        value: n,
        children: (0, t.jsx)(r.a, {
            "aria-label": F.intl.string(F.t.u9zxnX),
            title: F.intl.string(F.t.u9zxnX),
            subtitle: F.intl.string(F.t.FWkU6P),
            transitionState: i,
            onClose: () => (R.A.close(l), Promise.resolve()),
            size: "sm",
            actions: [{ text: F.intl.string(F.t.wcqOoF), onClick: () => R.A.close(l) }],
        }),
    });
}
function K(e) {
    let i,
        l,
        r,
        { transitionState: k } = e;
    (0, a.bG)([y.default], () => y.default.getCurrentUser()?.premiumType);
    let U = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
        { invite: O, error: S, submitting: V, invite_instance_id: q } = (0, a.cf)([T.A], () => T.A.getProps());
    n.useEffect(() => {
        null != O && null != O.guild && (0, f.dR)(O.approximate_member_count ?? 0, O.code, O.guild.id);
    }, [O, O?.approximate_member_count, O?.code, O?.guild?.id]);
    let z = (0, f.uE)();
    (n.useEffect(() => {
        !__OVERLAY__ &&
            M.isPlatformEmbedded &&
            (document.hasFocus() || ((0, M.uF)() ? D.Ay.minimize() : D.Ay.restore(), D.Ay.focus()));
    }, []),
        (0, g.Ay)(() => {
            let e = O?.state === W.elq.EXPIRED || O?.state === W.elq.BANNED || O?.state === W.elq.ERROR;
            C.default.track(W.HAw.OPEN_MODAL, {
                type: e ? "Invalid Invite" : "Accept Invite",
                invite_code: O?.code,
                guild_id: O?.guild?.id,
            });
        }));
    let G = (0, N.GV)(),
        { analyticsLocations: w } = (0, p.Ay)(x.A.INVITE_MODAL);
    if (null == O || null == U)
        return (0, t.jsx)(d.d, {
            size: "md",
            "aria-labelledby": G,
            transitionState: k,
            onClose: () => (R.A.close(O?.code), Promise.resolve()),
            children: (0, t.jsx)("div", { className: X.g4, children: (0, t.jsx)(o.y, {}) }),
        });
    if (O.state === W.elq.EXPIRED || O.state === W.elq.BANNED || O.state === W.elq.ERROR)
        return (0, t.jsx)(H, { transitionState: k, inviteCode: O.code });
    if (null == O.channel)
        return (0, t.jsx)(d.d, {
            size: "md",
            "aria-labelledby": G,
            transitionState: k,
            onClose: () => (R.A.close(O.code), Promise.resolve()),
            children: (0, t.jsx)("div", { className: X.g4, children: (0, t.jsx)(o.y, {}) }),
        });
    function K() {
        if (null == O) return;
        let { guild: e } = O;
        (0, v.qC)({
            guild: e,
            isMember: null != e && null != P.A.getGuild(e.id),
            onConfirm: () => R.A.acceptInvite(O, q),
        }) || R.A.acceptInvite(O, q);
    }
    function Y() {
        (C.default.track(W.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: O?.code, guild_id: O?.guild?.id }),
            R.A.close(O?.code));
    }
    let { guild: $, channel: B, inviter: Q, target_application: J } = O,
        ee = null == O.guild && null == O.channel && null != Q,
        ei = null != $;
    if (null != J) ((i = $?.name), (l = L.Ay.createFromServer(J).getCoverImageURL(1024)));
    else if (null != $) ((i = $.name), (l = b.Ay.getGuildSplashURL({ id: $.id, splash: $.splash })));
    else if (((null == (i = B.name) || "" === i) && null != Q && (i = Q.username), null == i))
        throw Error("no name for group DM invite");
    let el = null != $ && (0, j.Sn)();
    return (
        (r = ee
            ? F.intl.string(F.t["e/6Ogt"])
            : F.intl.format(F.t["9sWQNT"], {
                  usernameHook: () => (0, t.jsx)("span", { className: X.Pb, children: z }),
              })),
        (0, t.jsx)(p.f5, {
            value: w,
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
                    className: X.jT,
                    children: [
                        (0, t.jsx)("div", {
                            className: X.FG,
                            children: (0, t.jsxs)("div", {
                                className: X.Ro,
                                children: [
                                    (0, t.jsx)("div", {
                                        id: G,
                                        children: (0, t.jsx)(A.A, { invite: O, disableUser: ei, error: S }),
                                    }),
                                    (0, t.jsxs)("div", {
                                        children: [
                                            el ? (0, t.jsx)(Z, {}) : null,
                                            (0, t.jsxs)(c.B, {
                                                gap: 8,
                                                align: "center",
                                                children: [
                                                    (0, t.jsx)(h.A, { invite: O, location: "AcceptInviteModal" }),
                                                    null == J
                                                        ? (0, t.jsx)(u.$, {
                                                              onClick: K,
                                                              loading: V,
                                                              disabled: el,
                                                              variant: "primary",
                                                              fullWidth: !0,
                                                              text: el ? F.intl.string(F.t.ZNCziL) : r,
                                                              icon:
                                                                  el || null == U
                                                                      ? void 0
                                                                      : () =>
                                                                            (0, t.jsx)(E.A, {
                                                                                "aria-hidden": !0,
                                                                                size: m._3.SIZE_16,
                                                                                user: U,
                                                                                className: X.Mp,
                                                                            }),
                                                          })
                                                        : (0, t.jsxs)(_.e, {
                                                              fullWidth: !0,
                                                              children: [
                                                                  (0, t.jsx)(u.$, {
                                                                      variant: "secondary",
                                                                      text: F.intl.string(F.t.eylRaY),
                                                                      onClick: K,
                                                                      loading: V,
                                                                  }),
                                                                  (0, t.jsx)(u.$, {
                                                                      variant: "primary",
                                                                      text: F.intl.string(F.t.RscU7I),
                                                                      onClick: K,
                                                                      loading: V,
                                                                  }),
                                                              ],
                                                          }),
                                                    (0, t.jsx)(I.Q, {
                                                        onClick: Y,
                                                        variant: "secondary",
                                                        text: F.intl.string(F.t.ndsK4Z),
                                                        textVariant: "body-sm/medium",
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

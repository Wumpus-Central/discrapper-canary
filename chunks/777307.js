l.d(i, { default: () => Z });
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
    g = l(778712),
    E = l(504394),
    A = l(966327),
    I = l(964486),
    x = l(793574),
    p = l(688810),
    N = l(915089),
    f = l(960736),
    h = l(665066),
    v = l(398884),
    j = l(395671),
    L = l(71393),
    y = l(287809),
    C = l(174459),
    P = l(486020),
    R = l(723702),
    b = l(19575),
    T = l(972387),
    k = l(539895),
    D = l(503698),
    M = l.n(D),
    S = l(939249),
    O = l(403581),
    U = l(404374),
    V = l(772366),
    z = l(652215),
    G = l(202541),
    w = l(375708),
    W = l(396554);
function q(e) {
    let { className: i } = e,
        { analyticsLocations: l, sourceAnalyticsLocations: s } = (0, p.Ay)(x.A.PREMIUM_UPSELL_TOOLTIP);
    return (
        n.useEffect(() => {
            C.default.track(z.HAw.PREMIUM_UPSELL_VIEWED, {
                type: G.e.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: z.liQ.NATIVE_INVITE_MODAL },
                location_stack: s,
            });
        }, [s]),
        (0, t.jsxs)(S.D, {
            onClick: () =>
                (0, V.A)({
                    analyticsSource: { page: z.ThZ.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: z.ThZ.EXTERNAL_INVITE_LINK_MODAL,
                        section: z.JJy.GUILD_CAP_UPSELL_MODAL,
                    },
                    analyticsLocations: l,
                }),
            className: M()(W.fA, i),
            children: [
                (0, t.jsx)(O.t, { size: "md", className: W.Y2, color: U.k0.PREMIUM_TIER_2 }),
                (0, t.jsx)("span", { className: W.Cq, children: w.intl.string(w.t["4/W4Pz"]) }),
                (0, t.jsx)("span", { className: W.MY, children: w.intl.string(w.t.b6KOkI) }),
            ],
        })
    );
}
var F = l(204925);
function X(e) {
    let { transitionState: i, inviteCode: l } = e,
        { analyticsLocations: n } = (0, p.Ay)(x.A.INVITE_MODAL);
    return (0, t.jsx)(p.f5, {
        value: n,
        children: (0, t.jsx)(a.Modal, {
            "aria-label": w.intl.string(w.t.u9zxnX),
            title: w.intl.string(w.t.u9zxnX),
            subtitle: w.intl.string(w.t.FWkU6P),
            transitionState: i,
            onClose: () => (T.A.close(l), Promise.resolve()),
            size: "sm",
            actions: [{ text: w.intl.string(w.t.wcqOoF), onClick: () => T.A.close(l) }],
        }),
    });
}
function Z(e) {
    let i,
        l,
        a,
        { transitionState: D } = e;
    (0, _.bG)([y.default], () => y.default.getCurrentUser()?.premiumType);
    let M = (0, _.bG)([y.default], () => y.default.getCurrentUser()),
        { invite: S, error: O, submitting: U, invite_instance_id: V } = (0, _.cf)([k.A], () => k.A.getProps());
    n.useEffect(() => {
        null != S && null != S.guild && (0, f.dR)(S.approximate_member_count ?? 0, S.code, S.guild.id);
    }, [S, S?.approximate_member_count, S?.code, S?.guild?.id]);
    let G = (0, f.uE)();
    n.useEffect(() => {
        !__OVERLAY__ &&
            R.isPlatformEmbedded &&
            (document.hasFocus() || ((0, R.isWindows)() ? b.Ay.minimize() : b.Ay.restore(), b.Ay.focus()));
    }, []),
        (0, I.Ay)(() => {
            let e = S?.state === z.elq.EXPIRED || S?.state === z.elq.BANNED || S?.state === z.elq.ERROR;
            C.default.track(z.HAw.OPEN_MODAL, {
                type: e ? "Invalid Invite" : "Accept Invite",
                invite_code: S?.code,
                guild_id: S?.guild?.id,
            });
        });
    let Z = (0, N.GV)(),
        { analyticsLocations: H } = (0, p.Ay)(x.A.INVITE_MODAL);
    if (null == S || null == M)
        return (0, t.jsx)(r.d, {
            size: "md",
            "aria-labelledby": Z,
            transitionState: D,
            onClose: () => (T.A.close(S?.code), Promise.resolve()),
            children: (0, t.jsx)("div", { className: W.g4, children: (0, t.jsx)(d.y, {}) }),
        });
    if (S.state === z.elq.EXPIRED || S.state === z.elq.BANNED || S.state === z.elq.ERROR)
        return (0, t.jsx)(X, { transitionState: D, inviteCode: S.code });
    if (null == S.channel)
        return (0, t.jsx)(r.d, {
            size: "md",
            "aria-labelledby": Z,
            transitionState: D,
            onClose: () => (T.A.close(S.code), Promise.resolve()),
            children: (0, t.jsx)("div", { className: W.g4, children: (0, t.jsx)(d.y, {}) }),
        });
    function K() {
        null != S &&
            (0, h.g)({
                guildId: S.guild?.id ?? null,
                guild: S.guild,
                isMember: null != S.guild && null != L.A.getGuild(S.guild.id),
                analyticsLocations: H,
                ageGateSource: F.w_.NSFW_SERVER_INVITE,
                onGateConfirm: e,
            }) === h.W.PROCEED &&
            e();
        function e() {
            T.A.acceptInvite(S, V);
        }
    }
    function Y() {
        C.default.track(z.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: S?.code, guild_id: S?.guild?.id }),
            T.A.close(S?.code);
    }
    let { guild: $, channel: B, inviter: Q, target_application: J } = S,
        ee = null == S.guild && null == S.channel && null != Q,
        ei = null != $;
    if (null != J) (i = $?.name), (l = j.Ay.createFromServer(J).getCoverImageURL(1024));
    else if (null != $) (i = $.name), (l = P.Ay.getGuildSplashURL({ id: $.id, splash: $.splash }));
    else if (((null == (i = B.name) || "" === i) && null != Q && (i = Q.username), null == i))
        throw Error("no name for group DM invite");
    let el = null != $ && (0, v.Sn)();
    return (
        (a = ee
            ? w.intl.string(w.t["e/6Ogt"])
            : w.intl.format(w.t["9sWQNT"], {
                  usernameHook: () => (0, t.jsx)("span", { className: W.Pb, children: G }),
              })),
        (0, t.jsx)(p.f5, {
            value: H,
            children: (0, t.jsx)(r.d, {
                size: null != l ? "xl" : "sm",
                "aria-labelledby": Z,
                "aria-label": $?.name ?? B?.name ?? "",
                transitionState: D,
                onClose: () => (Y(), Promise.resolve()),
                trackingProps: {
                    impression: {
                        impressionName: s.ImpressionNames.INVITE_ACCEPT,
                        impressionProperties: { guild_id: $?.id, invite_code: S.code },
                    },
                },
                children: (0, t.jsxs)("div", {
                    className: W.jT,
                    children: [
                        (0, t.jsx)("div", {
                            className: W.FG,
                            children: (0, t.jsxs)("div", {
                                className: W.Ro,
                                children: [
                                    (0, t.jsx)("div", {
                                        id: Z,
                                        children: (0, t.jsx)(E.A, { invite: S, disableUser: ei, error: O }),
                                    }),
                                    (0, t.jsxs)("div", {
                                        children: [
                                            el ? (0, t.jsx)(q, {}) : null,
                                            (0, t.jsxs)(o.B, {
                                                gap: 8,
                                                align: "center",
                                                children: [
                                                    null == J
                                                        ? (0, t.jsx)(c.$, {
                                                              onClick: K,
                                                              loading: U,
                                                              disabled: el,
                                                              variant: "primary",
                                                              fullWidth: !0,
                                                              text: el ? w.intl.string(w.t.ZNCziL) : a,
                                                              icon:
                                                                  el || null == M
                                                                      ? void 0
                                                                      : () =>
                                                                            (0, t.jsx)(A.A, {
                                                                                "aria-hidden": !0,
                                                                                size: g._3.SIZE_16,
                                                                                user: M,
                                                                                className: W.Mp,
                                                                            }),
                                                          })
                                                        : (0, t.jsxs)(u.e, {
                                                              fullWidth: !0,
                                                              children: [
                                                                  (0, t.jsx)(c.$, {
                                                                      variant: "secondary",
                                                                      text: w.intl.string(w.t.eylRaY),
                                                                      onClick: K,
                                                                      loading: U,
                                                                  }),
                                                                  (0, t.jsx)(c.$, {
                                                                      variant: "primary",
                                                                      text: w.intl.string(w.t.RscU7I),
                                                                      onClick: K,
                                                                      loading: U,
                                                                  }),
                                                              ],
                                                          }),
                                                    (0, t.jsx)(m.Q, {
                                                        onClick: Y,
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
                        null != l && (0, t.jsx)("div", { className: W.ll, style: { backgroundImage: `url(${l})` } }),
                    ],
                }),
            }),
        })
    );
}

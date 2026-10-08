l.d(e, { default: () => Z });
var n = l(477900),
    i = l(582128),
    s = l(284009),
    a = l.n(s),
    r = l(17928),
    o = l(189213),
    c = l(834730),
    d = l(663803),
    u = l(820739),
    m = l(859241),
    x = l(71393),
    g = l(178368),
    h = l(174459),
    C = l(473145),
    S = l(770101),
    p = l(527383),
    f = l(772707),
    j = l(503698),
    v = l.n(j),
    E = l(695366),
    N = l(548118),
    b = l(814925),
    A = l(868652),
    y = l(645619),
    U = l(434564),
    I = l(166403),
    P = l(313375),
    M = l(61780),
    T = l(660183),
    _ = l(741096);
function k(t) {
    let { tier: e } = t;
    return (0, n.jsxs)("div", {
        className: _._v,
        children: [
            (0, n.jsx)(b.A, {
                className: _.U2,
                children: (0, n.jsx)(P.A, { tier: e, color: "currentColor", className: _.Zw }),
            }),
            (0, C.gb)(e),
        ],
    });
}
function w(t) {
    let { guild: e, subscriptionChange: l } = t,
        i = (0, U.A)(e.id);
    if (0 === l) return null;
    let s = (0, C.P7)(e.id),
        a = (0, C.kN)(i + l),
        r = a - s;
    return 0 === r
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(M.A, { className: r > 0 ? _.$P : _.q0 }), (0, n.jsx)(k, { tier: a })],
          });
}
function D(t) {
    let { canceledCount: e } = t,
        l = (0, r.bG)([I.A], () => I.A.getPremiumTypeSubscription());
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: _.v,
              children: [
                  (0, n.jsx)(E.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: _.kK }),
                  (0, n.jsx)(c.E, {
                      variant: "text-md/normal",
                      className: _.at,
                      children: T.intl.format(T.t.SFpsCH, { date: l.currentPeriodEnd, canceledCount: e }),
                  }),
              ],
          });
}
function R(t) {
    let { guild: e, subscriptionChange: l, className: s } = t,
        a = (0, r.bG)([y.A], () => null != y.A.getStateForGuild(e.id));
    return (
        i.useEffect(() => {
            a || (0, A.Xd)(e.id);
        }, [a, e.id]),
        (0, n.jsxs)("div", {
            className: v()(_.gt, s),
            children: [
                (0, n.jsx)(N.Ay, { className: _.$f, guild: e, size: N.Ay.Sizes.LARGE, active: !0 }),
                (0, n.jsxs)("div", {
                    className: _.CR,
                    children: [
                        (0, n.jsx)(c.E, {
                            variant: "text-md/bold",
                            color: "text-strong",
                            className: _.J5,
                            children: e.name,
                        }),
                        (0, n.jsxs)("div", {
                            className: _.jp,
                            children: [
                                (0, n.jsx)(k, { tier: e.premiumTier }),
                                (0, n.jsx)(w, { guild: e, subscriptionChange: l }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var G = l(652215),
    L = l(680759);
let O = { type: "rive", rive: p.D, aspectRatio: "16/9" };
function F(t) {
    let {
            transitionState: e,
            guild: l,
            slotCount: i,
            canceledCount: s,
            isModifyingSubscription: a,
            error: r,
            onConfirm: o,
            onClose: d,
        } = t,
        u = [
            {
                variant: "primary",
                text: T.intl.formatToPlainString(T.t.ZU5x5w, { slotCount: i }),
                onClick: o,
                loading: a,
                disabled: a,
            },
        ];
    return (0, n.jsxs)(f.k, {
        transitionState: e,
        onClose: d,
        graphic: O,
        title: T.intl.string(T.t["7KP/fI"]),
        actions: u,
        children: [
            (0, n.jsx)(c.E, { variant: "text-md/normal", children: T.intl.string(T.t.yTlZV0) }),
            (0, n.jsx)(R, { className: L.g, guild: l, subscriptionChange: i }),
            (0, n.jsx)(c.E, {
                variant: "text-md/normal",
                className: L.$,
                children: T.intl.formatToPlainString(T.t.KPnDlu, { days: G.FI6, slotCount: i }),
            }),
            s > 0 ? (0, n.jsx)(D, { canceledCount: s }) : null,
            null != r &&
                (0, n.jsx)(c.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: r.message }),
        ],
    });
}
var B = l(636441),
    V = l(587491);
l(321073);
var z = l(935208),
    K = l(171882);
let J = {
    type: "image",
    src: "https://cdn.discordapp.com/assets/content/23384b90abfa30e78ebbd0910893fe031231876c363df46dffaadf32326e117e.svg",
    aspectRatio: "16/9",
};
function $(t) {
    let {
            transitionState: e,
            toGuild: l,
            fromGuilds: s,
            slotCount: a,
            canceledCount: r,
            isModifyingSubscription: o,
            error: d,
            onConfirm: u,
            onClose: m,
        } = t,
        x = s.length,
        g = i.useMemo(
            () => s.reduce((t, e) => (t.hasOwnProperty(e.id) || (t[e.id] = []), t[e.id].push(e), t), {}),
            [s],
        ),
        h = [{ variant: "primary", text: T.intl.string(T.t["PR0n//"]), onClick: u, loading: o, disabled: o }];
    return (0, n.jsxs)(f.k, {
        transitionState: e,
        onClose: m,
        graphic: J,
        title: T.intl.string(T.t["PR0n//"]),
        actions: h,
        children: [
            (0, n.jsx)(c.E, {
                variant: "text-md/normal",
                children: T.intl.formatToPlainString(T.t.SSA2lu, { slotCount: a, guildCount: x ?? 0 }),
            }),
            (0, n.jsx)(c.E, {
                variant: "text-xs/bold",
                className: K.bV,
                children: T.intl.format(T.t["5zQYEz"], { guildCount: x ?? 0 }),
            }),
            null != g
                ? z.default
                      .keys(g)
                      .map((t) =>
                          (0, n.jsx)(R, { className: K.A, guild: g[t][0], subscriptionChange: -1 * g[t].length }, t),
                      )
                : null,
            (0, n.jsx)(c.E, {
                variant: "text-xs/normal",
                className: K.bV,
                children: T.intl.format(T.t.ct6oxD, { slotCount: a }),
            }),
            (0, n.jsx)("div", { className: K.P4, children: (0, n.jsx)(R, { guild: l, subscriptionChange: s.length }) }),
            r > 0 ? (0, n.jsx)(D, { canceledCount: r }) : null,
            null != d &&
                (0, n.jsx)(c.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: d.message }),
        ],
    });
}
var H = l(285753),
    Q = l(568065),
    Y = l(406476);
let Z = function (t) {
    let { guildBoostSlots: e, selectedGuild: l, locationSection: s, intent: p, transitionState: f, onClose: j } = t,
        v = (0, C.D$)(g.A.boostSlots);
    (a()(null != e || null != l, "Must either provide slots or an initial selected guild"),
        a()(!e?.some((t) => t.isOnCooldown()), "If slots are provided, they must not be on cooldown"));
    let E = [
            null == e ? "UNUSED_QUANTITY_SELECT" : null,
            null == l ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
        ].filter((t) => null != t),
        [N, b] = (0, r.yK)([m.A], () => [m.A.isModifyingAppliedBoost, m.A.applyBoostError]),
        [A, y] = i.useState(E[0]),
        [U, I] = i.useState(!1),
        [P, M] = i.useState(l),
        [_, k] = i.useState(e ?? v.slice(0, 1)),
        w = i.useMemo(
            () =>
                null == _
                    ? []
                    : _.map((t) => {
                          let { premiumGuildSubscription: e } = t;
                          return x.A.getGuild(e?.guildId);
                      }).filter((t) => null != t),
            [_],
        ),
        D = i.useMemo(() => _?.[0]?.premiumGuildSubscription != null, [_]),
        R = (0, H.A)("CONFIRM" === A || "SUCCESS" === A);
    function L() {
        return (
            j("SUCCESS" === A),
            h.default.track(G.HAw.MODAL_DISMISSED, { type: G.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s }),
            Promise.resolve()
        );
    }
    i.useEffect(() => {
        h.default.track(G.HAw.OPEN_MODAL, { type: G.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s });
    }, [s]);
    let O = {
        UNUSED_QUANTITY_SELECT: () => (
            a()(null != e || 0 !== v.length, "Cannot provide no slots if there are no other available slots"),
            (0, n.jsx)(o.a, {
                transitionState: f,
                onClose: L,
                size: "md",
                title: T.intl.string(T.t["9FFrrT"]),
                actions: [
                    { variant: "secondary", text: T.intl.string(T.t["1BPTsK"]), onClick: L },
                    { variant: "primary", text: T.intl.string(T.t["/uwYda"]), onClick: () => y("CONFIRM") },
                ],
                children: (0, n.jsxs)("div", {
                    className: Y.pS,
                    children: [
                        (0, n.jsx)(c.E, {
                            variant: "text-md/normal",
                            className: Y.TH,
                            children: T.intl.string(T.t.x5qw5U),
                        }),
                        (0, n.jsxs)("div", {
                            className: Y.g9,
                            children: [
                                (0, n.jsx)(d.l, {
                                    value: _.length,
                                    onChange: (t) => k(v.slice(0, t)),
                                    minValue: 1,
                                    maxValue: v.length,
                                }),
                                (0, n.jsx)(c.E, {
                                    className: Y.v$,
                                    variant: "text-md/normal",
                                    children: T.intl.string(T.t["Vl8TC+"]),
                                }),
                            ],
                        }),
                    ],
                }),
            })
        ),
        GUILD_SELECT: () =>
            (0, n.jsx)(S.default, {
                onClose: L,
                onSelectGuild: (t) => {
                    (M(t), y("CONFIRM"));
                },
                transitionState: f,
                isTransfer: D,
                selectedSlotGuilds: w,
            }),
        CONFIRM() {
            if (null == P) return null;
            let t = _.filter((t) => (0, C.I5)(t)).length,
                e = _.length;
            async function l() {
                if ((I(!1), null != P && _?.length !== 0)) {
                    a()(
                        !_.some((t) => t.isOnCooldown()),
                        "Cannot use a premium guild subscription slot while on cooldown",
                    );
                    try {
                        (await Promise.all(
                            _.map((t) => {
                                let { premiumGuildSubscription: e } = t;
                                return null != e ? (0, u.jZ)(e.guildId, e.id) : Promise.resolve();
                            }),
                        ),
                            await (0, u.VA)(
                                P.id,
                                _.map((t) => {
                                    let { id: e } = t;
                                    return e;
                                }),
                                p === Q.Pn.PERK,
                            ),
                            y("SUCCESS"));
                    } catch (t) {
                        I(!0);
                    }
                }
            }
            return D
                ? (0, n.jsx)($, {
                      transitionState: f,
                      toGuild: P,
                      fromGuilds: w,
                      slotCount: e,
                      canceledCount: t,
                      isModifyingSubscription: N,
                      error: U ? b : null,
                      onConfirm: l,
                      onClose: L,
                  })
                : (0, n.jsx)(F, {
                      transitionState: f,
                      guild: P,
                      slotCount: e,
                      canceledCount: t,
                      isModifyingSubscription: N,
                      error: U ? b : null,
                      onConfirm: l,
                      onClose: L,
                  });
        },
        SUCCESS: () =>
            (0, n.jsx)(V.A, {
                mediaUrls: R.mediaUrls,
                isSuccess: R.isSuccess,
                transitionState: f,
                onClose: L,
                children: (t, e) =>
                    (0, n.jsx)(B.A, {
                        transitionState: f,
                        guild: P,
                        guildBoostQuantity: _.length,
                        isTransfer: D,
                        graphic: t,
                        onClose: e,
                    }),
            }),
    }[A];
    return null == O ? null : O();
};

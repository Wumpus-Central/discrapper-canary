l.d(e, { default: () => Y });
var n = l(477900),
    i = l(582128),
    s = l(284009),
    a = l.n(s),
    r = l(17928),
    o = l(189213),
    c = l(834730),
    u = l(663803),
    d = l(820739),
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
    b = l(548118),
    A = l(814925),
    N = l(868652),
    y = l(645619),
    U = l(434564),
    I = l(166403),
    M = l(313375),
    P = l(61780),
    T = l(105292),
    _ = l(741096);
function w(t) {
    let { tier: e } = t;
    return (0, n.jsxs)("div", {
        className: _._v,
        children: [
            (0, n.jsx)(A.A, {
                className: _.U2,
                children: (0, n.jsx)(M.A, { tier: e, color: "currentColor", className: _.Zw }),
            }),
            (0, C.gb)(e),
        ],
    });
}
function k(t) {
    let { guild: e, subscriptionChange: l } = t,
        i = (0, U.A)(e.id);
    if (0 === l) return null;
    let s = (0, C.P7)(e.id),
        a = (0, C.kN)(i + l),
        r = a - s;
    return 0 === r
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(P.A, { className: r > 0 ? _.$P : _.q0 }), (0, n.jsx)(w, { tier: a })],
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
function G(t) {
    let { guild: e, subscriptionChange: l, className: s } = t,
        a = (0, r.bG)([y.A], () => null != y.A.getStateForGuild(e.id));
    return (
        i.useEffect(() => {
            a || (0, N.Xd)(e.id);
        }, [a, e.id]),
        (0, n.jsxs)("div", {
            className: v()(_.gt, s),
            children: [
                (0, n.jsx)(b.Ay, { className: _.$f, guild: e, size: b.Ay.Sizes.LARGE, active: !0 }),
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
                                (0, n.jsx)(w, { tier: e.premiumTier }),
                                (0, n.jsx)(k, { guild: e, subscriptionChange: l }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var R = l(652215),
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
            onClose: u,
        } = t,
        d = [
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
        onClose: u,
        graphic: O,
        title: T.intl.string(T.t["7KP/fI"]),
        actions: d,
        children: [
            (0, n.jsx)(c.E, { variant: "text-md/normal", children: T.intl.string(T.t.yTlZV0) }),
            (0, n.jsx)(G, { className: L.g, guild: l, subscriptionChange: i }),
            (0, n.jsx)(c.E, {
                variant: "text-md/normal",
                className: L.$,
                children: T.intl.formatToPlainString(T.t.KPnDlu, { days: R.FI6, slotCount: i }),
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
    J = l(171882);
let K = {
    type: "image",
    src: "https://cdn.discordapp.com/assets/content/c39bf3f555b9b18a22b715961fa73700c4979bbcd634fc3f12d40d0603a53b66.svg",
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
            error: u,
            onConfirm: d,
            onClose: m,
        } = t,
        x = s.length,
        g = i.useMemo(
            () => s.reduce((t, e) => (t.hasOwnProperty(e.id) || (t[e.id] = []), t[e.id].push(e), t), {}),
            [s],
        ),
        h = [{ variant: "primary", text: T.intl.string(T.t["PR0n//"]), onClick: d, loading: o, disabled: o }];
    return (0, n.jsxs)(f.k, {
        transitionState: e,
        onClose: m,
        graphic: K,
        title: T.intl.string(T.t["PR0n//"]),
        actions: h,
        children: [
            (0, n.jsx)(c.E, {
                variant: "text-md/normal",
                children: T.intl.formatToPlainString(T.t.SSA2lu, { slotCount: a, guildCount: x ?? 0 }),
            }),
            (0, n.jsx)(c.E, {
                variant: "text-xs/bold",
                className: J.bV,
                children: T.intl.format(T.t["5zQYEz"], { guildCount: x ?? 0 }),
            }),
            null != g
                ? z.default
                      .keys(g)
                      .map((t) =>
                          (0, n.jsx)(G, { className: J.A, guild: g[t][0], subscriptionChange: -1 * g[t].length }, t),
                      )
                : null,
            (0, n.jsx)(c.E, {
                variant: "text-xs/normal",
                className: J.bV,
                children: T.intl.format(T.t.ct6oxD, { slotCount: a }),
            }),
            (0, n.jsx)("div", { className: J.P4, children: (0, n.jsx)(G, { guild: l, subscriptionChange: s.length }) }),
            r > 0 ? (0, n.jsx)(D, { canceledCount: r }) : null,
            null != u &&
                (0, n.jsx)(c.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: u.message }),
        ],
    });
}
var H = l(285753),
    Q = l(406476);
let Y = function (t) {
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
        [b, A] = (0, r.yK)([m.A], () => [m.A.isModifyingAppliedBoost, m.A.applyBoostError]),
        [N, y] = i.useState(E[0]),
        [U, I] = i.useState(!1),
        [M, P] = i.useState(l),
        [_, w] = i.useState(e ?? v.slice(0, 1)),
        k = i.useMemo(
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
        G = (0, H.A)("CONFIRM" === N || "SUCCESS" === N);
    function L() {
        return (
            j("SUCCESS" === N),
            h.default.track(R.HAw.MODAL_DISMISSED, { type: R.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s }),
            Promise.resolve()
        );
    }
    i.useEffect(() => {
        h.default.track(R.HAw.OPEN_MODAL, { type: R.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s });
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
                    className: Q.pS,
                    children: [
                        (0, n.jsx)(c.E, {
                            variant: "text-md/normal",
                            className: Q.TH,
                            children: T.intl.string(T.t.x5qw5U),
                        }),
                        (0, n.jsxs)("div", {
                            className: Q.g9,
                            children: [
                                (0, n.jsx)(u.l, {
                                    value: _.length,
                                    onChange: (t) => w(v.slice(0, t)),
                                    minValue: 1,
                                    maxValue: v.length,
                                }),
                                (0, n.jsx)(c.E, {
                                    className: Q.v$,
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
                    (P(t), y("CONFIRM"));
                },
                transitionState: f,
                isTransfer: D,
                selectedSlotGuilds: k,
            }),
        CONFIRM() {
            if (null == M) return null;
            let t = _.filter((t) => (0, C.I5)(t)).length,
                e = _.length;
            async function l() {
                if ((I(!1), null != M && _?.length !== 0)) {
                    a()(
                        !_.some((t) => t.isOnCooldown()),
                        "Cannot use a premium guild subscription slot while on cooldown",
                    );
                    try {
                        (await Promise.all(
                            _.map((t) => {
                                let { premiumGuildSubscription: e } = t;
                                return null != e ? (0, d.jZ)(e.guildId, e.id) : Promise.resolve();
                            }),
                        ),
                            await (0, d.VA)(
                                M.id,
                                _.map((t) => {
                                    let { id: e } = t;
                                    return e;
                                }),
                                { disablePowerupAutoApply: null != p },
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
                      toGuild: M,
                      fromGuilds: k,
                      slotCount: e,
                      canceledCount: t,
                      isModifyingSubscription: b,
                      error: U ? A : null,
                      onConfirm: l,
                      onClose: L,
                  })
                : (0, n.jsx)(F, {
                      transitionState: f,
                      guild: M,
                      slotCount: e,
                      canceledCount: t,
                      isModifyingSubscription: b,
                      error: U ? A : null,
                      onConfirm: l,
                      onClose: L,
                  });
        },
        SUCCESS: () =>
            (0, n.jsx)(V.A, {
                mediaUrls: G.mediaUrls,
                isSuccess: G.isSuccess,
                transitionState: f,
                onClose: L,
                children: (t, e) =>
                    (0, n.jsx)(B.A, {
                        transitionState: f,
                        guild: M,
                        guildBoostQuantity: _.length,
                        isTransfer: D,
                        graphic: t,
                        onClose: e,
                    }),
            }),
    }[N];
    return null == O ? null : O();
};

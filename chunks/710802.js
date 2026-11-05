e.d(l, { default: () => Y });
var n = e(477900),
    i = e(582128),
    s = e(284009),
    a = e.n(s),
    r = e(855986),
    o = e(189213),
    d = e(834730),
    c = e(663803),
    u = e(559201),
    m = e(859241),
    g = e(71393),
    h = e(178368),
    C = e(129230),
    S = e(473145),
    x = e(770101),
    p = e(449349),
    f = e(772707),
    b = e(503698),
    j = e.n(b),
    v = e(695366),
    E = e(682163),
    y = e(152578),
    A = e(533993),
    N = e(645619),
    U = e(434564),
    I = e(166403),
    M = e(313375),
    P = e(61780),
    T = e(792996),
    _ = e(741096);
function w(t) {
    let { tier: l } = t;
    return (0, n.jsxs)("div", {
        className: _._v,
        children: [
            (0, n.jsx)(y.A, {
                className: _.U2,
                children: (0, n.jsx)(M.A, { tier: l, color: "currentColor", className: _.Zw }),
            }),
            (0, S.gb)(l),
        ],
    });
}
function k(t) {
    let { guild: l, subscriptionChange: e } = t,
        i = (0, U.A)(l.id);
    if (0 === e) return null;
    let s = (0, S.P7)(l.id),
        a = (0, S.kN)(i + e),
        r = a - s;
    return 0 === r
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(P.A, { className: r > 0 ? _.$P : _.q0 }), (0, n.jsx)(w, { tier: a })],
          });
}
function D(t) {
    let { canceledCount: l } = t,
        e = (0, r.bG)([I.A], () => I.A.getPremiumTypeSubscription());
    return null == e
        ? null
        : (0, n.jsxs)("div", {
              className: _.v,
              children: [
                  (0, n.jsx)(v.CircleErrorIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: _.kK,
                  }),
                  (0, n.jsx)(d.E, {
                      variant: "body-md/normal",
                      className: _.at,
                      children: T.intl.format(T.t.SFpsCH, { date: e.currentPeriodEnd, canceledCount: l }),
                  }),
              ],
          });
}
function G(t) {
    let { guild: l, subscriptionChange: e, className: s } = t,
        a = (0, r.bG)([N.A], () => null != N.A.getStateForGuild(l.id));
    return (
        i.useEffect(() => {
            a || (0, A.Xd)(l.id);
        }, [a, l.id]),
        (0, n.jsxs)("div", {
            className: j()(_.gt, s),
            children: [
                (0, n.jsx)(E.Ay, { className: _.$f, guild: l, size: E.Ay.Sizes.LARGE, active: !0 }),
                (0, n.jsxs)("div", {
                    className: _.CR,
                    children: [
                        (0, n.jsx)(d.E, {
                            variant: "body-md/semibold",
                            color: "text-strong",
                            className: _.J5,
                            children: l.name,
                        }),
                        (0, n.jsxs)("div", {
                            className: _.jp,
                            children: [
                                (0, n.jsx)(w, { tier: l.premiumTier }),
                                (0, n.jsx)(k, { guild: l, subscriptionChange: e }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var R = e(652215),
    L = e(680759);
let O = { type: "rive", rive: p.D, aspectRatio: "16/9" };
function F(t) {
    let {
            transitionState: l,
            guild: e,
            slotCount: i,
            canceledCount: s,
            isModifyingSubscription: a,
            error: r,
            onConfirm: o,
            onClose: c,
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
        transitionState: l,
        onClose: c,
        graphic: O,
        title: T.intl.string(T.t["7KP/fI"]),
        actions: u,
        children: [
            (0, n.jsx)(d.E, { variant: "body-md/normal", children: T.intl.string(T.t.yTlZV0) }),
            (0, n.jsx)(G, { className: L.g, guild: e, subscriptionChange: i }),
            (0, n.jsx)(d.E, {
                variant: "body-md/normal",
                className: L.$,
                children: T.intl.formatToPlainString(T.t.KPnDlu, { days: 7, slotCount: i }),
            }),
            s > 0 ? (0, n.jsx)(D, { canceledCount: s }) : null,
            null != r &&
                (0, n.jsx)(d.E, { color: "text-feedback-critical", variant: "body-sm/semibold", children: r.message }),
        ],
    });
}
var B = e(636441),
    V = e(88671);
e(321073);
var z = e(811091),
    J = e(171882);
let K = {
    type: "image",
    src: "https://cdn.discordapp.com/assets/content/c39bf3f555b9b18a22b715961fa73700c4979bbcd634fc3f12d40d0603a53b66.svg",
    aspectRatio: "16/9",
};
function $(t) {
    let {
            transitionState: l,
            toGuild: e,
            fromGuilds: s,
            slotCount: a,
            canceledCount: r,
            isModifyingSubscription: o,
            error: c,
            onConfirm: u,
            onClose: m,
        } = t,
        g = s.length,
        h = i.useMemo(
            () => s.reduce((t, l) => (t.hasOwnProperty(l.id) || (t[l.id] = []), t[l.id].push(l), t), {}),
            [s],
        ),
        C = [{ variant: "primary", text: T.intl.string(T.t["PR0n//"]), onClick: u, loading: o, disabled: o }];
    return (0, n.jsxs)(f.k, {
        transitionState: l,
        onClose: m,
        graphic: K,
        title: T.intl.string(T.t["PR0n//"]),
        actions: C,
        children: [
            (0, n.jsx)(d.E, {
                variant: "body-md/normal",
                children: T.intl.formatToPlainString(T.t.SSA2lu, { slotCount: a, guildCount: g ?? 0 }),
            }),
            (0, n.jsx)(d.E, {
                variant: "body-xs/semibold",
                className: J.bV,
                children: T.intl.format(T.t["5zQYEz"], { guildCount: g ?? 0 }),
            }),
            null != h
                ? z.default
                      .keys(h)
                      .map((t) =>
                          (0, n.jsx)(G, { className: J.A, guild: h[t][0], subscriptionChange: -1 * h[t].length }, t),
                      )
                : null,
            (0, n.jsx)(d.E, {
                variant: "body-xs/normal",
                className: J.bV,
                children: T.intl.format(T.t.ct6oxD, { slotCount: a }),
            }),
            (0, n.jsx)("div", { className: J.P4, children: (0, n.jsx)(G, { guild: e, subscriptionChange: s.length }) }),
            r > 0 ? (0, n.jsx)(D, { canceledCount: r }) : null,
            null != c &&
                (0, n.jsx)(d.E, { color: "text-feedback-critical", variant: "body-sm/semibold", children: c.message }),
        ],
    });
}
var H = e(750922),
    Q = e(406476);
let Y = function (t) {
    let { guildBoostSlots: l, selectedGuild: e, locationSection: s, intent: p, transitionState: f, onClose: b } = t,
        j = (0, S.D$)(h.A.boostSlots);
    (a()(null != l || null != e, "Must either provide slots or an initial selected guild"),
        a()(!l?.some((t) => t.isOnCooldown()), "If slots are provided, they must not be on cooldown"));
    let v = [
            null == l ? "UNUSED_QUANTITY_SELECT" : null,
            null == e ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
        ].filter((t) => null != t),
        [E, y] = (0, r.yK)([m.A], () => [m.A.isModifyingAppliedBoost, m.A.applyBoostError]),
        [A, N] = i.useState(v[0]),
        [U, I] = i.useState(!1),
        [M, P] = i.useState(e),
        [_, w] = i.useState(l ?? j.slice(0, 1)),
        k = i.useMemo(
            () =>
                null == _
                    ? []
                    : _.map((t) => {
                          let { premiumGuildSubscription: l } = t;
                          return g.A.getGuild(l?.guildId);
                      }).filter((t) => null != t),
            [_],
        ),
        D = i.useMemo(() => _?.[0]?.premiumGuildSubscription != null, [_]),
        G = (0, H.A)("CONFIRM" === A || "SUCCESS" === A);
    function L() {
        return (
            b("SUCCESS" === A),
            C.default.track(R.HAw.MODAL_DISMISSED, { type: R.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s }),
            Promise.resolve()
        );
    }
    i.useEffect(() => {
        C.default.track(R.HAw.OPEN_MODAL, { type: R.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s });
    }, [s]);
    let O = {
        UNUSED_QUANTITY_SELECT: () => (
            a()(null != l || 0 !== j.length, "Cannot provide no slots if there are no other available slots"),
            (0, n.jsx)(o.a, {
                transitionState: f,
                onClose: L,
                size: "md",
                title: T.intl.string(T.t["9FFrrT"]),
                actions: [
                    { variant: "secondary", text: T.intl.string(T.t["1BPTsK"]), onClick: L },
                    { variant: "primary", text: T.intl.string(T.t["/uwYda"]), onClick: () => N("CONFIRM") },
                ],
                children: (0, n.jsxs)("div", {
                    className: Q.pS,
                    children: [
                        (0, n.jsx)(d.E, {
                            variant: "body-md/normal",
                            className: Q.TH,
                            children: T.intl.string(T.t.x5qw5U),
                        }),
                        (0, n.jsxs)("div", {
                            className: Q.g9,
                            children: [
                                (0, n.jsx)(c.l, {
                                    value: _.length,
                                    onChange: (t) => w(j.slice(0, t)),
                                    minValue: 1,
                                    maxValue: j.length,
                                }),
                                (0, n.jsx)(d.E, {
                                    className: Q.v$,
                                    variant: "body-md/normal",
                                    children: T.intl.string(T.t["Vl8TC+"]),
                                }),
                            ],
                        }),
                    ],
                }),
            })
        ),
        GUILD_SELECT: () =>
            (0, n.jsx)(x.default, {
                onClose: L,
                onSelectGuild: (t) => {
                    (P(t), N("CONFIRM"));
                },
                transitionState: f,
                isTransfer: D,
                selectedSlotGuilds: k,
            }),
        CONFIRM() {
            if (null == M) return null;
            let t = _.filter((t) => (0, S.I5)(t)).length,
                l = _.length;
            async function e() {
                if ((I(!1), null != M && _?.length !== 0)) {
                    a()(
                        !_.some((t) => t.isOnCooldown()),
                        "Cannot use a premium guild subscription slot while on cooldown",
                    );
                    try {
                        (await Promise.all(
                            _.map((t) => {
                                let { premiumGuildSubscription: l } = t;
                                return null != l ? (0, u.jZ)(l.guildId, l.id) : Promise.resolve();
                            }),
                        ),
                            await (0, u.VA)(
                                M.id,
                                _.map((t) => {
                                    let { id: l } = t;
                                    return l;
                                }),
                                { disablePowerupAutoApply: null != p },
                            ),
                            N("SUCCESS"));
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
                      slotCount: l,
                      canceledCount: t,
                      isModifyingSubscription: E,
                      error: U ? y : null,
                      onConfirm: e,
                      onClose: L,
                  })
                : (0, n.jsx)(F, {
                      transitionState: f,
                      guild: M,
                      slotCount: l,
                      canceledCount: t,
                      isModifyingSubscription: E,
                      error: U ? y : null,
                      onConfirm: e,
                      onClose: L,
                  });
        },
        SUCCESS: () =>
            (0, n.jsx)(V.A, {
                mediaUrls: G.mediaUrls,
                isSuccess: G.isSuccess,
                transitionState: f,
                onClose: L,
                children: (t, l) =>
                    (0, n.jsx)(B.A, {
                        transitionState: f,
                        guild: M,
                        guildBoostQuantity: _.length,
                        isTransfer: D,
                        graphic: t,
                        onClose: l,
                    }),
            }),
    }[A];
    return null == O ? null : O();
};

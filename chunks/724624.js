l.d(e, { default: () => tj });
var n = l(627968),
    i = l(64700),
    s = l(284009),
    r = l.n(s),
    a = l(189213),
    o = l(17928),
    d = l(834730),
    c = l(663803),
    u = l(820739),
    m = l(43594),
    x = l(859241),
    h = l(71393),
    g = l(178368),
    C = l(954571),
    j = l(473145);
l(321073);
var v = l(503698),
    f = l.n(v),
    p = l(683071),
    S = l(224640),
    y = l(20742),
    N = l(430993),
    E = l(696208),
    b = l(73939),
    A = l(871682),
    P = l(695366),
    T = l(825484),
    w = l(821609),
    M = l(548118),
    G = l(496885),
    I = l(313375),
    k = l(61780),
    L = l(942975),
    U = l(645619),
    _ = l(434564),
    D = l(180318);
class R extends i.PureComponent {
    render() {
        let { tier: t } = this.props;
        return (0, n.jsxs)("div", {
            className: D._v,
            children: [
                (0, n.jsx)(G.A, {
                    className: D.U2,
                    children: (0, n.jsx)(I.A, { tier: t, color: "currentColor", className: D.Zw }),
                }),
                (0, j.gb)(t),
            ],
        });
    }
}
let B = (t) => {
    let { subscriptionChange: e, guild: l } = t,
        i = (0, _.A)(l.id);
    if (0 === e) return null;
    let s = (0, j.P7)(l.id),
        r = (0, j.kN)(i + e),
        a = r - s;
    return 0 === a
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(k.A, { className: a > 0 ? D.$P : D.q0 }), (0, n.jsx)(R, { tier: r })],
          });
};
function F(t) {
    let { guild: e, className: l, subscriptionChange: s } = t,
        r = (0, o.bG)([U.A], () => null != U.A.getStateForGuild(e.id));
    return (
        i.useEffect(() => {
            r || (0, L.Xd)(e.id);
        }, [r, e.id]),
        (0, n.jsxs)("div", {
            className: f()(D.gP, l),
            children: [
                (0, n.jsx)(M.Ay, { guild: e, size: M.Ay.Sizes.LARGE }),
                (0, n.jsxs)("div", {
                    className: D.EF,
                    children: [
                        (0, n.jsx)("div", { className: D.J5, children: e.name }),
                        (0, n.jsxs)("div", {
                            className: D.jp,
                            children: [
                                (0, n.jsx)(R, { tier: e.premiumTier }),
                                (0, n.jsx)(B, { guild: e, subscriptionChange: null != s ? s : 0 }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var z = l(166403),
    O = l(935208),
    V = l(985018),
    K = l(295521);
function Z(t) {
    let { imageClass: e, children: l, error: i } = t;
    return (0, n.jsxs)("div", {
        className: K.Qs,
        children: [
            (0, n.jsx)("div", { className: f()(K.Sl, e) }),
            l,
            (0, n.jsx)(b.F, {
                children:
                    null != i
                        ? (0, n.jsx)(A.F, {
                              className: K.z3,
                              children: (0, n.jsx)(p.w, { type: "critical", children: i.message }),
                          })
                        : null,
            }),
        ],
    });
}
let Q = (t) => {
    let { canceledCount: e } = t,
        l = (0, o.bG)([z.A], () => z.A.getPremiumTypeSubscription());
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: K.v,
              children: [
                  (0, n.jsx)(P.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: K.kK }),
                  (0, n.jsx)(d.E, {
                      variant: "text-md/normal",
                      className: K.at,
                      children: V.intl.format(V.t.SFpsCH, { date: l.currentPeriodEnd, canceledCount: e }),
                  }),
              ],
          });
};
function q(t) {
    let { imageClass: e, blurb: l, guild: i, warning: s, error: r, slotCount: a = 1, canceledCount: o = 0 } = t;
    return (0, n.jsxs)(Z, {
        imageClass: e,
        error: r,
        children: [
            (0, n.jsx)(d.E, { variant: "text-md/normal", children: l }),
            (0, n.jsx)(F, { className: K.w_, guild: i, subscriptionChange: a }),
            (0, n.jsx)(d.E, { variant: "text-md/normal", children: s }),
            o > 0 ? (0, n.jsx)(Q, { canceledCount: o }) : null,
        ],
    });
}
function H(t) {
    let { imageClass: e, blurb: l, fromGuilds: s, toGuild: r, error: a, slotCount: o = 1, canceledCount: c = 0 } = t,
        u = i.useRef(s),
        m = u.current?.length,
        x = u.current?.reduce((t, e) => (t.hasOwnProperty(e.id) || (t[e.id] = []), t[e.id].push(e), t), {});
    return (0, n.jsxs)(Z, {
        imageClass: e,
        error: a,
        children: [
            (0, n.jsx)(d.E, { variant: "text-md/normal", children: l }),
            (0, n.jsx)(d.E, {
                variant: "text-xs/bold",
                className: K._N,
                children: V.intl.format(V.t["5zQYEz"], { guildCount: m ?? 0 }),
            }),
            null != x
                ? O.default
                      .keys(x)
                      .map((t) =>
                          (0, n.jsx)(F, { className: K.vW, guild: x[t][0], subscriptionChange: -1 * x[t].length }, t),
                      )
                : null,
            (0, n.jsx)(d.E, {
                variant: "text-xs/normal",
                className: K._N,
                children: V.intl.format(V.t.ct6oxD, { slotCount: o }),
            }),
            (0, n.jsx)("div", {
                className: K.Vh,
                children: (0, n.jsx)(F, { className: K.uK, guild: r, subscriptionChange: null != s ? s.length : 1 }),
            }),
            c > 0 ? (0, n.jsx)(Q, { canceledCount: c }) : null,
        ],
    });
}
let $ = (t) => {
    let {
            transitionState: e,
            onClose: l,
            title: i,
            subtitle: s,
            imageClass: r,
            guild: a,
            warning: o,
            slotCount: d = 1,
            canceledCount: c = 0,
            isTransfer: u = !1,
            fromGuilds: m,
            toGuild: x,
            confirmation: h,
            confirmationLabel: g,
            isModifyingSubscription: C,
            onConfirm: j,
            onCancel: v,
            error: f,
        } = t,
        p = [
            { variant: "secondary", text: V.intl.string(V.t["ETE/oC"]), onClick: v, disabled: C },
            { variant: "primary", text: h, onClick: j, loading: C, "aria-label": g },
        ];
    return (0, n.jsxs)(S.d, {
        transitionState: e,
        onClose: l,
        size: "sm",
        children: [
            (0, n.jsx)(y.rQ, { title: i }),
            (0, n.jsx)(N.c, {
                children:
                    u && null != x
                        ? (0, n.jsx)(H, {
                              imageClass: r ?? "",
                              blurb: s,
                              fromGuilds: m,
                              toGuild: x,
                              error: f,
                              slotCount: d,
                              canceledCount: c,
                          })
                        : null != a
                          ? (0, n.jsx)(q, {
                                imageClass: r ?? "",
                                blurb: s,
                                guild: a,
                                warning: o,
                                error: f,
                                slotCount: d,
                                canceledCount: c,
                            })
                          : null,
            }),
            (0, n.jsx)(E.H, { actions: p, actionsFullWidth: !1 }),
        ],
    });
};
($.ApplyBody = q),
    ($.TransferBody = H),
    ($.Footer = function (t) {
        let { confirmation: e, confirmationLabel: l, isModifyingSubscription: i, onConfirm: s, onCancel: r } = t;
        return (0, n.jsx)("div", {
            className: K.qr,
            children: (0, n.jsxs)(T.e, {
                direction: "horizontal-reverse",
                children: [
                    (0, n.jsx)(w.$, { variant: "primary", text: e, onClick: s, loading: i, "aria-label": l }),
                    (0, n.jsx)(w.$, {
                        variant: "secondary",
                        text: V.intl.string(V.t["ETE/oC"]),
                        onClick: r,
                        disabled: i,
                    }),
                ],
            }),
        });
    });
var Y = l(770101),
    J = l(879100),
    W = l(527383),
    X = l(772707),
    tt = l(17095);
function te(t) {
    let { tier: e } = t;
    return (0, n.jsxs)("div", {
        className: tt._v,
        children: [
            (0, n.jsx)(G.A, {
                className: tt.U2,
                children: (0, n.jsx)(I.A, { tier: e, color: "currentColor", className: tt.Zw }),
            }),
            (0, j.gb)(e),
        ],
    });
}
function tl(t) {
    let { guild: e, subscriptionChange: l } = t,
        i = (0, _.A)(e.id);
    if (0 === l) return null;
    let s = (0, j.P7)(e.id),
        r = (0, j.kN)(i + l),
        a = r - s;
    return 0 === a
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(k.A, { className: a > 0 ? tt.$P : tt.q0 }), (0, n.jsx)(te, { tier: r })],
          });
}
function tn(t) {
    let { canceledCount: e } = t,
        l = (0, o.bG)([z.A], () => z.A.getPremiumTypeSubscription());
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: tt.v,
              children: [
                  (0, n.jsx)(P.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: tt.kK }),
                  (0, n.jsx)(d.E, {
                      variant: "text-md/normal",
                      className: tt.at,
                      children: V.intl.format(V.t.SFpsCH, { date: l.currentPeriodEnd, canceledCount: e }),
                  }),
              ],
          });
}
function ti(t) {
    let { guild: e, subscriptionChange: l, className: s } = t,
        r = (0, o.bG)([U.A], () => null != U.A.getStateForGuild(e.id));
    return (
        i.useEffect(() => {
            r || (0, L.Xd)(e.id);
        }, [r, e.id]),
        (0, n.jsxs)("div", {
            className: f()(tt.gt, s),
            children: [
                (0, n.jsx)(M.Ay, { className: tt.$f, guild: e, size: M.Ay.Sizes.LARGE, active: !0 }),
                (0, n.jsxs)("div", {
                    className: tt.CR,
                    children: [
                        (0, n.jsx)("div", { className: tt.J5, children: e.name }),
                        (0, n.jsxs)("div", {
                            className: tt.jp,
                            children: [
                                (0, n.jsx)(te, { tier: e.premiumTier }),
                                (0, n.jsx)(tl, { guild: e, subscriptionChange: l }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var ts = l(652215),
    tr = l(786148);
let ta = { type: "rive", rive: W.D, aspectRatio: "16/9" };
function to(t) {
    let {
            transitionState: e,
            guild: l,
            slotCount: i,
            canceledCount: s,
            isModifyingSubscription: r,
            error: a,
            expressiveCta: o,
            onConfirm: c,
            onClose: u,
        } = t,
        m = [
            {
                variant: o ? "expressive" : "primary",
                text: V.intl.formatToPlainString(V.t.ZU5x5w, { slotCount: i }),
                onClick: c,
                loading: r,
                disabled: r,
            },
        ];
    return (0, n.jsxs)(X.k, {
        transitionState: e,
        onClose: u,
        graphic: ta,
        title: V.intl.string(V.t["7KP/fI"]),
        actions: m,
        children: [
            (0, n.jsx)(d.E, { variant: "text-md/normal", children: V.intl.string(V.t.yTlZV0) }),
            (0, n.jsx)(ti, { className: tr.g, guild: l, subscriptionChange: i }),
            (0, n.jsx)(d.E, {
                variant: "text-md/normal",
                className: tr.$,
                children: V.intl.formatToPlainString(V.t.KPnDlu, { days: ts.FI6, slotCount: i }),
            }),
            s > 0 ? (0, n.jsx)(tn, { canceledCount: s }) : null,
            null != a &&
                (0, n.jsx)(d.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: a.message }),
        ],
    });
}
var td = l(636441),
    tc = l(587491),
    tu = l(211867);
let tm = {
    type: "image",
    src: "https://cdn.discordapp.com/assets/content/dbe6fe5e6dce4f9af13b3f87a4e3705c3b38ee6adb850c38d3dcaf6d7f89e508.svg",
    aspectRatio: "16/9",
};
function tx(t) {
    let {
            transitionState: e,
            toGuild: l,
            fromGuilds: s,
            slotCount: r,
            canceledCount: a,
            isModifyingSubscription: o,
            error: c,
            onConfirm: u,
            onClose: m,
        } = t,
        x = s.length,
        h = i.useMemo(
            () => s.reduce((t, e) => (t.hasOwnProperty(e.id) || (t[e.id] = []), t[e.id].push(e), t), {}),
            [s],
        ),
        g = [{ variant: "primary", text: V.intl.string(V.t["PR0n//"]), onClick: u, loading: o, disabled: o }];
    return (0, n.jsxs)(X.k, {
        transitionState: e,
        onClose: m,
        graphic: tm,
        title: V.intl.string(V.t["PR0n//"]),
        actions: g,
        children: [
            (0, n.jsx)(d.E, {
                variant: "text-md/normal",
                children: V.intl.formatToPlainString(V.t.SSA2lu, { slotCount: r, guildCount: x ?? 0 }),
            }),
            (0, n.jsx)(d.E, {
                variant: "text-xs/bold",
                className: tu.bV,
                children: V.intl.format(V.t["5zQYEz"], { guildCount: x ?? 0 }),
            }),
            null != h
                ? O.default
                      .keys(h)
                      .map((t) =>
                          (0, n.jsx)(ti, { className: tu.A, guild: h[t][0], subscriptionChange: -1 * h[t].length }, t),
                      )
                : null,
            (0, n.jsx)(d.E, {
                variant: "text-xs/normal",
                className: tu.bV,
                children: V.intl.format(V.t.ct6oxD, { slotCount: r }),
            }),
            (0, n.jsx)("div", {
                className: tu.P4,
                children: (0, n.jsx)(ti, { guild: l, subscriptionChange: s.length }),
            }),
            a > 0 ? (0, n.jsx)(tn, { canceledCount: a }) : null,
            null != c &&
                (0, n.jsx)(d.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: c.message }),
        ],
    });
}
var th = l(285753),
    tg = l(568065),
    tC = l(37739);
let tj = (t) => {
    let { guildBoostSlots: e, selectedGuild: l, locationSection: s, intent: v, transitionState: f, onClose: p } = t,
        S = (0, m.D)("ApplyGuildBoostModal"),
        y = (0, j.D$)(g.A.boostSlots);
    r()(null != e || null != l, "Must either provide slots or an initial selected guild"),
        r()(!e?.some((t) => t.isOnCooldown()), "If slots are provided, they must not be on cooldown");
    let N = [
            null == e ? "UNUSED_QUANTITY_SELECT" : null,
            null == l ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
        ].filter((t) => null != t),
        [E, b] = (0, o.yK)([x.A], () => [x.A.isModifyingAppliedBoost, x.A.applyBoostError]),
        [A, P] = i.useState(N[0]),
        [T, w] = i.useState(!1),
        [M, G] = i.useState(l),
        [I, k] = i.useState(e ?? y.slice(0, 1)),
        L = i.useMemo(
            () =>
                null == I
                    ? []
                    : I.map((t) => {
                          let { premiumGuildSubscription: e } = t;
                          return h.A.getGuild(e?.guildId);
                      }).filter((t) => null != t),
            [I],
        ),
        U = i.useMemo(() => I?.[0]?.premiumGuildSubscription != null, [I]),
        _ = "control" !== S && ("CONFIRM" === A || "SUCCESS" === A),
        D = (0, th.A)(_),
        R = () => (
            p("SUCCESS" === A),
            C.default.track(ts.HAw.MODAL_DISMISSED, {
                type: ts.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                location_section: s,
            }),
            Promise.resolve()
        );
    i.useEffect(() => {
        C.default.track(ts.HAw.OPEN_MODAL, { type: ts.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s });
    }, [s]);
    let B = {
        UNUSED_QUANTITY_SELECT: () => (
            r()(null != e || 0 !== y.length, "Cannot provide no slots if there are no other available slots"),
            (0, n.jsx)(a.Modal, {
                transitionState: f,
                onClose: R,
                size: "md",
                title: V.intl.string(V.t["9FFrrT"]),
                actions: [
                    { variant: "secondary", text: V.intl.string(V.t["1BPTsK"]), onClick: R },
                    { variant: "primary", text: V.intl.string(V.t["/uwYda"]), onClick: () => P("CONFIRM") },
                ],
                children: (0, n.jsxs)("div", {
                    className: tC.pS,
                    children: [
                        (0, n.jsx)(d.E, {
                            variant: "text-md/normal",
                            className: tC.TH,
                            children: V.intl.string(V.t.x5qw5U),
                        }),
                        (0, n.jsxs)("div", {
                            className: tC.g9,
                            children: [
                                (0, n.jsx)(c.l, {
                                    value: I.length,
                                    onChange: (t) => k(y.slice(0, t)),
                                    minValue: 1,
                                    maxValue: y.length,
                                }),
                                (0, n.jsx)(d.E, {
                                    className: tC.v$,
                                    variant: "text-md/normal",
                                    children: V.intl.string(V.t["Vl8TC+"]),
                                }),
                            ],
                        }),
                    ],
                }),
            })
        ),
        GUILD_SELECT: () =>
            (0, n.jsx)(Y.default, {
                onClose: R,
                onSelectGuild: (t) => {
                    G(t), P("CONFIRM");
                },
                transitionState: f,
                isTransfer: U,
                selectedSlotGuilds: L,
            }),
        CONFIRM() {
            if (null == M) return null;
            let t = I.filter((t) => (0, j.I5)(t)).length,
                e = I.length,
                l = L.length,
                i = "CONFIRM" === N[0] ? R : () => P(N[N.indexOf(A) - 1]),
                s = async () => {
                    if ((w(!1), null != M && I?.length !== 0)) {
                        r()(
                            !I.some((t) => t.isOnCooldown()),
                            "Cannot use a premium guild subscription slot while on cooldown",
                        );
                        try {
                            await Promise.all(
                                I.map((t) => {
                                    let { premiumGuildSubscription: e } = t;
                                    return null != e ? (0, u.jZ)(e.guildId, e.id) : Promise.resolve();
                                }),
                            ),
                                await (0, u.VA)(
                                    M.id,
                                    I.map((t) => {
                                        let { id: e } = t;
                                        return e;
                                    }),
                                    v === tg.Pn.PERK,
                                ),
                                P("SUCCESS");
                        } catch (t) {
                            w(!0);
                        }
                    }
                },
                o = U ? V.intl.string(V.t["PR0n//"]) : V.intl.string(V.t["7KP/fI"]);
            return U || "control" === S
                ? U && "control" !== S
                    ? (0, n.jsx)(tx, {
                          transitionState: f,
                          toGuild: M,
                          fromGuilds: L,
                          slotCount: e,
                          canceledCount: t,
                          isModifyingSubscription: E,
                          error: T ? b : null,
                          onConfirm: s,
                          onClose: R,
                      })
                    : (0, n.jsx)(a.Modal, {
                          transitionState: f,
                          onClose: R,
                          size: "md",
                          title: o,
                          actions: [
                              { variant: "secondary", text: V.intl.string(V.t["ETE/oC"]), onClick: i },
                              {
                                  variant: "primary",
                                  text: U
                                      ? V.intl.formatToPlainString(V.t.Oh6mxU, { slotCount: e })
                                      : V.intl.formatToPlainString(V.t.ZU5x5w, { slotCount: e }),
                                  onClick: s,
                                  loading: E,
                                  disabled: E,
                              },
                          ],
                          children: U
                              ? (0, n.jsx)($.TransferBody, {
                                    fromGuilds: L,
                                    toGuild: M,
                                    blurb: V.intl.formatToPlainString(V.t.SSA2lu, { slotCount: e, guildCount: l }),
                                    imageClass: tC.LA,
                                    error: T ? b : null,
                                    slotCount: e,
                                    canceledCount: t,
                                })
                              : (0, n.jsx)($.ApplyBody, {
                                    guild: M,
                                    blurb: V.intl.string(V.t.yTlZV0),
                                    warning: V.intl.formatToPlainString(V.t.KPnDlu, { days: ts.FI6, slotCount: e }),
                                    imageClass: tC.MP,
                                    error: T ? b : null,
                                    slotCount: e,
                                    canceledCount: t,
                                }),
                      })
                : (0, n.jsx)(to, {
                      transitionState: f,
                      guild: M,
                      slotCount: e,
                      canceledCount: t,
                      isModifyingSubscription: E,
                      error: T ? b : null,
                      expressiveCta: "refresh_expressive_cta" === S,
                      onConfirm: s,
                      onClose: R,
                  });
        },
        SUCCESS() {
            if ("control" !== S)
                return (0, n.jsx)(tc.A, {
                    mediaUrls: D.mediaUrls,
                    isSuccess: D.isSuccess,
                    transitionState: f,
                    onClose: R,
                    children: (t, e) =>
                        (0, n.jsx)(td.A, {
                            transitionState: f,
                            guild: M,
                            guildBoostQuantity: I.length,
                            isTransfer: U,
                            graphic: t,
                            onClose: e,
                        }),
                });
            let t = U ? V.intl.string(V.t["PR0n//"]) : V.intl.string(V.t["7KP/fI"]);
            return (0, n.jsx)(a.Modal, {
                transitionState: f,
                onClose: R,
                size: "md",
                title: t,
                actions: [],
                children: (0, n.jsx)(J.W, {
                    guild: M,
                    isTransfer: U,
                    guildBoostQuantity: I.length,
                    onClose: R,
                    didPurchaseOnFractionalPremium: !1,
                }),
            });
        },
    }[A];
    return null == B ? null : B();
};

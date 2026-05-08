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
    C = l(174459),
    j = l(473145);
l(321073);
var p = l(503698),
    v = l.n(p),
    f = l(683071),
    S = l(224640),
    N = l(20742),
    E = l(430993),
    b = l(696208),
    A = l(868285),
    y = l(871682),
    P = l(695366),
    T = l(825484),
    M = l(821609),
    w = l(548118),
    I = l(814925),
    U = l(313375),
    k = l(61780),
    _ = l(868652),
    R = l(645619),
    G = l(434564),
    L = l(180318);
class F extends i.PureComponent {
    render() {
        let { tier: t } = this.props;
        return (0, n.jsxs)("div", {
            className: L._v,
            children: [
                (0, n.jsx)(I.A, {
                    className: L.U2,
                    children: (0, n.jsx)(U.A, { tier: t, color: "currentColor", className: L.Zw }),
                }),
                (0, j.gb)(t),
            ],
        });
    }
}
let D = (t) => {
    let { subscriptionChange: e, guild: l } = t,
        i = (0, G.A)(l.id);
    if (0 === e) return null;
    let s = (0, j.P7)(l.id),
        r = (0, j.kN)(i + e),
        a = r - s;
    return 0 === a
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(k.A, { className: a > 0 ? L.$P : L.q0 }), (0, n.jsx)(F, { tier: r })],
          });
};
function O(t) {
    let { guild: e, className: l, subscriptionChange: s } = t,
        r = (0, o.bG)([R.A], () => null != R.A.getStateForGuild(e.id));
    return (
        i.useEffect(() => {
            r || (0, _.Xd)(e.id);
        }, [r, e.id]),
        (0, n.jsxs)("div", {
            className: v()(L.gP, l),
            children: [
                (0, n.jsx)(w.Ay, { guild: e, size: w.Ay.Sizes.LARGE }),
                (0, n.jsxs)("div", {
                    className: L.EF,
                    children: [
                        (0, n.jsx)("div", { className: L.J5, children: e.name }),
                        (0, n.jsxs)("div", {
                            className: L.jp,
                            children: [
                                (0, n.jsx)(F, { tier: e.premiumTier }),
                                (0, n.jsx)(D, { guild: e, subscriptionChange: null != s ? s : 0 }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var z = l(166403),
    B = l(935208),
    K = l(375708),
    V = l(295521);
function Z(t) {
    let { imageClass: e, children: l, error: i } = t;
    return (0, n.jsxs)("div", {
        className: V.Qs,
        children: [
            (0, n.jsx)("div", { className: v()(V.Sl, e) }),
            l,
            (0, n.jsx)(A.F, {
                children:
                    null != i
                        ? (0, n.jsx)(y.F, {
                              className: V.z3,
                              children: (0, n.jsx)(f.w, { type: "critical", children: i.message }),
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
              className: V.v,
              children: [
                  (0, n.jsx)(P.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: V.kK }),
                  (0, n.jsx)(d.E, {
                      variant: "text-md/normal",
                      className: V.at,
                      children: K.intl.format(K.t.SFpsCH, { date: l.currentPeriodEnd, canceledCount: e }),
                  }),
              ],
          });
};
function $(t) {
    let { imageClass: e, blurb: l, guild: i, warning: s, error: r, slotCount: a = 1, canceledCount: o = 0 } = t;
    return (0, n.jsxs)(Z, {
        imageClass: e,
        error: r,
        children: [
            (0, n.jsx)(d.E, { variant: "text-md/normal", children: l }),
            (0, n.jsx)(O, { className: V.w_, guild: i, subscriptionChange: a }),
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
                className: V._N,
                children: K.intl.format(K.t["5zQYEz"], { guildCount: m ?? 0 }),
            }),
            null != x
                ? B.default
                      .keys(x)
                      .map((t) =>
                          (0, n.jsx)(O, { className: V.vW, guild: x[t][0], subscriptionChange: -1 * x[t].length }, t),
                      )
                : null,
            (0, n.jsx)(d.E, {
                variant: "text-xs/normal",
                className: V._N,
                children: K.intl.format(K.t.ct6oxD, { slotCount: o }),
            }),
            (0, n.jsx)("div", {
                className: V.Vh,
                children: (0, n.jsx)(O, { className: V.uK, guild: r, subscriptionChange: null != s ? s.length : 1 }),
            }),
            c > 0 ? (0, n.jsx)(Q, { canceledCount: c }) : null,
        ],
    });
}
let J = (t) => {
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
            onCancel: p,
            error: v,
        } = t,
        f = [
            { variant: "secondary", text: K.intl.string(K.t["ETE/oC"]), onClick: p, disabled: C },
            { variant: "primary", text: h, onClick: j, loading: C, "aria-label": g },
        ];
    return (0, n.jsxs)(S.d, {
        transitionState: e,
        onClose: l,
        size: "sm",
        "aria-label": i,
        children: [
            (0, n.jsx)(N.rQ, { title: i }),
            (0, n.jsx)(E.c, {
                children:
                    u && null != x
                        ? (0, n.jsx)(H, {
                              imageClass: r ?? "",
                              blurb: s,
                              fromGuilds: m,
                              toGuild: x,
                              error: v,
                              slotCount: d,
                              canceledCount: c,
                          })
                        : null != a
                          ? (0, n.jsx)($, {
                                imageClass: r ?? "",
                                blurb: s,
                                guild: a,
                                warning: o,
                                error: v,
                                slotCount: d,
                                canceledCount: c,
                            })
                          : null,
            }),
            (0, n.jsx)(b.H, { actions: f, actionsFullWidth: !1 }),
        ],
    });
};
(J.ApplyBody = $),
    (J.TransferBody = H),
    (J.Footer = function (t) {
        let { confirmation: e, confirmationLabel: l, isModifyingSubscription: i, onConfirm: s, onCancel: r } = t;
        return (0, n.jsx)("div", {
            className: V.qr,
            children: (0, n.jsxs)(T.e, {
                direction: "horizontal-reverse",
                children: [
                    (0, n.jsx)(M.$, { variant: "primary", text: e, onClick: s, loading: i, "aria-label": l }),
                    (0, n.jsx)(M.$, {
                        variant: "secondary",
                        text: K.intl.string(K.t["ETE/oC"]),
                        onClick: r,
                        disabled: i,
                    }),
                ],
            }),
        });
    });
var Y = l(770101),
    q = l(879100),
    W = l(527383),
    X = l(772707),
    tt = l(17095);
function te(t) {
    let { tier: e } = t;
    return (0, n.jsxs)("div", {
        className: tt._v,
        children: [
            (0, n.jsx)(I.A, {
                className: tt.U2,
                children: (0, n.jsx)(U.A, { tier: e, color: "currentColor", className: tt.Zw }),
            }),
            (0, j.gb)(e),
        ],
    });
}
function tl(t) {
    let { guild: e, subscriptionChange: l } = t,
        i = (0, G.A)(e.id);
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
                      children: K.intl.format(K.t.SFpsCH, { date: l.currentPeriodEnd, canceledCount: e }),
                  }),
              ],
          });
}
function ti(t) {
    let { guild: e, subscriptionChange: l, className: s } = t,
        r = (0, o.bG)([R.A], () => null != R.A.getStateForGuild(e.id));
    return (
        i.useEffect(() => {
            r || (0, _.Xd)(e.id);
        }, [r, e.id]),
        (0, n.jsxs)("div", {
            className: v()(tt.gt, s),
            children: [
                (0, n.jsx)(w.Ay, { className: tt.$f, guild: e, size: w.Ay.Sizes.LARGE, active: !0 }),
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
                text: K.intl.formatToPlainString(K.t.ZU5x5w, { slotCount: i }),
                onClick: c,
                loading: r,
                disabled: r,
            },
        ];
    return (0, n.jsxs)(X.k, {
        transitionState: e,
        onClose: u,
        graphic: ta,
        title: K.intl.string(K.t["7KP/fI"]),
        actions: m,
        children: [
            (0, n.jsx)(d.E, { variant: "text-md/normal", children: K.intl.string(K.t.yTlZV0) }),
            (0, n.jsx)(ti, { className: tr.g, guild: l, subscriptionChange: i }),
            (0, n.jsx)(d.E, {
                variant: "text-md/normal",
                className: tr.$,
                children: K.intl.formatToPlainString(K.t.KPnDlu, { days: ts.FI6, slotCount: i }),
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
        g = [{ variant: "primary", text: K.intl.string(K.t["PR0n//"]), onClick: u, loading: o, disabled: o }];
    return (0, n.jsxs)(X.k, {
        transitionState: e,
        onClose: m,
        graphic: tm,
        title: K.intl.string(K.t["PR0n//"]),
        actions: g,
        children: [
            (0, n.jsx)(d.E, {
                variant: "text-md/normal",
                children: K.intl.formatToPlainString(K.t.SSA2lu, { slotCount: r, guildCount: x ?? 0 }),
            }),
            (0, n.jsx)(d.E, {
                variant: "text-xs/bold",
                className: tu.bV,
                children: K.intl.format(K.t["5zQYEz"], { guildCount: x ?? 0 }),
            }),
            null != h
                ? B.default
                      .keys(h)
                      .map((t) =>
                          (0, n.jsx)(ti, { className: tu.A, guild: h[t][0], subscriptionChange: -1 * h[t].length }, t),
                      )
                : null,
            (0, n.jsx)(d.E, {
                variant: "text-xs/normal",
                className: tu.bV,
                children: K.intl.format(K.t.ct6oxD, { slotCount: r }),
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
    let { guildBoostSlots: e, selectedGuild: l, locationSection: s, intent: p, transitionState: v, onClose: f } = t,
        S = (0, m.D)("ApplyGuildBoostModal"),
        N = (0, j.D$)(g.A.boostSlots);
    r()(null != e || null != l, "Must either provide slots or an initial selected guild"),
        r()(!e?.some((t) => t.isOnCooldown()), "If slots are provided, they must not be on cooldown");
    let E = [
            null == e ? "UNUSED_QUANTITY_SELECT" : null,
            null == l ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
        ].filter((t) => null != t),
        [b, A] = (0, o.yK)([x.A], () => [x.A.isModifyingAppliedBoost, x.A.applyBoostError]),
        [y, P] = i.useState(E[0]),
        [T, M] = i.useState(!1),
        [w, I] = i.useState(l),
        [U, k] = i.useState(e ?? N.slice(0, 1)),
        _ = i.useMemo(
            () =>
                null == U
                    ? []
                    : U.map((t) => {
                          let { premiumGuildSubscription: e } = t;
                          return h.A.getGuild(e?.guildId);
                      }).filter((t) => null != t),
            [U],
        ),
        R = i.useMemo(() => U?.[0]?.premiumGuildSubscription != null, [U]),
        G = "control" !== S && ("CONFIRM" === y || "SUCCESS" === y),
        L = (0, th.A)(G),
        F = () => (
            f("SUCCESS" === y),
            C.default.track(ts.HAw.MODAL_DISMISSED, {
                type: ts.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                location_section: s,
            }),
            Promise.resolve()
        );
    i.useEffect(() => {
        C.default.track(ts.HAw.OPEN_MODAL, { type: ts.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s });
    }, [s]);
    let D = {
        UNUSED_QUANTITY_SELECT: () => (
            r()(null != e || 0 !== N.length, "Cannot provide no slots if there are no other available slots"),
            (0, n.jsx)(a.Modal, {
                transitionState: v,
                onClose: F,
                size: "md",
                title: K.intl.string(K.t["9FFrrT"]),
                actions: [
                    { variant: "secondary", text: K.intl.string(K.t["1BPTsK"]), onClick: F },
                    { variant: "primary", text: K.intl.string(K.t["/uwYda"]), onClick: () => P("CONFIRM") },
                ],
                children: (0, n.jsxs)("div", {
                    className: tC.pS,
                    children: [
                        (0, n.jsx)(d.E, {
                            variant: "text-md/normal",
                            className: tC.TH,
                            children: K.intl.string(K.t.x5qw5U),
                        }),
                        (0, n.jsxs)("div", {
                            className: tC.g9,
                            children: [
                                (0, n.jsx)(c.l, {
                                    value: U.length,
                                    onChange: (t) => k(N.slice(0, t)),
                                    minValue: 1,
                                    maxValue: N.length,
                                }),
                                (0, n.jsx)(d.E, {
                                    className: tC.v$,
                                    variant: "text-md/normal",
                                    children: K.intl.string(K.t["Vl8TC+"]),
                                }),
                            ],
                        }),
                    ],
                }),
            })
        ),
        GUILD_SELECT: () =>
            (0, n.jsx)(Y.default, {
                onClose: F,
                onSelectGuild: (t) => {
                    I(t), P("CONFIRM");
                },
                transitionState: v,
                isTransfer: R,
                selectedSlotGuilds: _,
            }),
        CONFIRM() {
            if (null == w) return null;
            let t = U.filter((t) => (0, j.I5)(t)).length,
                e = U.length,
                l = _.length,
                i = "CONFIRM" === E[0] ? F : () => P(E[E.indexOf(y) - 1]),
                s = async () => {
                    if ((M(!1), null != w && U?.length !== 0)) {
                        r()(
                            !U.some((t) => t.isOnCooldown()),
                            "Cannot use a premium guild subscription slot while on cooldown",
                        );
                        try {
                            await Promise.all(
                                U.map((t) => {
                                    let { premiumGuildSubscription: e } = t;
                                    return null != e ? (0, u.jZ)(e.guildId, e.id) : Promise.resolve();
                                }),
                            ),
                                await (0, u.VA)(
                                    w.id,
                                    U.map((t) => {
                                        let { id: e } = t;
                                        return e;
                                    }),
                                    p === tg.Pn.PERK,
                                ),
                                P("SUCCESS");
                        } catch (t) {
                            M(!0);
                        }
                    }
                },
                o = R ? K.intl.string(K.t["PR0n//"]) : K.intl.string(K.t["7KP/fI"]);
            return R || "control" === S
                ? R && "control" !== S
                    ? (0, n.jsx)(tx, {
                          transitionState: v,
                          toGuild: w,
                          fromGuilds: _,
                          slotCount: e,
                          canceledCount: t,
                          isModifyingSubscription: b,
                          error: T ? A : null,
                          onConfirm: s,
                          onClose: F,
                      })
                    : (0, n.jsx)(a.Modal, {
                          transitionState: v,
                          onClose: F,
                          size: "md",
                          title: o,
                          actions: [
                              { variant: "secondary", text: K.intl.string(K.t["ETE/oC"]), onClick: i },
                              {
                                  variant: "primary",
                                  text: R
                                      ? K.intl.formatToPlainString(K.t.Oh6mxU, { slotCount: e })
                                      : K.intl.formatToPlainString(K.t.ZU5x5w, { slotCount: e }),
                                  onClick: s,
                                  loading: b,
                                  disabled: b,
                              },
                          ],
                          children: R
                              ? (0, n.jsx)(J.TransferBody, {
                                    fromGuilds: _,
                                    toGuild: w,
                                    blurb: K.intl.formatToPlainString(K.t.SSA2lu, { slotCount: e, guildCount: l }),
                                    imageClass: tC.LA,
                                    error: T ? A : null,
                                    slotCount: e,
                                    canceledCount: t,
                                })
                              : (0, n.jsx)(J.ApplyBody, {
                                    guild: w,
                                    blurb: K.intl.string(K.t.yTlZV0),
                                    warning: K.intl.formatToPlainString(K.t.KPnDlu, { days: ts.FI6, slotCount: e }),
                                    imageClass: tC.MP,
                                    error: T ? A : null,
                                    slotCount: e,
                                    canceledCount: t,
                                }),
                      })
                : (0, n.jsx)(to, {
                      transitionState: v,
                      guild: w,
                      slotCount: e,
                      canceledCount: t,
                      isModifyingSubscription: b,
                      error: T ? A : null,
                      expressiveCta: "refresh_expressive_cta" === S,
                      onConfirm: s,
                      onClose: F,
                  });
        },
        SUCCESS() {
            if ("control" !== S)
                return (0, n.jsx)(tc.A, {
                    mediaUrls: L.mediaUrls,
                    isSuccess: L.isSuccess,
                    transitionState: v,
                    onClose: F,
                    children: (t, e) =>
                        (0, n.jsx)(td.A, {
                            transitionState: v,
                            guild: w,
                            guildBoostQuantity: U.length,
                            isTransfer: R,
                            graphic: t,
                            onClose: e,
                        }),
                });
            let t = R ? K.intl.string(K.t["PR0n//"]) : K.intl.string(K.t["7KP/fI"]);
            return (0, n.jsx)(a.Modal, {
                transitionState: v,
                onClose: F,
                size: "md",
                title: t,
                actions: [],
                children: (0, n.jsx)(q.W, {
                    guild: w,
                    isTransfer: R,
                    guildBoostQuantity: U.length,
                    onClose: F,
                    didPurchaseOnFractionalPremium: !1,
                }),
            });
        },
    }[y];
    return null == D ? null : D();
};

l.d(e, { default: () => tj });
var n = l(477900),
    i = l(582128),
    s = l(284009),
    r = l.n(s),
    a = l(189213),
    o = l(17928),
    c = l(834730),
    d = l(663803),
    u = l(820739),
    m = l(43594),
    x = l(859241),
    g = l(71393),
    h = l(178368),
    C = l(174459),
    j = l(473145);
l(321073);
var f = l(503698),
    p = l.n(f),
    v = l(683071),
    S = l(224640),
    E = l(20742),
    N = l(430993),
    b = l(696208),
    y = l(868285),
    A = l(871682),
    P = l(695366),
    T = l(825484),
    I = l(821609),
    M = l(548118),
    U = l(814925),
    k = l(313375),
    _ = l(61780),
    w = l(868652),
    G = l(645619),
    F = l(434564),
    R = l(856789);
class D extends i.PureComponent {
    render() {
        let { tier: t } = this.props;
        return (0, n.jsxs)("div", {
            className: R._v,
            children: [
                (0, n.jsx)(U.A, {
                    className: R.U2,
                    children: (0, n.jsx)(k.A, { tier: t, color: "currentColor", className: R.Zw }),
                }),
                (0, j.gb)(t),
            ],
        });
    }
}
function O(t) {
    let { subscriptionChange: e, guild: l } = t,
        i = (0, F.A)(l.id);
    if (0 === e) return null;
    let s = (0, j.P7)(l.id),
        r = (0, j.kN)(i + e),
        a = r - s;
    return 0 === a
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(_.A, { className: a > 0 ? R.$P : R.q0 }), (0, n.jsx)(D, { tier: r })],
          });
}
function z(t) {
    let { guild: e, className: l, subscriptionChange: s } = t,
        r = (0, o.bG)([G.A], () => null != G.A.getStateForGuild(e.id));
    return (
        i.useEffect(() => {
            r || (0, w.Xd)(e.id);
        }, [r, e.id]),
        (0, n.jsxs)("div", {
            className: p()(R.gP, l),
            children: [
                (0, n.jsx)(M.Ay, { guild: e, size: M.Ay.Sizes.LARGE }),
                (0, n.jsxs)("div", {
                    className: R.EF,
                    children: [
                        (0, n.jsx)("div", { className: R.J5, children: e.name }),
                        (0, n.jsxs)("div", {
                            className: R.jp,
                            children: [
                                (0, n.jsx)(D, { tier: e.premiumTier }),
                                (0, n.jsx)(O, { guild: e, subscriptionChange: null != s ? s : 0 }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var L = l(166403),
    B = l(935208),
    K = l(375708),
    V = l(335648);
function Q(t) {
    let { imageClass: e, children: l, error: i } = t;
    return (0, n.jsxs)("div", {
        className: V.Qs,
        children: [
            (0, n.jsx)("div", { className: p()(V.Sl, e) }),
            l,
            (0, n.jsx)(y.F, {
                children:
                    null != i
                        ? (0, n.jsx)(A.F, {
                              className: V.z3,
                              children: (0, n.jsx)(v.w, { type: "critical", children: i.message }),
                          })
                        : null,
            }),
        ],
    });
}
function $(t) {
    let { canceledCount: e } = t,
        l = (0, o.bG)([L.A], () => L.A.getPremiumTypeSubscription());
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: V.v,
              children: [
                  (0, n.jsx)(P.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: V.kK }),
                  (0, n.jsx)(c.E, {
                      variant: "text-md/normal",
                      className: V.at,
                      children: K.intl.format(K.t.SFpsCH, { date: l.currentPeriodEnd, canceledCount: e }),
                  }),
              ],
          });
}
function Z(t) {
    let { imageClass: e, blurb: l, guild: i, warning: s, error: r, slotCount: a = 1, canceledCount: o = 0 } = t;
    return (0, n.jsxs)(Q, {
        imageClass: e,
        error: r,
        children: [
            (0, n.jsx)(c.E, { variant: "text-md/normal", children: l }),
            (0, n.jsx)(z, { className: V.w_, guild: i, subscriptionChange: a }),
            (0, n.jsx)(c.E, { variant: "text-md/normal", children: s }),
            o > 0 ? (0, n.jsx)($, { canceledCount: o }) : null,
        ],
    });
}
function H(t) {
    let { imageClass: e, blurb: l, fromGuilds: s, toGuild: r, error: a, slotCount: o = 1, canceledCount: d = 0 } = t,
        u = i.useRef(s),
        m = u.current?.length,
        x = u.current?.reduce((t, e) => (t.hasOwnProperty(e.id) || (t[e.id] = []), t[e.id].push(e), t), {});
    return (0, n.jsxs)(Q, {
        imageClass: e,
        error: a,
        children: [
            (0, n.jsx)(c.E, { variant: "text-md/normal", children: l }),
            (0, n.jsx)(c.E, {
                variant: "text-xs/bold",
                className: V._N,
                children: K.intl.format(K.t["5zQYEz"], { guildCount: m ?? 0 }),
            }),
            null != x
                ? B.default
                      .keys(x)
                      .map((t) =>
                          (0, n.jsx)(z, { className: V.vW, guild: x[t][0], subscriptionChange: -1 * x[t].length }, t),
                      )
                : null,
            (0, n.jsx)(c.E, {
                variant: "text-xs/normal",
                className: V._N,
                children: K.intl.format(K.t.ct6oxD, { slotCount: o }),
            }),
            (0, n.jsx)("div", {
                className: V.Vh,
                children: (0, n.jsx)(z, { className: V.uK, guild: r, subscriptionChange: null != s ? s.length : 1 }),
            }),
            d > 0 ? (0, n.jsx)($, { canceledCount: d }) : null,
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
            slotCount: c = 1,
            canceledCount: d = 0,
            isTransfer: u = !1,
            fromGuilds: m,
            toGuild: x,
            confirmation: g,
            confirmationLabel: h,
            isModifyingSubscription: C,
            onConfirm: j,
            onCancel: f,
            error: p,
        } = t,
        v = [
            { variant: "secondary", text: K.intl.string(K.t["ETE/oC"]), onClick: f, disabled: C },
            { variant: "primary", text: g, onClick: j, loading: C, "aria-label": h },
        ];
    return (0, n.jsxs)(S.d, {
        transitionState: e,
        onClose: l,
        size: "sm",
        "aria-label": i,
        children: [
            (0, n.jsx)(E.rQ, { title: i }),
            (0, n.jsx)(N.c, {
                children:
                    u && null != x
                        ? (0, n.jsx)(H, {
                              imageClass: r ?? "",
                              blurb: s,
                              fromGuilds: m,
                              toGuild: x,
                              error: p,
                              slotCount: c,
                              canceledCount: d,
                          })
                        : null != a
                          ? (0, n.jsx)(Z, {
                                imageClass: r ?? "",
                                blurb: s,
                                guild: a,
                                warning: o,
                                error: p,
                                slotCount: c,
                                canceledCount: d,
                            })
                          : null,
            }),
            (0, n.jsx)(b.H, { actions: v, actionsFullWidth: !1 }),
        ],
    });
};
(J.ApplyBody = Z),
    (J.TransferBody = H),
    (J.Footer = function (t) {
        let { confirmation: e, confirmationLabel: l, isModifyingSubscription: i, onConfirm: s, onCancel: r } = t;
        return (0, n.jsx)("div", {
            className: V.qr,
            children: (0, n.jsxs)(T.e, {
                direction: "horizontal-reverse",
                children: [
                    (0, n.jsx)(I.$, { variant: "primary", text: e, onClick: s, loading: i, "aria-label": l }),
                    (0, n.jsx)(I.$, {
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
    tt = l(741096);
function te(t) {
    let { tier: e } = t;
    return (0, n.jsxs)("div", {
        className: tt._v,
        children: [
            (0, n.jsx)(U.A, {
                className: tt.U2,
                children: (0, n.jsx)(k.A, { tier: e, color: "currentColor", className: tt.Zw }),
            }),
            (0, j.gb)(e),
        ],
    });
}
function tl(t) {
    let { guild: e, subscriptionChange: l } = t,
        i = (0, F.A)(e.id);
    if (0 === l) return null;
    let s = (0, j.P7)(e.id),
        r = (0, j.kN)(i + l),
        a = r - s;
    return 0 === a
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(_.A, { className: a > 0 ? tt.$P : tt.q0 }), (0, n.jsx)(te, { tier: r })],
          });
}
function tn(t) {
    let { canceledCount: e } = t,
        l = (0, o.bG)([L.A], () => L.A.getPremiumTypeSubscription());
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: tt.v,
              children: [
                  (0, n.jsx)(P.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: tt.kK }),
                  (0, n.jsx)(c.E, {
                      variant: "text-md/normal",
                      className: tt.at,
                      children: K.intl.format(K.t.SFpsCH, { date: l.currentPeriodEnd, canceledCount: e }),
                  }),
              ],
          });
}
function ti(t) {
    let { guild: e, subscriptionChange: l, className: s } = t,
        r = (0, o.bG)([G.A], () => null != G.A.getStateForGuild(e.id));
    return (
        i.useEffect(() => {
            r || (0, w.Xd)(e.id);
        }, [r, e.id]),
        (0, n.jsxs)("div", {
            className: p()(tt.gt, s),
            children: [
                (0, n.jsx)(M.Ay, { className: tt.$f, guild: e, size: M.Ay.Sizes.LARGE, active: !0 }),
                (0, n.jsxs)("div", {
                    className: tt.CR,
                    children: [
                        (0, n.jsx)(c.E, {
                            variant: "text-md/bold",
                            color: "text-strong",
                            className: tt.J5,
                            children: e.name,
                        }),
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
    tr = l(680759);
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
            onConfirm: d,
            onClose: u,
        } = t,
        m = [
            {
                variant: o ? "expressive" : "primary",
                text: K.intl.formatToPlainString(K.t.ZU5x5w, { slotCount: i }),
                onClick: d,
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
            (0, n.jsx)(c.E, { variant: "text-md/normal", children: K.intl.string(K.t.yTlZV0) }),
            (0, n.jsx)(ti, { className: tr.g, guild: l, subscriptionChange: i }),
            (0, n.jsx)(c.E, {
                variant: "text-md/normal",
                className: tr.$,
                children: K.intl.formatToPlainString(K.t.KPnDlu, { days: ts.FI6, slotCount: i }),
            }),
            s > 0 ? (0, n.jsx)(tn, { canceledCount: s }) : null,
            null != a &&
                (0, n.jsx)(c.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: a.message }),
        ],
    });
}
var tc = l(636441),
    td = l(587491),
    tu = l(171882);
let tm = {
    type: "image",
    src: "https://cdn.discordapp.com/assets/content/23384b90abfa30e78ebbd0910893fe031231876c363df46dffaadf32326e117e.svg",
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
            error: d,
            onConfirm: u,
            onClose: m,
        } = t,
        x = s.length,
        g = i.useMemo(
            () => s.reduce((t, e) => (t.hasOwnProperty(e.id) || (t[e.id] = []), t[e.id].push(e), t), {}),
            [s],
        ),
        h = [{ variant: "primary", text: K.intl.string(K.t["PR0n//"]), onClick: u, loading: o, disabled: o }];
    return (0, n.jsxs)(X.k, {
        transitionState: e,
        onClose: m,
        graphic: tm,
        title: K.intl.string(K.t["PR0n//"]),
        actions: h,
        children: [
            (0, n.jsx)(c.E, {
                variant: "text-md/normal",
                children: K.intl.formatToPlainString(K.t.SSA2lu, { slotCount: r, guildCount: x ?? 0 }),
            }),
            (0, n.jsx)(c.E, {
                variant: "text-xs/bold",
                className: tu.bV,
                children: K.intl.format(K.t["5zQYEz"], { guildCount: x ?? 0 }),
            }),
            null != g
                ? B.default
                      .keys(g)
                      .map((t) =>
                          (0, n.jsx)(ti, { className: tu.A, guild: g[t][0], subscriptionChange: -1 * g[t].length }, t),
                      )
                : null,
            (0, n.jsx)(c.E, {
                variant: "text-xs/normal",
                className: tu.bV,
                children: K.intl.format(K.t.ct6oxD, { slotCount: r }),
            }),
            (0, n.jsx)("div", {
                className: tu.P4,
                children: (0, n.jsx)(ti, { guild: l, subscriptionChange: s.length }),
            }),
            a > 0 ? (0, n.jsx)(tn, { canceledCount: a }) : null,
            null != d &&
                (0, n.jsx)(c.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: d.message }),
        ],
    });
}
var tg = l(285753),
    th = l(568065),
    tC = l(406476);
let tj = function (t) {
    let { guildBoostSlots: e, selectedGuild: l, locationSection: s, intent: f, transitionState: p, onClose: v } = t,
        S = (0, m.D)("ApplyGuildBoostModal"),
        E = (0, j.D$)(h.A.boostSlots);
    r()(null != e || null != l, "Must either provide slots or an initial selected guild"),
        r()(!e?.some((t) => t.isOnCooldown()), "If slots are provided, they must not be on cooldown");
    let N = [
            null == e ? "UNUSED_QUANTITY_SELECT" : null,
            null == l ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
        ].filter((t) => null != t),
        [b, y] = (0, o.yK)([x.A], () => [x.A.isModifyingAppliedBoost, x.A.applyBoostError]),
        [A, P] = i.useState(N[0]),
        [T, I] = i.useState(!1),
        [M, U] = i.useState(l),
        [k, _] = i.useState(e ?? E.slice(0, 1)),
        w = i.useMemo(
            () =>
                null == k
                    ? []
                    : k
                          .map((t) => {
                              let { premiumGuildSubscription: e } = t;
                              return g.A.getGuild(e?.guildId);
                          })
                          .filter((t) => null != t),
            [k],
        ),
        G = i.useMemo(() => k?.[0]?.premiumGuildSubscription != null, [k]),
        F = "control" !== S && ("CONFIRM" === A || "SUCCESS" === A),
        R = (0, tg.A)(F);
    function D() {
        return (
            v("SUCCESS" === A),
            C.default.track(ts.HAw.MODAL_DISMISSED, {
                type: ts.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                location_section: s,
            }),
            Promise.resolve()
        );
    }
    i.useEffect(() => {
        C.default.track(ts.HAw.OPEN_MODAL, { type: ts.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s });
    }, [s]);
    let O = {
        UNUSED_QUANTITY_SELECT: () => (
            r()(null != e || 0 !== E.length, "Cannot provide no slots if there are no other available slots"),
            (0, n.jsx)(a.Modal, {
                transitionState: p,
                onClose: D,
                size: "md",
                title: K.intl.string(K.t["9FFrrT"]),
                actions: [
                    { variant: "secondary", text: K.intl.string(K.t["1BPTsK"]), onClick: D },
                    { variant: "primary", text: K.intl.string(K.t["/uwYda"]), onClick: () => P("CONFIRM") },
                ],
                children: (0, n.jsxs)("div", {
                    className: tC.pS,
                    children: [
                        (0, n.jsx)(c.E, {
                            variant: "text-md/normal",
                            className: tC.TH,
                            children: K.intl.string(K.t.x5qw5U),
                        }),
                        (0, n.jsxs)("div", {
                            className: tC.g9,
                            children: [
                                (0, n.jsx)(d.l, {
                                    value: k.length,
                                    onChange: (t) => _(E.slice(0, t)),
                                    minValue: 1,
                                    maxValue: E.length,
                                }),
                                (0, n.jsx)(c.E, {
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
                onClose: D,
                onSelectGuild: (t) => {
                    U(t), P("CONFIRM");
                },
                transitionState: p,
                isTransfer: G,
                selectedSlotGuilds: w,
            }),
        CONFIRM() {
            if (null == M) return null;
            let t = k.filter((t) => (0, j.I5)(t)).length,
                e = k.length,
                l = w.length,
                i = "CONFIRM" === N[0] ? D : () => P(N[N.indexOf(A) - 1]);
            async function s() {
                if ((I(!1), null != M && k?.length !== 0)) {
                    r()(
                        !k.some((t) => t.isOnCooldown()),
                        "Cannot use a premium guild subscription slot while on cooldown",
                    );
                    try {
                        await Promise.all(
                            k.map((t) => {
                                let { premiumGuildSubscription: e } = t;
                                return null != e ? (0, u.jZ)(e.guildId, e.id) : Promise.resolve();
                            }),
                        ),
                            await (0, u.VA)(
                                M.id,
                                k.map((t) => {
                                    let { id: e } = t;
                                    return e;
                                }),
                                f === th.Pn.PERK,
                            ),
                            P("SUCCESS");
                    } catch (t) {
                        I(!0);
                    }
                }
            }
            let o = G ? K.intl.string(K.t["PR0n//"]) : K.intl.string(K.t["7KP/fI"]);
            return G || "control" === S
                ? G && "control" !== S
                    ? (0, n.jsx)(tx, {
                          transitionState: p,
                          toGuild: M,
                          fromGuilds: w,
                          slotCount: e,
                          canceledCount: t,
                          isModifyingSubscription: b,
                          error: T ? y : null,
                          onConfirm: s,
                          onClose: D,
                      })
                    : (0, n.jsx)(a.Modal, {
                          transitionState: p,
                          onClose: D,
                          size: "md",
                          title: o,
                          actions: [
                              { variant: "secondary", text: K.intl.string(K.t["ETE/oC"]), onClick: i },
                              {
                                  variant: "primary",
                                  text: G
                                      ? K.intl.formatToPlainString(K.t.Oh6mxU, { slotCount: e })
                                      : K.intl.formatToPlainString(K.t.ZU5x5w, { slotCount: e }),
                                  onClick: s,
                                  loading: b,
                                  disabled: b,
                              },
                          ],
                          children: G
                              ? (0, n.jsx)(J.TransferBody, {
                                    fromGuilds: w,
                                    toGuild: M,
                                    blurb: K.intl.formatToPlainString(K.t.SSA2lu, { slotCount: e, guildCount: l }),
                                    imageClass: tC.LA,
                                    error: T ? y : null,
                                    slotCount: e,
                                    canceledCount: t,
                                })
                              : (0, n.jsx)(J.ApplyBody, {
                                    guild: M,
                                    blurb: K.intl.string(K.t.yTlZV0),
                                    warning: K.intl.formatToPlainString(K.t.KPnDlu, { days: ts.FI6, slotCount: e }),
                                    imageClass: tC.MP,
                                    error: T ? y : null,
                                    slotCount: e,
                                    canceledCount: t,
                                }),
                      })
                : (0, n.jsx)(to, {
                      transitionState: p,
                      guild: M,
                      slotCount: e,
                      canceledCount: t,
                      isModifyingSubscription: b,
                      error: T ? y : null,
                      expressiveCta: "refresh_expressive_cta" === S,
                      onConfirm: s,
                      onClose: D,
                  });
        },
        SUCCESS() {
            if ("control" !== S)
                return (0, n.jsx)(td.A, {
                    mediaUrls: R.mediaUrls,
                    isSuccess: R.isSuccess,
                    transitionState: p,
                    onClose: D,
                    children: (t, e) =>
                        (0, n.jsx)(tc.A, {
                            transitionState: p,
                            guild: M,
                            guildBoostQuantity: k.length,
                            isTransfer: G,
                            graphic: t,
                            onClose: e,
                        }),
                });
            let t = G ? K.intl.string(K.t["PR0n//"]) : K.intl.string(K.t["7KP/fI"]);
            return (0, n.jsx)(a.Modal, {
                transitionState: p,
                onClose: D,
                size: "md",
                title: t,
                actions: [],
                children: (0, n.jsx)(q.W, {
                    guild: M,
                    isTransfer: G,
                    guildBoostQuantity: k.length,
                    onClose: D,
                    didPurchaseOnFractionalPremium: !1,
                }),
            });
        },
    }[A];
    return null == O ? null : O();
};

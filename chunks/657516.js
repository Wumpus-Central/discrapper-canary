l.d(e, { default: () => b });
var n = l(627968),
    i = l(64700),
    s = l(284009),
    r = l.n(s),
    a = l(158954),
    o = l(311907),
    d = l(397927),
    c = l(923408),
    u = l(43594),
    x = l(859241),
    m = l(71393),
    h = l(178368),
    g = l(954571),
    C = l(473145),
    j = l(976200),
    v = l(770101),
    p = l(879100),
    f = l(87533),
    S = l(592918),
    A = l(652215),
    y = l(568065),
    N = l(985018),
    T = l(300440);
let b = (t) => {
    let { guildBoostSlots: e, selectedGuild: l, locationSection: s, intent: b, transitionState: E, onClose: P } = t,
        w = (0, u.D)("ApplyGuildBoostModal"),
        G = (0, C.D$)(h.A.boostSlots);
    r()(null != e || null != l, "Must either provide slots or an initial selected guild"),
        r()(!e?.some((t) => t.isOnCooldown()), "If slots are provided, they must not be on cooldown");
    let k = [
            null == e ? "UNUSED_QUANTITY_SELECT" : null,
            null == l ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
        ].filter((t) => null != t),
        [I, M] = (0, o.yK)([x.A], () => [x.A.isModifyingAppliedBoost, x.A.applyBoostError]),
        [L, U] = i.useState(k[0]),
        [_, D] = i.useState(!1),
        [R, F] = i.useState(l),
        [B, z] = i.useState(e ?? G.slice(0, 1)),
        O = i.useMemo(
            () =>
                null == B
                    ? []
                    : B.map((t) => {
                          let { premiumGuildSubscription: e } = t;
                          return m.A.getGuild(e?.guildId);
                      }).filter((t) => null != t),
            [B],
        ),
        V = i.useMemo(() => B?.[0]?.premiumGuildSubscription != null, [B]),
        K = () => (
            P("SUCCESS" === L),
            g.default.track(A.HAw.MODAL_DISMISSED, { type: A.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s }),
            Promise.resolve()
        );
    i.useEffect(() => {
        g.default.track(A.HAw.OPEN_MODAL, { type: A.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s });
    }, [s]);
    let Z = {
        UNUSED_QUANTITY_SELECT: () => (
            r()(null != e || 0 !== G.length, "Cannot provide no slots if there are no other available slots"),
            (0, n.jsx)(a.Modal, {
                transitionState: E,
                onClose: K,
                size: "md",
                title: N.intl.string(N.t["9FFrrT"]),
                actions: [
                    { variant: "secondary", text: N.intl.string(N.t["1BPTsK"]), onClick: K },
                    { variant: "primary", text: N.intl.string(N.t["/uwYda"]), onClick: () => U("CONFIRM") },
                ],
                children: (0, n.jsxs)("div", {
                    className: T.pS,
                    children: [
                        (0, n.jsx)(d.Text, {
                            variant: "text-md/normal",
                            className: T.TH,
                            children: N.intl.string(N.t.x5qw5U),
                        }),
                        (0, n.jsxs)("div", {
                            className: T.g9,
                            children: [
                                (0, n.jsx)(d.lw3, {
                                    value: B.length,
                                    onChange: (t) => z(G.slice(0, t)),
                                    minValue: 1,
                                    maxValue: G.length,
                                }),
                                (0, n.jsx)(d.Text, {
                                    className: T.v$,
                                    variant: "text-md/normal",
                                    children: N.intl.string(N.t["Vl8TC+"]),
                                }),
                            ],
                        }),
                    ],
                }),
            })
        ),
        GUILD_SELECT: () =>
            (0, n.jsx)(v.default, {
                onClose: K,
                onSelectGuild: (t) => {
                    F(t), U("CONFIRM");
                },
                transitionState: E,
                isTransfer: V,
                selectedSlotGuilds: O,
            }),
        CONFIRM() {
            if (null == R) return null;
            let t = B.filter((t) => (0, C.I5)(t)).length,
                e = B.length,
                l = O.length,
                i = "CONFIRM" === k[0] ? K : () => U(k[k.indexOf(L) - 1]),
                s = async () => {
                    if ((D(!1), null != R && B?.length !== 0)) {
                        r()(
                            !B.some((t) => t.isOnCooldown()),
                            "Cannot use a premium guild subscription slot while on cooldown",
                        );
                        try {
                            await Promise.all(
                                B.map((t) => {
                                    let { premiumGuildSubscription: e } = t;
                                    return null != e ? (0, c.jZ)(e.guildId, e.id) : Promise.resolve();
                                }),
                            ),
                                await (0, c.VA)(
                                    R.id,
                                    B.map((t) => {
                                        let { id: e } = t;
                                        return e;
                                    }),
                                    b === y.Pn.PERK,
                                ),
                                U("SUCCESS");
                        } catch (t) {
                            D(!0);
                        }
                    }
                },
                o = V ? N.intl.string(N.t["PR0n//"]) : N.intl.string(N.t["7KP/fI"]);
            return V || "control" === w
                ? V && "control" !== w
                    ? (0, n.jsx)(S.A, {
                          transitionState: E,
                          toGuild: R,
                          fromGuilds: O,
                          slotCount: e,
                          canceledCount: t,
                          isModifyingSubscription: I,
                          error: _ ? M : null,
                          onConfirm: s,
                          onClose: K,
                      })
                    : (0, n.jsx)(a.Modal, {
                          transitionState: E,
                          onClose: K,
                          size: "md",
                          title: o,
                          actions: [
                              { variant: "secondary", text: N.intl.string(N.t["ETE/oC"]), onClick: i },
                              {
                                  variant: "primary",
                                  text: V
                                      ? N.intl.formatToPlainString(N.t.Oh6mxU, { slotCount: e })
                                      : N.intl.formatToPlainString(N.t.ZU5x5w, { slotCount: e }),
                                  onClick: s,
                                  loading: I,
                                  disabled: I,
                              },
                          ],
                          children: V
                              ? (0, n.jsx)(j.A.TransferBody, {
                                    fromGuilds: O,
                                    toGuild: R,
                                    blurb: N.intl.formatToPlainString(N.t.SSA2lu, { slotCount: e, guildCount: l }),
                                    imageClass: T.LA,
                                    error: _ ? M : null,
                                    slotCount: e,
                                    canceledCount: t,
                                })
                              : (0, n.jsx)(j.A.ApplyBody, {
                                    guild: R,
                                    blurb: N.intl.string(N.t.yTlZV0),
                                    warning: N.intl.formatToPlainString(N.t.KPnDlu, { days: A.FI6, slotCount: e }),
                                    imageClass: T.MP,
                                    error: _ ? M : null,
                                    slotCount: e,
                                    canceledCount: t,
                                }),
                      })
                : (0, n.jsx)(f.A, {
                      transitionState: E,
                      guild: R,
                      slotCount: e,
                      canceledCount: t,
                      isModifyingSubscription: I,
                      error: _ ? M : null,
                      expressiveCta: "refresh_expressive_cta" === w,
                      onConfirm: s,
                      onClose: K,
                  });
        },
        SUCCESS() {
            let t = V ? N.intl.string(N.t["PR0n//"]) : N.intl.string(N.t["7KP/fI"]);
            return (0, n.jsx)(a.Modal, {
                transitionState: E,
                onClose: K,
                size: "md",
                title: t,
                actions: [],
                children: (0, n.jsx)(p.WE, {
                    guild: R,
                    isTransfer: V,
                    guildBoostQuantity: B.length,
                    onClose: K,
                    didPurchaseOnFractionalPremium: !1,
                }),
            });
        },
    }[L];
    return null == Z ? null : Z();
};

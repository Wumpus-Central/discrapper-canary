l.d(e, { default: () => w });
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
    g = l(178368),
    h = l(954571),
    C = l(473145),
    j = l(976200),
    v = l(770101),
    p = l(879100),
    f = l(87533),
    S = l(636441),
    A = l(875022),
    y = l(592918),
    N = l(458663),
    T = l(652215),
    b = l(568065),
    E = l(985018),
    P = l(37739);
let w = (t) => {
    let { guildBoostSlots: e, selectedGuild: l, locationSection: s, intent: w, transitionState: G, onClose: I } = t,
        M = (0, u.D)("ApplyGuildBoostModal"),
        U = (0, C.D$)(g.A.boostSlots);
    r()(null != e || null != l, "Must either provide slots or an initial selected guild"),
        r()(!e?.some((t) => t.isOnCooldown()), "If slots are provided, they must not be on cooldown");
    let k = [
            null == e ? "UNUSED_QUANTITY_SELECT" : null,
            null == l ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
        ].filter((t) => null != t),
        [L, _] = (0, o.yK)([x.A], () => [x.A.isModifyingAppliedBoost, x.A.applyBoostError]),
        [D, R] = i.useState(k[0]),
        [F, B] = i.useState(!1),
        [z, O] = i.useState(l),
        [V, K] = i.useState(e ?? U.slice(0, 1)),
        Q = i.useMemo(
            () =>
                null == V
                    ? []
                    : V.map((t) => {
                          let { premiumGuildSubscription: e } = t;
                          return m.A.getGuild(e?.guildId);
                      }).filter((t) => null != t),
            [V],
        ),
        Z = i.useMemo(() => V?.[0]?.premiumGuildSubscription != null, [V]),
        q = "control" !== M && ("CONFIRM" === D || "SUCCESS" === D),
        H = (0, N.A)(q),
        Y = () => (
            I("SUCCESS" === D),
            h.default.track(T.HAw.MODAL_DISMISSED, { type: T.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s }),
            Promise.resolve()
        );
    i.useEffect(() => {
        h.default.track(T.HAw.OPEN_MODAL, { type: T.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s });
    }, [s]);
    let J = {
        UNUSED_QUANTITY_SELECT: () => (
            r()(null != e || 0 !== U.length, "Cannot provide no slots if there are no other available slots"),
            (0, n.jsx)(a.Modal, {
                transitionState: G,
                onClose: Y,
                size: "md",
                title: E.intl.string(E.t["9FFrrT"]),
                actions: [
                    { variant: "secondary", text: E.intl.string(E.t["1BPTsK"]), onClick: Y },
                    { variant: "primary", text: E.intl.string(E.t["/uwYda"]), onClick: () => R("CONFIRM") },
                ],
                children: (0, n.jsxs)("div", {
                    className: P.pS,
                    children: [
                        (0, n.jsx)(d.Text, {
                            variant: "text-md/normal",
                            className: P.TH,
                            children: E.intl.string(E.t.x5qw5U),
                        }),
                        (0, n.jsxs)("div", {
                            className: P.g9,
                            children: [
                                (0, n.jsx)(d.lw3, {
                                    value: V.length,
                                    onChange: (t) => K(U.slice(0, t)),
                                    minValue: 1,
                                    maxValue: U.length,
                                }),
                                (0, n.jsx)(d.Text, {
                                    className: P.v$,
                                    variant: "text-md/normal",
                                    children: E.intl.string(E.t["Vl8TC+"]),
                                }),
                            ],
                        }),
                    ],
                }),
            })
        ),
        GUILD_SELECT: () =>
            (0, n.jsx)(v.default, {
                onClose: Y,
                onSelectGuild: (t) => {
                    O(t), R("CONFIRM");
                },
                transitionState: G,
                isTransfer: Z,
                selectedSlotGuilds: Q,
            }),
        CONFIRM() {
            if (null == z) return null;
            let t = V.filter((t) => (0, C.I5)(t)).length,
                e = V.length,
                l = Q.length,
                i = "CONFIRM" === k[0] ? Y : () => R(k[k.indexOf(D) - 1]),
                s = async () => {
                    if ((B(!1), null != z && V?.length !== 0)) {
                        r()(
                            !V.some((t) => t.isOnCooldown()),
                            "Cannot use a premium guild subscription slot while on cooldown",
                        );
                        try {
                            await Promise.all(
                                V.map((t) => {
                                    let { premiumGuildSubscription: e } = t;
                                    return null != e ? (0, c.jZ)(e.guildId, e.id) : Promise.resolve();
                                }),
                            ),
                                await (0, c.VA)(
                                    z.id,
                                    V.map((t) => {
                                        let { id: e } = t;
                                        return e;
                                    }),
                                    w === b.Pn.PERK,
                                ),
                                R("SUCCESS");
                        } catch (t) {
                            B(!0);
                        }
                    }
                },
                o = Z ? E.intl.string(E.t["PR0n//"]) : E.intl.string(E.t["7KP/fI"]);
            return Z || "control" === M
                ? Z && "control" !== M
                    ? (0, n.jsx)(y.A, {
                          transitionState: G,
                          toGuild: z,
                          fromGuilds: Q,
                          slotCount: e,
                          canceledCount: t,
                          isModifyingSubscription: L,
                          error: F ? _ : null,
                          onConfirm: s,
                          onClose: Y,
                      })
                    : (0, n.jsx)(a.Modal, {
                          transitionState: G,
                          onClose: Y,
                          size: "md",
                          title: o,
                          actions: [
                              { variant: "secondary", text: E.intl.string(E.t["ETE/oC"]), onClick: i },
                              {
                                  variant: "primary",
                                  text: Z
                                      ? E.intl.formatToPlainString(E.t.Oh6mxU, { slotCount: e })
                                      : E.intl.formatToPlainString(E.t.ZU5x5w, { slotCount: e }),
                                  onClick: s,
                                  loading: L,
                                  disabled: L,
                              },
                          ],
                          children: Z
                              ? (0, n.jsx)(j.A.TransferBody, {
                                    fromGuilds: Q,
                                    toGuild: z,
                                    blurb: E.intl.formatToPlainString(E.t.SSA2lu, { slotCount: e, guildCount: l }),
                                    imageClass: P.LA,
                                    error: F ? _ : null,
                                    slotCount: e,
                                    canceledCount: t,
                                })
                              : (0, n.jsx)(j.A.ApplyBody, {
                                    guild: z,
                                    blurb: E.intl.string(E.t.yTlZV0),
                                    warning: E.intl.formatToPlainString(E.t.KPnDlu, { days: T.FI6, slotCount: e }),
                                    imageClass: P.MP,
                                    error: F ? _ : null,
                                    slotCount: e,
                                    canceledCount: t,
                                }),
                      })
                : (0, n.jsx)(f.A, {
                      transitionState: G,
                      guild: z,
                      slotCount: e,
                      canceledCount: t,
                      isModifyingSubscription: L,
                      error: F ? _ : null,
                      expressiveCta: "refresh_expressive_cta" === M,
                      onConfirm: s,
                      onClose: Y,
                  });
        },
        SUCCESS() {
            if ("control" !== M)
                return (0, n.jsx)(A.A, {
                    mediaUrls: H.mediaUrls,
                    isSuccess: H.isSuccess,
                    transitionState: G,
                    onClose: Y,
                    children: (t, e) =>
                        (0, n.jsx)(S.A, {
                            transitionState: G,
                            guild: z,
                            guildBoostQuantity: V.length,
                            isTransfer: Z,
                            graphic: t,
                            onClose: e,
                        }),
                });
            let t = Z ? E.intl.string(E.t["PR0n//"]) : E.intl.string(E.t["7KP/fI"]);
            return (0, n.jsx)(a.Modal, {
                transitionState: G,
                onClose: Y,
                size: "md",
                title: t,
                actions: [],
                children: (0, n.jsx)(p.W, {
                    guild: z,
                    isTransfer: Z,
                    guildBoostQuantity: V.length,
                    onClose: Y,
                    didPurchaseOnFractionalPremium: !1,
                }),
            });
        },
    }[D];
    return null == J ? null : J();
};

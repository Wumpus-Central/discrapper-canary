n.d(e, { default: () => I });
var l = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(923408),
    u = n(43594),
    m = n(859241),
    x = n(71393),
    h = n(178368),
    g = n(954571),
    p = n(473145),
    f = n(976200),
    b = n(770101),
    j = n(879100),
    v = n(87533),
    C = n(636441),
    y = n(875022),
    A = n(592918),
    S = n(458663),
    N = n(652215),
    T = n(568065),
    E = n(985018),
    w = n(300440);
let I = (t) => {
    let { guildBoostSlots: e, selectedGuild: n, locationSection: s, intent: I, transitionState: R, onClose: P } = t,
        U = (0, u.D)("ApplyGuildBoostModal"),
        L = (0, p.D$)(h.A.boostSlots);
    a()(null != e || null != n, "Must either provide slots or an initial selected guild"),
        a()(!e?.some((t) => t.isOnCooldown()), "If slots are provided, they must not be on cooldown");
    let k = [
            null == e ? "UNUSED_QUANTITY_SELECT" : null,
            null == n ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
        ].filter((t) => null != t),
        [G, M] = (0, o.yK)([m.A], () => [m.A.isModifyingAppliedBoost, m.A.applyBoostError]),
        [_, O] = i.useState(k[0]),
        [D, F] = i.useState(!1),
        [B, z] = i.useState(n),
        [K, V] = i.useState(e ?? L.slice(0, 1)),
        Q = i.useMemo(
            () =>
                null == K
                    ? []
                    : K.map((t) => {
                          let { premiumGuildSubscription: e } = t;
                          return x.A.getGuild(e?.guildId);
                      }).filter((t) => null != t),
            [K],
        ),
        Z = i.useMemo(() => K?.[0]?.premiumGuildSubscription != null, [K]),
        W = "control" !== U && ("CONFIRM" === _ || "SUCCESS" === _),
        Y = (0, S.A)(W),
        q = () => (
            P("SUCCESS" === _),
            g.default.track(N.HAw.MODAL_DISMISSED, { type: N.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s }),
            Promise.resolve()
        );
    i.useEffect(() => {
        g.default.track(N.HAw.OPEN_MODAL, { type: N.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s });
    }, [s]);
    let H = {
        UNUSED_QUANTITY_SELECT: () => (
            a()(null != e || 0 !== L.length, "Cannot provide no slots if there are no other available slots"),
            (0, l.jsx)(r.Modal, {
                transitionState: R,
                onClose: q,
                size: "md",
                title: E.intl.string(E.t["9FFrrT"]),
                actions: [
                    { variant: "secondary", text: E.intl.string(E.t["1BPTsK"]), onClick: q },
                    { variant: "primary", text: E.intl.string(E.t["/uwYda"]), onClick: () => O("CONFIRM") },
                ],
                children: (0, l.jsxs)("div", {
                    className: w.pS,
                    children: [
                        (0, l.jsx)(c.Text, {
                            variant: "text-md/normal",
                            className: w.TH,
                            children: E.intl.string(E.t.x5qw5U),
                        }),
                        (0, l.jsxs)("div", {
                            className: w.g9,
                            children: [
                                (0, l.jsx)(c.lw3, {
                                    value: K.length,
                                    onChange: (t) => V(L.slice(0, t)),
                                    minValue: 1,
                                    maxValue: L.length,
                                }),
                                (0, l.jsx)(c.Text, {
                                    className: w.v$,
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
            (0, l.jsx)(b.default, {
                onClose: q,
                onSelectGuild: (t) => {
                    z(t), O("CONFIRM");
                },
                transitionState: R,
                isTransfer: Z,
                selectedSlotGuilds: Q,
            }),
        CONFIRM() {
            if (null == B) return null;
            let t = K.filter((t) => (0, p.I5)(t)).length,
                e = K.length,
                n = Q.length,
                i = "CONFIRM" === k[0] ? q : () => O(k[k.indexOf(_) - 1]),
                s = async () => {
                    if ((F(!1), null != B && K?.length !== 0)) {
                        a()(
                            !K.some((t) => t.isOnCooldown()),
                            "Cannot use a premium guild subscription slot while on cooldown",
                        );
                        try {
                            await Promise.all(
                                K.map((t) => {
                                    let { premiumGuildSubscription: e } = t;
                                    return null != e ? (0, d.jZ)(e.guildId, e.id) : Promise.resolve();
                                }),
                            ),
                                await (0, d.VA)(
                                    B.id,
                                    K.map((t) => {
                                        let { id: e } = t;
                                        return e;
                                    }),
                                    I === T.Pn.PERK,
                                ),
                                O("SUCCESS");
                        } catch (t) {
                            F(!0);
                        }
                    }
                },
                o = Z ? E.intl.string(E.t["PR0n//"]) : E.intl.string(E.t["7KP/fI"]);
            return Z || "control" === U
                ? Z && "control" !== U
                    ? (0, l.jsx)(A.A, {
                          transitionState: R,
                          toGuild: B,
                          fromGuilds: Q,
                          slotCount: e,
                          canceledCount: t,
                          isModifyingSubscription: G,
                          error: D ? M : null,
                          onConfirm: s,
                          onClose: q,
                      })
                    : (0, l.jsx)(r.Modal, {
                          transitionState: R,
                          onClose: q,
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
                                  loading: G,
                                  disabled: G,
                              },
                          ],
                          children: Z
                              ? (0, l.jsx)(f.A.TransferBody, {
                                    fromGuilds: Q,
                                    toGuild: B,
                                    blurb: E.intl.formatToPlainString(E.t.SSA2lu, { slotCount: e, guildCount: n }),
                                    imageClass: w.LA,
                                    error: D ? M : null,
                                    slotCount: e,
                                    canceledCount: t,
                                })
                              : (0, l.jsx)(f.A.ApplyBody, {
                                    guild: B,
                                    blurb: E.intl.string(E.t.yTlZV0),
                                    warning: E.intl.formatToPlainString(E.t.KPnDlu, { days: N.FI6, slotCount: e }),
                                    imageClass: w.MP,
                                    error: D ? M : null,
                                    slotCount: e,
                                    canceledCount: t,
                                }),
                      })
                : (0, l.jsx)(v.A, {
                      transitionState: R,
                      guild: B,
                      slotCount: e,
                      canceledCount: t,
                      isModifyingSubscription: G,
                      error: D ? M : null,
                      expressiveCta: "refresh_expressive_cta" === U,
                      onConfirm: s,
                      onClose: q,
                  });
        },
        SUCCESS() {
            if ("control" !== U)
                return (0, l.jsx)(y.A, {
                    mediaUrls: Y.mediaUrls,
                    isSuccess: Y.isSuccess,
                    transitionState: R,
                    onClose: q,
                    children: (t, e) =>
                        (0, l.jsx)(C.A, {
                            transitionState: R,
                            guild: B,
                            guildBoostQuantity: K.length,
                            isTransfer: Z,
                            graphic: t,
                            onClose: e,
                        }),
                });
            let t = Z ? E.intl.string(E.t["PR0n//"]) : E.intl.string(E.t["7KP/fI"]);
            return (0, l.jsx)(r.Modal, {
                transitionState: R,
                onClose: q,
                size: "md",
                title: t,
                actions: [],
                children: (0, l.jsx)(j.W, {
                    guild: B,
                    isTransfer: Z,
                    guildBoostQuantity: K.length,
                    onClose: q,
                    didPurchaseOnFractionalPremium: !1,
                }),
            });
        },
    }[_];
    return null == H ? null : H();
};

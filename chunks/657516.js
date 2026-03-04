l.d(e, { default: () => T });
var n = l(627968),
    i = l(64700),
    s = l(284009),
    r = l.n(s),
    a = l(158954),
    o = l(311907),
    d = l(397927),
    c = l(923408),
    u = l(43594),
    m = l(859241),
    x = l(71393),
    h = l(178368),
    g = l(954571),
    C = l(473145),
    j = l(976200),
    v = l(770101),
    p = l(879100),
    f = l(592918),
    S = l(652215),
    A = l(568065),
    N = l(985018),
    y = l(449838);
let T = (t) => {
    let { guildBoostSlots: e, selectedGuild: l, locationSection: s, intent: T, transitionState: b, onClose: E } = t,
        P = (0, u.D)("ApplyGuildBoostModal"),
        w = (0, C.D$)(h.A.boostSlots);
    r()(null != e || null != l, "Must either provide slots or an initial selected guild"),
        r()(!e?.some((t) => t.isOnCooldown()), "If slots are provided, they must not be on cooldown");
    let G = [
            null == e ? "UNUSED_QUANTITY_SELECT" : null,
            null == l ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
        ].filter((t) => null != t),
        [I, L] = (0, o.yK)([m.A], () => [m.A.isModifyingAppliedBoost, m.A.applyBoostError]),
        [M, k] = i.useState(G[0]),
        [U, _] = i.useState(!1),
        [D, R] = i.useState(l),
        [F, B] = i.useState(e ?? w.slice(0, 1)),
        z = i.useMemo(
            () =>
                null == F
                    ? []
                    : F.map((t) => {
                          let { premiumGuildSubscription: e } = t;
                          return x.A.getGuild(e?.guildId);
                      }).filter((t) => null != t),
            [F],
        ),
        O = i.useMemo(() => F?.[0]?.premiumGuildSubscription != null, [F]),
        V = () => (
            E("SUCCESS" === M),
            g.default.track(S.HAw.MODAL_DISMISSED, { type: S.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s }),
            Promise.resolve()
        );
    i.useEffect(() => {
        g.default.track(S.HAw.OPEN_MODAL, { type: S.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s });
    }, [s]);
    let K = {
        UNUSED_QUANTITY_SELECT: () => (
            r()(null != e || 0 !== w.length, "Cannot provide no slots if there are no other available slots"),
            (0, n.jsx)(a.Modal, {
                transitionState: b,
                onClose: V,
                size: "md",
                title: N.intl.string(N.t["9FFrrT"]),
                actions: [
                    { variant: "secondary", text: N.intl.string(N.t["1BPTsK"]), onClick: V },
                    { variant: "primary", text: N.intl.string(N.t["/uwYda"]), onClick: () => k("CONFIRM") },
                ],
                children: (0, n.jsxs)("div", {
                    className: y.pS,
                    children: [
                        (0, n.jsx)(d.Text, {
                            variant: "text-md/normal",
                            className: y.TH,
                            children: N.intl.string(N.t.x5qw5U),
                        }),
                        (0, n.jsxs)("div", {
                            className: y.g9,
                            children: [
                                (0, n.jsx)(d.lw3, {
                                    value: F.length,
                                    onChange: (t) => B(w.slice(0, t)),
                                    minValue: 1,
                                    maxValue: w.length,
                                }),
                                (0, n.jsx)(d.Text, {
                                    className: y.v$,
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
                onClose: V,
                onSelectGuild: (t) => {
                    R(t), k("CONFIRM");
                },
                transitionState: b,
                isTransfer: O,
                selectedSlotGuilds: z,
            }),
        CONFIRM() {
            if (null == D) return null;
            let t = F.filter((t) => (0, C.I5)(t)).length,
                e = F.length,
                l = z.length,
                i = "CONFIRM" === G[0] ? V : () => k(G[G.indexOf(M) - 1]),
                s = async () => {
                    if ((_(!1), null != D && F?.length !== 0)) {
                        r()(
                            !F.some((t) => t.isOnCooldown()),
                            "Cannot use a premium guild subscription slot while on cooldown",
                        );
                        try {
                            await Promise.all(
                                F.map((t) => {
                                    let { premiumGuildSubscription: e } = t;
                                    return null != e ? (0, c.jZ)(e.guildId, e.id) : Promise.resolve();
                                }),
                            ),
                                await (0, c.VA)(
                                    D.id,
                                    F.map((t) => {
                                        let { id: e } = t;
                                        return e;
                                    }),
                                    T === A.Pn.PERK,
                                ),
                                k("SUCCESS");
                        } catch (t) {
                            _(!0);
                        }
                    }
                },
                o = O ? N.intl.string(N.t["PR0n//"]) : N.intl.string(N.t["7KP/fI"]);
            return O && "control" !== P
                ? (0, n.jsx)(f.A, {
                      transitionState: b,
                      toGuild: D,
                      fromGuilds: z,
                      slotCount: e,
                      canceledCount: t,
                      isModifyingSubscription: I,
                      error: U ? L : null,
                      onConfirm: s,
                      onClose: V,
                  })
                : (0, n.jsx)(a.Modal, {
                      transitionState: b,
                      onClose: V,
                      size: "md",
                      title: o,
                      actions: [
                          { variant: "secondary", text: N.intl.string(N.t["ETE/oC"]), onClick: i },
                          {
                              variant: "primary",
                              text: O
                                  ? N.intl.formatToPlainString(N.t.Oh6mxU, { slotCount: e })
                                  : N.intl.formatToPlainString(N.t.ZU5x5w, { slotCount: e }),
                              onClick: s,
                              loading: I,
                              disabled: I,
                          },
                      ],
                      children: O
                          ? (0, n.jsx)(j.A.TransferBody, {
                                fromGuilds: z,
                                toGuild: D,
                                blurb: N.intl.formatToPlainString(N.t.SSA2lu, { slotCount: e, guildCount: l }),
                                imageClass: y.LA,
                                error: U ? L : null,
                                slotCount: e,
                                canceledCount: t,
                            })
                          : (0, n.jsx)(j.A.ApplyBody, {
                                guild: D,
                                blurb: N.intl.string(N.t.yTlZV0),
                                warning: N.intl.formatToPlainString(N.t.KPnDlu, { days: S.FI6, slotCount: e }),
                                imageClass: y.MP,
                                error: U ? L : null,
                                slotCount: e,
                                canceledCount: t,
                            }),
                  });
        },
        SUCCESS() {
            let t = O ? N.intl.string(N.t["PR0n//"]) : N.intl.string(N.t["7KP/fI"]);
            return (0, n.jsx)(a.Modal, {
                transitionState: b,
                onClose: V,
                size: "md",
                title: t,
                actions: [],
                children: (0, n.jsx)(p.WE, {
                    guild: D,
                    isTransfer: O,
                    guildBoostQuantity: F.length,
                    onClose: V,
                    didPurchaseOnFractionalPremium: !1,
                }),
            });
        },
    }[M];
    return null == K ? null : K();
};

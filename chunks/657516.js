n.d(t, {
    default: () => v,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(397927),
    u = n(923408),
    d = n(859241),
    f = n(71393),
    p = n(178368),
    _ = n(954571),
    h = n(473145),
    m = n(976200),
    g = n(770101),
    E = n(879100),
    b = n(652215),
    y = n(568065),
    O = n(985018),
    A = n(449838);
let v = (e) => {
    let { guildBoostSlots: t, selectedGuild: n, locationSection: a, intent: v, transitionState: S, onClose: I } = e,
        T = (0, h.D$)(p.A.boostSlots);
    s()(null != t || null != n, "Must either provide slots or an initial selected guild"),
        s()(
            !(null == t ? void 0 : t.some((e) => e.isOnCooldown())),
            "If slots are provided, they must not be on cooldown",
        );
    let C = [
            null == t ? "UNUSED_QUANTITY_SELECT" : null,
            null == n ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
        ].filter((e) => null != e),
        [N, R] = (0, l.yK)([d.A], () => [d.A.isModifyingAppliedBoost, d.A.applyBoostError]),
        [w, P] = i.useState(C[0]),
        [D, x] = i.useState(!1),
        [L, j] = i.useState(n),
        [M, k] = i.useState(null != t ? t : T.slice(0, 1)),
        U = i.useMemo(
            () =>
                null == M
                    ? []
                    : M.map((e) => {
                          let { premiumGuildSubscription: t } = e;
                          return f.A.getGuild(null == t ? void 0 : t.guildId);
                      }).filter((e) => null != e),
            [M],
        ),
        G = i.useMemo(() => {
            var e;
            return (null == M || null == (e = M[0]) ? void 0 : e.premiumGuildSubscription) != null;
        }, [M]),
        V = () => (
            I("SUCCESS" === w),
            _.default.track(b.HAw.MODAL_DISMISSED, {
                type: b.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                location_section: a,
            }),
            Promise.resolve()
        ),
        F = {
            UNUSED_QUANTITY_SELECT: () => (
                s()(null != t || 0 !== T.length, "Cannot provide no slots if there are no other available slots"),
                (0, r.jsx)(o.Modal, {
                    transitionState: S,
                    onClose: V,
                    size: "md",
                    title: O.intl.string(O.t["9FFrrT"]),
                    actions: [
                        {
                            variant: "secondary",
                            text: O.intl.string(O.t["1BPTsK"]),
                            onClick: V,
                        },
                        {
                            variant: "primary",
                            text: O.intl.string(O.t["/uwYda"]),
                            onClick: () => P("CONFIRM"),
                        },
                    ],
                    children: (0, r.jsxs)("div", {
                        className: A.pS,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: "text-md/normal",
                                className: A.TH,
                                children: O.intl.string(O.t.x5qw5U),
                            }),
                            (0, r.jsxs)("div", {
                                className: A.g9,
                                children: [
                                    (0, r.jsx)(c.lw3, {
                                        value: M.length,
                                        onChange: (e) => k(T.slice(0, e)),
                                        minValue: 1,
                                        maxValue: T.length,
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        className: A.v$,
                                        variant: "text-md/normal",
                                        children: O.intl.string(O.t["Vl8TC+"]),
                                    }),
                                ],
                            }),
                        ],
                    }),
                })
            ),
            GUILD_SELECT: () =>
                (0, r.jsx)(g.default, {
                    onClose: V,
                    onSelectGuild: (e) => {
                        j(e), P("CONFIRM");
                    },
                    transitionState: S,
                    isTransfer: G,
                    selectedSlotGuilds: U,
                }),
            CONFIRM() {
                if (null == L) return null;
                let e = M.filter((e) => (0, h.I5)(e)).length,
                    t = M.length,
                    n = U.length,
                    i = "CONFIRM" === C[0] ? V : () => P(C[C.indexOf(w) - 1]),
                    a = async () => {
                        if ((x(!1), null != L && (null == M ? void 0 : M.length) !== 0)) {
                            s()(
                                !M.some((e) => e.isOnCooldown()),
                                "Cannot use a premium guild subscription slot while on cooldown",
                            );
                            try {
                                await Promise.all(
                                    M.map((e) => {
                                        let { premiumGuildSubscription: t } = e;
                                        return null != t ? (0, u.jZ)(t.guildId, t.id) : Promise.resolve();
                                    }),
                                ),
                                    await (0, u.VA)(
                                        L.id,
                                        M.map((e) => {
                                            let { id: t } = e;
                                            return t;
                                        }),
                                        v === y.Pn.PERK,
                                    ),
                                    P("SUCCESS");
                            } catch (e) {
                                x(!0);
                            }
                        }
                    },
                    l = G ? O.intl.string(O.t["PR0n//"]) : O.intl.string(O.t["7KP/fI"]);
                return (0, r.jsx)(o.Modal, {
                    transitionState: S,
                    onClose: V,
                    size: "md",
                    title: l,
                    actions: [
                        {
                            variant: "secondary",
                            text: O.intl.string(O.t["ETE/oC"]),
                            onClick: i,
                        },
                        {
                            variant: "primary",
                            text: G
                                ? O.intl.formatToPlainString(O.t.Oh6mxU, {
                                      slotCount: t,
                                  })
                                : O.intl.formatToPlainString(O.t.ZU5x5w, {
                                      slotCount: t,
                                  }),
                            onClick: a,
                            loading: N,
                            disabled: N,
                        },
                    ],
                    children: G
                        ? (0, r.jsx)(m.A.TransferBody, {
                              fromGuilds: U,
                              toGuild: L,
                              blurb: O.intl.formatToPlainString(O.t.SSA2lu, {
                                  slotCount: t,
                                  guildCount: n,
                              }),
                              imageClass: A.LA,
                              error: D ? R : null,
                              slotCount: t,
                              canceledCount: e,
                          })
                        : (0, r.jsx)(m.A.ApplyBody, {
                              guild: L,
                              blurb: O.intl.string(O.t.yTlZV0),
                              warning: O.intl.formatToPlainString(O.t.KPnDlu, {
                                  days: b.FI6,
                                  slotCount: t,
                              }),
                              imageClass: A.MP,
                              error: D ? R : null,
                              slotCount: t,
                              canceledCount: e,
                          }),
                });
            },
            SUCCESS() {
                let e = G ? O.intl.string(O.t["PR0n//"]) : O.intl.string(O.t["7KP/fI"]);
                return (0, r.jsx)(o.Modal, {
                    transitionState: S,
                    onClose: V,
                    size: "md",
                    title: e,
                    actions: [],
                    children: (0, r.jsx)(E.WE, {
                        guild: L,
                        isTransfer: G,
                        guildBoostQuantity: M.length,
                        onClose: V,
                        didPurchaseOnFractionalPremium: !1,
                    }),
                });
            },
        };
    i.useEffect(() => {
        _.default.track(b.HAw.OPEN_MODAL, {
            type: b.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL,
            location_section: a,
        });
    }, [a]);
    let B = F[w];
    return null == B ? null : B();
};

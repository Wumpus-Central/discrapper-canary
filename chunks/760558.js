n.d(t, { default: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(179360),
    d = n(899667),
    f = n(430824),
    _ = n(314884),
    p = n(626135),
    h = n(267642),
    m = n(395199),
    g = n(719228),
    E = n(343649),
    b = n(4434),
    y = n(981631),
    O = n(388032),
    v = n(252633);
let I = (e) => {
    let { guildBoostSlots: t, selectedGuild: n, locationSection: a, intent: I, transitionState: T, onClose: S } = e,
        A = (0, h.vx)(_.Z.boostSlots);
    o()(null != t || null != n, "Must either provide slots or an initial selected guild"),
        o()(
            !(null == t ? void 0 : t.some((e) => e.isOnCooldown())),
            "If slots are provided, they must not be on cooldown",
        );
    let C = [
            null == t ? "UNUSED_QUANTITY_SELECT" : null,
            null == n ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
        ].filter((e) => null != e),
        [N, R] = (0, l.Wu)([d.Z], () => [d.Z.isModifyingAppliedBoost, d.Z.applyBoostError]),
        [P, D] = i.useState(C[0]),
        [w, x] = i.useState(!1),
        [L, M] = i.useState(n),
        [j, k] = i.useState(null != t ? t : A.slice(0, 1)),
        U = i.useMemo(
            () =>
                null == j
                    ? []
                    : j
                          .map((e) => {
                              let { premiumGuildSubscription: t } = e;
                              return f.Z.getGuild(null == t ? void 0 : t.guildId);
                          })
                          .filter((e) => null != e),
            [j],
        ),
        G = i.useMemo(() => {
            var e;
            return (null == j || null == (e = j[0]) ? void 0 : e.premiumGuildSubscription) != null;
        }, [j]),
        B = () => (
            S("SUCCESS" === P),
            p.default.track(y.rMx.MODAL_DISMISSED, {
                type: y.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                location_section: a,
            }),
            Promise.resolve()
        ),
        Z = {
            UNUSED_QUANTITY_SELECT: () => (
                o()(null != t || 0 !== A.length, "Cannot provide no slots if there are no other available slots"),
                (0, r.jsx)(s.Modal, {
                    transitionState: T,
                    onClose: B,
                    size: "md",
                    title: O.intl.string(O.t["9FFrrT"]),
                    actions: [
                        {
                            variant: "secondary",
                            text: O.intl.string(O.t["1BPTsK"]),
                            onClick: B,
                        },
                        {
                            variant: "primary",
                            text: O.intl.string(O.t["/uwYda"]),
                            onClick: () => D("CONFIRM"),
                        },
                    ],
                    children: (0, r.jsxs)("div", {
                        className: v.quantitySelectorBody,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: "text-md/normal",
                                className: v.quantitySelectorDescription,
                                children: O.intl.string(O.t.x5qw5U),
                            }),
                            (0, r.jsxs)("div", {
                                className: v.quantitySelectorWrapper,
                                children: [
                                    (0, r.jsx)(c.FiK, {
                                        value: j.length,
                                        onChange: (e) => k(A.slice(0, e)),
                                        minValue: 1,
                                        maxValue: A.length,
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        className: v.quantitySelectorLabel,
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
                    onClose: B,
                    onSelectGuild: (e) => {
                        M(e), D("CONFIRM");
                    },
                    transitionState: T,
                    isTransfer: G,
                    selectedSlotGuilds: U,
                }),
            CONFIRM() {
                if (null == L) return null;
                let e = j.filter((e) => (0, h.tl)(e)).length,
                    t = j.length,
                    n = U.length,
                    i = "CONFIRM" === C[0] ? B : () => D(C[C.indexOf(P) - 1]),
                    a = async () => {
                        if ((x(!1), null != L && (null == j ? void 0 : j.length) !== 0)) {
                            o()(
                                !j.some((e) => e.isOnCooldown()),
                                "Cannot use a premium guild subscription slot while on cooldown",
                            );
                            try {
                                await Promise.all(
                                    j.map((e) => {
                                        let { premiumGuildSubscription: t } = e;
                                        return null != t ? (0, u.dG)(t.guildId, t.id) : Promise.resolve();
                                    }),
                                ),
                                    await (0, u.W3)(
                                        L.id,
                                        j.map((e) => {
                                            let { id: t } = e;
                                            return t;
                                        }),
                                        I === E.P.PERK,
                                    ),
                                    D("SUCCESS");
                            } catch (e) {
                                x(!0);
                            }
                        }
                    },
                    l = G ? O.intl.string(O.t["PR0n//"]) : O.intl.string(O.t["7KP/fI"]);
                return (0, r.jsx)(s.Modal, {
                    transitionState: T,
                    onClose: B,
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
                                ? O.intl.formatToPlainString(O.t.Oh6mxU, { slotCount: t })
                                : O.intl.formatToPlainString(O.t.ZU5x5w, { slotCount: t }),
                            onClick: a,
                            loading: N,
                            disabled: N,
                        },
                    ],
                    children: G
                        ? (0, r.jsx)(m.Z.TransferBody, {
                              fromGuilds: U,
                              toGuild: L,
                              blurb: O.intl.formatToPlainString(O.t.SSA2lu, {
                                  slotCount: t,
                                  guildCount: n,
                              }),
                              imageClass: v.transferConfirmImage,
                              error: w ? R : null,
                              slotCount: t,
                              canceledCount: e,
                          })
                        : (0, r.jsx)(m.Z.ApplyBody, {
                              guild: L,
                              blurb: O.intl.string(O.t.yTlZV0),
                              warning: O.intl.formatToPlainString(O.t.KPnDlu, {
                                  days: y.o3l,
                                  slotCount: t,
                              }),
                              imageClass: v.confirmImage,
                              error: w ? R : null,
                              slotCount: t,
                              canceledCount: e,
                          }),
                });
            },
            SUCCESS() {
                let e = G ? O.intl.string(O.t["PR0n//"]) : O.intl.string(O.t["7KP/fI"]);
                return (0, r.jsx)(s.Modal, {
                    transitionState: T,
                    onClose: B,
                    size: "md",
                    title: e,
                    actions: [],
                    children: (0, r.jsx)(b.R7, {
                        guild: L,
                        isTransfer: G,
                        guildBoostQuantity: j.length,
                        onClose: B,
                        didPurchaseOnFractionalPremium: !1,
                    }),
                });
            },
        };
    i.useEffect(() => {
        p.default.track(y.rMx.OPEN_MODAL, {
            type: y.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
            location_section: a,
        });
    }, [a]);
    let F = Z[P];
    return null == F ? null : F();
};

n.d(t, { default: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(179360),
    d = n(899667),
    f = n(430824),
    p = n(314884),
    _ = n(626135),
    m = n(267642),
    h = n(395199),
    g = n(719228),
    E = n(343649),
    b = n(4434),
    y = n(981631),
    O = n(388032),
    v = n(252633);
let S = (e) => {
    let { guildBoostSlots: t, selectedGuild: n, locationSection: a, intent: S, transitionState: I, onClose: T } = e,
        A = (0, m.vx)(p.Z.boostSlots);
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
        [N, P] = (0, l.Wu)([d.Z], () => [d.Z.isModifyingAppliedBoost, d.Z.applyBoostError]),
        [R, w] = i.useState(C[0]),
        [D, x] = i.useState(!1),
        [L, j] = i.useState(n),
        [M, k] = i.useState(null != t ? t : A.slice(0, 1)),
        U = i.useMemo(
            () =>
                null == M
                    ? []
                    : M.map((e) => {
                          let { premiumGuildSubscription: t } = e;
                          return f.Z.getGuild(null == t ? void 0 : t.guildId);
                      }).filter((e) => null != e),
            [M],
        ),
        G = i.useMemo(() => {
            var e;
            return (null == M || null == (e = M[0]) ? void 0 : e.premiumGuildSubscription) != null;
        }, [M]),
        Z = () => (
            T("SUCCESS" === R),
            _.default.track(y.rMx.MODAL_DISMISSED, {
                type: y.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                location_section: a,
            }),
            Promise.resolve()
        ),
        B = {
            UNUSED_QUANTITY_SELECT: () => (
                o()(null != t || 0 !== A.length, "Cannot provide no slots if there are no other available slots"),
                (0, r.jsx)(s.Modal, {
                    transitionState: I,
                    onClose: Z,
                    size: "md",
                    title: O.intl.string(O.t["9FFrrT"]),
                    actions: [
                        {
                            variant: "secondary",
                            text: O.intl.string(O.t["1BPTsK"]),
                            onClick: Z,
                        },
                        {
                            variant: "primary",
                            text: O.intl.string(O.t["/uwYda"]),
                            onClick: () => w("CONFIRM"),
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
                                        value: M.length,
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
                    onClose: Z,
                    onSelectGuild: (e) => {
                        j(e), w("CONFIRM");
                    },
                    transitionState: I,
                    isTransfer: G,
                    selectedSlotGuilds: U,
                }),
            CONFIRM() {
                if (null == L) return null;
                let e = M.filter((e) => (0, m.tl)(e)).length,
                    t = M.length,
                    n = U.length,
                    i = "CONFIRM" === C[0] ? Z : () => w(C[C.indexOf(R) - 1]),
                    a = async () => {
                        if ((x(!1), null != L && (null == M ? void 0 : M.length) !== 0)) {
                            o()(
                                !M.some((e) => e.isOnCooldown()),
                                "Cannot use a premium guild subscription slot while on cooldown",
                            );
                            try {
                                await Promise.all(
                                    M.map((e) => {
                                        let { premiumGuildSubscription: t } = e;
                                        return null != t ? (0, u.dG)(t.guildId, t.id) : Promise.resolve();
                                    }),
                                ),
                                    await (0, u.W3)(
                                        L.id,
                                        M.map((e) => {
                                            let { id: t } = e;
                                            return t;
                                        }),
                                        S === E.P.PERK,
                                    ),
                                    w("SUCCESS");
                            } catch (e) {
                                x(!0);
                            }
                        }
                    },
                    l = G ? O.intl.string(O.t["PR0n//"]) : O.intl.string(O.t["7KP/fI"]);
                return (0, r.jsx)(s.Modal, {
                    transitionState: I,
                    onClose: Z,
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
                        ? (0, r.jsx)(h.Z.TransferBody, {
                              fromGuilds: U,
                              toGuild: L,
                              blurb: O.intl.formatToPlainString(O.t.SSA2lu, {
                                  slotCount: t,
                                  guildCount: n,
                              }),
                              imageClass: v.transferConfirmImage,
                              error: D ? P : null,
                              slotCount: t,
                              canceledCount: e,
                          })
                        : (0, r.jsx)(h.Z.ApplyBody, {
                              guild: L,
                              blurb: O.intl.string(O.t.yTlZV0),
                              warning: O.intl.formatToPlainString(O.t.KPnDlu, {
                                  days: y.o3l,
                                  slotCount: t,
                              }),
                              imageClass: v.confirmImage,
                              error: D ? P : null,
                              slotCount: t,
                              canceledCount: e,
                          }),
                });
            },
            SUCCESS() {
                let e = G ? O.intl.string(O.t["PR0n//"]) : O.intl.string(O.t["7KP/fI"]);
                return (0, r.jsx)(s.Modal, {
                    transitionState: I,
                    onClose: Z,
                    size: "md",
                    title: e,
                    actions: [],
                    children: (0, r.jsx)(b.R7, {
                        guild: L,
                        isTransfer: G,
                        guildBoostQuantity: M.length,
                        onClose: Z,
                        didPurchaseOnFractionalPremium: !1,
                    }),
                });
            },
        };
    i.useEffect(() => {
        _.default.track(y.rMx.OPEN_MODAL, {
            type: y.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
            location_section: a,
        });
    }, [a]);
    let F = B[R];
    return null == F ? null : F();
};

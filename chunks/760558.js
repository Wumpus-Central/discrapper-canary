l.d(t, { default: () => y }), l(388685);
var n = l(951288),
    r = l(647438),
    i = l(512722),
    s = l.n(i),
    a = l(442837),
    o = l(82659),
    c = l(481060),
    d = l(179360),
    u = l(899667),
    m = l(430824),
    x = l(314884),
    g = l(626135),
    h = l(267642),
    f = l(395199),
    C = l(719228),
    j = l(4434),
    p = l(981631),
    v = l(388032),
    S = l(252633);
let y = (e) => {
    let { guildBoostSlots: t, selectedGuild: l, locationSection: i, transitionState: y, onClose: b } = e,
        E = (0, h.vx)(x.Z.boostSlots);
    s()(null != t || null != l, "Must either provide slots or an initial selected guild"),
        s()(
            !(null == t ? void 0 : t.some((e) => e.isOnCooldown())),
            "If slots are provided, they must not be on cooldown",
        );
    let O = [
            null == t ? "UNUSED_QUANTITY_SELECT" : null,
            null == l ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
        ].filter((e) => null != e),
        [N, P] = (0, a.Wu)([u.Z], () => [u.Z.isModifyingAppliedBoost, u.Z.applyBoostError]),
        [T, w] = r.useState(O[0]),
        [Z, G] = r.useState(!1),
        [I, L] = r.useState(l),
        [D, M] = r.useState(null != t ? t : E.slice(0, 1)),
        U = r.useMemo(
            () =>
                null == D
                    ? []
                    : D.map((e) => {
                          let { premiumGuildSubscription: t } = e;
                          return m.Z.getGuild(null == t ? void 0 : t.guildId);
                      }).filter((e) => null != e),
            [D],
        ),
        k = r.useMemo(() => {
            var e;
            return (null == D || null == (e = D[0]) ? void 0 : e.premiumGuildSubscription) != null;
        }, [D]),
        F = () => (
            b("SUCCESS" === T),
            g.default.track(p.rMx.MODAL_DISMISSED, {
                type: p.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                location_section: i,
            }),
            Promise.resolve()
        );
    r.useEffect(() => {
        g.default.track(p.rMx.OPEN_MODAL, {
            type: p.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
            location_section: i,
        });
    }, [i]);
    let R = {
        UNUSED_QUANTITY_SELECT: () => (
            s()(null != t || 0 !== E.length, "Cannot provide no slots if there are no other available slots"),
            (0, n.jsx)(o.Modal, {
                transitionState: y,
                onClose: F,
                size: "md",
                title: v.intl.string(v.t["9FFrra"]),
                actions: [
                    {
                        variant: "secondary",
                        text: v.intl.string(v.t["1BPTsL"]),
                        onClick: F,
                    },
                    {
                        variant: "primary",
                        text: v.intl.string(v.t["/uwYdX"]),
                        onClick: () => w("CONFIRM"),
                    },
                ],
                children: (0, n.jsxs)("div", {
                    className: S.quantitySelectorBody,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: "text-md/normal",
                            className: S.quantitySelectorDescription,
                            children: v.intl.string(v.t.x5qw5e),
                        }),
                        (0, n.jsxs)("div", {
                            className: S.quantitySelectorWrapper,
                            children: [
                                (0, n.jsx)(c.FiK, {
                                    value: D.length,
                                    onChange: (e) => M(E.slice(0, e)),
                                    minValue: 1,
                                    maxValue: E.length,
                                }),
                                (0, n.jsx)(c.Text, {
                                    className: S.quantitySelectorLabel,
                                    variant: "text-md/normal",
                                    children: v.intl.string(v.t.Vl8TCw),
                                }),
                            ],
                        }),
                    ],
                }),
            })
        ),
        GUILD_SELECT: () =>
            (0, n.jsx)(C.default, {
                onClose: F,
                onSelectGuild: (e) => {
                    L(e), w("CONFIRM");
                },
                transitionState: y,
                isTransfer: k,
                selectedSlotGuilds: U,
            }),
        CONFIRM() {
            if (null == I) return null;
            let e = D.filter((e) => (0, h.tl)(e)).length,
                t = D.length,
                l = U.length,
                r = "CONFIRM" === O[0] ? F : () => w(O[O.indexOf(T) - 1]),
                i = async () => {
                    if (null != I && (null == D ? void 0 : D.length) !== 0) {
                        s()(
                            !D.some((e) => e.isOnCooldown()),
                            "Cannot use a premium guild subscription slot while on cooldown",
                        );
                        try {
                            await Promise.all(
                                D.map((e) => {
                                    let { premiumGuildSubscription: t } = e;
                                    return null != t ? (0, d.dG)(t.guildId, t.id) : Promise.resolve();
                                }),
                            ),
                                await (0, d.W3)(
                                    I.id,
                                    D.map((e) => {
                                        let { id: t } = e;
                                        return t;
                                    }),
                                ),
                                w("SUCCESS");
                        } catch (e) {
                            G(!0);
                        }
                    }
                },
                a = k ? v.intl.string(v.t["PR0n//"]) : v.intl.string(v.t["7KP/fH"]);
            return (0, n.jsx)(o.Modal, {
                transitionState: y,
                onClose: F,
                size: "md",
                title: a,
                actions: [
                    {
                        variant: "secondary",
                        text: v.intl.string(v.t["ETE/oK"]),
                        onClick: r,
                    },
                    {
                        variant: "primary",
                        text: k
                            ? v.intl.formatToPlainString(v.t.Oh6mxc, { slotCount: t })
                            : v.intl.formatToPlainString(v.t["ZU5x5+"], { slotCount: t }),
                        onClick: i,
                        loading: N,
                        disabled: N,
                    },
                ],
                children: k
                    ? (0, n.jsx)(f.Z.TransferBody, {
                          fromGuilds: U,
                          toGuild: I,
                          blurb: v.intl.formatToPlainString(v.t.SSA2lp, {
                              slotCount: t,
                              guildCount: l,
                          }),
                          imageClass: S.transferConfirmImage,
                          error: Z ? P : null,
                          onDismissError: () => G(!1),
                          slotCount: t,
                          canceledCount: e,
                      })
                    : (0, n.jsx)(f.Z.ApplyBody, {
                          guild: I,
                          blurb: v.intl.string(v.t.yTlZV1),
                          warning: v.intl.formatToPlainString(v.t.KPnDlp, {
                              days: p.o3l,
                              slotCount: t,
                          }),
                          imageClass: S.confirmImage,
                          error: Z ? P : null,
                          onDismissError: () => G(!1),
                          slotCount: t,
                          canceledCount: e,
                      }),
            });
        },
        SUCCESS() {
            let e = k ? v.intl.string(v.t["PR0n//"]) : v.intl.string(v.t["7KP/fH"]);
            return (0, n.jsx)(o.Modal, {
                transitionState: y,
                onClose: F,
                size: "md",
                title: e,
                actions: [],
                children: (0, n.jsx)(j.R7, {
                    guild: I,
                    isTransfer: k,
                    guildBoostQuantity: D.length,
                    onClose: F,
                    didPurchaseOnFractionalPremium: !1,
                }),
            });
        },
    }[T];
    return null == R ? null : R();
};

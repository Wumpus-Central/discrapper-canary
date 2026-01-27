l.d(t, {
    default: () => S,
}),
    l(896048);
var n = l(627968),
    r = l(64700),
    i = l(284009),
    s = l.n(i),
    a = l(158954),
    o = l(311907),
    u = l(397927),
    c = l(923408),
    d = l(859241),
    m = l(71393),
    x = l(178368),
    g = l(954571),
    h = l(473145),
    j = l(976200),
    p = l(770101),
    C = l(879100),
    f = l(652215),
    v = l(568065),
    y = l(985018),
    b = l(449838);
let S = (e) => {
    let { guildBoostSlots: t, selectedGuild: l, locationSection: i, intent: S, transitionState: O, onClose: w } = e,
        A = (0, h.D$)(x.A.boostSlots);
    s()(null != t || null != l, "Must either provide slots or an initial selected guild"),
        s()(
            !(null == t ? void 0 : t.some((e) => e.isOnCooldown())),
            "If slots are provided, they must not be on cooldown",
        );
    let N = [
            null == t ? "UNUSED_QUANTITY_SELECT" : null,
            null == l ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
        ].filter((e) => null != e),
        [T, E] = (0, o.yK)([d.A], () => [d.A.isModifyingAppliedBoost, d.A.applyBoostError]),
        [P, I] = r.useState(N[0]),
        [L, U] = r.useState(!1),
        [D, G] = r.useState(l),
        [M, _] = r.useState(null != t ? t : A.slice(0, 1)),
        k = r.useMemo(
            () =>
                null == M
                    ? []
                    : M.map((e) => {
                          let { premiumGuildSubscription: t } = e;
                          return m.A.getGuild(null == t ? void 0 : t.guildId);
                      }).filter((e) => null != e),
            [M],
        ),
        R = r.useMemo(() => {
            var e;
            return (null == M || null == (e = M[0]) ? void 0 : e.premiumGuildSubscription) != null;
        }, [M]),
        B = () => (
            w("SUCCESS" === P),
            g.default.track(f.HAw.MODAL_DISMISSED, {
                type: f.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                location_section: i,
            }),
            Promise.resolve()
        );
    r.useEffect(() => {
        g.default.track(f.HAw.OPEN_MODAL, {
            type: f.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL,
            location_section: i,
        });
    }, [i]);
    let F = {
        UNUSED_QUANTITY_SELECT: () => (
            s()(null != t || 0 !== A.length, "Cannot provide no slots if there are no other available slots"),
            (0, n.jsx)(a.Modal, {
                transitionState: O,
                onClose: B,
                size: "md",
                title: y.intl.string(y.t["9FFrrT"]),
                actions: [
                    {
                        variant: "secondary",
                        text: y.intl.string(y.t["1BPTsK"]),
                        onClick: B,
                    },
                    {
                        variant: "primary",
                        text: y.intl.string(y.t["/uwYda"]),
                        onClick: () => I("CONFIRM"),
                    },
                ],
                children: (0, n.jsxs)("div", {
                    className: b.pS,
                    children: [
                        (0, n.jsx)(u.Text, {
                            variant: "text-md/normal",
                            className: b.TH,
                            children: y.intl.string(y.t.x5qw5U),
                        }),
                        (0, n.jsxs)("div", {
                            className: b.g9,
                            children: [
                                (0, n.jsx)(u.lw3, {
                                    value: M.length,
                                    onChange: (e) => _(A.slice(0, e)),
                                    minValue: 1,
                                    maxValue: A.length,
                                }),
                                (0, n.jsx)(u.Text, {
                                    className: b.v$,
                                    variant: "text-md/normal",
                                    children: y.intl.string(y.t["Vl8TC+"]),
                                }),
                            ],
                        }),
                    ],
                }),
            })
        ),
        GUILD_SELECT: () =>
            (0, n.jsx)(p.default, {
                onClose: B,
                onSelectGuild: (e) => {
                    G(e), I("CONFIRM");
                },
                transitionState: O,
                isTransfer: R,
                selectedSlotGuilds: k,
            }),
        CONFIRM() {
            if (null == D) return null;
            let e = M.filter((e) => (0, h.I5)(e)).length,
                t = M.length,
                l = k.length,
                r = "CONFIRM" === N[0] ? B : () => I(N[N.indexOf(P) - 1]),
                i = async () => {
                    if ((U(!1), null != D && (null == M ? void 0 : M.length) !== 0)) {
                        s()(
                            !M.some((e) => e.isOnCooldown()),
                            "Cannot use a premium guild subscription slot while on cooldown",
                        );
                        try {
                            await Promise.all(
                                M.map((e) => {
                                    let { premiumGuildSubscription: t } = e;
                                    return null != t ? (0, c.jZ)(t.guildId, t.id) : Promise.resolve();
                                }),
                            ),
                                await (0, c.VA)(
                                    D.id,
                                    M.map((e) => {
                                        let { id: t } = e;
                                        return t;
                                    }),
                                    S === v.Pn.PERK,
                                ),
                                I("SUCCESS");
                        } catch (e) {
                            U(!0);
                        }
                    }
                },
                o = R ? y.intl.string(y.t["PR0n//"]) : y.intl.string(y.t["7KP/fI"]);
            return (0, n.jsx)(a.Modal, {
                transitionState: O,
                onClose: B,
                size: "md",
                title: o,
                actions: [
                    {
                        variant: "secondary",
                        text: y.intl.string(y.t["ETE/oC"]),
                        onClick: r,
                    },
                    {
                        variant: "primary",
                        text: R
                            ? y.intl.formatToPlainString(y.t.Oh6mxU, {
                                  slotCount: t,
                              })
                            : y.intl.formatToPlainString(y.t.ZU5x5w, {
                                  slotCount: t,
                              }),
                        onClick: i,
                        loading: T,
                        disabled: T,
                    },
                ],
                children: R
                    ? (0, n.jsx)(j.A.TransferBody, {
                          fromGuilds: k,
                          toGuild: D,
                          blurb: y.intl.formatToPlainString(y.t.SSA2lu, {
                              slotCount: t,
                              guildCount: l,
                          }),
                          imageClass: b.LA,
                          error: L ? E : null,
                          slotCount: t,
                          canceledCount: e,
                      })
                    : (0, n.jsx)(j.A.ApplyBody, {
                          guild: D,
                          blurb: y.intl.string(y.t.yTlZV0),
                          warning: y.intl.formatToPlainString(y.t.KPnDlu, {
                              days: f.FI6,
                              slotCount: t,
                          }),
                          imageClass: b.MP,
                          error: L ? E : null,
                          slotCount: t,
                          canceledCount: e,
                      }),
            });
        },
        SUCCESS() {
            let e = R ? y.intl.string(y.t["PR0n//"]) : y.intl.string(y.t["7KP/fI"]);
            return (0, n.jsx)(a.Modal, {
                transitionState: O,
                onClose: B,
                size: "md",
                title: e,
                actions: [],
                children: (0, n.jsx)(C.WE, {
                    guild: D,
                    isTransfer: R,
                    guildBoostQuantity: M.length,
                    onClose: B,
                    didPurchaseOnFractionalPremium: !1,
                }),
            });
        },
    }[P];
    return null == F ? null : F();
};

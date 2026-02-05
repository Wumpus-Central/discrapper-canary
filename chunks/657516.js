l.d(e, { default: () => N });
var n = l(627968),
    i = l(64700),
    s = l(284009),
    r = l.n(s),
    a = l(158954),
    o = l(311907),
    d = l(397927),
    u = l(923408),
    c = l(859241),
    x = l(71393),
    m = l(178368),
    h = l(954571),
    C = l(473145),
    g = l(976200),
    j = l(770101),
    p = l(879100),
    v = l(652215),
    S = l(568065),
    f = l(985018),
    A = l(449838);
let N = (t) => {
    let { guildBoostSlots: e, selectedGuild: l, locationSection: s, intent: N, transitionState: T, onClose: y } = t,
        E = (0, C.D$)(m.A.boostSlots);
    r()(null != e || null != l, "Must either provide slots or an initial selected guild"),
        r()(!e?.some((t) => t.isOnCooldown()), "If slots are provided, they must not be on cooldown");
    let b = [
            null == e ? "UNUSED_QUANTITY_SELECT" : null,
            null == l ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
        ].filter((t) => null != t),
        [w, I] = (0, o.yK)([c.A], () => [c.A.isModifyingAppliedBoost, c.A.applyBoostError]),
        [L, P] = i.useState(b[0]),
        [U, G] = i.useState(!1),
        [M, _] = i.useState(l),
        [D, k] = i.useState(e ?? E.slice(0, 1)),
        B = i.useMemo(
            () =>
                null == D
                    ? []
                    : D.map((t) => {
                          let { premiumGuildSubscription: e } = t;
                          return x.A.getGuild(e?.guildId);
                      }).filter((t) => null != t),
            [D],
        ),
        F = i.useMemo(() => D?.[0]?.premiumGuildSubscription != null, [D]),
        R = () => (
            y("SUCCESS" === L),
            h.default.track(v.HAw.MODAL_DISMISSED, { type: v.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s }),
            Promise.resolve()
        );
    i.useEffect(() => {
        h.default.track(v.HAw.OPEN_MODAL, { type: v.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s });
    }, [s]);
    let O = {
        UNUSED_QUANTITY_SELECT: () => (
            r()(null != e || 0 !== E.length, "Cannot provide no slots if there are no other available slots"),
            (0, n.jsx)(a.Modal, {
                transitionState: T,
                onClose: R,
                size: "md",
                title: f.intl.string(f.t["9FFrrT"]),
                actions: [
                    { variant: "secondary", text: f.intl.string(f.t["1BPTsK"]), onClick: R },
                    { variant: "primary", text: f.intl.string(f.t["/uwYda"]), onClick: () => P("CONFIRM") },
                ],
                children: (0, n.jsxs)("div", {
                    className: A.pS,
                    children: [
                        (0, n.jsx)(d.Text, {
                            variant: "text-md/normal",
                            className: A.TH,
                            children: f.intl.string(f.t.x5qw5U),
                        }),
                        (0, n.jsxs)("div", {
                            className: A.g9,
                            children: [
                                (0, n.jsx)(d.lw3, {
                                    value: D.length,
                                    onChange: (t) => k(E.slice(0, t)),
                                    minValue: 1,
                                    maxValue: E.length,
                                }),
                                (0, n.jsx)(d.Text, {
                                    className: A.v$,
                                    variant: "text-md/normal",
                                    children: f.intl.string(f.t["Vl8TC+"]),
                                }),
                            ],
                        }),
                    ],
                }),
            })
        ),
        GUILD_SELECT: () =>
            (0, n.jsx)(j.default, {
                onClose: R,
                onSelectGuild: (t) => {
                    _(t), P("CONFIRM");
                },
                transitionState: T,
                isTransfer: F,
                selectedSlotGuilds: B,
            }),
        CONFIRM() {
            if (null == M) return null;
            let t = D.filter((t) => (0, C.I5)(t)).length,
                e = D.length,
                l = B.length,
                i = "CONFIRM" === b[0] ? R : () => P(b[b.indexOf(L) - 1]),
                s = async () => {
                    if ((G(!1), null != M && D?.length !== 0)) {
                        r()(
                            !D.some((t) => t.isOnCooldown()),
                            "Cannot use a premium guild subscription slot while on cooldown",
                        );
                        try {
                            await Promise.all(
                                D.map((t) => {
                                    let { premiumGuildSubscription: e } = t;
                                    return null != e ? (0, u.jZ)(e.guildId, e.id) : Promise.resolve();
                                }),
                            ),
                                await (0, u.VA)(
                                    M.id,
                                    D.map((t) => {
                                        let { id: e } = t;
                                        return e;
                                    }),
                                    N === S.Pn.PERK,
                                ),
                                P("SUCCESS");
                        } catch (t) {
                            G(!0);
                        }
                    }
                },
                o = F ? f.intl.string(f.t["PR0n//"]) : f.intl.string(f.t["7KP/fI"]);
            return (0, n.jsx)(a.Modal, {
                transitionState: T,
                onClose: R,
                size: "md",
                title: o,
                actions: [
                    { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: i },
                    {
                        variant: "primary",
                        text: F
                            ? f.intl.formatToPlainString(f.t.Oh6mxU, { slotCount: e })
                            : f.intl.formatToPlainString(f.t.ZU5x5w, { slotCount: e }),
                        onClick: s,
                        loading: w,
                        disabled: w,
                    },
                ],
                children: F
                    ? (0, n.jsx)(g.A.TransferBody, {
                          fromGuilds: B,
                          toGuild: M,
                          blurb: f.intl.formatToPlainString(f.t.SSA2lu, { slotCount: e, guildCount: l }),
                          imageClass: A.LA,
                          error: U ? I : null,
                          slotCount: e,
                          canceledCount: t,
                      })
                    : (0, n.jsx)(g.A.ApplyBody, {
                          guild: M,
                          blurb: f.intl.string(f.t.yTlZV0),
                          warning: f.intl.formatToPlainString(f.t.KPnDlu, { days: v.FI6, slotCount: e }),
                          imageClass: A.MP,
                          error: U ? I : null,
                          slotCount: e,
                          canceledCount: t,
                      }),
            });
        },
        SUCCESS() {
            let t = F ? f.intl.string(f.t["PR0n//"]) : f.intl.string(f.t["7KP/fI"]);
            return (0, n.jsx)(a.Modal, {
                transitionState: T,
                onClose: R,
                size: "md",
                title: t,
                actions: [],
                children: (0, n.jsx)(p.WE, {
                    guild: M,
                    isTransfer: F,
                    guildBoostQuantity: D.length,
                    onClose: R,
                    didPurchaseOnFractionalPremium: !1,
                }),
            });
        },
    }[L];
    return null == O ? null : O();
};

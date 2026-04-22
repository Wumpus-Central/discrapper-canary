l.d(e, { default: () => M });
var n = l(627968),
    i = l(64700),
    s = l(284009),
    r = l.n(s),
    a = l(189213),
    o = l(311907),
    d = l(834730),
    c = l(663803),
    u = l(923408),
    m = l(43594),
    x = l(859241),
    h = l(71393),
    g = l(178368),
    C = l(954571),
    j = l(473145),
    v = l(976200),
    f = l(770101),
    p = l(879100),
    S = l(87533),
    A = l(636441),
    y = l(875022),
    N = l(592918),
    E = l(458663),
    b = l(652215),
    P = l(568065),
    T = l(985018),
    w = l(700971);
let M = (t) => {
    let { guildBoostSlots: e, selectedGuild: l, locationSection: s, intent: M, transitionState: G, onClose: I } = t,
        k = (0, m.D)("ApplyGuildBoostModal"),
        L = (0, j.D$)(g.A.boostSlots);
    r()(null != e || null != l, "Must either provide slots or an initial selected guild"),
        r()(!e?.some((t) => t.isOnCooldown()), "If slots are provided, they must not be on cooldown");
    let U = [
            null == e ? "UNUSED_QUANTITY_SELECT" : null,
            null == l ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
        ].filter((t) => null != t),
        [_, D] = (0, o.yK)([x.A], () => [x.A.isModifyingAppliedBoost, x.A.applyBoostError]),
        [R, B] = i.useState(U[0]),
        [F, z] = i.useState(!1),
        [O, V] = i.useState(l),
        [K, Z] = i.useState(e ?? L.slice(0, 1)),
        Q = i.useMemo(
            () =>
                null == K
                    ? []
                    : K.map((t) => {
                          let { premiumGuildSubscription: e } = t;
                          return h.A.getGuild(e?.guildId);
                      }).filter((t) => null != t),
            [K],
        ),
        q = i.useMemo(() => K?.[0]?.premiumGuildSubscription != null, [K]),
        H = "control" !== k && ("CONFIRM" === R || "SUCCESS" === R),
        $ = (0, E.A)(H),
        Y = () => (
            I("SUCCESS" === R),
            C.default.track(b.HAw.MODAL_DISMISSED, { type: b.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s }),
            Promise.resolve()
        );
    i.useEffect(() => {
        C.default.track(b.HAw.OPEN_MODAL, { type: b.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL, location_section: s });
    }, [s]);
    let J = {
        UNUSED_QUANTITY_SELECT: () => (
            r()(null != e || 0 !== L.length, "Cannot provide no slots if there are no other available slots"),
            (0, n.jsx)(a.Modal, {
                transitionState: G,
                onClose: Y,
                size: "md",
                title: T.intl.string(T.t["9FFrrT"]),
                actions: [
                    { variant: "secondary", text: T.intl.string(T.t["1BPTsK"]), onClick: Y },
                    { variant: "primary", text: T.intl.string(T.t["/uwYda"]), onClick: () => B("CONFIRM") },
                ],
                children: (0, n.jsxs)("div", {
                    className: w.pS,
                    children: [
                        (0, n.jsx)(d.E, {
                            variant: "text-md/normal",
                            className: w.TH,
                            children: T.intl.string(T.t.x5qw5U),
                        }),
                        (0, n.jsxs)("div", {
                            className: w.g9,
                            children: [
                                (0, n.jsx)(c.l, {
                                    value: K.length,
                                    onChange: (t) => Z(L.slice(0, t)),
                                    minValue: 1,
                                    maxValue: L.length,
                                }),
                                (0, n.jsx)(d.E, {
                                    className: w.v$,
                                    variant: "text-md/normal",
                                    children: T.intl.string(T.t["Vl8TC+"]),
                                }),
                            ],
                        }),
                    ],
                }),
            })
        ),
        GUILD_SELECT: () =>
            (0, n.jsx)(f.default, {
                onClose: Y,
                onSelectGuild: (t) => {
                    V(t), B("CONFIRM");
                },
                transitionState: G,
                isTransfer: q,
                selectedSlotGuilds: Q,
            }),
        CONFIRM() {
            if (null == O) return null;
            let t = K.filter((t) => (0, j.I5)(t)).length,
                e = K.length,
                l = Q.length,
                i = "CONFIRM" === U[0] ? Y : () => B(U[U.indexOf(R) - 1]),
                s = async () => {
                    if ((z(!1), null != O && K?.length !== 0)) {
                        r()(
                            !K.some((t) => t.isOnCooldown()),
                            "Cannot use a premium guild subscription slot while on cooldown",
                        );
                        try {
                            await Promise.all(
                                K.map((t) => {
                                    let { premiumGuildSubscription: e } = t;
                                    return null != e ? (0, u.jZ)(e.guildId, e.id) : Promise.resolve();
                                }),
                            ),
                                await (0, u.VA)(
                                    O.id,
                                    K.map((t) => {
                                        let { id: e } = t;
                                        return e;
                                    }),
                                    M === P.Pn.PERK,
                                ),
                                B("SUCCESS");
                        } catch (t) {
                            z(!0);
                        }
                    }
                },
                o = q ? T.intl.string(T.t["PR0n//"]) : T.intl.string(T.t["7KP/fI"]);
            return q || "control" === k
                ? q && "control" !== k
                    ? (0, n.jsx)(N.A, {
                          transitionState: G,
                          toGuild: O,
                          fromGuilds: Q,
                          slotCount: e,
                          canceledCount: t,
                          isModifyingSubscription: _,
                          error: F ? D : null,
                          onConfirm: s,
                          onClose: Y,
                      })
                    : (0, n.jsx)(a.Modal, {
                          transitionState: G,
                          onClose: Y,
                          size: "md",
                          title: o,
                          actions: [
                              { variant: "secondary", text: T.intl.string(T.t["ETE/oC"]), onClick: i },
                              {
                                  variant: "primary",
                                  text: q
                                      ? T.intl.formatToPlainString(T.t.Oh6mxU, { slotCount: e })
                                      : T.intl.formatToPlainString(T.t.ZU5x5w, { slotCount: e }),
                                  onClick: s,
                                  loading: _,
                                  disabled: _,
                              },
                          ],
                          children: q
                              ? (0, n.jsx)(v.A.TransferBody, {
                                    fromGuilds: Q,
                                    toGuild: O,
                                    blurb: T.intl.formatToPlainString(T.t.SSA2lu, { slotCount: e, guildCount: l }),
                                    imageClass: w.LA,
                                    error: F ? D : null,
                                    slotCount: e,
                                    canceledCount: t,
                                })
                              : (0, n.jsx)(v.A.ApplyBody, {
                                    guild: O,
                                    blurb: T.intl.string(T.t.yTlZV0),
                                    warning: T.intl.formatToPlainString(T.t.KPnDlu, { days: b.FI6, slotCount: e }),
                                    imageClass: w.MP,
                                    error: F ? D : null,
                                    slotCount: e,
                                    canceledCount: t,
                                }),
                      })
                : (0, n.jsx)(S.A, {
                      transitionState: G,
                      guild: O,
                      slotCount: e,
                      canceledCount: t,
                      isModifyingSubscription: _,
                      error: F ? D : null,
                      expressiveCta: "refresh_expressive_cta" === k,
                      onConfirm: s,
                      onClose: Y,
                  });
        },
        SUCCESS() {
            if ("control" !== k)
                return (0, n.jsx)(y.A, {
                    mediaUrls: $.mediaUrls,
                    isSuccess: $.isSuccess,
                    transitionState: G,
                    onClose: Y,
                    children: (t, e) =>
                        (0, n.jsx)(A.A, {
                            transitionState: G,
                            guild: O,
                            guildBoostQuantity: K.length,
                            isTransfer: q,
                            graphic: t,
                            onClose: e,
                        }),
                });
            let t = q ? T.intl.string(T.t["PR0n//"]) : T.intl.string(T.t["7KP/fI"]);
            return (0, n.jsx)(a.Modal, {
                transitionState: G,
                onClose: Y,
                size: "md",
                title: t,
                actions: [],
                children: (0, n.jsx)(p.W, {
                    guild: O,
                    isTransfer: q,
                    guildBoostQuantity: K.length,
                    onClose: Y,
                    didPurchaseOnFractionalPremium: !1,
                }),
            });
        },
    }[R];
    return null == J ? null : J();
};

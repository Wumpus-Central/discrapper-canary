n.d(t, { default: () => y }), n(388685);
var l = n(951288),
    r = n(647438),
    i = n(512722),
    s = n.n(i),
    a = n(442837),
    o = n(481060),
    d = n(179360),
    c = n(899667),
    u = n(430824),
    m = n(314884),
    x = n(626135),
    h = n(267642),
    p = n(395199),
    g = n(719228),
    j = n(4434),
    f = n(981631),
    C = n(388032),
    v = n(252633);
let y = (e) => {
    var t, n;
    let { guildBoostSlots: i, selectedGuild: y, locationSection: b, transitionState: S, onClose: N } = e,
        O = (0, h.vx)(m.Z.boostSlots);
    s()(null != i || null != y, "Must either provide slots or an initial selected guild"),
        s()(
            !(null == i ? void 0 : i.some((e) => e.isOnCooldown())),
            "If slots are provided, they must not be on cooldown",
        );
    let E = [
            null == i ? "UNUSED_QUANTITY_SELECT" : null,
            null == y ? "GUILD_SELECT" : null,
            "CONFIRM",
            "SUCCESS",
        ].filter((e) => null != e),
        [P, T] = (0, a.Wu)([c.Z], () => [c.Z.isModifyingAppliedBoost, c.Z.applyBoostError]),
        [Z, w] = r.useState(""),
        [L, G] = r.useState(E[0]),
        [I, M] = r.useState(!1),
        [D, k] = r.useState(y),
        [U, B] = r.useState(null != i ? i : O.slice(0, 1)),
        F = r.useMemo(
            () =>
                null == U
                    ? []
                    : U.map((e) => {
                          let { premiumGuildSubscription: t } = e;
                          return u.Z.getGuild(null == t ? void 0 : t.guildId);
                      }).filter((e) => null != e),
            [U],
        ),
        z = r.useMemo(() => {
            var e;
            return (null == U || null == (e = U[0]) ? void 0 : e.premiumGuildSubscription) != null;
        }, [U]),
        R = () => {
            N("SUCCESS" === L),
                x.default.track(f.rMx.MODAL_DISMISSED, {
                    type: f.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                    location_section: b,
                });
        },
        _ = {
            UNUSED_QUANTITY_SELECT: {
                body: () => (
                    s()(null != i || 0 !== O.length, "Cannot provide no slots if there are no other available slots"),
                    (0, l.jsxs)("div", {
                        className: v.quantitySelectorBody,
                        children: [
                            (0, l.jsx)(o.X6q, {
                                variant: "heading-md/semibold",
                                className: v.quantitySelectorHeader,
                                children: C.intl.string(C.t["9FFrra"]),
                            }),
                            (0, l.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: v.quantitySelectorDescription,
                                children: C.intl.string(C.t.x5qw5e),
                            }),
                            (0, l.jsxs)("div", {
                                className: v.quantitySelectorWrapper,
                                children: [
                                    (0, l.jsx)(o.FiK, {
                                        value: U.length,
                                        onChange: (e) => B(O.slice(0, e)),
                                        minValue: 1,
                                        maxValue: O.length,
                                    }),
                                    (0, l.jsx)(o.Text, {
                                        className: v.quantitySelectorLabel,
                                        variant: "text-md/normal",
                                        children: C.intl.string(C.t.Vl8TCw),
                                    }),
                                ],
                            }),
                        ],
                    })
                ),
                footer: () =>
                    (0, l.jsx)(o.mzw, {
                        children: (0, l.jsxs)(o.hE2, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, l.jsx)(o.zxk, {
                                    variant: "primary",
                                    text: C.intl.string(C.t["/uwYdX"]),
                                    onClick: () => G("CONFIRM"),
                                }),
                                (0, l.jsx)(o.zxk, {
                                    variant: "secondary",
                                    text: C.intl.string(C.t["1BPTsL"]),
                                    onClick: R,
                                }),
                            ],
                        }),
                    }),
            },
            GUILD_SELECT: {
                header: () =>
                    (0, l.jsx)(g.g, {
                        isTransfer: z,
                        query: Z,
                        setQuery: w,
                    }),
                bodyClass: v.selectContent,
                body: () =>
                    (0, l.jsx)(g.e, {
                        onClose: R,
                        onSelectGuild: (e) => {
                            k(e), G("CONFIRM");
                        },
                        isTransfer: z,
                        selectedSlotGuilds: F,
                        query: Z,
                    }),
            },
            CONFIRM: {
                body() {
                    if (null == D) return null;
                    let e = U.filter((e) => (0, h.tl)(e)).length,
                        t = U.length,
                        n = F.length;
                    return z
                        ? (0, l.jsx)(p.Z.TransferBody, {
                              fromGuilds: F,
                              toGuild: D,
                              blurb: C.intl.formatToPlainString(C.t.SSA2lp, {
                                  slotCount: t,
                                  guildCount: n,
                              }),
                              imageClass: v.transferConfirmImage,
                              error: I ? T : null,
                              onDismissError: () => M(!1),
                              slotCount: t,
                              canceledCount: e,
                          })
                        : (0, l.jsx)(p.Z.ApplyBody, {
                              guild: D,
                              blurb: C.intl.string(C.t.yTlZV1),
                              warning: C.intl.formatToPlainString(C.t.KPnDlp, {
                                  days: f.o3l,
                                  slotCount: t,
                              }),
                              imageClass: v.confirmImage,
                              error: I ? T : null,
                              onDismissError: () => M(!1),
                              slotCount: t,
                              canceledCount: e,
                          });
                },
                footer() {
                    let e = U.length,
                        t = "CONFIRM" === E[0] ? R : () => G(E[E.indexOf(L) - 1]),
                        n = async () => {
                            if (null != D && (null == U ? void 0 : U.length) !== 0) {
                                s()(
                                    !U.some((e) => e.isOnCooldown()),
                                    "Cannot use a premium guild subscription slot while on cooldown",
                                );
                                try {
                                    await Promise.all(
                                        U.map((e) => {
                                            let { premiumGuildSubscription: t } = e;
                                            return null != t ? (0, d.dG)(t.guildId, t.id) : Promise.resolve();
                                        }),
                                    ),
                                        await (0, d.W3)(
                                            D.id,
                                            U.map((e) => {
                                                let { id: t } = e;
                                                return t;
                                            }),
                                        ),
                                        G("SUCCESS");
                                } catch (e) {
                                    M(!0);
                                }
                            }
                        };
                    return (0, l.jsx)(p.Z.Footer, {
                        confirmation: z
                            ? C.intl.formatToPlainString(C.t.Oh6mxc, { slotCount: e })
                            : C.intl.formatToPlainString(C.t["ZU5x5+"], { slotCount: e }),
                        confirmationLabel: z
                            ? C.intl.formatToPlainString(C.t.fnZRmZ, { slotCount: e })
                            : C.intl.formatToPlainString(C.t.d0vwWV, { slotCount: e }),
                        onConfirm: n,
                        onCancel: t,
                        isModifyingSubscription: P,
                    });
                },
            },
            SUCCESS: {
                body: () =>
                    (0, l.jsx)(j.R7, {
                        guild: D,
                        isTransfer: z,
                        guildBoostQuantity: U.length,
                        onClose: R,
                        didPurchaseOnFractionalPremium: !1,
                    }),
            },
        };
    r.useEffect(() => {
        x.default.track(f.rMx.OPEN_MODAL, {
            type: f.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
            location_section: b,
        });
    }, [b]);
    let A = _[L];
    return (0, l.jsxs)(o.Y0X, {
        transitionState: S,
        className: v.modal,
        size: o.CgR.SMALL,
        parentComponent: "ApplyGuildBoostModal",
        children: [
            null == (t = A.header) ? void 0 : t.call(A),
            (0, l.jsx)(o.hzk, {
                className: A.bodyClass,
                children: (0, l.jsx)(o.qBt, {
                    step: L,
                    steps: E,
                    children: A.body(),
                }),
            }),
            null == (n = A.footer) ? void 0 : n.call(A),
            (0, l.jsx)(o.olH, {
                className: v.modalCloseButton,
                onClick: R,
            }),
        ],
    });
};

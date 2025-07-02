(l.d(t, { default: () => b }), l(388685));
var n = l(255367),
    r = l(73800),
    s = l(512722),
    i = l.n(s),
    o = l(442837),
    a = l(481060),
    c = l(179360),
    d = l(899667),
    u = l(430824),
    m = l(314884),
    x = l(626135),
    h = l(267642),
    p = l(395199),
    g = l(719228),
    f = l(4434),
    j = l(981631),
    C = l(388032),
    v = l(671593);
let b = (e) => {
    var t, l;
    let { guildBoostSlots: s, selectedGuild: b, locationSection: y, transitionState: S, onClose: N } = e,
        O = (0, h.vx)(m.Z.boostSlots);
    (i()(null != s || null != b, 'Must either provide slots or an initial selected guild'), i()(!(null == s ? void 0 : s.some((e) => e.isOnCooldown())), 'If slots are provided, they must not be on cooldown'));
    let P = [null == s ? 'UNUSED_QUANTITY_SELECT' : null, null == b ? 'GUILD_SELECT' : null, 'CONFIRM', 'SUCCESS'].filter((e) => null != e),
        [E, T] = (0, o.Wu)([d.Z], () => [d.Z.isModifyingAppliedBoost, d.Z.applyBoostError]),
        [L, Z] = r.useState(''),
        [w, I] = r.useState(P[0]),
        [k, M] = r.useState(!1),
        [G, D] = r.useState(b),
        [U, z] = r.useState(null != s ? s : O.slice(0, 1)),
        B = r.useMemo(
            () =>
                null == U
                    ? []
                    : U.map((e) => {
                          let { premiumGuildSubscription: t } = e;
                          return u.Z.getGuild(null == t ? void 0 : t.guildId);
                      }).filter((e) => null != e),
            [U]
        ),
        R = r.useMemo(() => {
            var e;
            return (null == U || null == (e = U[0]) ? void 0 : e.premiumGuildSubscription) != null;
        }, [U]),
        F = () => {
            (N('SUCCESS' === w),
                x.default.track(j.rMx.MODAL_DISMISSED, {
                    type: j.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                    location_section: y
                }));
        },
        _ = {
            UNUSED_QUANTITY_SELECT: {
                body: () => (
                    i()(null != s || 0 !== O.length, 'Cannot provide no slots if there are no other available slots'),
                    (0, n.jsxs)('div', {
                        className: v.quantitySelectorBody,
                        children: [
                            (0, n.jsx)(a.X6q, {
                                variant: 'heading-md/semibold',
                                className: v.quantitySelectorHeader,
                                children: C.intl.string(C.t['9FFrra'])
                            }),
                            (0, n.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                className: v.quantitySelectorDescription,
                                children: C.intl.string(C.t.x5qw5e)
                            }),
                            (0, n.jsxs)('div', {
                                className: v.quantitySelectorWrapper,
                                children: [
                                    (0, n.jsx)(a.FiK, {
                                        value: U.length,
                                        onChange: (e) => z(O.slice(0, e)),
                                        minValue: 1,
                                        maxValue: O.length
                                    }),
                                    (0, n.jsx)(a.Text, {
                                        className: v.quantitySelectorLabel,
                                        variant: 'text-md/normal',
                                        children: C.intl.string(C.t.Vl8TCw)
                                    })
                                ]
                            })
                        ]
                    })
                ),
                footer: () =>
                    (0, n.jsxs)(a.mzw, {
                        children: [
                            (0, n.jsx)(a.zxk, {
                                onClick: () => I('CONFIRM'),
                                children: C.intl.string(C.t['/uwYdX'])
                            }),
                            (0, n.jsx)(a.zxk, {
                                look: a.zxk.Looks.LINK,
                                color: a.zxk.Colors.PRIMARY,
                                onClick: F,
                                children: C.intl.string(C.t['1BPTsL'])
                            })
                        ]
                    })
            },
            GUILD_SELECT: {
                header: () =>
                    (0, n.jsx)(g.g, {
                        isTransfer: R,
                        query: L,
                        setQuery: Z
                    }),
                bodyClass: v.selectContent,
                body: () =>
                    (0, n.jsx)(g.e, {
                        onClose: F,
                        onSelectGuild: (e) => {
                            (D(e), I('CONFIRM'));
                        },
                        isTransfer: R,
                        selectedSlotGuilds: B,
                        query: L
                    })
            },
            CONFIRM: {
                body() {
                    if (null == G) return null;
                    let e = U.filter((e) => (0, h.tl)(e)).length,
                        t = U.length,
                        l = B.length;
                    return R
                        ? (0, n.jsx)(p.Z.TransferBody, {
                              fromGuilds: B,
                              toGuild: G,
                              blurb: C.intl.formatToPlainString(C.t.SSA2lp, {
                                  slotCount: t,
                                  guildCount: l
                              }),
                              imageClass: v.transferConfirmImage,
                              error: k ? T : null,
                              onDismissError: () => M(!1),
                              slotCount: t,
                              canceledCount: e
                          })
                        : (0, n.jsx)(p.Z.ApplyBody, {
                              guild: G,
                              blurb: C.intl.string(C.t.yTlZV1),
                              warning: C.intl.formatToPlainString(C.t.KPnDlp, {
                                  days: j.o3l,
                                  slotCount: t
                              }),
                              imageClass: v.confirmImage,
                              error: k ? T : null,
                              onDismissError: () => M(!1),
                              slotCount: t,
                              canceledCount: e
                          });
                },
                footer() {
                    let e = U.length,
                        t = 'CONFIRM' === P[0] ? F : () => I(P[P.indexOf(w) - 1]),
                        l = async () => {
                            if (null != G && (null == U ? void 0 : U.length) !== 0) {
                                i()(!U.some((e) => e.isOnCooldown()), 'Cannot use a premium guild subscription slot while on cooldown');
                                try {
                                    (await Promise.all(
                                        U.map((e) => {
                                            let { premiumGuildSubscription: t } = e;
                                            return null != t ? (0, c.dG)(t.guildId, t.id) : Promise.resolve();
                                        })
                                    ),
                                        await (0, c.W3)(
                                            G.id,
                                            U.map((e) => {
                                                let { id: t } = e;
                                                return t;
                                            })
                                        ),
                                        I('SUCCESS'));
                                } catch (e) {
                                    M(!0);
                                }
                            }
                        };
                    return (0, n.jsx)(p.Z.Footer, {
                        confirmation: R ? C.intl.formatToPlainString(C.t.Oh6mxc, { slotCount: e }) : C.intl.formatToPlainString(C.t['ZU5x5+'], { slotCount: e }),
                        confirmationLabel: R ? C.intl.formatToPlainString(C.t.fnZRmZ, { slotCount: e }) : C.intl.formatToPlainString(C.t.d0vwWV, { slotCount: e }),
                        onConfirm: l,
                        onCancel: t,
                        isModifyingSubscription: E
                    });
                }
            },
            SUCCESS: {
                body: () =>
                    (0, n.jsx)(f.R7, {
                        guild: G,
                        isTransfer: R,
                        guildBoostQuantity: U.length,
                        onClose: F,
                        didPurchaseOnFractionalPremium: !1
                    })
            }
        };
    r.useEffect(() => {
        x.default.track(j.rMx.OPEN_MODAL, {
            type: j.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
            location_section: y
        });
    }, [y]);
    let A = _[w];
    return (0, n.jsxs)(a.Y0X, {
        transitionState: S,
        className: v.modal,
        size: a.CgR.SMALL,
        parentComponent: 'ApplyGuildBoostModal',
        children: [
            null == (t = A.header) ? void 0 : t.call(A),
            (0, n.jsx)(a.hzk, {
                className: A.bodyClass,
                children: (0, n.jsx)(a.qBt, {
                    step: w,
                    steps: P,
                    children: A.body()
                })
            }),
            null == (l = A.footer) ? void 0 : l.call(A),
            (0, n.jsx)(a.olH, {
                className: v.modalCloseButton,
                onClick: F
            })
        ]
    });
};

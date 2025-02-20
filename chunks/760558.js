n.d(t, { default: () => b }), n(47120);
var l = n(200651),
    r = n(192379),
    s = n(512722),
    i = n.n(s),
    o = n(442837),
    a = n(481060),
    c = n(179360),
    d = n(899667),
    u = n(430824),
    m = n(314884),
    x = n(626135),
    h = n(267642),
    p = n(395199),
    g = n(719228),
    f = n(4434),
    j = n(981631),
    C = n(388032),
    v = n(218362);
let b = (e) => {
    var t, n;
    let { guildBoostSlots: s, selectedGuild: b, locationSection: N, transitionState: y, onClose: S } = e,
        P = (0, h.vx)(m.Z.boostSlots);
    i()(null != s || null != b, 'Must either provide slots or an initial selected guild'), i()(!(null == s ? void 0 : s.some((e) => e.isOnCooldown())), 'If slots are provided, they must not be on cooldown');
    let O = [null == s ? 'UNUSED_QUANTITY_SELECT' : null, null == b ? 'GUILD_SELECT' : null, 'CONFIRM', 'SUCCESS'].filter((e) => null != e),
        [E, T] = (0, o.Wu)([d.Z], () => [d.Z.isModifyingAppliedBoost, d.Z.applyBoostError]),
        [L, w] = r.useState(''),
        [I, Z] = r.useState(O[0]),
        [k, M] = r.useState(!1),
        [W, G] = r.useState(b),
        [D, U] = r.useState(null != s ? s : P.slice(0, 1)),
        z = r.useMemo(
            () =>
                null == D
                    ? []
                    : D.map((e) => {
                          let { premiumGuildSubscription: t } = e;
                          return u.Z.getGuild(null == t ? void 0 : t.guildId);
                      }).filter((e) => null != e),
            [D]
        ),
        R = r.useMemo(() => {
            var e;
            return (null == D ? void 0 : null === (e = D[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null;
        }, [D]),
        B = () => {
            S('SUCCESS' === I),
                x.default.track(j.rMx.MODAL_DISMISSED, {
                    type: j.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                    location_section: N
                });
        },
        F = {
            UNUSED_QUANTITY_SELECT: {
                body: () => (
                    i()(null != s || 0 !== P.length, 'Cannot provide no slots if there are no other available slots'),
                    (0, l.jsxs)('div', {
                        className: v.quantitySelectorBody,
                        children: [
                            (0, l.jsx)(a.X6q, {
                                variant: 'heading-md/semibold',
                                className: v.quantitySelectorHeader,
                                children: C.NW.string(C.t['9FFrra'])
                            }),
                            (0, l.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                className: v.quantitySelectorDescription,
                                children: C.NW.string(C.t.x5qw5e)
                            }),
                            (0, l.jsxs)('div', {
                                className: v.quantitySelectorWrapper,
                                children: [
                                    (0, l.jsx)(a.FiK, {
                                        value: D.length,
                                        onChange: (e) => U(P.slice(0, e)),
                                        minValue: 1,
                                        maxValue: P.length
                                    }),
                                    (0, l.jsx)(a.Text, {
                                        className: v.quantitySelectorLabel,
                                        variant: 'text-md/normal',
                                        children: C.NW.string(C.t.Vl8TCw)
                                    })
                                ]
                            })
                        ]
                    })
                ),
                footer: () =>
                    (0, l.jsxs)(a.mzw, {
                        children: [
                            (0, l.jsx)(a.zxk, {
                                onClick: () => Z('CONFIRM'),
                                children: C.NW.string(C.t['/uwYdX'])
                            }),
                            (0, l.jsx)(a.zxk, {
                                look: a.zxk.Looks.LINK,
                                color: a.zxk.Colors.PRIMARY,
                                onClick: B,
                                children: C.NW.string(C.t['1BPTsL'])
                            })
                        ]
                    })
            },
            GUILD_SELECT: {
                header: () =>
                    (0, l.jsx)(g.g, {
                        isTransfer: R,
                        query: L,
                        setQuery: w
                    }),
                bodyClass: v.selectContent,
                body: () =>
                    (0, l.jsx)(g.e, {
                        onClose: B,
                        onSelectGuild: (e) => {
                            G(e), Z('CONFIRM');
                        },
                        isTransfer: R,
                        selectedSlotGuilds: z,
                        query: L
                    })
            },
            CONFIRM: {
                body() {
                    if (null == W) return null;
                    let e = D.filter((e) => (0, h.tl)(e)).length,
                        t = D.length,
                        n = z.length;
                    return R
                        ? (0, l.jsx)(p.Z.TransferBody, {
                              fromGuilds: z,
                              toGuild: W,
                              blurb: C.NW.formatToPlainString(C.t.SSA2lp, {
                                  slotCount: t,
                                  guildCount: n
                              }),
                              imageClass: v.transferConfirmImage,
                              error: k ? T : null,
                              onDismissError: () => M(!1),
                              slotCount: t,
                              canceledCount: e
                          })
                        : (0, l.jsx)(p.Z.ApplyBody, {
                              guild: W,
                              blurb: C.NW.string(C.t.yTlZV1),
                              warning: C.NW.formatToPlainString(C.t.KPnDlp, {
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
                    let e = D.length,
                        t = 'CONFIRM' === O[0] ? B : () => Z(O[O.indexOf(I) - 1]),
                        n = async () => {
                            if (null != W && (null == D ? void 0 : D.length) !== 0) {
                                i()(!D.some((e) => e.isOnCooldown()), 'Cannot use a premium guild subscription slot while on cooldown');
                                try {
                                    await Promise.all(
                                        D.map((e) => {
                                            let { premiumGuildSubscription: t } = e;
                                            return null != t ? (0, c.dG)(t.guildId, t.id) : Promise.resolve();
                                        })
                                    ),
                                        await (0, c.W3)(
                                            W.id,
                                            D.map((e) => {
                                                let { id: t } = e;
                                                return t;
                                            })
                                        ),
                                        Z('SUCCESS');
                                } catch (e) {
                                    M(!0);
                                }
                            }
                        };
                    return (0, l.jsx)(p.Z.Footer, {
                        confirmation: R ? C.NW.formatToPlainString(C.t.Oh6mxc, { slotCount: e }) : C.NW.formatToPlainString(C.t['ZU5x5+'], { slotCount: e }),
                        confirmationLabel: R ? C.NW.formatToPlainString(C.t.fnZRmZ, { slotCount: e }) : C.NW.formatToPlainString(C.t.d0vwWV, { slotCount: e }),
                        onConfirm: n,
                        onCancel: t,
                        isModifyingSubscription: E
                    });
                }
            },
            SUCCESS: {
                body: () =>
                    (0, l.jsx)(f.R7, {
                        guild: W,
                        isTransfer: R,
                        guildBoostQuantity: D.length,
                        onClose: B
                    })
            }
        };
    r.useEffect(() => {
        x.default.track(j.rMx.OPEN_MODAL, {
            type: j.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
            location_section: N
        });
    }, [N]);
    let _ = F[I];
    return (0, l.jsxs)(a.Y0X, {
        transitionState: y,
        className: v.modal,
        size: a.CgR.SMALL,
        children: [
            null === (t = _.header) || void 0 === t ? void 0 : t.call(_),
            (0, l.jsx)(a.hzk, {
                className: _.bodyClass,
                children: (0, l.jsx)(a.qBt, {
                    step: I,
                    steps: O,
                    children: _.body()
                })
            }),
            null === (n = _.footer) || void 0 === n ? void 0 : n.call(_),
            (0, l.jsx)(a.olH, {
                className: v.modalCloseButton,
                onClick: B
            })
        ]
    });
};

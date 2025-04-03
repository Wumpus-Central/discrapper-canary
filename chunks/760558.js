l.d(t, { default: () => N }), l(47120);
var n = l(200651),
    r = l(192379),
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
    g = l(395199),
    f = l(719228),
    p = l(4434),
    j = l(981631),
    C = l(388032),
    v = l(671593);
let N = (e) => {
    var t, l;
    let { guildBoostSlots: s, selectedGuild: N, locationSection: b, transitionState: y, onClose: S } = e,
        O = (0, h.vx)(m.Z.boostSlots);
    i()(null != s || null != N, 'Must either provide slots or an initial selected guild'), i()(!(null == s ? void 0 : s.some((e) => e.isOnCooldown())), 'If slots are provided, they must not be on cooldown');
    let P = [null == s ? 'UNUSED_QUANTITY_SELECT' : null, null == N ? 'GUILD_SELECT' : null, 'CONFIRM', 'SUCCESS'].filter((e) => null != e),
        [E, T] = (0, o.Wu)([d.Z], () => [d.Z.isModifyingAppliedBoost, d.Z.applyBoostError]),
        [L, Z] = r.useState(''),
        [w, I] = r.useState(P[0]),
        [k, W] = r.useState(!1),
        [M, G] = r.useState(N),
        [D, U] = r.useState(null != s ? s : O.slice(0, 1)),
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
            return (null == D || null == (e = D[0]) ? void 0 : e.premiumGuildSubscription) != null;
        }, [D]),
        B = () => {
            S('SUCCESS' === w),
                x.default.track(j.rMx.MODAL_DISMISSED, {
                    type: j.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                    location_section: b
                });
        },
        F = {
            UNUSED_QUANTITY_SELECT: {
                body: () => (
                    i()(null != s || 0 !== O.length, 'Cannot provide no slots if there are no other available slots'),
                    (0, n.jsxs)('div', {
                        className: v.quantitySelectorBody,
                        children: [
                            (0, n.jsx)(a.X6q, {
                                variant: 'heading-md/semibold',
                                className: v.quantitySelectorHeader,
                                children: C.NW.string(C.t['9FFrra'])
                            }),
                            (0, n.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                className: v.quantitySelectorDescription,
                                children: C.NW.string(C.t.x5qw5e)
                            }),
                            (0, n.jsxs)('div', {
                                className: v.quantitySelectorWrapper,
                                children: [
                                    (0, n.jsx)(a.FiK, {
                                        value: D.length,
                                        onChange: (e) => U(O.slice(0, e)),
                                        minValue: 1,
                                        maxValue: O.length
                                    }),
                                    (0, n.jsx)(a.Text, {
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
                    (0, n.jsxs)(a.mzw, {
                        children: [
                            (0, n.jsx)(a.zxk, {
                                onClick: () => I('CONFIRM'),
                                children: C.NW.string(C.t['/uwYdX'])
                            }),
                            (0, n.jsx)(a.zxk, {
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
                    (0, n.jsx)(f.g, {
                        isTransfer: R,
                        query: L,
                        setQuery: Z
                    }),
                bodyClass: v.selectContent,
                body: () =>
                    (0, n.jsx)(f.e, {
                        onClose: B,
                        onSelectGuild: (e) => {
                            G(e), I('CONFIRM');
                        },
                        isTransfer: R,
                        selectedSlotGuilds: z,
                        query: L
                    })
            },
            CONFIRM: {
                body() {
                    if (null == M) return null;
                    let e = D.filter((e) => (0, h.tl)(e)).length,
                        t = D.length,
                        l = z.length;
                    return R
                        ? (0, n.jsx)(g.Z.TransferBody, {
                              fromGuilds: z,
                              toGuild: M,
                              blurb: C.NW.formatToPlainString(C.t.SSA2lp, {
                                  slotCount: t,
                                  guildCount: l
                              }),
                              imageClass: v.transferConfirmImage,
                              error: k ? T : null,
                              onDismissError: () => W(!1),
                              slotCount: t,
                              canceledCount: e
                          })
                        : (0, n.jsx)(g.Z.ApplyBody, {
                              guild: M,
                              blurb: C.NW.string(C.t.yTlZV1),
                              warning: C.NW.formatToPlainString(C.t.KPnDlp, {
                                  days: j.o3l,
                                  slotCount: t
                              }),
                              imageClass: v.confirmImage,
                              error: k ? T : null,
                              onDismissError: () => W(!1),
                              slotCount: t,
                              canceledCount: e
                          });
                },
                footer() {
                    let e = D.length,
                        t = 'CONFIRM' === P[0] ? B : () => I(P[P.indexOf(w) - 1]),
                        l = async () => {
                            if (null != M && (null == D ? void 0 : D.length) !== 0) {
                                i()(!D.some((e) => e.isOnCooldown()), 'Cannot use a premium guild subscription slot while on cooldown');
                                try {
                                    await Promise.all(
                                        D.map((e) => {
                                            let { premiumGuildSubscription: t } = e;
                                            return null != t ? (0, c.dG)(t.guildId, t.id) : Promise.resolve();
                                        })
                                    ),
                                        await (0, c.W3)(
                                            M.id,
                                            D.map((e) => {
                                                let { id: t } = e;
                                                return t;
                                            })
                                        ),
                                        I('SUCCESS');
                                } catch (e) {
                                    W(!0);
                                }
                            }
                        };
                    return (0, n.jsx)(g.Z.Footer, {
                        confirmation: R ? C.NW.formatToPlainString(C.t.Oh6mxc, { slotCount: e }) : C.NW.formatToPlainString(C.t['ZU5x5+'], { slotCount: e }),
                        confirmationLabel: R ? C.NW.formatToPlainString(C.t.fnZRmZ, { slotCount: e }) : C.NW.formatToPlainString(C.t.d0vwWV, { slotCount: e }),
                        onConfirm: l,
                        onCancel: t,
                        isModifyingSubscription: E
                    });
                }
            },
            SUCCESS: {
                body: () =>
                    (0, n.jsx)(p.R7, {
                        guild: M,
                        isTransfer: R,
                        guildBoostQuantity: D.length,
                        onClose: B
                    })
            }
        };
    r.useEffect(() => {
        x.default.track(j.rMx.OPEN_MODAL, {
            type: j.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
            location_section: b
        });
    }, [b]);
    let _ = F[w];
    return (0, n.jsxs)(a.Y0X, {
        transitionState: y,
        className: v.modal,
        size: a.CgR.SMALL,
        children: [
            null == (t = _.header) ? void 0 : t.call(_),
            (0, n.jsx)(a.hzk, {
                className: _.bodyClass,
                children: (0, n.jsx)(a.qBt, {
                    step: w,
                    steps: P,
                    children: _.body()
                })
            }),
            null == (l = _.footer) ? void 0 : l.call(_),
            (0, n.jsx)(a.olH, {
                className: v.modalCloseButton,
                onClick: B
            })
        ]
    });
};

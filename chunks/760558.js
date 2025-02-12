n.d(l, { default: () => S }), n(47120);
var t = n(200651),
    s = n(192379),
    i = n(512722),
    r = n.n(i),
    a = n(442837),
    o = n(481060),
    d = n(179360),
    c = n(899667),
    u = n(430824),
    m = n(314884),
    x = n(626135),
    h = n(267642),
    C = n(395199),
    g = n(719228),
    j = n(4434),
    p = n(981631),
    f = n(388032),
    v = n(11734);
let S = (e) => {
    var l, n;
    let { guildBoostSlots: i, selectedGuild: S, locationSection: N, transitionState: b, onClose: y } = e,
        T = (0, h.vx)(m.Z.boostSlots);
    r()(null != i || null != S, 'Must either provide slots or an initial selected guild'), r()(!(null == i ? void 0 : i.some((e) => e.isOnCooldown())), 'If slots are provided, they must not be on cooldown');
    let E = [null == i ? 'UNUSED_QUANTITY_SELECT' : null, null == S ? 'GUILD_SELECT' : null, 'CONFIRM', 'SUCCESS'].filter((e) => null != e),
        [L, Z] = (0, a.Wu)([c.Z], () => [c.Z.isModifyingAppliedBoost, c.Z.applyBoostError]),
        [I, P] = s.useState(''),
        [M, k] = s.useState(E[0]),
        [G, w] = s.useState(!1),
        [D, U] = s.useState(S),
        [z, R] = s.useState(null != i ? i : T.slice(0, 1)),
        B = s.useMemo(
            () =>
                null == z
                    ? []
                    : z
                          .map((e) => {
                              let { premiumGuildSubscription: l } = e;
                              return u.Z.getGuild(null == l ? void 0 : l.guildId);
                          })
                          .filter((e) => null != e),
            [z]
        ),
        F = s.useMemo(() => {
            var e;
            return (null == z ? void 0 : null === (e = z[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null;
        }, [z]),
        _ = () => {
            y('SUCCESS' === M),
                x.default.track(p.rMx.MODAL_DISMISSED, {
                    type: p.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                    location_section: N
                });
        },
        A = {
            UNUSED_QUANTITY_SELECT: {
                body: () => (
                    r()(!(null == i && 0 === T.length), 'Cannot provide no slots if there are no other available slots'),
                    (0, t.jsxs)('div', {
                        className: v.quantitySelectorBody,
                        children: [
                            (0, t.jsx)(o.X6q, {
                                variant: 'heading-md/semibold',
                                className: v.quantitySelectorHeader,
                                children: f.intl.string(f.t['9FFrra'])
                            }),
                            (0, t.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                className: v.quantitySelectorDescription,
                                children: f.intl.string(f.t.x5qw5e)
                            }),
                            (0, t.jsxs)('div', {
                                className: v.quantitySelectorWrapper,
                                children: [
                                    (0, t.jsx)(o.FiK, {
                                        value: z.length,
                                        onChange: (e) => R(T.slice(0, e)),
                                        minValue: 1,
                                        maxValue: T.length
                                    }),
                                    (0, t.jsx)(o.Text, {
                                        className: v.quantitySelectorLabel,
                                        variant: 'text-md/normal',
                                        children: f.intl.string(f.t.Vl8TCw)
                                    })
                                ]
                            })
                        ]
                    })
                ),
                footer: () =>
                    (0, t.jsxs)(o.mzw, {
                        children: [
                            (0, t.jsx)(o.zxk, {
                                onClick: () => k('CONFIRM'),
                                children: f.intl.string(f.t['/uwYdX'])
                            }),
                            (0, t.jsx)(o.zxk, {
                                look: o.zxk.Looks.LINK,
                                color: o.zxk.Colors.PRIMARY,
                                onClick: _,
                                children: f.intl.string(f.t['1BPTsL'])
                            })
                        ]
                    })
            },
            GUILD_SELECT: {
                header: () =>
                    (0, t.jsx)(g.g, {
                        isTransfer: F,
                        query: I,
                        setQuery: P
                    }),
                bodyClass: v.selectContent,
                body: () =>
                    (0, t.jsx)(g.e, {
                        onClose: _,
                        onSelectGuild: (e) => {
                            U(e), k('CONFIRM');
                        },
                        isTransfer: F,
                        selectedSlotGuilds: B,
                        query: I
                    })
            },
            CONFIRM: {
                body() {
                    if (null == D) return null;
                    let e = z.filter((e) => (0, h.tl)(e)).length,
                        l = z.length,
                        n = B.length;
                    return F
                        ? (0, t.jsx)(C.Z.TransferBody, {
                              fromGuilds: B,
                              toGuild: D,
                              blurb: f.intl.formatToPlainString(f.t.SSA2lp, {
                                  slotCount: l,
                                  guildCount: n
                              }),
                              imageClass: v.transferConfirmImage,
                              error: G ? Z : null,
                              onDismissError: () => w(!1),
                              slotCount: l,
                              canceledCount: e
                          })
                        : (0, t.jsx)(C.Z.ApplyBody, {
                              guild: D,
                              blurb: f.intl.string(f.t.yTlZV1),
                              warning: f.intl.formatToPlainString(f.t.KPnDlp, {
                                  days: p.o3l,
                                  slotCount: l
                              }),
                              imageClass: v.confirmImage,
                              error: G ? Z : null,
                              onDismissError: () => w(!1),
                              slotCount: l,
                              canceledCount: e
                          });
                },
                footer() {
                    let e = z.length,
                        l = 'CONFIRM' === E[0] ? _ : () => k(E[E.indexOf(M) - 1]),
                        n = async () => {
                            if (null != D && (null == z ? void 0 : z.length) !== 0) {
                                r()(!z.some((e) => e.isOnCooldown()), 'Cannot use a premium guild subscription slot while on cooldown');
                                try {
                                    await Promise.all(
                                        z.map((e) => {
                                            let { premiumGuildSubscription: l } = e;
                                            return null != l ? (0, d.dG)(l.guildId, l.id) : Promise.resolve();
                                        })
                                    ),
                                        await (0, d.W3)(
                                            D.id,
                                            z.map((e) => {
                                                let { id: l } = e;
                                                return l;
                                            })
                                        ),
                                        k('SUCCESS');
                                } catch (e) {
                                    w(!0);
                                }
                            }
                        };
                    return (0, t.jsx)(C.Z.Footer, {
                        confirmation: F ? f.intl.formatToPlainString(f.t.Oh6mxc, { slotCount: e }) : f.intl.formatToPlainString(f.t['ZU5x5+'], { slotCount: e }),
                        confirmationLabel: F ? f.intl.formatToPlainString(f.t.fnZRmZ, { slotCount: e }) : f.intl.formatToPlainString(f.t.d0vwWV, { slotCount: e }),
                        onConfirm: n,
                        onCancel: l,
                        isModifyingSubscription: L
                    });
                }
            },
            SUCCESS: {
                body: () =>
                    (0, t.jsx)(j.R7, {
                        guild: D,
                        isTransfer: F,
                        guildBoostQuantity: z.length,
                        onClose: _
                    })
            }
        };
    s.useEffect(() => {
        x.default.track(p.rMx.OPEN_MODAL, {
            type: p.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
            location_section: N
        });
    }, [N]);
    let O = A[M];
    return (0, t.jsxs)(o.Y0X, {
        transitionState: b,
        className: v.modal,
        size: o.CgR.SMALL,
        children: [
            null === (l = O.header) || void 0 === l ? void 0 : l.call(O),
            (0, t.jsx)(o.hzk, {
                className: O.bodyClass,
                children: (0, t.jsx)(o.qBt, {
                    step: M,
                    steps: E,
                    children: O.body()
                })
            }),
            null === (n = O.footer) || void 0 === n ? void 0 : n.call(O),
            (0, t.jsx)(o.olH, {
                className: v.modalCloseButton,
                onClick: _
            })
        ]
    });
};

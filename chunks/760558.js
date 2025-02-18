s.d(l, { default: () => v }), s(47120);
var n = s(200651),
    t = s(192379),
    r = s(512722),
    i = s.n(r),
    a = s(442837),
    o = s(481060),
    d = s(179360),
    c = s(899667),
    u = s(430824),
    m = s(314884),
    x = s(626135),
    h = s(267642),
    C = s(395199),
    g = s(719228),
    j = s(4434),
    p = s(981631),
    f = s(388032),
    N = s(713361);
let v = (e) => {
    var l, s;
    let { guildBoostSlots: r, selectedGuild: v, locationSection: S, transitionState: b, onClose: y } = e,
        T = (0, h.vx)(m.Z.boostSlots);
    i()(null != r || null != v, 'Must either provide slots or an initial selected guild'), i()(!(null == r ? void 0 : r.some((e) => e.isOnCooldown())), 'If slots are provided, they must not be on cooldown');
    let E = [null == r ? 'UNUSED_QUANTITY_SELECT' : null, null == v ? 'GUILD_SELECT' : null, 'CONFIRM', 'SUCCESS'].filter((e) => null != e),
        [L, Z] = (0, a.Wu)([c.Z], () => [c.Z.isModifyingAppliedBoost, c.Z.applyBoostError]),
        [I, P] = t.useState(''),
        [M, W] = t.useState(E[0]),
        [k, G] = t.useState(!1),
        [w, D] = t.useState(v),
        [U, z] = t.useState(null != r ? r : T.slice(0, 1)),
        R = t.useMemo(
            () =>
                null == U
                    ? []
                    : U.map((e) => {
                          let { premiumGuildSubscription: l } = e;
                          return u.Z.getGuild(null == l ? void 0 : l.guildId);
                      }).filter((e) => null != e),
            [U]
        ),
        B = t.useMemo(() => {
            var e;
            return (null == U ? void 0 : null === (e = U[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null;
        }, [U]),
        F = () => {
            y('SUCCESS' === M),
                x.default.track(p.rMx.MODAL_DISMISSED, {
                    type: p.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                    location_section: S
                });
        },
        _ = {
            UNUSED_QUANTITY_SELECT: {
                body: () => (
                    i()(!(null == r && 0 === T.length), 'Cannot provide no slots if there are no other available slots'),
                    (0, n.jsxs)('div', {
                        className: N.quantitySelectorBody,
                        children: [
                            (0, n.jsx)(o.X6q, {
                                variant: 'heading-md/semibold',
                                className: N.quantitySelectorHeader,
                                children: f.NW.string(f.t['9FFrra'])
                            }),
                            (0, n.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                className: N.quantitySelectorDescription,
                                children: f.NW.string(f.t.x5qw5e)
                            }),
                            (0, n.jsxs)('div', {
                                className: N.quantitySelectorWrapper,
                                children: [
                                    (0, n.jsx)(o.FiK, {
                                        value: U.length,
                                        onChange: (e) => z(T.slice(0, e)),
                                        minValue: 1,
                                        maxValue: T.length
                                    }),
                                    (0, n.jsx)(o.Text, {
                                        className: N.quantitySelectorLabel,
                                        variant: 'text-md/normal',
                                        children: f.NW.string(f.t.Vl8TCw)
                                    })
                                ]
                            })
                        ]
                    })
                ),
                footer: () =>
                    (0, n.jsxs)(o.mzw, {
                        children: [
                            (0, n.jsx)(o.zxk, {
                                onClick: () => W('CONFIRM'),
                                children: f.NW.string(f.t['/uwYdX'])
                            }),
                            (0, n.jsx)(o.zxk, {
                                look: o.zxk.Looks.LINK,
                                color: o.zxk.Colors.PRIMARY,
                                onClick: F,
                                children: f.NW.string(f.t['1BPTsL'])
                            })
                        ]
                    })
            },
            GUILD_SELECT: {
                header: () =>
                    (0, n.jsx)(g.g, {
                        isTransfer: B,
                        query: I,
                        setQuery: P
                    }),
                bodyClass: N.selectContent,
                body: () =>
                    (0, n.jsx)(g.e, {
                        onClose: F,
                        onSelectGuild: (e) => {
                            D(e), W('CONFIRM');
                        },
                        isTransfer: B,
                        selectedSlotGuilds: R,
                        query: I
                    })
            },
            CONFIRM: {
                body() {
                    if (null == w) return null;
                    let e = U.filter((e) => (0, h.tl)(e)).length,
                        l = U.length,
                        s = R.length;
                    return B
                        ? (0, n.jsx)(C.Z.TransferBody, {
                              fromGuilds: R,
                              toGuild: w,
                              blurb: f.NW.formatToPlainString(f.t.SSA2lp, {
                                  slotCount: l,
                                  guildCount: s
                              }),
                              imageClass: N.transferConfirmImage,
                              error: k ? Z : null,
                              onDismissError: () => G(!1),
                              slotCount: l,
                              canceledCount: e
                          })
                        : (0, n.jsx)(C.Z.ApplyBody, {
                              guild: w,
                              blurb: f.NW.string(f.t.yTlZV1),
                              warning: f.NW.formatToPlainString(f.t.KPnDlp, {
                                  days: p.o3l,
                                  slotCount: l
                              }),
                              imageClass: N.confirmImage,
                              error: k ? Z : null,
                              onDismissError: () => G(!1),
                              slotCount: l,
                              canceledCount: e
                          });
                },
                footer() {
                    let e = U.length,
                        l = 'CONFIRM' === E[0] ? F : () => W(E[E.indexOf(M) - 1]),
                        s = async () => {
                            if (null != w && (null == U ? void 0 : U.length) !== 0) {
                                i()(!U.some((e) => e.isOnCooldown()), 'Cannot use a premium guild subscription slot while on cooldown');
                                try {
                                    await Promise.all(
                                        U.map((e) => {
                                            let { premiumGuildSubscription: l } = e;
                                            return null != l ? (0, d.dG)(l.guildId, l.id) : Promise.resolve();
                                        })
                                    ),
                                        await (0, d.W3)(
                                            w.id,
                                            U.map((e) => {
                                                let { id: l } = e;
                                                return l;
                                            })
                                        ),
                                        W('SUCCESS');
                                } catch (e) {
                                    G(!0);
                                }
                            }
                        };
                    return (0, n.jsx)(C.Z.Footer, {
                        confirmation: B ? f.NW.formatToPlainString(f.t.Oh6mxc, { slotCount: e }) : f.NW.formatToPlainString(f.t['ZU5x5+'], { slotCount: e }),
                        confirmationLabel: B ? f.NW.formatToPlainString(f.t.fnZRmZ, { slotCount: e }) : f.NW.formatToPlainString(f.t.d0vwWV, { slotCount: e }),
                        onConfirm: s,
                        onCancel: l,
                        isModifyingSubscription: L
                    });
                }
            },
            SUCCESS: {
                body: () =>
                    (0, n.jsx)(j.R7, {
                        guild: w,
                        isTransfer: B,
                        guildBoostQuantity: U.length,
                        onClose: F
                    })
            }
        };
    t.useEffect(() => {
        x.default.track(p.rMx.OPEN_MODAL, {
            type: p.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
            location_section: S
        });
    }, [S]);
    let A = _[M];
    return (0, n.jsxs)(o.Y0X, {
        transitionState: b,
        className: N.modal,
        size: o.CgR.SMALL,
        children: [
            null === (l = A.header) || void 0 === l ? void 0 : l.call(A),
            (0, n.jsx)(o.hzk, {
                className: A.bodyClass,
                children: (0, n.jsx)(o.qBt, {
                    step: M,
                    steps: E,
                    children: A.body()
                })
            }),
            null === (s = A.footer) || void 0 === s ? void 0 : s.call(A),
            (0, n.jsx)(o.olH, {
                className: N.modalCloseButton,
                onClick: F
            })
        ]
    });
};

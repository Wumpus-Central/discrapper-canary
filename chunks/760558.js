n.r(l),
    n.d(l, {
        Steps: function () {
            return t;
        }
    }),
    n(47120);
var t,
    s,
    r = n(200651),
    i = n(192379),
    o = n(512722),
    a = n.n(o),
    d = n(442837),
    u = n(481060),
    c = n(179360),
    m = n(899667),
    x = n(430824),
    C = n(314884),
    h = n(626135),
    g = n(267642),
    f = n(395199),
    p = n(719228),
    S = n(4434),
    j = n(981631),
    v = n(388032),
    N = n(398087);
((s = t || (t = {})).UNUSED_QUANTITY_SELECT = 'UNUSED_QUANTITY_SELECT'), (s.GUILD_SELECT = 'GUILD_SELECT'), (s.CONFIRM = 'CONFIRM'), (s.SUCCESS = 'SUCCESS');
l.default = (e) => {
    var l, n;
    let { guildBoostSlots: t, selectedGuild: s, locationSection: o, transitionState: b, onClose: M } = e,
        E = (0, g.vx)(C.Z.boostSlots);
    a()(null != t || null != s, 'Must either provide slots or an initial selected guild'), a()(!(null == t ? void 0 : t.some((e) => e.isOnCooldown())), 'If slots are provided, they must not be on cooldown');
    let T = [null == t ? 'UNUSED_QUANTITY_SELECT' : null, null == s ? 'GUILD_SELECT' : null, 'CONFIRM', 'SUCCESS'].filter((e) => null != e),
        [y, L] = (0, d.Wu)([m.Z], () => [m.Z.isModifyingAppliedBoost, m.Z.applyBoostError]),
        [I, Z] = i.useState(''),
        [G, B] = i.useState(T[0]),
        [U, P] = i.useState(!1),
        [D, w] = i.useState(s),
        [R, _] = i.useState(null != t ? t : E.slice(0, 1)),
        k = i.useMemo(
            () =>
                null == R
                    ? []
                    : R.map((e) => {
                          let { premiumGuildSubscription: l } = e;
                          return x.Z.getGuild(null == l ? void 0 : l.guildId);
                      }).filter((e) => null != e),
            [R]
        ),
        F = i.useMemo(() => {
            var e;
            return (null == R ? void 0 : null === (e = R[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null;
        }, [R]),
        A = () => {
            M('SUCCESS' === G),
                h.default.track(j.rMx.MODAL_DISMISSED, {
                    type: j.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                    location_section: o
                });
        },
        O = {
            UNUSED_QUANTITY_SELECT: {
                body: () => (
                    a()(!(null == t && 0 === E.length), 'Cannot provide no slots if there are no other available slots'),
                    (0, r.jsxs)('div', {
                        className: N.quantitySelectorBody,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                variant: 'heading-md/semibold',
                                className: N.quantitySelectorHeader,
                                children: v.intl.string(v.t['9FFrra'])
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-md/normal',
                                className: N.quantitySelectorDescription,
                                children: v.intl.string(v.t.x5qw5e)
                            }),
                            (0, r.jsxs)('div', {
                                className: N.quantitySelectorWrapper,
                                children: [
                                    (0, r.jsx)(u.NumberInputStepper, {
                                        value: R.length,
                                        onChange: (e) => _(E.slice(0, e)),
                                        minValue: 1,
                                        maxValue: E.length
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        className: N.quantitySelectorLabel,
                                        variant: 'text-md/normal',
                                        children: v.intl.string(v.t.Vl8TCw)
                                    })
                                ]
                            })
                        ]
                    })
                ),
                footer: () =>
                    (0, r.jsxs)(u.ModalFooter, {
                        children: [
                            (0, r.jsx)(u.Button, {
                                onClick: () => B('CONFIRM'),
                                children: v.intl.string(v.t['/uwYdX'])
                            }),
                            (0, r.jsx)(u.Button, {
                                look: u.Button.Looks.LINK,
                                color: u.Button.Colors.PRIMARY,
                                onClick: A,
                                children: v.intl.string(v.t['1BPTsL'])
                            })
                        ]
                    })
            },
            GUILD_SELECT: {
                header: () =>
                    (0, r.jsx)(p.GuildSelectModalHeader, {
                        isTransfer: F,
                        query: I,
                        setQuery: Z
                    }),
                bodyClass: N.selectContent,
                body: () =>
                    (0, r.jsx)(p.GuildSelectModalBody, {
                        onClose: A,
                        onSelectGuild: (e) => {
                            w(e), B('CONFIRM');
                        },
                        isTransfer: F,
                        selectedSlotGuilds: k,
                        query: I
                    })
            },
            CONFIRM: {
                body() {
                    if (null == D) return null;
                    let e = R.filter((e) => (0, g.tl)(e)).length,
                        l = R.length,
                        n = k.length;
                    return F
                        ? (0, r.jsx)(f.Z.TransferBody, {
                              fromGuilds: k,
                              toGuild: D,
                              blurb: v.intl.formatToPlainString(v.t.SSA2lp, {
                                  slotCount: l,
                                  guildCount: n
                              }),
                              imageClass: N.transferConfirmImage,
                              error: U ? L : null,
                              onDismissError: () => P(!1),
                              slotCount: l,
                              canceledCount: e
                          })
                        : (0, r.jsx)(f.Z.ApplyBody, {
                              guild: D,
                              blurb: v.intl.string(v.t.yTlZV1),
                              warning: v.intl.formatToPlainString(v.t.KPnDlp, {
                                  days: j.o3l,
                                  slotCount: l
                              }),
                              imageClass: N.confirmImage,
                              error: U ? L : null,
                              onDismissError: () => P(!1),
                              slotCount: l,
                              canceledCount: e
                          });
                },
                footer() {
                    let e = R.length,
                        l = 'CONFIRM' === T[0] ? A : () => B(T[T.indexOf(G) - 1]),
                        n = async () => {
                            if (null != D && (null == R ? void 0 : R.length) !== 0) {
                                a()(!R.some((e) => e.isOnCooldown()), 'Cannot use a premium guild subscription slot while on cooldown');
                                try {
                                    await Promise.all(
                                        R.map((e) => {
                                            let { premiumGuildSubscription: l } = e;
                                            return null != l ? (0, c.dG)(l.guildId, l.id) : Promise.resolve();
                                        })
                                    ),
                                        await (0, c.W3)(
                                            D.id,
                                            R.map((e) => {
                                                let { id: l } = e;
                                                return l;
                                            })
                                        ),
                                        B('SUCCESS');
                                } catch (e) {
                                    P(!0);
                                }
                            }
                        };
                    return (0, r.jsx)(f.Z.Footer, {
                        confirmation: F ? v.intl.formatToPlainString(v.t.Oh6mxc, { slotCount: e }) : v.intl.formatToPlainString(v.t['ZU5x5+'], { slotCount: e }),
                        confirmationLabel: F ? v.intl.formatToPlainString(v.t.fnZRmZ, { slotCount: e }) : v.intl.formatToPlainString(v.t.d0vwWV, { slotCount: e }),
                        onConfirm: n,
                        onCancel: l,
                        isModifyingSubscription: y
                    });
                }
            },
            SUCCESS: {
                body: () =>
                    (0, r.jsx)(S.R7, {
                        guild: D,
                        isTransfer: F,
                        guildBoostQuantity: R.length,
                        onClose: A
                    })
            }
        };
    i.useEffect(() => {
        h.default.track(j.rMx.OPEN_MODAL, {
            type: j.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
            location_section: o
        });
    }, [o]);
    let H = O[G];
    return (0, r.jsxs)(u.ModalRoot, {
        transitionState: b,
        className: N.modal,
        size: u.ModalSize.SMALL,
        children: [
            null === (l = H.header) || void 0 === l ? void 0 : l.call(H),
            (0, r.jsx)(u.ModalContent, {
                className: H.bodyClass,
                children: (0, r.jsx)(u.Sequencer, {
                    step: G,
                    steps: T,
                    children: H.body()
                })
            }),
            null === (n = H.footer) || void 0 === n ? void 0 : n.call(H),
            (0, r.jsx)(u.ModalCloseButton, {
                className: N.modalCloseButton,
                onClick: A
            })
        ]
    });
};

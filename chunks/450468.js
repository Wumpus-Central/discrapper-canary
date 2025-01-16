n.r(t),
    n.d(t, {
        default: function () {
            return j;
        }
    }),
    n(47120),
    n(411104);
var i,
    r,
    s = n(200651),
    a = n(192379),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    m = n(355467),
    g = n(179360),
    h = n(881052),
    p = n(128069),
    x = n(100527),
    f = n(906732),
    _ = n(600164),
    E = n(431369),
    C = n(210887),
    T = n(78839),
    S = n(74538),
    b = n(388032),
    I = n(69049);
async function N(e, t, n, i) {
    await (0, g.bG)(n), await (0, m.Mg)(e, { items: (0, S.MY)(e, t) }, i);
}
function v(e) {
    let { premiumSubscription: t, guildBoostSlotId: n, onNext: i, onClose: r } = e,
        [l, m] = a.useState(!1),
        g = (0, c.e7)([C.Z], () => C.Z.theme),
        { analyticsLocations: x } = (0, f.ZP)(),
        [T, v] = a.useState(null);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(u.ModalHeader, {
                separator: !1,
                children: [
                    (0, s.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H4,
                        children: b.intl.string(b.t.l52ih4)
                    }),
                    (0, s.jsx)(u.ModalCloseButton, { onClick: r })
                ]
            }),
            (0, s.jsxs)(u.ModalContent, {
                className: I.body,
                children: [
                    null !== T &&
                        (0, s.jsx)(u.FormErrorBlock, {
                            className: I.error,
                            children: T
                        }),
                    b.intl.string(b.t.DY2CXl)
                ]
            }),
            (0, s.jsxs)(u.ModalFooter, {
                justify: _.Z.Justify.START,
                children: [
                    (0, s.jsx)(u.Button, {
                        onClick: async () => {
                            try {
                                m(!0), v(null);
                                let e = (0, E.g)(t, 1);
                                o()((0, S.uV)(e) <= (0, S.uV)(t.additionalPlans), 'Uncanceling should not increase the number of guild subscriptions'), await N(t, e, n, x), i();
                            } catch (t) {
                                let e = t instanceof h.HF ? t : new h.HF(t, t.code);
                                v(b.intl.string(e.code === p.SM.BILLING_PAUSE_INVALID_UPDATE ? b.t.dq4vq6 : b.t['5mlOCQ'])), m(!1);
                            }
                        },
                        submitting: l,
                        children: b.intl.string(b.t.etZP4O)
                    }),
                    (0, s.jsx)(u.Button, {
                        look: u.Button.Looks.LINK,
                        color: (0, d.ap)(g) ? u.Button.Colors.PRIMARY : u.Button.Colors.WHITE,
                        onClick: r,
                        disabled: l,
                        children: b.intl.string(b.t.oEAioK)
                    })
                ]
            })
        ]
    });
}
function A(e) {
    let { onClose: t } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(u.ModalHeader, {
                separator: !1,
                children: [
                    (0, s.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H4,
                        children: b.intl.string(b.t.H9QUAA)
                    }),
                    (0, s.jsx)(u.ModalCloseButton, { onClick: t })
                ]
            }),
            (0, s.jsxs)(u.ModalContent, {
                className: I.body,
                children: [(0, s.jsx)('div', { className: I.uncancelImage }), (0, s.jsx)('div', { children: b.intl.string(b.t.G27uHR) })]
            }),
            (0, s.jsx)(u.ModalFooter, {
                children: (0, s.jsx)(u.Button, {
                    onClick: t,
                    children: b.intl.string(b.t.BddRzc)
                })
            })
        ]
    });
}
function j(e) {
    let t,
        { guildBoostSlotId: n, transitionState: i, onClose: r } = e,
        { analyticsLocations: l } = (0, f.ZP)(x.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
    a.useEffect(() => {
        !T.ZP.hasFetchedSubscriptions() && (0, m.jg)();
    }, []);
    let o = (0, c.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()),
        [d, g] = a.useState(1);
    if (null == o) t = (0, s.jsx)(u.ModalContent, { children: (0, s.jsx)(u.Spinner, {}) });
    else
        switch (d) {
            case 1:
                t = (0, s.jsx)(v, {
                    premiumSubscription: o,
                    guildBoostSlotId: n,
                    onNext: () => g(2),
                    onClose: r
                });
                break;
            case 2:
                t = (0, s.jsx)(A, { onClose: r });
                break;
            default:
                throw Error('Unexpected step: '.concat(d));
        }
    return (0, s.jsx)(f.Gt, {
        value: l,
        children: (0, s.jsx)(u.ModalRoot, {
            transitionState: i,
            children: t
        })
    });
}
((r = i || (i = {}))[(r.START = 1)] = 'START'), (r[(r.CONFIRM = 2)] = 'CONFIRM');

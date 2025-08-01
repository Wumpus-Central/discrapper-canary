(n.d(t, { default: () => N }), n(388685), n(415506));
var i = n(255367),
    r = n(73800),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(780384),
    c = n(755721),
    d = n(481060),
    u = n(355467),
    m = n(179360),
    p = n(881052),
    g = n(128069),
    h = n(100527),
    f = n(906732),
    b = n(600164),
    x = n(431369),
    _ = n(210887),
    j = n(78839),
    O = n(74538),
    C = n(388032),
    E = n(485312);
async function v(e, t, n, i) {
    let r = (0, O.MY)(e, t);
    (await (0, m.bG)(n),
        await (0, u.Mg)(
            e,
            { items: r },
            {
                amount: 0,
                currency: e.currency
            },
            (0, O.UX)(r, e.currency, e.paymentSourceId),
            i
        ));
}
function S(e) {
    let { premiumSubscription: t, guildBoostSlotId: n, onNext: s, onClose: u } = e,
        [m, h] = r.useState(!1),
        j = (0, l.e7)([_.Z], () => _.Z.theme),
        { analyticsLocations: S } = (0, f.ZP)(),
        [T, N] = r.useState(null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.xBx, {
                separator: !1,
                children: [
                    (0, i.jsx)(d.vwX, {
                        tag: d.RB0.H4,
                        children: C.intl.string(C.t.l52ih4)
                    }),
                    (0, i.jsx)(d.olH, { onClick: u })
                ]
            }),
            (0, i.jsxs)(d.hzk, {
                className: E.body,
                children: [
                    null !== T &&
                        (0, i.jsx)(d.kzN, {
                            className: E.error,
                            children: T
                        }),
                    C.intl.string(C.t.DY2CXl)
                ]
            }),
            (0, i.jsxs)(d.mzw, {
                justify: b.Z.Justify.START,
                children: [
                    (0, i.jsx)(d.zxk, {
                        variant: 'primary',
                        text: C.intl.string(C.t.etZP4O),
                        onClick: async () => {
                            try {
                                (h(!0), N(null));
                                let e = (0, x.g)(t, 1);
                                (a()((0, O.uV)(e) <= (0, O.uV)(t.additionalPlans), 'Uncanceling should not increase the number of guild subscriptions'), await v(t, e, n, S), s());
                            } catch (t) {
                                let e = t instanceof p.HF ? t : new p.HF(t, t.code);
                                (N(C.intl.string(e.code === g.SM.BILLING_PAUSE_INVALID_UPDATE ? C.t.dq4vq6 : C.t['5mlOCQ'])), h(!1));
                            }
                        },
                        loading: m
                    }),
                    (0, i.jsx)(c.zx, {
                        look: c.zx.Looks.LINK,
                        color: (0, o.ap)(j) ? c.zx.Colors.PRIMARY : c.zx.Colors.WHITE,
                        onClick: u,
                        disabled: m,
                        children: C.intl.string(C.t.oEAioK)
                    })
                ]
            })
        ]
    });
}
function T(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.xBx, {
                separator: !1,
                children: [
                    (0, i.jsx)(d.vwX, {
                        tag: d.RB0.H4,
                        children: C.intl.string(C.t.H9QUAA)
                    }),
                    (0, i.jsx)(d.olH, { onClick: t })
                ]
            }),
            (0, i.jsxs)(d.hzk, {
                className: E.body,
                children: [(0, i.jsx)('div', { className: E.uncancelImage }), (0, i.jsx)('div', { children: C.intl.string(C.t.G27uHR) })]
            }),
            (0, i.jsx)(d.mzw, {
                children: (0, i.jsx)(d.zxk, {
                    variant: 'primary',
                    text: C.intl.string(C.t.BddRzc),
                    onClick: t
                })
            })
        ]
    });
}
function N(e) {
    let t,
        { guildBoostSlotId: n, transitionState: s, onClose: a } = e,
        { analyticsLocations: o } = (0, f.ZP)(h.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
    r.useEffect(() => {
        j.Z.hasFetchedSubscriptions() || (0, u.jg)();
    }, []);
    let c = (0, l.e7)([j.Z], () => j.Z.getPremiumTypeSubscription()),
        [m, p] = r.useState(1);
    if (null == c) t = (0, i.jsx)(d.hzk, { children: (0, i.jsx)(d.$jN, {}) });
    else
        switch (m) {
            case 1:
                t = (0, i.jsx)(S, {
                    premiumSubscription: c,
                    guildBoostSlotId: n,
                    onNext: () => p(2),
                    onClose: a
                });
                break;
            case 2:
                t = (0, i.jsx)(T, { onClose: a });
                break;
            default:
                throw Error('Unexpected step: '.concat(m));
        }
    return (0, i.jsx)(f.Gt, {
        value: o,
        children: (0, i.jsx)(d.Y0X, {
            transitionState: s,
            parentComponent: 'GuildBoostSlotUncancellationModal',
            children: t
        })
    });
}

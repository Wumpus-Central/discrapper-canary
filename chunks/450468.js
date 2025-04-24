n.d(t, { default: () => T }), n(388685), n(415506);
var i = n(200651),
    r = n(192379),
    s = n(512722),
    l = n.n(s),
    a = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(355467),
    u = n(179360),
    m = n(881052),
    p = n(128069),
    g = n(100527),
    h = n(906732),
    f = n(600164),
    b = n(431369),
    _ = n(210887),
    x = n(78839),
    E = n(74538),
    C = n(388032),
    j = n(485312);
async function O(e, t, n, i) {
    await (0, u.bG)(n), await (0, d.Mg)(e, { items: (0, E.MY)(e, t) }, i);
}
function S(e) {
    let { premiumSubscription: t, guildBoostSlotId: n, onNext: s, onClose: d } = e,
        [u, g] = r.useState(!1),
        x = (0, a.e7)([_.Z], () => _.Z.theme),
        { analyticsLocations: S } = (0, h.ZP)(),
        [v, T] = r.useState(null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c.xBx, {
                separator: !1,
                children: [
                    (0, i.jsx)(c.vwX, {
                        tag: c.RB0.H4,
                        children: C.intl.string(C.t.l52ih4)
                    }),
                    (0, i.jsx)(c.olH, { onClick: d })
                ]
            }),
            (0, i.jsxs)(c.hzk, {
                className: j.body,
                children: [
                    null !== v &&
                        (0, i.jsx)(c.kzN, {
                            className: j.error,
                            children: v
                        }),
                    C.intl.string(C.t.DY2CXl)
                ]
            }),
            (0, i.jsxs)(c.mzw, {
                justify: f.Z.Justify.START,
                children: [
                    (0, i.jsx)(c.zxk, {
                        onClick: async () => {
                            try {
                                g(!0), T(null);
                                let e = (0, b.g)(t, 1);
                                l()((0, E.uV)(e) <= (0, E.uV)(t.additionalPlans), 'Uncanceling should not increase the number of guild subscriptions'), await O(t, e, n, S), s();
                            } catch (t) {
                                let e = t instanceof m.HF ? t : new m.HF(t, t.code);
                                T(C.intl.string(e.code === p.SM.BILLING_PAUSE_INVALID_UPDATE ? C.t.dq4vq6 : C.t['5mlOCQ'])), g(!1);
                            }
                        },
                        submitting: u,
                        children: C.intl.string(C.t.etZP4O)
                    }),
                    (0, i.jsx)(c.zxk, {
                        look: c.zxk.Looks.LINK,
                        color: (0, o.ap)(x) ? c.zxk.Colors.PRIMARY : c.zxk.Colors.WHITE,
                        onClick: d,
                        disabled: u,
                        children: C.intl.string(C.t.oEAioK)
                    })
                ]
            })
        ]
    });
}
function v(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c.xBx, {
                separator: !1,
                children: [
                    (0, i.jsx)(c.vwX, {
                        tag: c.RB0.H4,
                        children: C.intl.string(C.t.H9QUAA)
                    }),
                    (0, i.jsx)(c.olH, { onClick: t })
                ]
            }),
            (0, i.jsxs)(c.hzk, {
                className: j.body,
                children: [(0, i.jsx)('div', { className: j.uncancelImage }), (0, i.jsx)('div', { children: C.intl.string(C.t.G27uHR) })]
            }),
            (0, i.jsx)(c.mzw, {
                children: (0, i.jsx)(c.zxk, {
                    onClick: t,
                    children: C.intl.string(C.t.BddRzc)
                })
            })
        ]
    });
}
function T(e) {
    let t,
        { guildBoostSlotId: n, transitionState: s, onClose: l } = e,
        { analyticsLocations: o } = (0, h.ZP)(g.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
    r.useEffect(() => {
        x.ZP.hasFetchedSubscriptions() || (0, d.jg)();
    }, []);
    let u = (0, a.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription()),
        [m, p] = r.useState(1);
    if (null == u) t = (0, i.jsx)(c.hzk, { children: (0, i.jsx)(c.$jN, {}) });
    else
        switch (m) {
            case 1:
                t = (0, i.jsx)(S, {
                    premiumSubscription: u,
                    guildBoostSlotId: n,
                    onNext: () => p(2),
                    onClose: l
                });
                break;
            case 2:
                t = (0, i.jsx)(v, { onClose: l });
                break;
            default:
                throw Error('Unexpected step: '.concat(m));
        }
    return (0, i.jsx)(h.Gt, {
        value: o,
        children: (0, i.jsx)(c.Y0X, {
            transitionState: s,
            children: t
        })
    });
}

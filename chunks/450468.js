n.d(t, { default: () => v }), n(47120), n(411104);
var i = n(200651),
    s = n(192379),
    l = n(512722),
    r = n.n(l),
    a = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(355467),
    u = n(179360),
    h = n(881052),
    m = n(128069),
    g = n(100527),
    x = n(906732),
    _ = n(600164),
    p = n(431369),
    E = n(210887),
    C = n(78839),
    N = n(74538),
    f = n(388032),
    I = n(382967);
async function T(e, t, n, i) {
    await (0, u.bG)(n), await (0, d.Mg)(e, { items: (0, N.MY)(e, t) }, i);
}
function S(e) {
    let { premiumSubscription: t, guildBoostSlotId: n, onNext: l, onClose: d } = e,
        [u, g] = s.useState(!1),
        C = (0, a.e7)([E.Z], () => E.Z.theme),
        { analyticsLocations: S } = (0, x.ZP)(),
        [j, v] = s.useState(null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c.xBx, {
                separator: !1,
                children: [
                    (0, i.jsx)(c.vwX, {
                        tag: c.RB0.H4,
                        children: f.intl.string(f.t.l52ih4)
                    }),
                    (0, i.jsx)(c.olH, { onClick: d })
                ]
            }),
            (0, i.jsxs)(c.hzk, {
                className: I.body,
                children: [
                    null !== j &&
                        (0, i.jsx)(c.kzN, {
                            className: I.error,
                            children: j
                        }),
                    f.intl.string(f.t.DY2CXl)
                ]
            }),
            (0, i.jsxs)(c.mzw, {
                justify: _.Z.Justify.START,
                children: [
                    (0, i.jsx)(c.zxk, {
                        onClick: async () => {
                            try {
                                g(!0), v(null);
                                let e = (0, p.g)(t, 1);
                                r()((0, N.uV)(e) <= (0, N.uV)(t.additionalPlans), 'Uncanceling should not increase the number of guild subscriptions'), await T(t, e, n, S), l();
                            } catch (t) {
                                let e = t instanceof h.HF ? t : new h.HF(t, t.code);
                                v(f.intl.string(e.code === m.SM.BILLING_PAUSE_INVALID_UPDATE ? f.t.dq4vq6 : f.t['5mlOCQ'])), g(!1);
                            }
                        },
                        submitting: u,
                        children: f.intl.string(f.t.etZP4O)
                    }),
                    (0, i.jsx)(c.zxk, {
                        look: c.zxk.Looks.LINK,
                        color: (0, o.ap)(C) ? c.zxk.Colors.PRIMARY : c.zxk.Colors.WHITE,
                        onClick: d,
                        disabled: u,
                        children: f.intl.string(f.t.oEAioK)
                    })
                ]
            })
        ]
    });
}
function j(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c.xBx, {
                separator: !1,
                children: [
                    (0, i.jsx)(c.vwX, {
                        tag: c.RB0.H4,
                        children: f.intl.string(f.t.H9QUAA)
                    }),
                    (0, i.jsx)(c.olH, { onClick: t })
                ]
            }),
            (0, i.jsxs)(c.hzk, {
                className: I.body,
                children: [(0, i.jsx)('div', { className: I.uncancelImage }), (0, i.jsx)('div', { children: f.intl.string(f.t.G27uHR) })]
            }),
            (0, i.jsx)(c.mzw, {
                children: (0, i.jsx)(c.zxk, {
                    onClick: t,
                    children: f.intl.string(f.t.BddRzc)
                })
            })
        ]
    });
}
function v(e) {
    let t,
        { guildBoostSlotId: n, transitionState: l, onClose: r } = e,
        { analyticsLocations: o } = (0, x.ZP)(g.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
    s.useEffect(() => {
        C.ZP.hasFetchedSubscriptions() || (0, d.jg)();
    }, []);
    let u = (0, a.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
        [h, m] = s.useState(1);
    if (null == u) t = (0, i.jsx)(c.hzk, { children: (0, i.jsx)(c.$jN, {}) });
    else
        switch (h) {
            case 1:
                t = (0, i.jsx)(S, {
                    premiumSubscription: u,
                    guildBoostSlotId: n,
                    onNext: () => m(2),
                    onClose: r
                });
                break;
            case 2:
                t = (0, i.jsx)(j, { onClose: r });
                break;
            default:
                throw Error('Unexpected step: '.concat(h));
        }
    return (0, i.jsx)(x.Gt, {
        value: o,
        children: (0, i.jsx)(c.Y0X, {
            transitionState: l,
            children: t
        })
    });
}

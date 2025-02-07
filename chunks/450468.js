n.d(t, { default: () => v }), n(47120), n(411104);
var i = n(200651),
    s = n(192379),
    r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(355467),
    u = n(179360),
    m = n(881052),
    h = n(128069),
    g = n(100527),
    _ = n(906732),
    x = n(600164),
    p = n(431369),
    E = n(210887),
    C = n(78839),
    f = n(74538),
    T = n(388032),
    N = n(69049);
async function S(e, t, n, i) {
    await (0, u.bG)(n), await (0, d.Mg)(e, { items: (0, f.MY)(e, t) }, i);
}
function I(e) {
    let { premiumSubscription: t, guildBoostSlotId: n, onNext: r, onClose: d } = e,
        [u, g] = s.useState(!1),
        C = (0, a.e7)([E.Z], () => E.Z.theme),
        { analyticsLocations: I } = (0, _.ZP)(),
        [b, v] = s.useState(null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c.xBx, {
                separator: !1,
                children: [
                    (0, i.jsx)(c.vwX, {
                        tag: c.RB0.H4,
                        children: T.intl.string(T.t.l52ih4)
                    }),
                    (0, i.jsx)(c.olH, { onClick: d })
                ]
            }),
            (0, i.jsxs)(c.hzk, {
                className: N.body,
                children: [
                    null !== b &&
                        (0, i.jsx)(c.kzN, {
                            className: N.error,
                            children: b
                        }),
                    T.intl.string(T.t.DY2CXl)
                ]
            }),
            (0, i.jsxs)(c.mzw, {
                justify: x.Z.Justify.START,
                children: [
                    (0, i.jsx)(c.zxk, {
                        onClick: async () => {
                            try {
                                g(!0), v(null);
                                let e = (0, p.g)(t, 1);
                                l()((0, f.uV)(e) <= (0, f.uV)(t.additionalPlans), 'Uncanceling should not increase the number of guild subscriptions'), await S(t, e, n, I), r();
                            } catch (t) {
                                let e = t instanceof m.HF ? t : new m.HF(t, t.code);
                                v(T.intl.string(e.code === h.SM.BILLING_PAUSE_INVALID_UPDATE ? T.t.dq4vq6 : T.t['5mlOCQ'])), g(!1);
                            }
                        },
                        submitting: u,
                        children: T.intl.string(T.t.etZP4O)
                    }),
                    (0, i.jsx)(c.zxk, {
                        look: c.zxk.Looks.LINK,
                        color: (0, o.ap)(C) ? c.zxk.Colors.PRIMARY : c.zxk.Colors.WHITE,
                        onClick: d,
                        disabled: u,
                        children: T.intl.string(T.t.oEAioK)
                    })
                ]
            })
        ]
    });
}
function b(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c.xBx, {
                separator: !1,
                children: [
                    (0, i.jsx)(c.vwX, {
                        tag: c.RB0.H4,
                        children: T.intl.string(T.t.H9QUAA)
                    }),
                    (0, i.jsx)(c.olH, { onClick: t })
                ]
            }),
            (0, i.jsxs)(c.hzk, {
                className: N.body,
                children: [(0, i.jsx)('div', { className: N.uncancelImage }), (0, i.jsx)('div', { children: T.intl.string(T.t.G27uHR) })]
            }),
            (0, i.jsx)(c.mzw, {
                children: (0, i.jsx)(c.zxk, {
                    onClick: t,
                    children: T.intl.string(T.t.BddRzc)
                })
            })
        ]
    });
}
function v(e) {
    let t,
        { guildBoostSlotId: n, transitionState: r, onClose: l } = e,
        { analyticsLocations: o } = (0, _.ZP)(g.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
    s.useEffect(() => {
        C.ZP.hasFetchedSubscriptions() || (0, d.jg)();
    }, []);
    let u = (0, a.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
        [m, h] = s.useState(1);
    if (null == u) t = (0, i.jsx)(c.hzk, { children: (0, i.jsx)(c.$jN, {}) });
    else
        switch (m) {
            case 1:
                t = (0, i.jsx)(I, {
                    premiumSubscription: u,
                    guildBoostSlotId: n,
                    onNext: () => h(2),
                    onClose: l
                });
                break;
            case 2:
                t = (0, i.jsx)(b, { onClose: l });
                break;
            default:
                throw Error('Unexpected step: '.concat(m));
        }
    return (0, i.jsx)(_.Gt, {
        value: o,
        children: (0, i.jsx)(c.Y0X, {
            transitionState: r,
            children: t
        })
    });
}

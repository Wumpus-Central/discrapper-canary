n.d(t, { Z: () => S }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    h = n(355467),
    m = n(100527),
    g = n(906732),
    x = n(600164),
    _ = n(210887),
    p = n(301766),
    E = n(509545),
    C = n(74538),
    N = n(937615),
    I = n(388032),
    f = n(350998);
function T(e) {
    let { subscription: t, renewalMutations: n, transitionState: s, onClose: l, analyticsLocation: r } = e,
        a = (0, c.e7)([_.Z], () => _.Z.theme),
        { analyticsLocations: T } = (0, g.ZP)(m.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
    async function S() {
        await (0, h.dP)(t, t.planId, T, r), l();
    }
    let j = E.Z.get(t.planId);
    o()(null != j, 'Missing subscriptionPlan');
    let v = (0, C.aS)(t.planId, !1, !1, {
            paymentSourceId: t.paymentSourceId,
            currency: t.currency
        }),
        b = (0, N.og)((0, N.T4)(v.amount, v.currency), j.interval, j.intervalCount);
    return (0, i.jsxs)(u.Y0X, {
        transitionState: s,
        'aria-label': I.intl.string(I.t['E9kB4+']),
        children: [
            (0, i.jsxs)(u.xBx, {
                justify: x.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, i.jsx)(u.vwX, {
                        tag: u.RB0.H4,
                        children: I.intl.string(I.t['E9kB4+'])
                    }),
                    (0, i.jsx)(u.olH, { onClick: l })
                ]
            }),
            (0, i.jsx)(u.hzk, {
                className: f.modalBody,
                children: (0, p.Q0)(t.planId)
                    ? I.intl.format(I.t.GMp54O, {
                          downgradedPlan: C.ZP.getDisplayName(n.planId),
                          existingRate: b
                      })
                    : I.intl.format(I.t['vx/NZ2'], {
                          existingPlan: C.ZP.getDisplayName(t.planId),
                          downgradedPlan: C.ZP.getDisplayName(n.planId),
                          existingRate: b
                      })
            }),
            (0, i.jsxs)(u.mzw, {
                children: [
                    (0, i.jsx)(u.zxk, {
                        onClick: S,
                        children: I.intl.string(I.t.frE8KC)
                    }),
                    (0, i.jsx)(u.zxk, {
                        look: u.zxk.Looks.LINK,
                        color: (0, d.ap)(a) ? u.zxk.Colors.PRIMARY : u.zxk.Colors.WHITE,
                        onClick: l,
                        children: I.intl.string(I.t.oEAioK)
                    })
                ]
            })
        ]
    });
}
function S(e) {
    let { subscription: t, renewalMutations: n, className: l, analyticsLocation: a } = e,
        [o, c] = s.useState(!1);
    return (0, i.jsxs)('div', {
        className: r()(f.root, l),
        children: [
            (0, i.jsx)(u.P4T, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                className: f.infoIcon
            }),
            (0, i.jsx)('div', {
                className: f.text,
                children: I.intl.format(I.t.ar1cPj, {
                    planName: t.hasExternalPlanChange ? (0, C.zL)(n) : C.ZP.getDisplayName(n.planId),
                    date: t.currentPeriodEnd
                })
            }),
            t.isPurchasedExternally
                ? null
                : (0, i.jsx)(u.eee, {
                      onClick: (e) => {
                          c(!0), e.preventDefault();
                      },
                      className: f.cancelLink,
                      children: I.intl.string(I.t['ETE/oK'])
                  }),
            o
                ? (0, i.jsx)(u.u_l, {
                      renderModal: (e) => {
                          let { transitionState: s } = e;
                          return (0, i.jsx)(T, {
                              subscription: t,
                              renewalMutations: n,
                              transitionState: s,
                              onClose: () => c(!1),
                              analyticsLocation: a
                          });
                      },
                      onCloseRequest: () => c(!1)
                  })
                : null
        ]
    });
}

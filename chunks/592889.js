n.d(t, { Z: () => I }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    m = n(355467),
    h = n(100527),
    g = n(906732),
    _ = n(600164),
    x = n(210887),
    p = n(301766),
    E = n(509545),
    C = n(74538),
    f = n(937615),
    T = n(388032),
    N = n(104489);
function S(e) {
    let { subscription: t, renewalMutations: n, transitionState: s, onClose: r, analyticsLocation: l } = e,
        a = (0, c.e7)([x.Z], () => x.Z.theme),
        { analyticsLocations: S } = (0, g.ZP)(h.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
    async function I() {
        await (0, m.dP)(t, t.planId, S, l), r();
    }
    let b = E.Z.get(t.planId);
    o()(null != b, 'Missing subscriptionPlan');
    let v = (0, C.aS)(t.planId, !1, !1, {
            paymentSourceId: t.paymentSourceId,
            currency: t.currency
        }),
        j = (0, f.og)((0, f.T4)(v.amount, v.currency), b.interval, b.intervalCount);
    return (0, i.jsxs)(u.Y0X, {
        transitionState: s,
        'aria-label': T.intl.string(T.t['E9kB4+']),
        children: [
            (0, i.jsxs)(u.xBx, {
                justify: _.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, i.jsx)(u.vwX, {
                        tag: u.RB0.H4,
                        children: T.intl.string(T.t['E9kB4+'])
                    }),
                    (0, i.jsx)(u.olH, { onClick: r })
                ]
            }),
            (0, i.jsx)(u.hzk, {
                className: N.modalBody,
                children: (0, p.Q0)(t.planId)
                    ? T.intl.format(T.t.GMp54O, {
                          downgradedPlan: C.ZP.getDisplayName(n.planId),
                          existingRate: j
                      })
                    : T.intl.format(T.t['vx/NZ2'], {
                          existingPlan: C.ZP.getDisplayName(t.planId),
                          downgradedPlan: C.ZP.getDisplayName(n.planId),
                          existingRate: j
                      })
            }),
            (0, i.jsxs)(u.mzw, {
                children: [
                    (0, i.jsx)(u.zxk, {
                        onClick: I,
                        children: T.intl.string(T.t.frE8KC)
                    }),
                    (0, i.jsx)(u.zxk, {
                        look: u.zxk.Looks.LINK,
                        color: (0, d.ap)(a) ? u.zxk.Colors.PRIMARY : u.zxk.Colors.WHITE,
                        onClick: r,
                        children: T.intl.string(T.t.oEAioK)
                    })
                ]
            })
        ]
    });
}
function I(e) {
    let { subscription: t, renewalMutations: n, className: r, analyticsLocation: a } = e,
        [o, c] = s.useState(!1);
    return (0, i.jsxs)('div', {
        className: l()(N.root, r),
        children: [
            (0, i.jsx)(u.P4T, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                className: N.infoIcon
            }),
            (0, i.jsx)('div', {
                className: N.text,
                children: T.intl.format(T.t.ar1cPj, {
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
                      className: N.cancelLink,
                      children: T.intl.string(T.t['ETE/oK'])
                  }),
            o
                ? (0, i.jsx)(u.u_l, {
                      renderModal: (e) => {
                          let { transitionState: s } = e;
                          return (0, i.jsx)(S, {
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

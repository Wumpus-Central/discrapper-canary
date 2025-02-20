n.d(t, { Z: () => O }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    m = n(355467),
    g = n(100527),
    p = n(906732),
    h = n(600164),
    f = n(210887),
    b = n(301766),
    N = n(509545),
    x = n(74538),
    _ = n(937615),
    E = n(388032),
    j = n(193209);
function C(e) {
    let { subscription: t, renewalMutations: n, transitionState: i, onClose: s, analyticsLocation: a } = e,
        l = (0, c.e7)([f.Z], () => f.Z.theme),
        { analyticsLocations: C } = (0, p.ZP)(g.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
    async function O() {
        await (0, m.dP)(t, t.planId, C, a), s();
    }
    let v = N.Z.get(t.planId);
    o()(null != v, 'Missing subscriptionPlan');
    let S = (0, x.aS)(t.planId, !1, !1, {
            paymentSourceId: t.paymentSourceId,
            currency: t.currency
        }),
        T = (0, _.og)((0, _.T4)(S.amount, S.currency), v.interval, v.intervalCount);
    return (0, r.jsxs)(u.Y0X, {
        transitionState: i,
        'aria-label': E.NW.string(E.t['E9kB4+']),
        children: [
            (0, r.jsxs)(u.xBx, {
                justify: h.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, r.jsx)(u.vwX, {
                        tag: u.RB0.H4,
                        children: E.NW.string(E.t['E9kB4+'])
                    }),
                    (0, r.jsx)(u.olH, { onClick: s })
                ]
            }),
            (0, r.jsx)(u.hzk, {
                className: j.modalBody,
                children: (0, b.Q0)(t.planId)
                    ? E.NW.format(E.t.GMp54O, {
                          downgradedPlan: x.ZP.getDisplayName(n.planId),
                          existingRate: T
                      })
                    : E.NW.format(E.t['vx/NZ2'], {
                          existingPlan: x.ZP.getDisplayName(t.planId),
                          downgradedPlan: x.ZP.getDisplayName(n.planId),
                          existingRate: T
                      })
            }),
            (0, r.jsxs)(u.mzw, {
                children: [
                    (0, r.jsx)(u.zxk, {
                        onClick: O,
                        children: E.NW.string(E.t.frE8KC)
                    }),
                    (0, r.jsx)(u.zxk, {
                        look: u.zxk.Looks.LINK,
                        color: (0, d.ap)(l) ? u.zxk.Colors.PRIMARY : u.zxk.Colors.WHITE,
                        onClick: s,
                        children: E.NW.string(E.t.oEAioK)
                    })
                ]
            })
        ]
    });
}
function O(e) {
    let { subscription: t, renewalMutations: n, className: s, analyticsLocation: l } = e,
        [o, c] = i.useState(!1);
    return (0, r.jsxs)('div', {
        className: a()(j.root, s),
        children: [
            (0, r.jsx)(u.P4T, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                className: j.infoIcon
            }),
            (0, r.jsx)('div', {
                className: j.text,
                children: E.NW.format(E.t.ar1cPj, {
                    planName: t.hasExternalPlanChange ? (0, x.zL)(n) : x.ZP.getDisplayName(n.planId),
                    date: t.currentPeriodEnd
                })
            }),
            t.isPurchasedExternally
                ? null
                : (0, r.jsx)(u.eee, {
                      onClick: (e) => {
                          c(!0), e.preventDefault();
                      },
                      className: j.cancelLink,
                      children: E.NW.string(E.t['ETE/oK'])
                  }),
            o
                ? (0, r.jsx)(u.u_l, {
                      renderModal: (e) => {
                          let { transitionState: i } = e;
                          return (0, r.jsx)(C, {
                              subscription: t,
                              renewalMutations: n,
                              transitionState: i,
                              onClose: () => c(!1),
                              analyticsLocation: l
                          });
                      },
                      onCloseRequest: () => c(!1)
                  })
                : null
        ]
    });
}

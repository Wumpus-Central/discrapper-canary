n.d(t, { Z: () => v }), n(388685);
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
    h = n(975298),
    f = n(600164),
    _ = n(210887),
    b = n(301766),
    N = n(509545),
    x = n(74538),
    E = n(937615),
    j = n(474936),
    C = n(388032),
    O = n(169000);
function S(e) {
    let { subscription: t, renewalMutations: n, transitionState: i, onClose: s, analyticsLocation: a } = e,
        l = (0, c.e7)([_.Z], () => _.Z.theme),
        { analyticsLocations: h } = (0, p.ZP)(g.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
    async function j() {
        await (0, m.dP)(t, t.planId, h, a), s();
    }
    let S = N.Z.get(t.planId);
    o()(null != S, 'Missing subscriptionPlan');
    let v = (0, x.aS)(t.planId, !1, !1, {
            paymentSourceId: t.paymentSourceId,
            currency: t.currency
        }),
        T = (0, E.og)((0, E.T4)(v.amount, v.currency), S.interval, S.intervalCount);
    return (0, r.jsxs)(u.Y0X, {
        transitionState: i,
        'aria-label': C.NW.string(C.t['E9kB4+']),
        children: [
            (0, r.jsxs)(u.xBx, {
                justify: f.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, r.jsx)(u.vwX, {
                        tag: u.RB0.H4,
                        children: C.NW.string(C.t['E9kB4+'])
                    }),
                    (0, r.jsx)(u.olH, { onClick: s })
                ]
            }),
            (0, r.jsx)(u.hzk, {
                className: O.modalBody,
                children: (0, b.Q0)(t.planId)
                    ? C.NW.format(C.t.GMp54O, {
                          downgradedPlan: x.ZP.getDisplayName(n.planId),
                          existingRate: T
                      })
                    : C.NW.format(C.t['vx/NZ2'], {
                          existingPlan: x.ZP.getDisplayName(t.planId),
                          downgradedPlan: x.ZP.getDisplayName(n.planId),
                          existingRate: T
                      })
            }),
            (0, r.jsxs)(u.mzw, {
                children: [
                    (0, r.jsx)(u.zxk, {
                        onClick: j,
                        children: C.NW.string(C.t.frE8KC)
                    }),
                    (0, r.jsx)(u.zxk, {
                        look: u.zxk.Looks.LINK,
                        color: (0, d.ap)(l) ? u.zxk.Colors.PRIMARY : u.zxk.Colors.WHITE,
                        onClick: s,
                        children: C.NW.string(C.t.oEAioK)
                    })
                ]
            })
        ]
    });
}
function v(e) {
    let { subscription: t, renewalMutations: n, className: s, analyticsLocation: l } = e,
        [o, c] = i.useState(!1),
        d = (0, h.Z)(),
        m = t.currentPeriodEnd;
    return (
        d.fractionalState === j.a$.FP_SUB_PAUSED && (m = d.endsAt.toDate()),
        (0, r.jsxs)('div', {
            className: a()(O.root, s),
            children: [
                (0, r.jsx)(u.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: O.infoIcon
                }),
                (0, r.jsx)('div', {
                    className: O.text,
                    children: C.NW.format(C.t.ar1cPj, {
                        planName: t.hasExternalPlanChange ? (0, x.zL)(n) : x.ZP.getDisplayName(n.planId),
                        date: m
                    })
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, r.jsx)(u.eee, {
                          onClick: (e) => {
                              c(!0), e.preventDefault();
                          },
                          className: O.cancelLink,
                          children: C.NW.string(C.t['ETE/oK'])
                      }),
                o
                    ? (0, r.jsx)(u.u_l, {
                          renderModal: (e) => {
                              let { transitionState: i } = e;
                              return (0, r.jsx)(S, {
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
        })
    );
}

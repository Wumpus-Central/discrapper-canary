(n.d(t, { Z: () => T }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    m = n(355467),
    p = n(100527),
    g = n(906732),
    h = n(975298),
    f = n(600164),
    b = n(210887),
    x = n(301766),
    _ = n(509545),
    E = n(74538),
    j = n(937615),
    O = n(474936),
    C = n(388032),
    S = n(169000);
function v(e) {
    let { subscription: t, renewalMutations: n, transitionState: r, onClose: s, analyticsLocation: l } = e,
        a = (0, c.e7)([b.Z], () => b.Z.theme),
        { analyticsLocations: h } = (0, g.ZP)(p.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL),
        O = _.Z.get(t.planId);
    o()(null != O, 'Missing subscriptionPlan');
    let v = (0, E.aS)(t.planId, !1, !1, {
            paymentSourceId: t.paymentSourceId,
            currency: t.currency
        }),
        T = (0, j.og)((0, j.T4)(v.amount, v.currency), O.interval, O.intervalCount);
    async function N() {
        (await (0, m.dP)(
            t,
            t.planId,
            {
                amount: 0,
                currency: v.currency
            },
            (0, E.UX)(t.items, v.currency, t.paymentSourceId),
            h,
            l
        ),
            s());
    }
    return (0, i.jsxs)(u.Y0X, {
        transitionState: r,
        'aria-label': C.intl.string(C.t['E9kB4+']),
        parentComponent: 'SubscriptionRenewalMutationNotice',
        children: [
            (0, i.jsxs)(u.xBx, {
                justify: f.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, i.jsx)(u.vwX, {
                        tag: u.RB0.H4,
                        children: C.intl.string(C.t['E9kB4+'])
                    }),
                    (0, i.jsx)(u.olH, { onClick: s })
                ]
            }),
            (0, i.jsx)(u.hzk, {
                className: S.modalBody,
                children: (0, x.Q0)(t.planId)
                    ? C.intl.format(C.t.GMp54O, {
                          downgradedPlan: E.ZP.getDisplayName(n.planId),
                          existingRate: T
                      })
                    : C.intl.format(C.t['vx/NZ2'], {
                          existingPlan: E.ZP.getDisplayName(t.planId),
                          downgradedPlan: E.ZP.getDisplayName(n.planId),
                          existingRate: T
                      })
            }),
            (0, i.jsxs)(u.mzw, {
                children: [
                    (0, i.jsx)(u.zxk, {
                        onClick: N,
                        children: C.intl.string(C.t.frE8KC)
                    }),
                    (0, i.jsx)(u.zxk, {
                        look: u.zxk.Looks.LINK,
                        color: (0, d.ap)(a) ? u.zxk.Colors.PRIMARY : u.zxk.Colors.WHITE,
                        onClick: s,
                        children: C.intl.string(C.t.oEAioK)
                    })
                ]
            })
        ]
    });
}
function T(e) {
    let { subscription: t, renewalMutations: n, className: s, analyticsLocation: a } = e,
        [o, c] = r.useState(!1),
        d = (0, h.Z)(),
        m = t.currentPeriodEnd;
    return (
        d.fractionalState === O.a$.FP_SUB_PAUSED && (m = d.endsAt.toDate()),
        (0, i.jsxs)('div', {
            className: l()(S.root, s),
            children: [
                (0, i.jsx)(u.P4T, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: S.infoIcon
                }),
                (0, i.jsx)('div', {
                    className: S.text,
                    children: C.intl.format(C.t.ar1cPj, {
                        planName: t.hasExternalPlanChange ? (0, E.zL)(n) : E.ZP.getDisplayName(n.planId),
                        date: m
                    })
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, i.jsx)(u.eee, {
                          onClick: (e) => {
                              (c(!0), e.preventDefault());
                          },
                          className: S.cancelLink,
                          children: C.intl.string(C.t['ETE/oK'])
                      }),
                o
                    ? (0, i.jsx)(u.u_l, {
                          renderModal: (e) => {
                              let { transitionState: r } = e;
                              return (0, i.jsx)(v, {
                                  subscription: t,
                                  renewalMutations: n,
                                  transitionState: r,
                                  onClose: () => c(!1),
                                  analyticsLocation: a
                              });
                          },
                          onCloseRequest: () => c(!1)
                      })
                    : null
            ]
        })
    );
}

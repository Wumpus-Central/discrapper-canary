(n.d(t, { Z: () => N }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    d = n(780384),
    u = n(755721),
    m = n(481060),
    p = n(355467),
    g = n(100527),
    h = n(906732),
    f = n(975298),
    b = n(600164),
    x = n(210887),
    _ = n(301766),
    j = n(509545),
    O = n(74538),
    C = n(937615),
    E = n(474936),
    v = n(388032),
    S = n(169000);
function T(e) {
    let { subscription: t, renewalMutations: n, transitionState: r, onClose: s, analyticsLocation: a } = e,
        l = (0, c.e7)([x.Z], () => x.Z.theme),
        { analyticsLocations: f } = (0, h.ZP)(g.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL),
        E = j.Z.get(t.planId);
    o()(null != E, 'Missing subscriptionPlan');
    let T = (0, O.aS)(t.planId, !1, !1, {
            paymentSourceId: t.paymentSourceId,
            currency: t.currency
        }),
        N = (0, C.og)((0, C.T4)(T.amount, T.currency), E.interval, E.intervalCount);
    async function I() {
        (await (0, p.dP)(
            t,
            t.planId,
            {
                amount: 0,
                currency: T.currency
            },
            (0, O.UX)(t.items, T.currency, t.paymentSourceId),
            f,
            a
        ),
            s());
    }
    return (0, i.jsxs)(m.Y0X, {
        transitionState: r,
        'aria-label': v.intl.string(v.t['E9kB4+']),
        parentComponent: 'SubscriptionRenewalMutationNotice',
        children: [
            (0, i.jsxs)(m.xBx, {
                justify: b.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, i.jsx)(m.vwX, {
                        tag: m.RB0.H4,
                        children: v.intl.string(v.t['E9kB4+'])
                    }),
                    (0, i.jsx)(m.olH, { onClick: s })
                ]
            }),
            (0, i.jsx)(m.hzk, {
                className: S.modalBody,
                children: (0, _.Q0)(t.planId)
                    ? v.intl.format(v.t.GMp54O, {
                          downgradedPlan: O.ZP.getDisplayName(n.planId),
                          existingRate: N
                      })
                    : v.intl.format(v.t['vx/NZ2'], {
                          existingPlan: O.ZP.getDisplayName(t.planId),
                          downgradedPlan: O.ZP.getDisplayName(n.planId),
                          existingRate: N
                      })
            }),
            (0, i.jsxs)(m.mzw, {
                children: [
                    (0, i.jsx)(m.zxk, {
                        variant: 'primary',
                        text: v.intl.string(v.t.frE8KC),
                        onClick: I
                    }),
                    (0, i.jsx)(u.zx, {
                        look: u.zx.Looks.LINK,
                        color: (0, d.ap)(l) ? u.zx.Colors.PRIMARY : u.zx.Colors.WHITE,
                        onClick: s,
                        children: v.intl.string(v.t.oEAioK)
                    })
                ]
            })
        ]
    });
}
function N(e) {
    let { subscription: t, renewalMutations: n, className: s, analyticsLocation: l } = e,
        [o, c] = r.useState(!1),
        d = (0, f.Z)(),
        u = t.currentPeriodEnd;
    return (
        d.fractionalState === E.a$.FP_SUB_PAUSED && (u = d.endsAt.toDate()),
        (0, i.jsxs)('div', {
            className: a()(S.root, s),
            children: [
                (0, i.jsx)(m.Mgn, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: S.infoIcon
                }),
                (0, i.jsx)('div', {
                    className: S.text,
                    children: v.intl.format(v.t.ar1cPj, {
                        planName: t.hasExternalPlanChange ? (0, O.zL)(n) : O.ZP.getDisplayName(n.planId),
                        date: u
                    })
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, i.jsx)(m.eee, {
                          onClick: (e) => {
                              (c(!0), e.preventDefault());
                          },
                          className: S.cancelLink,
                          children: v.intl.string(v.t['ETE/oK'])
                      }),
                o
                    ? (0, i.jsx)(m.u_l, {
                          renderModal: (e) => {
                              let { transitionState: r } = e;
                              return (0, i.jsx)(T, {
                                  subscription: t,
                                  renewalMutations: n,
                                  transitionState: r,
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

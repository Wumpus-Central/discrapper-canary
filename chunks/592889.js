n.d(t, { Z: () => A }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(780384),
    d = n(481060),
    f = n(355467),
    _ = n(100527),
    p = n(906732),
    h = n(975298),
    m = n(600164),
    g = n(210887),
    E = n(301766),
    b = n(509545),
    y = n(74538),
    O = n(937615),
    v = n(474936),
    I = n(388032),
    T = n(159240);
function S(e) {
    let { subscription: t, renewalMutations: n, transitionState: i, onClose: a, analyticsLocation: o } = e,
        s = (0, c.e7)([g.Z], () => g.Z.theme),
        { analyticsLocations: h } = (0, p.ZP)(_.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL),
        v = b.Z.get(t.planId);
    l()(null != v, "Missing subscriptionPlan");
    let S = (0, y.aS)(t.planId, !1, !1, {
            paymentSourceId: t.paymentSourceId,
            currency: t.currency,
        }),
        A = (0, O.og)((0, O.T4)(S.amount, S.currency), v.interval, v.intervalCount);
    async function C() {
        await (0, f.dP)(
            t,
            t.planId,
            {
                amount: 0,
                currency: S.currency,
            },
            (0, y.UX)(t.items, S.currency, t.paymentSourceId),
            h,
            o,
        ),
            a();
    }
    return (0, r.jsxs)(d.Y0X, {
        transitionState: i,
        "aria-label": I.intl.string(I.t["E9kB4+"]),
        parentComponent: "SubscriptionRenewalMutationNotice",
        children: [
            (0, r.jsxs)(d.xBx, {
                justify: m.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, r.jsx)(d.vwX, {
                        tag: d.RB0.H4,
                        children: I.intl.string(I.t["E9kB4+"]),
                    }),
                    (0, r.jsx)(d.olH, { onClick: a }),
                ],
            }),
            (0, r.jsx)(d.hzk, {
                className: T.modalBody,
                children: (0, E.Q0)(t.planId)
                    ? I.intl.format(I.t.GMp54O, {
                          downgradedPlan: y.ZP.getDisplayName(n.planId),
                          existingRate: A,
                      })
                    : I.intl.format(I.t["vx/NZ2"], {
                          existingPlan: y.ZP.getDisplayName(t.planId),
                          downgradedPlan: y.ZP.getDisplayName(n.planId),
                          existingRate: A,
                      }),
            }),
            (0, r.jsx)(d.mzw, {
                children: (0, r.jsxs)(d.hE2, {
                    direction: "horizontal-reverse",
                    align: "center",
                    children: [
                        (0, r.jsx)(d.zxk, {
                            variant: "primary",
                            text: I.intl.string(I.t.frE8KC),
                            onClick: C,
                        }),
                        (0, r.jsx)(d.Avr, {
                            onClick: a,
                            variant: (0, u.ap)(s) ? "primary" : "always-white",
                            text: I.intl.string(I.t.oEAioK),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function A(e) {
    let { subscription: t, renewalMutations: n, className: a, analyticsLocation: s } = e,
        [l, c] = i.useState(!1),
        u = (0, h.Z)(),
        f = t.currentPeriodEnd;
    return (
        u.fractionalState === v.a$.FP_SUB_PAUSED && (f = u.endsAt.toDate()),
        (0, r.jsxs)("div", {
            className: o()(T.root, a),
            children: [
                (0, r.jsx)(d.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: T.infoIcon,
                }),
                (0, r.jsx)("div", {
                    className: T.text,
                    children: I.intl.format(I.t.ar1cPj, {
                        planName: t.hasExternalPlanChange ? (0, y.zL)(n) : y.ZP.getDisplayName(n.planId),
                        date: f,
                    }),
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, r.jsx)(d.eee, {
                          onClick: (e) => {
                              c(!0), e.preventDefault();
                          },
                          className: T.cancelLink,
                          children: I.intl.string(I.t["ETE/oK"]),
                      }),
                l
                    ? (0, r.jsx)(d.u_l, {
                          renderModal: (e) => {
                              let { transitionState: i } = e;
                              return (0, r.jsx)(S, {
                                  subscription: t,
                                  renewalMutations: n,
                                  transitionState: i,
                                  onClose: () => c(!1),
                                  analyticsLocation: s,
                              });
                          },
                          onCloseRequest: () => c(!1),
                      })
                    : null,
            ],
        })
    );
}

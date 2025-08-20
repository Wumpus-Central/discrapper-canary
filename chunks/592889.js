n.d(t, { Z: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(780384),
    d = n(755721),
    f = n(481060),
    _ = n(355467),
    p = n(100527),
    h = n(906732),
    m = n(975298),
    g = n(600164),
    E = n(210887),
    b = n(301766),
    y = n(509545),
    O = n(74538),
    v = n(937615),
    I = n(474936),
    T = n(388032),
    S = n(159240);
function A(e) {
    let { subscription: t, renewalMutations: n, transitionState: i, onClose: a, analyticsLocation: o } = e,
        s = (0, c.e7)([E.Z], () => E.Z.theme),
        { analyticsLocations: m } = (0, h.ZP)(p.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL),
        I = y.Z.get(t.planId);
    l()(null != I, "Missing subscriptionPlan");
    let A = (0, O.aS)(t.planId, !1, !1, {
            paymentSourceId: t.paymentSourceId,
            currency: t.currency,
        }),
        C = (0, v.og)((0, v.T4)(A.amount, A.currency), I.interval, I.intervalCount);
    async function N() {
        await (0, _.dP)(
            t,
            t.planId,
            {
                amount: 0,
                currency: A.currency,
            },
            (0, O.UX)(t.items, A.currency, t.paymentSourceId),
            m,
            o,
        ),
            a();
    }
    return (0, r.jsxs)(f.Y0X, {
        transitionState: i,
        "aria-label": T.intl.string(T.t["E9kB4+"]),
        parentComponent: "SubscriptionRenewalMutationNotice",
        children: [
            (0, r.jsxs)(f.xBx, {
                justify: g.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, r.jsx)(f.vwX, {
                        tag: f.RB0.H4,
                        children: T.intl.string(T.t["E9kB4+"]),
                    }),
                    (0, r.jsx)(f.olH, { onClick: a }),
                ],
            }),
            (0, r.jsx)(f.hzk, {
                className: S.modalBody,
                children: (0, b.Q0)(t.planId)
                    ? T.intl.format(T.t.GMp54O, {
                          downgradedPlan: O.ZP.getDisplayName(n.planId),
                          existingRate: C,
                      })
                    : T.intl.format(T.t["vx/NZ2"], {
                          existingPlan: O.ZP.getDisplayName(t.planId),
                          downgradedPlan: O.ZP.getDisplayName(n.planId),
                          existingRate: C,
                      }),
            }),
            (0, r.jsxs)(f.mzw, {
                children: [
                    (0, r.jsx)(f.zxk, {
                        variant: "primary",
                        text: T.intl.string(T.t.frE8KC),
                        onClick: N,
                    }),
                    (0, r.jsx)(d.zx, {
                        look: d.zx.Looks.LINK,
                        color: (0, u.ap)(s) ? d.zx.Colors.PRIMARY : d.zx.Colors.WHITE,
                        onClick: a,
                        children: T.intl.string(T.t.oEAioK),
                    }),
                ],
            }),
        ],
    });
}
function C(e) {
    let { subscription: t, renewalMutations: n, className: a, analyticsLocation: s } = e,
        [l, c] = i.useState(!1),
        u = (0, m.Z)(),
        d = t.currentPeriodEnd;
    return (
        u.fractionalState === I.a$.FP_SUB_PAUSED && (d = u.endsAt.toDate()),
        (0, r.jsxs)("div", {
            className: o()(S.root, a),
            children: [
                (0, r.jsx)(f.Mgn, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: S.infoIcon,
                }),
                (0, r.jsx)("div", {
                    className: S.text,
                    children: T.intl.format(T.t.ar1cPj, {
                        planName: t.hasExternalPlanChange ? (0, O.zL)(n) : O.ZP.getDisplayName(n.planId),
                        date: d,
                    }),
                }),
                t.isPurchasedExternally
                    ? null
                    : (0, r.jsx)(f.eee, {
                          onClick: (e) => {
                              c(!0), e.preventDefault();
                          },
                          className: S.cancelLink,
                          children: T.intl.string(T.t["ETE/oK"]),
                      }),
                l
                    ? (0, r.jsx)(f.u_l, {
                          renderModal: (e) => {
                              let { transitionState: i } = e;
                              return (0, r.jsx)(A, {
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

a.d(n, { default: () => m });
var i = a(54381);
a(473749);
var e = a(512722),
    r = a.n(e),
    l = a(793030),
    c = a(355467),
    s = a(100527),
    o = a(906732),
    d = a(301766),
    u = a(509545),
    p = a(74538),
    g = a(937615),
    y = a(388032);
function m(t) {
    let { subscription: n, renewalMutations: a, transitionState: e, onClose: m, analyticsLocation: I } = t,
        { analyticsLocations: C } = (0, o.ZP)(s.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL),
        P = u.Z.get(n.planId);
    r()(null != P, "Missing subscriptionPlan");
    let k = (0, p.aS)(n.planId, !1, !1, {
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
        }),
        f = (0, g.og)((0, g.T4)(k.amount, k.currency), P.interval, P.intervalCount);
    async function v() {
        await (0, c.dP)(
            n,
            n.planId,
            {
                amount: 0,
                currency: k.currency,
            },
            (0, p.UX)(n.items, k.currency, n.paymentSourceId),
            C,
            I,
        ),
            await m();
    }
    return (0, i.jsx)(l.Modal, {
        "aria-label": y.intl.string(y.t.E9kB45),
        title: y.intl.string(y.t.E9kB45),
        subtitle: (0, d.Q0)(n.planId)
            ? y.intl.format(y.t.GMp54C, {
                  downgradedPlan: p.ZP.getDisplayName(a.planId),
                  existingRate: f,
              })
            : y.intl.format(y.t["vx/NZ0"], {
                  existingPlan: p.ZP.getDisplayName(n.planId),
                  downgradedPlan: p.ZP.getDisplayName(a.planId),
                  existingRate: f,
              }),
        actions: [
            {
                text: y.intl.string(y.t.oEAioF),
                onClick: m,
                variant: "secondary",
            },
            {
                text: y.intl.string(y.t.frE8KO),
                onClick: v,
                variant: "primary",
            },
        ],
        onClose: m,
        transitionState: e,
    });
}

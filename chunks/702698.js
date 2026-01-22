a.d(n, { default: () => m });
var i = a(627968);
a(64700);
var e = a(284009),
    r = a.n(e),
    l = a(158954),
    s = a(384904),
    c = a(793574),
    o = a(688810),
    d = a(832946),
    p = a(97352),
    u = a(927578),
    y = a(580630),
    g = a(985018);
function m(t) {
    let { subscription: n, renewalMutations: a, transitionState: e, onClose: m, analyticsLocation: C } = t,
        { analyticsLocations: I } = (0, o.Ay)(c.A.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL),
        A = p.A.get(n.planId);
    r()(null != A, "Missing subscriptionPlan");
    let k = (0, u.y8)(n.planId, !1, !1, {
            paymentSourceId: n.paymentSourceId,
            currency: n.currency,
        }),
        v = (0, y.CE)((0, y.$g)(k.amount, k.currency), A.interval, A.intervalCount);
    async function x() {
        await (0, s.ge)(
            n,
            n.planId,
            {
                amount: 0,
                currency: k.currency,
            },
            (0, u.UC)(n.items, k.currency, n.paymentSourceId),
            I,
            C,
        ),
            await m();
    }
    return (0, i.jsx)(l.Modal, {
        "aria-label": g.intl.string(g.t.E9kB45),
        title: g.intl.string(g.t.E9kB45),
        subtitle: (0, d.m1)(n.planId)
            ? g.intl.format(g.t.GMp54C, {
                  downgradedPlan: u.Ay.getDisplayName(a.planId),
                  existingRate: v,
              })
            : g.intl.format(g.t["vx/NZ0"], {
                  existingPlan: u.Ay.getDisplayName(n.planId),
                  downgradedPlan: u.Ay.getDisplayName(a.planId),
                  existingRate: v,
              }),
        actions: [
            {
                text: g.intl.string(g.t.oEAioF),
                onClick: m,
                variant: "secondary",
            },
            {
                text: g.intl.string(g.t.frE8KO),
                onClick: x,
                variant: "primary",
            },
        ],
        onClose: m,
        transitionState: e,
    });
}

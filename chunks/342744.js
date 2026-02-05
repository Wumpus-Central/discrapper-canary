n.d(t, { default: () => f });
var i = n(627968),
    s = n(64700),
    r = n(284009),
    a = n.n(r),
    l = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(384904),
    u = n(923408),
    _ = n(198982),
    m = n(136857),
    A = n(793574),
    g = n(688810),
    E = n(253390),
    h = n(166403),
    p = n(927578),
    C = n(985018),
    x = n(359294);
async function T(e, t, n, i) {
    let s = (0, p.aE)(e, t);
    await (0, u.Ey)(n),
        await (0, d.nV)(
            e,
            { items: s },
            { amount: 0, currency: e.currency },
            (0, p.UC)(s, e.currency, e.paymentSourceId),
            i,
        );
}
function I(e) {
    let { errorMsg: t } = e;
    return (0, i.jsxs)("div", {
        className: x.rf,
        children: [
            null !== t &&
                (0, i.jsx)("div", { className: x.z3, children: (0, i.jsx)(c.wx6, { type: "critical", children: t }) }),
            (0, i.jsx)("div", { children: C.intl.string(C.t.DY2CXs) }),
        ],
    });
}
function S() {
    return (0, i.jsxs)("div", {
        className: x.rf,
        children: [(0, i.jsx)("div", { className: x.dk }), (0, i.jsx)("div", { children: C.intl.string(C.t.G27uHe) })],
    });
}
function f(e) {
    let { guildBoostSlotId: t, transitionState: n, onClose: r } = e,
        { analyticsLocations: u } = (0, g.Ay)(A.A.GUILD_BOOST_UNCANCELLATION_MODAL);
    s.useEffect(() => {
        h.A.hasFetchedSubscriptions() || (0, d.hP)();
    }, []);
    let x = (0, o.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        [f, N] = s.useState(1),
        [b, R] = s.useState(!1),
        [v, O] = s.useState(null),
        j = s.useCallback(async () => {
            if (null != x)
                try {
                    R(!0), O(null);
                    let e = (0, E.v)(x, 1);
                    a()(
                        (0, p.bx)(e) <= (0, p.bx)(x.additionalPlans),
                        "Uncanceling should not increase the number of guild subscriptions",
                    ),
                        await T(x, e, t, u),
                        N(2);
                } catch (t) {
                    let e = t instanceof _.Ey ? t : new _.Ey(t, t.code);
                    O(C.intl.string(e.code === m.tG.BILLING_PAUSE_INVALID_UPDATE ? C.t.dq4vq7 : C.t["5mlOCW"])), R(!1);
                }
        }, [x, t, u]);
    return (0, i.jsx)(g.f5, {
        value: u,
        children: (0, i.jsx)(l.Modal, {
            transitionState: n,
            onClose: async () => await r(),
            size: "sm",
            title: (() => {
                switch (f) {
                    case 1:
                        return C.intl.string(C.t.l52ih2);
                    case 2:
                        return C.intl.string(C.t.H9QUAB);
                    default:
                        return "";
                }
            })(),
            actions: (() => {
                switch (f) {
                    case 1:
                        return [
                            { variant: "secondary", text: C.intl.string(C.t.oEAioF), disabled: b, onClick: r },
                            { variant: "primary", text: C.intl.string(C.t.etZP4B), loading: b, onClick: j },
                        ];
                    case 2:
                        return [{ variant: "primary", text: C.intl.string(C.t.BddRzS), onClick: r }];
                    default:
                        return [];
                }
            })(),
            children: (() => {
                if (null == x) return (0, i.jsx)(c.y$y, {});
                switch (f) {
                    case 1:
                        return (0, i.jsx)(I, { errorMsg: v });
                    case 2:
                        return (0, i.jsx)(S, {});
                    default:
                        throw Error(`Unexpected step: ${f}`);
                }
            })(),
        }),
    });
}

i.d(t, { default: () => C });
var n = i(627968),
    s = i(64700),
    l = i(284009),
    r = i.n(l),
    a = i(189213),
    o = i(17928),
    u = i(683071),
    d = i(289873),
    c = i(820739),
    g = i(913122),
    m = i(136857),
    A = i(793574),
    h = i(688810),
    E = i(753390),
    S = i(253390),
    T = i(166403),
    x = i(428262),
    p = i(375708),
    f = i(366793);
async function N(e, t, i, n) {
    let s = (0, x.aE)(e, t);
    await (0, c.Ey)(i),
        await (0, E.nV)(
            e,
            { items: s },
            { amount: 0, currency: e.currency },
            (0, x.UC)(s, e.currency, e.paymentSourceId),
            n,
        );
}
function _(e) {
    let { errorMsg: t } = e;
    return (0, n.jsxs)("div", {
        className: f.rf,
        children: [
            null !== t &&
                (0, n.jsx)("div", { className: f.z3, children: (0, n.jsx)(u.w, { type: "critical", children: t }) }),
            (0, n.jsx)("div", { children: p.intl.string(p.t.DY2CXs) }),
        ],
    });
}
function I() {
    return (0, n.jsxs)("div", {
        className: f.rf,
        children: [(0, n.jsx)("div", { className: f.dk }), (0, n.jsx)("div", { children: p.intl.string(p.t.G27uHe) })],
    });
}
function C(e) {
    let { guildBoostSlotId: t, transitionState: i, onClose: l } = e,
        { analyticsLocations: u } = (0, h.Ay)(A.A.GUILD_BOOST_UNCANCELLATION_MODAL);
    s.useEffect(() => {
        T.A.hasFetchedSubscriptions() || (0, E.hP)();
    }, []);
    let c = (0, o.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        [f, C] = s.useState(1),
        [b, y] = s.useState(!1),
        [v, j] = s.useState(null),
        O = s.useCallback(async () => {
            if (null != c)
                try {
                    y(!0), j(null);
                    let e = (0, S.v)(c, 1);
                    r()(
                        (0, x.bx)(e) <= (0, x.bx)(c.additionalPlans),
                        "Uncanceling should not increase the number of guild subscriptions",
                    ),
                        await N(c, e, t, u),
                        C(2);
                } catch (t) {
                    let e = t instanceof g.Ey ? t : new g.Ey(t, t.code);
                    j(p.intl.string(e.code === m.tG.BILLING_PAUSE_INVALID_UPDATE ? p.t.dq4vq7 : p.t["5mlOCW"])), y(!1);
                }
        }, [c, t, u]);
    return (0, n.jsx)(h.f5, {
        value: u,
        children: (0, n.jsx)(a.Modal, {
            transitionState: i,
            onClose: async () => await l(),
            size: "sm",
            title: (() => {
                switch (f) {
                    case 1:
                        return p.intl.string(p.t.l52ih2);
                    case 2:
                        return p.intl.string(p.t.H9QUAB);
                    default:
                        return "";
                }
            })(),
            actions: (() => {
                switch (f) {
                    case 1:
                        return [
                            { variant: "secondary", text: p.intl.string(p.t.oEAioF), disabled: b, onClick: l },
                            { variant: "primary", text: p.intl.string(p.t.etZP4B), loading: b, onClick: O },
                        ];
                    case 2:
                        return [{ variant: "primary", text: p.intl.string(p.t.BddRzS), onClick: l }];
                    default:
                        return [];
                }
            })(),
            children: (() => {
                if (null == c) return (0, n.jsx)(d.y, {});
                switch (f) {
                    case 1:
                        return (0, n.jsx)(_, { errorMsg: v });
                    case 2:
                        return (0, n.jsx)(I, {});
                    default:
                        throw Error(`Unexpected step: ${f}`);
                }
            })(),
        }),
    });
}

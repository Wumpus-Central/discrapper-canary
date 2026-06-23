i.d(t, { default: () => v });
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
    p = i(682502),
    f = i(816571),
    N = i(375708),
    _ = i(366793);
async function I(e, t, i, n) {
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
function C(e) {
    let { errorMsg: t } = e;
    return (0, n.jsxs)("div", {
        className: _.rf,
        children: [
            null !== t &&
                (0, n.jsx)("div", { className: _.z3, children: (0, n.jsx)(u.w, { type: "critical", children: t }) }),
            (0, n.jsx)("div", { children: N.intl.string(N.t.DY2CXs) }),
        ],
    });
}
function b() {
    return (0, n.jsxs)("div", {
        className: _.rf,
        children: [(0, n.jsx)("div", { className: _.dk }), (0, n.jsx)("div", { children: N.intl.string(N.t.G27uHe) })],
    });
}
function y(e) {
    let { step: t, errorMsg: i, premiumSubscription: s } = e;
    if (null == s) return (0, n.jsx)(d.y, {});
    switch (t) {
        case 1:
            return (0, n.jsx)(C, { errorMsg: i });
        case 2:
            return (0, n.jsx)(b, {});
        default:
            throw new p.f({ message: `Unexpected step: ${t}` });
    }
}
function v(e) {
    let { guildBoostSlotId: t, transitionState: i, onClose: l } = e,
        { analyticsLocations: u } = (0, h.Ay)(A.A.GUILD_BOOST_UNCANCELLATION_MODAL);
    s.useEffect(() => {
        T.A.hasFetchedSubscriptions() || (0, E.hP)();
    }, []);
    let d = (0, o.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        [c, p] = s.useState(1),
        [_, C] = s.useState(!1),
        [b, v] = s.useState(null),
        j = s.useCallback(async () => {
            if (null != d)
                try {
                    C(!0), v(null);
                    let e = (0, S.v)(d, 1);
                    r()(
                        (0, x.bx)(e) <= (0, x.bx)(d.additionalPlans),
                        "Uncanceling should not increase the number of guild subscriptions",
                    ),
                        await I(d, e, t, u),
                        p(2);
                } catch (t) {
                    let e = t instanceof g.Ey ? t : new g.Ey(t, t.code);
                    v(N.intl.string(e.code === m.tG.BILLING_PAUSE_INVALID_UPDATE ? N.t.dq4vq7 : N.t["5mlOCW"])), C(!1);
                }
        }, [d, t, u]);
    return (0, n.jsx)(h.f5, {
        value: u,
        children: (0, n.jsx)(a.Modal, {
            transitionState: i,
            onClose: async () => await l(),
            size: "sm",
            title: (function () {
                switch (c) {
                    case 1:
                        return N.intl.string(N.t.l52ih2);
                    case 2:
                        return N.intl.string(N.t.H9QUAB);
                    default:
                        return "";
                }
            })(),
            actions: (function () {
                switch (c) {
                    case 1:
                        return [
                            { variant: "secondary", text: N.intl.string(N.t.oEAioF), disabled: _, onClick: l },
                            { variant: "primary", text: N.intl.string(N.t.etZP4B), loading: _, onClick: j },
                        ];
                    case 2:
                        return [{ variant: "primary", text: N.intl.string(N.t.BddRzS), onClick: l }];
                    default:
                        return [];
                }
            })(),
            children: (0, n.jsx)(f.d, {
                errorHandlingBehavior: "close-and-alert",
                guildBoostSlotId: t,
                children: (0, n.jsx)(y, { step: c, errorMsg: b, premiumSubscription: d }),
            }),
        }),
    });
}

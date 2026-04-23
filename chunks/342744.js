n.d(t, { default: () => C });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(189213),
    o = n(17928),
    d = n(683071),
    u = n(289873),
    c = n(820739),
    g = n(845584),
    _ = n(136857),
    m = n(793574),
    h = n(688810),
    A = n(323082),
    p = n(253390),
    E = n(166403),
    T = n(927578),
    S = n(985018),
    x = n(366793);
async function f(e, t, n, i) {
    let l = (0, T.aE)(e, t);
    await (0, c.Ey)(n),
        await (0, A.nV)(
            e,
            { items: l },
            { amount: 0, currency: e.currency },
            (0, T.UC)(l, e.currency, e.paymentSourceId),
            i,
        );
}
function b(e) {
    let { errorMsg: t } = e;
    return (0, i.jsxs)("div", {
        className: x.rf,
        children: [
            null !== t &&
                (0, i.jsx)("div", { className: x.z3, children: (0, i.jsx)(d.w, { type: "critical", children: t }) }),
            (0, i.jsx)("div", { children: S.intl.string(S.t.DY2CXs) }),
        ],
    });
}
function N() {
    return (0, i.jsxs)("div", {
        className: x.rf,
        children: [(0, i.jsx)("div", { className: x.dk }), (0, i.jsx)("div", { children: S.intl.string(S.t.G27uHe) })],
    });
}
function C(e) {
    let { guildBoostSlotId: t, transitionState: n, onClose: s } = e,
        { analyticsLocations: d } = (0, h.Ay)(m.A.GUILD_BOOST_UNCANCELLATION_MODAL);
    l.useEffect(() => {
        E.A.hasFetchedSubscriptions() || (0, A.hP)();
    }, []);
    let c = (0, o.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        [x, C] = l.useState(1),
        [I, v] = l.useState(!1),
        [y, j] = l.useState(null),
        O = l.useCallback(async () => {
            if (null != c)
                try {
                    v(!0), j(null);
                    let e = (0, p.v)(c, 1);
                    a()(
                        (0, T.bx)(e) <= (0, T.bx)(c.additionalPlans),
                        "Uncanceling should not increase the number of guild subscriptions",
                    ),
                        await f(c, e, t, d),
                        C(2);
                } catch (t) {
                    let e = t instanceof g.Ey ? t : new g.Ey(t, t.code);
                    j(S.intl.string(e.code === _.tG.BILLING_PAUSE_INVALID_UPDATE ? S.t.dq4vq7 : S.t["5mlOCW"])), v(!1);
                }
        }, [c, t, d]);
    return (0, i.jsx)(h.f5, {
        value: d,
        children: (0, i.jsx)(r.Modal, {
            transitionState: n,
            onClose: async () => await s(),
            size: "sm",
            title: (() => {
                switch (x) {
                    case 1:
                        return S.intl.string(S.t.l52ih2);
                    case 2:
                        return S.intl.string(S.t.H9QUAB);
                    default:
                        return "";
                }
            })(),
            actions: (() => {
                switch (x) {
                    case 1:
                        return [
                            { variant: "secondary", text: S.intl.string(S.t.oEAioF), disabled: I, onClick: s },
                            { variant: "primary", text: S.intl.string(S.t.etZP4B), loading: I, onClick: O },
                        ];
                    case 2:
                        return [{ variant: "primary", text: S.intl.string(S.t.BddRzS), onClick: s }];
                    default:
                        return [];
                }
            })(),
            children: (() => {
                if (null == c) return (0, i.jsx)(u.y, {});
                switch (x) {
                    case 1:
                        return (0, i.jsx)(b, { errorMsg: y });
                    case 2:
                        return (0, i.jsx)(N, {});
                    default:
                        throw Error(`Unexpected step: ${x}`);
                }
            })(),
        }),
    });
}

n.d(t, { default: () => v });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(189213),
    o = n(311907),
    d = n(683071),
    u = n(289873),
    c = n(923408),
    g = n(198982),
    m = n(136857),
    _ = n(793574),
    A = n(688810),
    h = n(323082),
    p = n(253390),
    x = n(166403),
    E = n(927578),
    T = n(985018),
    S = n(366793);
async function f(e, t, n, i) {
    let s = (0, E.aE)(e, t);
    await (0, c.Ey)(n),
        await (0, h.nV)(
            e,
            { items: s },
            { amount: 0, currency: e.currency },
            (0, E.UC)(s, e.currency, e.paymentSourceId),
            i,
        );
}
function b(e) {
    let { errorMsg: t } = e;
    return (0, i.jsxs)("div", {
        className: S.rf,
        children: [
            null !== t &&
                (0, i.jsx)("div", { className: S.z3, children: (0, i.jsx)(d.w, { type: "critical", children: t }) }),
            (0, i.jsx)("div", { children: T.intl.string(T.t.DY2CXs) }),
        ],
    });
}
function C() {
    return (0, i.jsxs)("div", {
        className: S.rf,
        children: [(0, i.jsx)("div", { className: S.dk }), (0, i.jsx)("div", { children: T.intl.string(T.t.G27uHe) })],
    });
}
function v(e) {
    let { guildBoostSlotId: t, transitionState: n, onClose: l } = e,
        { analyticsLocations: d } = (0, A.Ay)(_.A.GUILD_BOOST_UNCANCELLATION_MODAL);
    s.useEffect(() => {
        x.A.hasFetchedSubscriptions() || (0, h.hP)();
    }, []);
    let c = (0, o.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
        [S, v] = s.useState(1),
        [N, I] = s.useState(!1),
        [y, j] = s.useState(null),
        O = s.useCallback(async () => {
            if (null != c)
                try {
                    I(!0), j(null);
                    let e = (0, p.v)(c, 1);
                    a()(
                        (0, E.bx)(e) <= (0, E.bx)(c.additionalPlans),
                        "Uncanceling should not increase the number of guild subscriptions",
                    ),
                        await f(c, e, t, d),
                        v(2);
                } catch (t) {
                    let e = t instanceof g.Ey ? t : new g.Ey(t, t.code);
                    j(T.intl.string(e.code === m.tG.BILLING_PAUSE_INVALID_UPDATE ? T.t.dq4vq7 : T.t["5mlOCW"])), I(!1);
                }
        }, [c, t, d]);
    return (0, i.jsx)(A.f5, {
        value: d,
        children: (0, i.jsx)(r.Modal, {
            transitionState: n,
            onClose: async () => await l(),
            size: "sm",
            title: (() => {
                switch (S) {
                    case 1:
                        return T.intl.string(T.t.l52ih2);
                    case 2:
                        return T.intl.string(T.t.H9QUAB);
                    default:
                        return "";
                }
            })(),
            actions: (() => {
                switch (S) {
                    case 1:
                        return [
                            { variant: "secondary", text: T.intl.string(T.t.oEAioF), disabled: N, onClick: l },
                            { variant: "primary", text: T.intl.string(T.t.etZP4B), loading: N, onClick: O },
                        ];
                    case 2:
                        return [{ variant: "primary", text: T.intl.string(T.t.BddRzS), onClick: l }];
                    default:
                        return [];
                }
            })(),
            children: (() => {
                if (null == c) return (0, i.jsx)(u.y, {});
                switch (S) {
                    case 1:
                        return (0, i.jsx)(b, { errorMsg: y });
                    case 2:
                        return (0, i.jsx)(C, {});
                    default:
                        throw Error(`Unexpected step: ${S}`);
                }
            })(),
        }),
    });
}

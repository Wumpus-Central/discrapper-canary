n.d(t, { default: () => S }), n(896048), n(65821);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(397927),
    u = n(384904),
    d = n(923408),
    f = n(198982),
    p = n(136857),
    _ = n(793574),
    h = n(688810),
    m = n(253390),
    g = n(166403),
    E = n(927578),
    b = n(985018),
    y = n(359294);
async function O(e, t, n, r) {
    let i = (0, E.aE)(e, t);
    await (0, d.Ey)(n),
        await (0, u.nV)(
            e,
            { items: i },
            {
                amount: 0,
                currency: e.currency,
            },
            (0, E.UC)(i, e.currency, e.paymentSourceId),
            r,
        );
}
function A(e) {
    let { errorMsg: t } = e;
    return (0, r.jsxs)("div", {
        className: y.rf,
        children: [
            null !== t &&
                (0, r.jsx)("div", {
                    className: y.z3,
                    children: (0, r.jsx)(c.wx6, {
                        type: "critical",
                        children: t,
                    }),
                }),
            (0, r.jsx)("div", { children: b.intl.string(b.t.DY2CXs) }),
        ],
    });
}
function v() {
    return (0, r.jsxs)("div", {
        className: y.rf,
        children: [(0, r.jsx)("div", { className: y.dk }), (0, r.jsx)("div", { children: b.intl.string(b.t.G27uHe) })],
    });
}
function S(e) {
    let { guildBoostSlotId: t, transitionState: n, onClose: a } = e,
        { analyticsLocations: d } = (0, h.Ay)(_.A.GUILD_BOOST_UNCANCELLATION_MODAL);
    i.useEffect(() => {
        g.A.hasFetchedSubscriptions() || (0, u.hP)();
    }, []);
    let y = (0, l.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
        [S, I] = i.useState(1),
        [T, C] = i.useState(!1),
        [N, R] = i.useState(null),
        w = i.useCallback(async () => {
            if (null != y)
                try {
                    C(!0), R(null);
                    let e = (0, m.v)(y, 1);
                    s()(
                        (0, E.bx)(e) <= (0, E.bx)(y.additionalPlans),
                        "Uncanceling should not increase the number of guild subscriptions",
                    ),
                        await O(y, e, t, d),
                        I(2);
                } catch (t) {
                    let e = t instanceof f.Ey ? t : new f.Ey(t, t.code);
                    R(b.intl.string(e.code === p.tG.BILLING_PAUSE_INVALID_UPDATE ? b.t.dq4vq7 : b.t["5mlOCW"])), C(!1);
                }
        }, [y, t, d]),
        P = () => {
            switch (S) {
                case 1:
                    return b.intl.string(b.t.l52ih2);
                case 2:
                    return b.intl.string(b.t.H9QUAB);
                default:
                    return "";
            }
        },
        D = () => {
            switch (S) {
                case 1:
                    return [
                        {
                            variant: "secondary",
                            text: b.intl.string(b.t.oEAioF),
                            disabled: T,
                            onClick: a,
                        },
                        {
                            variant: "primary",
                            text: b.intl.string(b.t.etZP4B),
                            loading: T,
                            onClick: w,
                        },
                    ];
                case 2:
                    return [
                        {
                            variant: "primary",
                            text: b.intl.string(b.t.BddRzS),
                            onClick: a,
                        },
                    ];
                default:
                    return [];
            }
        },
        x = () => {
            if (null == y) return (0, r.jsx)(c.y$y, {});
            switch (S) {
                case 1:
                    return (0, r.jsx)(A, { errorMsg: N });
                case 2:
                    return (0, r.jsx)(v, {});
                default:
                    throw Error("Unexpected step: ".concat(S));
            }
        };
    return (0, r.jsx)(h.f5, {
        value: d,
        children: (0, r.jsx)(o.Modal, {
            transitionState: n,
            onClose: async () => await a(),
            size: "sm",
            title: P(),
            actions: D(),
            children: x(),
        }),
    });
}

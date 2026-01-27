n.d(t, {
    default: () => I,
}),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(384904),
    u = n(923408),
    _ = n(198982),
    p = n(136857),
    m = n(793574),
    g = n(688810),
    A = n(253390),
    f = n(166403),
    h = n(927578),
    b = n(985018),
    E = n(359294);
async function x(e, t, n, r) {
    let i = (0, h.aE)(e, t);
    await (0, u.Ey)(n),
        await (0, d.nV)(
            e,
            {
                items: i,
            },
            {
                amount: 0,
                currency: e.currency,
            },
            (0, h.UC)(i, e.currency, e.paymentSourceId),
            r,
        );
}

function O(e) {
    let { errorMsg: t } = e;
    return (0, r.jsxs)("div", {
        className: E.rf,
        children: [
            null !== t &&
                (0, r.jsx)("div", {
                    className: E.z3,
                    children: (0, r.jsx)(c.wx6, {
                        type: "critical",
                        children: t,
                    }),
                }),
            (0, r.jsx)("div", {
                children: b.intl.string(b.t.DY2CXs),
            }),
        ],
    });
}

function C() {
    return (0, r.jsxs)("div", {
        className: E.rf,
        children: [
            (0, r.jsx)("div", {
                className: E.dk,
            }),
            (0, r.jsx)("div", {
                children: b.intl.string(b.t.G27uHe),
            }),
        ],
    });
}

function I(e) {
    let { guildBoostSlotId: t, transitionState: n, onClose: l } = e,
        { analyticsLocations: u } = (0, g.Ay)(m.A.GUILD_BOOST_UNCANCELLATION_MODAL);
    i.useEffect(() => {
        f.A.hasFetchedSubscriptions() || (0, d.hP)();
    }, []);
    let E = (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        [I, T] = i.useState(1),
        [S, j] = i.useState(!1),
        [v, N] = i.useState(null),
        y = i.useCallback(async () => {
            if (null != E)
                try {
                    j(!0), N(null);
                    let e = (0, A.v)(E, 1);
                    s()(
                        (0, h.bx)(e) <= (0, h.bx)(E.additionalPlans),
                        "Uncanceling should not increase the number of guild subscriptions",
                    ),
                        await x(E, e, t, u),
                        T(2);
                } catch (t) {
                    let e = t instanceof _.Ey ? t : new _.Ey(t, t.code);
                    N(b.intl.string(e.code === p.tG.BILLING_PAUSE_INVALID_UPDATE ? b.t.dq4vq7 : b.t["5mlOCW"])), j(!1);
                }
        }, [E, t, u]);
    return (0, r.jsx)(g.f5, {
        value: u,
        children: (0, r.jsx)(a.Modal, {
            transitionState: n,
            onClose: async () => await l(),
            size: "sm",
            title: (() => {
                switch (I) {
                    case 1:
                        return b.intl.string(b.t.l52ih2);
                    case 2:
                        return b.intl.string(b.t.H9QUAB);
                    default:
                        return "";
                }
            })(),
            actions: (() => {
                switch (I) {
                    case 1:
                        return [
                            {
                                variant: "secondary",
                                text: b.intl.string(b.t.oEAioF),
                                disabled: S,
                                onClick: l,
                            },
                            {
                                variant: "primary",
                                text: b.intl.string(b.t.etZP4B),
                                loading: S,
                                onClick: y,
                            },
                        ];
                    case 2:
                        return [
                            {
                                variant: "primary",
                                text: b.intl.string(b.t.BddRzS),
                                onClick: l,
                            },
                        ];
                    default:
                        return [];
                }
            })(),
            children: (() => {
                if (null == E) return (0, r.jsx)(c.y$y, {});
                switch (I) {
                    case 1:
                        return (0, r.jsx)(O, {
                            errorMsg: v,
                        });
                    case 2:
                        return (0, r.jsx)(C, {});
                    default:
                        throw Error("Unexpected step: ".concat(I));
                }
            })(),
        }),
    });
}

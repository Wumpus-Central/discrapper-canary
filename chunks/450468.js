n.d(t, { default: () => I }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(355467),
    d = n(179360),
    f = n(881052),
    p = n(128069),
    _ = n(100527),
    m = n(906732),
    h = n(431369),
    g = n(78839),
    E = n(74538),
    b = n(388032),
    y = n(65439);
async function O(e, t, n, r) {
    let i = (0, E.MY)(e, t);
    await (0, d.bG)(n),
        await (0, u.Mg)(
            e,
            { items: i },
            {
                amount: 0,
                currency: e.currency,
            },
            (0, E.UX)(i, e.currency, e.paymentSourceId),
            r,
        );
}
function v(e) {
    let { errorMsg: t } = e;
    return (0, r.jsxs)("div", {
        className: y.body,
        children: [
            null !== t &&
                (0, r.jsx)("div", {
                    className: y.error,
                    children: (0, r.jsx)(c.M14, {
                        type: "critical",
                        children: t,
                    }),
                }),
            (0, r.jsx)("div", { children: b.intl.string(b.t.DY2CXs) }),
        ],
    });
}
function S() {
    return (0, r.jsxs)("div", {
        className: y.body,
        children: [
            (0, r.jsx)("div", { className: y.uncancelImage }),
            (0, r.jsx)("div", { children: b.intl.string(b.t.G27uHe) }),
        ],
    });
}
function I(e) {
    let { guildBoostSlotId: t, transitionState: n, onClose: a } = e,
        { analyticsLocations: d } = (0, m.ZP)(_.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
    i.useEffect(() => {
        g.Z.hasFetchedSubscriptions() || (0, u.jg)();
    }, []);
    let y = (0, l.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
        [I, T] = i.useState(1),
        [C, A] = i.useState(!1),
        [N, P] = i.useState(null),
        R = i.useCallback(async () => {
            if (null != y)
                try {
                    A(!0), P(null);
                    let e = (0, h.g)(y, 1);
                    o()(
                        (0, E.uV)(e) <= (0, E.uV)(y.additionalPlans),
                        "Uncanceling should not increase the number of guild subscriptions",
                    ),
                        await O(y, e, t, d),
                        T(2);
                } catch (t) {
                    let e = t instanceof f.HF ? t : new f.HF(t, t.code);
                    P(b.intl.string(e.code === p.SM.BILLING_PAUSE_INVALID_UPDATE ? b.t.dq4vq7 : b.t["5mlOCW"])), A(!1);
                }
        }, [y, t, d]),
        w = () => {
            switch (I) {
                case 1:
                    return b.intl.string(b.t.l52ih2);
                case 2:
                    return b.intl.string(b.t.H9QUAB);
                default:
                    return "";
            }
        },
        D = () => {
            switch (I) {
                case 1:
                    return [
                        {
                            variant: "secondary",
                            text: b.intl.string(b.t.oEAioF),
                            disabled: C,
                            onClick: a,
                        },
                        {
                            variant: "primary",
                            text: b.intl.string(b.t.etZP4B),
                            loading: C,
                            onClick: R,
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
            if (null == y) return (0, r.jsx)(c.$jN, {});
            switch (I) {
                case 1:
                    return (0, r.jsx)(v, { errorMsg: N });
                case 2:
                    return (0, r.jsx)(S, {});
                default:
                    throw Error("Unexpected step: ".concat(I));
            }
        };
    return (0, r.jsx)(m.Gt, {
        value: d,
        children: (0, r.jsx)(s.Modal, {
            transitionState: n,
            onClose: async () => await a(),
            size: "sm",
            title: w(),
            actions: D(),
            children: x(),
        }),
    });
}

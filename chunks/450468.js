n.d(t, { default: () => T }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(355467),
    d = n(179360),
    f = n(881052),
    _ = n(128069),
    p = n(100527),
    h = n(906732),
    m = n(431369),
    g = n(78839),
    E = n(74538),
    b = n(388032),
    y = n(409150);
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
function I() {
    return (0, r.jsxs)("div", {
        className: y.body,
        children: [
            (0, r.jsx)("div", { className: y.uncancelImage }),
            (0, r.jsx)("div", { children: b.intl.string(b.t.G27uHe) }),
        ],
    });
}
function T(e) {
    let { guildBoostSlotId: t, transitionState: n, onClose: a } = e,
        { analyticsLocations: d } = (0, h.ZP)(p.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
    i.useEffect(() => {
        g.Z.hasFetchedSubscriptions() || (0, u.jg)();
    }, []);
    let y = (0, l.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
        [T, S] = i.useState(1),
        [A, C] = i.useState(!1),
        [N, R] = i.useState(null),
        P = i.useCallback(async () => {
            if (null != y)
                try {
                    C(!0), R(null);
                    let e = (0, m.g)(y, 1);
                    o()(
                        (0, E.uV)(e) <= (0, E.uV)(y.additionalPlans),
                        "Uncanceling should not increase the number of guild subscriptions",
                    ),
                        await O(y, e, t, d),
                        S(2);
                } catch (t) {
                    let e = t instanceof f.HF ? t : new f.HF(t, t.code);
                    R(b.intl.string(e.code === _.SM.BILLING_PAUSE_INVALID_UPDATE ? b.t.dq4vq7 : b.t["5mlOCW"])), C(!1);
                }
        }, [y, t, d]),
        w = () => {
            switch (T) {
                case 1:
                    return b.intl.string(b.t.l52ih2);
                case 2:
                    return b.intl.string(b.t.H9QUAB);
                default:
                    return "";
            }
        },
        D = () => {
            switch (T) {
                case 1:
                    return [
                        {
                            variant: "secondary",
                            text: b.intl.string(b.t.oEAioF),
                            disabled: A,
                            onClick: a,
                        },
                        {
                            variant: "primary",
                            text: b.intl.string(b.t.etZP4B),
                            loading: A,
                            onClick: P,
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
            switch (T) {
                case 1:
                    return (0, r.jsx)(v, { errorMsg: N });
                case 2:
                    return (0, r.jsx)(I, {});
                default:
                    throw Error("Unexpected step: ".concat(T));
            }
        };
    return (0, r.jsx)(h.Gt, {
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

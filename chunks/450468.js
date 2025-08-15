n.d(t, { default: () => v }), n(388685), n(415506);
var i = n(255367),
    r = n(73800),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(82659),
    c = n(481060),
    d = n(355467),
    u = n(179360),
    m = n(881052),
    p = n(128069),
    g = n(100527),
    h = n(906732),
    f = n(431369),
    b = n(78839),
    x = n(74538),
    _ = n(388032),
    j = n(409150);
async function E(e, t, n, i) {
    let r = (0, x.MY)(e, t);
    await (0, u.bG)(n),
        await (0, d.Mg)(
            e,
            { items: r },
            {
                amount: 0,
                currency: e.currency,
            },
            (0, x.UX)(r, e.currency, e.paymentSourceId),
            i,
        );
}
function C(e) {
    let { errorMsg: t } = e;
    return (0, i.jsxs)("div", {
        className: j.body,
        children: [
            null !== t &&
                (0, i.jsx)(c.kzN, {
                    className: j.error,
                    children: t,
                }),
            (0, i.jsx)("div", { children: _.intl.string(_.t.DY2CXl) }),
        ],
    });
}
function O() {
    return (0, i.jsxs)("div", {
        className: j.body,
        children: [
            (0, i.jsx)("div", { className: j.uncancelImage }),
            (0, i.jsx)("div", { children: _.intl.string(_.t.G27uHR) }),
        ],
    });
}
function v(e) {
    let { guildBoostSlotId: t, transitionState: n, onClose: s } = e,
        { analyticsLocations: u } = (0, h.ZP)(g.Z.GUILD_BOOST_UNCANCELLATION_MODAL);
    r.useEffect(() => {
        b.Z.hasFetchedSubscriptions() || (0, d.jg)();
    }, []);
    let j = (0, l.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
        [v, S] = r.useState(1),
        [T, N] = r.useState(!1),
        [I, y] = r.useState(null),
        A = r.useCallback(async () => {
            if (null != j)
                try {
                    N(!0), y(null);
                    let e = (0, f.g)(j, 1);
                    a()(
                        (0, x.uV)(e) <= (0, x.uV)(j.additionalPlans),
                        "Uncanceling should not increase the number of guild subscriptions",
                    ),
                        await E(j, e, t, u),
                        S(2);
                } catch (t) {
                    let e = t instanceof m.HF ? t : new m.HF(t, t.code);
                    y(_.intl.string(e.code === p.SM.BILLING_PAUSE_INVALID_UPDATE ? _.t.dq4vq6 : _.t["5mlOCQ"])), N(!1);
                }
        }, [j, t, u]);
    return (0, i.jsx)(h.Gt, {
        value: u,
        children: (0, i.jsx)(o.Modal, {
            transitionState: n,
            onClose: async () => await s(),
            size: "sm",
            title: (() => {
                switch (v) {
                    case 1:
                        return _.intl.string(_.t.l52ih4);
                    case 2:
                        return _.intl.string(_.t.H9QUAA);
                    default:
                        return "";
                }
            })(),
            actions: (() => {
                switch (v) {
                    case 1:
                        return [
                            {
                                variant: "secondary",
                                text: _.intl.string(_.t.oEAioK),
                                disabled: T,
                                onClick: s,
                            },
                            {
                                variant: "primary",
                                text: _.intl.string(_.t.etZP4O),
                                loading: T,
                                onClick: A,
                            },
                        ];
                    case 2:
                        return [
                            {
                                variant: "primary",
                                text: _.intl.string(_.t.BddRzc),
                                onClick: s,
                            },
                        ];
                    default:
                        return [];
                }
            })(),
            children: (() => {
                if (null == j) return (0, i.jsx)(c.$jN, {});
                switch (v) {
                    case 1:
                        return (0, i.jsx)(C, { errorMsg: I });
                    case 2:
                        return (0, i.jsx)(O, {});
                    default:
                        throw Error("Unexpected step: ".concat(v));
                }
            })(),
        }),
    });
}

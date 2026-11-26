var i = n(477900),
    l = n(582128),
    s = n(284009),
    r = n.n(s),
    a = n(855986),
    o = n(189213),
    u = n(683071),
    c = n(289873),
    d = n(559201),
    m = n(627784),
    g = n(136857),
    A = n(793574),
    E = n(688810),
    h = n(669815),
    f = n(253390),
    p = n(166403),
    S = n(448645),
    T = n(682502),
    x = n(816571),
    I = n(792996),
    _ = n(17456);
function b(e) {
    let { errorMsg: t } = e;
    return (0, i.jsxs)("div", {
        className: _.rf,
        children: [
            null !== t &&
                (0, i.jsx)("div", {
                    className: _.z3,
                    children: (0, i.jsx)(u.w, { type: "critical", message: t, role: "alert" }),
                }),
            (0, i.jsx)("div", { children: I.intl.string(I.t.DY2CXs) }),
        ],
    });
}
function y() {
    return (0, i.jsxs)("div", {
        className: _.rf,
        children: [(0, i.jsx)("div", { className: _.dk }), (0, i.jsx)("div", { children: I.intl.string(I.t.G27uHe) })],
    });
}
function N(e) {
    let { step: t, errorMsg: n, premiumSubscription: l } = e;
    if (null == l) return (0, i.jsx)(c.y, {});
    switch (t) {
        case 1:
            return (0, i.jsx)(b, { errorMsg: n });
        case 2:
            return (0, i.jsx)(y, {});
        default:
            throw new T.f({ message: `Unexpected step: ${t}` });
    }
}
n.d(
    t,
    {},
    {
        default: function (e) {
            let { guildBoostSlotId: t, transitionState: n, onClose: s } = e,
                { analyticsLocations: u } = (0, E.Ay)(A.A.GUILD_BOOST_UNCANCELLATION_MODAL);
            l.useEffect(() => {
                p.A.hasFetchedSubscriptions() || (0, h.hP)();
            }, []);
            let c = (0, a.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
                [T, _] = l.useState(1),
                [b, y] = l.useState(!1),
                [C, v] = l.useState(null),
                j = l.useCallback(async () => {
                    if (null != c)
                        try {
                            (y(!0), v(null));
                            let e = (0, f.v)(c, 1);
                            (r()(
                                (0, S.bx)(e) <= (0, S.bx)(c.additionalPlans),
                                "Uncanceling should not increase the number of guild subscriptions",
                            ),
                                await (async function (e, t, n, i) {
                                    let l = (0, S.aE)(e, t);
                                    (await (0, d.Ey)(n),
                                        await (0, h.nV)(
                                            e,
                                            { items: l },
                                            { amount: 0, currency: e.currency },
                                            (0, S.UC)(l, e.currency, e.paymentSourceId),
                                            i,
                                        ));
                                })(c, e, t, u),
                                _(2));
                        } catch (t) {
                            let e = t instanceof m.Ey ? t : new m.Ey(t, t.code);
                            (v(
                                I.intl.string(
                                    e.code === g.tG.BILLING_PAUSE_INVALID_UPDATE ? I.t.dq4vq7 : I.t["5mlOCW"],
                                ),
                            ),
                                y(!1));
                        }
                }, [c, t, u]);
            return (0, i.jsx)(E.f5, {
                value: u,
                children: (0, i.jsx)(o.a, {
                    transitionState: n,
                    onClose: async () => await s(),
                    size: "sm",
                    title: (function () {
                        switch (T) {
                            case 1:
                                return I.intl.string(I.t.l52ih2);
                            case 2:
                                return I.intl.string(I.t.H9QUAB);
                            default:
                                return "";
                        }
                    })(),
                    actions: (function () {
                        switch (T) {
                            case 1:
                                return [
                                    { variant: "secondary", text: I.intl.string(I.t.oEAioF), disabled: b, onClick: s },
                                    { variant: "primary", text: I.intl.string(I.t.etZP4B), loading: b, onClick: j },
                                ];
                            case 2:
                                return [{ variant: "primary", text: I.intl.string(I.t.BddRzS), onClick: s }];
                            default:
                                return [];
                        }
                    })(),
                    children: (0, i.jsx)(x.d, {
                        errorHandlingBehavior: "close-and-alert",
                        guildBoostSlotId: t,
                        children: (0, i.jsx)(N, { step: T, errorMsg: C, premiumSubscription: c }),
                    }),
                }),
            });
        },
    },
);

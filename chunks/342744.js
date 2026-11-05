var i = n(477900),
    l = n(582128),
    s = n(284009),
    r = n.n(s),
    a = n(855986),
    o = n(189213),
    u = n(683071),
    d = n(289873),
    c = n(559201),
    g = n(627784),
    m = n(136857),
    A = n(793574),
    E = n(688810),
    h = n(781300),
    S = n(253390),
    T = n(166403),
    p = n(722178),
    f = n(682502),
    x = n(816571),
    _ = n(792996),
    I = n(17456);
function N(e) {
    let { errorMsg: t } = e;
    return (0, i.jsxs)("div", {
        className: I.rf,
        children: [
            null !== t &&
                (0, i.jsx)("div", {
                    className: I.z3,
                    children: (0, i.jsx)(u.w, { type: "critical", message: t, role: "alert" }),
                }),
            (0, i.jsx)("div", { children: _.intl.string(_.t.DY2CXs) }),
        ],
    });
}
function b() {
    return (0, i.jsxs)("div", {
        className: I.rf,
        children: [(0, i.jsx)("div", { className: I.dk }), (0, i.jsx)("div", { children: _.intl.string(_.t.G27uHe) })],
    });
}
function C(e) {
    let { step: t, errorMsg: n, premiumSubscription: l } = e;
    if (null == l) return (0, i.jsx)(d.y, {});
    switch (t) {
        case 1:
            return (0, i.jsx)(N, { errorMsg: n });
        case 2:
            return (0, i.jsx)(b, {});
        default:
            throw new f.f({ message: `Unexpected step: ${t}` });
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
                T.A.hasFetchedSubscriptions() || (0, h.hP)();
            }, []);
            let d = (0, a.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
                [f, I] = l.useState(1),
                [N, b] = l.useState(!1),
                [y, v] = l.useState(null),
                j = l.useCallback(async () => {
                    if (null != d)
                        try {
                            (b(!0), v(null));
                            let e = (0, S.v)(d, 1);
                            (r()(
                                (0, p.bx)(e) <= (0, p.bx)(d.additionalPlans),
                                "Uncanceling should not increase the number of guild subscriptions",
                            ),
                                await (async function (e, t, n, i) {
                                    let l = (0, p.aE)(e, t);
                                    (await (0, c.Ey)(n),
                                        await (0, h.nV)(
                                            e,
                                            { items: l },
                                            { amount: 0, currency: e.currency },
                                            (0, p.UC)(l, e.currency, e.paymentSourceId),
                                            i,
                                        ));
                                })(d, e, t, u),
                                I(2));
                        } catch (t) {
                            let e = t instanceof g.Ey ? t : new g.Ey(t, t.code);
                            (v(
                                _.intl.string(
                                    e.code === m.tG.BILLING_PAUSE_INVALID_UPDATE ? _.t.dq4vq7 : _.t["5mlOCW"],
                                ),
                            ),
                                b(!1));
                        }
                }, [d, t, u]);
            return (0, i.jsx)(E.f5, {
                value: u,
                children: (0, i.jsx)(o.a, {
                    transitionState: n,
                    onClose: async () => await s(),
                    size: "sm",
                    title: (function () {
                        switch (f) {
                            case 1:
                                return _.intl.string(_.t.l52ih2);
                            case 2:
                                return _.intl.string(_.t.H9QUAB);
                            default:
                                return "";
                        }
                    })(),
                    actions: (function () {
                        switch (f) {
                            case 1:
                                return [
                                    { variant: "secondary", text: _.intl.string(_.t.oEAioF), disabled: N, onClick: s },
                                    { variant: "primary", text: _.intl.string(_.t.etZP4B), loading: N, onClick: j },
                                ];
                            case 2:
                                return [{ variant: "primary", text: _.intl.string(_.t.BddRzS), onClick: s }];
                            default:
                                return [];
                        }
                    })(),
                    children: (0, i.jsx)(x.d, {
                        errorHandlingBehavior: "close-and-alert",
                        guildBoostSlotId: t,
                        children: (0, i.jsx)(C, { step: f, errorMsg: y, premiumSubscription: d }),
                    }),
                }),
            });
        },
    },
);

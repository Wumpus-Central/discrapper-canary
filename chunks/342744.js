n.d(t, { default: () => v });
var i = n(477900),
    s = n(582128),
    l = n(284009),
    r = n.n(l),
    a = n(17928),
    o = n(189213),
    u = n(683071),
    d = n(289873),
    c = n(820739),
    g = n(913122),
    m = n(136857),
    A = n(793574),
    E = n(688810),
    h = n(277984),
    S = n(253390),
    x = n(166403),
    p = n(158045),
    T = n(682502),
    f = n(816571),
    _ = n(375708),
    I = n(17456);
async function N(e, t, n, i) {
    let s = (0, p.aE)(e, t);
    (await (0, c.Ey)(n),
        await (0, h.nV)(
            e,
            { items: s },
            { amount: 0, currency: e.currency },
            (0, p.UC)(s, e.currency, e.paymentSourceId),
            i,
        ));
}
function C(e) {
    let { errorMsg: t } = e;
    return (0, i.jsxs)("div", {
        className: I.rf,
        children: [
            null !== t &&
                (0, i.jsx)("div", { className: I.z3, children: (0, i.jsx)(u.w, { type: "critical", children: t }) }),
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
function y(e) {
    let { step: t, errorMsg: n, premiumSubscription: s } = e;
    if (null == s) return (0, i.jsx)(d.y, {});
    switch (t) {
        case 1:
            return (0, i.jsx)(C, { errorMsg: n });
        case 2:
            return (0, i.jsx)(b, {});
        default:
            throw new T.f({ message: `Unexpected step: ${t}` });
    }
}
function v(e) {
    let { guildBoostSlotId: t, transitionState: n, onClose: l } = e,
        { analyticsLocations: u } = (0, E.Ay)(A.A.GUILD_BOOST_UNCANCELLATION_MODAL);
    s.useEffect(() => {
        x.A.hasFetchedSubscriptions() || (0, h.hP)();
    }, []);
    let d = (0, a.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
        [c, T] = s.useState(1),
        [I, C] = s.useState(!1),
        [b, v] = s.useState(null),
        j = s.useCallback(async () => {
            if (null != d)
                try {
                    (C(!0), v(null));
                    let e = (0, S.v)(d, 1);
                    (r()(
                        (0, p.bx)(e) <= (0, p.bx)(d.additionalPlans),
                        "Uncanceling should not increase the number of guild subscriptions",
                    ),
                        await N(d, e, t, u),
                        T(2));
                } catch (t) {
                    let e = t instanceof g.Ey ? t : new g.Ey(t, t.code);
                    (v(_.intl.string(e.code === m.tG.BILLING_PAUSE_INVALID_UPDATE ? _.t.dq4vq7 : _.t["5mlOCW"])),
                        C(!1));
                }
        }, [d, t, u]);
    return (0, i.jsx)(E.f5, {
        value: u,
        children: (0, i.jsx)(o.a, {
            transitionState: n,
            onClose: async () => await l(),
            size: "sm",
            title: (function () {
                switch (c) {
                    case 1:
                        return _.intl.string(_.t.l52ih2);
                    case 2:
                        return _.intl.string(_.t.H9QUAB);
                    default:
                        return "";
                }
            })(),
            actions: (function () {
                switch (c) {
                    case 1:
                        return [
                            { variant: "secondary", text: _.intl.string(_.t.oEAioF), disabled: I, onClick: l },
                            { variant: "primary", text: _.intl.string(_.t.etZP4B), loading: I, onClick: j },
                        ];
                    case 2:
                        return [{ variant: "primary", text: _.intl.string(_.t.BddRzS), onClick: l }];
                    default:
                        return [];
                }
            })(),
            children: (0, i.jsx)(f.d, {
                errorHandlingBehavior: "close-and-alert",
                guildBoostSlotId: t,
                children: (0, i.jsx)(y, { step: c, errorMsg: b, premiumSubscription: d }),
            }),
        }),
    });
}

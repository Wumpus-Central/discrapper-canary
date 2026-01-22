n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(990078),
    a = n(397927),
    c = n(636194),
    o = n(11351),
    d = n(306444),
    u = n(652056),
    f = n(930657),
    g = n(4600),
    b = n(964758),
    m = n(57731),
    p = n(985018),
    x = n(275316);
function h(e) {
    var t, n;
    let {
            allSubscriptionListings: h,
            priceTiers: j,
            loading: O,
            error: y,
            handlePublishTier: v,
            onDeleteEditState: A,
        } = e,
        { editStateId: E } = (0, d.O)(),
        N = (0, l.bG)([c.A], () => c.A.getSubscriptionListing(E)),
        _ = (0, o.gN)(),
        S = i.useMemo(() => {
            let e = h
                .filter((e) => e.id !== E)
                .map((e) => {
                    var t;
                    return null == (t = e.subscription_plans[0]) ? void 0 : t.price;
                });
            return null == j ? void 0 : j.filter((t) => !e.includes(t));
        }, [h, E, j]),
        T = null == N,
        I = null != (t = null == N ? void 0 : N.published) && t,
        C = null != (n = null == N ? void 0 : N.archived) && n;
    return (0, r.jsxs)("div", {
        className: x.rf,
        children: [
            null != y &&
                (0, r.jsx)(a.wx6, {
                    type: "critical",
                    children: y.getAnyErrorMessage(),
                }),
            !I &&
                !_ &&
                !C &&
                (0, r.jsxs)("div", {
                    className: x.Oy,
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(a.Heading, {
                                    variant: "heading-md/semibold",
                                    className: x.Bm,
                                    children: p.intl.string(p.t.WOlcS8),
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: "text-sm/normal",
                                    children: p.intl.string(p.t.rMulDT),
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.m, {
                            shouldShow: T,
                            text: p.intl.string(p.t.v7lRIh),
                            children: (0, r.jsx)("div", {
                                children: (0, r.jsx)(a.Button, {
                                    disabled: T,
                                    variant: "secondary",
                                    onClick: v,
                                    loading: O,
                                    text: p.intl.string(p.t.Lj6R5m),
                                }),
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)(f.A, { priceTiers: S }),
            (0, r.jsx)(g.A, { allSubscriptionListings: h }),
            (0, r.jsx)(b.A, {}),
            (0, r.jsx)(m.A, {}),
            (0, r.jsx)(u.A, { onDeleteEditState: A }),
        ],
    });
}

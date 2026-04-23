n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(990078),
    a = n(683071),
    o = n(534514),
    d = n(834730),
    c = n(821609),
    u = n(636194),
    m = n(11351),
    g = n(306444),
    h = n(652056),
    x = n(930657),
    _ = n(4600),
    p = n(964758),
    A = n(57731),
    E = n(985018),
    f = n(347539);
function j(e) {
    let {
            allSubscriptionListings: t,
            priceTiers: n,
            loading: j,
            error: N,
            handlePublishTier: I,
            onDeleteEditState: C,
        } = e,
        { editStateId: b } = (0, g.O)(),
        v = (0, s.bG)([u.A], () => u.A.getSubscriptionListing(b)),
        S = (0, m.gN)(),
        T = l.useMemo(() => {
            let e = t.filter((e) => e.id !== b).map((e) => e.subscription_plans[0]?.price);
            return n?.filter((t) => !e.includes(t));
        }, [t, b, n]),
        y = null == v,
        R = v?.published ?? !1,
        L = v?.archived ?? !1;
    return (0, i.jsxs)("div", {
        className: f.rf,
        children: [
            null != N && (0, i.jsx)(a.w, { type: "critical", children: N.getAnyErrorMessage() }),
            !R &&
                !S &&
                !L &&
                (0, i.jsxs)("div", {
                    className: f.Oy,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(o.D, {
                                    variant: "heading-md/semibold",
                                    className: f.Bm,
                                    children: E.intl.string(E.t.WOlcS8),
                                }),
                                (0, i.jsx)(d.E, { variant: "text-sm/normal", children: E.intl.string(E.t.rMulDT) }),
                            ],
                        }),
                        (0, i.jsx)(r.m, {
                            shouldShow: y,
                            text: E.intl.string(E.t.v7lRIh),
                            children: (0, i.jsx)("div", {
                                children: (0, i.jsx)(c.$, {
                                    disabled: y,
                                    variant: "secondary",
                                    onClick: I,
                                    loading: j,
                                    text: E.intl.string(E.t.Lj6R5m),
                                }),
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)(x.A, { priceTiers: T }),
            (0, i.jsx)(_.A, { allSubscriptionListings: t }),
            (0, i.jsx)(p.A, {}),
            (0, i.jsx)(A.A, {}),
            (0, i.jsx)(h.A, { onDeleteEditState: C }),
        ],
    });
}

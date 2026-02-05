"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(990078),
    a = n(397927),
    o = n(636194),
    d = n(11351),
    c = n(306444),
    u = n(652056),
    m = n(930657),
    g = n(4600),
    x = n(964758),
    h = n(57731),
    _ = n(985018),
    A = n(275316);
function p(e) {
    let {
            allSubscriptionListings: t,
            priceTiers: n,
            loading: p,
            error: f,
            handlePublishTier: j,
            onDeleteEditState: N,
        } = e,
        { editStateId: E } = (0, c.O)(),
        b = (0, l.bG)([o.A], () => o.A.getSubscriptionListing(E)),
        T = (0, d.gN)(),
        C = s.useMemo(() => {
            let e = t.filter((e) => e.id !== E).map((e) => e.subscription_plans[0]?.price);
            return n?.filter((t) => !e.includes(t));
        }, [t, E, n]),
        I = null == b,
        v = b?.published ?? !1,
        S = b?.archived ?? !1;
    return (0, i.jsxs)("div", {
        className: A.rf,
        children: [
            null != f && (0, i.jsx)(a.wx6, { type: "critical", children: f.getAnyErrorMessage() }),
            !v &&
                !T &&
                !S &&
                (0, i.jsxs)("div", {
                    className: A.Oy,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(a.Heading, {
                                    variant: "heading-md/semibold",
                                    className: A.Bm,
                                    children: _.intl.string(_.t.WOlcS8),
                                }),
                                (0, i.jsx)(a.Text, { variant: "text-sm/normal", children: _.intl.string(_.t.rMulDT) }),
                            ],
                        }),
                        (0, i.jsx)(r.m, {
                            shouldShow: I,
                            text: _.intl.string(_.t.v7lRIh),
                            children: (0, i.jsx)("div", {
                                children: (0, i.jsx)(a.Button, {
                                    disabled: I,
                                    variant: "secondary",
                                    onClick: j,
                                    loading: p,
                                    text: _.intl.string(_.t.Lj6R5m),
                                }),
                            }),
                        }),
                    ],
                }),
            (0, i.jsx)(m.A, { priceTiers: C }),
            (0, i.jsx)(g.A, { allSubscriptionListings: t }),
            (0, i.jsx)(x.A, {}),
            (0, i.jsx)(h.A, {}),
            (0, i.jsx)(u.A, { onDeleteEditState: N }),
        ],
    });
}

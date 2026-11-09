var n = s(477900),
    i = s(582128),
    r = s(855986),
    a = s(189213),
    l = s(331322),
    c = s(683071),
    u = s(821609),
    o = s(289873),
    d = s(73825),
    p = s(793574),
    y = s(688810),
    g = s(543767),
    A = s(590885),
    S = s(295405),
    h = s(97352),
    x = s(166403),
    j = s(792996);
let b = (t) => {
    let { message: e, onRetry: s } = t;
    return (0, n.jsxs)(l.B, {
        direction: "vertical",
        align: "start",
        gap: 8,
        children: [
            (0, n.jsx)(c.w, { type: "critical", message: e, role: "alert" }),
            (0, n.jsx)(u.$, { variant: "secondary", onClick: s, text: j.intl.string(j.t["5911Lb"]) }),
        ],
    });
};
function C(t) {
    let { subscription: e } = t,
        { analyticsLocations: s } = (0, y.Ay)(),
        [a, l] = i.useState(0),
        [c, u] = (0, g.YV)(
            {
                subscriptionId: e.id,
                renewal: !0,
                analyticsLocations: s,
                analyticsLocation: p.A.GAME_SERVER_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            },
            a,
        ),
        [d, h] = (0, r.yK)([S.A], () => [S.A.hasFetchedPaymentSources, S.A.paymentSourceFetchError]),
        x = i.useCallback(() => {
            l((t) => t + 1);
        }, []);
    return null == c && null != u
        ? (0, n.jsx)(b, { message: u.message, onRetry: x })
        : null != c && (d || h)
          ? (0, n.jsx)(A.A, { subscription: e, currentInvoicePreview: c })
          : (0, n.jsx)(o.y, {});
}
s.d(
    e,
    {},
    {
        default: function (t) {
            let e,
                { subscriptionId: s, skuId: l, analyticsLocations: c, onClose: u, transitionState: p } = t,
                g = (0, r.bG)([x.A], () => x.A.getSubscriptionById(s)),
                A = (0, r.bG)([h.A], () => null != g && g.items.every((t) => null != h.A.get(t.planId)), [g]),
                [S, m] = i.useState(0),
                [I, k] = i.useState(!1);
            i.useEffect(() => {
                A ||
                    h.A.isLoadedForSKU(l) ||
                    h.A.isFetchingForSKU(l) ||
                    (async function (t, e) {
                        try {
                            await (0, d.ur)(t);
                        } catch {
                            e();
                        }
                    })(l, () => k(!0));
            }, [A, l, S]);
            let v = i.useCallback(() => {
                (k(!1), m((t) => t + 1));
            }, []);
            return (
                (e =
                    null != g && A
                        ? (0, n.jsx)(C, { subscription: g })
                        : I
                          ? (0, n.jsx)(b, { message: j.intl.string(j.t["5mlOCW"]), onRetry: v })
                          : (0, n.jsx)(o.y, {})),
                (0, n.jsx)(y.f5, {
                    value: c,
                    children: (0, n.jsx)(a.a, {
                        title: j.intl.string(j.t.SgX7Ra),
                        actions: [{ text: j.intl.string(j.t.i4jeWR), onClick: u, variant: "primary" }],
                        transitionState: p,
                        onClose: u,
                        children: e,
                    }),
                })
            );
        },
    },
);

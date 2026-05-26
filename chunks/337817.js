n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    l = n(990078),
    a = n(403581),
    s = n(834730),
    o = n(580630),
    c = n(993408),
    u = n(939249),
    d = n(688810),
    m = n(532794),
    R = n(758836),
    N = n(788868),
    A = n(447806);
let h = (e) => {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: l } = (0, d.Ay)(),
        a = i.useRef(null);
    return (0, r.jsx)(u.D, {
        className: A.F,
        innerRef: a,
        onClick: () => {
            n?.(R.sH.SUBSCRIBE_NOW), (0, m.A)({ subscriptionTier: N.pe.TIER_2, analyticsLocations: l, returnRef: a });
        },
        children: t,
    });
};
var _ = n(652215),
    v = n(375708),
    g = n(805961);
function E(e) {
    let { product: t, onTrackClick: n } = e,
        i = (0, c.yt)(t, _.lid.PREMIUM_TIER_2);
    if (null == i) return null;
    let u = (0, o.RS)(i.amount, i.currency);
    return (0, r.jsxs)("div", {
        className: g.k,
        children: [
            (0, r.jsx)(l.m, {
                text: v.intl.string(v.t.MPFyJ5),
                "aria-label": v.intl.string(v.t.X3Ekj8),
                children: (0, r.jsx)(a.t, { size: "md", color: "currentColor", className: g.o }),
            }),
            (0, r.jsx)(s.E, {
                variant: "text-xs/medium",
                children: v.intl.format(v.t.Sv8iic, {
                    price: u,
                    subscribeNowHook: (e) => (0, r.jsx)(h, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}

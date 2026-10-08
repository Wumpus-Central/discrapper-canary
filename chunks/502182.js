a.d(e, { default: () => n });
var r = a(477900);
a(582128);
var i = a(189213),
    s = a(834730);
function n(t) {
    let { transitionState: e, onClose: a, bounty: n } = t;
    return (0, r.jsxs)(i.a, {
        transitionState: e,
        onClose: a,
        title: n.productName ?? n.advertiserName,
        actions: [],
        children: [
            (0, r.jsx)(s.E, { variant: "text-md/normal", children: n.advertiserName }),
            (0, r.jsx)(s.E, { variant: "text-sm/normal", color: "text-muted", children: n.id }),
        ],
    });
}

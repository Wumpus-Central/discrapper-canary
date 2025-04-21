n.d(t, { j: () => u });
var r = n(200651),
    i = n(192379),
    a = n(481060),
    o = n(462566);
n(600164);
var s = n(603421),
    l = n(388032),
    c = n(13482);
let u = (e) => {
    let { billingError: t, onCardInfoChange: n } = e,
        u = null != t && (null == t.code || (0, s.ly)(t) === s.Rg.CREDIT_CARD_INFORMATION);
    return (0, r.jsxs)(i.Fragment, {
        children: [
            u
                ? (0, r.jsx)(a.kzN, {
                      className: c.errorBlock,
                      children: l.intl.string(l.t['4vnhKS'])
                  })
                : null,
            (0, r.jsx)(o.Z, {
                onCardInfoChange: n,
                error: t
            })
        ]
    });
};

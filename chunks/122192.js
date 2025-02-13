n.d(t, { j: () => c });
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(462566);
n(600164);
var o = n(603421),
    l = n(388032),
    u = n(928345);
let c = (e) => {
    let { billingError: t, onCardInfoChange: n } = e,
        c = null != t && (null == t.code || (0, o.ly)(t) === o.Rg.CREDIT_CARD_INFORMATION);
    return (0, i.jsxs)(r.Fragment, {
        children: [
            c
                ? (0, i.jsx)(a.kzN, {
                      className: u.errorBlock,
                      children: l.intl.string(l.t['4vnhKS'])
                  })
                : null,
            (0, i.jsx)(s.Z, {
                onCardInfoChange: n,
                error: t
            })
        ]
    });
};

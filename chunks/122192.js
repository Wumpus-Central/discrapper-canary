r.d(n, {
    j: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(481060),
    s = r(462566);
r(600164);
var l = r(603421),
    u = r(388032),
    c = r(868069);
let d = (e) => {
    let { billingError: n, onCardInfoChange: r } = e,
        d = null != n && (null == n.code || (0, l.ly)(n) === l.Rg.CREDIT_CARD_INFORMATION);
    return (0, i.jsxs)(a.Fragment, {
        children: [
            d
                ? (0, i.jsx)(o.FormErrorBlock, {
                      className: c.errorBlock,
                      children: u.intl.string(u.t['4vnhKS'])
                  })
                : null,
            (0, i.jsx)(s.Z, {
                onCardInfoChange: r,
                error: n
            })
        ]
    });
};

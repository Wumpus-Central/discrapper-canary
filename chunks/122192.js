n.d(t, {
    j: function () {
        return u;
    }
});
var a = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(462566);
n(600164);
var i = n(603421),
    o = n(388032),
    c = n(868069);
let u = (e) => {
    let { billingError: t, onCardInfoChange: n } = e,
        u = null != t && (null == t.code || (0, i.ly)(t) === i.Rg.CREDIT_CARD_INFORMATION);
    return (0, a.jsxs)(r.Fragment, {
        children: [
            u
                ? (0, a.jsx)(l.FormErrorBlock, {
                      className: c.errorBlock,
                      children: o.intl.string(o.t['4vnhKS'])
                  })
                : null,
            (0, a.jsx)(s.Z, {
                onCardInfoChange: n,
                error: t
            })
        ]
    });
};

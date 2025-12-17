n.d(t, { Z: () => s }), n(953529);
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(970184),
    o = n(609275);
function s(e) {
    let { label: t, description: n, component: s, renderComponent: l } = e,
        c = (0, a.h4)(s);
    return (0, r.jsxs)(i.xJW, {
        title: t,
        required: s.required,
        error: c,
        children: [
            null != n &&
                (0, r.jsx)(i.R94, {
                    type: i.geA.DESCRIPTION,
                    className: o.description,
                    children: n,
                }),
            l(s, "label-child"),
        ],
    });
}

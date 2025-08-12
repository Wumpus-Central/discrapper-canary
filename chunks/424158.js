n.d(t, { Z: () => s }), n(953529);
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(970184),
    a = n(181951);
function s(e) {
    let { label: t, description: n, component: s, renderComponent: l } = e,
        c = (0, o.h4)(s);
    return (0, r.jsxs)(i.xJW, {
        title: t,
        required: s.required,
        error: c,
        titleClassName: a.title,
        children: [
            null != n &&
                (0, r.jsx)(i.R94, {
                    type: i.geA.DESCRIPTION,
                    className: a.description,
                    children: n,
                }),
            l(s, "label-child"),
        ],
    });
}

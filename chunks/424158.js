r.d(t, { Z: () => a }), r(953529);
var n = r(255367);
r(73800);
var l = r(481060),
    i = r(970184),
    o = r(836636);
function a(e) {
    let { label: t, description: r, component: a, renderComponent: c } = e,
        s = (0, i.h4)(a);
    return (0, n.jsxs)(l.xJW, {
        title: t,
        required: a.required,
        error: s,
        titleClassName: o.title,
        children: [
            null != r &&
                (0, n.jsx)(l.R94, {
                    type: l.geA.DESCRIPTION,
                    className: o.description,
                    children: r,
                }),
            c(a, "label-child"),
        ],
    });
}

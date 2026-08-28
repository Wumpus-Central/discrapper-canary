s.d(t, { A: () => A });
var i,
    n = s(477900);
s(582128);
var a = s(503698),
    r = s.n(a),
    l = s(866665),
    o = s(939249),
    u = s(375708),
    c = s(592835),
    h = (((i = h || {})[(i.ACCEPT = 0)] = "ACCEPT"), (i[(i.DENY = 1)] = "DENY"), (i[(i.DEFAULT = 2)] = "DEFAULT"), i);
function d(e) {
    let {
            icon: t,
            tooltip: s,
            ariaLabelMessage: i,
            userName: a,
            applicationName: h,
            onClick: d,
            actionType: A = 2,
            shouldHighlight: m,
            loading: p = !1,
            tabIndex: N = 0,
        } = e,
        I = null != i && null != a,
        E = I ? u.intl.formatToPlainString(i, { action: s, name: a, application: h ?? "" }) : s;
    return (0, n.jsx)(l.m, {
        text: s,
        ariaHidden: I,
        children: (0, n.jsx)(o.D, {
            tag: "div",
            "aria-label": E,
            tabIndex: N,
            onClick: p ? void 0 : d,
            className: r()(c.hP, { [c.Jj]: 0 === A, [c.Bs]: 1 === A, [c.Zt]: m, [c.r9]: p }),
            children: (0, n.jsx)(t, { className: c.Kk, color: "currentColor" }),
        }),
    });
}
d.ActionTypes = h;
let A = d;

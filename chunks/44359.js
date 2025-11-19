n.d(t, {
    l: () => l,
    t: () => s,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(356780);
function s(e) {
    let { keybind: t, className: n } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) =>
            (0, r.jsx)(
                "span",
                {
                    className: a()(o.key, o.keySpan, n),
                    children: e,
                },
                t,
            ),
        ),
    });
}
function l(e) {
    let { keybind: t, className: n } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) =>
            (0, r.jsx)(
                "div",
                {
                    className: a()(o.key, o.keyDiv, n),
                    children: e,
                },
                "".concat(e, "-").concat(t),
            ),
        ),
    });
}

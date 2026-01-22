n.d(t, {
    G: () => l,
    b: () => o,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(700744);

function o(e) {
    let { keybind: t, className: n } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) =>
            (0, r.jsx)(
                "span",
                {
                    className: a()(s.Eb, s.UT, n),
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
                    className: a()(s.Eb, s.RJ, n),
                    children: e,
                },
                "".concat(e, "-").concat(t),
            ),
        ),
    });
}

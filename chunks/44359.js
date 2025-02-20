n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(219049);
function o(e) {
    let { keybind: t, className: n } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) =>
            (0, r.jsx)(
                'span',
                {
                    className: i()(a.key, n),
                    children: e
                },
                t
            )
        )
    });
}

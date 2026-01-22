n.d(t, {
    A: () => l,
}),
    n(747238);
var r = n(627968),
    i = n(64700),
    a = n(641324),
    s = n(68713);

function o(e) {
    let { node: t } = e;
    return (0, r.jsx)("div", {
        className: s.l,
        children: t.layout.map((e) =>
            (0, r.jsx)(
                a.A,
                {
                    node: e,
                },
                e.key,
            ),
        ),
    });
}
let l = i.memo(o);

n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(990078),
    a = n(821609),
    s = n(109487),
    r = n(353411);
function o(e) {
    let {
            activity: t,
            user: n,
            source: o,
            size: c = "sm",
            variant: d = "secondary",
            fullWidth: u,
            onAction: h,
            ...m
        } = e,
        { label: A, tooltip: g, loading: _, disabled: p, onClick: f } = (0, r._B)(t, n, o);
    return (0, i.jsx)(l.m, {
        text: g,
        children: (0, i.jsx)(a.$, {
            variant: d,
            size: c,
            icon: s.L,
            text: A,
            fullWidth: u,
            onClick: () => {
                h?.(), f();
            },
            disabled: p,
            loading: _,
            ...m,
        }),
    });
}

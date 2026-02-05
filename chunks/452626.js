i.d(t, { A: () => s });
var n = i(627968);
i(64700);
var a = i(990078),
    l = i(397927),
    r = i(353411);
function s(e) {
    let {
            activity: t,
            user: i,
            source: s,
            size: o = "sm",
            variant: d = "secondary",
            fullWidth: c,
            onAction: u,
            ...m
        } = e,
        { label: _, tooltip: A, loading: g, disabled: h, onClick: f } = (0, r._B)(t, i, s);
    return (0, n.jsx)(a.m, {
        text: A,
        children: (0, n.jsx)(l.Button, {
            variant: d,
            size: o,
            icon: l.L5T,
            text: _,
            fullWidth: c,
            onClick: () => {
                u?.(), f();
            },
            disabled: h,
            loading: g,
            ...m,
        }),
    });
}

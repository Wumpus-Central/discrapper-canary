n.d(t, {
    M0: () => d,
    YX: () => u,
    tT: () => c
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(1561),
    o = n(981729),
    l = n(144429);
let u = {
        TERTIARY: l.tertiary,
        SECONDARY: l.secondary,
        PRIMARY: l.primary
    },
    c = {
        SIZE_24: l.size24,
        SIZE_32: l.size32,
        SIZE_36: l.size36
    };
function d(e) {
    let { className: t, tooltip: n, color: r, size: u = c.SIZE_32, icon: d, onMouseDown: f, onClick: _, disabled: p, focusProps: h } = e;
    return (0, i.jsx)(o.u, {
        text: n,
        shouldShow: !p,
        children: (e) => {
            let { onClick: o, ...c } = e;
            return (0, i.jsx)(s.P, {
                ...c,
                'aria-label': n,
                'aria-disabled': p,
                className: a()(t, l.button, r, u, { [l.disabled]: p }),
                onMouseDown: f,
                onClick: (e) => {
                    null == o || o(), _(e);
                },
                focusProps: h,
                children: d
            });
        }
    });
}

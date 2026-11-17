var i = n(662090);
n.d(
    t,
    {},
    {
        W: function (e, t) {
            let {
                    query: n,
                    results: r,
                    selectedIndex: a,
                    onSearch: s,
                    onDismiss: l,
                    onSelectIndex: o,
                    onPick: d,
                    onAltEnter: c,
                } = t,
                u = a;
            switch (e.key.toLowerCase()) {
                case "escape":
                    (e.preventDefault(), e.stopPropagation(), n.length > 0 ? s("") : l());
                    return;
                case "k":
                case "t":
                    (e.ctrlKey || e.metaKey) && (e.preventDefault(), e.stopPropagation(), l());
                    return;
                case "enter": {
                    if (-1 === a) return;
                    if ((e.preventDefault(), e.altKey)) return void c?.(e);
                    let t = r[a];
                    null != t && d(t, e);
                    return;
                }
                case "arrowup":
                    u = (0, i.Vv)(i.vB.UP, a, r);
                    break;
                case "arrowdown":
                    u = (0, i.Vv)(i.vB.DOWN, a, r);
                    break;
                case "n":
                    if (!e.ctrlKey) return;
                    u = (0, i.Vv)(i.vB.DOWN, a, r);
                    break;
                case "p":
                    if (!e.ctrlKey) return;
                    u = (0, i.Vv)(i.vB.UP, a, r);
                    break;
                default:
                    return;
            }
            (e.preventDefault(), o(u));
        },
    },
);

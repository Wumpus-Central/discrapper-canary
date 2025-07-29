n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var o = n(750312),
    i = n(623132),
    a = n(388032);
function l(e) {
    let { user: t, widget: n, loading: l } = e;
    return (0, r.jsx)(o.Z, {
        title: a.intl.string(a.t.sUQar6),
        subtitle: a.intl.string(a.t.wiXdER),
        children: (0, r.jsx)(i.Z, {
            game: n.game,
            userId: t.id,
            loading: l
        })
    });
}

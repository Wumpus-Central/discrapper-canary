n.d(t, {
    Ay: () => f,
    nY: () => u,
});
var r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(775602),
    l = n(454290),
    c = n(498003),
    u = (function (e) {
        return (e.DEFAULT = "DEFAULT"), (e.FOCUS_SENSITIVE = "FOCUS_SENSITIVE"), (e.PINNED = "PINNED"), e;
    })({});

function d(e) {
    let { children: t, mode: n = "DEFAULT" } = e,
        { zoomed: r } = (0, l.Q)(),
        i = (0, s.bG)([o.A], () => o.A.keyboardModeEnabled);
    return t(
        a()(c.E3, {
            [c.R]: r && !i && "PINNED" !== n,
            [c.rB]: "FOCUS_SENSITIVE" === n,
        }),
    );
}
let f = r.memo(d);

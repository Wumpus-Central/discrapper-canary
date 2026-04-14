n.d(t, { Ay: () => h, nY: () => c });
var i,
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(311907),
    o = n(775602),
    d = n(454290),
    u = n(422362),
    c = (((i = {}).DEFAULT = "DEFAULT"), (i.FOCUS_SENSITIVE = "FOCUS_SENSITIVE"), (i.PINNED = "PINNED"), i);
let h = l.memo(function (e) {
    let { children: t, mode: n = "DEFAULT" } = e,
        { zoomed: i } = (0, d.Q)(),
        l = (0, s.bG)([o.A], () => o.A.keyboardModeEnabled);
    return t(a()(u.E3, { [u.R]: i && !l && "PINNED" !== n, [u.rB]: "FOCUS_SENSITIVE" === n }));
});

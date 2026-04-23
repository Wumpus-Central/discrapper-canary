n.d(t, { Ay: () => c, nY: () => h });
var i,
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    o = n(775602),
    d = n(454290),
    u = n(555530),
    h = (((i = {}).DEFAULT = "DEFAULT"), (i.FOCUS_SENSITIVE = "FOCUS_SENSITIVE"), (i.PINNED = "PINNED"), i);
let c = a.memo(function (e) {
    let { children: t, mode: n = "DEFAULT" } = e,
        { zoomed: i } = (0, d.Q)(),
        a = (0, s.bG)([o.A], () => o.A.keyboardModeEnabled);
    return t(l()(u.E3, { [u.R]: i && !a && "PINNED" !== n, [u.rB]: "FOCUS_SENSITIVE" === n }));
});

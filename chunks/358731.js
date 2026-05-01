n.d(t, { Ay: () => c, nY: () => h });
var i,
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(17928),
    s = n(775602),
    d = n(454290),
    u = n(555530),
    h = (((i = {}).DEFAULT = "DEFAULT"), (i.FOCUS_SENSITIVE = "FOCUS_SENSITIVE"), (i.PINNED = "PINNED"), i);
let c = l.memo(function (e) {
    let { children: t, mode: n = "DEFAULT" } = e,
        { zoomed: i } = (0, d.Q)(),
        l = (0, o.bG)([s.A], () => s.A.keyboardModeEnabled);
    return t(a()(u.E3, { [u.R]: i && !l && "PINNED" !== n, [u.rB]: "FOCUS_SENSITIVE" === n }));
});

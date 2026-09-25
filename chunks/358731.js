n.d(t, { Ay: () => h, nY: () => c });
var i,
    r = n(582128),
    l = n(503698),
    a = n.n(l),
    o = n(17928),
    s = n(775602),
    u = n(454290),
    d = n(676737),
    c = (((i = {}).DEFAULT = "DEFAULT"), (i.FOCUS_SENSITIVE = "FOCUS_SENSITIVE"), (i.PINNED = "PINNED"), i);
let h = r.memo(function (e) {
    let { children: t, mode: n = "DEFAULT" } = e,
        { zoomed: i } = (0, u.Q)(),
        r = (0, o.bG)([s.Ay], () => s.Ay.keyboardModeEnabled);
    return t(a()(d.E3, { [d.R]: i && !r && "PINNED" !== n, [d.rB]: "FOCUS_SENSITIVE" === n }));
});

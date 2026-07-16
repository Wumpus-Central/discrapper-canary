n.d(t, { Ay: () => c, nY: () => h });
var i,
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(17928),
    o = n(775602),
    u = n(454290),
    d = n(555530),
    h = (((i = {}).DEFAULT = "DEFAULT"), (i.FOCUS_SENSITIVE = "FOCUS_SENSITIVE"), (i.PINNED = "PINNED"), i);
let c = r.memo(function (e) {
    let { children: t, mode: n = "DEFAULT" } = e,
        { zoomed: i } = (0, u.Q)(),
        r = (0, s.bG)([o.Ay], () => o.Ay.keyboardModeEnabled);
    return t(a()(d.E3, { [d.R]: i && !r && "PINNED" !== n, [d.rB]: "FOCUS_SENSITIVE" === n }));
});

n.d(t, {
    ZP: () => f,
    lx: () => u
});
var r = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(607070),
    l = n(212459),
    c = n(35305),
    u = (function (e) {
        return (e.DEFAULT = 'DEFAULT'), (e.FOCUS_SENSITIVE = 'FOCUS_SENSITIVE'), (e.PINNED = 'PINNED'), e;
    })({});
function d(e) {
    let { children: t, mode: n = 'DEFAULT' } = e,
        { zoomed: r } = (0, l.Y)(),
        i = (0, a.e7)([s.Z], () => s.Z.keyboardModeEnabled);
    return t(
        o()(c.base, {
            [c.hidden]: r && !i && 'PINNED' !== n,
            [c.focusSensitive]: 'FOCUS_SENSITIVE' === n
        })
    );
}
let f = r.memo(d);

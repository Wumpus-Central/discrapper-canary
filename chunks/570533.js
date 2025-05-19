n.d(t, { Z: () => l });
var r = n(73800),
    i = n(442837),
    s = n(339085),
    o = n(889564);
let a = [];
function l(e) {
    let t = (0, i.e7)([s.ZP], () => s.ZP.getGuildEmoji(e), [e]);
    return r.useMemo(() => (null == t ? a : t.filter((t) => (0, o.Kt)(t, e))), [t, e]);
}

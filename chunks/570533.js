n.d(t, { Z: () => a });
var r = n(73800),
    i = n(442837),
    s = n(339085),
    l = n(889564);
let o = [];
function a(e) {
    let t = (0, i.e7)([s.ZP], () => s.ZP.getGuildEmoji(e), [e]);
    return r.useMemo(() => (null == t ? o : t.filter((t) => (0, l.Kt)(t, e))), [t, e]);
}

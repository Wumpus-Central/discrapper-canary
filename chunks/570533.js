n.d(t, { Z: () => a });
var r = n(73800),
    i = n(442837),
    l = n(339085),
    s = n(889564);
let o = [];
function a(e) {
    let t = (0, i.e7)([l.ZP], () => l.ZP.getGuildEmoji(e), [e]);
    return r.useMemo(() => (null == t ? o : t.filter((t) => (0, s.Kt)(t, e))), [t, e]);
}

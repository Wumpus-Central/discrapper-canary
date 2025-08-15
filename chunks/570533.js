n.d(t, { Z: () => a });
var i = n(647438),
    r = n(442837),
    s = n(339085),
    l = n(889564);
let o = [];
function a(e) {
    let t = (0, r.e7)([s.ZP], () => s.ZP.getGuildEmoji(e), [e]);
    return i.useMemo(() => (null == t ? o : t.filter((t) => (0, l.Kt)(t, e))), [t, e]);
}

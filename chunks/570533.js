n.d(t, { Z: () => o });
var i = n(192379),
    l = n(442837),
    r = n(339085),
    s = n(889564);
let a = [];
function o(e) {
    let t = (0, l.e7)([r.ZP], () => r.ZP.getGuildEmoji(e), [e]);
    return i.useMemo(() => (null == t ? a : t.filter((t) => (0, s.Kt)(t, e))), [t, e]);
}

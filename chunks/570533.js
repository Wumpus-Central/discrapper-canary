n.d(t, { Z: () => s });
var r = n(192379),
    i = n(442837),
    l = n(339085),
    o = n(889564);
let a = [];
function s(e) {
    let t = (0, i.e7)([l.ZP], () => l.ZP.getGuildEmoji(e), [e]);
    return r.useMemo(() => (null == t ? a : t.filter((t) => (0, o.Kt)(t, e))), [t, e]);
}

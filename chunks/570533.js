r.d(t, { Z: () => o });
var n = r(192379),
    h = r(442837),
    v = r(339085),
    i = r(889564);
let l = [];
function o(e) {
    let t = (0, h.e7)([v.ZP], () => v.ZP.getGuildEmoji(e), [e]);
    return n.useMemo(() => (null == t ? l : t.filter((t) => (0, i.Kt)(t, e))), [t, e]);
}

r.d(t, { Z: () => a });
var n = r(192379),
    i = r(442837),
    s = r(339085),
    o = r(889564);
let l = [];
function a(e) {
    let t = (0, i.e7)([s.ZP], () => s.ZP.getGuildEmoji(e), [e]);
    return n.useMemo(() => (null == t ? l : t.filter((t) => (0, o.Kt)(t, e))), [t, e]);
}

n.d(t, { Z: () => a });
var r = n(192379),
    i = n(442837),
    s = n(339085),
    o = n(889564);
let l = [];
function a(e) {
    let t = (0, i.e7)([s.ZP], () => s.ZP.getGuildEmoji(e), [e]);
    return r.useMemo(() => (null == t ? l : t.filter((t) => (0, o.Kt)(t, e))), [t, e]);
}

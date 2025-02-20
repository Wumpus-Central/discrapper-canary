n.d(t, { Z: () => a });
var i = n(192379),
    r = n(442837),
    l = n(339085),
    o = n(889564);
let s = [];
function a(e) {
    let t = (0, r.e7)([l.ZP], () => l.ZP.getGuildEmoji(e), [e]);
    return i.useMemo(() => (null == t ? s : t.filter((t) => (0, o.Kt)(t, e))), [t, e]);
}

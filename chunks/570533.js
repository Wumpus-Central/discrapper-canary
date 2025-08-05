n.d(t, { Z: () => a });
var r = n(73800),
    i = n(442837),
    l = n(339085),
    o = n(889564);
let u = [];
function a(e) {
    let t = (0, i.e7)([l.ZP], () => l.ZP.getGuildEmoji(e), [e]);
    return r.useMemo(() => (null == t ? u : t.filter((t) => (0, o.Kt)(t, e))), [t, e]);
}

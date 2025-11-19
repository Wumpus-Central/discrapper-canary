n.d(t, { Z: () => l });
var r = n(473749),
    i = n(442837),
    a = n(339085),
    o = n(889564);
let s = [];
function l(e) {
    let t = (0, i.e7)([a.ZP], () => a.ZP.getGuildEmoji(e), [e]);
    return r.useMemo(() => (null == t ? s : t.filter((t) => (0, o.Kt)(t, e))), [t, e]);
}

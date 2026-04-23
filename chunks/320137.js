n.d(t, { A: () => s });
var i = n(64700),
    l = n(17928),
    r = n(159273),
    o = n(492494);
let a = [];
function s(e) {
    let t = (0, l.bG)([r.Ay], () => r.Ay.getGuildEmoji(e), [e]);
    return i.useMemo(() => (null == t ? a : t.filter((t) => (0, o.Eg)(t, e))), [t, e]);
}

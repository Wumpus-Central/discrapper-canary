i.d(t, { A: () => u });
var n = i(64700),
    l = i(17928),
    s = i(159273),
    r = i(492494);
let a = [];
function u(e) {
    let t = (0, l.bG)([s.Ay], () => s.Ay.getGuildEmoji(e), [e]);
    return n.useMemo(() => (null == t ? a : t.filter((t) => (0, r.Eg)(t, e))), [t, e]);
}

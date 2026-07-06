n.d(t, { A: () => s });
var l = n(64700),
    r = n(17928),
    i = n(159273),
    a = n(492494);
let o = [];
function s(e) {
    let t = (0, r.bG)([i.Ay], () => i.Ay.getGuildEmoji(e), [e]);
    return l.useMemo(() => (null == t ? o : t.filter((t) => (0, a.Eg)(t, e))), [t, e]);
}

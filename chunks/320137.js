t.d(n, { A: () => u });
var l = t(582128),
    r = t(17928),
    i = t(236285),
    a = t(492494);
let s = [];
function u(e) {
    let n = (0, r.bG)([i.Ay], () => i.Ay.getGuildEmoji(e), [e]);
    return l.useMemo(() => (null == n ? s : n.filter((n) => (0, a.Eg)(n, e))), [n, e]);
}

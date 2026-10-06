l.d(n, { A: () => u });
var t = l(582128),
    r = l(17928),
    i = l(236285),
    a = l(492494);
let s = [];
function u(e) {
    let n = (0, r.bG)([i.Ay], () => i.Ay.getGuildEmoji(e), [e]);
    return t.useMemo(() => (null == n ? s : n.filter((n) => (0, a.Eg)(n, e))), [n, e]);
}

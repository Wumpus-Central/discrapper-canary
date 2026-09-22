r.d(n, { A: () => a });
var t = r(582128),
    l = r(17928),
    i = r(236285),
    s = r(492494);
let o = [];
function a(e) {
    let n = (0, l.bG)([i.Ay], () => i.Ay.getGuildEmoji(e), [e]);
    return t.useMemo(() => (null == n ? o : n.filter((n) => (0, s.Eg)(n, e))), [n, e]);
}

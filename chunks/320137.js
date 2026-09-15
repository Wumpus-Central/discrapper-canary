t.d(n, { A: () => a });
var r = t(582128),
    l = t(17928),
    i = t(236285),
    s = t(492494);
let o = [];
function a(e) {
    let n = (0, l.bG)([i.Ay], () => i.Ay.getGuildEmoji(e), [e]);
    return r.useMemo(() => (null == n ? o : n.filter((n) => (0, s.Eg)(n, e))), [n, e]);
}

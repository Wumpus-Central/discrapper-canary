n.d(t, { A: () => l });
var r = n(64700),
    i = n(311907),
    a = n(508675),
    s = n(492494);
let o = [];
function l(e) {
    let t = (0, i.bG)([a.Ay], () => a.Ay.getGuildEmoji(e), [e]);
    return r.useMemo(() => (null == t ? o : t.filter((t) => (0, s.Eg)(t, e))), [t, e]);
}

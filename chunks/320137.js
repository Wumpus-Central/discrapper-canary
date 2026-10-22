n.d(t, { A: () => u });
var l = n(582128),
    o = n(17928),
    r = n(236285),
    i = n(492494);
let a = [];
function u(e) {
    let t = (0, o.bG)([r.Ay], () => r.Ay.getGuildEmoji(e), [e]);
    return l.useMemo(() => (null == t ? a : t.filter((t) => (0, i.Eg)(t, e))), [t, e]);
}

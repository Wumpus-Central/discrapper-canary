n.d(t, { A: () => s });
var l = n(582128),
    o = n(17928),
    i = n(236285),
    r = n(492494);
let a = [];
function s(e) {
    let t = (0, o.bG)([i.Ay], () => i.Ay.getGuildEmoji(e), [e]);
    return l.useMemo(() => (null == t ? a : t.filter((t) => (0, r.Eg)(t, e))), [t, e]);
}

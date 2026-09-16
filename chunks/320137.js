n.d(t, { A: () => s });
var r = n(582128),
    l = n(17928),
    i = n(236285),
    o = n(492494);
let a = [];
function s(e) {
    let t = (0, l.bG)([i.Ay], () => i.Ay.getGuildEmoji(e), [e]);
    return r.useMemo(() => (null == t ? a : t.filter((t) => (0, o.Eg)(t, e))), [t, e]);
}

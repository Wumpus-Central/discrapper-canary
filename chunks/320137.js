n.d(t, { A: () => s });
var r = n(582128),
    l = n(17928),
    o = n(236285),
    i = n(492494);
let a = [];
function s(e) {
    let t = (0, l.bG)([o.Ay], () => o.Ay.getGuildEmoji(e), [e]);
    return r.useMemo(() => (null == t ? a : t.filter((t) => (0, i.Eg)(t, e))), [t, e]);
}

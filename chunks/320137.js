t.d(a, { A: () => u });
var l = t(582128),
    n = t(17928),
    r = t(236285),
    i = t(492494);
let s = [];
function u(e) {
    let a = (0, n.bG)([r.Ay], () => r.Ay.getGuildEmoji(e), [e]);
    return l.useMemo(() => (null == a ? s : a.filter((a) => (0, i.Eg)(a, e))), [a, e]);
}

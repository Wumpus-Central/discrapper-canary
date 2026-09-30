(e.d(t, { M: () => a, y: () => h }), e(321073));
var l = e(71393),
    r = e(403362),
    i = e(652215),
    u = e(375708);
function h(n) {
    let t = n.children
            .map((n) => {
                let t = n.id,
                    e = l.A.getGuild(t);
                return null != e ? e.name : null;
            })
            .filter(r.Vq),
        e = 2 * i.F05,
        u = [];
    for (let n of t) (n.length < e || 0 === u.length) && (u.push(n), (e -= n.length));
    return `${u.join(", ")}${u.length < t.length ? ", ..." : ""}`;
}
function a(n) {
    if (null != n.name && "" !== n.name) return n.name;
    let t = h(n);
    return "" !== t ? t : u.intl.string(u.t.xV9hVh);
}

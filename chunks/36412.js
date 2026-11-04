e(321073);
var l = e(71393),
    r = e(403362);
e(652215);
var i = e(792996);
function u(n) {
    let t = n.children
            .map((n) => {
                let t = n.id,
                    e = l.A.getGuild(t);
                return null != e ? e.name : null;
            })
            .filter(r.Vq),
        e = 64,
        i = [];
    for (let n of t) (n.length < e || 0 === i.length) && (i.push(n), (e -= n.length));
    return `${i.join(", ")}${i.length < t.length ? ", ..." : ""}`;
}
e.d(
    t,
    {},
    {
        M: function (n) {
            if (null != n.name && "" !== n.name) return n.name;
            let t = u(n);
            return "" !== t ? t : i.intl.string(i.t.xV9hVh);
        },
        y: u,
    },
);

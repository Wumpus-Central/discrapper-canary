n.d(t, { A: () => c }), n(321073);
var i = n(627968);
n(64700);
var a = n(311907),
    l = n(342952),
    r = n(397927),
    s = n(696451),
    o = n(287809);
function c(e) {
    let { guildId: t, className: n } = e,
        c = (0, a.yK)([s.Ay, o.default], () => {
            let e = [];
            for (let n of s.Ay.getMembers(t)) {
                if (null == n.premiumSince) continue;
                let t = o.default.getUser(n.userId);
                if (null != t && (e.push(t), 7 === e.length)) break;
            }
            return e;
        }, [t]);
    return 0 === c.length
        ? null
        : (0, i.jsx)(l.A, { className: n, users: c, maxUsers: 7, guildId: t, size: r._3J.SIZE_24 });
}

n.d(t, { A: () => g }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(534514),
    r = n(197305),
    o = n(711014),
    d = n(827693),
    u = n(985018),
    c = n(942300);
function g() {
    let e = (0, l.bG)([r.A], () => r.A.affinities),
        t = (0, l.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()),
        n = s.useMemo(() => {
            let n = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && n.length < 3; e++) {
                let i = t[e];
                n.includes(i) || n.push(i);
            }
            return n;
        }, [e, t]);
    return 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              className: c.i,
              children: [
                  (0, i.jsx)(a.D, { variant: "heading-md/semibold", children: u.intl.string(u.t.r90Wgo) }),
                  (0, i.jsx)("div", { className: c.k, children: n.map((e) => (0, i.jsx)(d.A, { guildId: e }, e)) }),
              ],
          });
}

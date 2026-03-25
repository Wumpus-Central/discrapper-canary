n.d(t, { A: () => m }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(197305),
    o = n(711014),
    d = n(827693),
    c = n(985018),
    u = n(511767);
function m(e) {
    let { canAddBoosts: t } = e,
        n = (0, l.bG)([r.A], () => r.A.affinities),
        m = (0, l.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()),
        _ = s.useMemo(() => {
            let e = n.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < m.length && e.length < 3; t++) {
                let n = m[t];
                e.includes(n) || e.push(n);
            }
            return e;
        }, [n, m]);
    return 0 === _.length
        ? null
        : (0, i.jsxs)("div", {
              className: u.i,
              children: [
                  t && (0, i.jsx)(a.Heading, { variant: "heading-md/semibold", children: c.intl.string(c.t.r90Wgo) }),
                  (0, i.jsx)("div", { className: u.k, children: _.map((e) => (0, i.jsx)(d.A, { guildId: e }, e)) }),
              ],
          });
}

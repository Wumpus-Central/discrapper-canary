n.d(t, {
    A: () => p,
}),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(197305),
    o = n(711014),
    c = n(686423),
    d = n(358172),
    u = n(985018),
    _ = n(853762);
let p = function (e) {
    let { canAddBoosts: t, canApplyBoosts: n } = e,
        p = (0, l.bG)([a.A], () => a.A.affinities),
        m = (0, l.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()),
        g = i.useMemo(() => {
            let e = p.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < m.length && !(e.length >= 3); t++) {
                let n = m[t];
                e.includes(n) || e.push(n);
            }
            return e;
        }, [p, m]);
    return 0 === g.length
        ? null
        : (0, r.jsxs)("div", {
              className: _.iE,
              children: [
                  t &&
                      (0, r.jsx)(s.Heading, {
                          variant: "heading-lg/semibold",
                          className: _.wx,
                          children: u.intl.string(u.t.r90Wgo),
                      }),
                  g.map((e) =>
                      (0, r.jsx)(
                          d.A,
                          {
                              className: _.ZS,
                              guildId: e,
                              boostingVariant: !0,
                          },
                          e,
                      ),
                  ),
                  m.length > 3 && n && (0, r.jsx)(c.A, {}),
              ],
          });
};

n.d(t, { A: () => m }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(397927),
    l = n(197305),
    o = n(711014),
    c = n(686423),
    d = n(358172),
    u = n(985018),
    _ = n(853762);
let m = function (e) {
    let { canAddBoosts: t, canApplyBoosts: n } = e,
        m = (0, r.bG)([l.A], () => l.A.affinities),
        A = (0, r.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()),
        g = s.useMemo(() => {
            let e = m.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < A.length && !(e.length >= 3); t++) {
                let n = A[t];
                e.includes(n) || e.push(n);
            }
            return e;
        }, [m, A]);
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: _.iE,
              children: [
                  t &&
                      (0, i.jsx)(a.Heading, {
                          variant: "heading-lg/semibold",
                          className: _.wx,
                          children: u.intl.string(u.t.r90Wgo),
                      }),
                  g.map((e) => (0, i.jsx)(d.A, { className: _.ZS, guildId: e, boostingVariant: !0 }, e)),
                  A.length > 3 && n && (0, i.jsx)(c.A, {}),
              ],
          });
};

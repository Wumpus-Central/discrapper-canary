n.d(t, { A: () => _ }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(197305),
    l = n(711014),
    c = n(686423),
    u = n(358172),
    d = n(985018),
    f = n(853762);
let p = 3,
    _ = function (e) {
        let { canAddBoosts: t, canApplyBoosts: n } = e,
            _ = (0, a.bG)([o.A], () => o.A.affinities),
            h = (0, a.bG)([l.Ay], () => l.Ay.getFlattenedGuildIds()),
            m = i.useMemo(() => {
                let e = _.slice(0, p).map((e) => e.guildId);
                for (let t = 0; t < h.length && !(e.length >= 3); t++) {
                    let n = h[t];
                    e.includes(n) || e.push(n);
                }
                return e;
            }, [_, h]);
        return 0 === m.length
            ? null
            : (0, r.jsxs)("div", {
                  className: f.iE,
                  children: [
                      t &&
                          (0, r.jsx)(s.Heading, {
                              variant: "heading-lg/semibold",
                              className: f.wx,
                              children: d.intl.string(d.t.r90Wgo),
                          }),
                      m.map((e) =>
                          (0, r.jsx)(
                              u.A,
                              {
                                  className: f.ZS,
                                  guildId: e,
                                  boostingVariant: !0,
                              },
                              e,
                          ),
                      ),
                      h.length > p && n && (0, r.jsx)(c.A, {}),
                  ],
              });
    };

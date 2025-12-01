n.d(t, { Z: () => _ }), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(165630),
    l = n(771845),
    c = n(11844),
    u = n(300037),
    d = n(388032),
    f = n(567897);
let p = 3,
    _ = function (e) {
        let { canAddBoosts: t, canApplyBoosts: n } = e,
            _ = (0, a.e7)([s.Z], () => s.Z.affinities),
            m = (0, a.e7)([l.ZP], () => l.ZP.getFlattenedGuildIds()),
            h = i.useMemo(() => {
                let e = _.slice(0, p).map((e) => e.guildId);
                for (let t = 0; t < m.length && !(e.length >= 3); t++) {
                    let n = m[t];
                    e.includes(n) || e.push(n);
                }
                return e;
            }, [_, m]);
        return 0 === h.length
            ? null
            : (0, r.jsxs)("div", {
                  className: f.wrapper,
                  children: [
                      t &&
                          (0, r.jsx)(o.Heading, {
                              variant: "heading-lg/semibold",
                              className: f.header,
                              children: d.intl.string(d.t.r90Wgo),
                          }),
                      h.map((e) =>
                          (0, r.jsx)(
                              u.Z,
                              {
                                  className: f.recommendedServerCard,
                                  guildId: e,
                                  boostingVariant: !0,
                              },
                              e,
                          ),
                      ),
                      m.length > p && n && (0, r.jsx)(c.Z, {}),
                  ],
              });
    };

n.d(t, { Z: () => p }), n(539854);
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
let _ = 3,
    p = function (e) {
        let { canAddBoosts: t, canApplyBoosts: n } = e,
            p = (0, a.e7)([s.Z], () => s.Z.affinities),
            h = (0, a.e7)([l.ZP], () => l.ZP.getFlattenedGuildIds()),
            m = i.useMemo(() => {
                let e = p.slice(0, _).map((e) => e.guildId);
                for (let t = 0; t < h.length && !(e.length >= 3); t++) {
                    let n = h[t];
                    e.includes(n) || e.push(n);
                }
                return e;
            }, [p, h]);
        return 0 === m.length
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
                      m.map((e) =>
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
                      h.length > _ && n && (0, r.jsx)(c.Z, {}),
                  ],
              });
    };

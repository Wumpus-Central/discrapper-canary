r.d(t, { q: () => g }), r(388685);
var n = r(255367),
    a = r(73800),
    l = r(442837),
    s = r(481060),
    i = r(565138),
    o = r(430824),
    c = r(496675),
    u = r(981631),
    d = r(588687);
let p = (e) => ({
        label: e.name,
        value: e.id
    }),
    h = (e) => c.Z.can(u.Plq.CREATE_GUILD_EXPRESSIONS, e),
    g = (e) => {
        let { onChange: t, selected: r, onError: c } = e,
            u = (0, l.e7)([o.Z], () => o.Z.getGuilds()),
            g = a.useMemo(() => Object.values(u).filter(h).map(p), [u]),
            m = a.useCallback(
                (e) => {
                    let [t] = e;
                    if (null == t || null == t.value) return null;
                    let r = u[t.value];
                    return null == r
                        ? null
                        : (0, n.jsx)(i.Z, {
                              guild: r,
                              size: i.Z.Sizes.SMALLER,
                              active: !0
                          });
                },
                [u]
            ),
            f = a.useCallback(
                (e) => {
                    if (null == e || null == e.value) return null;
                    let t = u[e.value];
                    return null == t
                        ? null
                        : (0, n.jsxs)('div', {
                              className: d.guildSelectOption,
                              children: [
                                  (0, n.jsx)(i.Z, {
                                      guild: t,
                                      size: i.Z.Sizes.MEDIUM,
                                      active: !0,
                                      className: d.guildSelectOptionIcon
                                  }),
                                  (0, n.jsx)(s.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-muted',
                                      className: d.guildSelectOptionLabel,
                                      children: e.label
                                  })
                              ]
                          });
                },
                [u]
            );
        return (a.useEffect(() => {
            if (g.length < 1) return void c();
            null == r && t(g[0].value);
        }, [g, t, c, r]),
        g.length < 1)
            ? null
            : (0, n.jsx)(s.q4e, {
                  className: d.guildSelector,
                  onChange: t,
                  options: g,
                  popoutPosition: 'top',
                  popoutWidth: 240,
                  renderOptionLabel: f,
                  renderOptionValue: m,
                  value: r
              });
    };

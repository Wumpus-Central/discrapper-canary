n.d(t, { q: () => g }), n(388685);
var r = n(255367),
    a = n(73800),
    l = n(442837),
    s = n(481060),
    i = n(565138),
    o = n(430824),
    c = n(496675),
    u = n(981631),
    d = n(588687);
let p = (e) => ({
        label: e.name,
        value: e.id
    }),
    h = (e) => c.Z.can(u.Plq.CREATE_GUILD_EXPRESSIONS, e),
    g = (e) => {
        let { onChange: t, selected: n, onError: c } = e,
            u = (0, l.e7)([o.Z], () => o.Z.getGuilds()),
            g = a.useMemo(() => Object.values(u).filter(h).map(p), [u]),
            m = a.useCallback(
                (e) => {
                    let [t] = e;
                    if (null == t || null == t.value) return null;
                    let n = u[t.value];
                    return null == n
                        ? null
                        : (0, r.jsx)(i.Z, {
                              guild: n,
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
                        : (0, r.jsxs)('div', {
                              className: d.guildSelectOption,
                              children: [
                                  (0, r.jsx)(i.Z, {
                                      guild: t,
                                      size: i.Z.Sizes.MEDIUM,
                                      active: !0,
                                      className: d.guildSelectOptionIcon
                                  }),
                                  (0, r.jsx)(s.Text, {
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
            null == n && t(g[0].value);
        }, [g, t, c, n]),
        g.length < 1)
            ? null
            : (0, r.jsx)(s.q4e, {
                  className: d.guildSelector,
                  onChange: t,
                  options: g,
                  popoutPosition: 'top',
                  popoutWidth: 240,
                  renderOptionLabel: f,
                  renderOptionValue: m,
                  value: n
              });
    };

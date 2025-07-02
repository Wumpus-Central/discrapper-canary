(n.d(t, { q: () => g }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(442837),
    i = n(481060),
    s = n(565138),
    o = n(430824),
    u = n(496675),
    c = n(981631),
    d = n(588687);
let h = (e) => ({
        label: e.name,
        value: e.id
    }),
    p = (e) => u.Z.can(c.Plq.CREATE_GUILD_EXPRESSIONS, e),
    g = (e) => {
        let { onChange: t, selected: n, onError: u, labelledBy: c } = e,
            g = (0, a.e7)([o.Z], () => o.Z.getGuilds()),
            m = l.useMemo(() => Object.values(g).filter(p).map(h), [g]),
            f = l.useCallback(
                (e) => {
                    let [t] = e;
                    if (null == t || null == t.value) return null;
                    let n = g[t.value];
                    return null == n
                        ? null
                        : (0, r.jsxs)('div', {
                              className: d.value,
                              children: [
                                  (0, r.jsx)(s.Z, {
                                      guild: n,
                                      size: s.Z.Sizes.SMALLER,
                                      active: !0,
                                      className: d.icon
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      variant: 'text-sm/normal',
                                      className: d.text,
                                      children: t.label
                                  })
                              ]
                          });
                },
                [g]
            ),
            v = l.useCallback(
                (e) => {
                    if (null == e || null == e.value) return null;
                    let t = g[e.value];
                    return null == t
                        ? null
                        : (0, r.jsxs)('div', {
                              className: d.option,
                              children: [
                                  (0, r.jsx)(s.Z, {
                                      guild: t,
                                      size: s.Z.Sizes.MEDIUM,
                                      active: !0,
                                      className: d.icon
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-muted',
                                      className: d.text,
                                      children: e.label
                                  })
                              ]
                          });
                },
                [g]
            );
        return (l.useEffect(() => {
            if (m.length < 1) return void u();
            null == n && t(m[0].value);
        }, [m, t, u, n]),
        m.length < 1)
            ? null
            : (0, r.jsx)(i.q4e, {
                  className: d.guildSelector,
                  onChange: t,
                  options: m,
                  popoutPosition: 'top',
                  popoutWidth: 240,
                  renderOptionLabel: v,
                  renderOptionValue: f,
                  value: n,
                  'aria-labelledby': c
              });
    };

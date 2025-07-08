(n.d(t, { q: () => m }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(442837),
    i = n(481060),
    s = n(565138),
    o = n(430824),
    c = n(496675),
    u = n(981631),
    d = n(388032),
    h = n(588687);
let p = (e) => ({
        label: e.name,
        value: e.id
    }),
    g = (e) => c.Z.can(u.Plq.CREATE_GUILD_EXPRESSIONS, e),
    m = (e) => {
        let { onChange: t, selected: n, onError: c, labelledBy: u } = e,
            m = (0, a.e7)([o.Z], () => o.Z.getGuilds()),
            f = l.useMemo(() => Object.values(m).filter(g).map(p), [m]),
            v = l.useCallback(
                (e) => {
                    let [t] = e;
                    if (null == t || null == t.value) return null;
                    let n = m[t.value];
                    return null == n
                        ? null
                        : (0, r.jsxs)('div', {
                              className: h.value,
                              children: [
                                  (0, r.jsx)(s.Z, {
                                      guild: n,
                                      size: s.Z.Sizes.SMALLER,
                                      active: !0,
                                      className: h.icon
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      variant: 'text-sm/normal',
                                      className: h.text,
                                      children: t.label
                                  })
                              ]
                          });
                },
                [m]
            ),
            x = l.useCallback(
                (e) => {
                    if (null == e || null == e.value) return null;
                    let t = m[e.value];
                    return null == t
                        ? null
                        : (0, r.jsxs)('div', {
                              className: h.option,
                              children: [
                                  (0, r.jsx)(s.Z, {
                                      guild: t,
                                      size: s.Z.Sizes.MEDIUM,
                                      active: !0,
                                      className: h.icon
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-muted',
                                      className: h.text,
                                      children: e.label
                                  })
                              ]
                          });
                },
                [m]
            );
        return (
            l.useEffect(() => {
                if (f.length < 1) return void c();
                null == n && t(f[0].value);
            }, [f, t, c, n]),
            (0, r.jsx)(i.q4e, {
                className: h.guildSelector,
                onChange: t,
                options: f,
                popoutPosition: 'top',
                popoutWidth: 240,
                renderOptionLabel: x,
                renderOptionValue: v,
                value: n,
                'aria-labelledby': u,
                placeholder: f.length < 1 ? d.intl.string(d.t.jHpxws) : d.intl.string(d.t.XqMe3N),
                isDisabled: f.length < 1
            })
        );
    };

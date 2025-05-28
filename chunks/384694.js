r.d(t, { q: () => h }), r(388685);
var n = r(255367),
    a = r(73800),
    l = r(442837),
    i = r(481060),
    s = r(430824),
    o = r(496675),
    c = r(768581),
    u = r(981631),
    d = r(588687);
let p = (e) => ({
        label: e.name,
        value: e.id
    }),
    g = (e) => o.Z.can(u.Plq.CREATE_GUILD_EXPRESSIONS, e),
    h = (e) => {
        let { onChange: t, selected: r } = e,
            o = (0, l.e7)([s.Z], () => s.Z.getGuilds()),
            u = a.useMemo(() => Object.values(o).filter(g).map(p), [o]),
            h = a.useCallback(
                (e) => {
                    let [t] = e;
                    if (null == t || null == t.value) return null;
                    let r = o[t.value];
                    if (null == r) return t.label;
                    let a = c.ZP.getGuildIconURL({
                        id: r.id,
                        icon: r.icon,
                        size: 24,
                        canAnimate: !1
                    });
                    return a
                        ? (0, n.jsx)('img', {
                              src: a,
                              alt: t.label,
                              className: d.selectedIcon
                          })
                        : t.label;
                },
                [o]
            ),
            m = a.useCallback(
                (e) => {
                    if (null == e || null == e.value) return null;
                    let t = o[e.value];
                    if (null == t) return e.label;
                    let r = c.ZP.getGuildIconURL({
                        id: t.id,
                        icon: t.icon,
                        size: 32,
                        canAnimate: !1
                    });
                    return r
                        ? (0, n.jsxs)('div', {
                              className: d.guildSelectOption,
                              children: [
                                  (0, n.jsx)('img', {
                                      src: r,
                                      alt: e.label
                                  }),
                                  (0, n.jsx)(i.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-muted',
                                      className: d.guildSelectOptionLabel,
                                      children: e.label
                                  })
                              ]
                          })
                        : e.label;
                },
                [o]
            );
        return (0, n.jsx)(i.q4e, {
            className: d.guildSelector,
            onChange: t,
            options: u,
            popoutPosition: 'top',
            popoutWidth: 240,
            renderOptionLabel: m,
            renderOptionValue: h,
            value: r
        });
    };

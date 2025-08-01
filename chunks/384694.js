(n.d(t, { q: () => j }), n(467055), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(442837),
    i = n(481060),
    s = n(339085),
    o = n(565138),
    u = n(889564),
    c = n(430824),
    d = n(496675),
    m = n(771845),
    h = n(823379),
    g = n(267642),
    p = n(598117),
    f = n(981631),
    x = n(388032),
    v = n(588687);
let b = (e) => ({
        label: e.name,
        value: e.id
    }),
    _ = (e) => d.Z.can(f.Plq.CREATE_GUILD_EXPRESSIONS, e),
    j = (e) => {
        let { onChange: t, selected: n, onError: d, labelledBy: j, isEmojiAnimated: O } = e,
            E = (0, a.cj)([c.Z, m.ZP], () =>
                Object.fromEntries(
                    m.ZP.getFlattenedGuildIds()
                        .map((e) => c.Z.getGuild(e))
                        .filter(h.lm)
                        .map((e) => [e.id, e])
                )
            ),
            N = (0, a.cj)(
                [s.ZP],
                () =>
                    Object.fromEntries(
                        Object.entries(E).map((e) => {
                            let [t, n] = e;
                            return [
                                t,
                                (function (e) {
                                    var t;
                                    let { guild: n, emojis: r, isEmojiAnimated: l } = e,
                                        a = null != (t = r.filter((e) => e.animated === l && !(0, u.Kt)(e, n.id)).length) ? t : 0;
                                    return (0, g.y4)(n) - a;
                                })({
                                    guild: n,
                                    emojis: s.ZP.getGuildEmoji(t),
                                    isEmojiAnimated: O
                                })
                            ];
                        })
                    ),
                [E, O]
            ),
            C = l.useMemo(() => Object.values(E).filter(_).map(b), [E]),
            D = l.useCallback(
                (e) => {
                    let [t] = e;
                    if (null == t || null == t.value) return null;
                    let n = E[t.value];
                    return null == n
                        ? null
                        : (0, r.jsxs)('div', {
                              className: v.value,
                              children: [
                                  (0, r.jsx)(o.Z, {
                                      guild: n,
                                      size: o.Z.Sizes.SMALLER,
                                      active: !0,
                                      className: v.icon
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      variant: 'text-sm/normal',
                                      className: v.text,
                                      children: t.label
                                  })
                              ]
                          });
                },
                [E]
            ),
            y = l.useCallback(
                (e) => {
                    if (null == e || null == e.value) return null;
                    let t = E[e.value];
                    return null == t
                        ? null
                        : (0, r.jsxs)('div', {
                              className: v.option,
                              children: [
                                  (0, r.jsx)(o.Z, {
                                      guild: t,
                                      size: o.Z.Sizes.MEDIUM,
                                      active: !0,
                                      className: v.icon
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: v.optionLabelContainer,
                                      children: [
                                          (0, r.jsx)(i.Text, {
                                              variant: 'text-sm/medium',
                                              className: v.text,
                                              children: e.label
                                          }),
                                          (0, r.jsx)(i.Text, {
                                              variant: 'text-xs/normal',
                                              color: 'text-tertiary',
                                              className: v.text,
                                              children: x.intl.format(x.t.WkK72t, { count: N[e.value] })
                                          })
                                      ]
                                  })
                              ]
                          });
                },
                [N, E]
            );
        return (
            l.useEffect(() => {
                var e;
                C.length < 1 ? d(p.ze.NO_PERMISSIONS) : null != n && (null != (e = null == N ? void 0 : N[n]) ? e : 0) < 1 ? d(f.evJ.TOO_MANY_EMOJI) : d(null);
            }, [C, t, d, n, N]),
            (0, r.jsx)(i.q4e, {
                className: v.guildSelector,
                onChange: t,
                options: C,
                popoutPosition: 'top',
                popoutWidth: 240,
                renderOptionLabel: y,
                renderOptionValue: D,
                value: n,
                'aria-labelledby': j,
                placeholder: C.length < 1 ? x.intl.string(x.t.jHpxws) : x.intl.string(x.t['4mqeQE']),
                isDisabled: C.length < 1
            })
        );
    };

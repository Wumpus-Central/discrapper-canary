(n.d(t, { q: () => j }), n(467055), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(481060),
    o = n(339085),
    s = n(565138),
    u = n(889564),
    c = n(430824),
    d = n(496675),
    m = n(771845),
    h = n(823379),
    f = n(267642),
    g = n(598117),
    x = n(981631),
    p = n(388032),
    _ = n(588687);
let b = (e) => ({
        label: e.name,
        value: e.id
    }),
    v = (e) => d.Z.can(x.Plq.CREATE_GUILD_EXPRESSIONS, e),
    j = (e) => {
        let { onChange: t, selected: n, onError: d, labelledBy: j, isEmojiAnimated: N } = e,
            C = (0, i.cj)([c.Z, m.ZP], () =>
                Object.fromEntries(
                    m.ZP.getFlattenedGuildIds()
                        .map((e) => c.Z.getGuild(e))
                        .filter(h.lm)
                        .map((e) => [e.id, e])
                )
            ),
            E = (0, i.cj)(
                [o.ZP],
                () =>
                    Object.fromEntries(
                        Object.entries(C).map((e) => {
                            let [t, n] = e;
                            return [
                                t,
                                (function (e) {
                                    var t;
                                    let { guild: n, emojis: r, isEmojiAnimated: l } = e,
                                        i = null != (t = r.filter((e) => e.animated === l && !(0, u.Kt)(e, n.id)).length) ? t : 0;
                                    return (0, f.y4)(n) - i;
                                })({
                                    guild: n,
                                    emojis: o.ZP.getGuildEmoji(t),
                                    isEmojiAnimated: N
                                })
                            ];
                        })
                    ),
                [C, N]
            ),
            I = l.useMemo(() => Object.values(C).filter(v).map(b), [C]),
            O = l.useCallback(
                (e) => {
                    let [t] = e;
                    if (null == t || null == t.value) return null;
                    let n = C[t.value];
                    return null == n
                        ? null
                        : (0, r.jsxs)('div', {
                              className: _.value,
                              children: [
                                  (0, r.jsx)(s.Z, {
                                      guild: n,
                                      size: s.Z.Sizes.SMALLER,
                                      active: !0,
                                      className: _.icon
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      variant: 'text-sm/normal',
                                      className: _.text,
                                      children: t.label
                                  })
                              ]
                          });
                },
                [C]
            ),
            S = l.useCallback(
                (e) => {
                    if (null == e || null == e.value) return null;
                    let t = C[e.value];
                    return null == t
                        ? null
                        : (0, r.jsxs)('div', {
                              className: _.option,
                              children: [
                                  (0, r.jsx)(s.Z, {
                                      guild: t,
                                      size: s.Z.Sizes.MEDIUM,
                                      active: !0,
                                      className: _.icon
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: _.optionLabelContainer,
                                      children: [
                                          (0, r.jsx)(a.Text, {
                                              variant: 'text-sm/medium',
                                              className: _.text,
                                              children: e.label
                                          }),
                                          (0, r.jsx)(a.Text, {
                                              variant: 'text-xs/normal',
                                              color: 'text-tertiary',
                                              className: _.text,
                                              children: p.intl.format(p.t.WkK72t, { count: E[e.value] })
                                          })
                                      ]
                                  })
                              ]
                          });
                },
                [E, C]
            );
        return (
            l.useEffect(() => {
                var e;
                I.length < 1 ? d(g.ze.NO_PERMISSIONS) : null != n && (null != (e = null == E ? void 0 : E[n]) ? e : 0) < 1 ? d(x.evJ.TOO_MANY_EMOJI) : d(null);
            }, [I, t, d, n, E]),
            (0, r.jsx)(a.q4e, {
                className: _.guildSelector,
                onChange: t,
                options: I,
                popoutPosition: 'top',
                popoutWidth: 240,
                renderOptionLabel: S,
                renderOptionValue: O,
                value: n,
                'aria-labelledby': j,
                placeholder: I.length < 1 ? p.intl.string(p.t.jHpxws) : p.intl.string(p.t['4mqeQE']),
                isDisabled: I.length < 1
            })
        );
    };

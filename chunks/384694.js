(n.d(t, { q: () => j }), n(467055), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(442837),
    i = n(481060),
    s = n(339085),
    o = n(565138),
    c = n(889564),
    u = n(430824),
    d = n(496675),
    m = n(771845),
    p = n(823379),
    g = n(267642),
    h = n(598117),
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
            N = (0, a.cj)([u.Z, m.ZP], () =>
                Object.fromEntries(
                    m.ZP.getFlattenedGuildIds()
                        .map((e) => u.Z.getGuild(e))
                        .filter(p.lm)
                        .map((e) => [e.id, e])
                )
            ),
            E = (0, a.cj)(
                [s.ZP],
                () =>
                    Object.fromEntries(
                        Object.entries(N).map((e) => {
                            let [t, n] = e;
                            return [
                                t,
                                (function (e) {
                                    var t;
                                    let { guild: n, emojis: r, isEmojiAnimated: l } = e,
                                        a = null != (t = null == r ? void 0 : r.filter((e) => e.animated === l && !(0, c.Kt)(e, n.id)).length) ? t : 0;
                                    return (0, g.y4)(n) - a;
                                })({
                                    guild: n,
                                    emojis: s.ZP.getGuildEmojiOrUndefined(t),
                                    isEmojiAnimated: O
                                })
                            ];
                        })
                    ),
                [N, O]
            ),
            C = l.useMemo(() => Object.values(N).filter(_).map(b), [N]),
            y = l.useCallback(
                (e) => {
                    let [t] = e;
                    if (null == t || null == t.value) return null;
                    let n = N[t.value];
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
                [N]
            ),
            D = l.useCallback(
                (e) => {
                    if (null == e || null == e.value) return null;
                    let t = N[e.value];
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
                                              children: x.intl.format(x.t.WkK72t, { count: E[e.value] })
                                          })
                                      ]
                                  })
                              ]
                          });
                },
                [E, N]
            );
        return (
            l.useEffect(() => {
                var e;
                C.length < 1 ? d(h.ze.NO_PERMISSIONS) : null != n && (null != (e = null == E ? void 0 : E[n]) ? e : 0) < 1 ? d(f.evJ.TOO_MANY_EMOJI) : d(null);
            }, [C, t, d, n, E]),
            (0, r.jsx)(i.q4e, {
                className: v.guildSelector,
                onChange: t,
                options: C,
                popoutPosition: 'top',
                popoutWidth: 240,
                renderOptionLabel: D,
                renderOptionValue: y,
                value: n,
                'aria-labelledby': j,
                placeholder: C.length < 1 ? x.intl.string(x.t.jHpxws) : x.intl.string(x.t['4mqeQE']),
                isDisabled: C.length < 1
            })
        );
    };

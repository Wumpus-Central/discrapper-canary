(n.d(t, { q: () => b }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(442837),
    i = n(481060),
    s = n(339085),
    o = n(565138),
    c = n(889564),
    u = n(430824),
    d = n(496675),
    h = n(267642),
    g = n(598117),
    m = n(981631),
    p = n(388032),
    f = n(588687);
let v = (e) => ({
        label: e.name,
        value: e.id
    }),
    x = (e) => d.Z.can(m.Plq.CREATE_GUILD_EXPRESSIONS, e),
    b = (e) => {
        let { onChange: t, selected: n, onError: d, labelledBy: b } = e,
            _ = (0, a.e7)([u.Z], () => u.Z.getGuilds()),
            { selectedGuild: j, selectedGuildEmojis: O } = (0, a.cj)([u.Z, s.ZP], () => ({
                selectedGuild: null != n ? u.Z.getGuild(n) : void 0,
                selectedGuildEmojis: null != n ? s.ZP.getGuildEmojiOrUndefined(n) : void 0
            })),
            N = l.useMemo(() => Object.values(_).filter(x).map(v), [_]),
            E = l.useCallback(
                (e) => {
                    let [t] = e;
                    if (null == t || null == t.value) return null;
                    let n = _[t.value];
                    return null == n
                        ? null
                        : (0, r.jsxs)('div', {
                              className: f.value,
                              children: [
                                  (0, r.jsx)(o.Z, {
                                      guild: n,
                                      size: o.Z.Sizes.SMALLER,
                                      active: !0,
                                      className: f.icon
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      variant: 'text-sm/normal',
                                      className: f.text,
                                      children: t.label
                                  })
                              ]
                          });
                },
                [_]
            ),
            I = l.useCallback(
                (e) => {
                    if (null == e || null == e.value) return null;
                    let t = _[e.value];
                    return null == t
                        ? null
                        : (0, r.jsxs)('div', {
                              className: f.option,
                              children: [
                                  (0, r.jsx)(o.Z, {
                                      guild: t,
                                      size: o.Z.Sizes.MEDIUM,
                                      active: !0,
                                      className: f.icon
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-muted',
                                      className: f.text,
                                      children: e.label
                                  })
                              ]
                          });
                },
                [_]
            );
        return (
            l.useEffect(() => {
                (N.length < 1
                    ? d(g.ze.NO_PERMISSIONS)
                    : null != j &&
                        null != O &&
                        1 >
                            (function (e, t) {
                                let n = t.filter((t) => !(0, c.Kt)(t, e.id)).length;
                                return (0, h.y4)(e) - n;
                            })(j, O)
                      ? d(m.evJ.TOO_MANY_EMOJI)
                      : d(null),
                    null == n && t(N[0].value));
            }, [N, t, d, n, j, O]),
            (0, r.jsx)(i.q4e, {
                className: f.guildSelector,
                onChange: t,
                options: N,
                popoutPosition: 'top',
                popoutWidth: 240,
                renderOptionLabel: I,
                renderOptionValue: E,
                value: n,
                'aria-labelledby': b,
                placeholder: N.length < 1 ? p.intl.string(p.t.jHpxws) : p.intl.string(p.t.XqMe3N),
                isDisabled: N.length < 1
            })
        );
    };

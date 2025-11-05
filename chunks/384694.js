n.d(t, { q: () => E }), n(467055), n(388685);
var l = n(951288),
    r = n(647438),
    i = n(442837),
    a = n(481060),
    o = n(339085),
    s = n(565138),
    u = n(889564),
    c = n(430824),
    d = n(496675),
    m = n(771845),
    h = n(823379),
    g = n(267642),
    f = n(598117),
    b = n(981631),
    v = n(388032),
    p = n(503366);
let x = (e) => ({
        label: e.name,
        value: e.id,
    }),
    j = (e) => d.Z.can(b.Plq.CREATE_GUILD_EXPRESSIONS, e),
    E = (e) => {
        let {
                onChange: t,
                selected: n,
                onError: d,
                labelledBy: E,
                isEmojiAnimated: _,
                label: O,
                required: y,
                errorMessage: C,
            } = e,
            I = (0, i.cj)([c.Z, m.ZP], () =>
                Object.fromEntries(
                    m.ZP.getFlattenedGuildIds()
                        .map((e) => c.Z.getGuild(e))
                        .filter(h.lm)
                        .map((e) => [e.id, e]),
                ),
            ),
            N = (0, i.cj)(
                [o.ZP],
                () =>
                    Object.fromEntries(
                        Object.entries(I).map((e) => {
                            let [t, n] = e;
                            return [
                                t,
                                (function (e) {
                                    var t;
                                    let { guild: n, emojis: l, isEmojiAnimated: r } = e,
                                        i =
                                            null !=
                                            (t = l.filter((e) => e.animated === r && !(0, u.Kt)(e, n.id)).length)
                                                ? t
                                                : 0;
                                    return (0, g.y4)(n) - i;
                                })({
                                    guild: n,
                                    emojis: o.ZP.getGuildEmoji(t),
                                    isEmojiAnimated: _,
                                }),
                            ];
                        }),
                    ),
                [I, _],
            ),
            S = r.useMemo(() => Object.values(I).filter(j).map(x), [I]),
            w = r.useCallback(
                (e) => {
                    let [t] = e;
                    if (null == t || null == t.value) return null;
                    let n = I[t.value];
                    return null == n
                        ? null
                        : (0, l.jsxs)("div", {
                              className: p.value,
                              children: [
                                  (0, l.jsx)(s.Z, {
                                      guild: n,
                                      size: s.Z.Sizes.SMALLER,
                                      active: !0,
                                      className: p.icon,
                                  }),
                                  (0, l.jsx)(a.Text, {
                                      variant: "text-sm/normal",
                                      className: p.label,
                                      children: t.label,
                                  }),
                              ],
                          });
                },
                [I],
            ),
            M = r.useCallback(
                (e) => {
                    if (null == e || null == e.value) return null;
                    let t = I[e.value];
                    return null == t
                        ? null
                        : (0, l.jsxs)("div", {
                              className: p.option,
                              children: [
                                  (0, l.jsx)(s.Z, {
                                      guild: t,
                                      size: s.Z.Sizes.MEDIUM,
                                      active: !0,
                                      className: p.icon,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: p.optionLabelContainer,
                                      children: [
                                          (0, l.jsx)(a.Text, {
                                              variant: "text-md/medium",
                                              className: p.label,
                                              lineClamp: 1,
                                              children: e.label,
                                          }),
                                          (0, l.jsx)(a.Text, {
                                              variant: "text-xs/normal",
                                              color: "text-tertiary",
                                              className: p.sublabel,
                                              lineClamp: 1,
                                              children: v.intl.format(v.t.WkK72v, { count: N[e.value] }),
                                          }),
                                      ],
                                  }),
                              ],
                          });
                },
                [N, I],
            );
        return (
            r.useEffect(() => {
                var e;
                S.length < 1
                    ? d(f.ze.NO_PERMISSIONS)
                    : null != n && (null != (e = null == N ? void 0 : N[n]) ? e : 0) < 1
                      ? d(b.evJ.TOO_MANY_EMOJI)
                      : d(null);
            }, [S, t, d, n, N]),
            (0, l.jsx)(a.q4e, {
                label: O,
                required: y,
                errorMessage: C,
                onChange: t,
                options: S,
                popoutPosition: "bottom",
                popoutWidth: 240,
                renderOptionLabel: M,
                renderOptionValue: w,
                value: n,
                "aria-labelledby": E,
                placeholder: S.length < 1 ? v.intl.string(v.t.jHpxwo) : v.intl.string(v.t["4mqeQO"]),
                isDisabled: S.length < 1,
            })
        );
    };

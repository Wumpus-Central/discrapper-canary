n.d(t, { q: () => y }), n(467055), n(388685);
var r = n(951288),
    l = n(647438),
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
    p = n(981631),
    x = n(388032),
    b = n(503366);
let v = (e) => ({
        label: e.name,
        value: e.id,
    }),
    j = (e) => d.Z.can(p.Plq.CREATE_GUILD_EXPRESSIONS, e),
    y = (e) => {
        let {
                onChange: t,
                selected: n,
                onError: d,
                labelledBy: y,
                isEmojiAnimated: _,
                label: O,
                required: E,
                errorMessage: N,
            } = e,
            C = (0, i.cj)([c.Z, m.ZP], () =>
                Object.fromEntries(
                    m.ZP.getFlattenedGuildIds()
                        .map((e) => c.Z.getGuild(e))
                        .filter(h.lm)
                        .map((e) => [e.id, e]),
                ),
            ),
            w = (0, i.cj)(
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
                                        i =
                                            null !=
                                            (t = r.filter((e) => e.animated === l && !(0, u.Kt)(e, n.id)).length)
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
                [C, _],
            ),
            I = l.useMemo(() => Object.values(C).filter(j).map(v), [C]),
            S = l.useCallback(
                (e) => {
                    let [t] = e;
                    if (null == t || null == t.value) return null;
                    let n = C[t.value];
                    return null == n
                        ? null
                        : (0, r.jsxs)("div", {
                              className: b.value,
                              children: [
                                  (0, r.jsx)(s.Z, {
                                      guild: n,
                                      size: s.Z.Sizes.SMALLER,
                                      active: !0,
                                      className: b.icon,
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      variant: "text-sm/normal",
                                      className: b.text,
                                      children: t.label,
                                  }),
                              ],
                          });
                },
                [C],
            ),
            P = l.useCallback(
                (e) => {
                    if (null == e || null == e.value) return null;
                    let t = C[e.value];
                    return null == t
                        ? null
                        : (0, r.jsxs)("div", {
                              className: b.option,
                              children: [
                                  (0, r.jsx)(s.Z, {
                                      guild: t,
                                      size: s.Z.Sizes.MEDIUM,
                                      active: !0,
                                      className: b.icon,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: b.optionLabelContainer,
                                      children: [
                                          (0, r.jsx)(a.Text, {
                                              variant: "text-sm/medium",
                                              className: b.text,
                                              children: e.label,
                                          }),
                                          (0, r.jsx)(a.Text, {
                                              variant: "text-xs/normal",
                                              color: "text-tertiary",
                                              className: b.text,
                                              children: x.intl.format(x.t.WkK72t, { count: w[e.value] }),
                                          }),
                                      ],
                                  }),
                              ],
                          });
                },
                [w, C],
            );
        return (
            l.useEffect(() => {
                var e;
                I.length < 1
                    ? d(f.ze.NO_PERMISSIONS)
                    : null != n && (null != (e = null == w ? void 0 : w[n]) ? e : 0) < 1
                      ? d(p.evJ.TOO_MANY_EMOJI)
                      : d(null);
            }, [I, t, d, n, w]),
            (0, r.jsx)(a.q4e, {
                label: O,
                required: E,
                errorMessage: N,
                onChange: t,
                options: I,
                popoutPosition: "top",
                popoutWidth: 240,
                renderOptionLabel: P,
                renderOptionValue: S,
                value: n,
                "aria-labelledby": y,
                placeholder: I.length < 1 ? x.intl.string(x.t.jHpxws) : x.intl.string(x.t["4mqeQE"]),
                isDisabled: I.length < 1,
            })
        );
    };

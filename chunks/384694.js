n.d(t, { q: () => _ }), n(467055), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(339085),
    o = n(565138),
    u = n(889564),
    c = n(430824),
    d = n(496675),
    h = n(771845),
    m = n(823379),
    g = n(267642),
    p = n(598117),
    f = n(981631),
    v = n(388032),
    x = n(503366);
let b = (e) => ({
        label: e.name,
        value: e.id,
    }),
    j = (e) => d.Z.can(f.Plq.CREATE_GUILD_EXPRESSIONS, e),
    _ = (e) => {
        let {
                onChange: t,
                selected: n,
                onError: d,
                labelledBy: _,
                isEmojiAnimated: O,
                label: y,
                required: E,
                errorMessage: D,
            } = e,
            w = (0, l.cj)([c.Z, h.ZP], () =>
                Object.fromEntries(
                    h.ZP.getFlattenedGuildIds()
                        .map((e) => c.Z.getGuild(e))
                        .filter(m.lm)
                        .map((e) => [e.id, e]),
                ),
            ),
            N = (0, l.cj)(
                [s.ZP],
                () =>
                    Object.fromEntries(
                        Object.entries(w).map((e) => {
                            let [t, n] = e;
                            return [
                                t,
                                (function (e) {
                                    var t;
                                    let { guild: n, emojis: r, isEmojiAnimated: i } = e,
                                        l =
                                            null !=
                                            (t = r.filter((e) => e.animated === i && !(0, u.Kt)(e, n.id)).length)
                                                ? t
                                                : 0;
                                    return (0, g.y4)(n) - l;
                                })({
                                    guild: n,
                                    emojis: s.ZP.getGuildEmoji(t),
                                    isEmojiAnimated: O,
                                }),
                            ];
                        }),
                    ),
                [w, O],
            ),
            C = i.useMemo(() => Object.values(w).filter(j).map(b), [w]),
            I = i.useCallback(
                (e) => {
                    let [t] = e;
                    if (null == t || null == t.value) return null;
                    let n = w[t.value];
                    return null == n
                        ? null
                        : (0, r.jsxs)("div", {
                              className: x.value,
                              children: [
                                  (0, r.jsx)(o.Z, {
                                      guild: n,
                                      size: o.Z.Sizes.SMALLER,
                                      active: !0,
                                      className: x.icon,
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      variant: "text-sm/normal",
                                      className: x.text,
                                      children: t.label,
                                  }),
                              ],
                          });
                },
                [w],
            ),
            S = i.useCallback(
                (e) => {
                    if (null == e || null == e.value) return null;
                    let t = w[e.value];
                    return null == t
                        ? null
                        : (0, r.jsxs)("div", {
                              className: x.option,
                              children: [
                                  (0, r.jsx)(o.Z, {
                                      guild: t,
                                      size: o.Z.Sizes.MEDIUM,
                                      active: !0,
                                      className: x.icon,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: x.optionLabelContainer,
                                      children: [
                                          (0, r.jsx)(a.Text, {
                                              variant: "text-sm/medium",
                                              className: x.text,
                                              children: e.label,
                                          }),
                                          (0, r.jsx)(a.Text, {
                                              variant: "text-xs/normal",
                                              color: "text-tertiary",
                                              className: x.text,
                                              children: v.intl.format(v.t.WkK72v, { count: N[e.value] }),
                                          }),
                                      ],
                                  }),
                              ],
                          });
                },
                [N, w],
            );
        return (
            i.useEffect(() => {
                var e;
                C.length < 1
                    ? d(p.ze.NO_PERMISSIONS)
                    : null != n && (null != (e = null == N ? void 0 : N[n]) ? e : 0) < 1
                      ? d(f.evJ.TOO_MANY_EMOJI)
                      : d(null);
            }, [C, t, d, n, N]),
            (0, r.jsx)(a.q4e, {
                label: y,
                required: E,
                errorMessage: D,
                onChange: t,
                options: C,
                popoutPosition: "top",
                popoutWidth: 240,
                renderOptionLabel: S,
                renderOptionValue: I,
                value: n,
                "aria-labelledby": _,
                placeholder: C.length < 1 ? v.intl.string(v.t.jHpxwo) : v.intl.string(v.t["4mqeQO"]),
                isDisabled: C.length < 1,
            })
        );
    };

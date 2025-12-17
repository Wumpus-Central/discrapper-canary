n.d(t, { q: () => O }), n(467055), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(442837),
    a = n(199849),
    o = n(481060),
    s = n(339085),
    u = n(565138),
    c = n(889564),
    d = n(430824),
    m = n(496675),
    h = n(771845),
    g = n(823379),
    b = n(267642),
    f = n(598117),
    v = n(981631),
    p = n(388032),
    x = n(288336);
let j = (e) => ({
        label: e.name,
        value: e.id,
    }),
    E = (e) => m.Z.can(v.Plq.CREATE_GUILD_EXPRESSIONS, e),
    O = (e) => {
        let {
                onChange: t,
                selected: n,
                onError: m,
                labelledBy: O,
                isEmojiAnimated: y,
                label: I,
                required: C,
                errorMessage: N,
            } = e,
            _ = (0, i.cj)([d.Z, h.ZP], () =>
                Object.fromEntries(
                    h.ZP.getFlattenedGuildIds()
                        .map((e) => d.Z.getGuild(e))
                        .filter(g.lm)
                        .map((e) => [e.id, e]),
                ),
            ),
            w = (0, i.cj)(
                [s.ZP],
                () =>
                    Object.fromEntries(
                        Object.entries(_).map((e) => {
                            let [t, n] = e;
                            return [
                                t,
                                (function (e) {
                                    var t;
                                    let { guild: n, emojis: l, isEmojiAnimated: r } = e,
                                        i =
                                            null !=
                                            (t = l.filter((e) => e.animated === r && !(0, c.Kt)(e, n.id)).length)
                                                ? t
                                                : 0;
                                    return (0, b.y4)(n) - i;
                                })({
                                    guild: n,
                                    emojis: s.ZP.getGuildEmoji(t),
                                    isEmojiAnimated: y,
                                }),
                            ];
                        }),
                    ),
                [_, y],
            ),
            S = r.useMemo(() => Object.values(_).filter(E).map(j), [_]),
            M = r.useCallback(
                (e) => {
                    let [t] = e;
                    if (null == t || null == t.value) return null;
                    let n = _[t.value];
                    return null == n
                        ? null
                        : (0, l.jsxs)("div", {
                              className: x.value,
                              children: [
                                  (0, l.jsx)(u.Z, {
                                      guild: n,
                                      size: u.Z.Sizes.SMALLER,
                                      active: !0,
                                      className: x.icon,
                                  }),
                                  (0, l.jsx)(o.Text, {
                                      variant: "text-md/normal",
                                      className: x.label,
                                      children: t.label,
                                  }),
                              ],
                          });
                },
                [_],
            ),
            A = r.useCallback(
                (e) => {
                    if (null == e || null == e.value) return null;
                    let t = _[e.value];
                    return null == t
                        ? null
                        : (0, l.jsxs)("div", {
                              className: x.option,
                              children: [
                                  (0, l.jsx)(u.Z, {
                                      guild: t,
                                      size: u.Z.Sizes.MEDIUM,
                                      active: !0,
                                      className: x.icon,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: x.optionLabelContainer,
                                      children: [
                                          (0, l.jsx)(o.Text, {
                                              variant: "text-md/medium",
                                              className: x.label,
                                              lineClamp: 1,
                                              children: e.label,
                                          }),
                                          (0, l.jsx)(o.Text, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              className: x.sublabel,
                                              lineClamp: 1,
                                              children: p.intl.format(p.t.WkK72v, { count: w[e.value] }),
                                          }),
                                      ],
                                  }),
                              ],
                          });
                },
                [w, _],
            );
        return (
            r.useEffect(() => {
                var e;
                S.length < 1
                    ? m(f.ze.NO_PERMISSIONS)
                    : null != n && (null != (e = null == w ? void 0 : w[n]) ? e : 0) < 1
                      ? m(v.evJ.TOO_MANY_EMOJI)
                      : m(null);
            }, [S, t, m, n, w]),
            (0, l.jsx)(a.y6, {
                label: I,
                required: C,
                errorMessage: N,
                onChange: t,
                options: S,
                popoutPosition: "bottom",
                popoutWidth: 240,
                renderOptionLabel: A,
                renderOptionValue: M,
                value: n,
                "aria-labelledby": O,
                placeholder: S.length < 1 ? p.intl.string(p.t.jHpxwo) : p.intl.string(p.t["4mqeQO"]),
                isDisabled: S.length < 1,
            })
        );
    };

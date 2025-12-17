n.d(t, { q: () => p }), n(467055), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(442837),
    a = n(673221),
    o = n(339085),
    s = n(565138),
    u = n(889564),
    c = n(430824),
    d = n(496675),
    m = n(771845),
    g = n(823379),
    h = n(267642),
    b = n(598117),
    f = n(981631),
    v = n(388032);
let x = (e) => ({
        label: e.name,
        value: e.id,
    }),
    j = (e) => d.Z.can(f.Plq.CREATE_GUILD_EXPRESSIONS, e),
    p = (e) => {
        let {
                onChange: t,
                selected: n,
                onError: d,
                labelledBy: p,
                isEmojiAnimated: E,
                label: O,
                required: y,
                errorMessage: S,
            } = e,
            I = (0, i.cj)([c.Z, m.ZP], () =>
                Object.fromEntries(
                    m.ZP.getFlattenedGuildIds()
                        .map((e) => c.Z.getGuild(e))
                        .filter(g.lm)
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
                                    return (0, h.y4)(n) - i;
                                })({
                                    guild: n,
                                    emojis: o.ZP.getGuildEmoji(t),
                                    isEmojiAnimated: E,
                                }),
                            ];
                        }),
                    ),
                [I, E],
            ),
            _ = r.useMemo(() => Object.values(I).filter(j).map(x), [I]),
            w = r.useCallback(
                (e) => {
                    let { value: t, label: n, disabled: r } = e;
                    return {
                        id: String(t),
                        value: t,
                        label: n,
                        disabled: r,
                        leading: ((e) => {
                            if (null == e.value) return null;
                            let t = I[e.value];
                            return null == t
                                ? null
                                : (0, l.jsx)(s.Z, {
                                      guild: t,
                                      size: s.Z.Sizes.SMALLER,
                                      active: !0,
                                  });
                        })(e),
                        trailing:
                            null == e.value ? null : v.intl.formatToPlainString(v.t.WkK72v, { count: N[e.value] }),
                    };
                },
                [N, I],
            );
        return (
            r.useEffect(() => {
                var e;
                _.length < 1
                    ? d(b.ze.NO_PERMISSIONS)
                    : null != n && (null != (e = null == N ? void 0 : N[n]) ? e : 0) < 1
                      ? d(f.evJ.TOO_MANY_EMOJI)
                      : d(null);
            }, [_, t, d, n, N]),
            (0, l.jsx)(a.P, {
                label: O,
                required: y,
                selectionMode: "single",
                errorMessage: S,
                onSelectionChange: t,
                options: _,
                formatOption: w,
                value: n,
                "aria-labelledby": p,
                placeholder: _.length < 1 ? v.intl.string(v.t.jHpxwo) : v.intl.string(v.t["4mqeQO"]),
                disabled: _.length < 1,
            })
        );
    };

n.d(t, {
    v: () => _,
}),
    n(446912),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(158954),
    a = n(311907),
    s = n(508675),
    u = n(263063),
    o = n(492494),
    c = n(71393),
    d = n(576705),
    m = n(711014),
    h = n(403362),
    g = n(473145),
    b = n(80569),
    f = n(652215),
    j = n(985018);
let v = (e) => ({
        label: e.name,
        value: e.id,
    }),
    x = (e) => d.A.can(f.xBc.CREATE_GUILD_EXPRESSIONS, e),
    _ = (e) => {
        let {
                onChange: t,
                selected: n,
                onError: d,
                labelledBy: _,
                isEmojiAnimated: E,
                label: O,
                required: p,
                errorMessage: y,
            } = e,
            S = (0, a.cf)([c.A, m.Ay], () =>
                Object.fromEntries(
                    m.Ay.getFlattenedGuildIds()
                        .map((e) => c.A.getGuild(e))
                        .filter(h.Vq)
                        .map((e) => [e.id, e]),
                ),
            ),
            I = (0, a.cf)(
                [s.Ay],
                () =>
                    Object.fromEntries(
                        Object.entries(S).map((e) => {
                            let [t, n] = e;
                            return [
                                t,
                                (function (e) {
                                    var t;
                                    let { guild: n, emojis: l, isEmojiAnimated: r } = e,
                                        i =
                                            null !=
                                            (t = l.filter((e) => e.animated === r && !(0, o.Eg)(e, n.id)).length)
                                                ? t
                                                : 0;
                                    return (0, g.sN)(n) - i;
                                })({
                                    guild: n,
                                    emojis: s.Ay.getGuildEmoji(t),
                                    isEmojiAnimated: E,
                                }),
                            ];
                        }),
                    ),
                [S, E],
            ),
            A = r.useMemo(() => Object.values(S).filter(x).map(v), [S]),
            N = r.useCallback(
                (e) => {
                    let { value: t, label: n, disabled: r } = e;
                    return {
                        id: String(t),
                        value: t,
                        label: n,
                        disabled: r,
                        leading: ((e) => {
                            if (null == e.value) return null;
                            let t = S[e.value];
                            return null == t
                                ? null
                                : (0, l.jsx)(u.A, {
                                      guild: t,
                                      size: u.A.Sizes.SMALLER,
                                      active: !0,
                                  });
                        })(e),
                        trailing:
                            null == e.value
                                ? null
                                : j.intl.formatToPlainString(j.t.WkK72v, {
                                      count: I[e.value],
                                  }),
                    };
                },
                [I, S],
            );
        return (
            r.useEffect(() => {
                var e;
                A.length < 1
                    ? d(b.j.NO_PERMISSIONS)
                    : null != n && (null != (e = null == I ? void 0 : I[n]) ? e : 0) < 1
                      ? d(f.t02.TOO_MANY_EMOJI)
                      : d(null);
            }, [A, t, d, n, I]),
            (0, l.jsx)(i.l6P, {
                label: O,
                required: p,
                selectionMode: "single",
                errorMessage: y,
                onSelectionChange: t,
                options: A,
                formatOption: N,
                value: n,
                "aria-labelledby": _,
                placeholder: A.length < 1 ? j.intl.string(j.t.jHpxwo) : j.intl.string(j.t["4mqeQO"]),
                disabled: A.length < 1,
            })
        );
    };

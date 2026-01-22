n.d(t, {
    v: () => O,
}),
    n(446912),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(74818),
    s = n(508675),
    u = n(263063),
    o = n(492494),
    c = n(71393),
    d = n(576705),
    m = n(711014),
    h = n(403362),
    g = n(473145),
    f = n(80569),
    b = n(652215),
    j = n(985018);
let x = (e) => ({
        label: e.name,
        value: e.id,
    }),
    v = (e) => d.A.can(b.xBc.CREATE_GUILD_EXPRESSIONS, e),
    O = (e) => {
        let {
                onChange: t,
                selected: n,
                onError: d,
                labelledBy: O,
                isEmojiAnimated: E,
                label: p,
                required: y,
                errorMessage: S,
            } = e,
            I = (0, i.cf)([c.A, m.Ay], () =>
                Object.fromEntries(
                    m.Ay.getFlattenedGuildIds()
                        .map((e) => c.A.getGuild(e))
                        .filter(h.Vq)
                        .map((e) => [e.id, e]),
                ),
            ),
            _ = (0, i.cf)(
                [s.Ay],
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
                [I, E],
            ),
            A = r.useMemo(() => Object.values(I).filter(v).map(x), [I]),
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
                            let t = I[e.value];
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
                                      count: _[e.value],
                                  }),
                    };
                },
                [_, I],
            );
        return (
            r.useEffect(() => {
                var e;
                A.length < 1
                    ? d(f.j.NO_PERMISSIONS)
                    : null != n && (null != (e = null == _ ? void 0 : _[n]) ? e : 0) < 1
                      ? d(b.t02.TOO_MANY_EMOJI)
                      : d(null);
            }, [A, t, d, n, _]),
            (0, l.jsx)(a.l, {
                label: p,
                required: y,
                selectionMode: "single",
                errorMessage: S,
                onSelectionChange: t,
                options: A,
                formatOption: N,
                value: n,
                "aria-labelledby": O,
                placeholder: A.length < 1 ? j.intl.string(j.t.jHpxwo) : j.intl.string(j.t["4mqeQO"]),
                disabled: A.length < 1,
            })
        );
    };

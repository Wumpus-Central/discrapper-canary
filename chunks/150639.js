n.d(t, { v: () => E });
var l = n(627968),
    i = n(64700),
    r = n(158954),
    a = n(311907),
    s = n(508675),
    u = n(263063),
    o = n(492494),
    c = n(71393),
    d = n(576705),
    m = n(711014),
    h = n(403362),
    g = n(473145),
    x = n(80569),
    j = n(652215),
    f = n(985018);
let _ = (e) => ({ label: e.name, value: e.id }),
    b = (e) => d.A.can(j.xBc.CREATE_GUILD_EXPRESSIONS, e),
    E = (e) => {
        let {
                onChange: t,
                selected: n,
                onError: d,
                labelledBy: E,
                isEmojiAnimated: v,
                label: I,
                required: A,
                errorMessage: S,
            } = e,
            N = (0, a.cf)([c.A, m.Ay], () =>
                Object.fromEntries(
                    m.Ay.getFlattenedGuildIds()
                        .map((e) => c.A.getGuild(e))
                        .filter(h.Vq)
                        .map((e) => [e.id, e]),
                ),
            ),
            p = (0, a.cf)(
                [s.Ay],
                () =>
                    Object.fromEntries(
                        Object.entries(N).map((e) => {
                            let [t, n] = e;
                            return [
                                t,
                                (function (e) {
                                    let { guild: t, emojis: n, isEmojiAnimated: l } = e,
                                        i = n.filter((e) => e.animated === l && !(0, o.Eg)(e, t.id)).length ?? 0;
                                    return (0, g.sN)(t) - i;
                                })({ guild: n, emojis: s.Ay.getGuildEmoji(t), isEmojiAnimated: v }),
                            ];
                        }),
                    ),
                [N, v],
            ),
            O = i.useMemo(() => Object.values(N).filter(b).map(_), [N]),
            C = i.useCallback(
                (e) => {
                    let { value: t, label: n, disabled: i } = e;
                    return {
                        id: String(t),
                        value: t,
                        label: n,
                        disabled: i,
                        leading: ((e) => {
                            if (null == e.value) return null;
                            let t = N[e.value];
                            return null == t
                                ? null
                                : (0, l.jsx)(u.Ay, { guild: t, size: u.Ay.Sizes.SMALLER, active: !0 });
                        })(e),
                        trailing:
                            null == e.value ? null : f.intl.formatToPlainString(f.t.WkK72v, { count: p[e.value] }),
                    };
                },
                [p, N],
            );
        return (
            i.useEffect(() => {
                O.length < 1
                    ? d(x.j.NO_PERMISSIONS)
                    : null != n && (p?.[n] ?? 0) < 1
                      ? d(j.t02.TOO_MANY_EMOJI)
                      : d(null);
            }, [O, t, d, n, p]),
            (0, l.jsx)(r.l6P, {
                label: I,
                required: A,
                selectionMode: "single",
                errorMessage: S,
                onSelectionChange: t,
                options: O,
                formatOption: C,
                value: n,
                "aria-labelledby": E,
                placeholder: O.length < 1 ? f.intl.string(f.t.jHpxwo) : f.intl.string(f.t["4mqeQO"]),
                disabled: O.length < 1,
            })
        );
    };

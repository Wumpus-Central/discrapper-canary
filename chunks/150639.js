l.d(t, { v: () => E });
var n = l(627968),
    i = l(64700),
    r = l(158954),
    a = l(311907),
    s = l(508675),
    u = l(263063),
    o = l(492494),
    c = l(71393),
    d = l(576705),
    m = l(711014),
    h = l(403362),
    g = l(473145),
    x = l(80569),
    j = l(652215),
    f = l(985018);
let _ = (e) => ({ label: e.name, value: e.id }),
    b = (e) => d.A.can(j.xBc.CREATE_GUILD_EXPRESSIONS, e),
    E = (e) => {
        let {
                onChange: t,
                selected: l,
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
                            let [t, l] = e;
                            return [
                                t,
                                (function (e) {
                                    let { guild: t, emojis: l, isEmojiAnimated: n } = e,
                                        i =
                                            l.filter((e) => e.animated === n && !e.managed && !(0, o.Eg)(e, t.id))
                                                .length ?? 0;
                                    return (0, g.sN)(t) - i;
                                })({ guild: l, emojis: s.Ay.getGuildEmoji(t), isEmojiAnimated: v }),
                            ];
                        }),
                    ),
                [N, v],
            ),
            O = i.useMemo(() => Object.values(N).filter(b).map(_), [N]),
            C = i.useCallback(
                (e) => {
                    let { value: t, label: l, disabled: i } = e;
                    return {
                        id: String(t),
                        value: t,
                        label: l,
                        disabled: i,
                        leading: ((e) => {
                            if (null == e.value) return null;
                            let t = N[e.value];
                            return null == t
                                ? null
                                : (0, n.jsx)(u.Ay, { guild: t, size: u.Ay.Sizes.SMALLER, active: !0 });
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
                    : null != l && (p?.[l] ?? 0) < 1
                      ? d(j.t02.TOO_MANY_EMOJI)
                      : d(null);
            }, [O, t, d, l, p]),
            (0, n.jsx)(r.l6P, {
                label: I,
                required: A,
                selectionMode: "single",
                errorMessage: S,
                onSelectionChange: t,
                options: O,
                formatOption: C,
                value: l,
                "aria-labelledby": E,
                placeholder: O.length < 1 ? f.intl.string(f.t.jHpxwo) : f.intl.string(f.t["4mqeQO"]),
                disabled: O.length < 1,
            })
        );
    };

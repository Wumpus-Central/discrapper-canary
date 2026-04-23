l.d(t, { v: () => _ });
var n = l(627968),
    i = l(64700),
    a = l(691885),
    r = l(311907),
    s = l(508675),
    o = l(263063),
    u = l(492494),
    c = l(71393),
    d = l(576705),
    h = l(711014),
    m = l(403362),
    g = l(473145),
    x = l(80569),
    f = l(652215),
    j = l(985018);
let v = (e) => ({ label: e.name, value: e.id }),
    E = (e) => d.A.can(f.xBc.CREATE_GUILD_EXPRESSIONS, e),
    _ = (e) => {
        let {
                onChange: t,
                selected: l,
                onError: d,
                labelledBy: _,
                isEmojiAnimated: b,
                label: A,
                required: I,
                errorMessage: N,
            } = e,
            p = (0, r.cf)([c.A, h.Ay], () =>
                Object.fromEntries(
                    h.Ay.getFlattenedGuildIds()
                        .map((e) => c.A.getGuild(e))
                        .filter(m.Vq)
                        .map((e) => [e.id, e]),
                ),
            ),
            S = (0, r.cf)(
                [s.Ay],
                () =>
                    Object.fromEntries(
                        Object.entries(p).map((e) => {
                            let [t, l] = e;
                            return [
                                t,
                                (function (e) {
                                    let { guild: t, emojis: l, isEmojiAnimated: n } = e,
                                        i =
                                            l.filter((e) => e.animated === n && !e.managed && !(0, u.Eg)(e, t.id))
                                                .length ?? 0;
                                    return (0, g.sN)(t) - i;
                                })({ guild: l, emojis: s.Ay.getGuildEmoji(t), isEmojiAnimated: b }),
                            ];
                        }),
                    ),
                [p, b],
            ),
            w = i.useMemo(() => Object.values(p).filter(E).map(v), [p]),
            M = i.useCallback(
                (e) => {
                    let { value: t, label: l, disabled: i } = e;
                    return {
                        id: String(t),
                        value: t,
                        label: l,
                        disabled: i,
                        leading: ((e) => {
                            if (null == e.value) return null;
                            let t = p[e.value];
                            return null == t
                                ? null
                                : (0, n.jsx)(o.Ay, { guild: t, size: o.Ay.Sizes.SMALLER, active: !0 });
                        })(e),
                        trailing:
                            null == e.value ? null : j.intl.formatToPlainString(j.t.WkK72v, { count: S[e.value] }),
                    };
                },
                [S, p],
            );
        return (
            i.useEffect(() => {
                w.length < 1
                    ? d(x.j.NO_PERMISSIONS)
                    : null != l && (S?.[l] ?? 0) < 1
                      ? d(f.t02.TOO_MANY_EMOJI)
                      : d(null);
            }, [w, t, d, l, S]),
            (0, n.jsx)(a.l, {
                label: A,
                required: I,
                selectionMode: "single",
                errorMessage: N,
                onSelectionChange: t,
                options: w,
                formatOption: M,
                value: l,
                "aria-labelledby": _,
                placeholder: w.length < 1 ? j.intl.string(j.t.jHpxwo) : j.intl.string(j.t["4mqeQO"]),
                disabled: w.length < 1,
            })
        );
    };

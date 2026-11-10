n.d(e, { A: () => d });
var t = n(582128),
    a = n(173912),
    u = n(855986),
    r = n(734057),
    i = n(576705),
    s = n(693241),
    c = n(951178);
function o(l, e) {
    return "guild" === l.install_scope && null != l.guild_id && null != e && l.guild_id === e;
}
function d(l, e, n) {
    let {
            canLaunch: d,
            launching: f,
            failed: p,
            launch: g,
        } = (function (l, e, n) {
            var u;
            let { guildId: r, channelId: i } = n,
                [s, d] = t.useState(!1),
                [f, p] = t.useState(!1),
                g = null != e && null != i && o((u = e), r) && (u.supported_surfaces ?? []).includes(c.q7.ACTIVITY),
                y = t.useCallback(async () => {
                    if (!g || null == r || null == i) return !1;
                    (d(!0), p(!1));
                    try {
                        return (
                            await (function (l) {
                                let { applicationId: e, guildId: n, channelId: t } = l;
                                return (0, a.A)({
                                    applicationId: e,
                                    channel: null,
                                    launch: { entry: "share", sourceChannelId: t, sourceGuildId: n },
                                    showErrorModal: !1,
                                }).launched;
                            })({ applicationId: l, guildId: r, channelId: i }),
                            !0
                        );
                    } catch {
                        return (p(!0), !1);
                    } finally {
                        d(!1);
                    }
                }, [g, l, r, i]);
            return { canLaunch: g, launching: s, failed: f, launch: y };
        })(l, e, n),
        y = (function (l, e, n) {
            let { guildId: a, channelId: c } = n,
                d = null != e && null != c && o(e, a) ? a : null,
                f = (0, u.bG)(
                    [r.A],
                    () => null == d || Object.keys(r.A.getMutableGuildChannelsForGuild(d)).length > 0,
                    [d],
                ),
                p = (0, u.bG)(
                    [r.A, i.A],
                    () => (null != d && null != c ? ((0, s.A)(d, l, c)?.channelId ?? null) : null),
                    [d, l, c],
                ),
                g = t.useRef(null);
            return (
                t.useEffect(() => {
                    null == d || f || g.current === d || ((g.current = d), r.D.loadGuildIds([d]));
                }, [d, f]),
                t.useMemo(() => (null != d && null != p ? { guildId: d, channelId: p } : null), [d, p])
            );
        })(l, e, n),
        h = d ? "launch" : null != y ? "open" : null,
        A = t.useCallback(
            () =>
                "launch" === h
                    ? g()
                    : "open" !== h || null == y
                      ? Promise.resolve(!1)
                      : ((0, a.A)({ applicationId: l, channel: y }), Promise.resolve(!0)),
            [h, g, l, y],
        );
    return { type: h, launching: f, launchFailed: p, run: A };
}

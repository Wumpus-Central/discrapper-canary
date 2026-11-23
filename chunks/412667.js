n.d(e, { A: () => f });
var t = n(582128),
    a = n(173912),
    r = n(855986),
    u = n(734057),
    i = n(71393),
    s = n(576705),
    o = n(693241),
    c = n(951178);
function d(l) {
    let { guild_id: e } = l;
    return "guild" !== l.install_scope || null == e ? null : null != i.A.getGuild(e) ? e : null;
}
function f(l, e, n) {
    let {
            canLaunch: f,
            launching: p,
            failed: g,
            launch: y,
        } = (function (l, e, n) {
            let { guildId: u, channelId: s } = n,
                [o, f] = t.useState(!1),
                [p, g] = t.useState(!1),
                y = (0, r.bG)(
                    [i.A],
                    () => {
                        var l;
                        return (
                            null != e &&
                            null != s &&
                            null != d((l = e)) &&
                            (l.supported_surfaces ?? []).includes(c.q7.ACTIVITY)
                        );
                    },
                    [e, s],
                ),
                A = t.useCallback(async () => {
                    if (!y || null == s) return !1;
                    (f(!0), g(!1));
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
                            })({ applicationId: l, guildId: u, channelId: s }),
                            !0
                        );
                    } catch {
                        return (g(!0), !1);
                    } finally {
                        f(!1);
                    }
                }, [y, l, u, s]);
            return { canLaunch: y, launching: o, failed: p, launch: A };
        })(l, e, n),
        A = (function (l, e, n) {
            let { channelId: a } = n,
                c = (0, r.bG)([i.A], () => (null != e && null != a ? d(e) : null), [e, a]),
                f = (0, r.bG)(
                    [u.A],
                    () => null == c || Object.keys(u.A.getMutableGuildChannelsForGuild(c)).length > 0,
                    [c],
                ),
                p = (0, r.bG)(
                    [u.A, s.A],
                    () => (null != c && null != a ? ((0, o.A)(c, l, a)?.channelId ?? null) : null),
                    [c, l, a],
                ),
                g = t.useRef(null);
            return (
                t.useEffect(() => {
                    null == c || f || g.current === c || ((g.current = c), u.D.loadGuildIds([c]));
                }, [c, f]),
                t.useMemo(() => (null != c && null != p ? { guildId: c, channelId: p } : null), [c, p])
            );
        })(l, e, n),
        m = f ? "launch" : null != A ? "open" : null,
        h = t.useCallback(
            () =>
                "launch" === m
                    ? y()
                    : "open" !== m || null == A
                      ? Promise.resolve(!1)
                      : ((0, a.A)({ applicationId: l, channel: A }), Promise.resolve(!0)),
            [m, y, l, A],
        );
    return { type: m, launching: p, launchFailed: g, run: h };
}

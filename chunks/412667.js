n.d(e, { A: () => f });
var t = n(582128),
    a = n(173912),
    u = n(855986),
    r = n(734057),
    i = n(71393),
    s = n(576705),
    c = n(693241),
    o = n(951178);
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
            let { guildId: r, channelId: s } = n,
                [c, f] = t.useState(!1),
                [p, g] = t.useState(!1),
                y = (0, u.bG)(
                    [i.A],
                    () => {
                        var l;
                        return (
                            null != e &&
                            null != s &&
                            null != d((l = e)) &&
                            (l.supported_surfaces ?? []).includes(o.q7.ACTIVITY)
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
                            })({ applicationId: l, guildId: r, channelId: s }),
                            !0
                        );
                    } catch {
                        return (g(!0), !1);
                    } finally {
                        f(!1);
                    }
                }, [y, l, r, s]);
            return { canLaunch: y, launching: c, failed: p, launch: A };
        })(l, e, n),
        A = (function (l, e, n) {
            let { channelId: a } = n,
                o = (0, u.bG)([i.A], () => (null != e && null != a ? d(e) : null), [e, a]),
                f = (0, u.bG)(
                    [r.A],
                    () => null == o || Object.keys(r.A.getMutableGuildChannelsForGuild(o)).length > 0,
                    [o],
                ),
                p = (0, u.bG)(
                    [r.A, s.A],
                    () => (null != o && null != a ? ((0, c.A)(o, l, a)?.channelId ?? null) : null),
                    [o, l, a],
                ),
                g = t.useRef(null);
            return (
                t.useEffect(() => {
                    null == o || f || g.current === o || ((g.current = o), r.D.loadGuildIds([o]));
                }, [o, f]),
                t.useMemo(() => (null != o && null != p ? { guildId: o, channelId: p } : null), [o, p])
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

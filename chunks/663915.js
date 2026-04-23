t.d(n, { A: () => C }), t(321073);
var l = t(64700),
    i = t(735438),
    s = t.n(i),
    a = t(665260),
    r = t(311907),
    d = t(73153),
    c = t(234053),
    o = t(543465),
    u = t(403362),
    _ = t(669953),
    h = t(591552),
    m = t(355097);
function x(e) {
    d.h.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: e });
}
let A = {};
function C(e) {
    let n = (0, r.bG)([h.A], () => h.A.getPendingResponseOptions(e) ?? A, [e]);
    return (
        l.useEffect(() => (x(e), () => x(e)), [e]),
        l.useEffect(() => {
            null != n && 0 !== Object.keys(n).length && _.A.updateOnboardingResponses(e);
        }, [e, n]),
        {
            handleSelectOption: l.useCallback(
                (n, t, l) => {
                    let i = h.A.getOnboardingResponses(e),
                        { addedRoleIds: r, removedRoleIds: x } = (function (e, n, t, l) {
                            let i = [],
                                a = [];
                            if (e.singleSelect && t) {
                                let t = e.options.find((e) => l.includes(e.id));
                                (i = s().difference(n.roleIds ?? [], t?.roleIds ?? [])),
                                    (a = s().difference(t?.roleIds ?? [], n.roleIds ?? []));
                            } else if (t) (i = n.roleIds ?? []), (a = []);
                            else {
                                let t = e.options.filter((e) => l.includes(e.id)),
                                    r = t.filter((e) => n.id !== e.id),
                                    d = t
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(u.Vq),
                                    c = r
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(u.Vq);
                                (i = []), (a = s().difference(d, c));
                            }
                            return { addedRoleIds: i, removedRoleIds: a };
                        })(n, t, l, i),
                        { addedChannelIds: A, removedChannelIds: C } = (function (e) {
                            let { guildId: n, prompt: t, option: l, selected: i, responses: a } = e,
                                r = [],
                                d = [];
                            if (t.singleSelect && i) {
                                let e = t.options.find((e) => a.includes(e.id));
                                (r = s().difference(l.channelIds ?? [], e?.channelIds ?? [])),
                                    (d = s().difference(e?.channelIds ?? [], l.channelIds ?? []));
                            } else if (i) (r = l.channelIds ?? []), (d = []);
                            else {
                                let e = t.options.filter((e) => a.includes(e.id)),
                                    n = e.filter((e) => l.id !== e.id),
                                    i = e
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.Vq),
                                    c = n
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.Vq);
                                (r = []), (d = s().difference(i, c));
                            }
                            return (
                                (0, c.cE)(n) && r.push(...h.A.getDefaultChannelIds(n)),
                                { addedChannelIds: r, removedChannelIds: d }
                            );
                        })({ guildId: e, prompt: n, option: t, selected: l, responses: i }),
                        g = A.reduce((n, t) => {
                            let l = o.Ay.getChannelIdFlags(e, t);
                            return (n[t] = { flags: (0, a.lA)(l, m.vv.OPT_IN_ENABLED, !0) }), n;
                        }, {}),
                        f = C.reduce((n, t) => {
                            let l = o.Ay.getChannelIdFlags(e, t);
                            return (n[t] = { flags: (0, a.lA)(l, m.vv.OPT_IN_ENABLED, !1) }), n;
                        }, {}),
                        p = { ...g, ...f };
                    _.A.selectOption(e, n.id, t.id, l),
                        d.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId: e, overrides: p }),
                        _.A.updateRolesLocal(e, r, x);
                },
                [e],
            ),
        }
    );
}

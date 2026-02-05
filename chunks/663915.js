n.d(t, { A: () => g }), n(321073);
var l = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(665260),
    r = n(311907),
    d = n(73153),
    c = n(234053),
    o = n(543465),
    u = n(403362),
    _ = n(669953),
    h = n(591552),
    x = n(355097);
function m(e) {
    d.h.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: e });
}
let A = {};
function g(e) {
    let t = (0, r.bG)([h.A], () => h.A.getPendingResponseOptions(e) ?? A, [e]);
    return (
        l.useEffect(() => (m(e), () => m(e)), [e]),
        l.useEffect(() => {
            null != t && 0 !== Object.keys(t).length && _.A.updateOnboardingResponses(e);
        }, [e, t]),
        {
            handleSelectOption: l.useCallback(
                (t, n, l) => {
                    let i = h.A.getOnboardingResponses(e),
                        { addedRoleIds: r, removedRoleIds: m } = (function (e, t, n, l) {
                            let i = [],
                                a = [];
                            if (e.singleSelect && n) {
                                let n = e.options.find((e) => l.includes(e.id));
                                (i = s().difference(t.roleIds ?? [], n?.roleIds ?? [])),
                                    (a = s().difference(n?.roleIds ?? [], t.roleIds ?? []));
                            } else if (n) (i = t.roleIds ?? []), (a = []);
                            else {
                                let n = e.options.filter((e) => l.includes(e.id)),
                                    r = n.filter((e) => t.id !== e.id),
                                    d = n
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
                        })(t, n, l, i),
                        { addedChannelIds: A, removedChannelIds: g } = (function (e) {
                            let { guildId: t, prompt: n, option: l, selected: i, responses: a } = e,
                                r = [],
                                d = [];
                            if (n.singleSelect && i) {
                                let e = n.options.find((e) => a.includes(e.id));
                                (r = s().difference(l.channelIds ?? [], e?.channelIds ?? [])),
                                    (d = s().difference(e?.channelIds ?? [], l.channelIds ?? []));
                            } else if (i) (r = l.channelIds ?? []), (d = []);
                            else {
                                let e = n.options.filter((e) => a.includes(e.id)),
                                    t = e.filter((e) => l.id !== e.id),
                                    i = e
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.Vq),
                                    c = t
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.Vq);
                                (r = []), (d = s().difference(i, c));
                            }
                            return (
                                (0, c.cE)(t) && r.push(...h.A.getDefaultChannelIds(t)),
                                { addedChannelIds: r, removedChannelIds: d }
                            );
                        })({ guildId: e, prompt: t, option: n, selected: l, responses: i }),
                        C = A.reduce((t, n) => {
                            let l = o.Ay.getChannelIdFlags(e, n);
                            return (t[n] = { flags: (0, a.lA)(l, x.vv.OPT_IN_ENABLED, !0) }), t;
                        }, {}),
                        f = g.reduce((t, n) => {
                            let l = o.Ay.getChannelIdFlags(e, n);
                            return (t[n] = { flags: (0, a.lA)(l, x.vv.OPT_IN_ENABLED, !1) }), t;
                        }, {}),
                        p = { ...C, ...f };
                    _.A.selectOption(e, t.id, n.id, l),
                        d.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId: e, overrides: p }),
                        _.A.updateRolesLocal(e, r, m);
                },
                [e],
            ),
        }
    );
}

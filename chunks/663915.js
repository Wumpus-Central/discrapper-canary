n.d(t, {
    A: () => m,
}),
    n(864466),
    n(443073),
    n(321073),
    n(896048);
var l = n(64700),
    r = n(735438),
    i = n.n(r),
    a = n(665260),
    s = n(311907),
    c = n(73153),
    d = n(234053),
    o = n(543465),
    u = n(403362),
    f = n(669953),
    b = n(591552),
    h = n(355097);

function p(e) {
    c.h.dispatch({
        type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
        guildId: e,
    });
}
let g = {};

function m(e) {
    let t = (0, s.bG)([b.A], () => {
        var t;
        return null != (t = b.A.getPendingResponseOptions(e)) ? t : g;
    }, [e]);
    return (
        l.useEffect(() => (p(e), () => p(e)), [e]),
        l.useEffect(() => {
            null != t && 0 !== Object.keys(t).length && f.A.updateOnboardingResponses(e);
        }, [e, t]),
        {
            handleSelectOption: l.useCallback(
                (t, n, l) => {
                    let r = b.A.getOnboardingResponses(e),
                        { addedRoleIds: s, removedRoleIds: p } = (function (e, t, n, l) {
                            var r, a, s, c, d;
                            let o = [],
                                f = [];
                            if (e.singleSelect && n) {
                                let n = e.options.find((e) => l.includes(e.id));
                                (o = i().difference(
                                    null != (r = t.roleIds) ? r : [],
                                    null != (a = null == n ? void 0 : n.roleIds) ? a : [],
                                )),
                                    (f = i().difference(
                                        null != (s = null == n ? void 0 : n.roleIds) ? s : [],
                                        null != (c = t.roleIds) ? c : [],
                                    ));
                            } else if (n) (o = null != (d = t.roleIds) ? d : []), (f = []);
                            else {
                                let n = e.options.filter((e) => l.includes(e.id)),
                                    r = n.filter((e) => t.id !== e.id),
                                    a = n
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(u.Vq),
                                    s = r
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(u.Vq);
                                (o = []), (f = i().difference(a, s));
                            }
                            return {
                                addedRoleIds: o,
                                removedRoleIds: f,
                            };
                        })(t, n, l, r),
                        { addedChannelIds: g, removedChannelIds: m } = (function (e) {
                            var t, n, l, r, a;
                            let { guildId: s, prompt: c, option: o, selected: f, responses: h } = e,
                                p = [],
                                g = [];
                            if (c.singleSelect && f) {
                                let e = c.options.find((e) => h.includes(e.id));
                                (p = i().difference(
                                    null != (t = o.channelIds) ? t : [],
                                    null != (n = null == e ? void 0 : e.channelIds) ? n : [],
                                )),
                                    (g = i().difference(
                                        null != (l = null == e ? void 0 : e.channelIds) ? l : [],
                                        null != (r = o.channelIds) ? r : [],
                                    ));
                            } else if (f) (p = null != (a = o.channelIds) ? a : []), (g = []);
                            else {
                                let e = c.options.filter((e) => h.includes(e.id)),
                                    t = e.filter((e) => o.id !== e.id),
                                    n = e
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.Vq),
                                    l = t
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.Vq);
                                (p = []), (g = i().difference(n, l));
                            }
                            return (
                                (0, d.cE)(s) && p.push(...b.A.getDefaultChannelIds(s)),
                                {
                                    addedChannelIds: p,
                                    removedChannelIds: g,
                                }
                            );
                        })({
                            guildId: e,
                            prompt: t,
                            option: n,
                            selected: l,
                            responses: r,
                        }),
                        x = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    l = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    l.forEach(function (t) {
                                        var l;
                                        (l = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = l);
                                    });
                            }
                            return e;
                        })(
                            {},
                            g.reduce((t, n) => {
                                let l = o.Ay.getChannelIdFlags(e, n);
                                return (
                                    (t[n] = {
                                        flags: (0, a.lA)(l, h.vv.OPT_IN_ENABLED, !0),
                                    }),
                                    t
                                );
                            }, {}),
                            m.reduce((t, n) => {
                                let l = o.Ay.getChannelIdFlags(e, n);
                                return (
                                    (t[n] = {
                                        flags: (0, a.lA)(l, h.vv.OPT_IN_ENABLED, !1),
                                    }),
                                    t
                                );
                            }, {}),
                        );
                    f.A.selectOption(e, t.id, n.id, l),
                        c.h.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: x,
                        }),
                        f.A.updateRolesLocal(e, s, p);
                },
                [e],
            ),
        }
    );
}

n.d(t, { A: () => d });
var i = n(636537),
    r = n(228366),
    l = n(954571),
    a = n(177773),
    s = n(652215);
let o = new Map(),
    d = {
        resolveGuildTemplate: function e(t) {
            if (r.h.isDispatching()) return Promise.resolve().then(() => e(t));
            let n = o.get(t);
            if (null != n) return n;
            r.h.dispatch({ type: "GUILD_TEMPLATE_RESOLVE", code: t });
            let d = i.Bo.get({ url: s.Rsh.UNRESOLVED_GUILD_TEMPLATE(t), oldFormErrors: !0, rejectWithError: !0 })
                .then(
                    (e) => {
                        let n = e.body;
                        return (
                            l.default.track(s.HAw.GUILD_TEMPLATE_RESOLVED, {
                                resolved: !0,
                                guild_template_code: t,
                                guild_template_name: n.name,
                                guild_template_description: n.description,
                                guild_template_guild_id: n.source_guild_id,
                            }),
                            r.h.dispatch({ type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: n, code: t }),
                            { guildTemplate: (0, a.A)(n), code: t }
                        );
                    },
                    () => (
                        l.default.track(s.HAw.GUILD_TEMPLATE_RESOLVED, { resolved: !1, guild_template_code: t }),
                        r.h.dispatch({ type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: t }),
                        { guildTemplate: null, code: t }
                    ),
                )
                .finally(() => {
                    o.delete(t);
                });
            return o.set(t, d), d;
        },
        loadTemplatesForGuild: (e) =>
            i.Bo.get({ url: s.Rsh.GUILD_TEMPLATES(e), oldFormErrors: !0, rejectWithError: !1 }).then(
                (e) => (r.h.dispatch({ type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS", guildTemplates: e.body }), e),
            ),
        createGuildTemplate: (e, t, n) =>
            i.Bo.post({
                url: s.Rsh.GUILD_TEMPLATES(e),
                body: { name: t, description: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((e) => {
                r.h.dispatch({ type: "GUILD_TEMPLATE_CREATE_SUCCESS", guildTemplate: e.body, code: e.body.code });
            }),
        syncGuildTemplate: (e, t) =>
            i.Bo.put({ url: s.Rsh.GUILD_TEMPLATE(e, t), oldFormErrors: !0, rejectWithError: !1 }).then((e) => {
                r.h.dispatch({ type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: e.body, code: t });
            }),
        updateGuildTemplate: (e, t, n, l) =>
            i.Bo.patch({
                url: s.Rsh.GUILD_TEMPLATE(e, t),
                body: { name: n, description: l },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((e) => {
                r.h.dispatch({ type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: e.body, code: t });
            }),
        deleteGuildTemplate: (e, t) =>
            i.Bo.del({ url: s.Rsh.GUILD_TEMPLATE(e, t), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                r.h.dispatch({ type: "GUILD_TEMPLATE_DELETE_SUCCESS", guildId: e, code: t });
            }),
    };

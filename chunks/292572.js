"use strict";
n.d(t, { A: () => u });
var r = n(562465),
    i = n(73153),
    s = n(954571),
    a = n(177773),
    o = n(652215);
let l = new Map(),
    u = {
        resolveGuildTemplate: function e(t) {
            if (i.h.isDispatching()) return Promise.resolve().then(() => e(t));
            let n = l.get(t);
            if (null != n) return n;
            i.h.dispatch({ type: "GUILD_TEMPLATE_RESOLVE", code: t });
            let u = r.Bo.get({ url: o.Rsh.UNRESOLVED_GUILD_TEMPLATE(t), oldFormErrors: !0, rejectWithError: !0 })
                .then(
                    (e) => {
                        let n = e.body;
                        return (
                            s.default.track(o.HAw.GUILD_TEMPLATE_RESOLVED, {
                                resolved: !0,
                                guild_template_code: t,
                                guild_template_name: n.name,
                                guild_template_description: n.description,
                                guild_template_guild_id: n.source_guild_id,
                            }),
                            i.h.dispatch({ type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: n, code: t }),
                            { guildTemplate: (0, a.A)(n), code: t }
                        );
                    },
                    () => (
                        s.default.track(o.HAw.GUILD_TEMPLATE_RESOLVED, { resolved: !1, guild_template_code: t }),
                        i.h.dispatch({ type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: t }),
                        { guildTemplate: null, code: t }
                    ),
                )
                .finally(() => {
                    l.delete(t);
                });
            return l.set(t, u), u;
        },
        loadTemplatesForGuild: (e) =>
            r.Bo.get({ url: o.Rsh.GUILD_TEMPLATES(e), oldFormErrors: !0, rejectWithError: !1 }).then(
                (e) => (i.h.dispatch({ type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS", guildTemplates: e.body }), e),
            ),
        createGuildTemplate: (e, t, n) =>
            r.Bo.post({
                url: o.Rsh.GUILD_TEMPLATES(e),
                body: { name: t, description: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((e) => {
                i.h.dispatch({ type: "GUILD_TEMPLATE_CREATE_SUCCESS", guildTemplate: e.body, code: e.body.code });
            }),
        syncGuildTemplate: (e, t) =>
            r.Bo.put({ url: o.Rsh.GUILD_TEMPLATE(e, t), oldFormErrors: !0, rejectWithError: !1 }).then((e) => {
                i.h.dispatch({ type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: e.body, code: t });
            }),
        updateGuildTemplate: (e, t, n, s) =>
            r.Bo.patch({
                url: o.Rsh.GUILD_TEMPLATE(e, t),
                body: { name: n, description: s },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then((e) => {
                i.h.dispatch({ type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: e.body, code: t });
            }),
        deleteGuildTemplate: (e, t) =>
            r.Bo.del({ url: o.Rsh.GUILD_TEMPLATE(e, t), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                i.h.dispatch({ type: "GUILD_TEMPLATE_DELETE_SUCCESS", guildId: e, code: t });
            }),
    };

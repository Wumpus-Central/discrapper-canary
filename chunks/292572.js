n.d(t, {
    A: () => u,
}),
    n(896048),
    n(228524),
    n(492834);
var r = n(562465),
    i = n(73153),
    a = n(954571),
    s = n(177773),
    o = n(652215);
let l = new Map();

function c(e) {
    if (i.h.isDispatching()) return Promise.resolve().then(() => c(e));
    let t = l.get(e);
    if (null != t) return t;
    i.h.dispatch({
        type: "GUILD_TEMPLATE_RESOLVE",
        code: e,
    });
    let n = r.Bo.get({
        url: o.Rsh.UNRESOLVED_GUILD_TEMPLATE(e),
        oldFormErrors: !0,
        rejectWithError: !0,
    })
        .then(
            (t) => {
                let n = t.body;
                return (
                    a.default.track(o.HAw.GUILD_TEMPLATE_RESOLVED, {
                        resolved: !0,
                        guild_template_code: e,
                        guild_template_name: n.name,
                        guild_template_description: n.description,
                        guild_template_guild_id: n.source_guild_id,
                    }),
                    i.h.dispatch({
                        type: "GUILD_TEMPLATE_RESOLVE_SUCCESS",
                        guildTemplate: n,
                        code: e,
                    }),
                    {
                        guildTemplate: (0, s.A)(n),
                        code: e,
                    }
                );
            },
            () => (
                a.default.track(o.HAw.GUILD_TEMPLATE_RESOLVED, {
                    resolved: !1,
                    guild_template_code: e,
                }),
                i.h.dispatch({
                    type: "GUILD_TEMPLATE_RESOLVE_FAILURE",
                    code: e,
                }),
                {
                    guildTemplate: null,
                    code: e,
                }
            ),
        )
        .finally(() => {
            l.delete(e);
        });
    return l.set(e, n), n;
}
let u = {
    resolveGuildTemplate: c,
    loadTemplatesForGuild: (e) =>
        r.Bo.get({
            url: o.Rsh.GUILD_TEMPLATES(e),
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) => (
                i.h.dispatch({
                    type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS",
                    guildTemplates: e.body,
                }),
                e
            ),
        ),
    createGuildTemplate: (e, t, n) =>
        r.Bo.post({
            url: o.Rsh.GUILD_TEMPLATES(e),
            body: {
                name: t,
                description: n,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then((e) => {
            i.h.dispatch({
                type: "GUILD_TEMPLATE_CREATE_SUCCESS",
                guildTemplate: e.body,
                code: e.body.code,
            });
        }),
    syncGuildTemplate: (e, t) =>
        r.Bo.put({
            url: o.Rsh.GUILD_TEMPLATE(e, t),
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then((e) => {
            i.h.dispatch({
                type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                guildTemplate: e.body,
                code: t,
            });
        }),
    updateGuildTemplate: (e, t, n, a) =>
        r.Bo.patch({
            url: o.Rsh.GUILD_TEMPLATE(e, t),
            body: {
                name: n,
                description: a,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then((e) => {
            i.h.dispatch({
                type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                guildTemplate: e.body,
                code: t,
            });
        }),
    deleteGuildTemplate: (e, t) =>
        r.Bo.del({
            url: o.Rsh.GUILD_TEMPLATE(e, t),
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(() => {
            i.h.dispatch({
                type: "GUILD_TEMPLATE_DELETE_SUCCESS",
                guildId: e,
                code: t,
            });
        }),
};

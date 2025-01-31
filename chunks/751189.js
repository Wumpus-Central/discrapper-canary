n.d(t, { Z: () => c }), n(47120), n(773603);
var i = n(544891),
    r = n(570140),
    a = n(626135),
    s = n(741847),
    o = n(981631);
let l = new Map();
function u(e) {
    if (r.Z.isDispatching()) return Promise.resolve().then(() => u(e));
    let t = l.get(e);
    if (null != t) return t;
    r.Z.dispatch({
        type: 'GUILD_TEMPLATE_RESOLVE',
        code: e
    });
    let n = i.tn
        .get({
            url: o.ANM.UNRESOLVED_GUILD_TEMPLATE(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })
        .then(
            (t) => {
                let n = t.body;
                return (
                    a.default.track(o.rMx.GUILD_TEMPLATE_RESOLVED, {
                        resolved: !0,
                        guild_template_code: e,
                        guild_template_name: n.name,
                        guild_template_description: n.description,
                        guild_template_guild_id: n.source_guild_id
                    }),
                    r.Z.dispatch({
                        type: 'GUILD_TEMPLATE_RESOLVE_SUCCESS',
                        guildTemplate: n,
                        code: e
                    }),
                    {
                        guildTemplate: (0, s.Z)(n),
                        code: e
                    }
                );
            },
            () => (
                a.default.track(o.rMx.GUILD_TEMPLATE_RESOLVED, {
                    resolved: !1,
                    guild_template_code: e
                }),
                r.Z.dispatch({
                    type: 'GUILD_TEMPLATE_RESOLVE_FAILURE',
                    code: e
                }),
                {
                    guildTemplate: null,
                    code: e
                }
            )
        )
        .finally(() => {
            l.delete(e);
        });
    return l.set(e, n), n;
}
let c = {
    resolveGuildTemplate: u,
    loadTemplatesForGuild: (e) =>
        i.tn
            .get({
                url: o.ANM.GUILD_TEMPLATES(e),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => (
                    r.Z.dispatch({
                        type: 'GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS',
                        guildTemplates: e.body
                    }),
                    e
                )
            ),
    createGuildTemplate: (e, t, n) =>
        i.tn
            .post({
                url: o.ANM.GUILD_TEMPLATES(e),
                body: {
                    name: t,
                    description: n
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                r.Z.dispatch({
                    type: 'GUILD_TEMPLATE_CREATE_SUCCESS',
                    guildTemplate: e.body,
                    code: e.body.code
                });
            }),
    syncGuildTemplate: (e, t) =>
        i.tn
            .put({
                url: o.ANM.GUILD_TEMPLATE(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                r.Z.dispatch({
                    type: 'GUILD_TEMPLATE_SYNC_SUCCESS',
                    guildTemplate: e.body,
                    code: t
                });
            }),
    updateGuildTemplate: (e, t, n, a) =>
        i.tn
            .patch({
                url: o.ANM.GUILD_TEMPLATE(e, t),
                body: {
                    name: n,
                    description: a
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                r.Z.dispatch({
                    type: 'GUILD_TEMPLATE_SYNC_SUCCESS',
                    guildTemplate: e.body,
                    code: t
                });
            }),
    deleteGuildTemplate: (e, t) =>
        i.tn
            .del({
                url: o.ANM.GUILD_TEMPLATE(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                r.Z.dispatch({
                    type: 'GUILD_TEMPLATE_DELETE_SUCCESS',
                    guildId: e,
                    code: t
                });
            })
};

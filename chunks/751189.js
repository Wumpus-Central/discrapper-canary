n.d(t, { Z: () => u }), n(47120), n(266796), n(773603);
var r = n(544891),
    i = n(570140),
    o = n(626135),
    a = n(741847),
    s = n(981631);
let l = new Map();
function c(e) {
    if (i.Z.isDispatching()) return Promise.resolve().then(() => c(e));
    let t = l.get(e);
    if (null != t) return t;
    i.Z.dispatch({
        type: 'GUILD_TEMPLATE_RESOLVE',
        code: e
    });
    let n = r.tn
        .get({
            url: s.ANM.UNRESOLVED_GUILD_TEMPLATE(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })
        .then(
            (t) => {
                let n = t.body;
                return (
                    o.default.track(s.rMx.GUILD_TEMPLATE_RESOLVED, {
                        resolved: !0,
                        guild_template_code: e,
                        guild_template_name: n.name,
                        guild_template_description: n.description,
                        guild_template_guild_id: n.source_guild_id
                    }),
                    i.Z.dispatch({
                        type: 'GUILD_TEMPLATE_RESOLVE_SUCCESS',
                        guildTemplate: n,
                        code: e
                    }),
                    {
                        guildTemplate: (0, a.Z)(n),
                        code: e
                    }
                );
            },
            () => (
                o.default.track(s.rMx.GUILD_TEMPLATE_RESOLVED, {
                    resolved: !1,
                    guild_template_code: e
                }),
                i.Z.dispatch({
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
let u = {
    resolveGuildTemplate: c,
    loadTemplatesForGuild: (e) =>
        r.tn
            .get({
                url: s.ANM.GUILD_TEMPLATES(e),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => (
                    i.Z.dispatch({
                        type: 'GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS',
                        guildTemplates: e.body
                    }),
                    e
                )
            ),
    createGuildTemplate: (e, t, n) =>
        r.tn
            .post({
                url: s.ANM.GUILD_TEMPLATES(e),
                body: {
                    name: t,
                    description: n
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                i.Z.dispatch({
                    type: 'GUILD_TEMPLATE_CREATE_SUCCESS',
                    guildTemplate: e.body,
                    code: e.body.code
                });
            }),
    syncGuildTemplate: (e, t) =>
        r.tn
            .put({
                url: s.ANM.GUILD_TEMPLATE(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                i.Z.dispatch({
                    type: 'GUILD_TEMPLATE_SYNC_SUCCESS',
                    guildTemplate: e.body,
                    code: t
                });
            }),
    updateGuildTemplate: (e, t, n, o) =>
        r.tn
            .patch({
                url: s.ANM.GUILD_TEMPLATE(e, t),
                body: {
                    name: n,
                    description: o
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                i.Z.dispatch({
                    type: 'GUILD_TEMPLATE_SYNC_SUCCESS',
                    guildTemplate: e.body,
                    code: t
                });
            }),
    deleteGuildTemplate: (e, t) =>
        r.tn
            .del({
                url: s.ANM.GUILD_TEMPLATE(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                i.Z.dispatch({
                    type: 'GUILD_TEMPLATE_DELETE_SUCCESS',
                    guildId: e,
                    code: t
                });
            })
};

var i = r(47120);
var a = r(773603);
var o = r(544891),
    s = r(570140),
    l = r(626135),
    u = r(741847),
    c = r(981631);
let d = new Map();
function f(e) {
    if (s.Z.isDispatching()) return Promise.resolve().then(() => f(e));
    let n = d.get(e);
    if (null != n) return n;
    s.Z.dispatch({
        type: 'GUILD_TEMPLATE_RESOLVE',
        code: e
    });
    let r = o.tn
        .get({
            url: c.ANM.UNRESOLVED_GUILD_TEMPLATE(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })
        .then(
            (n) => {
                let r = n.body;
                return (
                    l.default.track(c.rMx.GUILD_TEMPLATE_RESOLVED, {
                        resolved: !0,
                        guild_template_code: e,
                        guild_template_name: r.name,
                        guild_template_description: r.description,
                        guild_template_guild_id: r.source_guild_id
                    }),
                    s.Z.dispatch({
                        type: 'GUILD_TEMPLATE_RESOLVE_SUCCESS',
                        guildTemplate: r,
                        code: e
                    }),
                    {
                        guildTemplate: (0, u.Z)(r),
                        code: e
                    }
                );
            },
            () => (
                l.default.track(c.rMx.GUILD_TEMPLATE_RESOLVED, {
                    resolved: !1,
                    guild_template_code: e
                }),
                s.Z.dispatch({
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
            d.delete(e);
        });
    return d.set(e, r), r;
}
n.Z = {
    resolveGuildTemplate: f,
    loadTemplatesForGuild: (e) =>
        o.tn
            .get({
                url: c.ANM.GUILD_TEMPLATES(e),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => (
                    s.Z.dispatch({
                        type: 'GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS',
                        guildTemplates: e.body
                    }),
                    e
                )
            ),
    createGuildTemplate: (e, n, r) =>
        o.tn
            .post({
                url: c.ANM.GUILD_TEMPLATES(e),
                body: {
                    name: n,
                    description: r
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                s.Z.dispatch({
                    type: 'GUILD_TEMPLATE_CREATE_SUCCESS',
                    guildTemplate: e.body,
                    code: e.body.code
                });
            }),
    syncGuildTemplate: (e, n) =>
        o.tn
            .put({
                url: c.ANM.GUILD_TEMPLATE(e, n),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                s.Z.dispatch({
                    type: 'GUILD_TEMPLATE_SYNC_SUCCESS',
                    guildTemplate: e.body,
                    code: n
                });
            }),
    updateGuildTemplate: (e, n, r, i) =>
        o.tn
            .patch({
                url: c.ANM.GUILD_TEMPLATE(e, n),
                body: {
                    name: r,
                    description: i
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                s.Z.dispatch({
                    type: 'GUILD_TEMPLATE_SYNC_SUCCESS',
                    guildTemplate: e.body,
                    code: n
                });
            }),
    deleteGuildTemplate: (e, n) =>
        o.tn
            .del({
                url: c.ANM.GUILD_TEMPLATE(e, n),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                s.Z.dispatch({
                    type: 'GUILD_TEMPLATE_DELETE_SUCCESS',
                    guildId: e,
                    code: n
                });
            })
};

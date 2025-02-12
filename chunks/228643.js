t.d(n, {
    L_: () => r,
    nj: () => s,
    sE: () => i
});
var c = t(544891),
    o = t(570140),
    a = t(480608),
    l = t(981631);
function i(e, n) {
    c.tn
        .get({
            url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
            rejectWithError: !0
        })
        .then((e) => {
            let t = [];
            e.body.length > 0 &&
                (t = e.body.map((e) =>
                    e.map((e) => ({
                        connectionType: e.connection_type,
                        connectionMetadataField: e.connection_metadata_field,
                        applicationId: e.application_id,
                        operator: e.operator,
                        value: e.value
                    }))
                )),
                o.Z.dispatch({
                    type: 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS',
                    roleId: n,
                    roleConnectionConfigurations: t
                });
        })
        .catch(() => {});
}
async function r(e, n, t) {
    let i = t.map((e) =>
            e.map((e) => ({
                connection_type: e.connectionType,
                connection_metadata_field: e.connectionMetadataField,
                application_id: e.applicationId,
                operator: e.operator,
                value: e.value
            }))
        ),
        r = await c.tn
            .put({
                url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
                body: 0 === i.length ? [] : i,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                let n = [];
                return (
                    e.body.length > 0 &&
                        (n = e.body.map((e) =>
                            e.map((e) => ({
                                connectionType: e.connection_type,
                                connectionMetadataField: e.connection_metadata_field,
                                applicationId: e.application_id,
                                operator: e.operator,
                                value: e.value
                            }))
                        )),
                    n
                );
            }),
        s = await (0, a.H)(e, n, !1);
    null != s &&
        o.Z.dispatch({
            type: 'GUILD_ROLE_MEMBER_COUNT_UPDATE',
            guildId: e,
            roleId: n,
            count: s
        }),
        o.Z.dispatch({
            type: 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS',
            roleId: n,
            roleConnectionConfigurations: r
        });
}
async function s() {
    return (
        await c.tn.get({
            url: l.ANM.APPLICATION_USER_ROLE_CONNECTIONS,
            rejectWithError: !1
        })
    ).body;
}

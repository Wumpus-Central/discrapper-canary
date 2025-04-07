n.d(t, {
    L_: () => s,
    nj: () => c,
    sE: () => a
});
var r = n(544891),
    i = n(570140),
    l = n(480608),
    o = n(981631);
function a(e, t) {
    r.tn
        .get({
            url: o.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
            rejectWithError: !0
        })
        .then((e) => {
            let n = [];
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
                i.Z.dispatch({
                    type: 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS',
                    roleId: t,
                    roleConnectionConfigurations: n
                });
        })
        .catch(() => {});
}
async function s(e, t, n) {
    let a = n.map((e) =>
            e.map((e) => ({
                connection_type: e.connectionType,
                connection_metadata_field: e.connectionMetadataField,
                application_id: e.applicationId,
                operator: e.operator,
                value: e.value
            }))
        ),
        s = await r.tn
            .put({
                url: o.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
                body: 0 === a.length ? [] : a,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                let t = [];
                return (
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
                    t
                );
            }),
        c = await (0, l.H)(e, t, !1);
    null != c &&
        i.Z.dispatch({
            type: 'GUILD_ROLE_MEMBER_COUNT_UPDATE',
            guildId: e,
            roleId: t,
            count: c
        }),
        i.Z.dispatch({
            type: 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS',
            roleId: t,
            roleConnectionConfigurations: s
        });
}
async function c() {
    return (
        await r.tn.get({
            url: o.ANM.APPLICATION_USER_ROLE_CONNECTIONS,
            rejectWithError: !1
        })
    ).body;
}

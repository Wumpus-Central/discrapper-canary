n.d(t, {
    L_: () => r,
    nj: () => c,
    sE: () => o
});
var i = n(544891),
    a = n(570140),
    s = n(480608),
    l = n(981631);
function o(e, t) {
    i.tn
        .get({
            url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
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
                a.Z.dispatch({
                    type: 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS',
                    roleId: t,
                    roleConnectionConfigurations: n
                });
        })
        .catch(() => {});
}
async function r(e, t, n) {
    let o = n.map((e) =>
            e.map((e) => ({
                connection_type: e.connectionType,
                connection_metadata_field: e.connectionMetadataField,
                application_id: e.applicationId,
                operator: e.operator,
                value: e.value
            }))
        ),
        r = await i.tn
            .put({
                url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
                body: 0 === o.length ? [] : o,
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
        c = await (0, s.H)(e, t, !1);
    null != c &&
        a.Z.dispatch({
            type: 'GUILD_ROLE_MEMBER_COUNT_UPDATE',
            guildId: e,
            roleId: t,
            count: c
        }),
        a.Z.dispatch({
            type: 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS',
            roleId: t,
            roleConnectionConfigurations: r
        });
}
async function c() {
    return (
        await i.tn.get({
            url: l.ANM.APPLICATION_USER_ROLE_CONNECTIONS,
            rejectWithError: !1
        })
    ).body;
}

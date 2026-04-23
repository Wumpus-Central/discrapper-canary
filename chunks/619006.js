n.d(t, { XC: () => r, os: () => i, qK: () => s });
var a = n(636537),
    l = n(228366),
    c = n(545868),
    o = n(652215);
function i(e, t) {
    a.Bo.get({ url: o.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t), rejectWithError: !0 })
        .then((e) => {
            let n = [];
            e.body.length > 0 &&
                (n = e.body.map((e) =>
                    e.map((e) => ({
                        connectionType: e.connection_type,
                        connectionMetadataField: e.connection_metadata_field,
                        applicationId: e.application_id,
                        operator: e.operator,
                        value: e.value,
                    })),
                )),
                l.h.dispatch({
                    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                    roleId: t,
                    roleConnectionConfigurations: n,
                });
        })
        .catch(() => {});
}
async function s(e, t, n) {
    let i = n.map((e) =>
            e.map((e) => ({
                connection_type: e.connectionType,
                connection_metadata_field: e.connectionMetadataField,
                application_id: e.applicationId,
                operator: e.operator,
                value: e.value,
            })),
        ),
        s = await a.Bo.put({
            url: o.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
            body: 0 === i.length ? [] : i,
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then((e) => {
            let t = [];
            return (
                e.body.length > 0 &&
                    (t = e.body.map((e) =>
                        e.map((e) => ({
                            connectionType: e.connection_type,
                            connectionMetadataField: e.connection_metadata_field,
                            applicationId: e.application_id,
                            operator: e.operator,
                            value: e.value,
                        })),
                    )),
                t
            );
        }),
        r = await (0, c.a)(e, t, !1);
    null != r && l.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_UPDATE", guildId: e, roleId: t, count: r }),
        l.h.dispatch({
            type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
            roleId: t,
            roleConnectionConfigurations: s,
        });
}
async function r() {
    return (await a.Bo.get({ url: o.Rsh.APPLICATION_USER_ROLE_CONNECTIONS, rejectWithError: !1 })).body;
}

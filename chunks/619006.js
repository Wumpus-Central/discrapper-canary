"use strict";
n.d(t, { XC: () => d, os: () => l, qK: () => o });
var i = n(636537),
    r = n(228366),
    a = n(545868),
    s = n(652215);
function l(e, t) {
    i.Bo.get({ url: s.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t), rejectWithError: !0 })
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
                r.h.dispatch({
                    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                    roleId: t,
                    roleConnectionConfigurations: n,
                });
        })
        .catch(() => {});
}
async function o(e, t, n) {
    let l = n.map((e) =>
            e.map((e) => ({
                connection_type: e.connectionType,
                connection_metadata_field: e.connectionMetadataField,
                application_id: e.applicationId,
                operator: e.operator,
                value: e.value,
            })),
        ),
        o = await i.Bo.put({
            url: s.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
            body: 0 === l.length ? [] : l,
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
        d = await (0, a.a)(e, t, !1);
    null != d && r.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_UPDATE", guildId: e, roleId: t, count: d }),
        r.h.dispatch({
            type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
            roleId: t,
            roleConnectionConfigurations: o,
        });
}
async function d() {
    return (await i.Bo.get({ url: s.Rsh.APPLICATION_USER_ROLE_CONNECTIONS, rejectWithError: !1 })).body;
}

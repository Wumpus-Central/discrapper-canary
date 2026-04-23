"use strict";
n.d(t, { XC: () => c, os: () => a, qK: () => o });
var i = n(562465),
    r = n(73153),
    l = n(545868),
    s = n(652215);
function a(e, t) {
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
    let a = n.map((e) =>
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
            body: 0 === a.length ? [] : a,
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
        c = await (0, l.a)(e, t, !1);
    null != c && r.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_UPDATE", guildId: e, roleId: t, count: c }),
        r.h.dispatch({
            type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
            roleId: t,
            roleConnectionConfigurations: o,
        });
}
async function c() {
    return (await i.Bo.get({ url: s.Rsh.APPLICATION_USER_ROLE_CONNECTIONS, rejectWithError: !1 })).body;
}

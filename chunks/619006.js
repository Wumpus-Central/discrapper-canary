var n = e(620632),
    a = e(73153),
    i = e(545868),
    c = e(652215);
e.d(
    o,
    {},
    {
        XC: async function () {
            return (await n.Bo.get({ url: c.Rsh.APPLICATION_USER_ROLE_CONNECTIONS, rejectWithError: !1 })).body;
        },
        os: function (t, o) {
            n.Bo.get({ url: c.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(t, o), rejectWithError: !0 })
                .then((t) => {
                    let e = [];
                    (t.body.length > 0 &&
                        (e = t.body.map((t) =>
                            t.map((t) => ({
                                connectionType: t.connection_type,
                                connectionMetadataField: t.connection_metadata_field,
                                applicationId: t.application_id,
                                operator: t.operator,
                                value: t.value,
                            })),
                        )),
                        a.h.dispatch({
                            type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                            roleId: o,
                            roleConnectionConfigurations: e,
                        }));
                })
                .catch(() => {});
        },
        qK: async function (t, o, e) {
            let p = e.map((t) =>
                    t.map((t) => ({
                        connection_type: t.connectionType,
                        connection_metadata_field: t.connectionMetadataField,
                        application_id: t.applicationId,
                        operator: t.operator,
                        value: t.value,
                    })),
                ),
                r = await n.Bo.put({
                    url: c.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(t, o),
                    body: 0 === p.length ? [] : p,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }),
                _ = [];
            r.body.length > 0 &&
                (_ = r.body.map((t) =>
                    t.map((t) => ({
                        connectionType: t.connection_type,
                        connectionMetadataField: t.connection_metadata_field,
                        applicationId: t.application_id,
                        operator: t.operator,
                        value: t.value,
                    })),
                ));
            let d = await (0, i.a)(t, o, !1);
            (null != d && a.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_UPDATE", guildId: t, roleId: o, count: d }),
                a.h.dispatch({
                    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                    roleId: o,
                    roleConnectionConfigurations: _,
                }));
        },
    },
);

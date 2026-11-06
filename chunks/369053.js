var i,
    a = n(582128),
    _ = n(284009),
    r = n.n(_),
    d = n(2110),
    l = n(517846),
    o = n(620632),
    u = n(73153),
    s = n(149468),
    c = n(865116),
    E = n(669700),
    m = n(662502),
    S = n(17372),
    T = n(652215),
    I = n(835002);
async function A(e, t) {
    let n = g(e),
        i = await o.Bo.get({
            url: T.Rsh.GET_REPORT_MENU(n),
            query: t?.variant != null ? { variant: t.variant } : void 0,
            rejectWithError: !1,
        });
    return i.body ?? JSON.parse(i.text);
}
function R(e) {
    let t = e.name;
    return (r()(Object.values(S.tY).includes(t), `Invalid report type ${e.name}`), t);
}
function g(e) {
    let t = e.name;
    return (r()(Object.values(S.t0).includes(t), `Invalid report type ${e.name}`), t);
}
function h(e, t, n, i) {
    let { version: a, variant: _, language: r } = e,
        d = {
            channel_id: void 0,
            message_id: void 0,
            stage_instance_id: void 0,
            guild_id: void 0,
            guild_scheduled_event_id: void 0,
            user_id: void 0,
            email_token: void 0,
            application_id: void 0,
            entrypoint: void 0,
            widget_id: void 0,
        },
        l = {
            version: a,
            variant: _,
            language: r ?? "en",
            breadcrumbs: n.map((e) => e.nodeRef),
            elements: n.reduce((e, t) => {
                let { multiSelect: n, textInput: i } = t;
                return {
                    ...e,
                    ...(null != n && { [n.name]: Object.keys(n.state) }),
                    ...Object.fromEntries(
                        Object.entries(i ?? {}).map((e) => {
                            let [t, { value: n }] = e;
                            return [t, n];
                        }),
                    ),
                };
            }, {}),
        };
    if (t.name === S.t0.MESSAGE || t.name === S.t0.FIRST_DM) {
        let { channel_id: e, id: n } = t.record;
        return { ...l, ...d, name: t.name, channel_id: e, message_id: n };
    }
    if (t.name === S.t0.GUILD || t.name === S.t0.GUILD_DISCOVERY) {
        let { id: e } = t.record;
        return { ...l, ...d, name: t.name, guild_id: e };
    }
    if (t.name === S.t0.GUILD_DIRECTORY_ENTRY) {
        let { guildId: e, channelId: n } = t.record;
        return { ...l, ...d, name: t.name, channel_id: n, guild_id: e };
    }
    if (t.name === S.t0.STAGE_CHANNEL) {
        let { id: e, guild_id: n, channel_id: i } = t.record;
        return { ...l, ...d, name: t.name, channel_id: i, guild_id: n, stage_instance_id: e };
    }
    if (t.name === S.t0.GUILD_SCHEDULED_EVENT) {
        let { id: e, guild_id: n } = t.record;
        return { ...l, ...d, name: t.name, guild_id: n, guild_scheduled_event_id: e };
    } else if (t.name === S.t0.USER)
        return { ...l, ...d, name: t.name, user_id: t.record.id, guild_id: t.contextualGuildId };
    else if (t.name === S.tY.USER)
        return { ...l, ...d, name: t.name, user_id: t.record.id, guild_id: t.contextualGuildId, email_token: i };
    else if (t.name === S.tY.MESSAGE) return { ...l, ...d, name: t.name, message_id: t.record.id, email_token: i };
    else if (t.name === S.tY.GUILD) return { ...l, ...d, name: t.name, guild_id: t.record.id, email_token: i };
    else if (t.name === S.t0.APPLICATION)
        return {
            ...l,
            ...d,
            name: t.name,
            application_id: t.record.id,
            guild_id: t.contextualGuildId,
            channel_id: t.contextualChannelId,
            entrypoint: t.entrypoint,
        };
    else if (t.name === S.t0.WIDGET) return { ...l, ...d, name: t.name, user_id: t.user_id, widget_id: t.widget_id };
    else if (t.name === S.tY.MEDIA_TAKEDOWN) return { ...l, ...d, name: t.name, email_token: i };
    return null;
}
var D =
    (((i = {}).SETTINGS_UPSELLS_VIEWED = "SETTINGS_UPSELLS_VIEWED"),
    (i.SETTINGS_UPSELLS_APPLY_CLICKED = "SETTINGS_UPSELLS_APPLY_CLICKED"),
    (i.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED = "SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED"),
    i);
n.d(
    t,
    {},
    {
        G_: async function (e, t, n) {
            return (
                await o.Bo.post({
                    url: T.Rsh.VERIFY_UNAUTHENTICATED_REPORT(e),
                    body: { name: e, email: t, code: n },
                    rejectWithError: !1,
                })
            ).body;
        },
        Hl: function (e, t, n) {
            s.Ay.trackWithMetadata(T.HAw.IAR_MODAL_CLOSE, {
                report_type: e.name,
                report_id: n,
                navigation_history: t,
                message_id: e.name === S.t0.MESSAGE || e.name === S.t0.FIRST_DM ? e.record.id : void 0,
                stage_instance_id: e.name === S.t0.STAGE_CHANNEL ? e.record.id : void 0,
                guild_scheduled_event_id: e.name === S.t0.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
                guild_id:
                    e.name === S.t0.GUILD || e.name === S.t0.GUILD_DISCOVERY
                        ? e.record.id
                        : e.name === S.t0.GUILD_DIRECTORY_ENTRY
                          ? e.record.guildId
                          : e.name === S.t0.GUILD_SCHEDULED_EVENT
                            ? e.record.guild_id
                            : void 0,
                channel_id:
                    e.name === S.t0.GUILD_SCHEDULED_EVENT
                        ? e.record.channel_id
                        : e.name === S.t0.GUILD_DIRECTORY_ENTRY
                          ? e.record.channelId
                          : void 0,
                application_id: e.name === S.t0.APPLICATION ? e.record.id : void 0,
            });
        },
        IM: async function (e, t) {
            let n = R(e),
                i = await o.Bo.get({
                    url: T.Rsh.GET_UNAUTHENTICATED_REPORT_MENU(n),
                    query: t?.variant != null ? { variant: t.variant } : void 0,
                    rejectWithError: !1,
                });
            return i.body ?? JSON.parse(i.text);
        },
        Mw: function (e, t, n) {
            return a.useCallback(
                (i) => (a) => {
                    s.Ay.trackWithMetadata(T.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
                        report_id: n,
                        report_type: e.name,
                        report_subtype: t,
                        settings_upsells_type: i,
                        action: a,
                    });
                },
                [n, e, t],
            );
        },
        OY: async function () {
            let { capabilities: e, media_takedown_regulation: t } = (
                await o.Bo.get({ url: T.Rsh.DSA_CAPABILITIES, rejectWithError: !1 })
            ).body;
            return { capabilities: e, media_takedown_regulation: (0, S.c7)(t) ? t : null };
        },
        Op: async function (e, t) {
            var n;
            let i,
                a = ((i = (n = e).name), r()(Object.values(S.Yw).includes(i), `Invalid report type ${n.name}`), i),
                _ = await o.Bo.get({
                    url: T.Rsh.GET_REPORT_MENU(a),
                    query: t?.variant != null ? { variant: t.variant } : void 0,
                    rejectWithError: !1,
                });
            return _.body ?? JSON.parse(_.text);
        },
        TP: function (e, t) {
            return o.Bo.post({
                url: `${T.Rsh.SEND_UNAUTHENTICATED_REPORT_PINCODE(e)}?b=${(function (e) {
                    let t = 5381;
                    for (let n = 0; n < e.length; n++) t = ((t << 5) + t + e.charCodeAt(n)) | 0;
                    return (t >>> 0).toString(36);
                })(t)}`,
                body: { name: e, email: t },
                rejectWithError: !1,
                failImmediatelyWhenRateLimited: !0,
            });
        },
        Zv: function (e, t) {
            u.h.dispatch({ type: "IN_APP_REPORTS_SHOW_FEEDBACK", reportId: t, reportType: e.name });
        },
        bo: function (e, t, n, i) {
            if (c.Ay.get("iar_skip_api_report_submit")) return Promise.resolve();
            let a = R(t);
            return o.Bo.post({
                url: T.Rsh.SUBMIT_UNAUTHENTICATED_REPORT_MENU(a),
                body: h(e, t, n, i),
                rejectWithError: !0,
            });
        },
        gP: async function (e, t) {
            let n = g(e),
                i = await A(e, t);
            await o.Bo.post({
                url: T.Rsh.SUBMIT_REPORT_MENU(n),
                body: h(i, e, [{ nodeRef: i.root_node_id, destination: ["", i.success_node_id] }]),
                rejectWithError: !1,
            });
        },
        ks: function (e, t) {
            let {
                    freeTextElements: n,
                    dropdownElements: i,
                    countrySelectElement: a,
                    radioGroupElements: _,
                    multiSelectElement: r,
                    contentUrlInputElement: d,
                } = e,
                { textInput: l, multiSelect: o } = t;
            return (
                n.some(
                    (e) =>
                        !0 === e.should_submit_data &&
                        (l?.[e.name] == null || l?.[e.name].value === "" || !l?.[e.name]?.isValid),
                ) ||
                i.some((e) => !0 === e.should_submit_data && (l?.[e.name] == null || l?.[e.name].value === "")) ||
                (a?.should_submit_data === !0 && (l?.[a.name] == null || l?.[a.name].value === "")) ||
                _.some((e) => !0 === e.should_submit_data && (l?.[e.name] == null || l?.[e.name].value === "")) ||
                (r?.should_submit_data === !0 && (null == o || 0 === Object.keys(o).length)) ||
                (r?.require_all_options === !0 &&
                    r.data.some((e) => {
                        let [t] = e;
                        return o?.[t] == null;
                    })) ||
                (d?.should_submit_data === !0 &&
                    (l?.[d.name] == null || l?.[d.name].value === "" || !l?.[d.name]?.isValid))
            );
        },
        lJ: D,
        m9: A,
        q: async function (e) {
            return (await o.Bo.post({ url: T.Rsh.SUBMIT_REPORT_SECOND_LOOK, body: { token: e }, rejectWithError: !1 }))
                .body;
        },
        zC: function (e, t, n) {
            var i, a, _, s;
            let A;
            return c.Ay.get("iar_skip_api_report_submit")
                ? Promise.resolve()
                : (d.x.REPORT_TO_MOD.has(t.name)
                      ? ((A = (function (e, t, n) {
                            let { version: i, variant: a, language: _ } = e,
                                r = {
                                    version: i,
                                    variant: a,
                                    language: _ ?? "en",
                                    breadcrumbs: n.map((e) => e.nodeRef),
                                    elements: n.reduce((e, t) => {
                                        let { multiSelect: n, textInput: i } = t;
                                        return {
                                            ...e,
                                            ...(null != n && { [n.name]: Object.keys(n.state) }),
                                            ...Object.fromEntries(
                                                Object.entries(i ?? {}).map((e) => {
                                                    let [t, { value: n }] = e;
                                                    return [t, n];
                                                }),
                                            ),
                                        };
                                    }, {}),
                                };
                            if (t.name === S.Yw.MESSAGE) {
                                let { channel_id: e, id: n } = t.record;
                                return {
                                    ...r,
                                    ...{ channel_id: void 0, message_id: void 0, guild_id: void 0 },
                                    name: t.name,
                                    channel_id: e,
                                    message_id: n,
                                };
                            }
                            return null;
                        })(e, (i = t), n)),
                        o.Bo.post({
                            url: (function (e) {
                                if (
                                    (r()(d.x.REPORT_TO_MOD.has(e.name), `Invalid report type ${e.name}`),
                                    e.name === S.Yw.MESSAGE)
                                )
                                    return T.Rsh.SUBMIT_MODERATOR_MESSAGE_REPORT(e.record.channel_id, e.record.id);
                                throw Error(`Invalid report type ${e.name}`);
                            })(i),
                            body: A,
                            rejectWithError: !1,
                        }).then(
                            (e) => (
                                m.A.showSuccessToast(I.OB.REPORT_TO_MOD_SUCCESS),
                                A?.channel_id != null &&
                                    A?.message_id != null &&
                                    u.h.dispatch({
                                        type: "REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS",
                                        channelId: A.channel_id,
                                        messageId: A.message_id,
                                    }),
                                e
                            ),
                        ))
                      : ((a = e),
                        (_ = t),
                        (s = n),
                        o.Bo.post({ url: T.Rsh.SUBMIT_REPORT_MENU(g(_)), body: h(a, _, s), rejectWithError: !1 }))
                  ).then((e) => (E.Ay.fireSurveyAction(l.w.REPORT_SUBMITTED), e));
        },
    },
);

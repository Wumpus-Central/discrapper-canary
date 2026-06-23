n.d(t, {
    G_: () => O,
    Hl: () => N,
    IM: () => A,
    Mw: () => b,
    OY: () => U,
    Op: () => I,
    TP: () => D,
    Zv: () => v,
    bo: () => h,
    gP: () => R,
    ks: () => y,
    lJ: () => C,
    m9: () => T,
    q: () => G,
    zC: () => g,
});
var i,
    a = n(64700),
    _ = n(284009),
    r = n.n(_),
    d = n(2110),
    o = n(636537),
    l = n(228366),
    u = n(95561),
    s = n(865116),
    E = n(381689),
    c = n(17372),
    m = n(652215),
    S = n(835002);
async function T(e, t) {
    let n = p(e),
        i = await o.Bo.get({
            url: m.Rsh.GET_REPORT_MENU(n),
            query: t?.variant != null ? { variant: t.variant } : void 0,
            rejectWithError: !1,
        });
    return i.body ?? JSON.parse(i.text);
}
async function I(e, t) {
    var n;
    let i,
        a = ((i = (n = e).name), r()(Object.values(c.Yw).includes(i), `Invalid report type ${n.name}`), i),
        _ = await o.Bo.get({
            url: m.Rsh.GET_REPORT_MENU(a),
            query: t?.variant != null ? { variant: t.variant } : void 0,
            rejectWithError: !1,
        });
    return _.body ?? JSON.parse(_.text);
}
async function A(e, t) {
    let n = L(e),
        i = await o.Bo.get({
            url: m.Rsh.GET_UNAUTHENTICATED_REPORT_MENU(n),
            query: t?.variant != null ? { variant: t.variant } : void 0,
            rejectWithError: !1,
        });
    return i.body ?? JSON.parse(i.text);
}
async function R(e, t) {
    let n = p(e),
        i = await T(e, t);
    await o.Bo.post({
        url: m.Rsh.SUBMIT_REPORT_MENU(n),
        body: f(i, e, [{ nodeRef: i.root_node_id, destination: ["", i.success_node_id] }]),
        rejectWithError: !1,
    });
}
function g(e, t, n) {
    var i, a, _, u;
    let T;
    return s.Ay.get("iar_skip_api_report_submit")
        ? Promise.resolve()
        : d.x.REPORT_TO_MOD.has(t.name)
          ? ((T = (function (e, t, n) {
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
                if (t.name === c.Yw.MESSAGE) {
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
                    if ((r()(d.x.REPORT_TO_MOD.has(e.name), `Invalid report type ${e.name}`), e.name === c.Yw.MESSAGE))
                        return m.Rsh.SUBMIT_MODERATOR_MESSAGE_REPORT(e.record.channel_id, e.record.id);
                    throw Error(`Invalid report type ${e.name}`);
                })(i),
                body: T,
                rejectWithError: !1,
            }).then(
                (e) => (
                    E.A.showSuccessToast(S.OB.REPORT_TO_MOD_SUCCESS),
                    T?.channel_id != null &&
                        T?.message_id != null &&
                        l.h.dispatch({
                            type: "REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS",
                            channelId: T.channel_id,
                            messageId: T.message_id,
                        }),
                    e
                ),
            ))
          : ((a = e),
            (_ = t),
            (u = n),
            o.Bo.post({ url: m.Rsh.SUBMIT_REPORT_MENU(p(_)), body: f(a, _, u), rejectWithError: !1 }));
}
function h(e, t, n, i) {
    if (s.Ay.get("iar_skip_api_report_submit")) return Promise.resolve();
    let a = L(t);
    return o.Bo.post({ url: m.Rsh.SUBMIT_UNAUTHENTICATED_REPORT_MENU(a), body: f(e, t, n, i), rejectWithError: !0 });
}
function D(e, t) {
    return o.Bo.post({
        url: `${m.Rsh.SEND_UNAUTHENTICATED_REPORT_PINCODE(e)}?b=${(function (e) {
            let t = 5381;
            for (let n = 0; n < e.length; n++) t = ((t << 5) + t + e.charCodeAt(n)) | 0;
            return (t >>> 0).toString(36);
        })(t)}`,
        body: { name: e, email: t },
        rejectWithError: !1,
        failImmediatelyWhenRateLimited: !0,
    });
}
async function O(e, t, n) {
    return (
        await o.Bo.post({
            url: m.Rsh.VERIFY_UNAUTHENTICATED_REPORT(e),
            body: { name: e, email: t, code: n },
            rejectWithError: !1,
        })
    ).body;
}
async function U() {
    return await o.Bo.get({ url: m.Rsh.DSA_CAPABILITIES, rejectWithError: !1 });
}
async function G(e) {
    return (await o.Bo.post({ url: m.Rsh.SUBMIT_REPORT_SECOND_LOOK, body: { token: e }, rejectWithError: !1 })).body;
}
function L(e) {
    let t = e.name;
    return r()(Object.values(c.tY).includes(t), `Invalid report type ${e.name}`), t;
}
function p(e) {
    let t = e.name;
    return r()(Object.values(c.t0).includes(t), `Invalid report type ${e.name}`), t;
}
function f(e, t, n, i) {
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
        o = {
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
    if (t.name === c.t0.MESSAGE || t.name === c.t0.FIRST_DM) {
        let { channel_id: e, id: n } = t.record;
        return { ...o, ...d, name: t.name, channel_id: e, message_id: n };
    }
    if (t.name === c.t0.GUILD || t.name === c.t0.GUILD_DISCOVERY) {
        let { id: e } = t.record;
        return { ...o, ...d, name: t.name, guild_id: e };
    }
    if (t.name === c.t0.GUILD_DIRECTORY_ENTRY) {
        let { guildId: e, channelId: n } = t.record;
        return { ...o, ...d, name: t.name, channel_id: n, guild_id: e };
    }
    if (t.name === c.t0.STAGE_CHANNEL) {
        let { id: e, guild_id: n, channel_id: i } = t.record;
        return { ...o, ...d, name: t.name, channel_id: i, guild_id: n, stage_instance_id: e };
    }
    if (t.name === c.t0.GUILD_SCHEDULED_EVENT) {
        let { id: e, guild_id: n } = t.record;
        return { ...o, ...d, name: t.name, guild_id: n, guild_scheduled_event_id: e };
    } else if (t.name === c.t0.USER)
        return { ...o, ...d, name: t.name, user_id: t.record.id, guild_id: t.contextualGuildId };
    else if (t.name === c.tY.USER)
        return { ...o, ...d, name: t.name, user_id: t.record.id, guild_id: t.contextualGuildId, email_token: i };
    else if (t.name === c.tY.MESSAGE) return { ...o, ...d, name: t.name, message_id: t.record.id, email_token: i };
    else if (t.name === c.tY.GUILD) return { ...o, ...d, name: t.name, guild_id: t.record.id, email_token: i };
    else if (t.name === c.t0.APPLICATION)
        return {
            ...o,
            ...d,
            name: t.name,
            application_id: t.record.id,
            guild_id: t.contextualGuildId,
            channel_id: t.contextualChannelId,
            entrypoint: t.entrypoint,
        };
    else if (t.name === c.t0.WIDGET) return { ...o, ...d, name: t.name, user_id: t.user_id, widget_id: t.widget_id };
    else if (t.name === c.tY.MEDIA_TAKEDOWN) return { ...o, ...d, name: t.name, email_token: i };
    return null;
}
function N(e, t, n) {
    u.Ay.trackWithMetadata(m.HAw.IAR_MODAL_CLOSE, {
        report_type: e.name,
        report_id: n,
        navigation_history: t,
        message_id: e.name === c.t0.MESSAGE || e.name === c.t0.FIRST_DM ? e.record.id : void 0,
        stage_instance_id: e.name === c.t0.STAGE_CHANNEL ? e.record.id : void 0,
        guild_scheduled_event_id: e.name === c.t0.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
        guild_id:
            e.name === c.t0.GUILD || e.name === c.t0.GUILD_DISCOVERY
                ? e.record.id
                : e.name === c.t0.GUILD_DIRECTORY_ENTRY
                  ? e.record.guildId
                  : e.name === c.t0.GUILD_SCHEDULED_EVENT
                    ? e.record.guild_id
                    : void 0,
        channel_id:
            e.name === c.t0.GUILD_SCHEDULED_EVENT
                ? e.record.channel_id
                : e.name === c.t0.GUILD_DIRECTORY_ENTRY
                  ? e.record.channelId
                  : void 0,
        application_id: e.name === c.t0.APPLICATION ? e.record.id : void 0,
    });
}
function v(e, t) {
    l.h.dispatch({ type: "IN_APP_REPORTS_SHOW_FEEDBACK", reportId: t, reportType: e.name });
}
function y(e, t) {
    let {
            freeTextElements: n,
            dropdownElements: i,
            countrySelectElement: a,
            radioGroupElements: _,
            multiSelectElement: r,
            contentUrlInputElement: d,
        } = e,
        { textInput: o, multiSelect: l } = t;
    return (
        n.some(
            (e) =>
                !0 === e.should_submit_data &&
                (o?.[e.name] == null || o?.[e.name].value === "" || !o?.[e.name]?.isValid),
        ) ||
        i.some((e) => !0 === e.should_submit_data && (o?.[e.name] == null || o?.[e.name].value === "")) ||
        (a?.should_submit_data === !0 && (o?.[a.name] == null || o?.[a.name].value === "")) ||
        _.some((e) => !0 === e.should_submit_data && (o?.[e.name] == null || o?.[e.name].value === "")) ||
        (r?.should_submit_data === !0 && (null == l || 0 === Object.keys(l).length)) ||
        (d?.should_submit_data === !0 && (o?.[d.name] == null || o?.[d.name].value === "" || !o?.[d.name]?.isValid))
    );
}
var C =
    (((i = {}).SETTINGS_UPSELLS_VIEWED = "SETTINGS_UPSELLS_VIEWED"),
    (i.SETTINGS_UPSELLS_APPLY_CLICKED = "SETTINGS_UPSELLS_APPLY_CLICKED"),
    (i.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED = "SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED"),
    i);
function b(e, t, n) {
    return a.useCallback(
        (i) => (a) => {
            u.Ay.trackWithMetadata(m.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
                report_id: n,
                report_type: e.name,
                report_subtype: t,
                settings_upsells_type: i,
                action: a,
            });
        },
        [n, e, t],
    );
}

n.d(t, {
    G_: () => G,
    Hl: () => v,
    IM: () => A,
    Mw: () => M,
    OY: () => L,
    Op: () => I,
    TP: () => D,
    Zv: () => y,
    bo: () => g,
    gP: () => R,
    ks: () => C,
    lJ: () => b,
    m9: () => T,
    q: () => U,
    zC: () => h,
});
var i,
    a = n(64700),
    r = n(284009),
    _ = n.n(r),
    d = n(2110),
    l = n(636537),
    o = n(228366),
    u = n(58149),
    E = n(865116),
    s = n(381689),
    c = n(17372),
    m = n(652215),
    S = n(835002);
async function T(e, t) {
    let n = p(e),
        i = await l.Bo.get({
            url: m.Rsh.GET_REPORT_MENU(n),
            query: t?.variant != null ? { variant: t.variant } : void 0,
            rejectWithError: !1,
        });
    return i.body ?? JSON.parse(i.text);
}
async function I(e, t) {
    var n;
    let i,
        a = ((i = (n = e).name), _()(Object.values(c.Yw).includes(i), `Invalid report type ${n.name}`), i),
        r = await l.Bo.get({
            url: m.Rsh.GET_REPORT_MENU(a),
            query: t?.variant != null ? { variant: t.variant } : void 0,
            rejectWithError: !1,
        });
    return r.body ?? JSON.parse(r.text);
}
async function A(e, t) {
    let n = O(e),
        i = await l.Bo.get({
            url: m.Rsh.GET_UNAUTHENTICATED_REPORT_MENU(n),
            query: t?.variant != null ? { variant: t.variant } : void 0,
            rejectWithError: !1,
        });
    return i.body ?? JSON.parse(i.text);
}
async function R(e, t) {
    let n = p(e),
        i = await T(e, t);
    await l.Bo.post({
        url: m.Rsh.SUBMIT_REPORT_MENU(n),
        body: f(i, e, [{ nodeRef: i.root_node_id, destination: ["", i.success_node_id] }]),
        rejectWithError: !1,
    });
}
function h(e, t, n) {
    var i, a, r, u;
    let T;
    return E.Ay.get("iar_skip_api_report_submit")
        ? Promise.resolve()
        : d.x.REPORT_TO_MOD.has(t.name)
          ? ((T = N(e, (i = t), n)),
            l.Bo.post({
                url: (function (e) {
                    if ((_()(d.x.REPORT_TO_MOD.has(e.name), `Invalid report type ${e.name}`), e.name === c.Yw.MESSAGE))
                        return m.Rsh.SUBMIT_MODERATOR_MESSAGE_REPORT(e.record.channel_id, e.record.id);
                    throw Error(`Invalid report type ${e.name}`);
                })(i),
                body: T,
                rejectWithError: !1,
            }).then(
                (e) => (
                    s.A.showSuccessToast(S.OB.REPORT_TO_MOD_SUCCESS),
                    T?.channel_id != null &&
                        T?.message_id != null &&
                        o.h.dispatch({
                            type: "REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS",
                            channelId: T.channel_id,
                            messageId: T.message_id,
                        }),
                    e
                ),
            ))
          : ((a = e),
            (r = t),
            (u = n),
            l.Bo.post({ url: m.Rsh.SUBMIT_REPORT_MENU(p(r)), body: f(a, r, u), rejectWithError: !1 }));
}
function g(e, t, n, i) {
    if (E.Ay.get("iar_skip_api_report_submit")) return Promise.resolve();
    let a = O(t);
    return l.Bo.post({ url: m.Rsh.SUBMIT_UNAUTHENTICATED_REPORT_MENU(a), body: f(e, t, n, i), rejectWithError: !0 });
}
function D(e, t) {
    return l.Bo.post({
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
async function G(e, t, n) {
    return (
        await l.Bo.post({
            url: m.Rsh.VERIFY_UNAUTHENTICATED_REPORT(e),
            body: { name: e, email: t, code: n },
            rejectWithError: !1,
        })
    ).body;
}
async function L() {
    return await l.Bo.get({ url: m.Rsh.DSA_CAPABILITIES, rejectWithError: !1 });
}
async function U(e) {
    return (await l.Bo.post({ url: m.Rsh.SUBMIT_REPORT_SECOND_LOOK, body: { token: e }, rejectWithError: !1 })).body;
}
function O(e) {
    let t = e.name;
    return _()(Object.values(c.tY).includes(t), `Invalid report type ${e.name}`), t;
}
function p(e) {
    let t = e.name;
    return _()(Object.values(c.t0).includes(t), `Invalid report type ${e.name}`), t;
}
let N = (e, t, n) => {
        let { version: i, variant: a, language: r } = e,
            _ = {
                version: i,
                variant: a,
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
        if (t.name === c.Yw.MESSAGE) {
            let { channel_id: e, id: n } = t.record;
            return {
                ..._,
                ...{ channel_id: void 0, message_id: void 0, guild_id: void 0 },
                name: t.name,
                channel_id: e,
                message_id: n,
            };
        }
        return null;
    },
    f = (e, t, n, i) => {
        let { version: a, variant: r, language: _ } = e,
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
                variant: r,
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
        if (t.name === c.t0.MESSAGE || t.name === c.t0.FIRST_DM) {
            let { channel_id: e, id: n } = t.record;
            return { ...l, ...d, name: t.name, channel_id: e, message_id: n };
        }
        if (t.name === c.t0.GUILD || t.name === c.t0.GUILD_DISCOVERY) {
            let { id: e } = t.record;
            return { ...l, ...d, name: t.name, guild_id: e };
        }
        if (t.name === c.t0.GUILD_DIRECTORY_ENTRY) {
            let { guildId: e, channelId: n } = t.record;
            return { ...l, ...d, name: t.name, channel_id: n, guild_id: e };
        }
        if (t.name === c.t0.STAGE_CHANNEL) {
            let { id: e, guild_id: n, channel_id: i } = t.record;
            return { ...l, ...d, name: t.name, channel_id: i, guild_id: n, stage_instance_id: e };
        }
        if (t.name === c.t0.GUILD_SCHEDULED_EVENT) {
            let { id: e, guild_id: n } = t.record;
            return { ...l, ...d, name: t.name, guild_id: n, guild_scheduled_event_id: e };
        } else if (t.name === c.t0.USER)
            return { ...l, ...d, name: t.name, user_id: t.record.id, guild_id: t.contextualGuildId };
        else if (t.name === c.tY.USER)
            return { ...l, ...d, name: t.name, user_id: t.record.id, guild_id: t.contextualGuildId, email_token: i };
        else if (t.name === c.tY.MESSAGE) return { ...l, ...d, name: t.name, message_id: t.record.id, email_token: i };
        else if (t.name === c.tY.GUILD) return { ...l, ...d, name: t.name, guild_id: t.record.id, email_token: i };
        else if (t.name === c.t0.APPLICATION)
            return {
                ...l,
                ...d,
                name: t.name,
                application_id: t.record.id,
                guild_id: t.contextualGuildId,
                channel_id: t.contextualChannelId,
                entrypoint: t.entrypoint,
            };
        else if (t.name === c.t0.WIDGET)
            return { ...l, ...d, name: t.name, user_id: t.user_id, widget_id: t.widget_id };
        else if (t.name === c.tY.MEDIA_TAKEDOWN) return { ...l, ...d, name: t.name, email_token: i };
        return null;
    };
function v(e, t, n) {
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
function y(e, t) {
    o.h.dispatch({ type: "IN_APP_REPORTS_SHOW_FEEDBACK", reportId: t, reportType: e.name });
}
function C(e, t) {
    let {
            freeTextElements: n,
            dropdownElements: i,
            countrySelectElement: a,
            radioGroupElements: r,
            multiSelectElement: _,
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
        r.some((e) => !0 === e.should_submit_data && (l?.[e.name] == null || l?.[e.name].value === "")) ||
        (_?.should_submit_data === !0 && (null == o || 0 === Object.keys(o).length)) ||
        (d?.should_submit_data === !0 && (l?.[d.name] == null || l?.[d.name].value === "" || !l?.[d.name]?.isValid))
    );
}
var b =
    (((i = {}).SETTINGS_UPSELLS_VIEWED = "SETTINGS_UPSELLS_VIEWED"),
    (i.SETTINGS_UPSELLS_APPLY_CLICKED = "SETTINGS_UPSELLS_APPLY_CLICKED"),
    (i.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED = "SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED"),
    i);
function M(e, t, n) {
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

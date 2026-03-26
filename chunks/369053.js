"use strict";
n.d(t, {
    G_: () => v,
    Hl: () => M,
    IM: () => E,
    Mw: () => U,
    OY: () => N,
    Op: () => m,
    TP: () => y,
    Zv: () => x,
    bo: () => S,
    gP: () => g,
    ks: () => P,
    lJ: () => k,
    m9: () => h,
    q: () => C,
    zC: () => A,
});
var r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(2110),
    o = n(562465),
    l = n(73153),
    u = n(58149),
    c = n(865116),
    d = n(662502),
    _ = n(17372),
    f = n(652215),
    p = n(835002);
async function h(e, t) {
    let n = O(e),
        r = await o.Bo.get({
            url: f.Rsh.GET_REPORT_MENU(n),
            query: t?.variant != null ? { variant: t.variant } : void 0,
            rejectWithError: !1,
        });
    return r.body ?? JSON.parse(r.text);
}
async function m(e, t) {
    let n = b(e),
        r = await o.Bo.get({
            url: f.Rsh.GET_REPORT_MENU(n),
            query: t?.variant != null ? { variant: t.variant } : void 0,
            rejectWithError: !1,
        });
    return r.body ?? JSON.parse(r.text);
}
async function E(e, t) {
    let n = R(e),
        r = await o.Bo.get({
            url: f.Rsh.GET_UNAUTHENTICATED_REPORT_MENU(n),
            query: t?.variant != null ? { variant: t.variant } : void 0,
            rejectWithError: !1,
        });
    return r.body ?? JSON.parse(r.text);
}
async function g(e, t) {
    let n = O(e),
        r = await h(e, t);
    await o.Bo.post({
        url: f.Rsh.SUBMIT_REPORT_MENU(n),
        body: w(r, e, [{ nodeRef: r.root_node_id, destination: ["", r.success_node_id] }]),
        rejectWithError: !1,
    });
}
function A(e, t, n) {
    return c.Ay.get("iar_skip_api_report_submit")
        ? Promise.resolve()
        : a.x.REPORT_TO_MOD.has(t.name)
          ? T(e, t, n)
          : I(e, t, n);
}
function I(e, t, n) {
    return o.Bo.post({ url: f.Rsh.SUBMIT_REPORT_MENU(O(t)), body: w(e, t, n), rejectWithError: !1 });
}
function T(e, t, n) {
    let r = L(e, t, n);
    return o.Bo.post({ url: D(t), body: r, rejectWithError: !1 }).then(
        (e) => (
            d.A.showSuccessToast(p.OB.REPORT_TO_MOD_SUCCESS),
            r?.channel_id != null &&
                r?.message_id != null &&
                l.h.dispatch({
                    type: "REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS",
                    channelId: r.channel_id,
                    messageId: r.message_id,
                }),
            e
        ),
    );
}
function S(e, t, n, r) {
    if (c.Ay.get("iar_skip_api_report_submit")) return Promise.resolve();
    let i = R(t);
    return o.Bo.post({ url: f.Rsh.SUBMIT_UNAUTHENTICATED_REPORT_MENU(i), body: w(e, t, n, r), rejectWithError: !0 });
}
function y(e, t) {
    return o.Bo.post({
        url: f.Rsh.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),
        body: { name: e, email: t },
        rejectWithError: !1,
    });
}
async function v(e, t, n) {
    return (
        await o.Bo.post({
            url: f.Rsh.VERIFY_UNAUTHENTICATED_REPORT(e),
            body: { name: e, email: t, code: n },
            rejectWithError: !1,
        })
    ).body;
}
async function N() {
    return await o.Bo.get({ url: f.Rsh.DSA_CAPABILITIES, rejectWithError: !1 });
}
async function C(e) {
    return (await o.Bo.post({ url: f.Rsh.SUBMIT_REPORT_SECOND_LOOK, body: { token: e }, rejectWithError: !1 })).body;
}
function R(e) {
    let t = e.name;
    return s()(Object.values(_.tY).includes(t), `Invalid report type ${e.name}`), t;
}
function O(e) {
    let t = e.name;
    return s()(Object.values(_.t0).includes(t), `Invalid report type ${e.name}`), t;
}
function b(e) {
    let t = e.name;
    return s()(Object.values(_.Yw).includes(t), `Invalid report type ${e.name}`), t;
}
function D(e) {
    if ((s()(a.x.REPORT_TO_MOD.has(e.name), `Invalid report type ${e.name}`), e.name === _.Yw.MESSAGE))
        return f.Rsh.SUBMIT_MODERATOR_MESSAGE_REPORT(e.record.channel_id, e.record.id);
    throw Error(`Invalid report type ${e.name}`);
}
let L = (e, t, n) => {
        let { version: r, variant: i, language: s } = e,
            a = { channel_id: void 0, message_id: void 0, guild_id: void 0 },
            o = {
                version: r,
                variant: i,
                language: s ?? "en",
                breadcrumbs: n.map((e) => e.nodeRef),
                elements: n.reduce((e, t) => {
                    let { multiSelect: n, textInput: r } = t;
                    return {
                        ...e,
                        ...(null != n && { [n.name]: Object.keys(n.state) }),
                        ...Object.fromEntries(
                            Object.entries(r ?? {}).map((e) => {
                                let [t, { value: n }] = e;
                                return [t, n];
                            }),
                        ),
                    };
                }, {}),
            };
        if (t.name === _.Yw.MESSAGE) {
            let { channel_id: e, id: n } = t.record;
            return { ...o, ...a, name: t.name, channel_id: e, message_id: n };
        }
        return null;
    },
    w = (e, t, n, r) => {
        let { version: i, variant: s, language: a } = e,
            o = {
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
                version: i,
                variant: s,
                language: a ?? "en",
                breadcrumbs: n.map((e) => e.nodeRef),
                elements: n.reduce((e, t) => {
                    let { multiSelect: n, textInput: r } = t;
                    return {
                        ...e,
                        ...(null != n && { [n.name]: Object.keys(n.state) }),
                        ...Object.fromEntries(
                            Object.entries(r ?? {}).map((e) => {
                                let [t, { value: n }] = e;
                                return [t, n];
                            }),
                        ),
                    };
                }, {}),
            };
        if (t.name === _.t0.MESSAGE || t.name === _.t0.FIRST_DM) {
            let { channel_id: e, id: n } = t.record;
            return { ...l, ...o, name: t.name, channel_id: e, message_id: n };
        }
        if (t.name === _.t0.GUILD || t.name === _.t0.GUILD_DISCOVERY) {
            let { id: e } = t.record;
            return { ...l, ...o, name: t.name, guild_id: e };
        }
        if (t.name === _.t0.GUILD_DIRECTORY_ENTRY) {
            let { guildId: e, channelId: n } = t.record;
            return { ...l, ...o, name: t.name, channel_id: n, guild_id: e };
        }
        if (t.name === _.t0.STAGE_CHANNEL) {
            let { id: e, guild_id: n, channel_id: r } = t.record;
            return { ...l, ...o, name: t.name, channel_id: r, guild_id: n, stage_instance_id: e };
        }
        if (t.name === _.t0.GUILD_SCHEDULED_EVENT) {
            let { id: e, guild_id: n } = t.record;
            return { ...l, ...o, name: t.name, guild_id: n, guild_scheduled_event_id: e };
        } else if (t.name === _.t0.USER)
            return { ...l, ...o, name: t.name, user_id: t.record.id, guild_id: t.contextualGuildId };
        else if (t.name === _.tY.USER)
            return { ...l, ...o, name: t.name, user_id: t.record.id, guild_id: t.contextualGuildId, email_token: r };
        else if (t.name === _.tY.MESSAGE) return { ...l, ...o, name: t.name, message_id: t.record.id, email_token: r };
        else if (t.name === _.tY.GUILD) return { ...l, ...o, name: t.name, guild_id: t.record.id, email_token: r };
        else if (t.name === _.t0.APPLICATION)
            return {
                ...l,
                ...o,
                name: t.name,
                application_id: t.record.id,
                guild_id: t.contextualGuildId,
                channel_id: t.contextualChannelId,
                entrypoint: t.entrypoint,
            };
        else if (t.name === _.t0.WIDGET)
            return { ...l, ...o, name: t.name, user_id: t.user_id, widget_id: t.widget_id };
        else if (t.name === _.tY.MEDIA_TAKEDOWN) return { ...l, ...o, name: t.name, email_token: r };
        return null;
    };
function M(e, t, n) {
    u.Ay.trackWithMetadata(f.HAw.IAR_MODAL_CLOSE, {
        report_type: e.name,
        report_id: n,
        navigation_history: t,
        message_id: e.name === _.t0.MESSAGE || e.name === _.t0.FIRST_DM ? e.record.id : void 0,
        stage_instance_id: e.name === _.t0.STAGE_CHANNEL ? e.record.id : void 0,
        guild_scheduled_event_id: e.name === _.t0.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
        guild_id:
            e.name === _.t0.GUILD || e.name === _.t0.GUILD_DISCOVERY
                ? e.record.id
                : e.name === _.t0.GUILD_DIRECTORY_ENTRY
                  ? e.record.guildId
                  : e.name === _.t0.GUILD_SCHEDULED_EVENT
                    ? e.record.guild_id
                    : void 0,
        channel_id:
            e.name === _.t0.GUILD_SCHEDULED_EVENT
                ? e.record.channel_id
                : e.name === _.t0.GUILD_DIRECTORY_ENTRY
                  ? e.record.channelId
                  : void 0,
        application_id: e.name === _.t0.APPLICATION ? e.record.id : void 0,
    });
}
function x(e, t) {
    l.h.dispatch({ type: "IN_APP_REPORTS_SHOW_FEEDBACK", reportId: t, reportType: e.name });
}
function P(e, t) {
    let {
            freeTextElements: n,
            dropdownElements: r,
            countrySelectElement: i,
            radioGroupElements: s,
            multiSelectElement: a,
            contentUrlInputElement: o,
        } = e,
        { textInput: l, multiSelect: u } = t;
    return (
        n.some(
            (e) =>
                !0 === e.should_submit_data &&
                (l?.[e.name] == null || l?.[e.name].value === "" || !l?.[e.name]?.isValid),
        ) ||
        r.some((e) => !0 === e.should_submit_data && (l?.[e.name] == null || l?.[e.name].value === "")) ||
        (i?.should_submit_data === !0 && (l?.[i.name] == null || l?.[i.name].value === "")) ||
        s.some((e) => !0 === e.should_submit_data && (l?.[e.name] == null || l?.[e.name].value === "")) ||
        (a?.should_submit_data === !0 && (null == u || 0 === Object.keys(u).length)) ||
        (o?.should_submit_data === !0 && (l?.[o.name] == null || l?.[o.name].value === "" || !l?.[o.name]?.isValid))
    );
}
var k = (function (e) {
    return (
        (e.SETTINGS_UPSELLS_VIEWED = "SETTINGS_UPSELLS_VIEWED"),
        (e.SETTINGS_UPSELLS_APPLY_CLICKED = "SETTINGS_UPSELLS_APPLY_CLICKED"),
        (e.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED = "SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED"),
        e
    );
})({});
function U(e, t, n) {
    return r.useCallback(
        (r) => (i) => {
            u.Ay.trackWithMetadata(f.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
                report_id: n,
                report_type: e.name,
                report_subtype: t,
                settings_upsells_type: r,
                action: i,
            });
        },
        [n, e, t],
    );
}

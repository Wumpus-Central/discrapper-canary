n.d(t, {
    B0: () => d,
    M4: () => A,
    Nt: () => c,
    RV: () => m,
    VP: () => S,
    X: () => T,
    ZD: () => _,
    fw: () => p,
    hs: () => E,
    i_: () => N,
    k8: () => b,
    ox: () => f,
    qJ: () => g,
    yL: () => h
}),
    n(411104),
    n(724458),
    n(47120);
var i = n(192379),
    r = n(544891),
    a = n(570140),
    s = n(367907),
    o = n(432877),
    l = n(82554),
    u = n(981631);
async function c(e, t) {
    var n;
    let i = y(e),
        a = await r.tn.get({
            url: u.ANM.GET_REPORT_MENU(i),
            query: (null == t ? void 0 : t.variant) != null ? { variant: t.variant } : void 0,
            rejectWithError: !1
        });
    return null !== (n = a.body) && void 0 !== n ? n : JSON.parse(a.text);
}
async function d(e, t) {
    var n;
    let i = v(e),
        a = await r.tn.get({
            url: u.ANM.GET_UNAUTHENTICATED_REPORT_MENU(i),
            query: (null == t ? void 0 : t.variant) != null ? { variant: t.variant } : void 0,
            rejectWithError: !1
        });
    return null !== (n = a.body) && void 0 !== n ? n : JSON.parse(a.text);
}
async function f(e, t) {
    let n = y(e),
        i = await c(e, t);
    await r.tn.post({
        url: u.ANM.SUBMIT_REPORT_MENU(n),
        body: I(i, e, [
            {
                nodeRef: i.root_node_id,
                destination: ['', i.success_node_id]
            }
        ]),
        rejectWithError: !1
    });
}
function _(e, t, n) {
    return o.ZP.get('iar_skip_api_report_submit')
        ? Promise.resolve()
        : r.tn.post({
              url: u.ANM.SUBMIT_REPORT_MENU(y(t)),
              body: I(e, t, n),
              rejectWithError: !1
          });
}
function p(e, t, n, i) {
    if (o.ZP.get('iar_skip_api_report_submit')) return Promise.resolve();
    let a = v(t);
    return r.tn.post({
        url: u.ANM.SUBMIT_UNAUTHENTICATED_REPORT_MENU(a),
        body: I(e, t, n, i),
        rejectWithError: !1
    });
}
function h(e, t) {
    return r.tn.post({
        url: u.ANM.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),
        body: {
            name: e,
            email: t
        },
        rejectWithError: !1
    });
}
async function m(e, t, n) {
    return (
        await r.tn.post({
            url: u.ANM.VERIFY_UNAUTHENTICATED_REPORT(e),
            body: {
                name: e,
                email: t,
                code: n
            },
            rejectWithError: !1
        })
    ).body;
}
async function g() {
    return await r.tn.get({
        url: u.ANM.DSA_EXPERIMENT_UNAUTHENTICATED,
        rejectWithError: !1
    });
}
async function E(e) {
    return (
        await r.tn.post({
            url: u.ANM.SUBMIT_REPORT_SECOND_LOOK,
            body: { token: e },
            rejectWithError: !1
        })
    ).body;
}
function v(e) {
    let t = e.name;
    if (!Object.values(l.BM).includes(t)) throw Error('Invalid report type '.concat(e.name));
    return t;
}
function y(e) {
    let t = e.name;
    if (!Object.values(l.b).includes(t)) throw Error('Invalid report type '.concat(e.name));
    return t;
}
let I = (e, t, n, i) => {
    let { version: r, variant: a, language: s } = e,
        o = {
            channel_id: void 0,
            message_id: void 0,
            stage_instance_id: void 0,
            guild_id: void 0,
            guild_scheduled_event_id: void 0,
            user_id: void 0,
            email_token: void 0,
            application_id: void 0,
            entrypoint: void 0
        },
        u = {
            version: r,
            variant: a,
            language: null != s ? s : 'en',
            breadcrumbs: n.map((e) => e.nodeRef),
            elements: n.reduce((e, t) => {
                let { multiSelect: n, textInput: i } = t;
                return {
                    ...e,
                    ...(null != n && { [n.name]: Object.keys(n.state) }),
                    ...Object.fromEntries(
                        Object.entries(null != i ? i : {}).map((e) => {
                            let [t, { value: n }] = e;
                            return [t, n];
                        })
                    )
                };
            }, {})
        };
    if (t.name === l.b.MESSAGE || t.name === l.b.FIRST_DM) {
        let { channel_id: e, id: n } = t.record;
        return {
            ...u,
            ...o,
            name: t.name,
            channel_id: e,
            message_id: n
        };
    }
    if (t.name === l.b.GUILD || t.name === l.b.GUILD_DISCOVERY) {
        let { id: e } = t.record;
        return {
            ...u,
            ...o,
            name: t.name,
            guild_id: e
        };
    }
    if (t.name === l.b.GUILD_DIRECTORY_ENTRY) {
        let { guildId: e, channelId: n } = t.record;
        return {
            ...u,
            ...o,
            name: t.name,
            channel_id: n,
            guild_id: e
        };
    }
    if (t.name === l.b.STAGE_CHANNEL) {
        let { id: e, guild_id: n, channel_id: i } = t.record;
        return {
            ...u,
            ...o,
            name: t.name,
            channel_id: i,
            guild_id: n,
            stage_instance_id: e
        };
    }
    if (t.name === l.b.GUILD_SCHEDULED_EVENT) {
        let { id: e, guild_id: n } = t.record;
        return {
            ...u,
            ...o,
            name: t.name,
            guild_id: n,
            guild_scheduled_event_id: e
        };
    } else if (t.name === l.b.USER)
        return {
            ...u,
            ...o,
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId
        };
    else if (t.name === l.BM.USER)
        return {
            ...u,
            ...o,
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId,
            email_token: i
        };
    else if (t.name === l.BM.MESSAGE)
        return {
            ...u,
            ...o,
            name: t.name,
            message_id: t.record.id,
            email_token: i
        };
    else if (t.name === l.b.APPLICATION)
        return {
            ...u,
            ...o,
            name: t.name,
            application_id: t.record.id,
            guild_id: t.contextualGuildId,
            channel_id: t.contextualChannelId,
            entrypoint: t.entrypoint
        };
    return null;
};
function b(e, t, n) {
    s.ZP.trackWithMetadata(u.rMx.IAR_MODAL_CLOSE, {
        report_type: e.name,
        report_id: n,
        navigation_history: t,
        message_id: e.name === l.b.MESSAGE || e.name === l.b.FIRST_DM ? e.record.id : void 0,
        stage_instance_id: e.name === l.b.STAGE_CHANNEL ? e.record.id : void 0,
        guild_scheduled_event_id: e.name === l.b.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
        guild_id: e.name === l.b.GUILD || e.name === l.b.GUILD_DISCOVERY ? e.record.id : e.name === l.b.GUILD_DIRECTORY_ENTRY ? e.record.guildId : e.name === l.b.GUILD_SCHEDULED_EVENT ? e.record.guild_id : void 0,
        channel_id: e.name === l.b.GUILD_SCHEDULED_EVENT ? e.record.channel_id : e.name === l.b.GUILD_DIRECTORY_ENTRY ? e.record.channelId : void 0,
        application_id: e.name === l.b.APPLICATION ? e.record.id : void 0
    });
}
function T(e, t) {
    a.Z.dispatch({
        type: 'IN_APP_REPORTS_SHOW_FEEDBACK',
        reportId: t,
        reportType: e.name
    });
}
function S(e, t, n, i, r) {
    return (
        e.some((e) => {
            var t;
            return !0 === e.should_submit_data && ((null == i ? void 0 : i[e.name]) == null || (null == i ? void 0 : i[e.name].value) === '' || !(null == i ? void 0 : null === (t = i[e.name]) || void 0 === t ? void 0 : t.isValid));
        }) ||
        t.some((e) => !0 === e.should_submit_data && ((null == i ? void 0 : i[e.name]) == null || (null == i ? void 0 : i[e.name].value) === '')) ||
        ((null == n ? void 0 : n.should_submit_data) === !0 && (null == r || 0 === Object.keys(r).length))
    );
}
var A = (function (e) {
    return (e.SETTINGS_UPSELLS_VIEWED = 'SETTINGS_UPSELLS_VIEWED'), (e.SETTINGS_UPSELLS_APPLY_CLICKED = 'SETTINGS_UPSELLS_APPLY_CLICKED'), (e.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED = 'SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED'), e;
})({});
function N(e, t, n) {
    return i.useCallback(
        (i) => (r) => {
            s.ZP.trackWithMetadata(u.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                report_id: n,
                report_type: e.name,
                report_subtype: t,
                settings_upsells_type: i,
                action: r
            });
        },
        [n, e, t]
    );
}

n.d(t, {
    B0: () => h,
    M4: () => R,
    Nt: () => p,
    RV: () => y,
    VP: () => C,
    X: () => A,
    ZD: () => g,
    fw: () => E,
    hs: () => O,
    i_: () => P,
    k8: () => N,
    ox: () => m,
    qJ: () => v,
    yL: () => b
}),
    n(411104),
    n(977457),
    n(47120);
var r = n(192379),
    i = n(544891),
    o = n(570140),
    a = n(367907),
    s = n(432877),
    l = n(82554),
    c = n(981631);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function p(e, t) {
    var n;
    let r = S(e),
        o = await i.tn.get({
            url: c.ANM.GET_REPORT_MENU(r),
            query: (null == t ? void 0 : t.variant) != null ? { variant: t.variant } : void 0,
            rejectWithError: !1
        });
    return null != (n = o.body) ? n : JSON.parse(o.text);
}
async function h(e, t) {
    var n;
    let r = I(e),
        o = await i.tn.get({
            url: c.ANM.GET_UNAUTHENTICATED_REPORT_MENU(r),
            query: (null == t ? void 0 : t.variant) != null ? { variant: t.variant } : void 0,
            rejectWithError: !1
        });
    return null != (n = o.body) ? n : JSON.parse(o.text);
}
async function m(e, t) {
    let n = S(e),
        r = await p(e, t);
    await i.tn.post({
        url: c.ANM.SUBMIT_REPORT_MENU(n),
        body: T(r, e, [
            {
                nodeRef: r.root_node_id,
                destination: ['', r.success_node_id]
            }
        ]),
        rejectWithError: !1
    });
}
function g(e, t, n) {
    return s.ZP.get('iar_skip_api_report_submit')
        ? Promise.resolve()
        : i.tn.post({
              url: c.ANM.SUBMIT_REPORT_MENU(S(t)),
              body: T(e, t, n),
              rejectWithError: !1
          });
}
function E(e, t, n, r) {
    if (s.ZP.get('iar_skip_api_report_submit')) return Promise.resolve();
    let o = I(t);
    return i.tn.post({
        url: c.ANM.SUBMIT_UNAUTHENTICATED_REPORT_MENU(o),
        body: T(e, t, n, r),
        rejectWithError: !1
    });
}
function b(e, t) {
    return i.tn.post({
        url: c.ANM.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),
        body: {
            name: e,
            email: t
        },
        rejectWithError: !1
    });
}
async function y(e, t, n) {
    return (
        await i.tn.post({
            url: c.ANM.VERIFY_UNAUTHENTICATED_REPORT(e),
            body: {
                name: e,
                email: t,
                code: n
            },
            rejectWithError: !1
        })
    ).body;
}
async function v() {
    return await i.tn.get({
        url: c.ANM.DSA_EXPERIMENT_UNAUTHENTICATED,
        rejectWithError: !1
    });
}
async function O(e) {
    return (
        await i.tn.post({
            url: c.ANM.SUBMIT_REPORT_SECOND_LOOK,
            body: { token: e },
            rejectWithError: !1
        })
    ).body;
}
function I(e) {
    let t = e.name;
    if (!Object.values(l.BM).includes(t)) throw Error('Invalid report type '.concat(e.name));
    return t;
}
function S(e) {
    let t = e.name;
    if (!Object.values(l.b).includes(t)) throw Error('Invalid report type '.concat(e.name));
    return t;
}
let T = (e, t, n, r) => {
    let { version: i, variant: o, language: a } = e,
        s = {
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
        c = {
            version: i,
            variant: o,
            language: null != a ? a : 'en',
            breadcrumbs: n.map((e) => e.nodeRef),
            elements: n.reduce((e, t) => {
                let { multiSelect: n, textInput: r } = t;
                return d(
                    {},
                    e,
                    null != n && { [n.name]: Object.keys(n.state) },
                    Object.fromEntries(
                        Object.entries(null != r ? r : {}).map((e) => {
                            let [t, { value: n }] = e;
                            return [t, n];
                        })
                    )
                );
            }, {})
        };
    if (t.name === l.b.MESSAGE || t.name === l.b.FIRST_DM) {
        let { channel_id: e, id: n } = t.record;
        return _(d({}, c, s), {
            name: t.name,
            channel_id: e,
            message_id: n
        });
    }
    if (t.name === l.b.GUILD || t.name === l.b.GUILD_DISCOVERY) {
        let { id: e } = t.record;
        return _(d({}, c, s), {
            name: t.name,
            guild_id: e
        });
    }
    if (t.name === l.b.GUILD_DIRECTORY_ENTRY) {
        let { guildId: e, channelId: n } = t.record;
        return _(d({}, c, s), {
            name: t.name,
            channel_id: n,
            guild_id: e
        });
    }
    if (t.name === l.b.STAGE_CHANNEL) {
        let { id: e, guild_id: n, channel_id: r } = t.record;
        return _(d({}, c, s), {
            name: t.name,
            channel_id: r,
            guild_id: n,
            stage_instance_id: e
        });
    }
    if (t.name === l.b.GUILD_SCHEDULED_EVENT) {
        let { id: e, guild_id: n } = t.record;
        return _(d({}, c, s), {
            name: t.name,
            guild_id: n,
            guild_scheduled_event_id: e
        });
    } else if (t.name === l.b.USER)
        return _(d({}, c, s), {
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId
        });
    else if (t.name === l.BM.USER)
        return _(d({}, c, s), {
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId,
            email_token: r
        });
    else if (t.name === l.BM.MESSAGE)
        return _(d({}, c, s), {
            name: t.name,
            message_id: t.record.id,
            email_token: r
        });
    else if (t.name === l.BM.GUILD)
        return _(d({}, c, s), {
            name: t.name,
            guild_id: t.record.id,
            email_token: r
        });
    else if (t.name === l.b.APPLICATION)
        return _(d({}, c, s), {
            name: t.name,
            application_id: t.record.id,
            guild_id: t.contextualGuildId,
            channel_id: t.contextualChannelId,
            entrypoint: t.entrypoint
        });
    return null;
};
function N(e, t, n) {
    a.ZP.trackWithMetadata(c.rMx.IAR_MODAL_CLOSE, {
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
function A(e, t) {
    o.Z.dispatch({
        type: 'IN_APP_REPORTS_SHOW_FEEDBACK',
        reportId: t,
        reportType: e.name
    });
}
function C(e, t, n, r, i) {
    return (
        e.some((e) => {
            var t;
            return !0 === e.should_submit_data && ((null == r ? void 0 : r[e.name]) == null || (null == r ? void 0 : r[e.name].value) === '' || !(null == r || null == (t = r[e.name]) ? void 0 : t.isValid));
        }) ||
        t.some((e) => !0 === e.should_submit_data && ((null == r ? void 0 : r[e.name]) == null || (null == r ? void 0 : r[e.name].value) === '')) ||
        ((null == n ? void 0 : n.should_submit_data) === !0 && (null == i || 0 === Object.keys(i).length))
    );
}
var R = (function (e) {
    return (e.SETTINGS_UPSELLS_VIEWED = 'SETTINGS_UPSELLS_VIEWED'), (e.SETTINGS_UPSELLS_APPLY_CLICKED = 'SETTINGS_UPSELLS_APPLY_CLICKED'), (e.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED = 'SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED'), e;
})({});
function P(e, t, n) {
    return r.useCallback(
        (r) => (i) => {
            a.ZP.trackWithMetadata(c.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                report_id: n,
                report_type: e.name,
                report_subtype: t,
                settings_upsells_type: r,
                action: i
            });
        },
        [n, e, t]
    );
}

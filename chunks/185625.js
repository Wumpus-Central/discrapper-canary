n.d(t, {
    B0: () => O,
    Jj: () => R,
    Lo: () => y,
    M4: () => B,
    Nt: () => b,
    RV: () => N,
    VP: () => G,
    X: () => U,
    ZD: () => I,
    fw: () => A,
    hs: () => P,
    i_: () => Z,
    k8: () => k,
    ox: () => v,
    yL: () => C,
}),
    n(415506),
    n(467055),
    n(388685);
var r = n(647438),
    i = n(512722),
    a = n.n(i),
    o = n(741086),
    s = n(544891),
    l = n(570140),
    c = n(367907),
    u = n(432877),
    d = n(681678),
    f = n(82554),
    _ = n(981631),
    p = n(484710);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function b(e, t) {
    var n;
    let r = w(e),
        i = await s.tn.get({
            url: _.ANM.GET_REPORT_MENU(r),
            query: (null == t ? void 0 : t.variant) != null ? { variant: t.variant } : void 0,
            rejectWithError: !1,
        });
    return null != (n = i.body) ? n : JSON.parse(i.text);
}
async function y(e, t) {
    var n;
    let r = x(e),
        i = await s.tn.get({
            url: _.ANM.GET_REPORT_MENU(r),
            query: (null == t ? void 0 : t.variant) != null ? { variant: t.variant } : void 0,
            rejectWithError: !1,
        });
    return null != (n = i.body) ? n : JSON.parse(i.text);
}
async function O(e, t) {
    var n;
    let r = D(e),
        i = await s.tn.get({
            url: _.ANM.GET_UNAUTHENTICATED_REPORT_MENU(r),
            query: (null == t ? void 0 : t.variant) != null ? { variant: t.variant } : void 0,
            rejectWithError: !1,
        });
    return null != (n = i.body) ? n : JSON.parse(i.text);
}
async function v(e, t) {
    let n = w(e),
        r = await b(e, t);
    await s.tn.post({
        url: _.ANM.SUBMIT_REPORT_MENU(n),
        body: j(r, e, [
            {
                nodeRef: r.root_node_id,
                destination: ["", r.success_node_id],
            },
        ]),
        rejectWithError: !1,
    });
}
function I(e, t, n) {
    return u.ZP.get("iar_skip_api_report_submit")
        ? Promise.resolve()
        : o.s.REPORT_TO_MOD.has(t.name)
          ? S(e, t, n)
          : T(e, t, n);
}
function T(e, t, n) {
    return s.tn.post({
        url: _.ANM.SUBMIT_REPORT_MENU(w(t)),
        body: j(e, t, n),
        rejectWithError: !1,
    });
}
function S(e, t, n) {
    let r = M(e, t, n);
    return s.tn
        .post({
            url: L(t),
            body: r,
            rejectWithError: !1,
        })
        .then(
            (e) => (
                d.Z.showSuccessToast(p.wQ.REPORT_TO_MOD_SUCCESS),
                (null == r ? void 0 : r.channel_id) != null &&
                    (null == r ? void 0 : r.message_id) != null &&
                    l.Z.dispatch({
                        type: "REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS",
                        channelId: r.channel_id,
                        messageId: r.message_id,
                    }),
                e
            ),
        );
}
function A(e, t, n, r) {
    if (u.ZP.get("iar_skip_api_report_submit")) return Promise.resolve();
    let i = D(t);
    return s.tn.post({
        url: _.ANM.SUBMIT_UNAUTHENTICATED_REPORT_MENU(i),
        body: j(e, t, n, r),
        rejectWithError: !1,
    });
}
function C(e, t) {
    return s.tn.post({
        url: _.ANM.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),
        body: {
            name: e,
            email: t,
        },
        rejectWithError: !1,
    });
}
async function N(e, t, n) {
    return (
        await s.tn.post({
            url: _.ANM.VERIFY_UNAUTHENTICATED_REPORT(e),
            body: {
                name: e,
                email: t,
                code: n,
            },
            rejectWithError: !1,
        })
    ).body;
}
async function R() {
    return await s.tn.get({
        url: _.ANM.DSA_CAPABILITIES,
        rejectWithError: !1,
    });
}
async function P(e) {
    return (
        await s.tn.post({
            url: _.ANM.SUBMIT_REPORT_SECOND_LOOK,
            body: { token: e },
            rejectWithError: !1,
        })
    ).body;
}
function D(e) {
    let t = e.name;
    return a()(Object.values(f.BM).includes(t), "Invalid report type ".concat(e.name)), t;
}
function w(e) {
    let t = e.name;
    return a()(Object.values(f.b).includes(t), "Invalid report type ".concat(e.name)), t;
}
function x(e) {
    let t = e.name;
    return a()(Object.values(f.xw).includes(t), "Invalid report type ".concat(e.name)), t;
}
function L(e) {
    if ((a()(o.s.REPORT_TO_MOD.has(e.name), "Invalid report type ".concat(e.name)), e.name === f.xw.MESSAGE))
        return _.ANM.SUBMIT_MODERATOR_MESSAGE_REPORT(e.record.channel_id, e.record.id);
    throw Error("Invalid report type ".concat(e.name));
}
let M = (e, t, n) => {
        let { version: r, variant: i, language: a } = e,
            o = {
                channel_id: void 0,
                message_id: void 0,
                guild_id: void 0,
            },
            s = {
                version: r,
                variant: i,
                language: null != a ? a : "en",
                breadcrumbs: n.map((e) => e.nodeRef),
                elements: n.reduce((e, t) => {
                    let { multiSelect: n, textInput: r } = t;
                    return m(
                        {},
                        e,
                        null != n && { [n.name]: Object.keys(n.state) },
                        Object.fromEntries(
                            Object.entries(null != r ? r : {}).map((e) => {
                                let [t, { value: n }] = e;
                                return [t, n];
                            }),
                        ),
                    );
                }, {}),
            };
        if (t.name === f.xw.MESSAGE) {
            let { channel_id: e, id: n } = t.record;
            return E(m({}, s, o), {
                name: t.name,
                channel_id: e,
                message_id: n,
            });
        }
        return null;
    },
    j = (e, t, n, r) => {
        let { version: i, variant: a, language: o } = e,
            s = {
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
                variant: a,
                language: null != o ? o : "en",
                breadcrumbs: n.map((e) => e.nodeRef),
                elements: n.reduce((e, t) => {
                    let { multiSelect: n, textInput: r } = t;
                    return m(
                        {},
                        e,
                        null != n && { [n.name]: Object.keys(n.state) },
                        Object.fromEntries(
                            Object.entries(null != r ? r : {}).map((e) => {
                                let [t, { value: n }] = e;
                                return [t, n];
                            }),
                        ),
                    );
                }, {}),
            };
        if (t.name === f.b.MESSAGE || t.name === f.b.FIRST_DM) {
            let { channel_id: e, id: n } = t.record;
            return E(m({}, l, s), {
                name: t.name,
                channel_id: e,
                message_id: n,
            });
        }
        if (t.name === f.b.GUILD || t.name === f.b.GUILD_DISCOVERY) {
            let { id: e } = t.record;
            return E(m({}, l, s), {
                name: t.name,
                guild_id: e,
            });
        }
        if (t.name === f.b.GUILD_DIRECTORY_ENTRY) {
            let { guildId: e, channelId: n } = t.record;
            return E(m({}, l, s), {
                name: t.name,
                channel_id: n,
                guild_id: e,
            });
        }
        if (t.name === f.b.STAGE_CHANNEL) {
            let { id: e, guild_id: n, channel_id: r } = t.record;
            return E(m({}, l, s), {
                name: t.name,
                channel_id: r,
                guild_id: n,
                stage_instance_id: e,
            });
        }
        if (t.name === f.b.GUILD_SCHEDULED_EVENT) {
            let { id: e, guild_id: n } = t.record;
            return E(m({}, l, s), {
                name: t.name,
                guild_id: n,
                guild_scheduled_event_id: e,
            });
        } else if (t.name === f.b.USER)
            return E(m({}, l, s), {
                name: t.name,
                user_id: t.record.id,
                guild_id: t.contextualGuildId,
            });
        else if (t.name === f.BM.USER)
            return E(m({}, l, s), {
                name: t.name,
                user_id: t.record.id,
                guild_id: t.contextualGuildId,
                email_token: r,
            });
        else if (t.name === f.BM.MESSAGE)
            return E(m({}, l, s), {
                name: t.name,
                message_id: t.record.id,
                email_token: r,
            });
        else if (t.name === f.BM.GUILD)
            return E(m({}, l, s), {
                name: t.name,
                guild_id: t.record.id,
                email_token: r,
            });
        else if (t.name === f.b.APPLICATION)
            return E(m({}, l, s), {
                name: t.name,
                application_id: t.record.id,
                guild_id: t.contextualGuildId,
                channel_id: t.contextualChannelId,
                entrypoint: t.entrypoint,
            });
        else if (t.name === f.b.WIDGET)
            return E(m({}, l, s), {
                name: t.name,
                user_id: t.user_id,
                widget_id: t.widget_id,
            });
        return null;
    };
function k(e, t, n) {
    c.ZP.trackWithMetadata(_.rMx.IAR_MODAL_CLOSE, {
        report_type: e.name,
        report_id: n,
        navigation_history: t,
        message_id: e.name === f.b.MESSAGE || e.name === f.b.FIRST_DM ? e.record.id : void 0,
        stage_instance_id: e.name === f.b.STAGE_CHANNEL ? e.record.id : void 0,
        guild_scheduled_event_id: e.name === f.b.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
        guild_id:
            e.name === f.b.GUILD || e.name === f.b.GUILD_DISCOVERY
                ? e.record.id
                : e.name === f.b.GUILD_DIRECTORY_ENTRY
                  ? e.record.guildId
                  : e.name === f.b.GUILD_SCHEDULED_EVENT
                    ? e.record.guild_id
                    : void 0,
        channel_id:
            e.name === f.b.GUILD_SCHEDULED_EVENT
                ? e.record.channel_id
                : e.name === f.b.GUILD_DIRECTORY_ENTRY
                  ? e.record.channelId
                  : void 0,
        application_id: e.name === f.b.APPLICATION ? e.record.id : void 0,
    });
}
function U(e, t) {
    l.Z.dispatch({
        type: "IN_APP_REPORTS_SHOW_FEEDBACK",
        reportId: t,
        reportType: e.name,
    });
}
function G(e, t, n, r, i) {
    return (
        e.some((e) => {
            var t;
            return (
                !0 === e.should_submit_data &&
                ((null == r ? void 0 : r[e.name]) == null ||
                    (null == r ? void 0 : r[e.name].value) === "" ||
                    !(null == r || null == (t = r[e.name]) ? void 0 : t.isValid))
            );
        }) ||
        t.some(
            (e) =>
                !0 === e.should_submit_data &&
                ((null == r ? void 0 : r[e.name]) == null || (null == r ? void 0 : r[e.name].value) === ""),
        ) ||
        ((null == n ? void 0 : n.should_submit_data) === !0 && (null == i || 0 === Object.keys(i).length))
    );
}
var B = (function (e) {
    return (
        (e.SETTINGS_UPSELLS_VIEWED = "SETTINGS_UPSELLS_VIEWED"),
        (e.SETTINGS_UPSELLS_APPLY_CLICKED = "SETTINGS_UPSELLS_APPLY_CLICKED"),
        (e.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED = "SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED"),
        e
    );
})({});
function Z(e, t, n) {
    return r.useCallback(
        (r) => (i) => {
            c.ZP.trackWithMetadata(_.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
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

n.d(t, {
    G_: () => N,
    Hl: () => k,
    IM: () => O,
    Mw: () => V,
    OY: () => w,
    Op: () => b,
    TP: () => C,
    Zv: () => U,
    bo: () => T,
    gP: () => v,
    ks: () => G,
    lJ: () => F,
    m9: () => y,
    q: () => R,
    zC: () => A,
}),
    n(65821),
    n(446912),
    n(896048);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    o = n(2110),
    s = n(562465),
    l = n(73153),
    c = n(58149),
    u = n(865116),
    d = n(662502),
    f = n(17372),
    p = n(652215),
    _ = n(835002);

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
async function y(e, t) {
    var n;
    let r = D(e),
        i = await s.Bo.get({
            url: p.Rsh.GET_REPORT_MENU(r),
            query:
                (null == t ? void 0 : t.variant) != null
                    ? {
                          variant: t.variant,
                      }
                    : void 0,
            rejectWithError: !1,
        });
    return null != (n = i.body) ? n : JSON.parse(i.text);
}
async function b(e, t) {
    var n;
    let r = L(e),
        i = await s.Bo.get({
            url: p.Rsh.GET_REPORT_MENU(r),
            query:
                (null == t ? void 0 : t.variant) != null
                    ? {
                          variant: t.variant,
                      }
                    : void 0,
            rejectWithError: !1,
        });
    return null != (n = i.body) ? n : JSON.parse(i.text);
}
async function O(e, t) {
    var n;
    let r = P(e),
        i = await s.Bo.get({
            url: p.Rsh.GET_UNAUTHENTICATED_REPORT_MENU(r),
            query:
                (null == t ? void 0 : t.variant) != null
                    ? {
                          variant: t.variant,
                      }
                    : void 0,
            rejectWithError: !1,
        });
    return null != (n = i.body) ? n : JSON.parse(i.text);
}
async function v(e, t) {
    let n = D(e),
        r = await y(e, t);
    await s.Bo.post({
        url: p.Rsh.SUBMIT_REPORT_MENU(n),
        body: j(r, e, [
            {
                nodeRef: r.root_node_id,
                destination: ["", r.success_node_id],
            },
        ]),
        rejectWithError: !1,
    });
}

function A(e, t, n) {
    return u.Ay.get("iar_skip_api_report_submit")
        ? Promise.resolve()
        : o.x.REPORT_TO_MOD.has(t.name)
          ? S(e, t, n)
          : I(e, t, n);
}

function I(e, t, n) {
    return s.Bo.post({
        url: p.Rsh.SUBMIT_REPORT_MENU(D(t)),
        body: j(e, t, n),
        rejectWithError: !1,
    });
}

function S(e, t, n) {
    let r = M(e, t, n);
    return s.Bo.post({
        url: x(t),
        body: r,
        rejectWithError: !1,
    }).then(
        (e) => (
            d.A.showSuccessToast(_.OB.REPORT_TO_MOD_SUCCESS),
            (null == r ? void 0 : r.channel_id) != null &&
                (null == r ? void 0 : r.message_id) != null &&
                l.h.dispatch({
                    type: "REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS",
                    channelId: r.channel_id,
                    messageId: r.message_id,
                }),
            e
        ),
    );
}

function T(e, t, n, r) {
    if (u.Ay.get("iar_skip_api_report_submit")) return Promise.resolve();
    let i = P(t);
    return s.Bo.post({
        url: p.Rsh.SUBMIT_UNAUTHENTICATED_REPORT_MENU(i),
        body: j(e, t, n, r),
        rejectWithError: !1,
    });
}

function C(e, t) {
    return s.Bo.post({
        url: p.Rsh.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),
        body: {
            name: e,
            email: t,
        },
        rejectWithError: !1,
    });
}
async function N(e, t, n) {
    return (
        await s.Bo.post({
            url: p.Rsh.VERIFY_UNAUTHENTICATED_REPORT(e),
            body: {
                name: e,
                email: t,
                code: n,
            },
            rejectWithError: !1,
        })
    ).body;
}
async function w() {
    return await s.Bo.get({
        url: p.Rsh.DSA_CAPABILITIES,
        rejectWithError: !1,
    });
}
async function R(e) {
    return (
        await s.Bo.post({
            url: p.Rsh.SUBMIT_REPORT_SECOND_LOOK,
            body: {
                token: e,
            },
            rejectWithError: !1,
        })
    ).body;
}

function P(e) {
    let t = e.name;
    return a()(Object.values(f.tY).includes(t), "Invalid report type ".concat(e.name)), t;
}

function D(e) {
    let t = e.name;
    return a()(Object.values(f.t0).includes(t), "Invalid report type ".concat(e.name)), t;
}

function L(e) {
    let t = e.name;
    return a()(Object.values(f.Yw).includes(t), "Invalid report type ".concat(e.name)), t;
}

function x(e) {
    if ((a()(o.x.REPORT_TO_MOD.has(e.name), "Invalid report type ".concat(e.name)), e.name === f.Yw.MESSAGE))
        return p.Rsh.SUBMIT_MODERATOR_MESSAGE_REPORT(e.record.channel_id, e.record.id);
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
                        null != n && {
                            [n.name]: Object.keys(n.state),
                        },
                        Object.fromEntries(
                            Object.entries(null != r ? r : {}).map((e) => {
                                let [t, { value: n }] = e;
                                return [t, n];
                            }),
                        ),
                    );
                }, {}),
            };
        if (t.name === f.Yw.MESSAGE) {
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
                        null != n && {
                            [n.name]: Object.keys(n.state),
                        },
                        Object.fromEntries(
                            Object.entries(null != r ? r : {}).map((e) => {
                                let [t, { value: n }] = e;
                                return [t, n];
                            }),
                        ),
                    );
                }, {}),
            };
        if (t.name === f.t0.MESSAGE || t.name === f.t0.FIRST_DM) {
            let { channel_id: e, id: n } = t.record;
            return E(m({}, l, s), {
                name: t.name,
                channel_id: e,
                message_id: n,
            });
        }
        if (t.name === f.t0.GUILD || t.name === f.t0.GUILD_DISCOVERY) {
            let { id: e } = t.record;
            return E(m({}, l, s), {
                name: t.name,
                guild_id: e,
            });
        }
        if (t.name === f.t0.GUILD_DIRECTORY_ENTRY) {
            let { guildId: e, channelId: n } = t.record;
            return E(m({}, l, s), {
                name: t.name,
                channel_id: n,
                guild_id: e,
            });
        }
        if (t.name === f.t0.STAGE_CHANNEL) {
            let { id: e, guild_id: n, channel_id: r } = t.record;
            return E(m({}, l, s), {
                name: t.name,
                channel_id: r,
                guild_id: n,
                stage_instance_id: e,
            });
        }
        if (t.name === f.t0.GUILD_SCHEDULED_EVENT) {
            let { id: e, guild_id: n } = t.record;
            return E(m({}, l, s), {
                name: t.name,
                guild_id: n,
                guild_scheduled_event_id: e,
            });
        } else if (t.name === f.t0.USER)
            return E(m({}, l, s), {
                name: t.name,
                user_id: t.record.id,
                guild_id: t.contextualGuildId,
            });
        else if (t.name === f.tY.USER)
            return E(m({}, l, s), {
                name: t.name,
                user_id: t.record.id,
                guild_id: t.contextualGuildId,
                email_token: r,
            });
        else if (t.name === f.tY.MESSAGE)
            return E(m({}, l, s), {
                name: t.name,
                message_id: t.record.id,
                email_token: r,
            });
        else if (t.name === f.tY.GUILD)
            return E(m({}, l, s), {
                name: t.name,
                guild_id: t.record.id,
                email_token: r,
            });
        else if (t.name === f.t0.APPLICATION)
            return E(m({}, l, s), {
                name: t.name,
                application_id: t.record.id,
                guild_id: t.contextualGuildId,
                channel_id: t.contextualChannelId,
                entrypoint: t.entrypoint,
            });
        else if (t.name === f.t0.WIDGET)
            return E(m({}, l, s), {
                name: t.name,
                user_id: t.user_id,
                widget_id: t.widget_id,
            });
        else if (t.name === f.tY.MEDIA_TAKEDOWN)
            return E(m({}, l, s), {
                name: t.name,
                email_token: r,
            });
        return null;
    };

function k(e, t, n) {
    c.Ay.trackWithMetadata(p.HAw.IAR_MODAL_CLOSE, {
        report_type: e.name,
        report_id: n,
        navigation_history: t,
        message_id: e.name === f.t0.MESSAGE || e.name === f.t0.FIRST_DM ? e.record.id : void 0,
        stage_instance_id: e.name === f.t0.STAGE_CHANNEL ? e.record.id : void 0,
        guild_scheduled_event_id: e.name === f.t0.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
        guild_id:
            e.name === f.t0.GUILD || e.name === f.t0.GUILD_DISCOVERY
                ? e.record.id
                : e.name === f.t0.GUILD_DIRECTORY_ENTRY
                  ? e.record.guildId
                  : e.name === f.t0.GUILD_SCHEDULED_EVENT
                    ? e.record.guild_id
                    : void 0,
        channel_id:
            e.name === f.t0.GUILD_SCHEDULED_EVENT
                ? e.record.channel_id
                : e.name === f.t0.GUILD_DIRECTORY_ENTRY
                  ? e.record.channelId
                  : void 0,
        application_id: e.name === f.t0.APPLICATION ? e.record.id : void 0,
    });
}

function U(e, t) {
    l.h.dispatch({
        type: "IN_APP_REPORTS_SHOW_FEEDBACK",
        reportId: t,
        reportType: e.name,
    });
}

function G(e, t) {
    var n;
    let { freeTextElements: r, dropdownElements: i, multiSelectElement: a, contentUrlInputElement: o } = e,
        { textInput: s, multiSelect: l } = t;
    return (
        r.some((e) => {
            var t;
            return (
                !0 === e.should_submit_data &&
                ((null == s ? void 0 : s[e.name]) == null ||
                    (null == s ? void 0 : s[e.name].value) === "" ||
                    !(null == s || null == (t = s[e.name]) ? void 0 : t.isValid))
            );
        }) ||
        i.some(
            (e) =>
                !0 === e.should_submit_data &&
                ((null == s ? void 0 : s[e.name]) == null || (null == s ? void 0 : s[e.name].value) === ""),
        ) ||
        ((null == a ? void 0 : a.should_submit_data) === !0 && (null == l || 0 === Object.keys(l).length)) ||
        ((null == o ? void 0 : o.should_submit_data) === !0 &&
            ((null == s ? void 0 : s[o.name]) == null ||
                (null == s ? void 0 : s[o.name].value) === "" ||
                !(null == s || null == (n = s[o.name]) ? void 0 : n.isValid)))
    );
}
var F = (function (e) {
    return (
        (e.SETTINGS_UPSELLS_VIEWED = "SETTINGS_UPSELLS_VIEWED"),
        (e.SETTINGS_UPSELLS_APPLY_CLICKED = "SETTINGS_UPSELLS_APPLY_CLICKED"),
        (e.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED = "SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED"),
        e
    );
})({});

function V(e, t, n) {
    return r.useCallback(
        (r) => (i) => {
            c.Ay.trackWithMetadata(p.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
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

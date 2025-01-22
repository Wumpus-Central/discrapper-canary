r.d(n, {
    B0: function () {
        return m;
    },
    M4: function () {
        return i;
    },
    Nt: function () {
        return _;
    },
    RV: function () {
        return b;
    },
    VP: function () {
        return O;
    },
    X: function () {
        return R;
    },
    ZD: function () {
        return E;
    },
    fw: function () {
        return v;
    },
    hs: function () {
        return T;
    },
    i_: function () {
        return D;
    },
    k8: function () {
        return N;
    },
    ox: function () {
        return g;
    },
    qJ: function () {
        return I;
    },
    yL: function () {
        return y;
    }
});
var i,
    a = r(411104);
var o = r(724458);
var s = r(47120);
var l = r(192379),
    u = r(544891),
    c = r(570140),
    d = r(367907),
    f = r(432877),
    p = r(82554),
    h = r(981631);
async function _(e, n) {
    var r;
    let i = A(e),
        a = await u.tn.get({
            url: h.ANM.GET_REPORT_MENU(i),
            query: (null == n ? void 0 : n.variant) != null ? { variant: n.variant } : void 0,
            rejectWithError: !1
        });
    return null !== (r = a.body) && void 0 !== r ? r : JSON.parse(a.text);
}
async function m(e, n) {
    var r;
    let i = S(e),
        a = await u.tn.get({
            url: h.ANM.GET_UNAUTHENTICATED_REPORT_MENU(i),
            query: (null == n ? void 0 : n.variant) != null ? { variant: n.variant } : void 0,
            rejectWithError: !1
        });
    return null !== (r = a.body) && void 0 !== r ? r : JSON.parse(a.text);
}
async function g(e, n) {
    let r = A(e),
        i = await _(e, n);
    await u.tn.post({
        url: h.ANM.SUBMIT_REPORT_MENU(r),
        body: C(i, e, [
            {
                nodeRef: i.root_node_id,
                destination: ['', i.success_node_id]
            }
        ]),
        rejectWithError: !1
    });
}
function E(e, n, r) {
    return f.ZP.get('iar_skip_api_report_submit')
        ? Promise.resolve()
        : u.tn.post({
              url: h.ANM.SUBMIT_REPORT_MENU(A(n)),
              body: C(e, n, r),
              rejectWithError: !1
          });
}
function v(e, n, r, i) {
    if (f.ZP.get('iar_skip_api_report_submit')) return Promise.resolve();
    let a = S(n);
    return u.tn.post({
        url: h.ANM.SUBMIT_UNAUTHENTICATED_REPORT_MENU(a),
        body: C(e, n, r, i),
        rejectWithError: !1
    });
}
function y(e, n) {
    return u.tn.post({
        url: h.ANM.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),
        body: {
            name: e,
            email: n
        },
        rejectWithError: !1
    });
}
async function b(e, n, r) {
    return (
        await u.tn.post({
            url: h.ANM.VERIFY_UNAUTHENTICATED_REPORT(e),
            body: {
                name: e,
                email: n,
                code: r
            },
            rejectWithError: !1
        })
    ).body;
}
async function I() {
    return await u.tn.get({
        url: h.ANM.DSA_EXPERIMENT_UNAUTHENTICATED,
        rejectWithError: !1
    });
}
async function T(e) {
    return (
        await u.tn.post({
            url: h.ANM.SUBMIT_REPORT_SECOND_LOOK,
            body: { token: e },
            rejectWithError: !1
        })
    ).body;
}
function S(e) {
    let n = e.name;
    if (!Object.values(p.BM).includes(n)) throw Error('Invalid report type '.concat(e.name));
    return n;
}
function A(e) {
    let n = e.name;
    if (!Object.values(p.b).includes(n)) throw Error('Invalid report type '.concat(e.name));
    return n;
}
let C = (e, n, r, i) => {
    let { version: a, variant: o, language: s } = e,
        l = {
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
            version: a,
            variant: o,
            language: null != s ? s : 'en',
            breadcrumbs: r.map((e) => e.nodeRef),
            elements: r.reduce((e, n) => {
                let { multiSelect: r, textInput: i } = n;
                return {
                    ...e,
                    ...(null != r && { [r.name]: Object.keys(r.state) }),
                    ...Object.fromEntries(
                        Object.entries(null != i ? i : {}).map((e) => {
                            let [n, { value: r }] = e;
                            return [n, r];
                        })
                    )
                };
            }, {})
        };
    if (n.name === p.b.MESSAGE || n.name === p.b.FIRST_DM) {
        let { channel_id: e, id: r } = n.record;
        return {
            ...u,
            ...l,
            name: n.name,
            channel_id: e,
            message_id: r
        };
    }
    if (n.name === p.b.GUILD || n.name === p.b.GUILD_DISCOVERY) {
        let { id: e } = n.record;
        return {
            ...u,
            ...l,
            name: n.name,
            guild_id: e
        };
    }
    if (n.name === p.b.GUILD_DIRECTORY_ENTRY) {
        let { guildId: e, channelId: r } = n.record;
        return {
            ...u,
            ...l,
            name: n.name,
            channel_id: r,
            guild_id: e
        };
    } else if (n.name === p.b.STAGE_CHANNEL) {
        let { id: e, guild_id: r, channel_id: i } = n.record;
        return {
            ...u,
            ...l,
            name: n.name,
            channel_id: i,
            guild_id: r,
            stage_instance_id: e
        };
    } else if (n.name === p.b.GUILD_SCHEDULED_EVENT) {
        let { id: e, guild_id: r } = n.record;
        return {
            ...u,
            ...l,
            name: n.name,
            guild_id: r,
            guild_scheduled_event_id: e
        };
    } else if (n.name === p.b.USER)
        return {
            ...u,
            ...l,
            name: n.name,
            user_id: n.record.id,
            guild_id: n.contextualGuildId
        };
    else if (n.name === p.BM.USER)
        return {
            ...u,
            ...l,
            name: n.name,
            user_id: n.record.id,
            guild_id: n.contextualGuildId,
            email_token: i
        };
    else if (n.name === p.BM.MESSAGE)
        return {
            ...u,
            ...l,
            name: n.name,
            message_id: n.record.id,
            email_token: i
        };
    else if (n.name === p.b.APPLICATION)
        return {
            ...u,
            ...l,
            name: n.name,
            application_id: n.record.id,
            guild_id: n.contextualGuildId,
            channel_id: n.contextualChannelId,
            entrypoint: n.entrypoint
        };
    return null;
};
function N(e, n, r) {
    d.ZP.trackWithMetadata(h.rMx.IAR_MODAL_CLOSE, {
        report_type: e.name,
        report_id: r,
        navigation_history: n,
        message_id: e.name === p.b.MESSAGE || e.name === p.b.FIRST_DM ? e.record.id : void 0,
        stage_instance_id: e.name === p.b.STAGE_CHANNEL ? e.record.id : void 0,
        guild_scheduled_event_id: e.name === p.b.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
        guild_id: e.name === p.b.GUILD || e.name === p.b.GUILD_DISCOVERY ? e.record.id : e.name === p.b.GUILD_DIRECTORY_ENTRY ? e.record.guildId : e.name === p.b.GUILD_SCHEDULED_EVENT ? e.record.guild_id : void 0,
        channel_id: e.name === p.b.GUILD_SCHEDULED_EVENT ? e.record.channel_id : e.name === p.b.GUILD_DIRECTORY_ENTRY ? e.record.channelId : void 0,
        application_id: e.name === p.b.APPLICATION ? e.record.id : void 0
    });
}
function R(e, n) {
    c.Z.dispatch({
        type: 'IN_APP_REPORTS_SHOW_FEEDBACK',
        reportId: n,
        reportType: e.name
    });
}
function O(e, n, r, i, a) {
    return (
        e.some((e) => {
            var n;
            return !0 === e.should_submit_data && ((null == i ? void 0 : i[e.name]) == null || (null == i ? void 0 : i[e.name].value) === '' || !(null == i ? void 0 : null === (n = i[e.name]) || void 0 === n ? void 0 : n.isValid));
        }) ||
        n.some((e) => !0 === e.should_submit_data && ((null == i ? void 0 : i[e.name]) == null || (null == i ? void 0 : i[e.name].value) === '')) ||
        ((null == r ? void 0 : r.should_submit_data) === !0 && (null == a || 0 === Object.keys(a).length))
    );
}
function D(e, n, r) {
    return l.useCallback(
        (i) => (a) => {
            d.ZP.trackWithMetadata(h.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                report_id: r,
                report_type: e.name,
                report_subtype: n,
                settings_upsells_type: i,
                action: a
            });
        },
        [r, e, n]
    );
}
!(function (e) {
    (e.SETTINGS_UPSELLS_VIEWED = 'SETTINGS_UPSELLS_VIEWED'), (e.SETTINGS_UPSELLS_APPLY_CLICKED = 'SETTINGS_UPSELLS_APPLY_CLICKED'), (e.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED = 'SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED');
})(i || (i = {}));

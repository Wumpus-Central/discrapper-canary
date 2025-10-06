n.d(t, {
    Yw: () => m,
    ZP: () => y,
    fc: () => g,
    qd: () => E,
    ty: () => b,
}),
    n(388685);
var r = n(544891),
    i = n(524437),
    a = n(570140),
    o = n(335131),
    s = n(28926),
    l = n(48481),
    c = n(626135),
    u = n(473007),
    d = n(292352),
    f = n(981631);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
async function h(e) {
    let t = new Set();
    e.forEach((e) => {
        if (null != e.invoice_items && e.invoice_items.length > 0) {
            let n = e.invoice_items[0];
            null != n.sku_id && t.add(n.sku_id);
        }
    }),
        await Promise.all(Array.from(t).map((e) => (0, o.lW)(e)));
}
async function m(e, t) {
    await r.tn
        .patch({
            url: f.ANM.FAMILY_CENTER_LINKED_USERS,
            body: {
                linked_user_id: e,
                link_status: t,
            },
            rejectWithError: !1,
        })
        .then((e) => {
            let { body: t } = e;
            return (
                a.Z.dispatch({
                    type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS",
                    linkedUsers: t,
                }),
                t
            );
        });
}
async function g(e) {
    await r.tn
        .del({
            url: f.ANM.FAMILY_CENTER_LINKED_USERS,
            body: { linked_user_id: e },
            rejectWithError: !1,
        })
        .then((t) => {
            let { body: n } = t;
            return (
                a.Z.dispatch({
                    type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
                    linkedUsers: n,
                    deletedUserId: e,
                }),
                n
            );
        });
}
async function E() {
    await r.tn
        .get({
            url: f.ANM.FAMILY_CENTER_LINK_CODE,
            rejectWithError: !1,
        })
        .then((e) => {
            let { body: t } = e,
                n = t.link_code;
            return (
                a.Z.dispatch({
                    type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS",
                    linkCode: n,
                }),
                n
            );
        });
}
async function b() {
    await r.tn.post({
        url: f.ANM.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS,
        rejectWithError: !0,
    });
}
let y = {
    async initialPageLoad() {
        var e, t, n, i, o, s, l, c, u, d, _;
        a.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let { body: p } = await r.tn.get({
                url: f.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
                rejectWithError: !1,
            }),
            { teen_audit_log: m, linked_users: g, users: E } = p,
            b = {
                teenId: null == m ? void 0 : m.teen_user_id,
                rangeStartId: null == m ? void 0 : m.range_start_id,
                totals: null != (n = null == m ? void 0 : m.totals) ? n : {},
                actions: null != (i = null == m ? void 0 : m.actions) ? i : [],
                users: null != (o = null == m ? void 0 : m.users) ? o : [],
                guilds: null != (s = null == m ? void 0 : m.guilds) ? s : [],
                topUserActivities: null != (l = null == m ? void 0 : m.top_user_activities) ? l : [],
                topGuildActivities: null != (c = null == m ? void 0 : m.top_guild_activities) ? c : [],
                totalSpendAmount: null != (u = null == m || null == (e = m.total_spend) ? void 0 : e.amount) ? u : null,
                totalSpendCurrency:
                    null != (d = null == m || null == (t = m.total_spend) ? void 0 : t.currency) ? d : null,
                invoices: null != (_ = null == m ? void 0 : m.invoices) ? _ : [],
            };
        return (
            null != b.invoices && b.invoices.length > 0 && (await h(b.invoices)),
            a.Z.dispatch({
                type: "FAMILY_CENTER_INITIAL_LOAD",
                familyCenterTeenActivity: b,
                linkedUsers: g,
                users: E,
            }),
            b
        );
    },
    async fetchLinkedUsers() {
        let { body: e } = await r.tn.get({
                url: f.ANM.FAMILY_CENTER_LINKED_USERS,
                rejectWithError: !1,
            }),
            t = {
                linkedUsers: e.linked_users,
                users: e.users,
            };
        return a.Z.dispatch(p({ type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS" }, t)), t;
    },
    async requestLink(e, t) {
        let { body: n } = await r.tn.post({
                url: f.ANM.FAMILY_CENTER_LINKED_USERS,
                body: {
                    recipient_id: e,
                    code: t,
                },
                rejectWithError: !1,
            }),
            i = {
                linkedUsers: n.linked_users,
                users: n.users,
            };
        return a.Z.dispatch(p({ type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS" }, i)), i;
    },
    async fetchTeenActivity(e) {
        var t, n, i, o, s, l, c;
        a.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let u = f.ANM.FAMILY_CENTER_TEEN_ACTIVITY(e),
            { body: d } = await r.tn.get({
                url: u,
                rejectWithError: !1,
            }),
            _ = d.teen_audit_log,
            p = {
                teenId: _.teen_user_id,
                rangeStartId: _.range_start_id,
                totals: _.totals,
                actions: _.actions,
                users: _.users,
                guilds: _.guilds,
                topUserActivities: null != (i = _.top_user_activities) ? i : [],
                topGuildActivities: null != (o = _.top_guild_activities) ? o : [],
                totalSpendAmount: null != (s = null == _ || null == (t = _.total_spend) ? void 0 : t.amount) ? s : null,
                totalSpendCurrency:
                    null != (l = null == _ || null == (n = _.total_spend) ? void 0 : n.currency) ? l : null,
                invoices: null != (c = null == _ ? void 0 : _.invoices) ? c : [],
            };
        return (
            p.invoices && p.invoices.length > 0 && (await h(p.invoices)),
            a.Z.dispatch({
                type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
                familyCenterTeenActivity: p,
            }),
            p
        );
    },
    async fetchMoreTeenActivity(e, t, n, i) {
        var o, s, l, u, _, p, h;
        let { body: m } = await r.tn.get({
                url: f.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, n, i),
                rejectWithError: !1,
            }),
            { teen_audit_log: g } = m,
            E = {
                teenId: g.teen_user_id,
                rangeStartId: g.range_start_id,
                actions: g.actions,
                users: g.users,
                guilds: g.guilds,
                topUserActivities: null != (l = g.top_user_activities) ? l : [],
                topGuildActivities: null != (u = g.top_guild_activities) ? u : [],
                totalSpendAmount: null != (_ = null == g || null == (o = g.total_spend) ? void 0 : o.amount) ? _ : null,
                totalSpendCurrency:
                    null != (p = null == g || null == (s = g.total_spend) ? void 0 : s.currency) ? p : null,
                invoices: null != (h = null == g ? void 0 : g.invoices) ? h : [],
            };
        return (
            c.default.track(f.rMx.FAMILY_CENTER_ACTION, {
                action: d.YC.LoadMore,
                selected_teen_id: e,
                action_display_type: t,
            }),
            a.Z.dispatch({
                type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
                familyCenterTeenActivity: E,
            }),
            g
        );
    },
    selectTab(e) {
        a.Z.dispatch({
            type: "FAMILY_CENTER_HANDLE_TAB_SELECT",
            tab: e,
        });
    },
    fetchTeenSettingsAndConsents: (e) =>
        r.tn
            .get({
                url: f.ANM.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(e),
                rejectWithError: !1,
            })
            .then((t) => {
                let { body: n } = t,
                    { settings: r, consents: i } = n;
                a.Z.dispatch({
                    type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS",
                    userId: e,
                    settings: r,
                    consents: i,
                });
            }),
    async updateTeenSettings(e, t, n) {
        var o;
        let c = (0, s.H)(i.o8, t),
            d = null == (o = u.Z.getSettings(e)) ? void 0 : o[t],
            _ = (0, s.r)(d, n, c, i.o8, t);
        if (null == _) return;
        let { body: p } = await r.tn.patch({
                url: f.ANM.FAMILY_CENTER_TEEN_SETTINGS(e),
                body: { settings: (0, l.xU)(i.o8, _) },
                rejectWithError: !1,
            }),
            { settings: h } = p;
        a.Z.dispatch({
            type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS",
            userId: e,
            settings: h,
        });
    },
    updateTeenConsents: (e, t, n) =>
        r.tn
            .patch({
                url: f.ANM.FAMILY_CENTER_TEEN_CONSENTS(e),
                body: {
                    grant: t,
                    revoke: n,
                },
                rejectWithError: !1,
            })
            .then((t) => {
                let { body: n } = t;
                a.Z.dispatch({
                    type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS",
                    userId: e,
                    consents: n,
                });
            }),
};

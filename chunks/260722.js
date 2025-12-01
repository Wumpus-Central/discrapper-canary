n.d(t, {
    Yw: () => h,
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
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
async function m(e) {
    let t = new Set();
    e.forEach((e) => {
        if (null != e.invoice_items && e.invoice_items.length > 0) {
            let n = e.invoice_items[0];
            null != n.sku_id && t.add(n.sku_id);
        }
    }),
        await Promise.all(Array.from(t).map((e) => (0, o.lW)(e)));
}
async function h(e, t) {
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
        var e, t, n, i, o, s, l, c, u, d, p;
        a.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let { body: _ } = await r.tn.get({
                url: f.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
                rejectWithError: !1,
            }),
            { teen_audit_log: h, linked_users: g, users: E } = _,
            b = {
                teenId: null == h ? void 0 : h.teen_user_id,
                rangeStartId: null == h ? void 0 : h.range_start_id,
                totals: null != (n = null == h ? void 0 : h.totals) ? n : {},
                actions: null != (i = null == h ? void 0 : h.actions) ? i : [],
                users: null != (o = null == h ? void 0 : h.users) ? o : [],
                guilds: null != (s = null == h ? void 0 : h.guilds) ? s : [],
                topUserActivities: null != (l = null == h ? void 0 : h.top_user_activities) ? l : [],
                topGuildActivities: null != (c = null == h ? void 0 : h.top_guild_activities) ? c : [],
                totalSpendAmount: null != (u = null == h || null == (e = h.total_spend) ? void 0 : e.amount) ? u : null,
                totalSpendCurrency:
                    null != (d = null == h || null == (t = h.total_spend) ? void 0 : t.currency) ? d : null,
                invoices: null != (p = null == h ? void 0 : h.invoices) ? p : [],
            };
        return (
            null != b.invoices && b.invoices.length > 0 && (await m(b.invoices)),
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
        return a.Z.dispatch(_({ type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS" }, t)), t;
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
        return a.Z.dispatch(_({ type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS" }, i)), i;
    },
    async fetchTeenActivity(e) {
        var t, n, i, o, s, l, c;
        a.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let u = f.ANM.FAMILY_CENTER_TEEN_ACTIVITY(e),
            { body: d } = await r.tn.get({
                url: u,
                rejectWithError: !1,
            }),
            p = d.teen_audit_log,
            _ = {
                teenId: p.teen_user_id,
                rangeStartId: p.range_start_id,
                totals: p.totals,
                actions: p.actions,
                users: p.users,
                guilds: p.guilds,
                topUserActivities: null != (i = p.top_user_activities) ? i : [],
                topGuildActivities: null != (o = p.top_guild_activities) ? o : [],
                totalSpendAmount: null != (s = null == p || null == (t = p.total_spend) ? void 0 : t.amount) ? s : null,
                totalSpendCurrency:
                    null != (l = null == p || null == (n = p.total_spend) ? void 0 : n.currency) ? l : null,
                invoices: null != (c = null == p ? void 0 : p.invoices) ? c : [],
            };
        return (
            _.invoices && _.invoices.length > 0 && (await m(_.invoices)),
            a.Z.dispatch({
                type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
                familyCenterTeenActivity: _,
            }),
            _
        );
    },
    async fetchMoreTeenActivity(e, t, n, i) {
        var o, s, l, u, p, _, m;
        let { body: h } = await r.tn.get({
                url: f.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, n, i),
                rejectWithError: !1,
            }),
            { teen_audit_log: g } = h,
            E = {
                teenId: g.teen_user_id,
                rangeStartId: g.range_start_id,
                actions: g.actions,
                users: g.users,
                guilds: g.guilds,
                topUserActivities: null != (l = g.top_user_activities) ? l : [],
                topGuildActivities: null != (u = g.top_guild_activities) ? u : [],
                totalSpendAmount: null != (p = null == g || null == (o = g.total_spend) ? void 0 : o.amount) ? p : null,
                totalSpendCurrency:
                    null != (_ = null == g || null == (s = g.total_spend) ? void 0 : s.currency) ? _ : null,
                invoices: null != (m = null == g ? void 0 : g.invoices) ? m : [],
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
            p = (0, s.r)(d, n, c, i.o8, t);
        if (null == p) return;
        let { body: _ } = await r.tn.patch({
                url: f.ANM.FAMILY_CENTER_TEEN_SETTINGS(e),
                body: { settings: (0, l.xU)(i.o8, p) },
                rejectWithError: !1,
            }),
            { settings: m } = _;
        a.Z.dispatch({
            type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS",
            userId: e,
            settings: m,
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

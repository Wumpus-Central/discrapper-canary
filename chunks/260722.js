n.d(t, {
    Yw: () => p,
    ZP: () => E,
    fc: () => h,
    qd: () => m,
    ty: () => g,
});
var r = n(544891),
    i = n(524437),
    a = n(570140),
    o = n(28926),
    s = n(48481),
    l = n(626135),
    c = n(473007),
    u = n(292352),
    d = n(981631);
function f(e, t, n) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
async function p(e, t) {
    await r.tn
        .patch({
            url: d.ANM.FAMILY_CENTER_LINKED_USERS,
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
async function h(e) {
    await r.tn
        .del({
            url: d.ANM.FAMILY_CENTER_LINKED_USERS,
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
async function m() {
    await r.tn
        .get({
            url: d.ANM.FAMILY_CENTER_LINK_CODE,
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
async function g() {
    await r.tn.post({
        url: d.ANM.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS,
        rejectWithError: !0,
    });
}
let E = {
    async initialPageLoad() {
        var e, t, n, i, o, s, l, c, u, f;
        a.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let { body: _ } = await r.tn.get({
                url: d.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
                rejectWithError: !1,
            }),
            { teen_audit_log: p, linked_users: h, users: m } = _,
            g = {
                teenId: null == p ? void 0 : p.teen_user_id,
                rangeStartId: null == p ? void 0 : p.range_start_id,
                totals: null != (n = null == p ? void 0 : p.totals) ? n : {},
                actions: null != (i = null == p ? void 0 : p.actions) ? i : [],
                users: null != (o = null == p ? void 0 : p.users) ? o : [],
                guilds: null != (s = null == p ? void 0 : p.guilds) ? s : [],
                topUserActivities: null != (l = null == p ? void 0 : p.top_user_activities) ? l : [],
                topGuildActivities: null != (c = null == p ? void 0 : p.top_guild_activities) ? c : [],
                totalSpendAmount: null != (u = null == p || null == (e = p.total_spend) ? void 0 : e.amount) ? u : null,
                totalSpendCurrency:
                    null != (f = null == p || null == (t = p.total_spend) ? void 0 : t.currency) ? f : null,
            };
        return (
            a.Z.dispatch({
                type: "FAMILY_CENTER_INITIAL_LOAD",
                familyCenterTeenActivity: g,
                linkedUsers: h,
                users: m,
            }),
            g
        );
    },
    async fetchLinkedUsers() {
        let { body: e } = await r.tn.get({
                url: d.ANM.FAMILY_CENTER_LINKED_USERS,
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
                url: d.ANM.FAMILY_CENTER_LINKED_USERS,
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
        var t, n, i, o, s, l;
        a.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let c = d.ANM.FAMILY_CENTER_TEEN_ACTIVITY(e),
            { body: u } = await r.tn.get({
                url: c,
                rejectWithError: !1,
            }),
            f = u.teen_audit_log,
            _ = {
                teenId: f.teen_user_id,
                rangeStartId: f.range_start_id,
                totals: f.totals,
                actions: f.actions,
                users: f.users,
                guilds: f.guilds,
                topUserActivities: null != (i = f.top_user_activities) ? i : [],
                topGuildActivities: null != (o = f.top_guild_activities) ? o : [],
                totalSpendAmount: null != (s = null == f || null == (t = f.total_spend) ? void 0 : t.amount) ? s : null,
                totalSpendCurrency:
                    null != (l = null == f || null == (n = f.total_spend) ? void 0 : n.currency) ? l : null,
            };
        return (
            a.Z.dispatch({
                type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
                familyCenterTeenActivity: _,
            }),
            _
        );
    },
    async fetchMoreTeenActivity(e, t, n, i) {
        var o, s, c, f, _, p;
        let { body: h } = await r.tn.get({
                url: d.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, n, i),
                rejectWithError: !1,
            }),
            { teen_audit_log: m } = h,
            g = {
                teenId: m.teen_user_id,
                rangeStartId: m.range_start_id,
                actions: m.actions,
                users: m.users,
                guilds: m.guilds,
                topUserActivities: null != (c = m.top_user_activities) ? c : [],
                topGuildActivities: null != (f = m.top_guild_activities) ? f : [],
                totalSpendAmount: null != (_ = null == m || null == (o = m.total_spend) ? void 0 : o.amount) ? _ : null,
                totalSpendCurrency:
                    null != (p = null == m || null == (s = m.total_spend) ? void 0 : s.currency) ? p : null,
            };
        return (
            l.default.track(d.rMx.FAMILY_CENTER_ACTION, {
                action: u.YC.LoadMore,
                selected_teen_id: e,
                action_display_type: t,
            }),
            a.Z.dispatch({
                type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
                familyCenterTeenActivity: g,
            }),
            m
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
                url: d.ANM.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(e),
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
        var l;
        let u = (0, o.H)(i.o8, t),
            f = null == (l = c.Z.getSettings(e)) ? void 0 : l[t],
            _ = (0, o.r)(f, n, u, i.o8, t);
        if (null == _) return;
        let { body: p } = await r.tn.patch({
                url: d.ANM.FAMILY_CENTER_TEEN_SETTINGS(e),
                body: { settings: (0, s.xU)(i.o8, _) },
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
                url: d.ANM.FAMILY_CENTER_TEEN_CONSENTS(e),
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

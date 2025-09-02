n.d(t, {
    Yw: () => p,
    ZP: () => g,
    fc: () => h,
    qd: () => m,
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
let g = {
    async initialPageLoad() {
        var e, t, n, i;
        a.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let { body: o } = await r.tn.get({
                url: d.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
                rejectWithError: !1,
            }),
            { teen_audit_log: s, linked_users: l, users: c } = o,
            u = {
                teenId: null == s ? void 0 : s.teen_user_id,
                rangeStartId: null == s ? void 0 : s.range_start_id,
                totals: null != (e = null == s ? void 0 : s.totals) ? e : {},
                actions: null != (t = null == s ? void 0 : s.actions) ? t : [],
                users: null != (n = null == s ? void 0 : s.users) ? n : [],
                guilds: null != (i = null == s ? void 0 : s.guilds) ? i : [],
            };
        return (
            a.Z.dispatch({
                type: "FAMILY_CENTER_INITIAL_LOAD",
                familyCenterTeenActivity: u,
                linkedUsers: l,
                users: c,
            }),
            u
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
        a.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let t = d.ANM.FAMILY_CENTER_TEEN_ACTIVITY(e),
            { body: n } = await r.tn.get({
                url: t,
                rejectWithError: !1,
            }),
            i = n.teen_audit_log,
            o = {
                teenId: i.teen_user_id,
                rangeStartId: i.range_start_id,
                totals: i.totals,
                actions: i.actions,
                users: i.users,
                guilds: i.guilds,
            };
        return (
            a.Z.dispatch({
                type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
                familyCenterTeenActivity: o,
            }),
            o
        );
    },
    async fetchMoreTeenActivity(e, t, n, i) {
        let { body: o } = await r.tn.get({
                url: d.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, n, i),
                rejectWithError: !1,
            }),
            { teen_audit_log: s } = o,
            c = {
                teenId: s.teen_user_id,
                rangeStartId: s.range_start_id,
                actions: s.actions,
                users: s.users,
                guilds: s.guilds,
            };
        return (
            l.default.track(d.rMx.FAMILY_CENTER_ACTION, {
                action: u.YC.LoadMore,
                selected_teen_id: e,
                action_display_type: t,
            }),
            a.Z.dispatch({
                type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
                familyCenterTeenActivity: c,
            }),
            s
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
                let { body: n } = t,
                    { consents: r } = n;
                a.Z.dispatch({
                    type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS",
                    userId: e,
                    consents: r,
                });
            }),
};

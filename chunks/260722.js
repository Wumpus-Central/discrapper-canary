n.d(t, {
    Yw: () => f,
    ZP: () => h,
    fc: () => _,
    qd: () => p,
});
var r = n(544891),
    i = n(524437),
    o = n(570140),
    a = n(48481),
    s = n(626135),
    l = n(292352),
    c = n(981631);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
async function f(e, t) {
    await r.tn
        .patch({
            url: c.ANM.FAMILY_CENTER_LINKED_USERS,
            body: {
                linked_user_id: e,
                link_status: t,
            },
            rejectWithError: !1,
        })
        .then((e) => {
            let { body: t } = e;
            return (
                o.Z.dispatch({
                    type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS",
                    linkedUsers: t,
                }),
                t
            );
        });
}
async function _(e) {
    await r.tn
        .del({
            url: c.ANM.FAMILY_CENTER_LINKED_USERS,
            body: { linked_user_id: e },
            rejectWithError: !1,
        })
        .then((t) => {
            let { body: n } = t;
            return (
                o.Z.dispatch({
                    type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
                    linkedUsers: n,
                    deletedUserId: e,
                }),
                n
            );
        });
}
async function p() {
    await r.tn
        .get({
            url: c.ANM.FAMILY_CENTER_LINK_CODE,
            rejectWithError: !1,
        })
        .then((e) => {
            let { body: t } = e,
                n = t.link_code;
            return (
                o.Z.dispatch({
                    type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS",
                    linkCode: n,
                }),
                n
            );
        });
}
let h = {
    async initialPageLoad() {
        var e, t, n, i;
        o.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let { body: a } = await r.tn.get({
                url: c.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
                rejectWithError: !1,
            }),
            { teen_audit_log: s, linked_users: l, users: u } = a,
            d = {
                teenId: null == s ? void 0 : s.teen_user_id,
                rangeStartId: null == s ? void 0 : s.range_start_id,
                totals: null != (e = null == s ? void 0 : s.totals) ? e : {},
                actions: null != (t = null == s ? void 0 : s.actions) ? t : [],
                users: null != (n = null == s ? void 0 : s.users) ? n : [],
                guilds: null != (i = null == s ? void 0 : s.guilds) ? i : [],
            };
        return (
            o.Z.dispatch({
                type: "FAMILY_CENTER_INITIAL_LOAD",
                familyCenterTeenActivity: d,
                linkedUsers: l,
                users: u,
            }),
            d
        );
    },
    async fetchLinkedUsers() {
        let { body: e } = await r.tn.get({
                url: c.ANM.FAMILY_CENTER_LINKED_USERS,
                rejectWithError: !1,
            }),
            t = {
                linkedUsers: e.linked_users,
                users: e.users,
            };
        return o.Z.dispatch(d({ type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS" }, t)), t;
    },
    async requestLink(e, t) {
        let { body: n } = await r.tn.post({
                url: c.ANM.FAMILY_CENTER_LINKED_USERS,
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
        return o.Z.dispatch(d({ type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS" }, i)), i;
    },
    async fetchTeenActivity(e) {
        o.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let t = c.ANM.FAMILY_CENTER_TEEN_ACTIVITY(e),
            { body: n } = await r.tn.get({
                url: t,
                rejectWithError: !1,
            }),
            i = n.teen_audit_log,
            a = {
                teenId: i.teen_user_id,
                rangeStartId: i.range_start_id,
                totals: i.totals,
                actions: i.actions,
                users: i.users,
                guilds: i.guilds,
            };
        return (
            o.Z.dispatch({
                type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
                familyCenterTeenActivity: a,
            }),
            a
        );
    },
    async fetchMoreTeenActivity(e, t, n, i) {
        let { body: a } = await r.tn.get({
                url: c.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, n, i),
                rejectWithError: !1,
            }),
            { teen_audit_log: u } = a,
            d = {
                teenId: u.teen_user_id,
                rangeStartId: u.range_start_id,
                actions: u.actions,
                users: u.users,
                guilds: u.guilds,
            };
        return (
            s.default.track(c.rMx.FAMILY_CENTER_ACTION, {
                action: l.YC.LoadMore,
                selected_teen_id: e,
                action_display_type: t,
            }),
            o.Z.dispatch({
                type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
                familyCenterTeenActivity: d,
            }),
            u
        );
    },
    selectTab(e) {
        o.Z.dispatch({
            type: "FAMILY_CENTER_HANDLE_TAB_SELECT",
            tab: e,
        });
    },
    fetchTeenSettingsAndConsents: (e) =>
        r.tn
            .get({
                url: c.ANM.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(e),
                rejectWithError: !1,
            })
            .then((t) => {
                let { body: n } = t,
                    { settings: r, consents: i } = n;
                o.Z.dispatch({
                    type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS",
                    userId: e,
                    settings: r,
                    consents: i,
                });
            }),
    updateTeenSettings(e, t, n) {
        let s = i.o8.create();
        return (
            n(s[t]),
            r.tn
                .patch({
                    url: c.ANM.FAMILY_CENTER_TEEN_SETTINGS(e),
                    body: { settings: (0, a.xU)(i.o8, s) },
                    rejectWithError: !1,
                })
                .then((t) => {
                    let { body: n } = t,
                        { settings: r } = n;
                    o.Z.dispatch({
                        type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS",
                        userId: e,
                        settings: r,
                    });
                })
        );
    },
    updateTeenConsents: (e, t, n) =>
        r.tn
            .patch({
                url: c.ANM.FAMILY_CENTER_TEEN_CONSENTS(e),
                body: {
                    grant: t,
                    revoke: n,
                },
                rejectWithError: !1,
            })
            .then((t) => {
                let { body: n } = t,
                    { consents: r } = n;
                o.Z.dispatch({
                    type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS",
                    userId: e,
                    consents: r,
                });
            }),
};

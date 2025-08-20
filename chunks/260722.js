n.d(t, {
    Yw: () => u,
    ZP: () => _,
    fc: () => d,
    qd: () => f,
});
var r = n(544891),
    i = n(570140),
    a = n(626135),
    o = n(292352),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
async function u(e, t) {
    await r.tn
        .patch({
            url: s.ANM.FAMILY_CENTER_LINKED_USERS,
            body: {
                linked_user_id: e,
                link_status: t,
            },
            rejectWithError: !1,
        })
        .then((e) => {
            let { body: t } = e;
            return (
                i.Z.dispatch({
                    type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS",
                    linkedUsers: t,
                }),
                t
            );
        });
}
async function d(e) {
    await r.tn
        .del({
            url: s.ANM.FAMILY_CENTER_LINKED_USERS,
            body: { linked_user_id: e },
            rejectWithError: !1,
        })
        .then((t) => {
            let { body: n } = t;
            return (
                i.Z.dispatch({
                    type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
                    linkedUsers: n,
                    deletedUserId: e,
                }),
                n
            );
        });
}
async function f() {
    await r.tn
        .get({
            url: s.ANM.FAMILY_CENTER_LINK_CODE,
            rejectWithError: !1,
        })
        .then((e) => {
            let { body: t } = e,
                n = t.link_code;
            return (
                i.Z.dispatch({
                    type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS",
                    linkCode: n,
                }),
                n
            );
        });
}
let _ = {
    async initialPageLoad() {
        var e, t, n, a;
        i.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let { body: o } = await r.tn.get({
                url: s.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
                rejectWithError: !1,
            }),
            { teen_audit_log: l, linked_users: c, users: u } = o,
            d = {
                teenId: null == l ? void 0 : l.teen_user_id,
                rangeStartId: null == l ? void 0 : l.range_start_id,
                totals: null != (e = null == l ? void 0 : l.totals) ? e : {},
                actions: null != (t = null == l ? void 0 : l.actions) ? t : [],
                users: null != (n = null == l ? void 0 : l.users) ? n : [],
                guilds: null != (a = null == l ? void 0 : l.guilds) ? a : [],
            };
        return (
            i.Z.dispatch({
                type: "FAMILY_CENTER_INITIAL_LOAD",
                familyCenterTeenActivity: d,
                linkedUsers: c,
                users: u,
            }),
            d
        );
    },
    async fetchLinkedUsers() {
        let { body: e } = await r.tn.get({
                url: s.ANM.FAMILY_CENTER_LINKED_USERS,
                rejectWithError: !1,
            }),
            t = {
                linkedUsers: e.linked_users,
                users: e.users,
            };
        return i.Z.dispatch(c({ type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS" }, t)), t;
    },
    async requestLink(e, t) {
        let { body: n } = await r.tn.post({
                url: s.ANM.FAMILY_CENTER_LINKED_USERS,
                body: {
                    recipient_id: e,
                    code: t,
                },
                rejectWithError: !1,
            }),
            a = {
                linkedUsers: n.linked_users,
                users: n.users,
            };
        return i.Z.dispatch(c({ type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS" }, a)), a;
    },
    async fetchTeenActivity(e) {
        i.Z.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
        let t = s.ANM.FAMILY_CENTER_TEEN_ACTIVITY(e),
            { body: n } = await r.tn.get({
                url: t,
                rejectWithError: !1,
            }),
            a = n.teen_audit_log,
            o = {
                teenId: a.teen_user_id,
                rangeStartId: a.range_start_id,
                totals: a.totals,
                actions: a.actions,
                users: a.users,
                guilds: a.guilds,
            };
        return (
            i.Z.dispatch({
                type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
                familyCenterTeenActivity: o,
            }),
            o
        );
    },
    async fetchMoreTeenActivity(e, t, n, l) {
        let { body: c } = await r.tn.get({
                url: s.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(e, t, n, l),
                rejectWithError: !1,
            }),
            { teen_audit_log: u } = c,
            d = {
                teenId: u.teen_user_id,
                rangeStartId: u.range_start_id,
                actions: u.actions,
                users: u.users,
                guilds: u.guilds,
            };
        return (
            a.default.track(s.rMx.FAMILY_CENTER_ACTION, {
                action: o.YC.LoadMore,
                selected_teen_id: e,
                action_display_type: t,
            }),
            i.Z.dispatch({
                type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
                familyCenterTeenActivity: d,
            }),
            u
        );
    },
    selectTab(e) {
        i.Z.dispatch({
            type: "FAMILY_CENTER_HANDLE_TAB_SELECT",
            tab: e,
        });
    },
};

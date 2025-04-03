n.d(e, {
    Yw: () => d,
    ZP: () => c,
    fc: () => E,
    qd: () => u
});
var r = n(544891),
    i = n(570140),
    a = n(626135),
    o = n(292352),
    s = n(981631);
function l(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            r.forEach(function (e) {
                var r;
                (r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = r);
            });
    }
    return t;
}
async function d(t, e) {
    await r.tn
        .patch({
            url: s.ANM.FAMILY_CENTER_LINKED_USERS,
            body: {
                linked_user_id: t,
                link_status: e
            },
            rejectWithError: !1
        })
        .then((t) => {
            let { body: e } = t;
            return (
                i.Z.dispatch({
                    type: 'FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS',
                    linkedUsers: e
                }),
                e
            );
        });
}
async function E(t) {
    await r.tn
        .del({
            url: s.ANM.FAMILY_CENTER_LINKED_USERS,
            body: { linked_user_id: t },
            rejectWithError: !1
        })
        .then((e) => {
            let { body: n } = e;
            return (
                i.Z.dispatch({
                    type: 'FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS',
                    linkedUsers: n,
                    deletedUserId: t
                }),
                n
            );
        });
}
async function u() {
    await r.tn
        .get({
            url: s.ANM.FAMILY_CENTER_LINK_CODE,
            rejectWithError: !1
        })
        .then((t) => {
            let { body: e } = t,
                n = e.link_code;
            return (
                i.Z.dispatch({
                    type: 'FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS',
                    linkCode: n
                }),
                n
            );
        });
}
let c = {
    async initialPageLoad() {
        var t, e, n, a;
        i.Z.dispatch({ type: 'FAMILY_CENTER_FETCH_START' });
        let { body: o } = await r.tn.get({
                url: s.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
                rejectWithError: !1
            }),
            { teen_audit_log: l, linked_users: d, users: E } = o,
            u = {
                teenId: null == l ? void 0 : l.teen_user_id,
                rangeStartId: null == l ? void 0 : l.range_start_id,
                totals: null != (t = null == l ? void 0 : l.totals) ? t : {},
                actions: null != (e = null == l ? void 0 : l.actions) ? e : [],
                users: null != (n = null == l ? void 0 : l.users) ? n : [],
                guilds: null != (a = null == l ? void 0 : l.guilds) ? a : []
            };
        return (
            i.Z.dispatch({
                type: 'FAMILY_CENTER_INITIAL_LOAD',
                familyCenterTeenActivity: u,
                linkedUsers: d,
                users: E
            }),
            u
        );
    },
    async fetchLinkedUsers() {
        let { body: t } = await r.tn.get({
                url: s.ANM.FAMILY_CENTER_LINKED_USERS,
                rejectWithError: !1
            }),
            e = {
                linkedUsers: t.linked_users,
                users: t.users
            };
        return i.Z.dispatch(l({ type: 'FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS' }, e)), e;
    },
    async requestLink(t, e) {
        let { body: n } = await r.tn.post({
                url: s.ANM.FAMILY_CENTER_LINKED_USERS,
                body: {
                    recipient_id: t,
                    code: e
                },
                rejectWithError: !1
            }),
            a = {
                linkedUsers: n.linked_users,
                users: n.users
            };
        return i.Z.dispatch(l({ type: 'FAMILY_CENTER_REQUEST_LINK_SUCCESS' }, a)), a;
    },
    async fetchTeenActivity(t) {
        i.Z.dispatch({ type: 'FAMILY_CENTER_FETCH_START' });
        let e = s.ANM.FAMILY_CENTER_TEEN_ACTIVITY(t),
            { body: n } = await r.tn.get({
                url: e,
                rejectWithError: !1
            }),
            a = n.teen_audit_log,
            o = {
                teenId: a.teen_user_id,
                rangeStartId: a.range_start_id,
                totals: a.totals,
                actions: a.actions,
                users: a.users,
                guilds: a.guilds
            };
        return (
            i.Z.dispatch({
                type: 'FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS',
                familyCenterTeenActivity: o
            }),
            o
        );
    },
    async fetchMoreTeenActivity(t, e, n, l) {
        let { body: d } = await r.tn.get({
                url: s.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(t, e, n, l),
                rejectWithError: !1
            }),
            { teen_audit_log: E } = d,
            u = {
                teenId: E.teen_user_id,
                rangeStartId: E.range_start_id,
                actions: E.actions,
                users: E.users,
                guilds: E.guilds
            };
        return (
            a.default.track(s.rMx.FAMILY_CENTER_ACTION, {
                action: o.YC.LoadMore,
                selected_teen_id: t,
                action_display_type: e
            }),
            i.Z.dispatch({
                type: 'FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS',
                familyCenterTeenActivity: u
            }),
            E
        );
    },
    selectTab(t) {
        i.Z.dispatch({
            type: 'FAMILY_CENTER_HANDLE_TAB_SELECT',
            tab: t
        });
    }
};

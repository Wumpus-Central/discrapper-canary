n.d(e, {
    Yw: () => o,
    ZP: () => c,
    fc: () => u,
    qd: () => E
});
var i = n(544891),
    r = n(570140),
    l = n(626135),
    a = n(292352),
    d = n(981631);
function s(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            i.forEach(function (e) {
                var i;
                (i = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = i);
            });
    }
    return t;
}
async function o(t, e) {
    await i.tn
        .patch({
            url: d.ANM.FAMILY_CENTER_LINKED_USERS,
            body: {
                linked_user_id: t,
                link_status: e
            },
            rejectWithError: !1
        })
        .then((t) => {
            let { body: e } = t;
            return (
                r.Z.dispatch({
                    type: 'FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS',
                    linkedUsers: e
                }),
                e
            );
        });
}
async function u(t) {
    await i.tn
        .del({
            url: d.ANM.FAMILY_CENTER_LINKED_USERS,
            body: { linked_user_id: t },
            rejectWithError: !1
        })
        .then((e) => {
            let { body: n } = e;
            return (
                r.Z.dispatch({
                    type: 'FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS',
                    linkedUsers: n,
                    deletedUserId: t
                }),
                n
            );
        });
}
async function E() {
    await i.tn
        .get({
            url: d.ANM.FAMILY_CENTER_LINK_CODE,
            rejectWithError: !1
        })
        .then((t) => {
            let { body: e } = t,
                n = e.link_code;
            return (
                r.Z.dispatch({
                    type: 'FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS',
                    linkCode: n
                }),
                n
            );
        });
}
let c = {
    async initialPageLoad() {
        var t, e, n, l;
        r.Z.dispatch({ type: 'FAMILY_CENTER_FETCH_START' });
        let { body: a } = await i.tn.get({
                url: d.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
                rejectWithError: !1
            }),
            { teen_audit_log: s, linked_users: o, users: u } = a,
            E = {
                teenId: null == s ? void 0 : s.teen_user_id,
                rangeStartId: null == s ? void 0 : s.range_start_id,
                totals: null != (t = null == s ? void 0 : s.totals) ? t : {},
                actions: null != (e = null == s ? void 0 : s.actions) ? e : [],
                users: null != (n = null == s ? void 0 : s.users) ? n : [],
                guilds: null != (l = null == s ? void 0 : s.guilds) ? l : []
            };
        return (
            r.Z.dispatch({
                type: 'FAMILY_CENTER_INITIAL_LOAD',
                familyCenterTeenActivity: E,
                linkedUsers: o,
                users: u
            }),
            E
        );
    },
    async fetchLinkedUsers() {
        let { body: t } = await i.tn.get({
                url: d.ANM.FAMILY_CENTER_LINKED_USERS,
                rejectWithError: !1
            }),
            e = {
                linkedUsers: t.linked_users,
                users: t.users
            };
        return r.Z.dispatch(s({ type: 'FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS' }, e)), e;
    },
    async requestLink(t, e) {
        let { body: n } = await i.tn.post({
                url: d.ANM.FAMILY_CENTER_LINKED_USERS,
                body: {
                    recipient_id: t,
                    code: e
                },
                rejectWithError: !1
            }),
            l = {
                linkedUsers: n.linked_users,
                users: n.users
            };
        return r.Z.dispatch(s({ type: 'FAMILY_CENTER_REQUEST_LINK_SUCCESS' }, l)), l;
    },
    async fetchTeenActivity(t) {
        r.Z.dispatch({ type: 'FAMILY_CENTER_FETCH_START' });
        let e = d.ANM.FAMILY_CENTER_TEEN_ACTIVITY(t),
            { body: n } = await i.tn.get({
                url: e,
                rejectWithError: !1
            }),
            l = n.teen_audit_log,
            a = {
                teenId: l.teen_user_id,
                rangeStartId: l.range_start_id,
                totals: l.totals,
                actions: l.actions,
                users: l.users,
                guilds: l.guilds
            };
        return (
            r.Z.dispatch({
                type: 'FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS',
                familyCenterTeenActivity: a
            }),
            a
        );
    },
    async fetchMoreTeenActivity(t, e, n, s) {
        let { body: o } = await i.tn.get({
                url: d.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(t, e, n, s),
                rejectWithError: !1
            }),
            { teen_audit_log: u } = o,
            E = {
                teenId: u.teen_user_id,
                rangeStartId: u.range_start_id,
                actions: u.actions,
                users: u.users,
                guilds: u.guilds
            };
        return (
            l.default.track(d.rMx.FAMILY_CENTER_ACTION, {
                action: a.YC.LoadMore,
                selected_teen_id: t,
                action_display_type: e
            }),
            r.Z.dispatch({
                type: 'FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS',
                familyCenterTeenActivity: E
            }),
            u
        );
    },
    selectTab(t) {
        r.Z.dispatch({
            type: 'FAMILY_CENTER_HANDLE_TAB_SELECT',
            tab: t
        });
    }
};

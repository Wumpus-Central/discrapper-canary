n.d(e, {
    Yw: () => E,
    ZP: () => c,
    fc: () => u,
    qd: () => d
});
var r = n(544891),
    i = n(570140),
    o = n(626135),
    a = n(292352),
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
async function E(t, e) {
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
async function u(t) {
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
async function d() {
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
        var t, e, n, o;
        i.Z.dispatch({ type: 'FAMILY_CENTER_FETCH_START' });
        let { body: a } = await r.tn.get({
                url: s.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
                rejectWithError: !1
            }),
            { teen_audit_log: l, linked_users: E, users: u } = a,
            d = {
                teenId: null == l ? void 0 : l.teen_user_id,
                rangeStartId: null == l ? void 0 : l.range_start_id,
                totals: null !== (t = null == l ? void 0 : l.totals) && void 0 !== t ? t : {},
                actions: null !== (e = null == l ? void 0 : l.actions) && void 0 !== e ? e : [],
                users: null !== (n = null == l ? void 0 : l.users) && void 0 !== n ? n : [],
                guilds: null !== (o = null == l ? void 0 : l.guilds) && void 0 !== o ? o : []
            };
        return (
            i.Z.dispatch({
                type: 'FAMILY_CENTER_INITIAL_LOAD',
                familyCenterTeenActivity: d,
                linkedUsers: E,
                users: u
            }),
            d
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
            o = {
                linkedUsers: n.linked_users,
                users: n.users
            };
        return i.Z.dispatch(l({ type: 'FAMILY_CENTER_REQUEST_LINK_SUCCESS' }, o)), o;
    },
    async fetchTeenActivity(t) {
        i.Z.dispatch({ type: 'FAMILY_CENTER_FETCH_START' });
        let e = s.ANM.FAMILY_CENTER_TEEN_ACTIVITY(t),
            { body: n } = await r.tn.get({
                url: e,
                rejectWithError: !1
            }),
            o = n.teen_audit_log,
            a = {
                teenId: o.teen_user_id,
                rangeStartId: o.range_start_id,
                totals: o.totals,
                actions: o.actions,
                users: o.users,
                guilds: o.guilds
            };
        return (
            i.Z.dispatch({
                type: 'FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS',
                familyCenterTeenActivity: a
            }),
            a
        );
    },
    async fetchMoreTeenActivity(t, e, n, l) {
        let { body: E } = await r.tn.get({
                url: s.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(t, e, n, l),
                rejectWithError: !1
            }),
            { teen_audit_log: u } = E,
            d = {
                teenId: u.teen_user_id,
                rangeStartId: u.range_start_id,
                actions: u.actions,
                users: u.users,
                guilds: u.guilds
            };
        return (
            o.default.track(s.rMx.FAMILY_CENTER_ACTION, {
                action: a.YC.LoadMore,
                selected_teen_id: t,
                action_display_type: e
            }),
            i.Z.dispatch({
                type: 'FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS',
                familyCenterTeenActivity: d
            }),
            u
        );
    },
    selectTab(t) {
        i.Z.dispatch({
            type: 'FAMILY_CENTER_HANDLE_TAB_SELECT',
            tab: t
        });
    }
};

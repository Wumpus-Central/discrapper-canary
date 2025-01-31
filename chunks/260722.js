n.d(e, {
    Yw: () => o,
    ZP: () => _,
    fc: () => E,
    qd: () => d
});
var i = n(544891),
    r = n(570140),
    l = n(626135),
    a = n(292352),
    s = n(981631);
async function o(t, e) {
    await i.tn
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
                r.Z.dispatch({
                    type: 'FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS',
                    linkedUsers: e
                }),
                e
            );
        });
}
async function E(t) {
    await i.tn
        .del({
            url: s.ANM.FAMILY_CENTER_LINKED_USERS,
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
async function d() {
    await i.tn
        .get({
            url: s.ANM.FAMILY_CENTER_LINK_CODE,
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
let _ = {
    async initialPageLoad() {
        var t, e, n, l;
        r.Z.dispatch({ type: 'FAMILY_CENTER_FETCH_START' });
        let { body: a } = await i.tn.get({
                url: s.ANM.FAMILY_CENTER_TEEN_ACTIVITY_ME,
                rejectWithError: !1
            }),
            { teen_audit_log: o, linked_users: E, users: d } = a,
            _ = {
                teenId: null == o ? void 0 : o.teen_user_id,
                rangeStartId: null == o ? void 0 : o.range_start_id,
                totals: null !== (t = null == o ? void 0 : o.totals) && void 0 !== t ? t : {},
                actions: null !== (e = null == o ? void 0 : o.actions) && void 0 !== e ? e : [],
                users: null !== (n = null == o ? void 0 : o.users) && void 0 !== n ? n : [],
                guilds: null !== (l = null == o ? void 0 : o.guilds) && void 0 !== l ? l : []
            };
        return (
            r.Z.dispatch({
                type: 'FAMILY_CENTER_INITIAL_LOAD',
                familyCenterTeenActivity: _,
                linkedUsers: E,
                users: d
            }),
            _
        );
    },
    async fetchLinkedUsers() {
        let { body: t } = await i.tn.get({
                url: s.ANM.FAMILY_CENTER_LINKED_USERS,
                rejectWithError: !1
            }),
            e = {
                linkedUsers: t.linked_users,
                users: t.users
            };
        return (
            r.Z.dispatch({
                type: 'FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS',
                ...e
            }),
            e
        );
    },
    async requestLink(t, e) {
        let { body: n } = await i.tn.post({
                url: s.ANM.FAMILY_CENTER_LINKED_USERS,
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
        return (
            r.Z.dispatch({
                type: 'FAMILY_CENTER_REQUEST_LINK_SUCCESS',
                ...l
            }),
            l
        );
    },
    async fetchTeenActivity(t) {
        r.Z.dispatch({ type: 'FAMILY_CENTER_FETCH_START' });
        let e = s.ANM.FAMILY_CENTER_TEEN_ACTIVITY(t),
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
    async fetchMoreTeenActivity(t, e, n, o) {
        let { body: E } = await i.tn.get({
                url: s.ANM.FAMILY_CENTER_TEEN_ACTIVITY_MORE(t, e, n, o),
                rejectWithError: !1
            }),
            { teen_audit_log: d } = E,
            _ = {
                teenId: d.teen_user_id,
                rangeStartId: d.range_start_id,
                actions: d.actions,
                users: d.users,
                guilds: d.guilds
            };
        return (
            l.default.track(s.rMx.FAMILY_CENTER_ACTION, {
                action: a.YC.LoadMore,
                selected_teen_id: t,
                action_display_type: e
            }),
            r.Z.dispatch({
                type: 'FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS',
                familyCenterTeenActivity: _
            }),
            d
        );
    },
    selectTab(t) {
        r.Z.dispatch({
            type: 'FAMILY_CENTER_HANDLE_TAB_SELECT',
            tab: t
        });
    }
};

var i = r(411104);
var a = r(544891),
    o = r(433517),
    s = r(570140),
    l = r(663389),
    u = r(626135),
    c = r(768581),
    d = r(546796),
    f = r(37234),
    p = r(981631),
    h = r(792101),
    _ = r(388032);
function m(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        r = arguments.length > 2 ? arguments[2] : void 0;
    s.Z.dispatch({
        type: 'USER_SETTINGS_MODAL_INIT',
        section: e,
        subsection: n,
        ...r
    });
}
n.Z = {
    open() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { openWithoutBackstack: !1 };
        s.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_OPEN',
            section: e,
            subsection: n,
            ...r
        });
        (0, f.jN)(p.S9g.USER_SETTINGS);
    },
    init: m,
    close() {
        let e = l.Z.onClose;
        s.Z.dispatch({ type: 'USER_SETTINGS_MODAL_CLOSE' }), null != e && e();
    },
    setSection(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        s.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_SET_SECTION',
            section: e,
            subsection: n,
            ...r
        });
    },
    clearSubsection(e) {
        s.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_CLEAR_SUBSECTION',
            forSection: e
        });
    },
    clearScrollPosition(e) {
        s.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION',
            forSection: e
        });
    },
    updateAccount(e) {
        s.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_UPDATE_ACCOUNT',
            settings: e
        });
    },
    submitComplete() {
        s.Z.dispatch({ type: 'USER_SETTINGS_MODAL_SUBMIT_COMPLETE' });
    },
    reset() {
        s.Z.dispatch({ type: 'USER_SETTINGS_MODAL_RESET' });
    },
    saveAccountChanges(e, n) {
        s.Z.dispatch({ type: 'USER_SETTINGS_MODAL_SUBMIT' });
        let { username: r, email: i, emailToken: l, password: f, avatar: m, newPassword: g, discriminator: E } = e,
            { close: v } = n;
        return (0, d.Z)(
            (e) => {
                let n = {
                        username: r,
                        email: i,
                        email_token: l,
                        password: f,
                        avatar: m,
                        new_password: g,
                        ...e,
                        discriminator: null != E && '' !== E ? E : void 0
                    },
                    s = o.K.get(p.JkL),
                    u = (0, h.xJ)();
                null != u && null != s && ((n.push_provider = u), (n.push_token = s));
                let c = o.K.get(p.scU);
                return (
                    null != h.mv && null != c && ((n.push_voip_provider = h.mv), (n.push_voip_token = c)),
                    a.tn.patch({
                        url: p.ANM.ME,
                        oldFormErrors: !0,
                        body: n,
                        rejectWithError: !1
                    })
                );
            },
            {
                checkEnabled: !1,
                modalProps: { title: _.intl.string(_.t.clQc1d) },
                hooks: {
                    onEarlyClose: () =>
                        s.Z.dispatch({
                            type: 'USER_SETTINGS_MODAL_SUBMIT_FAILURE',
                            errors: {}
                        })
                }
            }
        ).then(
            (e) => {
                let n = e.body,
                    r = n.token;
                return (
                    u.default.track(p.rMx.USER_AVATAR_UPDATED, { animated: (0, c.xR)(n.avatar) }),
                    delete n.token,
                    s.Z.dispatch({
                        type: 'UPDATE_TOKEN',
                        token: r,
                        userId: n.id
                    }),
                    s.Z.dispatch({
                        type: 'CURRENT_USER_UPDATE',
                        user: n
                    }),
                    null != g &&
                        s.Z.dispatch({
                            type: 'USER_PASSWORD_UPDATE',
                            user: n,
                            newPassword: g
                        }),
                    null != f &&
                        null != g &&
                        s.Z.dispatch({
                            type: 'PASSWORD_UPDATED',
                            userId: n.id
                        }),
                    v ? this.close() : this.submitComplete(),
                    e
                );
            },
            (e) => (
                s.Z.dispatch({
                    type: 'USER_SETTINGS_MODAL_SUBMIT_FAILURE',
                    errors: e.body
                }),
                e
            )
        );
    }
};

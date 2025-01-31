n.d(t, { Z: () => p }), n(411104);
var i = n(544891),
    r = n(433517),
    a = n(570140),
    s = n(663389),
    o = n(626135),
    l = n(768581),
    u = n(546796),
    c = n(37234),
    d = n(981631),
    f = n(792101),
    _ = n(388032);
let p = {
    open() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { openWithoutBackstack: !1 };
        a.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_OPEN',
            section: e,
            subsection: t,
            ...n
        }),
            (0, c.jN)(d.S9g.USER_SETTINGS);
    },
    init: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 ? arguments[2] : void 0;
        a.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_INIT',
            section: e,
            subsection: t,
            ...n
        });
    },
    close() {
        let e = s.Z.onClose;
        a.Z.dispatch({ type: 'USER_SETTINGS_MODAL_CLOSE' }), null != e && e();
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        a.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_SET_SECTION',
            section: e,
            subsection: t,
            ...n
        });
    },
    clearSubsection(e) {
        a.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_CLEAR_SUBSECTION',
            forSection: e
        });
    },
    clearScrollPosition(e) {
        a.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION',
            forSection: e
        });
    },
    updateAccount(e) {
        a.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_UPDATE_ACCOUNT',
            settings: e
        });
    },
    submitComplete() {
        a.Z.dispatch({ type: 'USER_SETTINGS_MODAL_SUBMIT_COMPLETE' });
    },
    reset() {
        a.Z.dispatch({ type: 'USER_SETTINGS_MODAL_RESET' });
    },
    saveAccountChanges(e, t) {
        a.Z.dispatch({ type: 'USER_SETTINGS_MODAL_SUBMIT' });
        let { username: n, email: s, emailToken: c, password: p, avatar: h, newPassword: m, discriminator: g } = e,
            { close: E } = t;
        return (0, u.Z)(
            (e) => {
                let t = {
                        username: n,
                        email: s,
                        email_token: c,
                        password: p,
                        avatar: h,
                        new_password: m,
                        ...e,
                        discriminator: null != g && '' !== g ? g : void 0
                    },
                    a = r.K.get(d.JkL),
                    o = (0, f.xJ)();
                null != o && null != a && ((t.push_provider = o), (t.push_token = a));
                let l = r.K.get(d.scU);
                return (
                    null != f.mv && null != l && ((t.push_voip_provider = f.mv), (t.push_voip_token = l)),
                    i.tn.patch({
                        url: d.ANM.ME,
                        oldFormErrors: !0,
                        body: t,
                        rejectWithError: !1
                    })
                );
            },
            {
                checkEnabled: !1,
                modalProps: { title: _.intl.string(_.t.clQc1d) },
                hooks: {
                    onEarlyClose: () =>
                        a.Z.dispatch({
                            type: 'USER_SETTINGS_MODAL_SUBMIT_FAILURE',
                            errors: {}
                        })
                }
            }
        ).then(
            (e) => {
                let t = e.body,
                    n = t.token;
                return (
                    o.default.track(d.rMx.USER_AVATAR_UPDATED, { animated: (0, l.xR)(t.avatar) }),
                    delete t.token,
                    a.Z.dispatch({
                        type: 'UPDATE_TOKEN',
                        token: n,
                        userId: t.id
                    }),
                    a.Z.dispatch({
                        type: 'CURRENT_USER_UPDATE',
                        user: t
                    }),
                    null != m &&
                        a.Z.dispatch({
                            type: 'USER_PASSWORD_UPDATE',
                            user: t,
                            newPassword: m
                        }),
                    null != p &&
                        null != m &&
                        a.Z.dispatch({
                            type: 'PASSWORD_UPDATED',
                            userId: t.id
                        }),
                    E ? this.close() : this.submitComplete(),
                    e
                );
            },
            (e) => (
                a.Z.dispatch({
                    type: 'USER_SETTINGS_MODAL_SUBMIT_FAILURE',
                    errors: e.body
                }),
                e
            )
        );
    }
};

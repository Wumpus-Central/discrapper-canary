n.d(t, { Z: () => E }), n(411104);
var r = n(544891),
    i = n(433517),
    o = n(570140),
    a = n(663389),
    s = n(626135),
    l = n(768581),
    c = n(546796),
    u = n(37234),
    d = n(981631),
    f = n(792101),
    p = n(388032);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = {
    open() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { openWithoutBackstack: !1 };
        o.Z.dispatch(
            h(
                {
                    type: 'USER_SETTINGS_MODAL_OPEN',
                    section: e,
                    subsection: t
                },
                n
            )
        ),
            (0, u.jN)(d.S9g.USER_SETTINGS);
    },
    init: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 ? arguments[2] : void 0;
        o.Z.dispatch(
            h(
                {
                    type: 'USER_SETTINGS_MODAL_INIT',
                    section: e,
                    subsection: t
                },
                n
            )
        );
    },
    close() {
        let e = a.Z.onClose;
        o.Z.dispatch({ type: 'USER_SETTINGS_MODAL_CLOSE' }), null != e && e();
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        o.Z.dispatch(
            h(
                {
                    type: 'USER_SETTINGS_MODAL_SET_SECTION',
                    section: e,
                    subsection: t
                },
                n
            )
        );
    },
    clearSubsection(e) {
        o.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_CLEAR_SUBSECTION',
            forSection: e
        });
    },
    clearScrollPosition(e) {
        o.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION',
            forSection: e
        });
    },
    updateAccount(e) {
        o.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_UPDATE_ACCOUNT',
            settings: e
        });
    },
    submitComplete() {
        o.Z.dispatch({ type: 'USER_SETTINGS_MODAL_SUBMIT_COMPLETE' });
    },
    reset() {
        o.Z.dispatch({ type: 'USER_SETTINGS_MODAL_RESET' });
    },
    saveAccountChanges(e, t) {
        o.Z.dispatch({ type: 'USER_SETTINGS_MODAL_SUBMIT' });
        let { username: n, email: a, emailToken: u, password: _, avatar: m, newPassword: E, discriminator: v } = e,
            { close: b } = t;
        return (0, c.Z)(
            (e) => {
                let t = g(
                        h(
                            {
                                username: n,
                                email: a,
                                email_token: u,
                                password: _,
                                avatar: m,
                                new_password: E
                            },
                            e
                        ),
                        { discriminator: null != v && '' !== v ? v : void 0 }
                    ),
                    o = i.K.get(d.JkL),
                    s = (0, f.xJ)();
                null != s && null != o && ((t.push_provider = s), (t.push_token = o));
                let l = i.K.get(d.scU);
                return (
                    null != f.mv && null != l && ((t.push_voip_provider = f.mv), (t.push_voip_token = l)),
                    r.tn.patch({
                        url: d.ANM.ME,
                        oldFormErrors: !0,
                        body: t,
                        rejectWithError: !1
                    })
                );
            },
            {
                checkEnabled: !1,
                modalProps: { title: p.NW.string(p.t.clQc1d) },
                hooks: {
                    onEarlyClose: () =>
                        o.Z.dispatch({
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
                    s.default.track(d.rMx.USER_AVATAR_UPDATED, {
                        animated: (0, l.xR)(t.avatar),
                        is_guild_profile: !1
                    }),
                    delete t.token,
                    o.Z.dispatch({
                        type: 'UPDATE_TOKEN',
                        token: n,
                        userId: t.id
                    }),
                    o.Z.dispatch({
                        type: 'CURRENT_USER_UPDATE',
                        user: t
                    }),
                    null != E &&
                        o.Z.dispatch({
                            type: 'USER_PASSWORD_UPDATE',
                            user: t,
                            newPassword: E
                        }),
                    null != _ &&
                        null != E &&
                        o.Z.dispatch({
                            type: 'PASSWORD_UPDATED',
                            userId: t.id
                        }),
                    b ? this.close() : this.submitComplete(),
                    e
                );
            },
            (e) => (
                o.Z.dispatch({
                    type: 'USER_SETTINGS_MODAL_SUBMIT_FAILURE',
                    errors: e.body
                }),
                e
            )
        );
    }
};

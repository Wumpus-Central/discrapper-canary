n.d(t, { Z: () => g }), n(411104);
var r = n(544891),
    i = n(433517),
    o = n(570140),
    a = n(330055),
    s = n(663389),
    l = n(546796),
    c = n(37234),
    u = n(981631),
    d = n(792101),
    f = n(388032);
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
function p(e) {
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
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = {
    open() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { openWithoutBackstack: !1 };
        o.Z.dispatch(
            p(
                {
                    type: 'USER_SETTINGS_MODAL_OPEN',
                    section: e,
                    subsection: t
                },
                n
            )
        ),
            (0, c.jN)(u.S9g.USER_SETTINGS);
    },
    init: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 ? arguments[2] : void 0;
        o.Z.dispatch(
            p(
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
        let e = s.Z.onClose;
        o.Z.dispatch({ type: 'USER_SETTINGS_MODAL_CLOSE' }), null != e && e();
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        o.Z.dispatch(
            p(
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
        let { username: n, email: s, emailToken: c, password: _, avatar: h, newPassword: g, discriminator: E } = e,
            { close: b } = t;
        return (0, l.Z)(
            (e) => {
                let t = m(
                        p(
                            {
                                username: n,
                                email: s,
                                email_token: c,
                                password: _,
                                avatar: h,
                                new_password: g
                            },
                            e
                        ),
                        { discriminator: null != E && '' !== E ? E : void 0 }
                    ),
                    o = i.K.get(u.JkL),
                    a = (0, d.xJ)();
                null != a && null != o && ((t.push_provider = a), (t.push_token = o));
                let l = i.K.get(u.scU);
                return (
                    null != d.mv && null != l && ((t.push_voip_provider = d.mv), (t.push_voip_token = l)),
                    r.tn.patch({
                        url: u.ANM.ME,
                        oldFormErrors: !0,
                        body: t,
                        rejectWithError: !1
                    })
                );
            },
            {
                checkEnabled: !1,
                modalProps: { title: f.NW.string(f.t.clQc1d) },
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
                    void 0 !== h && (0, a.Z)({ avatarHash: t.avatar }),
                    null != g &&
                        o.Z.dispatch({
                            type: 'USER_PASSWORD_UPDATE',
                            user: t,
                            newPassword: g
                        }),
                    null != _ &&
                        null != g &&
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

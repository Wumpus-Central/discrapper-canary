n.d(t, { Z: () => m }), n(415506);
var r = n(544891),
    i = n(433517),
    a = n(570140),
    o = n(330055),
    s = n(546796),
    l = n(37234),
    c = n(981631),
    u = n(792101),
    d = n(388032);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = {
    open() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { openWithoutBackstack: !1 };
        a.Z.dispatch(
            _(
                {
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                },
                n,
            ),
        ),
            (0, l.jN)(c.S9g.USER_SETTINGS);
    },
    close() {
        a.Z.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        a.Z.dispatch(
            _(
                {
                    type: "USER_SETTINGS_MODAL_SET_SECTION",
                    section: e,
                    subsection: t,
                },
                n,
            ),
        );
    },
    clearSubsection(e) {
        a.Z.dispatch({
            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
            forSection: e,
        });
    },
    clearScrollPosition(e) {
        a.Z.dispatch({
            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
            forSection: e,
        });
    },
    updateAccount(e) {
        a.Z.dispatch({
            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
            settings: e,
        });
    },
    submitComplete() {
        a.Z.dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE" });
    },
    reset() {
        a.Z.dispatch({ type: "USER_SETTINGS_MODAL_RESET" });
    },
    saveAccountChanges(e, t) {
        a.Z.dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT" });
        let { username: n, email: l, emailToken: f, password: p, avatar: m, newPassword: g, discriminator: E } = e,
            { close: b } = t;
        return (0, s.Z)(
            (e) => {
                let t = h(
                        _(
                            {
                                username: n,
                                email: l,
                                email_token: f,
                                password: p,
                                avatar: m,
                                new_password: g,
                            },
                            e,
                        ),
                        { discriminator: null != E && "" !== E ? E : void 0 },
                    ),
                    a = i.K.get(c.JkL),
                    o = (0, u.xJ)();
                null != o && null != a && ((t.push_provider = o), (t.push_token = a));
                let s = i.K.get(c.scU);
                return (
                    null != u.mv && null != s && ((t.push_voip_provider = u.mv), (t.push_voip_token = s)),
                    r.tn.patch({
                        url: c.ANM.ME,
                        oldFormErrors: !0,
                        body: t,
                        rejectWithError: !1,
                    })
                );
            },
            {
                checkEnabled: !1,
                modalProps: { title: d.intl.string(d.t.clQc1d) },
                hooks: {
                    onEarlyClose: () =>
                        a.Z.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: {},
                        }),
                },
            },
        ).then(
            (e) => {
                let t = e.body,
                    n = t.token;
                return (
                    delete t.token,
                    a.Z.dispatch({
                        type: "UPDATE_TOKEN",
                        token: n,
                        userId: t.id,
                    }),
                    a.Z.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: t,
                    }),
                    void 0 !== m && (0, o.Z)({ avatarHash: t.avatar }),
                    null != g &&
                        a.Z.dispatch({
                            type: "USER_PASSWORD_UPDATE",
                            user: t,
                            newPassword: g,
                        }),
                    null != p &&
                        null != g &&
                        a.Z.dispatch({
                            type: "PASSWORD_UPDATED",
                            userId: t.id,
                        }),
                    b ? this.close() : this.submitComplete(),
                    e
                );
            },
            (e) => (
                a.Z.dispatch({
                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                    errors: e.body,
                }),
                e
            ),
        );
    },
};

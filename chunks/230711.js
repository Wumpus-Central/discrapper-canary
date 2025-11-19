n.d(t, { Z: () => f }), n(415506);
var r = n(544891),
    i = n(433517),
    a = n(570140),
    o = n(330055),
    s = n(37234),
    l = n(981631),
    c = n(792101);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = {
    open() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { openWithoutBackstack: !1 };
        a.Z.dispatch(
            d(
                {
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                },
                n,
            ),
        ),
            (0, s.jN)(l.S9g.USER_SETTINGS);
    },
    close() {
        a.Z.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        a.Z.dispatch(
            d(
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
        let { username: n, email: s, emailToken: u, password: d, avatar: f, newPassword: _, discriminator: p } = e,
            { close: h } = t,
            m = {
                username: n,
                email: s,
                email_token: u,
                password: d,
                avatar: f,
                new_password: _,
                discriminator: null != p && "" !== p ? p : void 0,
            },
            g = i.K.get(l.JkL),
            E = (0, c.xJ)();
        null != E && null != g && ((m.push_provider = E), (m.push_token = g));
        let b = i.K.get(l.scU);
        return (
            null != c.mv && null != b && ((m.push_voip_provider = c.mv), (m.push_voip_token = b)),
            r.tn
                .patch({
                    url: l.ANM.ME,
                    oldFormErrors: !0,
                    body: m,
                    rejectWithError: !1,
                })
                .then(
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
                            void 0 !== f && (0, o.Z)({ avatarHash: t.avatar }),
                            null != _ &&
                                a.Z.dispatch({
                                    type: "USER_PASSWORD_UPDATE",
                                    user: t,
                                    newPassword: _,
                                }),
                            null != d &&
                                null != _ &&
                                a.Z.dispatch({
                                    type: "PASSWORD_UPDATED",
                                    userId: t.id,
                                }),
                            h ? this.close() : this.submitComplete(),
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
                )
        );
    },
};

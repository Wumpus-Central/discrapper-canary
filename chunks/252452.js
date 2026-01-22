n.d(t, { A: () => f }), n(65821);
var r = n(562465),
    i = n(506774),
    a = n(73153),
    s = n(624826),
    o = n(398590),
    l = n(652215),
    c = n(516780);
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
        a.h.dispatch(
            d(
                {
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                },
                n,
            ),
        ),
            (0, o.id)(l.zgK.USER_SETTINGS);
    },
    close() {
        a.h.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        a.h.dispatch(
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
        a.h.dispatch({
            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
            forSection: e,
        });
    },
    clearScrollPosition(e) {
        a.h.dispatch({
            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
            forSection: e,
        });
    },
    updateAccount(e) {
        a.h.dispatch({
            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
            settings: e,
        });
    },
    submitComplete() {
        a.h.dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE" });
    },
    reset() {
        a.h.dispatch({ type: "USER_SETTINGS_MODAL_RESET" });
    },
    saveAccountChanges(e, t) {
        a.h.dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT" });
        let { username: n, email: o, emailToken: u, password: d, avatar: f, newPassword: p, discriminator: _ } = e,
            { close: h } = t,
            m = {
                username: n,
                email: o,
                email_token: u,
                password: d,
                avatar: f,
                new_password: p,
                discriminator: null != _ && "" !== _ ? _ : void 0,
            },
            g = i.w.get(l.Xlh),
            E = (0, c.oH)();
        null != E && null != g && ((m.push_provider = E), (m.push_token = g));
        let b = i.w.get(l.Ahp);
        return (
            null != c.vz && null != b && ((m.push_voip_provider = c.vz), (m.push_voip_token = b)),
            r.Bo.patch({
                url: l.Rsh.ME,
                oldFormErrors: !0,
                body: m,
                rejectWithError: !1,
            }).then(
                (e) => {
                    let t = e.body,
                        n = t.token;
                    return (
                        delete t.token,
                        a.h.dispatch({
                            type: "UPDATE_TOKEN",
                            token: n,
                            userId: t.id,
                        }),
                        a.h.dispatch({
                            type: "CURRENT_USER_UPDATE",
                            user: t,
                        }),
                        void 0 !== f && (0, s.t)({ avatarHash: t.avatar }),
                        null != p &&
                            a.h.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: p,
                            }),
                        null != d &&
                            null != p &&
                            a.h.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id,
                            }),
                        h ? this.close() : this.submitComplete(),
                        e
                    );
                },
                (e) => (
                    a.h.dispatch({
                        type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                        errors: e.body,
                    }),
                    e
                ),
            )
        );
    },
};

n.d(t, {
    A: () => d,
});
var r = n(562465),
    i = n(506774),
    a = n(73153),
    o = n(624826),
    s = n(652215),
    l = n(516780);

function c(e, t, n) {
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

function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = {
    close() {
        a.h.dispatch({
            type: "USER_SETTINGS_MODAL_CLOSE",
        });
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        a.h.dispatch(
            u(
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
        a.h.dispatch({
            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE",
        });
    },
    reset() {
        a.h.dispatch({
            type: "USER_SETTINGS_MODAL_RESET",
        });
    },
    saveAccountChanges(e, t) {
        a.h.dispatch({
            type: "USER_SETTINGS_MODAL_SUBMIT",
        });
        let { username: n, email: c, emailToken: u, password: d, avatar: f, newPassword: p, discriminator: _ } = e,
            { close: h } = t,
            m = {
                username: n,
                email: c,
                email_token: u,
                password: d,
                avatar: f,
                new_password: p,
                discriminator: null != _ && "" !== _ ? _ : void 0,
            },
            g = i.w.get(s.Xlh),
            E = (0, l.oH)();
        null != E && null != g && ((m.push_provider = E), (m.push_token = g));
        let y = i.w.get(s.Ahp);
        return (
            null != l.vz && null != y && ((m.push_voip_provider = l.vz), (m.push_voip_token = y)),
            r.Bo.patch({
                url: s.Rsh.ME,
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
                        void 0 !== f &&
                            (0, o.t)({
                                avatarHash: t.avatar,
                            }),
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

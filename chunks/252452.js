"use strict";
n.d(t, { A: () => u });
var r = n(562465),
    i = n(506774),
    a = n(73153),
    s = n(624826),
    o = n(652215),
    l = n(516780);
let u = {
    close() {
        a.h.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        a.h.dispatch({ type: "USER_SETTINGS_MODAL_SET_SECTION", section: e, subsection: t, ...n });
    },
    clearSubsection(e) {
        a.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION", forSection: e });
    },
    clearScrollPosition(e) {
        a.h.dispatch({ type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION", forSection: e });
    },
    updateAccount(e) {
        a.h.dispatch({ type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT", settings: e });
    },
    submitComplete() {
        a.h.dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE" });
    },
    reset() {
        a.h.dispatch({ type: "USER_SETTINGS_MODAL_RESET" });
    },
    saveAccountChanges(e, t) {
        a.h.dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT" });
        let { username: n, email: u, emailToken: c, password: d, avatar: _, newPassword: f, discriminator: p } = e,
            { close: h } = t,
            m = {
                username: n,
                email: u,
                email_token: c,
                password: d,
                avatar: _,
                new_password: f,
                discriminator: null != p && "" !== p ? p : void 0,
            },
            g = i.w.get(o.Xlh),
            E = (0, l.oH)();
        null != E && null != g && ((m.push_provider = E), (m.push_token = g));
        let A = i.w.get(o.Ahp);
        return (
            null != l.vz && null != A && ((m.push_voip_provider = l.vz), (m.push_voip_token = A)),
            r.Bo.patch({ url: o.Rsh.ME, oldFormErrors: !0, body: m, rejectWithError: !1 }).then(
                (e) => {
                    let t = e.body,
                        n = t.token;
                    return (
                        delete t.token,
                        a.h.dispatch({ type: "UPDATE_TOKEN", token: n, userId: t.id }),
                        a.h.dispatch({ type: "CURRENT_USER_UPDATE", user: t }),
                        void 0 !== _ && (0, s.t)({ avatarHash: t.avatar }),
                        null != f && a.h.dispatch({ type: "USER_PASSWORD_UPDATE", user: t, newPassword: f }),
                        null != d && null != f && a.h.dispatch({ type: "PASSWORD_UPDATED", userId: t.id }),
                        h ? this.close() : this.submitComplete(),
                        e
                    );
                },
                (e) => (a.h.dispatch({ type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE", errors: e.body }), e),
            )
        );
    },
};

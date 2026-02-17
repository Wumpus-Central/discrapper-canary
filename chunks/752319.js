var i = n(311907),
    r = n(73153),
    l = n(287809),
    a = n(652215);
let s = a.XlH.CLOSED,
    o = {},
    d = null;
function c() {
    let e = l.default.getCurrentUser();
    if (null == e) return u();
    (s = a.XlH.OPEN),
        (o = {}),
        (d = {
            ...{
                userId: e.id,
                username: e.username,
                discriminator: e.discriminator,
                email: e.email,
                avatar: e.avatar,
                password: "",
                newPassword: null,
                claimed: e.isClaimed(),
            },
        });
}
function u() {
    (s = a.XlH.CLOSED), (d = null), (o = {});
}
function A() {
    (s = a.XlH.OPEN), (o = {});
}
class h extends i.Ay.Store {
    static displayName = "UserSettingsAccountStore";
    initialize() {
        this.waitFor(l.default);
    }
    getErrors() {
        return o;
    }
    getSubmitting() {
        return s === a.XlH.SUBMITTING;
    }
    getSettings() {
        return d;
    }
}
new h(r.h, {
    USER_SETTINGS_MODAL_OPEN: function () {
        c();
    },
    USER_SETTINGS_MODAL_INIT: c,
    USER_SETTINGS_MODAL_CLOSE: u,
    LOGOUT: u,
    USER_SETTINGS_MODAL_SUBMIT: function () {
        s = a.XlH.SUBMITTING;
    },
    USER_SETTINGS_MODAL_SUBMIT_FAILURE: function (e) {
        if (s !== a.XlH.SUBMITTING) return !1;
        (s = a.XlH.OPEN), (o = e.errors ?? {});
    },
    USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function (e) {
        let { settings: t } = e;
        null == d && (d = {}), (d = { ...d, ...t });
    },
    USER_SETTINGS_MODAL_SUBMIT_COMPLETE: A,
    USER_SETTINGS_MODAL_RESET: function () {
        let e = l.default.getCurrentUser();
        A(),
            null != e &&
                (d = {
                    ...{
                        userId: e.id,
                        username: e.username,
                        discriminator: e.discriminator,
                        email: e.email,
                        avatar: e.avatar,
                        password: "",
                        newPassword: null,
                        claimed: e.isClaimed(),
                    },
                });
    },
});

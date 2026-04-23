var i = n(311907),
    r = n(73153),
    a = n(287809),
    l = n(652215);
let s = l.XlH.CLOSED,
    o = {},
    d = null;
function u() {
    let e = a.default.getCurrentUser();
    if (null == e) return c();
    (s = l.XlH.OPEN),
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
function c() {
    (s = l.XlH.CLOSED), (d = null), (o = {});
}
function A() {
    (s = l.XlH.OPEN), (o = {});
}
class h extends i.Ay.Store {
    static displayName = "UserSettingsAccountStore";
    initialize() {
        this.waitFor(a.default);
    }
    getErrors() {
        return o;
    }
    getSubmitting() {
        return s === l.XlH.SUBMITTING;
    }
    getSettings() {
        return d;
    }
}
new h(r.h, {
    USER_SETTINGS_MODAL_OPEN: function () {
        u();
    },
    USER_SETTINGS_MODAL_INIT: u,
    USER_SETTINGS_MODAL_CLOSE: c,
    LOGOUT: c,
    USER_SETTINGS_MODAL_SUBMIT: function () {
        s = l.XlH.SUBMITTING;
    },
    USER_SETTINGS_MODAL_SUBMIT_FAILURE: function (e) {
        if (s !== l.XlH.SUBMITTING) return !1;
        (s = l.XlH.OPEN), (o = e.errors ?? {});
    },
    USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function (e) {
        let { settings: t } = e;
        null == d && (d = {}), (d = { ...d, ...t });
    },
    USER_SETTINGS_MODAL_SUBMIT_COMPLETE: A,
    USER_SETTINGS_MODAL_RESET: function () {
        let e = a.default.getCurrentUser();
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

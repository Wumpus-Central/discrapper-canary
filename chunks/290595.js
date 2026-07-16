"use strict";
n.d(t, { Q: () => d, U: () => c });
var i = n(636537),
    r = n(228366),
    a = n(652215),
    s = n(375708);
function l(e) {
    return null != e && null != e.body && r.h.dispatch({ type: "UPDATE_CONSENTS", consents: { ...e.body } }), e.body;
}
function o(e) {
    throw Error(
        e.status >= 500 && e.status <= 599
            ? s.intl.string(s.t.cvJdtg)
            : null != e && null != e.body && null != e.body.message
              ? e.body.message
              : s.intl.string(s.t.cvJdtg),
    );
}
function d() {
    return i.Bo.get({ url: a.Rsh.SETTINGS_CONSENT, oldFormErrors: !0, rejectWithError: (0, i.fT)() }).then(l, (e) =>
        Promise.reject(Error(e.body.message)),
    );
}
function c(e, t) {
    return i.Bo.post({
        url: a.Rsh.SETTINGS_CONSENT,
        body: { grant: e, revoke: t },
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
    }).then(l, o);
}

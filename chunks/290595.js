"use strict";
n.d(t, { Q: () => u, U: () => c });
var i = n(636537),
    r = n(228366),
    s = n(652215),
    a = n(375708);
function o(e) {
    return null != e && null != e.body && r.h.dispatch({ type: "UPDATE_CONSENTS", consents: { ...e.body } }), e.body;
}
function l(e) {
    throw Error(
        e.status >= 500 && e.status <= 599
            ? a.intl.string(a.t.cvJdtg)
            : null != e && null != e.body && null != e.body.message
              ? e.body.message
              : a.intl.string(a.t.cvJdtg),
    );
}
function u() {
    return i.Bo.get({ url: s.Rsh.SETTINGS_CONSENT, oldFormErrors: !0, rejectWithError: !1 }).then(o, (e) =>
        Promise.reject(Error(e.body.message)),
    );
}
function c(e, t) {
    return i.Bo.post({
        url: s.Rsh.SETTINGS_CONSENT,
        body: { grant: e, revoke: t },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(o, l);
}

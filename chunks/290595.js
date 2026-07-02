n.d(t, { Q: () => d, U: () => c });
var i = n(636537),
    l = n(228366),
    s = n(652215),
    r = n(375708);
function o(e) {
    return null != e && null != e.body && l.h.dispatch({ type: "UPDATE_CONSENTS", consents: { ...e.body } }), e.body;
}
function a(e) {
    throw Error(
        e.status >= 500 && e.status <= 599
            ? r.intl.string(r.t.cvJdtg)
            : null != e && null != e.body && null != e.body.message
              ? e.body.message
              : r.intl.string(r.t.cvJdtg),
    );
}
function d() {
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
    }).then(o, a);
}

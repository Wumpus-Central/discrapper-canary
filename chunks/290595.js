n.d(t, { Q: () => c, U: () => d });
var i = n(562465),
    s = n(73153),
    r = n(652215),
    a = n(985018);
function l(e) {
    return null != e && null != e.body && s.h.dispatch({ type: "UPDATE_CONSENTS", consents: { ...e.body } }), e.body;
}
function o(e) {
    throw Error(
        e.status >= 500 && e.status <= 599
            ? a.intl.string(a.t.cvJdtg)
            : null != e && null != e.body && null != e.body.message
              ? e.body.message
              : a.intl.string(a.t.cvJdtg),
    );
}
function c() {
    return i.Bo.get({ url: r.Rsh.SETTINGS_CONSENT, oldFormErrors: !0, rejectWithError: !1 }).then(l, (e) =>
        Promise.reject(Error(e.body.message)),
    );
}
function d(e, t) {
    return i.Bo.post({
        url: r.Rsh.SETTINGS_CONSENT,
        body: { grant: e, revoke: t },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(l, o);
}

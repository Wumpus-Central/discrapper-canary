n.d(t, { Q: () => d, U: () => u });
var i = n(636537),
    l = n(228366),
    s = n(652215),
    a = n(985018);
function r(e) {
    return null != e && null != e.body && l.h.dispatch({ type: "UPDATE_CONSENTS", consents: { ...e.body } }), e.body;
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
function d() {
    return i.Bo.get({ url: s.Rsh.SETTINGS_CONSENT, oldFormErrors: !0, rejectWithError: !1 }).then(r, (e) =>
        Promise.reject(Error(e.body.message)),
    );
}
function u(e, t) {
    return i.Bo.post({
        url: s.Rsh.SETTINGS_CONSENT,
        body: { grant: e, revoke: t },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(r, o);
}

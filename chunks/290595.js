var s = o(620632),
    n = o(73153),
    e = o(652215),
    u = o(792996);
function d(r) {
    return (null != r && null != r.body && n.h.dispatch({ type: "UPDATE_CONSENTS", consents: { ...r.body } }), r.body);
}
function i(r) {
    throw Error(
        r.status >= 500 && r.status <= 599
            ? u.intl.string(u.t.cvJdtg)
            : null != r && null != r.body && null != r.body.message
              ? r.body.message
              : u.intl.string(u.t.cvJdtg),
    );
}
o.d(
    t,
    {},
    {
        Q: function () {
            return s.Bo.get({ url: e.Rsh.SETTINGS_CONSENT, oldFormErrors: !0, rejectWithError: (0, s.fT)() }).then(
                d,
                (r) => Promise.reject(Error(r.body.message)),
            );
        },
        U: function (r, t) {
            return s.Bo.post({
                url: e.Rsh.SETTINGS_CONSENT,
                body: { grant: r, revoke: t },
                oldFormErrors: !0,
                rejectWithError: (0, s.fT)(),
            }).then(d, i);
        },
    },
);

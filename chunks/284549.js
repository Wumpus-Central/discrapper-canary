i.r(e), i(47120);
var n = i(200651),
    s = i(192379),
    l = i(442837),
    a = i(481060),
    o = i(893776),
    r = i(809206),
    h = i(704903),
    d = i(155433),
    u = i(23434),
    m = i(25990),
    c = i(594174),
    g = i(1964),
    p = i(981631),
    f = i(388032);
e.default = (t) => {
    let { transitionState: e, onClose: i } = t,
        C = (0, l.e7)([m.Z], () => m.Z.getErrors()),
        v = (0, l.e7)([m.Z], () => m.Z.getFormState()),
        y = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        I = (0, l.e7)([u.Z], () => u.Z.getAction()),
        R = !g.Z.isEmailReverification(I),
        [b, _] = s.useState(!0),
        x = v === p.QZA.SUBMITTING;
    function E(t) {
        var e, i;
        return null !== (i = null == C ? void 0 : null === (e = C[t]) || void 0 === e ? void 0 : e[0]) && void 0 !== i ? i : '';
    }
    let P = E('email'),
        j = E('password');
    return (0, n.jsx)(h.Z, {
        transitionState: e,
        email: null == y ? void 0 : y.email,
        emailError: P,
        passwordError: j,
        submitting: x,
        canResend: b && !x && (null == y ? void 0 : y.email) != null && 0 === P.length && 0 === j.length,
        canChange: R,
        onChangeEmailClick: function () {
            _(!1);
        },
        onVerify: function (t, e) {
            (0, r.Mn)({
                email: t,
                password: e
            }).then((t) => {
                if (!(null == t ? void 0 : t.ok)) {
                    var e;
                    (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? (0, d.P)() : 0 === j.length && 0 === P.length && (0, a.showToast)((0, a.createToast)(f.intl.string(f.t.R0RpRU), a.ToastType.FAILURE));
                }
            }),
                _(!0);
        },
        onResend: function () {
            o.Z.verifyResend();
        },
        onClose: i
    });
};

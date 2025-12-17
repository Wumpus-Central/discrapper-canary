n.d(e, { default: () => f }), n(388685);
var s = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    r = n(893776),
    o = n(809206),
    h = n(704903),
    d = n(155433),
    u = n(23434),
    p = n(25990),
    g = n(594174),
    c = n(1964),
    m = n(981631),
    C = n(388032);
let f = (t) => {
    let { transitionState: e, onClose: n } = t,
        f = (0, l.e7)([p.Z], () => p.Z.getErrors()),
        y = (0, l.e7)([p.Z], () => p.Z.getFormState()),
        v = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        E = (0, l.e7)([u.Z], () => u.Z.getAction()),
        b = !c.Z.isEmailReverification(E),
        [k, w] = i.useState(!0),
        P = y === m.QZA.SUBMITTING;
    function R(t) {
        var e, n;
        return null != (n = null == f || null == (e = f[t]) ? void 0 : e[0]) ? n : "";
    }
    let Z = R("email"),
        S = R("password");
    return (0, s.jsx)(h.Z, {
        transitionState: e,
        email: null == v ? void 0 : v.email,
        emailError: Z,
        passwordError: S,
        submitting: P,
        canResend: k && !P && (null == v ? void 0 : v.email) != null && 0 === Z.length && 0 === S.length,
        canChange: b,
        onChangeEmailClick: function () {
            w(!1);
        },
        onVerify: function (t, e) {
            (0, o.Mn)({
                email: t,
                password: e,
            }).then((t) => {
                if (!(null == t ? void 0 : t.ok)) {
                    var e;
                    (null == t || null == (e = t.body) ? void 0 : e.username) != null
                        ? (0, d.P)()
                        : 0 === S.length &&
                          0 === Z.length &&
                          (0, a.showToast)((0, a.createToast)(C.intl.string(C.t.R0RpRX), a.ToastType.FAILURE));
                }
            }),
                w(!0);
        },
        onResend: function () {
            r.Z.verifyResend();
        },
        onClose: n,
    });
};

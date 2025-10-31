i.d(e, { default: () => C }), i(388685);
var n = i(951288),
    s = i(647438),
    a = i(442837),
    l = i(481060),
    r = i(893776),
    o = i(809206),
    h = i(704903),
    d = i(155433),
    u = i(23434),
    c = i(25990),
    m = i(594174),
    p = i(1964),
    g = i(981631),
    f = i(388032);
let C = (t) => {
    let { transitionState: e, onClose: i } = t,
        C = (0, a.e7)([c.Z], () => c.Z.getErrors()),
        v = (0, a.e7)([c.Z], () => c.Z.getFormState()),
        y = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
        _ = (0, a.e7)([u.Z], () => u.Z.getAction()),
        x = !p.Z.isEmailReverification(_),
        [b, j] = s.useState(!0),
        R = v === g.QZA.SUBMITTING;
    function E(t) {
        var e, i;
        return null != (i = null == C || null == (e = C[t]) ? void 0 : e[0]) ? i : "";
    }
    let I = E("email"),
        P = E("password");
    return (0, n.jsx)(h.Z, {
        transitionState: e,
        email: null == y ? void 0 : y.email,
        emailError: I,
        passwordError: P,
        submitting: R,
        canResend: b && !R && (null == y ? void 0 : y.email) != null && 0 === I.length && 0 === P.length,
        canChange: x,
        onChangeEmailClick: function () {
            j(!1);
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
                        : 0 === P.length &&
                          0 === I.length &&
                          (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.R0RpRX), l.ToastType.FAILURE));
                }
            }),
                j(!0);
        },
        onResend: function () {
            r.Z.verifyResend();
        },
        onClose: i,
    });
};

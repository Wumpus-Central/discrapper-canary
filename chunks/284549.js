i.d(t, { default: () => C }), i(388685);
var n = i(951288),
    s = i(647438),
    a = i(442837),
    l = i(481060),
    r = i(893776),
    o = i(809206),
    h = i(704903),
    d = i(155433),
    c = i(23434),
    u = i(25990),
    m = i(594174),
    g = i(1964),
    p = i(981631),
    f = i(388032);
let C = (e) => {
    let { transitionState: t, onClose: i } = e,
        C = (0, a.e7)([u.Z], () => u.Z.getErrors()),
        v = (0, a.e7)([u.Z], () => u.Z.getFormState()),
        y = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
        x = (0, a.e7)([c.Z], () => c.Z.getAction()),
        R = !g.Z.isEmailReverification(x),
        [_, b] = s.useState(!0),
        E = v === p.QZA.SUBMITTING;
    function I(e) {
        var t, i;
        return null != (i = null == C || null == (t = C[e]) ? void 0 : t[0]) ? i : "";
    }
    let P = I("email"),
        j = I("password");
    return (0, n.jsx)(h.Z, {
        transitionState: t,
        email: null == y ? void 0 : y.email,
        emailError: P,
        passwordError: j,
        submitting: E,
        canResend: _ && !E && (null == y ? void 0 : y.email) != null && 0 === P.length && 0 === j.length,
        canChange: R,
        onChangeEmailClick: function () {
            b(!1);
        },
        onVerify: function (e, t) {
            (0, o.Mn)({
                email: e,
                password: t,
            }).then((e) => {
                if (!(null == e ? void 0 : e.ok)) {
                    var t;
                    (null == e || null == (t = e.body) ? void 0 : t.username) != null
                        ? (0, d.P)()
                        : 0 === j.length &&
                          0 === P.length &&
                          (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.R0RpRU), l.ToastType.FAILURE));
                }
            }),
                b(!0);
        },
        onResend: function () {
            r.Z.verifyResend();
        },
        onClose: i,
    });
};

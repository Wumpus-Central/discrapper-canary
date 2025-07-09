(i.d(t, { default: () => C }), i(388685));
var n = i(255367),
    s = i(73800),
    a = i(442837),
    l = i(481060),
    o = i(893776),
    r = i(809206),
    h = i(704903),
    d = i(155433),
    c = i(23434),
    m = i(25990),
    u = i(594174),
    g = i(1964),
    p = i(981631),
    f = i(388032);
let C = (e) => {
    let { transitionState: t, onClose: i } = e,
        C = (0, a.e7)([m.Z], () => m.Z.getErrors()),
        v = (0, a.e7)([m.Z], () => m.Z.getFormState()),
        x = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        y = (0, a.e7)([c.Z], () => c.Z.getAction()),
        R = !g.Z.isEmailReverification(y),
        [_, E] = s.useState(!0),
        I = v === p.QZA.SUBMITTING;
    function b(e) {
        var t, i;
        return null != (i = null == C || null == (t = C[e]) ? void 0 : t[0]) ? i : '';
    }
    let P = b('email'),
        j = b('password');
    return (0, n.jsx)(h.Z, {
        transitionState: t,
        email: null == x ? void 0 : x.email,
        emailError: P,
        passwordError: j,
        submitting: I,
        canResend: _ && !I && (null == x ? void 0 : x.email) != null && 0 === P.length && 0 === j.length,
        canChange: R,
        onChangeEmailClick: function () {
            E(!1);
        },
        onVerify: function (e, t) {
            ((0, r.Mn)({
                email: e,
                password: t
            }).then((e) => {
                if (!(null == e ? void 0 : e.ok)) {
                    var t;
                    (null == e || null == (t = e.body) ? void 0 : t.username) != null ? (0, d.P)() : 0 === j.length && 0 === P.length && (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.R0RpRU), l.ToastType.FAILURE));
                }
            }),
                E(!0));
        },
        onResend: function () {
            o.Z.verifyResend();
        },
        onClose: i
    });
};

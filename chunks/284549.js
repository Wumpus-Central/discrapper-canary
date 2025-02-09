i.d(e, { default: () => C }), i(47120);
var n = i(200651),
    s = i(192379),
    a = i(442837),
    l = i(481060),
    o = i(893776),
    r = i(809206),
    h = i(704903),
    d = i(155433),
    c = i(23434),
    u = i(25990),
    m = i(594174),
    g = i(1964),
    p = i(981631),
    f = i(388032);
let C = (t) => {
    let { transitionState: e, onClose: i } = t,
        C = (0, a.e7)([u.Z], () => u.Z.getErrors()),
        v = (0, a.e7)([u.Z], () => u.Z.getFormState()),
        x = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
        y = (0, a.e7)([c.Z], () => c.Z.getAction()),
        R = !g.Z.isEmailReverification(y),
        [_, k] = s.useState(!0),
        I = v === p.QZA.SUBMITTING;
    function E(t) {
        var e, i;
        return null !== (i = null == C ? void 0 : null === (e = C[t]) || void 0 === e ? void 0 : e[0]) && void 0 !== i ? i : '';
    }
    let P = E('email'),
        b = E('password');
    return (0, n.jsx)(h.Z, {
        transitionState: e,
        email: null == x ? void 0 : x.email,
        emailError: P,
        passwordError: b,
        submitting: I,
        canResend: _ && !I && (null == x ? void 0 : x.email) != null && 0 === P.length && 0 === b.length,
        canChange: R,
        onChangeEmailClick: function () {
            k(!1);
        },
        onVerify: function (t, e) {
            (0, r.Mn)({
                email: t,
                password: e
            }).then((t) => {
                if (!(null == t ? void 0 : t.ok)) {
                    var e;
                    (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? (0, d.P)() : 0 === b.length && 0 === P.length && (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.R0RpRU), l.ToastType.FAILURE));
                }
            }),
                k(!0);
        },
        onResend: function () {
            o.Z.verifyResend();
        },
        onClose: i
    });
};

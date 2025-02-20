i.d(t, { default: () => C }), i(47120);
var s = i(200651),
    n = i(192379),
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
        N = !g.Z.isEmailReverification(y),
        [R, _] = n.useState(!0),
        k = v === p.QZA.SUBMITTING;
    function I(e) {
        var t, i;
        return null !== (i = null == C ? void 0 : null === (t = C[e]) || void 0 === t ? void 0 : t[0]) && void 0 !== i ? i : '';
    }
    let E = I('email'),
        b = I('password');
    return (0, s.jsx)(h.Z, {
        transitionState: t,
        email: null == x ? void 0 : x.email,
        emailError: E,
        passwordError: b,
        submitting: k,
        canResend: R && !k && (null == x ? void 0 : x.email) != null && 0 === E.length && 0 === b.length,
        canChange: N,
        onChangeEmailClick: function () {
            _(!1);
        },
        onVerify: function (e, t) {
            (0, r.Mn)({
                email: e,
                password: t
            }).then((e) => {
                if (!(null == e ? void 0 : e.ok)) {
                    var t;
                    (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null ? (0, d.P)() : 0 === b.length && 0 === E.length && (0, l.showToast)((0, l.createToast)(f.NW.string(f.t.R0RpRU), l.ToastType.FAILURE));
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

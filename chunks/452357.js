n.d(t, { A: () => g, S: () => A });
var i = n(627968),
    s = n(64700),
    r = n(284009),
    a = n.n(r),
    l = n(158954),
    o = n(311907),
    c = n(139033),
    d = n(397927),
    u = n(830215),
    _ = n(287809),
    m = n(985018);
function A(e) {
    return u.A.verifyResend()
        .then(() => {
            (0, c.A)({ title: m.intl.string(m.t.LykQYk), subtitle: m.intl.format(m.t.azKEPy, { email: e.email }) });
        })
        .catch((e) => {
            let { body: t } = e,
                n = m.intl.string(m.t.XcrQN5);
            null != t && t.email && (n = t.email),
                (0, d.qfG)((e) =>
                    (0, i.jsx)(l.Modal, {
                        actions: [{ variant: "primary", text: m.intl.string(m.t.BddRzS), onClick: e.onClose }],
                        title: m.intl.string(m.t.VbTh0E),
                        subtitle: n,
                        ...e,
                    }),
                );
        });
}
function g(e) {
    let { size: t, variant: n } = e,
        r = (0, o.bG)([_.default], () => _.default.getCurrentUser());
    a()(null != r, "ResendEmailVerificationButton: currentUser cannot be undefined");
    let [l, c] = s.useState(!1),
        u = s.useCallback(() => {
            c(!0), A(r).then(() => c(!1));
        }, [r]);
    return (0, i.jsx)(d.Button, { size: t, variant: n, onClick: u, text: m.intl.string(m.t.lm1UKt), disabled: l });
}

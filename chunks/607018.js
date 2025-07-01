(n.d(t, { default: () => p }), n(388685));
var s = n(255367),
    i = n(73800),
    r = n(442837),
    l = n(279837),
    o = n(479531),
    a = n(144114),
    c = n(145454),
    h = n(23434),
    u = n(594174),
    d = n(1964),
    E = n(388032);
let p = i.forwardRef(function (e, t) {
    let { onAddedPhone: n, onClose: p, transitionState: R, reason: m } = e,
        I = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        C = (0, r.e7)([h.Z], () => h.Z.getAction()),
        [f, g] = i.useState(null),
        [y, _] = i.useState(null),
        [P, b] = i.useState(null),
        [x, j] = i.useState(!1),
        N = i.useCallback(
            async (e) => {
                j(!0);
                try {
                    (d.Z.isPhoneReverification(I, C) ? await a.Z.beginReverifyPhone(e, m) : await a.Z.beginAddPhone(e, m), b(null), g(e));
                } catch (e) {
                    b(new o.Z(e));
                }
                j(!1);
            },
            [I, m, C]
        ),
        v = i.useCallback(
            async (e) => {
                if (null != f && null != I) {
                    j(!0);
                    try {
                        let { token: t } = await a.Z.verifyPhone(f, e);
                        (b(null), _(t));
                    } catch (e) {
                        b(new o.Z(e));
                    }
                    j(!1);
                }
            },
            [I, f]
        ),
        O = i.useCallback(
            async (e) => {
                null != y && (d.Z.isPhoneReverification(I, C) ? await a.Z.reverifyPhone(y, e, m) : await a.Z.addPhone(y, e, m), null == n || n(), p());
            },
            [n, p, y, m, I, C]
        );
    return null != y
        ? (0, s.jsx)(l.Z, {
              onClose: p,
              transitionState: R,
              title: E.intl.string(E.t.ZtCDc3),
              handleSubmit: O
          })
        : (0, s.jsx)(c.Z, {
              onClose: p,
              transitionState: R,
              error: null == P ? void 0 : P.getAnyErrorMessage(),
              working: x,
              validPhone: null != f,
              onAddPhone: N,
              onVerifyPhone: v
          });
});

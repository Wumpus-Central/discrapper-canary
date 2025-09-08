n.d(t, { default: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(279837),
    s = n(479531),
    l = n(144114),
    c = n(145454),
    u = n(23434),
    d = n(594174),
    f = n(1964),
    _ = n(388032);
let p = i.forwardRef(function (e, t) {
    let { onAddedPhone: n, onClose: p, transitionState: h, reason: m } = e,
        g = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        E = (0, a.e7)([u.Z], () => u.Z.getAction()),
        [b, y] = i.useState(null),
        [O, v] = i.useState(null),
        [I, T] = i.useState(null),
        [S, A] = i.useState(!1),
        C = i.useCallback(
            async (e) => {
                A(!0);
                try {
                    f.Z.isPhoneReverification(g, E)
                        ? await l.Z.beginReverifyPhone(e, m)
                        : await l.Z.beginAddPhone(e, m),
                        T(null),
                        y(e);
                } catch (e) {
                    T(new s.Z(e));
                }
                A(!1);
            },
            [g, m, E],
        ),
        N = i.useCallback(
            async (e) => {
                if (null != b && null != g) {
                    A(!0);
                    try {
                        let { token: t } = await l.Z.verifyPhone(b, e);
                        T(null), v(t);
                    } catch (e) {
                        T(new s.Z(e));
                    }
                    A(!1);
                }
            },
            [g, b],
        ),
        R = i.useCallback(
            async (e) => {
                null != O &&
                    (f.Z.isPhoneReverification(g, E) ? await l.Z.reverifyPhone(O, e, m) : await l.Z.addPhone(O, e, m),
                    null == n || n(),
                    p());
            },
            [n, p, O, m, g, E],
        );
    return null != O
        ? (0, r.jsx)(o.Z, {
              onClose: p,
              transitionState: h,
              title: _.intl.string(_.t.ZtCDc3),
              handleSubmit: R,
          })
        : (0, r.jsx)(c.default, {
              onClose: p,
              transitionState: h,
              error: null == I ? void 0 : I.getAnyErrorMessage(),
              working: S,
              validPhone: null != b,
              onAddPhone: C,
              onVerifyPhone: N,
          });
});

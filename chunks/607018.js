n.d(t, { default: () => E }), n(47120);
var s = n(200651),
    i = n(192379),
    r = n(442837),
    o = n(279837),
    l = n(479531),
    a = n(144114),
    h = n(145454),
    c = n(23434),
    d = n(594174),
    u = n(1964),
    p = n(388032);
let E = i.forwardRef(function (e, t) {
    let { onAddedPhone: n, onClose: E, transitionState: m, reason: R } = e,
        f = (0, r.e7)([d.default], () => d.default.getCurrentUser()),
        g = (0, r.e7)([c.Z], () => c.Z.getAction()),
        [C, I] = i.useState(null),
        [y, N] = i.useState(null),
        [P, b] = i.useState(null),
        [_, x] = i.useState(!1),
        j = i.useCallback(
            async (e) => {
                x(!0);
                try {
                    u.Z.isPhoneReverification(f, g) ? await a.Z.beginReverifyPhone(e, R) : await a.Z.beginAddPhone(e, R), b(null), I(e);
                } catch (e) {
                    b(new l.Z(e));
                }
                x(!1);
            },
            [f, R, g]
        ),
        v = i.useCallback(
            async (e) => {
                if (null != C && null != f) {
                    x(!0);
                    try {
                        let { token: t } = await a.Z.verifyPhone(C, e);
                        b(null), N(t);
                    } catch (e) {
                        b(new l.Z(e));
                    }
                    x(!1);
                }
            },
            [f, C]
        ),
        w = i.useCallback(
            async (e) => {
                null != y && (u.Z.isPhoneReverification(f, g) ? await a.Z.reverifyPhone(y, e, R) : await a.Z.addPhone(y, e, R), null == n || n(), E());
            },
            [n, E, y, R, f, g]
        );
    return null != y
        ? (0, s.jsx)(o.default, {
              onClose: E,
              transitionState: m,
              title: p.NW.string(p.t.ZtCDc3),
              handleSubmit: w
          })
        : (0, s.jsx)(h.Z, {
              onClose: E,
              transitionState: m,
              error: null == P ? void 0 : P.getAnyErrorMessage(),
              working: _,
              validPhone: null != C,
              onAddPhone: j,
              onVerifyPhone: v
          });
});

s.d(t, { default: () => m }), s(47120);
var n = s(200651),
    i = s(192379),
    l = s(442837),
    o = s(279837),
    a = s(479531),
    r = s(144114),
    h = s(145454),
    d = s(23434),
    c = s(594174),
    u = s(1964),
    p = s(388032);
let m = i.forwardRef(function (e, t) {
    let { onAddedPhone: s, onClose: m, transitionState: f, reason: g } = e,
        C = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        y = (0, l.e7)([d.Z], () => d.Z.getAction()),
        [x, b] = i.useState(null),
        [j, v] = i.useState(null),
        [k, N] = i.useState(null),
        [w, P] = i.useState(!1),
        R = i.useCallback(
            async (e) => {
                P(!0);
                try {
                    u.Z.isPhoneReverification(C, y) ? await r.Z.beginReverifyPhone(e, g) : await r.Z.beginAddPhone(e, g), N(null), b(e);
                } catch (e) {
                    N(new a.Z(e));
                }
                P(!1);
            },
            [C, g, y]
        ),
        Z = i.useCallback(
            async (e) => {
                if (null != x && null != C) {
                    P(!0);
                    try {
                        let { token: t } = await r.Z.verifyPhone(x, e);
                        N(null), v(t);
                    } catch (e) {
                        N(new a.Z(e));
                    }
                    P(!1);
                }
            },
            [C, x]
        ),
        S = i.useCallback(
            async (e) => {
                null != j && (u.Z.isPhoneReverification(C, y) ? await r.Z.reverifyPhone(j, e, g) : await r.Z.addPhone(j, e, g), null == s || s(), m());
            },
            [s, m, j, g, C, y]
        );
    return null != j
        ? (0, n.jsx)(o.default, {
              onClose: m,
              transitionState: f,
              title: p.intl.string(p.t.ZtCDc3),
              handleSubmit: S
          })
        : (0, n.jsx)(h.Z, {
              onClose: m,
              transitionState: f,
              error: null == k ? void 0 : k.getAnyErrorMessage(),
              working: w,
              validPhone: null != x,
              onAddPhone: R,
              onVerifyPhone: Z
          });
});

n.d(t, { default: () => E }), n(388685);
var s = n(200651),
    i = n(192379),
    l = n(442837),
    r = n(279837),
    o = n(479531),
    a = n(144114),
    h = n(145454),
    c = n(23434),
    d = n(594174),
    u = n(1964),
    p = n(388032);
let E = i.forwardRef(function (e, t) {
    let { onAddedPhone: n, onClose: E, transitionState: m, reason: R } = e,
        f = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        g = (0, l.e7)([c.Z], () => c.Z.getAction()),
        [C, I] = i.useState(null),
        [y, P] = i.useState(null),
        [b, _] = i.useState(null),
        [x, j] = i.useState(!1),
        N = i.useCallback(
            async (e) => {
                j(!0);
                try {
                    u.Z.isPhoneReverification(f, g) ? await a.Z.beginReverifyPhone(e, R) : await a.Z.beginAddPhone(e, R), _(null), I(e);
                } catch (e) {
                    _(new o.Z(e));
                }
                j(!1);
            },
            [f, R, g]
        ),
        v = i.useCallback(
            async (e) => {
                if (null != C && null != f) {
                    j(!0);
                    try {
                        let { token: t } = await a.Z.verifyPhone(C, e);
                        _(null), P(t);
                    } catch (e) {
                        _(new o.Z(e));
                    }
                    j(!1);
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
        ? (0, s.jsx)(r.Z, {
              onClose: E,
              transitionState: m,
              title: p.intl.string(p.t.ZtCDc3),
              handleSubmit: w
          })
        : (0, s.jsx)(h.Z, {
              onClose: E,
              transitionState: m,
              error: null == b ? void 0 : b.getAnyErrorMessage(),
              working: x,
              validPhone: null != C,
              onAddPhone: N,
              onVerifyPhone: v
          });
});

n.d(t, { default: () => f });
var a = n(477900),
    l = n(582128),
    i = n(17928),
    r = n(181658),
    u = n(557722),
    s = n(914724),
    o = n(870570),
    c = n(287809),
    d = n(446868),
    h = n(662758),
    A = n(660183);
function f(e) {
    let { onAddedPhone: t, onClose: n, transitionState: f, reason: y, layerContext: b, ref: w } = e,
        C = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        P = (0, i.bG)([o.A], () => o.A.getAction()),
        [g, k] = l.useState(null),
        [p, v] = l.useState(null),
        [S, x] = l.useState(null),
        [R, j] = l.useState(!1),
        G = l.useCallback(
            async (e) => {
                j(!0);
                try {
                    (d.A.isPhoneReverification(C, P)
                        ? await u.A.beginReverifyPhone(e, y)
                        : await u.A.beginAddPhone(e, y),
                        x(null),
                        k(e));
                } catch (e) {
                    x(new r.A(e));
                }
                j(!1);
            },
            [C, y, P],
        ),
        _ = l.useCallback(
            async (e) => {
                if (null != g && null != C) {
                    j(!0);
                    try {
                        let { token: t } = await u.A.verifyPhone(g, e);
                        (x(null), v(t));
                    } catch (e) {
                        x(new r.A(e));
                    }
                    j(!1);
                }
            },
            [C, g],
        ),
        m = l.useCallback(
            async (e) => {
                null != p &&
                    (d.A.isPhoneReverification(C, P) ? await u.A.reverifyPhone(p, e, y) : await u.A.addPhone(p, e, y),
                    t?.(),
                    n());
            },
            [t, n, p, y, C, P],
        );
    return null != p
        ? (0, a.jsx)(h.default, { onClose: n, transitionState: f, title: A.intl.string(A.t.ZtCDc2), handleSubmit: m })
        : (0, a.jsx)(s.default, {
              onClose: n,
              transitionState: f,
              error: S?.getAnyErrorMessage(),
              working: R,
              validPhone: null != g,
              onAddPhone: G,
              onVerifyPhone: _,
              layerContext: b,
          });
}

n.d(t, { default: () => A });
var a = n(627968),
    l = n(64700),
    i = n(17928),
    r = n(181658),
    u = n(557722),
    o = n(914724),
    s = n(870570),
    c = n(287809),
    d = n(446868),
    h = n(662758),
    f = n(375708);
let A = l.forwardRef(function (e, t) {
    let { onAddedPhone: n, onClose: A, transitionState: w, reason: y, layerContext: b } = e,
        C = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        P = (0, i.bG)([s.A], () => s.A.getAction()),
        [g, k] = l.useState(null),
        [p, v] = l.useState(null),
        [S, R] = l.useState(null),
        [x, j] = l.useState(!1),
        G = l.useCallback(
            async (e) => {
                j(!0);
                try {
                    d.A.isPhoneReverification(C, P)
                        ? await u.A.beginReverifyPhone(e, y)
                        : await u.A.beginAddPhone(e, y),
                        R(null),
                        k(e);
                } catch (e) {
                    R(new r.A(e));
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
                        R(null), v(t);
                    } catch (e) {
                        R(new r.A(e));
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
                    n?.(),
                    A());
            },
            [n, A, p, y, C, P],
        );
    return null != p
        ? (0, a.jsx)(h.default, { onClose: A, transitionState: w, title: f.intl.string(f.t.ZtCDc2), handleSubmit: m })
        : (0, a.jsx)(o.default, {
              onClose: A,
              transitionState: w,
              error: S?.getAnyErrorMessage(),
              working: x,
              validPhone: null != g,
              onAddPhone: G,
              onVerifyPhone: _,
              layerContext: b,
          });
});

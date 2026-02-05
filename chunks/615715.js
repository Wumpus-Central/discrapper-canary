n.d(t, { default: () => R });
var s = n(627968),
    a = n(64700),
    i = n(311907),
    l = n(181658),
    o = n(557722),
    r = n(515258),
    E = n(870570),
    d = n(287809),
    c = n(446868),
    u = n(662758),
    h = n(985018);
let R = a.forwardRef(function (e, t) {
    let { onAddedPhone: n, onClose: R, transitionState: I, reason: p, layerContext: _ } = e,
        f = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
        g = (0, i.bG)([E.A], () => E.A.getAction()),
        [C, m] = a.useState(null),
        [A, y] = a.useState(null),
        [F, b] = a.useState(null),
        [P, x] = a.useState(!1),
        V = a.useCallback(
            async (e) => {
                x(!0);
                try {
                    c.A.isPhoneReverification(f, g)
                        ? await o.A.beginReverifyPhone(e, p)
                        : await o.A.beginAddPhone(e, p),
                        b(null),
                        m(e);
                } catch (e) {
                    b(new l.A(e));
                }
                x(!1);
            },
            [f, p, g],
        ),
        B = a.useCallback(
            async (e) => {
                if (null != C && null != f) {
                    x(!0);
                    try {
                        let { token: t } = await o.A.verifyPhone(C, e);
                        b(null), y(t);
                    } catch (e) {
                        b(new l.A(e));
                    }
                    x(!1);
                }
            },
            [f, C],
        ),
        D = a.useCallback(
            async (e) => {
                null != A &&
                    (c.A.isPhoneReverification(f, g) ? await o.A.reverifyPhone(A, e, p) : await o.A.addPhone(A, e, p),
                    n?.(),
                    R());
            },
            [n, R, A, p, f, g],
        );
    return null != A
        ? (0, s.jsx)(u.default, { onClose: R, transitionState: I, title: h.intl.string(h.t.ZtCDc2), handleSubmit: D })
        : (0, s.jsx)(r.default, {
              onClose: R,
              transitionState: I,
              error: F?.getAnyErrorMessage(),
              working: P,
              validPhone: null != C,
              onAddPhone: V,
              onVerifyPhone: B,
              layerContext: _,
          });
});

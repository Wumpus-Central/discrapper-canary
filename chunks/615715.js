n.d(t, {
    default: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(181658),
    o = n(557722),
    l = n(515258),
    c = n(870570),
    u = n(287809),
    d = n(446868),
    f = n(662758),
    p = n(985018);
let _ = i.forwardRef(function (e, t) {
    let { onAddedPhone: n, onClose: _, transitionState: h, reason: m, layerContext: g } = e,
        E = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        b = (0, a.bG)([c.A], () => c.A.getAction()),
        [y, O] = i.useState(null),
        [A, v] = i.useState(null),
        [S, I] = i.useState(null),
        [T, C] = i.useState(!1),
        N = i.useCallback(
            async (e) => {
                C(!0);
                try {
                    d.A.isPhoneReverification(E, b)
                        ? await o.A.beginReverifyPhone(e, m)
                        : await o.A.beginAddPhone(e, m),
                        I(null),
                        O(e);
                } catch (e) {
                    I(new s.A(e));
                }
                C(!1);
            },
            [E, m, b],
        ),
        R = i.useCallback(
            async (e) => {
                if (null != y && null != E) {
                    C(!0);
                    try {
                        let { token: t } = await o.A.verifyPhone(y, e);
                        I(null), v(t);
                    } catch (e) {
                        I(new s.A(e));
                    }
                    C(!1);
                }
            },
            [E, y],
        ),
        w = i.useCallback(
            async (e) => {
                null != A &&
                    (d.A.isPhoneReverification(E, b) ? await o.A.reverifyPhone(A, e, m) : await o.A.addPhone(A, e, m),
                    null == n || n(),
                    _());
            },
            [n, _, A, m, E, b],
        );
    return null != A
        ? (0, r.jsx)(f.default, {
              onClose: _,
              transitionState: h,
              title: p.intl.string(p.t.ZtCDc2),
              handleSubmit: w,
          })
        : (0, r.jsx)(l.default, {
              onClose: _,
              transitionState: h,
              error: null == S ? void 0 : S.getAnyErrorMessage(),
              working: T,
              validPhone: null != y,
              onAddPhone: N,
              onVerifyPhone: R,
              layerContext: g,
          });
});

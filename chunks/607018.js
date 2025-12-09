n.d(t, { default: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(479531),
    s = n(144114),
    l = n(145454),
    c = n(23434),
    u = n(594174),
    d = n(1964),
    f = n(355497),
    p = n(388032);
let _ = i.forwardRef(function (e, t) {
    let { onAddedPhone: n, onClose: _, transitionState: m, reason: h, layerContext: g } = e,
        E = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        b = (0, a.e7)([c.Z], () => c.Z.getAction()),
        [y, O] = i.useState(null),
        [v, S] = i.useState(null),
        [I, T] = i.useState(null),
        [A, C] = i.useState(!1),
        N = i.useCallback(
            async (e) => {
                C(!0);
                try {
                    d.Z.isPhoneReverification(E, b)
                        ? await s.Z.beginReverifyPhone(e, h)
                        : await s.Z.beginAddPhone(e, h),
                        T(null),
                        O(e);
                } catch (e) {
                    T(new o.Z(e));
                }
                C(!1);
            },
            [E, h, b],
        ),
        P = i.useCallback(
            async (e) => {
                if (null != y && null != E) {
                    C(!0);
                    try {
                        let { token: t } = await s.Z.verifyPhone(y, e);
                        T(null), S(t);
                    } catch (e) {
                        T(new o.Z(e));
                    }
                    C(!1);
                }
            },
            [E, y],
        ),
        R = i.useCallback(
            async (e) => {
                null != v &&
                    (d.Z.isPhoneReverification(E, b) ? await s.Z.reverifyPhone(v, e, h) : await s.Z.addPhone(v, e, h),
                    null == n || n(),
                    _());
            },
            [n, _, v, h, E, b],
        );
    return null != v
        ? (0, r.jsx)(f.Z, {
              onClose: _,
              transitionState: m,
              title: p.intl.string(p.t.ZtCDc2),
              handleSubmit: R,
          })
        : (0, r.jsx)(l.default, {
              onClose: _,
              transitionState: m,
              error: null == I ? void 0 : I.getAnyErrorMessage(),
              working: A,
              validPhone: null != y,
              onAddPhone: N,
              onVerifyPhone: P,
              layerContext: g,
          });
});

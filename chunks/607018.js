n.d(t, { default: () => p }), n(388685);
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
    _ = n(388032);
let p = i.forwardRef(function (e, t) {
    let { onAddedPhone: n, onClose: p, transitionState: h, reason: m, layerContext: g } = e,
        E = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        b = (0, a.e7)([c.Z], () => c.Z.getAction()),
        [y, O] = i.useState(null),
        [v, I] = i.useState(null),
        [T, S] = i.useState(null),
        [A, C] = i.useState(!1),
        N = i.useCallback(
            async (e) => {
                C(!0);
                try {
                    d.Z.isPhoneReverification(E, b)
                        ? await s.Z.beginReverifyPhone(e, m)
                        : await s.Z.beginAddPhone(e, m),
                        S(null),
                        O(e);
                } catch (e) {
                    S(new o.Z(e));
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
                        let { token: t } = await s.Z.verifyPhone(y, e);
                        S(null), I(t);
                    } catch (e) {
                        S(new o.Z(e));
                    }
                    C(!1);
                }
            },
            [E, y],
        ),
        P = i.useCallback(
            async (e) => {
                null != v &&
                    (d.Z.isPhoneReverification(E, b) ? await s.Z.reverifyPhone(v, e, m) : await s.Z.addPhone(v, e, m),
                    null == n || n(),
                    p());
            },
            [n, p, v, m, E, b],
        );
    return null != v
        ? (0, r.jsx)(f.Z, {
              onClose: p,
              transitionState: h,
              title: _.intl.string(_.t.ZtCDc2),
              handleSubmit: P,
          })
        : (0, r.jsx)(l.default, {
              onClose: p,
              transitionState: h,
              error: null == T ? void 0 : T.getAnyErrorMessage(),
              working: A,
              validPhone: null != y,
              onAddPhone: N,
              onVerifyPhone: R,
              layerContext: g,
          });
});

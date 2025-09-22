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
    let { onAddedPhone: n, onClose: p, transitionState: h, reason: m, layerContext: g } = e,
        E = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        b = (0, a.e7)([u.Z], () => u.Z.getAction()),
        [y, O] = i.useState(null),
        [v, I] = i.useState(null),
        [T, S] = i.useState(null),
        [A, C] = i.useState(!1),
        N = i.useCallback(
            async (e) => {
                C(!0);
                try {
                    f.Z.isPhoneReverification(E, b)
                        ? await l.Z.beginReverifyPhone(e, m)
                        : await l.Z.beginAddPhone(e, m),
                        S(null),
                        O(e);
                } catch (e) {
                    S(new s.Z(e));
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
                        let { token: t } = await l.Z.verifyPhone(y, e);
                        S(null), I(t);
                    } catch (e) {
                        S(new s.Z(e));
                    }
                    C(!1);
                }
            },
            [E, y],
        ),
        P = i.useCallback(
            async (e) => {
                null != v &&
                    (f.Z.isPhoneReverification(E, b) ? await l.Z.reverifyPhone(v, e, m) : await l.Z.addPhone(v, e, m),
                    null == n || n(),
                    p());
            },
            [n, p, v, m, E, b],
        );
    return null != v
        ? (0, r.jsx)(o.Z, {
              onClose: p,
              transitionState: h,
              title: _.intl.string(_.t.ZtCDc3),
              handleSubmit: P,
          })
        : (0, r.jsx)(c.default, {
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

n.d(t, { default: () => E }), n(47120);
var s = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(279837),
    a = n(479531),
    r = n(144114),
    h = n(145454),
    c = n(23434),
    d = n(594174),
    u = n(1964),
    p = n(388032);
let E = i.forwardRef(function (e, t) {
    let { onAddedPhone: n, onClose: E, transitionState: m, reason: R } = e,
        C = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        f = (0, l.e7)([c.Z], () => c.Z.getAction()),
        [g, I] = i.useState(null),
        [y, _] = i.useState(null),
        [x, P] = i.useState(null),
        [N, b] = i.useState(!1),
        v = i.useCallback(
            async (e) => {
                b(!0);
                try {
                    u.Z.isPhoneReverification(C, f) ? await r.Z.beginReverifyPhone(e, R) : await r.Z.beginAddPhone(e, R), P(null), I(e);
                } catch (e) {
                    P(new a.Z(e));
                }
                b(!1);
            },
            [C, R, f]
        ),
        j = i.useCallback(
            async (e) => {
                if (null != g && null != C) {
                    b(!0);
                    try {
                        let { token: t } = await r.Z.verifyPhone(g, e);
                        P(null), _(t);
                    } catch (e) {
                        P(new a.Z(e));
                    }
                    b(!1);
                }
            },
            [C, g]
        ),
        k = i.useCallback(
            async (e) => {
                null != y && (u.Z.isPhoneReverification(C, f) ? await r.Z.reverifyPhone(y, e, R) : await r.Z.addPhone(y, e, R), null == n || n(), E());
            },
            [n, E, y, R, C, f]
        );
    return null != y
        ? (0, s.jsx)(o.default, {
              onClose: E,
              transitionState: m,
              title: p.intl.string(p.t.ZtCDc3),
              handleSubmit: k
          })
        : (0, s.jsx)(h.Z, {
              onClose: E,
              transitionState: m,
              error: null == x ? void 0 : x.getAnyErrorMessage(),
              working: N,
              validPhone: null != g,
              onAddPhone: v,
              onVerifyPhone: j
          });
});

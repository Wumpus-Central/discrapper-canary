n.r(t), n(47120);
var s = n(200651),
    i = n(192379),
    o = n(442837),
    l = n(279837),
    r = n(479531),
    a = n(144114),
    h = n(145454),
    c = n(23434),
    u = n(594174),
    d = n(1964),
    p = n(388032);
t.default = i.forwardRef(function (e, t) {
    let { onAddedPhone: n, onClose: E, transitionState: m, reason: R } = e,
        f = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
        C = (0, o.e7)([c.Z], () => c.Z.getAction()),
        [g, I] = i.useState(null),
        [y, _] = i.useState(null),
        [P, x] = i.useState(null),
        [N, v] = i.useState(!1),
        b = i.useCallback(
            async (e) => {
                v(!0);
                try {
                    d.Z.isPhoneReverification(f, C) ? await a.Z.beginReverifyPhone(e, R) : await a.Z.beginAddPhone(e, R), x(null), I(e);
                } catch (e) {
                    x(new r.Z(e));
                }
                v(!1);
            },
            [f, R, C]
        ),
        j = i.useCallback(
            async (e) => {
                if (null != g && null != f) {
                    v(!0);
                    try {
                        let { token: t } = await a.Z.verifyPhone(g, e);
                        x(null), _(t);
                    } catch (e) {
                        x(new r.Z(e));
                    }
                    v(!1);
                }
            },
            [f, g]
        ),
        w = i.useCallback(
            async (e) => {
                if (null != y) d.Z.isPhoneReverification(f, C) ? await a.Z.reverifyPhone(y, e, R) : await a.Z.addPhone(y, e, R), null == n || n(), E();
            },
            [n, E, y, R, f, C]
        );
    return null != y
        ? (0, s.jsx)(l.default, {
              onClose: E,
              transitionState: m,
              title: p.intl.string(p.t.ZtCDc3),
              handleSubmit: w
          })
        : (0, s.jsx)(h.Z, {
              onClose: E,
              transitionState: m,
              error: null == P ? void 0 : P.getAnyErrorMessage(),
              working: N,
              validPhone: null != g,
              onAddPhone: b,
              onVerifyPhone: j
          });
});

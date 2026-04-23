s.d(t, { default: () => f });
var n = s(627968),
    l = s(64700),
    a = s(311907),
    o = s(181658),
    i = s(557722),
    r = s(515258),
    d = s(870570),
    h = s(287809),
    u = s(446868),
    c = s(662758),
    p = s(985018);
let f = l.forwardRef(function (e, t) {
    let { onAddedPhone: s, onClose: f, transitionState: C, reason: g, layerContext: m } = e,
        y = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
        b = (0, a.bG)([d.A], () => d.A.getAction()),
        [x, A] = l.useState(null),
        [k, v] = l.useState(null),
        [R, S] = l.useState(null),
        [j, P] = l.useState(!1),
        w = l.useCallback(
            async (e) => {
                P(!0);
                try {
                    u.A.isPhoneReverification(y, b)
                        ? await i.A.beginReverifyPhone(e, g)
                        : await i.A.beginAddPhone(e, g),
                        S(null),
                        A(e);
                } catch (e) {
                    S(new o.A(e));
                }
                P(!1);
            },
            [y, g, b],
        ),
        N = l.useCallback(
            async (e) => {
                if (null != x && null != y) {
                    P(!0);
                    try {
                        let { token: t } = await i.A.verifyPhone(x, e);
                        S(null), v(t);
                    } catch (e) {
                        S(new o.A(e));
                    }
                    P(!1);
                }
            },
            [y, x],
        ),
        E = l.useCallback(
            async (e) => {
                null != k &&
                    (u.A.isPhoneReverification(y, b) ? await i.A.reverifyPhone(k, e, g) : await i.A.addPhone(k, e, g),
                    s?.(),
                    f());
            },
            [s, f, k, g, y, b],
        );
    return null != k
        ? (0, n.jsx)(c.default, { onClose: f, transitionState: C, title: p.intl.string(p.t.ZtCDc2), handleSubmit: E })
        : (0, n.jsx)(r.default, {
              onClose: f,
              transitionState: C,
              error: R?.getAnyErrorMessage(),
              working: j,
              validPhone: null != x,
              onAddPhone: w,
              onVerifyPhone: N,
              layerContext: m,
          });
});

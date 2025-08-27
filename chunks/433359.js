n.d(t, { CustomThemesShareModalWrapper: () => h }), n(388685), n(704826), n(35282);
var a = n(951288),
    o = n(647438),
    r = n(106351),
    s = n(442837),
    l = n(786761),
    i = n(3148),
    u = n(210887),
    c = n(131704),
    d = n(233398),
    _ = n(824988),
    f = n(135102),
    p = n(975919),
    b = n(595830);
let h = (e) => {
    let { transitionState: t, onClose: n } = e,
        {
            selectedDestinations: h,
            messageText: g,
            canSend: m,
            setSend: C,
            updateMessage: y,
            updateChannel: w,
        } = (0, f.C$)(),
        [M, x] = o.useState(!1),
        { colors: I, chassisMixAmount: S, gradientAngle: O } = (0, d.Ig)(),
        j = (0, s.e7)([u.Z], () => u.Z.theme),
        k = (0, o.useMemo)(
            () => ({
                colors: I.map((e) => e.replace("#", "")),
                gradient_angle: O,
                base_mix: S,
                base_theme: (0, _.h)(j),
            }),
            [I, O, S, j],
        ),
        E = o.useMemo(
            () =>
                (0, c.kt)({
                    id: "1",
                    type: r.d.DM,
                }),
            [],
        ),
        v = o.useMemo(
            () =>
                (0, l.e5)(
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })(
                        {},
                        (0, i.ZP)({
                            channelId: E.id,
                            content: "",
                        }),
                    ),
                ),
            [E],
        );
    (0, o.useEffect)(() => {
        y(v), w(E), x(!0);
    }, [v, E, y, w]);
    let P = o.useCallback(async () => {
        if (!m()) return Promise.reject();
        await (0, b.O)(h, k, g), await n();
    }, [k, h, g, m, n]);
    return ((0, o.useEffect)(() => {
        C(P);
    }, [P, C]),
    M)
        ? (0, a.jsx)(p._, {
              transitionState: t,
              onClose: n,
          })
        : null;
};

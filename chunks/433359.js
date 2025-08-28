n.d(t, { CustomThemesShareModalWrapper: () => g }), n(388685), n(704826), n(35282);
var a = n(951288),
    r = n(647438),
    o = n(879690),
    s = n(106351),
    l = n(442837),
    i = n(786761),
    u = n(3148),
    c = n(210887),
    d = n(131704),
    _ = n(233398),
    f = n(824988),
    p = n(135102),
    h = n(975919),
    b = n(595830);
let g = (e) => {
    let { transitionState: t, onClose: n } = e,
        g = (0, r.useRef)((0, p.sf)()).current,
        {
            selectedDestinations: m,
            messageText: C,
            canSend: y,
            setSend: M,
            updateMessage: w,
            updateChannel: x,
        } = (0, o.o)(g),
        [I, S] = r.useState(!1),
        { colors: j, chassisMixAmount: O, gradientAngle: k } = (0, _.Ig)(),
        v = (0, l.e7)([c.Z], () => c.Z.theme),
        E = (0, r.useMemo)(
            () => ({
                colors: j.map((e) => e.replace("#", "")),
                gradient_angle: k,
                base_mix: O,
                base_theme: (0, f.h)(v),
            }),
            [j, k, O, v],
        ),
        P = r.useMemo(
            () =>
                (0, d.kt)({
                    id: "1",
                    type: s.d.DM,
                }),
            [],
        ),
        W = r.useMemo(
            () =>
                (0, i.e5)(
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
                        (0, u.ZP)({
                            channelId: P.id,
                            content: "",
                        }),
                    ),
                ),
            [P],
        );
    (0, r.useEffect)(() => {
        w(W), x(P), S(!0);
    }, [W, P, w, x]);
    let D = r.useCallback(async () => {
        if (!y()) return Promise.reject();
        await (0, b.O)(m, E, C), await n();
    }, [E, m, C, y, n]);
    return ((0, r.useEffect)(() => {
        M(D);
    }, [D, M]),
    I)
        ? (0, a.jsx)(p.fm.Provider, {
              value: g,
              children: (0, a.jsx)(h._, {
                  transitionState: t,
                  onClose: n,
              }),
          })
        : null;
};

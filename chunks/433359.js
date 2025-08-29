n.d(t, { CustomThemesShareModalWrapper: () => C }), n(388685), n(704826), n(35282);
var a = n(951288),
    r = n(647438),
    o = n(879690),
    s = n(106351),
    l = n(442837),
    i = n(786761),
    u = n(3148),
    c = n(210887),
    d = n(131704),
    _ = n(626135),
    f = n(233398),
    p = n(824988),
    h = n(135102),
    b = n(975919),
    g = n(595830),
    m = n(981631);
let C = (e) => {
    let { transitionState: t, onClose: n } = e,
        C = (0, r.useRef)((0, h.sf)()).current,
        {
            selectedDestinations: M,
            messageText: y,
            canSend: x,
            setSend: w,
            updateMessage: S,
            updateChannel: E,
        } = (0, o.o)(C),
        [I, O] = r.useState(!1),
        { colors: j, chassisMixAmount: k, gradientAngle: v } = (0, f.Ig)(),
        P = (0, l.e7)([c.Z], () => c.Z.theme),
        W = (0, r.useMemo)(
            () => ({
                colors: j.map((e) => e.replace("#", "")),
                gradient_angle: v,
                base_mix: k,
                base_theme: (0, p.h)(P),
            }),
            [j, v, k, P],
        ),
        T = r.useMemo(
            () =>
                (0, d.kt)({
                    id: "1",
                    type: s.d.DM,
                }),
            [],
        ),
        D = r.useMemo(
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
                            channelId: T.id,
                            content: "",
                        }),
                    ),
                ),
            [T],
        );
    (0, r.useEffect)(() => {
        S(D), E(T), O(!0);
    }, [D, T, S, E]);
    let L = r.useCallback(async () => {
        if (!x()) return Promise.reject();
        await (0, g.O)(M, W, y), _.default.track(m.rMx.CUSTOM_THEME_SHARED, { num_destinations: M.length }), await n();
    }, [W, M, y, x, n]);
    return ((0, r.useEffect)(() => {
        w(L);
    }, [L, w]),
    I)
        ? (0, a.jsx)(h.fm.Provider, {
              value: C,
              children: (0, a.jsx)(b._, {
                  transitionState: t,
                  onClose: n,
              }),
          })
        : null;
};

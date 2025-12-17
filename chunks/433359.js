n.d(t, { CustomThemesShareModalWrapper: () => O }), n(388685), n(704826), n(35282);
var r = n(54381),
    a = n(473749),
    o = n(663042),
    l = n(106351),
    c = n(442837),
    s = n(786761),
    i = n(3148),
    u = n(210887),
    d = n(131704),
    b = n(626135),
    f = n(233398),
    p = n(824988),
    g = n(135102),
    h = n(975919),
    m = n(595830),
    y = n(981631);
let O = (e) => {
    let { transitionState: t, onClose: n } = e,
        O = (0, a.useRef)((0, g.sf)()).current,
        {
            selectedDestinations: C,
            messageText: j,
            canSend: _,
            setSend: w,
            updateMessage: v,
            updateChannel: S,
        } = (0, o.o)(O),
        [P, x] = a.useState(!1),
        { colors: E, chassisMixAmount: M, gradientAngle: k } = (0, f.Ig)(),
        I = (0, c.e7)([u.Z], () => u.Z.theme),
        D = (0, a.useMemo)(
            () => ({
                colors: E.map((e) => e.replace("#", "")),
                gradient_angle: k,
                base_mix: M,
                base_theme: (0, p.h)(I),
            }),
            [E, k, M, I],
        ),
        T = a.useMemo(
            () =>
                (0, d.createChannelRecord)({
                    id: "1",
                    type: l.d.DM,
                }),
            [],
        ),
        R = a.useMemo(
            () =>
                (0, s.e5)(
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {},
                        (0, i.ZP)({
                            channelId: T.id,
                            content: "",
                        }),
                    ),
                ),
            [T],
        );
    (0, a.useEffect)(() => {
        v(R), S(T), x(!0);
    }, [R, T, v, S]);
    let Z = a.useCallback(async () => {
        if (!_()) return Promise.reject();
        await (0, m.O)(C, D, j), b.default.track(y.rMx.CUSTOM_THEME_SHARED, { num_destinations: C.length }), await n();
    }, [D, C, j, _, n]);
    return ((0, a.useEffect)(() => {
        w(Z);
    }, [Z, w]),
    P)
        ? (0, r.jsx)(g.fm.Provider, {
              value: O,
              children: (0, r.jsx)(h._, {
                  transitionState: t,
                  onClose: n,
              }),
          })
        : null;
};

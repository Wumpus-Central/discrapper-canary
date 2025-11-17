n.d(t, { CustomThemesShareModalWrapper: () => y }), n(388685), n(704826), n(35282);
var r = n(54381),
    a = n(473749),
    o = n(663042),
    l = n(106351),
    s = n(442837),
    i = n(786761),
    c = n(3148),
    u = n(210887),
    d = n(131704),
    f = n(626135),
    b = n(233398),
    p = n(824988),
    g = n(135102),
    h = n(975919),
    _ = n(595830),
    m = n(981631);
let y = (e) => {
    let { transitionState: t, onClose: n } = e,
        y = (0, a.useRef)((0, g.sf)()).current,
        {
            selectedDestinations: O,
            messageText: C,
            canSend: j,
            setSend: w,
            updateMessage: v,
            updateChannel: S,
        } = (0, o.o)(y),
        [P, x] = a.useState(!1),
        { colors: E, chassisMixAmount: M, gradientAngle: k } = (0, b.Ig)(),
        I = (0, s.e7)([u.Z], () => u.Z.theme),
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
                (0, i.e5)(
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
                        (0, c.ZP)({
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
        if (!j()) return Promise.reject();
        await (0, _.O)(O, D, C), f.default.track(m.rMx.CUSTOM_THEME_SHARED, { num_destinations: O.length }), await n();
    }, [D, O, C, j, n]);
    return ((0, a.useEffect)(() => {
        w(Z);
    }, [Z, w]),
    P)
        ? (0, r.jsx)(g.fm.Provider, {
              value: y,
              children: (0, r.jsx)(h._, {
                  transitionState: t,
                  onClose: n,
              }),
          })
        : null;
};

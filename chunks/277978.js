r.d(t, { CustomThemesShareModalWrapper: () => m }), r(896048), r(747238), r(812715);
var n = r(627968),
    a = r(64700),
    l = r(353640),
    o = r(478437),
    s = r(311907),
    c = r(141468),
    i = r(963852),
    u = r(544028),
    d = r(95701),
    f = r(954571),
    b = r(467135),
    p = r(739031),
    g = r(457417),
    y = r(567951),
    h = r(285188),
    O = r(652215);
let m = (e) => {
    let { transitionState: t, onClose: r } = e,
        m = (0, a.useRef)((0, g.E3)()).current,
        {
            selectedDestinations: j,
            messageText: w,
            canSend: C,
            setSend: v,
            updateMessage: P,
            updateChannel: S,
        } = (0, l.P)(m),
        [_, x] = a.useState(!1),
        { colors: E, chassisMixAmount: k, gradientAngle: D } = (0, b.ko)(),
        M = (0, s.bG)([u.A], () => u.A.theme),
        A = (0, a.useMemo)(
            () => ({
                colors: E.map((e) => e.replace("#", "")),
                gradient_angle: D,
                base_mix: k,
                base_theme: (0, p.O)(M),
            }),
            [E, D, k, M],
        ),
        R = a.useMemo(
            () =>
                (0, d.createChannelRecord)({
                    id: "1",
                    type: o.r.DM,
                }),
            [],
        ),
        T = a.useMemo(
            () =>
                (0, c.rh)(
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })(
                        {},
                        (0, i.Ay)({
                            channelId: R.id,
                            content: "",
                        }),
                    ),
                ),
            [R],
        );
    (0, a.useEffect)(() => {
        P(T), S(R), x(!0);
    }, [T, R, P, S]);
    let H = a.useCallback(async () => {
        if (!C()) return Promise.reject();
        await (0, h.N)(j, A, w), f.default.track(O.HAw.CUSTOM_THEME_SHARED, { num_destinations: j.length }), await r();
    }, [A, j, w, C, r]);
    return ((0, a.useEffect)(() => {
        v(H);
    }, [H, v]),
    _)
        ? (0, n.jsx)(g.KH.Provider, {
              value: m,
              children: (0, n.jsx)(y.y, {
                  transitionState: t,
                  onClose: r,
              }),
          })
        : null;
};

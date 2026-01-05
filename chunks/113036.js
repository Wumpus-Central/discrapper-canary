n.d(t, { Z: () => C }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(393903),
    c = n(358221),
    u = n(933557),
    d = n(711617),
    f = n(937995),
    p = n(618158),
    _ = n(922745),
    m = n(699516),
    h = n(594174),
    g = n(23303),
    E = n(393416),
    b = n(263731),
    y = n(121636),
    O = n(533348);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = (e) => {
    let { channel: t, width: n } = e,
        a = (0, s.e7)([c.Z], () => c.Z.getFilteredParticipants(t.id)),
        v = (0, g.Z)(t.id),
        I = i.useMemo(() => (0, u.F6)(t, h.default, m.Z), [t]),
        C = (0, d.Z)(t),
        A = n * (E.U.height / E.U.width),
        N = 1156,
        P = 1050,
        [R, w] = i.useState(0.65),
        [D, x] = i.useState({
            x: 0,
            y: 0,
        }),
        L = (0, l.y)((e) => {
            let { contentRect: t } = e,
                n = Math.max((t.width / E.U.width) * 1.5, (t.height / E.U.height) * 1.5),
                r = t.width / 2 - N * n,
                i = t.height / 2 - P * n;
            w(n),
                x({
                    x: r,
                    y: i,
                });
        });
    return (0, r.jsx)(f.ZP, {
        timeout: 2000,
        children: (e) =>
            (0, r.jsx)(
                _.Z,
                T(
                    S(
                        {
                            title: I,
                            backgroundKey: t.id,
                            screenMessage: null,
                            onJumpToChannel: C,
                            preventIdleComponent: p.Z,
                            width: n,
                            className: O.elevationHigh,
                        },
                        e,
                    ),
                    {
                        children: (0, r.jsx)("div", {
                            ref: L,
                            className: y.havenPipWrapper,
                            style: {
                                width: n,
                                height: A,
                            },
                            children: (0, r.jsx)("div", {
                                className: o()(b.haven, b.noTransition),
                                style: {
                                    transform: "translate("
                                        .concat(D.x, "px, ")
                                        .concat(D.y, "px) scale(")
                                        .concat(R, ")"),
                                },
                                children: (0, r.jsx)(E.Z, {
                                    roomSeats: v.seats,
                                    roomParticipants: v.participants,
                                    participants: a,
                                    channel: t,
                                    idle: e.idle,
                                    showAmbientEffects: !1,
                                    enableAnimations: !1,
                                    skipNewUserEducation: !0,
                                    disableInteractions: !0,
                                }),
                            }),
                        }),
                    },
                ),
            ),
    });
};

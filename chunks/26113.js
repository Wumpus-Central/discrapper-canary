n.d(t, { A: () => T }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(770178),
    c = n(313961),
    u = n(47167),
    d = n(28390),
    f = n(461782),
    p = n(447404),
    _ = n(271195),
    h = n(994500),
    m = n(287809),
    g = n(732777),
    E = n(709382),
    b = n(185014),
    y = n(204137),
    O = n(976092);
function A(e, t, n) {
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
function v(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = (e) => {
    let { channel: t, width: n } = e,
        a = (0, o.bG)([c.A], () => c.A.getFilteredParticipants(t.id)),
        A = (0, g.A)(t.id),
        S = i.useMemo(() => (0, u.m1)(t, m.default, h.A), [t]),
        T = (0, d.A)(t),
        C = n * (E.i.height / E.i.width),
        N = 1156,
        R = 1050,
        [w, P] = i.useState(0.65),
        [D, x] = i.useState({
            x: 0,
            y: 0,
        }),
        L = (0, l.w)((e) => {
            let { contentRect: t } = e,
                n = Math.max((t.width / E.i.width) * 1.5, (t.height / E.i.height) * 1.5),
                r = t.width / 2 - N * n,
                i = t.height / 2 - R * n;
            P(n),
                x({
                    x: r,
                    y: i,
                });
        });
    return (0, r.jsx)(f.Ay, {
        timeout: 2000,
        children: (e) =>
            (0, r.jsx)(
                _.A,
                I(
                    v(
                        {
                            title: S,
                            backgroundKey: t.id,
                            screenMessage: null,
                            onJumpToChannel: T,
                            preventIdleComponent: p.A,
                            width: n,
                            className: O.a8,
                        },
                        e,
                    ),
                    {
                        children: (0, r.jsx)("div", {
                            ref: L,
                            className: y.n,
                            style: {
                                width: n,
                                height: C,
                            },
                            children: (0, r.jsx)("div", {
                                className: s()(b.VT, b.rh),
                                style: {
                                    transform: "translate("
                                        .concat(D.x, "px, ")
                                        .concat(D.y, "px) scale(")
                                        .concat(w, ")"),
                                },
                                children: (0, r.jsx)(E.A, {
                                    roomSeats: A.seats,
                                    roomParticipants: A.participants,
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

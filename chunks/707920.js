n.d(t, { Z: () => E }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(918222),
    u = n(393903),
    d = n(785925),
    p = n(521506),
    f = n(805422),
    h = n(23303),
    m = n(393416),
    g = n(219226),
    b = n(766241),
    C = n(815144),
    y = n(610746),
    v = n(388032),
    x = n(263731);
let O = (e) => {
        let { channel: t, idle: n, className: l, participants: o } = e,
            p = (0, h.Z)(t.id),
            [f, O] = r.useState(!1),
            E = r.useCallback(
                (e) => {
                    d.ZP.update(t.id, { seat: e });
                },
                [t.id],
            ),
            [j, S] = (0, c.R)("haven-show-chat", !1);
        r.useEffect(() => {
            setTimeout(() => {
                O(!0);
            }, 2500);
        }, []);
        let [_, P] = r.useState(0.65),
            [I, Z] = r.useState(0.65),
            [T, N] = r.useState(0.65),
            [A, w] = r.useState({
                x: 0,
                y: 0,
            }),
            [M, R] = r.useState(!1),
            [D, L] = r.useState(0),
            [k, U] = r.useState({
                x: 0,
                y: 0,
            }),
            [V, F] = r.useState({
                x: 0,
                y: 0,
            }),
            [H, B] = r.useState(!1),
            G = r.useRef(null),
            [W, z] = r.useState(null),
            q = (0, u.y)((e) => {
                let { contentRect: t, target: n } = e,
                    i = n.getBoundingClientRect(),
                    r = t.width,
                    l = t.height,
                    a = (r / m.U.width) * 1.5,
                    o = (l / m.U.height) * 1.5,
                    s = (r / m.U.width) * 1.1,
                    c = (l / m.U.height) * 1.1;
                U({
                    x: r / 2 + i.x,
                    y: l / 2 + i.y,
                });
                let u = Math.max(a, o);
                if ((P(Math.max(s, c)), N(u), null != G.current)) {
                    let e = G.current.getBoundingClientRect();
                    z({
                        x: e.left - i.left,
                        y: e.top - i.top,
                    });
                }
            }),
            K = r.useCallback(
                (e) => {
                    var t;
                    let n = Math.max(e, _),
                        i = null == (t = q.current) ? void 0 : t.getBoundingClientRect();
                    if (null == i) return;
                    let r = {
                            x: 1156,
                            y: 1110,
                        },
                        l = !0,
                        a = 0,
                        o = i.height / n;
                    for (; l && a < 10; ) (l = r.y + o / 2 > 1536) && (r.y -= 32), a++;
                    let s = r.x * n,
                        c = r.y * n,
                        u = i.width / 2 - s,
                        d = i.height / 2 - c;
                    Z(n),
                        w({
                            x: u,
                            y: d,
                        });
                },
                [q, _],
            );
        r.useEffect(() => {
            K(T);
        }, [T, K]);
        let Y = r.useCallback(
            (e) => {
                var t;
                let n = null == (t = q.current) ? void 0 : t.getBoundingClientRect();
                if (null == n) return;
                let i = n.height / I,
                    r = n.width / I,
                    l = {
                        x: e.x / I,
                        y: e.y / I,
                    },
                    a = e.y / I > 0,
                    o = e.x / I > 0,
                    s = l.y - i < -1536,
                    c = l.x - r < -2180;
                s || a || o || c || w(e);
            },
            [q, I],
        );
        return (0, i.jsx)(s.tEY, {
            children: (0, i.jsxs)("div", {
                ref: q,
                className: a()(x.havenWrapper, l),
                onClick: () => {
                    L(0);
                },
                onMouseDown: () => R(Date.now()),
                onMouseUp: (e) => {
                    if (null != q.current) {
                        if (D < 2) {
                            let n = Date.now(),
                                i = q.current.getBoundingClientRect(),
                                r = {
                                    x: (e.pageX - i.x - A.x) / I,
                                    y: (e.pageY - i.y - A.y) / I,
                                };
                            !1 !== M && n - M > 250 && d.ZP.update(t.id, { position: r });
                        }
                        R(!1);
                    }
                },
                onMouseMove: (e) => {
                    !1 !== M &&
                        (L(D + Math.abs(e.movementX) + Math.abs(e.movementY)),
                        Y({
                            x: A.x + e.movementX,
                            y: A.y + e.movementY,
                        })),
                        F({
                            x: e.pageX,
                            y: e.pageY,
                        });
                },
                children: [
                    (0, i.jsx)("div", {
                        className: x.haven,
                        style: {
                            transform: "translate(".concat(A.x, "px, ").concat(A.y, "px) scale(").concat(I, ") "),
                        },
                        children: (0, i.jsx)(m.Z, {
                            roomSeats: p.seats,
                            roomParticipants: p.participants,
                            participants: o,
                            channel: t,
                            idle: n,
                            skipNewUserEducation: !f,
                            onSeatClick: E,
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: a()(x.row, x.bottomActions),
                        children: [
                            (0, i.jsxs)("div", {
                                className: a()(x.row, { [x.hidden]: n }),
                                children: [
                                    (0, i.jsxs)("div", {
                                        ref: G,
                                        children: [
                                            (0, i.jsx)(s.hU, {
                                                variant: "icon-only",
                                                "aria-label": v.intl.string(y.default.W7TAH4),
                                                icon: s.RZG,
                                                disabled: n,
                                                onClick: (e) => {
                                                    e.preventDefault(), e.stopPropagation(), B(!H);
                                                },
                                            }),
                                            (0, i.jsx)(b.Z, {
                                                open: H,
                                                close: () => B(!1),
                                                triggerRef: G,
                                                style:
                                                    null != W
                                                        ? {
                                                              left: W.x,
                                                              top: W.y,
                                                          }
                                                        : void 0,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(s.hU, {
                                        variant: "icon-only",
                                        "aria-label": v.intl.string(y.default.O7EDNk),
                                        icon: j ? s.ics : s.kBi,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), S(!j);
                                        },
                                    }),
                                ],
                            }),
                            (0, i.jsx)(g.Z, {
                                channel: t,
                                idle: n,
                                showChat: null != j && j,
                            }),
                            (0, i.jsxs)("div", {
                                className: a()(x.row, { [x.hidden]: n }),
                                children: [
                                    (0, i.jsx)(s.hU, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom out Haven",
                                        icon: s.BlJ,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), K(I - 0.05);
                                        },
                                    }),
                                    (0, i.jsx)(s.hU, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom in Haven",
                                        icon: s.OyE,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), K(I + 0.05);
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(C.Z, {
                        channel: t,
                        participants: o,
                    }),
                    (0, i.jsx)(b.Z, {
                        open: H,
                        close: () => B(!1),
                        triggerRef: G,
                        style:
                            null != W
                                ? {
                                      left: W.x,
                                      top: W.y,
                                  }
                                : void 0,
                    }),
                    (0, i.jsx)("div", {
                        className: a()(x.overlay, { [x.out]: f }),
                        children: (0, i.jsx)("div", {
                            className: x.welcome,
                            children: (0, i.jsx)(s.Text, {
                                variant: "display-lg",
                                children: "Welcome to Haven",
                            }),
                        }),
                    }),
                ],
            }),
        });
    },
    E = (e) => {
        let t = p.t.useConfig({ location: "Haven" }).enabled,
            n = (0, o.e7)([f.Z], () => f.Z.isUserConnected(e.channel.id));
        return (r.useEffect(() => {
            t && (n || d.ZP.connect(e.channel.id));
        }, [e.channel.id, n, t]),
        t)
            ? (0, i.jsx)(
                  O,
                  (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {},
                              i = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols &&
                              (i = i.concat(
                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                  }),
                              )),
                              i.forEach(function (t) {
                                  var i;
                                  (i = n[t]),
                                      t in e
                                          ? Object.defineProperty(e, t, {
                                                value: i,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0,
                                            })
                                          : (e[t] = i);
                              });
                      }
                      return e;
                  })({}, e),
              )
            : null;
    };

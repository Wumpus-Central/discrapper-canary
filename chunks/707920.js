n.d(t, { Z: () => T }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(918222),
    u = n(393903),
    d = n(333023),
    p = n(70097),
    f = n(785925),
    h = n(521506),
    m = n(805422),
    g = n(390551),
    b = n(195045),
    y = n(219226),
    C = n(292914),
    v = n(766241),
    x = n(368835),
    O = n(911397),
    E = n(882354),
    j = n(610746),
    S = n(388032),
    _ = n(263731);
function P(e) {
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
}
let I = {
        roomId: d.V,
        participants: [],
        seats: [],
    },
    Z = (e) => {
        let { channel: t, idle: n, className: l, participants: d } = e,
            { room: h } = (0, o.cj)([m.Z], () => {
                var e;
                return {
                    room: null != (e = m.Z.getRoom(t.id)) ? e : I,
                    isConnected: m.Z.isUserConnected(t.id),
                };
            }),
            [Z, T] = r.useState(!1),
            N = (0, b.Z)(),
            [A, w] = (0, c.R)("haven-show-chat", !1);
        r.useEffect(() => {
            null != N && T(!0);
        }, [N]);
        let [M, R] = r.useState(0.65),
            [D, L] = r.useState(0.65),
            [k, U] = r.useState(0.65),
            [V, H] = r.useState({
                x: 0,
                y: 0,
            }),
            [F, B] = r.useState(!1),
            [G, W] = r.useState(0),
            [z, q] = r.useState({
                x: 0,
                y: 0,
            }),
            [K, Y] = r.useState({
                x: 0,
                y: 0,
            }),
            [X, J] = r.useState(!1),
            Q = r.useRef(null),
            [$, ee] = r.useState(null),
            et = (0, u.y)((e) => {
                let { contentRect: t, target: n } = e,
                    i = n.getBoundingClientRect(),
                    r = t.width,
                    l = t.height;
                q({
                    x: r / 2 + i.x,
                    y: l / 2 + i.y,
                });
                let a = Math.max((r / 2180) * 1.5, (l / 1536) * 1.5);
                if ((R(Math.max((r / 2180) * 1.1, (l / 1536) * 1.1)), U(a), null != Q.current)) {
                    let e = Q.current.getBoundingClientRect();
                    ee({
                        x: e.left - i.left,
                        y: e.top - i.top,
                    });
                }
            }),
            en = r.useCallback(
                (e) => {
                    var t;
                    let n = Math.max(e, M),
                        i = null == (t = et.current) ? void 0 : t.getBoundingClientRect();
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
                    L(n),
                        H({
                            x: u,
                            y: d,
                        });
                },
                [et, M],
            );
        r.useEffect(() => {
            en(k);
        }, [k, en]);
        let ei = r.useCallback(
            (e) => {
                var t;
                let n = null == (t = et.current) ? void 0 : t.getBoundingClientRect();
                if (null == n) return;
                let i = n.height / D,
                    r = n.width / D,
                    l = {
                        x: e.x / D,
                        y: e.y / D,
                    },
                    a = e.y / D > 0,
                    o = e.x / D > 0,
                    s = l.y - i < -1536,
                    c = l.x - r < -2180;
                s || a || o || c || H(e);
            },
            [et, D],
        );
        return (0, i.jsx)(s.tEY, {
            children: (0, i.jsxs)("div", {
                ref: et,
                className: a()(_.havenWrapper, l),
                onClick: () => {
                    W(0);
                },
                onMouseDown: () => B(Date.now()),
                onMouseUp: (e) => {
                    if (null != et.current) {
                        if (G < 2) {
                            let n = Date.now(),
                                i = et.current.getBoundingClientRect(),
                                r = {
                                    x: (e.pageX - i.x - V.x) / D,
                                    y: (e.pageY - i.y - V.y) / D,
                                };
                            !1 !== F && n - F > 250 && f.ZP.update(t.id, { position: r });
                        }
                        B(!1);
                    }
                },
                onMouseMove: (e) => {
                    !1 !== F &&
                        (W(G + Math.abs(e.movementX) + Math.abs(e.movementY)),
                        ei({
                            x: V.x + e.movementX,
                            y: V.y + e.movementY,
                        })),
                        Y({
                            x: e.pageX,
                            y: e.pageY,
                        });
                },
                children: [
                    (0, i.jsx)("div", {
                        className: _.haven,
                        style: {
                            transform: "translate(".concat(V.x, "px, ").concat(V.y, "px) scale(").concat(D, ") "),
                        },
                        children:
                            null != N &&
                            (0, i.jsxs)("div", {
                                className: _.environment,
                                children: [
                                    (0, i.jsx)("img", {
                                        className: _.background,
                                        src: N.backgrounds.sky.static,
                                        alt: "",
                                        draggable: !1,
                                    }),
                                    (0, i.jsx)(E.Z, {}),
                                    (0, i.jsx)("img", {
                                        className: _.background,
                                        src: N.backgrounds.mountains.static,
                                        alt: "",
                                        draggable: !1,
                                    }),
                                    (0, i.jsx)(C.Z, {}),
                                    (0, i.jsx)("img", {
                                        className: _.background,
                                        src: N.backgrounds.river.static,
                                        alt: "",
                                        draggable: !1,
                                    }),
                                    (0, i.jsx)(p.Z, {
                                        className: _.video,
                                        style: { transform: "translate(779px, 1009px)" },
                                        src: N.ambience.river.animated,
                                        autoPlay: !0,
                                        controls: !1,
                                        loop: !0,
                                    }),
                                    (0, i.jsx)("img", {
                                        className: _.background,
                                        src: N.backgrounds.camp.static,
                                        alt: "",
                                        draggable: !1,
                                    }),
                                    g.Is.map((e) => {
                                        var n, r, l;
                                        return (0, i.jsx)(
                                            O.Z,
                                            ((r = P(
                                                {
                                                    onClick: (e) => {
                                                        f.ZP.update(t.id, { seat: e });
                                                    },
                                                    occupant: null == (n = h.seats[e.id - 1]) ? void 0 : n.claimedBy,
                                                },
                                                e,
                                            )),
                                            (l = l = { skipNewUserEducation: !1 }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                                : (function (e, t) {
                                                      var n = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var i = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, i);
                                                      }
                                                      return n;
                                                  })(Object(l)).forEach(function (e) {
                                                      Object.defineProperty(
                                                          r,
                                                          e,
                                                          Object.getOwnPropertyDescriptor(l, e),
                                                      );
                                                  }),
                                            r),
                                            e.id,
                                        );
                                    }),
                                    h.participants.map((e) =>
                                        (0, i.jsx)(
                                            x.Z,
                                            {
                                                seats: h.seats,
                                                participant: e,
                                                participants: d,
                                                channel: t,
                                                idle: n,
                                            },
                                            e.userId,
                                        ),
                                    ),
                                    (0, i.jsxs)("div", {
                                        className: a()(_.environment, _.noInteract),
                                        children: [
                                            (0, i.jsx)(p.Z, {
                                                className: _.video,
                                                style: { transform: "translate(1014px, 773px)" },
                                                src: N.ambience.fire.animated,
                                                autoPlay: !0,
                                                controls: !1,
                                                loop: !0,
                                            }),
                                            (0, i.jsx)(p.Z, {
                                                className: _.video,
                                                src: N.ambience.fireflies.animated,
                                                autoPlay: !0,
                                                controls: !1,
                                                loop: !0,
                                            }),
                                            (0, i.jsx)(p.Z, {
                                                className: _.video,
                                                style: { transform: "translate(0, 1216px)" },
                                                src: N.ambience.foliage_front.animated,
                                                autoPlay: !0,
                                                controls: !1,
                                                loop: !0,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                    }),
                    (0, i.jsxs)("div", {
                        className: a()(_.row, _.bottomActions),
                        children: [
                            (0, i.jsxs)("div", {
                                className: a()(_.row, { [_.hidden]: n }),
                                children: [
                                    (0, i.jsx)("div", {
                                        ref: Q,
                                        children: (0, i.jsx)(s.hU, {
                                            variant: "icon-only",
                                            "aria-label": S.intl.string(j.default.W7TAH4),
                                            icon: s.RZG,
                                            disabled: n,
                                            onClick: (e) => {
                                                e.preventDefault(), e.stopPropagation(), J(!X);
                                            },
                                        }),
                                    }),
                                    (0, i.jsx)(s.hU, {
                                        variant: "icon-only",
                                        "aria-label": S.intl.string(j.default.O7EDNk),
                                        icon: A ? s.ics : s.kBi,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), w(!A);
                                        },
                                    }),
                                ],
                            }),
                            (0, i.jsx)(y.Z, {
                                channel: t,
                                idle: n,
                                showChat: null != A && A,
                            }),
                        ],
                    }),
                    (0, i.jsx)(v.Z, {
                        open: X,
                        close: () => J(!1),
                        triggerRef: Q,
                        style:
                            null != $
                                ? {
                                      left: $.x,
                                      top: $.y,
                                  }
                                : void 0,
                    }),
                    (0, i.jsx)("div", {
                        className: a()(_.overlay, { [_.out]: Z }),
                        children: (0, i.jsx)("div", {
                            className: _.welcome,
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
    T = (e) => {
        let t = h.t.useConfig({ location: "Haven" }).enabled,
            n = (0, o.e7)([m.Z], () => m.Z.isUserConnected(e.channel.id));
        return (r.useEffect(() => {
            t && (n || f.ZP.connect(e.channel.id));
        }, [e.channel.id, n, t]),
        t)
            ? (0, i.jsx)(Z, P({}, e))
            : null;
    };

n.d(t, { Z: () => N }), n(388685);
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
    x = n(815144),
    O = n(368835),
    E = n(911397),
    j = n(882354),
    S = n(610746),
    _ = n(388032),
    P = n(263731);
function I(e) {
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
let Z = {
        roomId: d.V,
        participants: [],
        seats: [],
    },
    T = (e) => {
        let { channel: t, idle: n, className: l, participants: d } = e,
            { room: h } = (0, o.cj)([m.Z], () => {
                var e;
                return {
                    room: null != (e = m.Z.getRoom(t.id)) ? e : Z,
                    isConnected: m.Z.isUserConnected(t.id),
                };
            }),
            [T, N] = r.useState(!1),
            A = (0, b.Z)(),
            [w, M] = (0, c.R)("haven-show-chat", !1);
        r.useEffect(() => {
            null != A && N(!0);
        }, [A]);
        let [R, D] = r.useState(0.65),
            [k, L] = r.useState(0.65),
            [U, V] = r.useState(0.65),
            [H, F] = r.useState({
                x: 0,
                y: 0,
            }),
            [B, G] = r.useState(!1),
            [W, z] = r.useState(0),
            [q, K] = r.useState({
                x: 0,
                y: 0,
            }),
            [Y, X] = r.useState({
                x: 0,
                y: 0,
            }),
            [J, Q] = r.useState(!1),
            $ = r.useRef(null),
            [ee, et] = r.useState(null),
            en = (0, u.y)((e) => {
                let { contentRect: t, target: n } = e,
                    i = n.getBoundingClientRect(),
                    r = t.width,
                    l = t.height;
                K({
                    x: r / 2 + i.x,
                    y: l / 2 + i.y,
                });
                let a = Math.max((r / 2180) * 1.5, (l / 1536) * 1.5);
                if ((D(Math.max((r / 2180) * 1.1, (l / 1536) * 1.1)), V(a), null != $.current)) {
                    let e = $.current.getBoundingClientRect();
                    et({
                        x: e.left - i.left,
                        y: e.top - i.top,
                    });
                }
            }),
            ei = r.useCallback(
                (e) => {
                    var t;
                    let n = Math.max(e, R),
                        i = null == (t = en.current) ? void 0 : t.getBoundingClientRect();
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
                        F({
                            x: u,
                            y: d,
                        });
                },
                [en, R],
            );
        r.useEffect(() => {
            ei(U);
        }, [U, ei]);
        let er = r.useCallback(
            (e) => {
                var t;
                let n = null == (t = en.current) ? void 0 : t.getBoundingClientRect();
                if (null == n) return;
                let i = n.height / k,
                    r = n.width / k,
                    l = {
                        x: e.x / k,
                        y: e.y / k,
                    },
                    a = e.y / k > 0,
                    o = e.x / k > 0,
                    s = l.y - i < -1536,
                    c = l.x - r < -2180;
                s || a || o || c || F(e);
            },
            [en, k],
        );
        return (0, i.jsx)(s.tEY, {
            children: (0, i.jsxs)("div", {
                ref: en,
                className: a()(P.havenWrapper, l),
                onClick: () => {
                    z(0);
                },
                onMouseDown: () => G(Date.now()),
                onMouseUp: (e) => {
                    if (null != en.current) {
                        if (W < 2) {
                            let n = Date.now(),
                                i = en.current.getBoundingClientRect(),
                                r = {
                                    x: (e.pageX - i.x - H.x) / k,
                                    y: (e.pageY - i.y - H.y) / k,
                                };
                            !1 !== B && n - B > 250 && f.ZP.update(t.id, { position: r });
                        }
                        G(!1);
                    }
                },
                onMouseMove: (e) => {
                    !1 !== B &&
                        (z(W + Math.abs(e.movementX) + Math.abs(e.movementY)),
                        er({
                            x: H.x + e.movementX,
                            y: H.y + e.movementY,
                        })),
                        X({
                            x: e.pageX,
                            y: e.pageY,
                        });
                },
                children: [
                    (0, i.jsx)("div", {
                        className: P.haven,
                        style: {
                            transform: "translate(".concat(H.x, "px, ").concat(H.y, "px) scale(").concat(k, ") "),
                        },
                        children:
                            null != A &&
                            (0, i.jsxs)("div", {
                                className: P.environment,
                                children: [
                                    (0, i.jsx)("img", {
                                        className: P.background,
                                        src: A.backgrounds.sky.static,
                                        alt: "",
                                        draggable: !1,
                                    }),
                                    (0, i.jsx)(j.Z, {}),
                                    (0, i.jsx)("img", {
                                        className: P.background,
                                        src: A.backgrounds.mountains.static,
                                        alt: "",
                                        draggable: !1,
                                    }),
                                    (0, i.jsx)(C.Z, {}),
                                    (0, i.jsx)("img", {
                                        className: P.background,
                                        src: A.backgrounds.river.static,
                                        alt: "",
                                        draggable: !1,
                                    }),
                                    (0, i.jsx)(p.Z, {
                                        className: P.video,
                                        style: { transform: "translate(779px, 1009px)" },
                                        src: A.ambience.river.animated,
                                        autoPlay: !0,
                                        controls: !1,
                                        loop: !0,
                                    }),
                                    (0, i.jsx)("img", {
                                        className: P.background,
                                        src: A.backgrounds.camp.static,
                                        alt: "",
                                        draggable: !1,
                                    }),
                                    g.Is.map((e) => {
                                        var n, r, l;
                                        return (0, i.jsx)(
                                            E.Z,
                                            ((r = I(
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
                                            O.Z,
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
                                        className: a()(P.environment, P.noInteract),
                                        children: [
                                            (0, i.jsx)(p.Z, {
                                                className: P.video,
                                                style: { transform: "translate(1014px, 773px)" },
                                                src: A.ambience.fire.animated,
                                                autoPlay: !0,
                                                controls: !1,
                                                loop: !0,
                                            }),
                                            (0, i.jsx)(p.Z, {
                                                className: P.video,
                                                src: A.ambience.fireflies.animated,
                                                autoPlay: !0,
                                                controls: !1,
                                                loop: !0,
                                            }),
                                            (0, i.jsx)(p.Z, {
                                                className: P.video,
                                                style: { transform: "translate(0, 1216px)" },
                                                src: A.ambience.foliage_front.animated,
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
                        className: a()(P.row, P.bottomActions),
                        children: [
                            (0, i.jsxs)("div", {
                                className: a()(P.row, { [P.hidden]: n }),
                                children: [
                                    (0, i.jsx)("div", {
                                        ref: $,
                                        children: (0, i.jsx)(s.hU, {
                                            variant: "icon-only",
                                            "aria-label": _.intl.string(S.default.W7TAH4),
                                            icon: s.RZG,
                                            disabled: n,
                                            onClick: (e) => {
                                                e.preventDefault(), e.stopPropagation(), Q(!J);
                                            },
                                        }),
                                    }),
                                    (0, i.jsx)(s.hU, {
                                        variant: "icon-only",
                                        "aria-label": _.intl.string(S.default.O7EDNk),
                                        icon: w ? s.ics : s.kBi,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), M(!w);
                                        },
                                    }),
                                ],
                            }),
                            (0, i.jsx)(y.Z, {
                                channel: t,
                                idle: n,
                                showChat: null != w && w,
                            }),
                            (0, i.jsxs)("div", {
                                className: a()(P.row, { [P.hidden]: n }),
                                children: [
                                    (0, i.jsx)(s.hU, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom out Haven",
                                        icon: s.BlJ,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), ei(k - 0.05);
                                        },
                                    }),
                                    (0, i.jsx)(s.hU, {
                                        variant: "icon-only",
                                        "aria-label": "Zoom in Haven",
                                        icon: s.OyE,
                                        disabled: n,
                                        onClick: (e) => {
                                            e.preventDefault(), e.stopPropagation(), ei(k + 0.05);
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(x.Z, {
                        channel: t,
                        participants: d,
                    }),
                    (0, i.jsx)(v.Z, {
                        open: J,
                        close: () => Q(!1),
                        triggerRef: $,
                        style:
                            null != ee
                                ? {
                                      left: ee.x,
                                      top: ee.y,
                                  }
                                : void 0,
                    }),
                    (0, i.jsx)("div", {
                        className: a()(P.overlay, { [P.out]: T }),
                        children: (0, i.jsx)("div", {
                            className: P.welcome,
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
    N = (e) => {
        let t = h.t.useConfig({ location: "Haven" }).enabled,
            n = (0, o.e7)([m.Z], () => m.Z.isUserConnected(e.channel.id));
        return (r.useEffect(() => {
            t && (n || f.ZP.connect(e.channel.id));
        }, [e.channel.id, n, t]),
        t)
            ? (0, i.jsx)(T, I({}, e))
            : null;
    };

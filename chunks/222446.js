"use strict";
n.d(t, { A: () => U, i: () => k });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(607470),
    _ = n(572808),
    d = n(17928),
    u = n(228366),
    c = n(418126),
    E = n(998740);
let h = () => {
    let e = (0, d.bG)([E.A], () => E.A.assets);
    return (
        s.useEffect(() => {
            let t = async () => {
                let e = await c.Ay.getAssets();
                null != e && u.h.dispatch({ type: "HAVEN_GOT_ASSETS", assets: e.body });
            };
            null == e && t();
        }, [e]),
        e
    );
};
var m = n(460472);
let f = [0, 68, 123, 61, 165, 224, 181],
    g = [684, 720, 774, 798, 720, 803, 815],
    A = () => {
        let e = h(),
            t = s.useMemo(() => (null == e ? [] : Object.values(e?.clouds)), [e]);
        return (0, r.jsx)("div", {
            className: m.P,
            children: t.map((e, t) => {
                let n = t > f.length - 1 ? 0 : t;
                return (0, r.jsx)(
                    "img",
                    { className: m.g, style: { top: g[n], animationDelay: `${f[n]}s` }, src: e, alt: "Cloud" },
                    e,
                );
            }),
        });
    };
var I = n(735438);
let p = (e) =>
    s.useMemo(() => {
        let t = (0, I.clamp)(e.avatar, 0, _.oo.length - 1),
            n = _.qS[_.oo[t]];
        return null == n && (n = _.qS[_.PZ.IMP]), n;
    }, [e.avatar]);
var T = n(939249),
    S =
        (((i = {}).IDLE = "idle"),
        (i.HEAD_TURN = "headTurn"),
        (i.HEAD_TURN_BACK = "headTurnBack"),
        (i.TALKING = "talking"),
        i);
let N = {
    idle: ["headTurnBack", "talking"],
    headTurn: ["idle", "talking"],
    headTurnBack: ["headTurn"],
    talking: ["idle", "headTurnBack"],
};
var O = n(806931),
    R = n(840275);
let C = (e) => {
    let {
            seats: t,
            claimedSeat: n,
            participant: i,
            participants: a,
            channel: d,
            flip: u,
            handleHover: E,
            enableAnimations: m = !0,
        } = e,
        f = s.useRef(null),
        g = s.useRef(new Set()),
        A = p(i),
        {
            setAsset: C,
            sampleAsset: y,
            animationState: D,
            updateAnimationState: L,
            characterAssets: v,
        } = ((e) => {
            let [t, n] = s.useState("idle"),
                [i, r] = s.useState(),
                a = h(),
                o = s.useMemo(() => a?.characters[e], [a, e]),
                l = s.useCallback(() => {
                    if (null == o) return i;
                    let e = o[t];
                    return (0, I.sample)(e);
                }, [i, o, t]);
            return (
                s.useEffect(() => {
                    r(l());
                }, [a, e, l]),
                s.useEffect(() => {
                    r(() => l());
                }, [t]),
                {
                    animationState: t,
                    updateAnimationState: (e) => (e === t ? t : N[e].includes(t) ? (n(e), e) : t),
                    asset: i,
                    setAsset: r,
                    sampleAsset: l,
                    findAnimationTree: () => {
                        let e = 0,
                            n = new Set([t]);
                        for (; e < 10; ) e += 1;
                        return n;
                    },
                    characterAssets: o,
                }
            );
        })(A?.name),
        w = s.useMemo(() => Object.values(v ?? {}).flat(), [v]),
        P = a.find((e) => e.type === O.lp.USER && e.user.id === i.userId),
        b = s.useMemo(
            () =>
                a.filter((e) => {
                    let t;
                    return (t = i.userId), e.type === O.lp.USER && e.speaking && e.user.id !== t;
                }),
            [a, i.userId],
        ),
        k = s.useMemo(
            () =>
                b.flatMap((e) => {
                    let n = t.find((t) => t.claimedBy === e.user.id);
                    return null != n ? [n] : [];
                }),
            [b, t],
        ),
        [U, M] = s.useState(!1),
        [G, x] = s.useState(0),
        [V, F] = s.useState(0);
    return (
        s.useEffect(() => {
            M(!1);
        }, [A, w]),
        s.useEffect(() => {
            let e = g.current;
            return () => {
                [...e].forEach((e) => window.clearTimeout(e));
            };
        }, []),
        s.useEffect(() => {
            if (!m) return;
            let e = f.current;
            if (null == e || !0 === U) return;
            let t = y(),
                n = w.findIndex((e) => e === t);
            C(t),
                F(n),
                [...e.children].forEach((e, t) => {
                    "VIDEO" !== e.nodeName || ((e.currentTime = 0), t === n && (e.play(), M(!0)));
                });
        }, [U, w, y, C, m]),
        s.useEffect(() => {
            m && (P?.speaking ? L(S.TALKING) : D === S.TALKING && L(S.IDLE));
        }, [P, D, L, m]),
        s.useEffect(() => {
            !m ||
                (k.some((e) => {
                    switch (n.id) {
                        case 1:
                        case 2:
                        case 3:
                            return e?.id < n.id;
                        case 4:
                        case 5:
                        case 6:
                            return e?.id > n.id;
                        default:
                            return !1;
                    }
                }) &&
                    G + 13e3 < Date.now() &&
                    (L(S.HEAD_TURN), x(Date.now())));
        }, [k, n, G, L, m]),
        (0, r.jsxs)(T.D, {
            className: R.iE,
            style: { width: A.width, top: A.offset.top, left: u ? -A.offset.left : A.offset.left },
            onMouseEnter: () => E(!0),
            onMouseLeave: () => E(!1),
            onClick: (e) => {
                e.preventDefault(), e.stopPropagation();
                let t = (i.avatar + 1) % _.oo.length;
                0 === t && (t = 1), c.Ay.update(d.id, { avatar: t, seat: n?.id });
            },
            children: [
                (0, r.jsx)("div", { className: R.Fk, style: { height: 1.25 * A.height, width: 1.25 * A.width } }),
                v?.decoration != null &&
                    (0, r.jsx)(l.A, {
                        src: v.decoration[0],
                        className: o()(R.GG, { [R.UU]: u }),
                        autoPlay: m,
                        loop: m,
                        style: { width: A.width },
                    }),
                (0, r.jsx)("div", {
                    ref: f,
                    children: w.map((e, t) =>
                        (0, r.jsx)(
                            l.A,
                            {
                                style: { opacity: +(t === V), width: A.width },
                                src: e,
                                className: o()(R.GG, { [R.UU]: u }),
                                onEnded: () => {
                                    if (D === S.HEAD_TURN && v?.headTurn?.includes(e)) {
                                        L(S.HEAD_TURN_BACK);
                                        let e = setTimeout(() => {
                                            M(!1), g.current.delete(e);
                                        }, 2e3);
                                        g.current.add(e);
                                    } else D === S.HEAD_TURN_BACK && v?.headTurnBack?.includes(e) && L(S.IDLE), M(!1);
                                },
                                autoPlay: !1,
                                loop: !1,
                            },
                            e,
                        ),
                    ),
                }),
            ],
        })
    );
};
var y = n(615165);
let D = (e) => {
    let { seats: t, participant: n, participants: i, channel: a, idle: l, enableAnimations: d = !0 } = e,
        u = t.find((e) => e.claimedBy === n.userId),
        c = null != u,
        [E, h] = s.useState(!1),
        m = p(n),
        { x: f, y: g } = s.useMemo(() => {
            let e = { ...n.position };
            if (c) {
                let t = _.dG[u.id - 1];
                null != t && ((e.x = t.x + t.player.x), (e.y = t.y + t.player.y - m.height));
            }
            return e;
        }, [n.position, u, c, m]);
    return (0, r.jsx)("div", {
        className: o()(y.Wp, { [y.lv]: E }),
        style: { transform: `translate3d(${f}px, ${g}px, 0)`, zIndex: g },
        children:
            c &&
            (0, r.jsx)("div", {
                className: y.my,
                children: (0, r.jsx)(C, {
                    seats: t,
                    claimedSeat: u,
                    participant: n,
                    participants: i,
                    channel: a,
                    idle: l,
                    flip: f > 1080,
                    handleHover: (e) => h(e),
                    enableAnimations: d,
                }),
            }),
    });
};
var L = n(335827);
let v = (e) => {
    let {
            id: t,
            occupant: n,
            x: i,
            y: a,
            assetKey: l,
            onClick: _,
            skipNewUserEducation: d = !1,
            shadowPosition: u,
        } = e,
        c = h(),
        E = s.useMemo(() => c?.seats[l], [c, l]),
        m = s.useMemo(() => E?.seat, [E]),
        f = s.useMemo(() => E?.shadow, [E]);
    return (0, r.jsx)(T.D, {
        "aria-label": "claim seat",
        onClick:
            null != _
                ? (e) => {
                      e.preventDefault(), e.stopPropagation(), _(t);
                  }
                : void 0,
        className: o()(L.am, { [L.Sf]: null != n }),
        style: { transform: `translate(${i}px, ${a}px)` },
        children: (0, r.jsxs)("div", {
            className: L.LU,
            children: [
                null != f &&
                    null != u &&
                    (0, r.jsx)("img", {
                        className: o()(L.Sl, L.r7),
                        style: { transform: `translate(${u.x}px, ${u.y}px)` },
                        src: E?.shadow,
                        alt: "",
                    }),
                null != m &&
                    (0, r.jsx)("img", {
                        onDragStart: (e) => e.preventDefault(),
                        className: o()(L.Sl, { [L.Sf]: null != n, [L.cb]: d }),
                        style: { animationDelay: `${5500 + 150 * t}ms` },
                        src: E?.seat,
                        alt: "",
                    }),
            ],
        }),
    });
};
var w = n(933971);
let P = () => {
    let e = s.useRef(null),
        t = h(),
        [n, i] = s.useState(!1),
        [a, o] = s.useState([0, 0]),
        [_, d] = s.useState(0.5),
        [u, c] = s.useState(0),
        [E, m] = s.useState(!1);
    return (
        s.useEffect(() => {
            let t = null,
                r = e.current;
            if (null != r) {
                if (!1 === n) {
                    let e = 1e4 * Math.random() + 5e3;
                    t = window.setTimeout(() => {
                        i(!0),
                            o([(0, I.random)(128, 1792), (0, I.random)(64, 360)]),
                            d((0, I.random)(0.15, 0.5)),
                            c((0, I.random)(-15, 15)),
                            m(Math.random() > 0.5);
                    }, e);
                }
                return (
                    !0 === n && r.paused && ((r.currentTime = 0), r.play()),
                    () => {
                        window.clearTimeout(t);
                    }
                );
            }
        }, [n]),
        (0, r.jsx)(l.A, {
            ref: e,
            className: w.d,
            style: { transform: `translate(${a[0]}px, ${a[1]}px) scale(${E ? -1 * _ : _}, ${_}) rotate(${u}deg)` },
            src: t?.misc["shooting-star"],
            loop: !1,
            onEnded: () => {
                i(!1);
            },
        })
    );
};
var b = n(683807);
let k = { width: 2180, height: 1536 },
    U = (e) => {
        let {
                roomSeats: t,
                roomParticipants: n,
                participants: i,
                channel: s,
                idle: a,
                showAmbientEffects: d = !0,
                enableAnimations: u = !0,
                skipNewUserEducation: c = !1,
                onSeatClick: E,
                disableInteractions: m = !1,
            } = e,
            f = h();
        return null == f
            ? null
            : (0, r.jsxs)("div", {
                  className: b.cA,
                  children: [
                      (0, r.jsx)("img", { className: b.Tp, src: f.backgrounds.sky.static, alt: "", draggable: !1 }),
                      d && (0, r.jsx)(P, {}),
                      (0, r.jsx)("img", {
                          className: b.Tp,
                          src: f.backgrounds.mountains.static,
                          alt: "",
                          draggable: !1,
                      }),
                      d && (0, r.jsx)(A, {}),
                      (0, r.jsx)("img", { className: b.Tp, src: f.backgrounds.river.static, alt: "", draggable: !1 }),
                      d &&
                          (0, r.jsx)(l.A, {
                              className: b.Ki,
                              style: { transform: "translate(779px, 1009px)" },
                              src: f.ambience.river.animated,
                              autoPlay: !0,
                              controls: !1,
                              loop: !0,
                          }),
                      (0, r.jsx)("img", { className: b.Tp, src: f.backgrounds.camp.static, alt: "", draggable: !1 }),
                      _.dG.map((e) =>
                          (0, r.jsx)(
                              v,
                              { occupant: t[e.id - 1]?.claimedBy, onClick: E, skipNewUserEducation: c, ...e },
                              e.id,
                          ),
                      ),
                      n.map((e) =>
                          (0, r.jsx)(
                              D,
                              { seats: t, participant: e, participants: i, channel: s, idle: a, enableAnimations: u },
                              e.userId,
                          ),
                      ),
                      d &&
                          (0, r.jsxs)("div", {
                              className: o()(b.cA, b.ey),
                              children: [
                                  (0, r.jsx)(l.A, {
                                      className: b.Ki,
                                      style: { transform: "translate(1014px, 773px)" },
                                      src: f.ambience.fire.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                                  (0, r.jsx)(l.A, {
                                      className: b.Ki,
                                      src: f.ambience.fireflies.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                                  (0, r.jsx)(l.A, {
                                      className: b.Ki,
                                      style: { transform: "translate(0, 1216px)" },
                                      src: f.ambience.foliage_front.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                              ],
                          }),
                      m && (0, r.jsx)("div", { className: b.ps }),
                  ],
              });
    };

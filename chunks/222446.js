"use strict";
n.d(t, { A: () => M, i: () => k });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(607470),
    d = n(572808),
    _ = n(17928),
    u = n(228366),
    c = n(418126),
    E = n(998740);
let h = () => {
    let e = (0, _.bG)([E.A], () => E.A.assets);
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
    p = () => {
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
var A = n(735438);
let I = (e) =>
    s.useMemo(() => {
        let t = (0, A.clamp)(e.avatar, 0, d.oo.length - 1),
            n = d.qS[d.oo[t]];
        return null == n && (n = d.qS[d.PZ.IMP]), n;
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
var C = n(806931),
    R = n(840275);
let O = (e) => {
    let {
            seats: t,
            claimedSeat: n,
            participant: i,
            participants: a,
            channel: _,
            flip: u,
            handleHover: E,
            enableAnimations: m = !0,
        } = e,
        f = s.useRef(null),
        g = s.useRef(new Set()),
        p = I(i),
        {
            setAsset: O,
            sampleAsset: y,
            animationState: v,
            updateAnimationState: D,
            characterAssets: L,
        } = ((e) => {
            let [t, n] = s.useState("idle"),
                [i, r] = s.useState(),
                a = h(),
                o = s.useMemo(() => a?.characters[e], [a, e]),
                l = s.useCallback(() => {
                    if (null == o) return i;
                    let e = o[t];
                    return (0, A.sample)(e);
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
        })(p?.name),
        b = s.useMemo(() => Object.values(L ?? {}).flat(), [L]),
        w = a.find((e) => e.type === C.lp.USER && e.user.id === i.userId),
        P = s.useMemo(
            () =>
                a.filter((e) => {
                    let t;
                    return (t = i.userId), e.type === C.lp.USER && e.speaking && e.user.id !== t;
                }),
            [a, i.userId],
        ),
        k = s.useMemo(
            () =>
                P.flatMap((e) => {
                    let n = t.find((t) => t.claimedBy === e.user.id);
                    return null != n ? [n] : [];
                }),
            [P, t],
        ),
        [M, U] = s.useState(!1),
        [x, G] = s.useState(0),
        [V, F] = s.useState(0);
    return (
        s.useEffect(() => {
            U(!1);
        }, [p, b]),
        s.useEffect(() => {
            let e = g.current;
            return () => {
                [...e].forEach((e) => window.clearTimeout(e));
            };
        }, []),
        s.useEffect(() => {
            if (!m) return;
            let e = f.current;
            if (null == e || !0 === M) return;
            let t = y(),
                n = b.findIndex((e) => e === t);
            O(t),
                F(n),
                [...e.children].forEach((e, t) => {
                    "VIDEO" !== e.nodeName || ((e.currentTime = 0), t === n && (e.play(), U(!0)));
                });
        }, [M, b, y, O, m]),
        s.useEffect(() => {
            m && (w?.speaking ? D(S.TALKING) : v === S.TALKING && D(S.IDLE));
        }, [w, v, D, m]),
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
                    x + 13e3 < Date.now() &&
                    (D(S.HEAD_TURN), G(Date.now())));
        }, [k, n, x, D, m]),
        (0, r.jsxs)(T.D, {
            className: R.iE,
            style: { width: p.width, top: p.offset.top, left: u ? -p.offset.left : p.offset.left },
            onMouseEnter: () => E(!0),
            onMouseLeave: () => E(!1),
            onClick: (e) => {
                e.preventDefault(), e.stopPropagation();
                let t = (i.avatar + 1) % d.oo.length;
                0 === t && (t = 1), c.Ay.update(_.id, { avatar: t, seat: n?.id });
            },
            children: [
                (0, r.jsx)("div", { className: R.Fk, style: { height: 1.25 * p.height, width: 1.25 * p.width } }),
                L?.decoration != null &&
                    (0, r.jsx)(l.A, {
                        src: L.decoration[0],
                        className: o()(R.GG, { [R.UU]: u }),
                        autoPlay: m,
                        loop: m,
                        style: { width: p.width },
                    }),
                (0, r.jsx)("div", {
                    ref: f,
                    children: b.map((e, t) =>
                        (0, r.jsx)(
                            l.A,
                            {
                                style: { opacity: +(t === V), width: p.width },
                                src: e,
                                className: o()(R.GG, { [R.UU]: u }),
                                onEnded: () => {
                                    if (v === S.HEAD_TURN && L?.headTurn?.includes(e)) {
                                        D(S.HEAD_TURN_BACK);
                                        let e = setTimeout(() => {
                                            U(!1), g.current.delete(e);
                                        }, 2e3);
                                        g.current.add(e);
                                    } else v === S.HEAD_TURN_BACK && L?.headTurnBack?.includes(e) && D(S.IDLE), U(!1);
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
let v = (e) => {
    let { seats: t, participant: n, participants: i, channel: a, idle: l, enableAnimations: _ = !0 } = e,
        u = t.find((e) => e.claimedBy === n.userId),
        c = null != u,
        [E, h] = s.useState(!1),
        m = I(n),
        { x: f, y: g } = s.useMemo(() => {
            let e = { ...n.position };
            if (c) {
                let t = d.dG[u.id - 1];
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
                children: (0, r.jsx)(O, {
                    seats: t,
                    claimedSeat: u,
                    participant: n,
                    participants: i,
                    channel: a,
                    idle: l,
                    flip: f > 1080,
                    handleHover: (e) => h(e),
                    enableAnimations: _,
                }),
            }),
    });
};
var D = n(335827);
let L = (e) => {
    let {
            id: t,
            occupant: n,
            x: i,
            y: a,
            assetKey: l,
            onClick: d,
            skipNewUserEducation: _ = !1,
            shadowPosition: u,
        } = e,
        c = h(),
        E = s.useMemo(() => c?.seats[l], [c, l]),
        m = s.useMemo(() => E?.seat, [E]),
        f = s.useMemo(() => E?.shadow, [E]);
    return (0, r.jsx)(T.D, {
        "aria-label": "claim seat",
        onClick:
            null != d
                ? (e) => {
                      e.preventDefault(), e.stopPropagation(), d(t);
                  }
                : void 0,
        className: o()(D.am, { [D.Sf]: null != n }),
        style: { transform: `translate(${i}px, ${a}px)` },
        children: (0, r.jsxs)("div", {
            className: D.LU,
            children: [
                null != f &&
                    null != u &&
                    (0, r.jsx)("img", {
                        className: o()(D.Sl, D.r7),
                        style: { transform: `translate(${u.x}px, ${u.y}px)` },
                        src: E?.shadow,
                        alt: "",
                    }),
                null != m &&
                    (0, r.jsx)("img", {
                        onDragStart: (e) => e.preventDefault(),
                        className: o()(D.Sl, { [D.Sf]: null != n, [D.cb]: _ }),
                        style: { animationDelay: `${5500 + 150 * t}ms` },
                        src: E?.seat,
                        alt: "",
                    }),
            ],
        }),
    });
};
var b = n(933971);
let w = () => {
    let e = s.useRef(null),
        t = h(),
        [n, i] = s.useState(!1),
        [a, o] = s.useState([0, 0]),
        [d, _] = s.useState(0.5),
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
                            o([(0, A.random)(128, 1792), (0, A.random)(64, 360)]),
                            _((0, A.random)(0.15, 0.5)),
                            c((0, A.random)(-15, 15)),
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
            className: b.d,
            style: { transform: `translate(${a[0]}px, ${a[1]}px) scale(${E ? -1 * d : d}, ${d}) rotate(${u}deg)` },
            src: t?.misc["shooting-star"],
            loop: !1,
            onEnded: () => {
                i(!1);
            },
        })
    );
};
var P = n(683807);
let k = { width: 2180, height: 1536 },
    M = (e) => {
        let {
                roomSeats: t,
                roomParticipants: n,
                participants: i,
                channel: s,
                idle: a,
                showAmbientEffects: _ = !0,
                enableAnimations: u = !0,
                skipNewUserEducation: c = !1,
                onSeatClick: E,
                disableInteractions: m = !1,
            } = e,
            f = h();
        return null == f
            ? null
            : (0, r.jsxs)("div", {
                  className: P.cA,
                  children: [
                      (0, r.jsx)("img", { className: P.Tp, src: f.backgrounds.sky.static, alt: "", draggable: !1 }),
                      _ && (0, r.jsx)(w, {}),
                      (0, r.jsx)("img", {
                          className: P.Tp,
                          src: f.backgrounds.mountains.static,
                          alt: "",
                          draggable: !1,
                      }),
                      _ && (0, r.jsx)(p, {}),
                      (0, r.jsx)("img", { className: P.Tp, src: f.backgrounds.river.static, alt: "", draggable: !1 }),
                      _ &&
                          (0, r.jsx)(l.A, {
                              className: P.Ki,
                              style: { transform: "translate(779px, 1009px)" },
                              src: f.ambience.river.animated,
                              autoPlay: !0,
                              controls: !1,
                              loop: !0,
                          }),
                      (0, r.jsx)("img", { className: P.Tp, src: f.backgrounds.camp.static, alt: "", draggable: !1 }),
                      d.dG.map((e) =>
                          (0, r.jsx)(
                              L,
                              { occupant: t[e.id - 1]?.claimedBy, onClick: E, skipNewUserEducation: c, ...e },
                              e.id,
                          ),
                      ),
                      n.map((e) =>
                          (0, r.jsx)(
                              v,
                              { seats: t, participant: e, participants: i, channel: s, idle: a, enableAnimations: u },
                              e.userId,
                          ),
                      ),
                      _ &&
                          (0, r.jsxs)("div", {
                              className: o()(P.cA, P.ey),
                              children: [
                                  (0, r.jsx)(l.A, {
                                      className: P.Ki,
                                      style: { transform: "translate(1014px, 773px)" },
                                      src: f.ambience.fire.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                                  (0, r.jsx)(l.A, {
                                      className: P.Ki,
                                      src: f.ambience.fireflies.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                                  (0, r.jsx)(l.A, {
                                      className: P.Ki,
                                      style: { transform: "translate(0, 1216px)" },
                                      src: f.ambience.foliage_front.animated,
                                      autoPlay: !0,
                                      controls: !1,
                                      loop: !0,
                                  }),
                              ],
                          }),
                      m && (0, r.jsx)("div", { className: P.ps }),
                  ],
              });
    };

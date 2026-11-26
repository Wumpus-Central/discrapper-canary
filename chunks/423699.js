l.d(t, { A: () => e2 });
var n = l(477900),
    a = l(582128),
    i = l(621466),
    r = l(231723),
    s = l(939249),
    o = l(793574),
    c = l(688810),
    u = l(256905),
    d = l(635793),
    m = l(164386);
function f() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", { className: m.OC }),
            (0, n.jsx)("div", {
                className: m.f4,
                children: (0, n.jsxs)("div", {
                    className: m.fL,
                    children: [
                        (0, n.jsx)("div", { className: m.u }),
                        (0, n.jsx)("div", { className: m.ou }),
                        (0, n.jsx)("div", { className: m.PH }),
                    ],
                }),
            }),
        ],
    });
}
l(321073);
var h = l(503698),
    p = l.n(h),
    v = l(435558),
    x = l.n(v),
    g = l(194498),
    b = l(607470),
    j = l(602674),
    y = l(706409);
l(457538);
var C = l(176781),
    k = l(901127);
function N(e) {
    let { className: t } = e;
    return (0, n.jsx)("div", {
        className: p()(k.L, t),
        children: (0, n.jsx)(C.ClipsIcon, { size: "lg", color: "currentColor" }),
    });
}
var E = l(367974),
    w = l(376595),
    A = l(773503),
    I = l(923904);
let R = [],
    S = [];
function L() {
    let {
            subscribe: e,
            soundboardAudioEnabled: t,
            voiceAudioEnabled: l,
            mutedSpeakerIds: i,
            speakerVolumes: r,
            speakerMuteSupported: s,
            speakerVolumeSupported: o,
            clip: c,
        } = (0, I.T)(),
        u = c.decision?.timestamp ?? 0,
        d = a.useMemo(() => new w.H(c.timeline ?? []), [c.timeline]),
        m = u - c.length,
        f = a.useCallback(
            (e) => {
                let t = 1e3 * x().round(e, 3);
                return d.getEventsAtTimestamp(m + t);
            },
            [d, m],
        ),
        [h, p] = a.useState(() => f(0));
    a.useEffect(
        () =>
            e({
                onTimeUpdate: (e) => {
                    p(f(e));
                },
            }),
        [e, f],
    );
    let v = a.useMemo(
        () => (l ? h.speakingUserIds.filter((e) => !(s && i.includes(e)) && !(o && 0 === r[e])) : R),
        [l, i, r, s, o, h.speakingUserIds],
    );
    return (0, n.jsx)(A.A, {
        speakingUserIds: v,
        activeSoundboards: t ? h.activeSoundboards : S,
        userIds: c.users,
        guildId: c.guildId,
        channelId: c.channelId,
    });
}
var T = l(696016),
    M = l(933092),
    D = l(24468);
function O(e, t) {
    let {
        applicationAudioEnabled: l,
        voiceAudioEnabled: n,
        soundboardAudioEnabled: a,
        isVoiceClip: i,
        speakerVolumes: r,
        mutedSpeakerIds: s,
        applicationVolume: o,
        soundboardVolume: c,
    } = t;
    if (!i && Object.values(r).every((e) => 100 === e) && 100 === o && 100 === c && 0 === s.length && l && n && a)
        if (e.includes(T.gC.ALL)) return !1;
        else return !0;
    if (e.includes(T.gC.APPLICATION)) return !l;
    if (e.includes(T.gC.VOICE)) {
        let t = (0, y.V)(e);
        return !n || (null != t && s.includes(t));
    }
    return !e.includes(T.gC.SOUNDBOARD) || !a;
}
let P = new WeakMap();
function _(e) {
    let t = a.useRef(null),
        l = a.useRef(null),
        n = a.useRef(e),
        [i, r] = a.useState(!1),
        s = null != e,
        o = a.useCallback((e) => {
            ((t.current = e), r(null != e));
        }, []);
    return (
        a.useEffect(() => {
            n.current = e;
        }, [e]),
        a.useEffect(() => {
            let e = t.current;
            if (null == e || !s) return;
            let a = (0, j.v)();
            if (null == a) return;
            let i = P.get(e) ?? a.createMediaElementSource(e);
            P.set(e, i);
            let r = a.createGain();
            (null != n.current && (r.gain.value = n.current),
                (l.current = r),
                (e.volume = 1),
                i.connect(r),
                r.connect(a.destination));
            let o = async () => {
                if ("suspended" === a.state)
                    try {
                        await a.resume();
                    } catch (e) {}
            };
            return (
                o(),
                e.addEventListener("play", o),
                () => {
                    (e.removeEventListener("play", o), i.disconnect(), r.disconnect(), (l.current = null));
                }
            );
        }, [i, s]),
        a.useEffect(() => {
            null != e &&
                (null != l.current
                    ? (l.current.gain.value = e)
                    : null != t.current && (t.current.volume = Math.min(1, e)));
        }, [e, i, s]),
        o
    );
}
function z(e) {
    let { setRef: t, audioTrackLabel: l, src: i, muted: r, gain: s } = e,
        o = _(s),
        c = a.useCallback(
            (e) => {
                (o(e), t(e, l));
            },
            [o, t, l],
        ),
        u = a.useCallback(
            (e) => {
                Object.values(e.currentTarget.audioTracks).forEach((e) => {
                    e.enabled = l === e.label;
                });
            },
            [l],
        );
    return (0, n.jsx)("audio", {
        id: `ClipsPlayerAudioTrack:${l}`,
        ref: c,
        src: i ?? void 0,
        muted: r,
        preload: "auto",
        className: D.R,
        onLoadedMetadata: u,
    });
}
function $(e) {
    let { overlay: t, cropFraming: l, frameAspectRatio: i, loop: r = !0, ref: s } = e,
        {
            cropStart: o,
            cropEnd: c,
            setVideoPlayerRef: u,
            videoURL: d,
            audioURL: m,
            applicationAudioEnabled: f,
            voiceAudioEnabled: h,
            soundboardAudioEnabled: x,
            speakerVolumes: j,
            mutedSpeakerIds: C,
            applicationVolume: k,
            soundboardVolume: w,
            speakerVolumeSupported: A,
            speakerMuteSupported: R,
            clip: S,
        } = (0, I.T)(),
        P = _(A ? k / 100 : void 0),
        $ = a.useRef({}),
        U = a.useRef(null),
        G = a.useRef(!1),
        [V, B] = a.useState([]),
        X = a.useCallback(() => {
            let e = $.current.main;
            if (null == e) return;
            let t = (0, v.round)(e.currentTime, 3),
                l = (0, v.round)(o, 3);
            if (t >= (null != c ? (0, v.round)(c, 3) : (0, v.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values($.current)) null != e && (e.currentTime = o);
                return !0;
            }
        }, [o, c]),
        H = a.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(T.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(T.gC.VOICE) || l.label.includes(T.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            B(t);
        }, []),
        F = a.useCallback(() => {
            for (let e of ((G.current = !0), X(), Object.values($.current))) null != e && e.play();
        }, [X]),
        W = a.useCallback(() => {
            for (let e of Object.values($.current)) null != e && e.pause();
        }, []);
    (0, g.A)(() => {
        if (G.current) {
            if (!r) {
                let e = $.current.main;
                if (null != e) {
                    let t = null != c ? (0, v.round)(c, 3) : (0, v.round)(e.duration, 3);
                    if ((0, v.round)(e.currentTime, 3) >= t) {
                        (W(), (G.current = !1));
                        return;
                    }
                }
            }
            X() && F();
        }
    });
    let K = a.useCallback((e) => {
            for (let t of ($.current.main?.paused && (G.current = !1), Object.values($.current)))
                null != t && (t.currentTime = e);
        }, []),
        Y = a.useCallback(() => {
            $.current.main?.paused ? F() : W();
        }, [F, W]),
        Z = a.useCallback((e) => {
            $.current.main = e;
        }, []),
        Q = a.useCallback((e, t) => {
            $.current[t] = e;
        }, []),
        q = a.useCallback(
            (e) => {
                (($.current["main:application"] = e), P(e));
            },
            [P],
        );
    a.useImperativeHandle(s, () => {
        let e = { play: F, seek: K, pause: W, videoElement: $.current.main };
        return (u(e), e);
    }, [F, K, W, u]);
    let J = a.useCallback(() => {
        K(o);
    }, [K, o]);
    a.useLayoutEffect(() => {
        let e = $.current;
        return () => {
            for (let t of Object.values(e)) (0, E.A)(t);
        };
    }, []);
    let ee = S.type === T.nQ.VOICE_CLIP,
        et = {
            applicationAudioEnabled: f,
            voiceAudioEnabled: h,
            soundboardAudioEnabled: x,
            isVoiceClip: ee,
            speakerVolumes: A ? j : {},
            mutedSpeakerIds: R ? C : [],
            applicationVolume: A ? k : 100,
            soundboardVolume: A ? w : 100,
        },
        el = !0 === l && !ee && null != i;
    return (a.useLayoutEffect(() => {
        let e = U.current;
        if (null == e) return;
        if (!el) {
            ((e.style.width = ""), (e.style.height = ""));
            return;
        }
        function t() {
            let e = U.current,
                t = $.current.main;
            null != e &&
                null != t &&
                ((e.style.width = ""),
                (e.style.height = ""),
                (e.style.width = `${t.clientWidth}px`),
                (e.style.height = `${t.clientHeight}px`));
        }
        t();
        let l = e.parentElement;
        if (null == l) return;
        let n = new ResizeObserver(t);
        return (n.observe(l), () => n.disconnect());
    }, [el, i]),
    null == d)
        ? null
        : (0, n.jsxs)("div", {
              ref: U,
              className: p()(M.DV, el && M.Ln),
              children: [
                  ee
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("audio", { ref: Z, src: d, muted: !0, preload: "auto" }),
                                (0, n.jsx)(N, { className: M.Ap }),
                            ],
                        })
                      : (0, n.jsx)(b.A, {
                            onClick: Y,
                            className: p()(M.Ap, el && M.HU),
                            style: el ? { aspectRatio: i } : void 0,
                            ref: Z,
                            src: d,
                            muted: O(":all", et),
                            preload: "auto",
                            onLoadedData: J,
                        }),
                  (0, n.jsx)(L, {}),
                  t,
                  (0, n.jsx)("audio", {
                      id: "ClipsPlayerAudioTrack:application",
                      src: m ?? void 0,
                      muted: O(":application", et),
                      className: D.R,
                      preload: "auto",
                      ref: q,
                      onLoadedMetadata: H,
                  }),
                  V.map((e) =>
                      (0, n.jsx)(
                          z,
                          {
                              setRef: Q,
                              audioTrackLabel: e,
                              src: m,
                              gain: (function (e) {
                                  if (!A) return;
                                  let t = (0, y.V)(e);
                                  return null != t
                                      ? (j[t] ?? 100) / 100
                                      : e.includes(T.gC.SOUNDBOARD)
                                        ? w / 100
                                        : void 0;
                              })(e),
                              muted: O(e, et),
                          },
                          e,
                      ),
                  ),
              ],
          });
}
function U(e, t) {
    let l = e / 30;
    return (t && (l /= 10), l);
}
var G = l(22745);
function V() {
    let { clip: e } = (0, I.T)();
    return "" !== e.thumbnail
        ? (0, n.jsx)("img", { className: G.T, src: e.thumbnail, alt: "", "aria-hidden": !0 })
        : null;
}
var B = l(855986),
    X = l(342952),
    H = l(834730),
    F = l(866665),
    W = l(408278),
    K = l(548411),
    Y = l(778712),
    Z = l(429913),
    Q = l(47167),
    q = l(713654),
    J = l(769015),
    ee = l(145497),
    et = l(734057),
    el = l(71393),
    en = l(287809),
    ea = l(5377),
    ei = l(403362),
    er = l(818433),
    es = l(792996),
    eo = l(620828);
function ec(e) {
    let { icon: t, label: l } = e;
    return (0, n.jsxs)("div", {
        className: eo.Ho,
        children: [
            null != t && (0, n.jsx)("div", { className: eo.t8, children: t }),
            (0, n.jsx)(H.E, { variant: "body-xs/normal", color: "text-subtle", className: eo.Mk, children: l }),
        ],
    });
}
function eu(e) {
    let { onBack: t } = e,
        { clip: l } = (0, I.T)(),
        a = (0, Z.h)(l.applicationId),
        i = (0, B.yK)([en.default], () => l.users.map(en.default.getUser).filter(ei.Vq)),
        r = (0, B.bG)([el.A], () => (null != l.guildId ? el.A.getGuild(l.guildId) : null)),
        s = (0, B.bG)([et.A], () => (null != l.channelId ? et.A.getChannel(l.channelId) : null)),
        o = (0, Q.Ay)(s),
        c = null != s ? (0, q.gU)(s, r) : null,
        u = a?.name ?? l.applicationName,
        d =
            null != s && null != c
                ? (0, n.jsx)(c, { size: "custom", width: 16, height: 16, color: "currentColor" })
                : null;
    return (0, n.jsxs)("div", {
        className: eo.wx,
        children: [
            null != t &&
                (0, n.jsx)(F.m, {
                    position: "bottom",
                    text: es.intl.string(es.t["13/7kX"]),
                    children: (0, n.jsx)(W.K, {
                        onClick: t,
                        icon: K.ArrowLargeLeftIcon,
                        size: "md",
                        variant: "icon-only",
                        "aria-label": es.intl.string(es.t["13/7kX"]),
                    }),
                }),
            (0, n.jsxs)("div", {
                className: p()(eo.K5, null != t && eo.fr),
                children: [
                    (0, n.jsx)(er.A, { variant: "heading-lg/medium", className: eo.DD, asHeading: !0 }),
                    (0, n.jsxs)("div", {
                        className: eo.KW,
                        children: [
                            null != u &&
                                "" !== u &&
                                (0, n.jsx)(ec, {
                                    icon: null != a ? (0, n.jsx)(J.A, { game: a, size: J.M.XXSMALL }) : void 0,
                                    label: u,
                                }),
                            null != r &&
                                (0, n.jsx)(ec, { icon: (0, n.jsx)(ee.Ay, { guild: r, iconSize: 16 }), label: r.name }),
                            null != d && (0, n.jsx)(ec, { icon: d, label: o ?? "" }),
                            (0, n.jsx)(ec, { label: (0, ea.mk)(new Date(l.createdAt)) }),
                            i.length > 0 &&
                                (0, n.jsx)("div", {
                                    className: eo.Ho,
                                    children: (0, n.jsx)(X.A, { users: i, maxUsers: 10, size: Y._3.SIZE_16 }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var ed = l(973177);
let em = { [T.yz.ORIGINAL]: null, [T.yz.PORTRAIT_9_16]: 9 / 16, [T.yz.LANDSCAPE_16_9]: 16 / 9 };
function ef() {
    let { cropPreset: e, videoPlayerRef: t } = (0, I.T)(),
        l = a.useRef(null),
        i = a.useRef(null);
    return (
        a.useEffect(() => {
            let n = l.current;
            if (null == n) return;
            function a() {
                if (null == n) return;
                let l = n.parentElement,
                    a = i.current;
                if (null == l || null == a) return;
                let r = l.getBoundingClientRect(),
                    s = (t.current?.videoElement ?? l).getBoundingClientRect(),
                    o = s.left - r.left,
                    c = s.top - r.top,
                    u = em[e],
                    d = o,
                    m = c,
                    f = s.width,
                    h = s.height;
                (null != u &&
                    ((h = (f = Math.min(s.width, s.height * u)) / u),
                    (d = o + (s.width - f) / 2),
                    (m = c + (s.height - h) / 2)),
                    (a.style.left = `${d}px`),
                    (a.style.top = `${m}px`),
                    (a.style.width = `${f}px`),
                    (a.style.height = `${h}px`));
            }
            a();
            let r = new ResizeObserver(a);
            r.observe(n.parentElement ?? n);
            let s = t.current?.videoElement;
            return (
                null != s && r.observe(s),
                window.addEventListener("resize", a),
                () => {
                    (r.disconnect(), window.removeEventListener("resize", a));
                }
            );
        }, [e, t]),
        (0, n.jsx)("div", { ref: l, className: ed.pC, children: (0, n.jsx)("div", { ref: i, className: ed.E$ }) })
    );
}
var eh = l(831453),
    ep = l(607345);
let ev = [
    { key: "topStart", className: ep.On },
    { key: "topEnd", className: ep.zI },
    { key: "bottomEnd", className: ep.TP },
    { key: "bottomStart", className: ep.kb },
];
function ex(e) {
    let {
            label: t,
            position: l,
            rotationDeg: i,
            scale: r,
            minScale: o,
            maxScale: c,
            sizing: u,
            aspectRatio: d,
            resizable: m = !0,
            selected: f,
            visible: h,
            onSelect: x,
            onChange: g,
            children: b,
        } = e,
        j = a.useRef(null),
        y = a.useRef(null),
        C = a.useRef(null),
        k = a.useRef(l),
        N = a.useRef(i),
        E = a.useRef(r),
        w = a.useRef(d),
        A = a.useCallback(
            (e) => {
                let t,
                    l = y.current;
                if (null == l) return;
                let { x: n, y: a } = k.current;
                if (
                    ((l.style.left = `${e.left + n * e.width}px`),
                    (l.style.top = `${e.top + a * e.height}px`),
                    (l.style.transform = `translate(-50%, -50%) rotate(${N.current}deg)`),
                    "fixed" === u)
                ) {
                    ((t = E.current * e.width), (l.style.width = `${t}px`));
                    let n = w.current;
                    l.style.height = null != n && n > 0 ? `${t / n}px` : "auto";
                } else ((t = E.current * e.height), (l.style.fontSize = `${t}px`));
                l.style.setProperty("--clip-track-scale", `${t}px`);
            },
            [u],
        ),
        R = (function (e, t) {
            let { videoPlayerRef: l } = (0, I.T)(),
                n = a.useRef(null);
            return (
                a.useEffect(() => {
                    let a = e.current?.parentElement;
                    if (null == a) return;
                    function i() {
                        if (null == a) return;
                        let e = a.getBoundingClientRect(),
                            i = (l.current?.videoElement ?? a).getBoundingClientRect(),
                            r = { left: i.left - e.left, top: i.top - e.top, width: i.width, height: i.height };
                        ((n.current = r), t(r));
                    }
                    i();
                    let r = new ResizeObserver(i);
                    r.observe(a);
                    let s = l.current?.videoElement;
                    return (
                        null != s && r.observe(s),
                        window.addEventListener("resize", i),
                        () => {
                            (r.disconnect(), window.removeEventListener("resize", i));
                        }
                    );
                }, [e, t, l]),
                n
            );
        })(j, A);
    a.useEffect(() => {
        ((k.current = l), (N.current = i), (E.current = r), (w.current = d));
        let e = R.current;
        null != e && A(e);
    }, [l, i, r, d, A, R]);
    let S = a.useCallback(
            (e) => {
                let t = C.current,
                    l = R.current,
                    n = j.current?.getBoundingClientRect();
                if (null != t && null != l && null != n)
                    switch (t.mode) {
                        case "move":
                            g({
                                position: {
                                    x: (0, v.clamp)((e.clientX - n.left - l.left) / l.width - t.grabOffset.x, 0, 1),
                                    y: (0, v.clamp)((e.clientY - n.top - l.top) / l.height - t.grabOffset.y, 0, 1),
                                },
                            });
                            break;
                        case "scale": {
                            if (0 === t.startDistance) return;
                            let l = Math.hypot(e.clientX - t.centerX, e.clientY - t.centerY);
                            g({ scale: (0, v.clamp)((t.baseScale * l) / t.startDistance, o, c) });
                            break;
                        }
                        case "rotate": {
                            let l = eg(t.centerX, t.centerY, e.clientX, e.clientY);
                            g({ rotationDeg: (0, T.Ew)(t.baseRotationDeg + l - t.startAngleDeg) });
                        }
                    }
            },
            [g, o, c, R],
        ),
        L = a.useCallback(() => {
            C.current = null;
        }, []);
    a.useEffect(
        () => (
            document.addEventListener("mousemove", S),
            document.addEventListener("mouseup", L),
            () => {
                (document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", L));
            }
        ),
        [S, L],
    );
    let M = a.useCallback(
            (e) => (t) => {
                (t.stopPropagation(), t.preventDefault(), x(), y.current?.focus({ preventScroll: !0 }));
                let n = R.current,
                    a = j.current?.getBoundingClientRect();
                if (null == n || null == a || 0 === n.width || 0 === n.height) return;
                let s = a.left + n.left + l.x * n.width,
                    o = a.top + n.top + l.y * n.height;
                C.current = {
                    mode: e,
                    centerX: s,
                    centerY: o,
                    baseRotationDeg: i,
                    baseScale: r,
                    grabOffset: {
                        x: (t.clientX - a.left - n.left) / n.width - l.x,
                        y: (t.clientY - a.top - n.top) / n.height - l.y,
                    },
                    startDistance: Math.hypot(t.clientX - s, t.clientY - o),
                    startAngleDeg: eg(s, o, t.clientX, t.clientY),
                };
            },
            [x, l, i, r, R],
        ),
        D = a.useCallback(
            (e) => {
                if (e.altKey) {
                    let t = 0;
                    if ("ArrowLeft" === e.key) t = -1;
                    else {
                        if ("ArrowRight" !== e.key) return;
                        t = 1;
                    }
                    (e.preventDefault(), e.stopPropagation(), g({ rotationDeg: (0, T.Ew)(i + 15 * t) }));
                    return;
                }
                let t = e.shiftKey ? 0.05 : 0.01,
                    n = 0,
                    a = 0;
                switch (e.key) {
                    case "ArrowLeft":
                        n = -t;
                        break;
                    case "ArrowRight":
                        n = t;
                        break;
                    case "ArrowUp":
                        a = -t;
                        break;
                    case "ArrowDown":
                        a = t;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(),
                    e.stopPropagation(),
                    g({ position: { x: (0, v.clamp)(l.x + n, 0, 1), y: (0, v.clamp)(l.y + a, 0, 1) } }));
            },
            [g, l, i],
        );
    return (0, n.jsx)("div", {
        ref: j,
        className: ep.DW,
        children: (0, n.jsxs)(s.D, {
            innerRef: y,
            className: p()(ep.aP, { [ep.$A]: f }),
            style: { display: h ? void 0 : "none" },
            "aria-label": t,
            "aria-keyshortcuts": "Alt+ArrowLeft Alt+ArrowRight",
            onClick: x,
            onMouseDown: M("move"),
            onKeyDown: D,
            children: [
                b,
                f &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { "aria-hidden": !0, className: ep.t$ }),
                            (0, n.jsx)("div", {
                                "aria-hidden": !0,
                                className: ep.oT,
                                onMouseDown: M("rotate"),
                                children: (0, n.jsx)(eh.RotateIcon, { size: "xxs", color: "currentColor" }),
                            }),
                            m &&
                                ev.map((e) => {
                                    let { key: t, className: l } = e;
                                    return (0, n.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: p()(ep.ZV, l), onMouseDown: M("scale") },
                                        t,
                                    );
                                }),
                        ],
                    }),
            ],
        }),
    });
}
function eg(e, t, l, n) {
    return (180 * Math.atan2(n - t, l - e)) / Math.PI;
}
var eb = l(1093),
    ej = l(683825),
    ey = l(545052);
function eC(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { useCurrentTime: r } = (0, I.T)(),
        { updateImageTrackData: s } = (0, eb.fn)(),
        o = r(),
        { src: c, position: u, rotationDeg: d, widthFraction: m, naturalWidth: f, naturalHeight: h } = t.data,
        p = t.data.shadow ?? "none",
        v = t.data.shadowColor ?? T.pk,
        x = a.useCallback(
            (e) => {
                let { position: l, rotationDeg: n, scale: a } = e;
                s(t.id, (e) => ({
                    ...e,
                    position: l ?? e.position,
                    rotationDeg: n ?? e.rotationDeg,
                    widthFraction: a ?? e.widthFraction,
                }));
            },
            [s, t.id],
        ),
        g = o >= t.startSec - 0.05 && o <= t.endSec + 0.05,
        b = T.EC[p],
        j =
            b > 0
                ? `drop-shadow(0 calc(${0.4 * b} * var(--clip-track-scale)) calc(${b} * var(--clip-track-scale)) ${v})`
                : void 0;
    return (0, n.jsx)(ex, {
        label: es.intl.formatToPlainString(ej.default.lZuIri, { fileName: t.data.fileName }),
        position: u,
        rotationDeg: d,
        scale: m,
        minScale: 0.02,
        maxScale: 2,
        sizing: "fixed",
        aspectRatio: f / h,
        selected: l,
        visible: g,
        onSelect: i,
        onChange: x,
        children: (0, n.jsx)("img", {
            className: ey.S,
            src: c,
            alt: "",
            "aria-hidden": !0,
            draggable: !1,
            style: { filter: j },
        }),
    });
}
var ek = l(637526);
function eN(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { useCurrentTime: r } = (0, I.T)(),
        { updateTextTrackData: s } = (0, eb.fn)(),
        o = r(),
        { text: c, position: u, style: d } = t.data,
        m = t.data.rotationDeg ?? 0,
        f = a.useCallback(
            (e) => {
                let { position: l, rotationDeg: n, scale: a } = e;
                s(t.id, (e) => ({
                    ...e,
                    position: l ?? e.position,
                    rotationDeg: n ?? e.rotationDeg,
                    style: null != a ? { ...e.style, fontSize: a } : e.style,
                }));
            },
            [s, t.id],
        ),
        h = o >= t.startSec - 0.05 && o <= t.endSec + 0.05,
        p = T.mO[d.strokeWidth];
    return (0, n.jsxs)(ex, {
        label: es.intl.formatToPlainString(ej.default.EDmwVf, { text: c }),
        position: u,
        rotationDeg: m,
        scale: d.fontSize,
        minScale: 0.015,
        maxScale: 0.5,
        sizing: "content",
        resizable: !1,
        selected: l,
        visible: h,
        onSelect: i,
        onChange: f,
        children: [
            p > 0 &&
                (0, n.jsx)("span", {
                    "aria-hidden": !0,
                    className: ek.C,
                    style: {
                        color: d.strokeColor,
                        WebkitTextStrokeColor: d.strokeColor,
                        WebkitTextStrokeWidth: `${p}em`,
                    },
                    children: c,
                }),
            (0, n.jsx)("span", { className: ek.L, style: { color: d.color }, children: c }),
        ],
    });
}
var eE = l(164636),
    ew = l(461150),
    eA = l(782134),
    eI = l(113494),
    eR = l(898196),
    eS = l(559106),
    eL = l(765671),
    eT = l(531685);
(l(323874), l(14289), l(35956), l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162));
var eM = l(646514),
    eD = l(602853),
    eO = l(335416),
    eP = l(556250);
let e_ = new Map(),
    ez = a.memo(function (e) {
        let { clipId: t, voiceAudioTracks: i, onMouseDown: r, className: s, alwaysRenderContainer: o = !1 } = e,
            c = a.useRef(null),
            { ref: u, width: d, height: m } = (0, eL.Ay)(),
            [f, h] = a.useState(null),
            v = (0, eD.r)(eM.A.colors.BACKGROUND_MOD_STRONG).hex();
        return (a.useEffect(
            () => (
                (c.current = new Worker(new URL("/assets/" + l.u(33197), l.b))),
                () => {
                    c.current?.terminate();
                }
            ),
            [],
        ),
        a.useEffect(() => {
            if (0 === d || 0 === i.length || null == c.current) return;
            let e = `${t}-${i.map((e) => e.trackName).join(",")}-${d}`,
                l = e_.get(e);
            if (null != l) return void h(l.waveform);
            let n = c.current,
                a = !1;
            function r(t) {
                if (a) return;
                let { waveform: l, error: n } = t.data;
                null != n ? T.GU.error("Failed to load waveform:", n) : (e_.set(e, { waveform: l }), h(l));
            }
            return (
                n.addEventListener("message", r),
                !(async function () {
                    try {
                        let e = (0, j.v)();
                        if (null == e) throw Error("Failed to create audio context");
                        let t = await Promise.all(i.map((t) => e.decodeAudioData(t.arrayBuffer.slice(0))));
                        if (a) return;
                        let l = [],
                            r = [];
                        for (let e of t) {
                            let t = [];
                            for (let l = 0; l < e.numberOfChannels; l++) {
                                let n = new Float32Array(e.getChannelData(l));
                                (t.push(n), r.push(n.buffer));
                            }
                            l.push(t);
                        }
                        n.postMessage({ trackChannels: l, width: d }, r);
                    } catch (e) {
                        a || T.GU.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    ((a = !0), n.removeEventListener("message", r));
                }
            );
        }, [i, t, d]),
        a.useEffect(() => {
            if (null == u.current || null == f || (d ?? 0) === 0 || (m ?? 0) === 0) return;
            let e = u.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: n } = e,
                a = l / f.length,
                i = -(a * (eO.Jh.waveformBarWidth - 1));
            (t.clearRect(0, 0, l, n), (t.fillStyle = v));
            for (let e = 0; e < f.length; e++) {
                let l = f[e] * n,
                    r = e * a + i;
                t.fillRect(r, n, a - i, -l);
            }
        }, [v, d, u, m, f]),
        0 === i.length)
            ? o
                ? (0, n.jsx)("div", { className: p()(eP.k, s), onMouseDown: r })
                : null
            : (0, n.jsx)("div", {
                  className: p()(eP.k, s),
                  children: (0, n.jsx)("canvas", {
                      className: eP.s,
                      ref: u,
                      width: (d ?? 0) * 2,
                      height: (m ?? 0) * 2,
                      onMouseDown: r,
                  }),
              });
    });
var e$ = l(683063),
    eU = l(565645),
    eG = l(562153),
    eV = l(608333),
    eB = l(931540);
function eX(e, t) {
    return (0, eV.$b)(e, t.type, t.type === T.Gy.GAME_EVENT ? t.eventName : void 0);
}
function eH(e) {
    return { timestamp: e.peakMs, signal: { type: e.type, userId: e.userId, confidence: e.peakConfidence } };
}
function eF(e) {
    let { icon: t, title: l, body: a, position: i, compact: r } = e;
    return (0, n.jsx)(e$.u, {
        title: l,
        body: a,
        position: "top",
        children: (0, n.jsx)("div", {
            className: p()(eB.H, { [eB.c]: r }),
            style: { left: `${i}%` },
            children: (0, n.jsx)(t, { size: "refresh_sm", color: eM.A.colors.ICON_DEFAULT }),
        }),
    });
}
let eW = { [T.Gy.LAUGHTER]: ej.default.bTC23D, [T.Gy.SHOUTING]: ej.default["3gqpuo"] };
function eK(e) {
    let { icon: t, signal: l, guildId: a, position: i, compact: r } = e,
        s = (0, B.bG)([en.default], () => en.default.getUser(l.userId)),
        o = (0, eG.tx)(a, null, s);
    return null == l.emojiId && null == l.emojiName
        ? (0, n.jsx)(eF, { icon: t, title: l.name, body: o, position: i, compact: r })
        : (0, n.jsx)(e$.u, {
              title: l.name,
              body: o,
              position: "top",
              children: (0, n.jsx)("div", {
                  className: p()(eB.H, { [eB.c]: r }),
                  style: { left: `${i}%` },
                  children: (0, n.jsx)(eU.A, {
                      emojiId: l.emojiId ?? null,
                      emojiName: l.emojiName ?? null,
                      animated: l.emojiAnimated,
                      size: "reaction",
                  }),
              }),
          });
}
let eY = a.memo(function (e) {
    let { clip: t, videoLength: l, compact: i = !1 } = e,
        r = t.audioEvents,
        s = t.applicationId,
        o = a.useMemo(() => {
            let e = t.timeline.filter(
                (e) => !e.signal.hiddenFromTimeline && !(e.signal.type === T.Gy.SOUNDBOARD && !e.signal.playing),
            );
            return (
                null != r
                    ? (e = e.filter((e) => {
                          var t;
                          return (t = e.signal.type) !== T.Gy.LAUGHTER && t !== T.Gy.SHOUTING;
                      })).push(...r.map(eH))
                    : (e = (function (e) {
                          let t = e
                                  .filter((e) => e.signal.type === T.Gy.LAUGHTER && e.signal.confidence > 0.8)
                                  .sort((e, t) => e.timestamp - t.timestamp),
                              l = new Set(),
                              n = 0;
                          for (let e = 1; e <= t.length; e++)
                              (e < t.length && t[e].timestamp - t[e - 1].timestamp < 2500) ||
                                  (e - n >= 2 && l.add(t[e - 1]), (n = e));
                          return e.filter((e) => e.signal.type !== T.Gy.LAUGHTER || l.has(e));
                      })(e)),
                (e = e.filter((e) => eX(s, e.signal) > 0)).sort((e, t) => e.timestamp - t.timestamp),
                e.sort((e, t) => eX(s, t.signal) - eX(s, e.signal)),
                e
            );
        }, [t.timeline, r, s]);
    function c(e) {
        if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
        let n = (e - (t.decision?.timestamp - t.length)) / 1e3;
        return n < 0 || n > l ? null : (n / l) * 100;
    }
    let u = [],
        d = [];
    for (let e of o) {
        let t = c(e.timestamp);
        null != t && (d.some((e) => 3 > Math.abs(e - t)) || (u.push(e), d.push(t)));
    }
    return u.map(function (e) {
        var l, a;
        if (e.signal.hiddenFromTimeline) return null;
        let r = c(e.timestamp);
        if (null == r) return null;
        let o = ((l = e.signal), (0, eV.u6)(s, l.type, l.type === T.Gy.GAME_EVENT ? l.eventName : void 0));
        if (null == o) return null;
        let u = `${e.timestamp}-${e.signal.type}`;
        switch (e.signal.type) {
            case T.Gy.LAUGHTER:
            case T.Gy.SHOUTING:
                return (0, n.jsx)(
                    eF,
                    {
                        icon: o,
                        title: es.intl.string(eW[e.signal.type]),
                        body: es.intl.string(ej.default.Ek6GZO),
                        position: r,
                        compact: i,
                    },
                    u,
                );
            case T.Gy.GAME_EVENT:
                return (0, n.jsx)(
                    eF,
                    {
                        icon: o,
                        title:
                            ((a = e.signal),
                            (0, eV.PZ)(s, a.type, a.type === T.Gy.GAME_EVENT ? a.eventName : void 0) ?? ""),
                        body: es.intl.string(ej.default["347DBb"]),
                        position: r,
                        compact: i,
                    },
                    `${u}-${e.signal.eventName ?? ""}`,
                );
            case T.Gy.SOUNDBOARD:
                if (!e.signal.playing) return null;
                return (0, n.jsx)(eK, { icon: o, signal: e.signal, guildId: t.guildId, position: r, compact: i }, u);
            default:
                return null;
        }
    });
});
var eZ = l(590936);
let eQ = a.memo(function (e) {
    let { videoLength: t, clip: l, onMouseDown: i, noBottomMargin: r = !1, compact: s = !1 } = e,
        { timeNotches: o, subNotches: c } = a.useMemo(() => {
            let e;
            if (null == t || t <= 0) return { timeNotches: [], subNotches: [] };
            let l = [],
                n = t / 6;
            e =
                n <= 1
                    ? 1
                    : n <= 2
                      ? 2
                      : n <= 5
                        ? 5
                        : n <= 10
                          ? 10
                          : n <= 15
                            ? 15
                            : n <= 20
                              ? 20
                              : n <= 30
                                ? 30
                                : 10 * Math.round(n / 10);
            for (let n = 0; n <= t; n += e) {
                let e = (n / t) * 100;
                l.push({ time: n, position: e });
            }
            (0 === l.length || l[l.length - 1].time < t - 2) && l.push({ time: t, position: 100 });
            let a = [],
                i = e / 5;
            for (let e = i; e < t; e += i)
                if (!l.some((t) => 0.01 > Math.abs(t.time - e))) {
                    let l = (e / t) * 100;
                    a.push({ position: l });
                }
            return { timeNotches: l, subNotches: a };
        }, [t]);
    return (0, n.jsx)("div", {
        className: p()(eZ.ZX, { [eZ.dZ]: r, [eZ.oE]: s }),
        onMouseDown: i,
        children: (0, n.jsxs)("div", {
            className: eZ.QY,
            children: [
                c.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: eZ.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, n.jsx)("div", { className: eZ.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                o.map((e, t) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: eZ.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, n.jsx)("div", { className: eZ.d9 }),
                                (0, n.jsxs)(H.E, {
                                    variant: "footnote/normal",
                                    color: "text-muted",
                                    className: eZ.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, n.jsx)(eY, { clip: l, videoLength: t, compact: s }),
            ],
        }),
    });
});
var eq = l(765548),
    eJ = l(591246);
function e0(e) {
    let {
            label: t,
            text: l,
            color: i,
            startSec: r,
            endSec: o,
            totalDurationSec: c,
            selected: u,
            onSelect: d,
            onChangeRange: m,
        } = e,
        f = a.useRef(null),
        h = a.useRef(null),
        [x, g] = a.useState(null),
        b = a.useCallback(() => {
            let e = f.current;
            if (null == e) return 0;
            let t = e.getBoundingClientRect();
            return 0 === t.width ? 0 : c / t.width;
        }, [c]),
        j = (0, eq.A)((e) => {
            let t = h.current;
            if (null == t) return;
            let l = (e.clientX - t.clientX) * b();
            if ("start" === t.mode) m((0, v.clamp)(t.initialStart + l, 0, t.initialEnd - 1), t.initialEnd);
            else if ("end" === t.mode) {
                let e = (0, v.clamp)(t.initialEnd + l, t.initialStart + 1, c);
                m(t.initialStart, e);
            } else {
                let e = t.initialEnd - t.initialStart,
                    n = (0, v.clamp)(t.initialStart + l, 0, c - e);
                m(n, n + e);
            }
        }),
        y = a.useCallback(() => {
            ((h.current = null), g(null));
        }, []);
    a.useEffect(() => {
        if (null != x)
            return (
                document.addEventListener("mousemove", j),
                document.addEventListener("mouseup", y),
                () => {
                    (document.removeEventListener("mousemove", j), document.removeEventListener("mouseup", y));
                }
            );
    }, [x, j, y]);
    let C = a.useCallback(
            (e) => (t) => {
                (t.stopPropagation(),
                    d(),
                    (h.current = { mode: e, clientX: t.clientX, initialStart: r, initialEnd: o }),
                    g(e));
            },
            [d, r, o],
        ),
        k = a.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = o - r,
                    n = !1,
                    a = r;
                ("ArrowLeft" === e.key
                    ? ((n = !0), (a = (0, v.clamp)(r - t, 0, c - l)))
                    : "ArrowRight" === e.key && ((n = !0), (a = (0, v.clamp)(r + t, 0, c - l))),
                    n && (e.preventDefault(), e.stopPropagation(), m(a, a + l)));
            },
            [r, o, c, m],
        ),
        N = a.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    n = r;
                ("ArrowLeft" === e.key
                    ? ((l = !0), (n = (0, v.clamp)(r - t, 0, o - 1)))
                    : "ArrowRight" === e.key && ((l = !0), (n = (0, v.clamp)(r + t, 0, o - 1))),
                    l && (e.preventDefault(), e.stopPropagation(), m(n, o)));
            },
            [r, o, m],
        ),
        E = a.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    n = o;
                ("ArrowLeft" === e.key
                    ? ((l = !0), (n = (0, v.clamp)(o - t, r + 1, c)))
                    : "ArrowRight" === e.key && ((l = !0), (n = (0, v.clamp)(o + t, r + 1, c))),
                    l && (e.preventDefault(), e.stopPropagation(), m(r, n)));
            },
            [r, o, c, m],
        ),
        w = 0 === c ? 0 : (r / c) * 100,
        A = 0 === c ? 0 : ((o - r) / c) * 100;
    return (0, n.jsx)("div", {
        className: eJ.nM,
        children: (0, n.jsxs)("div", {
            ref: f,
            className: eJ.hz,
            children: [
                (0, n.jsx)(eS.vN, {
                    children: (0, n.jsx)(s.D, {
                        className: p()(eJ.u4, { [eJ.jX]: u }),
                        style: { left: `${w}%`, width: `${A}%`, backgroundColor: i },
                        onMouseDown: C("move"),
                        onKeyDown: k,
                        "aria-label": t,
                        children: (0, n.jsx)("div", {
                            className: eJ.Kq,
                            children: (0, n.jsx)(H.E, {
                                variant: "body-sm/medium",
                                color: "none",
                                className: eJ.Vd,
                                children: l,
                            }),
                        }),
                    }),
                }),
                (0, n.jsx)(eS.vN, {
                    children: (0, n.jsx)("button", {
                        className: eJ.YQ,
                        style: { left: `${w}%` },
                        onMouseDown: C("start"),
                        onKeyDown: N,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": 0,
                        "aria-valuenow": r,
                        "aria-valuemax": o - 1,
                        "aria-label": t,
                        children: (0, n.jsx)("div", { className: eJ.gt }),
                    }),
                }),
                (0, n.jsx)(eS.vN, {
                    children: (0, n.jsx)("button", {
                        className: eJ.JZ,
                        style: { left: `${w + A}%` },
                        onMouseDown: C("end"),
                        onKeyDown: E,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": r + 1,
                        "aria-valuenow": o,
                        "aria-valuemax": c,
                        "aria-label": t,
                        children: (0, n.jsx)("div", { className: eJ.gt }),
                    }),
                }),
            ],
        }),
    });
}
var e1 = l(302034),
    e5 = l(503535);
function e3(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        n = Math.floor((e % 1) * 100);
    return ((t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (n = n < 10 ? "0" + n : n), `${t}:${l}.${n}`);
}
function e9(e) {
    let t = Math.floor(e / 60),
        l = es.intl.formatToPlainString(es.t.iXLF9W, { minutes: t }),
        n = es.intl.formatToPlainString(es.t.geSp4K, { seconds: e % 60 });
    return `${l} ${n}`;
}
function e6(e) {
    let { voiceAudioTracks: t, transitionState: l } = e,
        {
            useCurrentTime: i,
            duration: r,
            isPlaying: s,
            cropStart: o,
            cropEnd: c,
            cropDuration: u,
            setCropStart: d,
            setCropEnd: m,
            play: f,
            pause: h,
            subscribe: x,
            seek: g,
            clip: b,
            generateThumbnails: j,
            videoDimensions: y,
        } = (0, I.T)(),
        { tracks: C, selectedTrackId: k, setSelectedTrackId: N, updateTrackRange: E } = (0, eb.fn)(),
        w = i(),
        [A, R] = a.useState(null),
        S = a.useRef(null),
        L = a.useRef(null),
        [M, D] = a.useState(!1),
        [O, P] = a.useState(null);
    a.useEffect(
        () =>
            x({
                onPlay: () => {
                    (R(null), D(!1));
                },
            }),
        [x],
    );
    let { ref: _, width: z = 0, height: $ = 0 } = (0, eL.Ay)(),
        G = (0, eE.bG)([eT.A], () => eT.A.windowSize()),
        V = a.useRef(null),
        B = a.useCallback(() => {
            let e = _.current;
            null != e && P(e.getBoundingClientRect());
        }, [_]);
    (a.useMemo(() => {
        (G.width, G.height, B());
    }, [G.width, G.height, z, l, B]),
        a.useEffect(() => {
            let e = V.current;
            if (null != e) return (e.addEventListener("scroll", B), () => e.removeEventListener("scroll", B));
        }, [B]));
    let X = a.useCallback(
            (e, t) => {
                if (null == r || null == O) return;
                let l = (((0, v.clamp)(e, O.left, O.right) - O.left) / O.width) * r,
                    n = (0, v.clamp)(l, 0, r),
                    a = A;
                (null == a && t && ((a = "playhead"), s && (h(), D(!0)), R(a)),
                    "start" === a ? d(n) : "end" === a ? m(n) : "playhead" === a && g((0, v.clamp)(n, o, c)));
            },
            [r, O, A, o, c, s, h, d, m, g],
        ),
        F = a.useCallback(
            (e) => {
                if (null == r) return;
                let t = U(r, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        ((l = !0), d(o - t));
                        break;
                    case "ArrowRight":
                        ((l = !0), d(o + t));
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [r, d, o],
        ),
        K = a.useCallback(
            (e) => {
                if (null == r) return;
                let t = U(r, e.shiftKey),
                    l = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        ((l = !0), m(c - t));
                        break;
                    case "ArrowRight":
                        ((l = !0), m(c + t));
                }
                l && (e.stopPropagation(), e.preventDefault());
            },
            [r, m, c],
        ),
        Y = a.useCallback(
            (e) => {
                X(e.clientX, !0);
            },
            [X],
        ),
        Z = a.useCallback(
            (e) => (t) => {
                (t.stopPropagation(), s && (h(), D(!0)), R(e));
            },
            [s, h],
        ),
        Q = a.useCallback(
            (e) => {
                X(e.clientX, !1);
            },
            [X],
        ),
        q = a.useCallback(() => {
            (M && f(), D(!1), R(null));
        }, [M, f]);
    a.useEffect(
        () => (
            document.addEventListener("mousemove", Q),
            document.addEventListener("mouseup", q),
            () => {
                (document.removeEventListener("mousemove", Q), document.removeEventListener("mouseup", q));
            }
        ),
        [Q, q],
    );
    let { numberOfPreviews: J, timelinePreviewWidth: ee } = a.useMemo(() => {
        if (null == y) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil($ * (y.width / y.height));
        return { numberOfPreviews: Math.ceil(z / e), timelinePreviewWidth: e };
    }, [$, z, y]);
    a.useEffect(() => {
        if (0 === J || 0 === ee) return;
        let e = _.current;
        if (null == e) return;
        ((e.height = $), (e.width = z));
        let t = e.getContext("2d");
        if (null == t) return;
        ((t.fillStyle = "transparent"), t.fillRect(0, 0, z, $));
        let l = [];
        for (let e = 0; e < J; e++) l.push((ee / z) * r * e);
        return j(l, ee, $, (e) => {
            for (let l = 0; l < e.length; l++) (t.drawImage(e[l], ee * l, 0, ee, $), e[l].close());
        });
    }, [$, _, r, J, ee, j, z]);
    let et = w - o,
        el = a.useCallback(() => {
            g(Math.max(o, w - 10));
        }, [o, w, g]),
        en = a.useCallback(() => {
            g(Math.min(c, w + 10));
        }, [c, w, g]),
        ea = a.useCallback(() => {
            s ? h() : f();
        }, [s, f, h]),
        ei = (o / r) * 100,
        er = (1 - (r - c) / r) * 100,
        eo = {
            background: `linear-gradient(to right, var(--black-500) ${ei}%, transparent ${ei}%, transparent ${er}%, var(--black-500) ${er}%)`,
        };
    return (0, n.jsxs)("div", {
        className: e5.f4,
        children: [
            (0, n.jsx)("div", { className: e5.qs }),
            (0, n.jsxs)("div", {
                className: e5.lx,
                children: [
                    (0, n.jsx)("div", {
                        className: e5.k2,
                        children: (0, n.jsx)("div", {
                            ref: L,
                            className: e5.re,
                            children: (0, n.jsxs)(H.E, {
                                variant: "body-xs/medium",
                                className: e5.g7,
                                color: "text-muted",
                                children: [
                                    (0, n.jsx)("span", { className: e5.$k, children: e3(et) }),
                                    (0, n.jsx)("span", { className: e5.xW, children: " / " }),
                                    e3(u),
                                ],
                            }),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: e5.s2,
                        children: [
                            (0, n.jsx)(W.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: ew.SkipBackwardIcon,
                                onClick: el,
                                "aria-label": es.intl.string(e1.default["dRVF+Z"]),
                            }),
                            (0, n.jsx)(W.K, {
                                size: "sm",
                                icon: s ? eI.PauseIcon : eA.PlayIcon,
                                onClick: ea,
                                "aria-label": es.intl.string(s ? es.t.ZcgDJX : es.t.RscU7I),
                                variant: "icon-only",
                            }),
                            (0, n.jsx)(W.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: eR.SkipForwardIcon,
                                onClick: en,
                                "aria-label": es.intl.string(e1.default.yV2FLL),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: e5.fL,
                ref: V,
                children: [
                    (0, n.jsx)(eQ, { onMouseDown: Y, videoLength: r, clip: b, noBottomMargin: !0, compact: !0 }),
                    (0, n.jsx)(ez, {
                        onMouseDown: Y,
                        voiceAudioTracks: t,
                        clipId: b.id,
                        className: e5.ou,
                        alwaysRenderContainer: !0,
                    }),
                    (0, n.jsx)("div", {
                        className: e5.iI,
                        children: (0, n.jsxs)("div", {
                            className: e5.Qp,
                            children: [
                                (0, n.jsx)("div", { className: e5.bd }),
                                (0, n.jsx)("div", {
                                    className: e5.PH,
                                    children: (0, n.jsxs)("div", {
                                        className: p()(e5.IO, { [e5.Dg]: null != A }),
                                        onMouseDown: Y,
                                        children: [
                                            (0, n.jsx)("canvas", { className: e5.Ay, ref: _ }),
                                            (0, n.jsx)(eS.vN, {
                                                children: (0, n.jsx)("div", {
                                                    tabIndex: 0,
                                                    ref: S,
                                                    className: e5.lG,
                                                    children: (0, n.jsx)("svg", {
                                                        className: e5.$6,
                                                        width: "10",
                                                        height: "7.5",
                                                        viewBox: "0 0 8 6",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0, n.jsx)("path", {
                                                            d: "M0 0.999999C0 0.447714 0.447715 0 1 0H7C7.55228 0 8 0.447715 8 1V2.5998C8 2.9209 7.8458 3.22248 7.58549 3.41048L4.58549 5.57715C4.23598 5.82957 3.76402 5.82957 3.41451 5.57715L0.41451 3.41048C0.154198 3.22248 0 2.9209 0 2.5998V0.999999Z",
                                                            fill: "currentColor",
                                                        }),
                                                    }),
                                                }),
                                            }),
                                            (0, n.jsx)("div", { className: e5.QT, style: eo }),
                                            (0, n.jsxs)("div", {
                                                className: e5.Ws,
                                                style: {
                                                    left: null != r ? `${(o / r) * 100}%` : "0",
                                                    right: null != r ? `${((r - c) / r) * 100}%` : "0",
                                                },
                                                children: [
                                                    (0, n.jsx)(eS.vN, {
                                                        children: (0, n.jsxs)("button", {
                                                            className: e5.uI,
                                                            onMouseDown: Z("start"),
                                                            onKeyDown: F,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": 0,
                                                            "aria-valuenow": o,
                                                            "aria-valuetext": e9(o),
                                                            "aria-valuemax": c - 0.1,
                                                            "aria-label": es.intl.string(es.t["+BTvw8"]),
                                                            children: [
                                                                (0, n.jsx)("div", { className: e5.FV }),
                                                                (0, n.jsxs)("svg", {
                                                                    className: e5.lm,
                                                                    width: "8",
                                                                    height: "56",
                                                                    viewBox: "0 0 8 56",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    "aria-hidden": !0,
                                                                    children: [
                                                                        (0, n.jsx)("path", {
                                                                            d: "M0 48C1.93283e-07 52.4183 3.58172 56 8 56H0V48Z",
                                                                        }),
                                                                        (0, n.jsx)("path", {
                                                                            d: "M8 0C3.58172 0 0 3.58172 0 8V0H8Z",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, n.jsx)(eS.vN, {
                                                        children: (0, n.jsxs)("button", {
                                                            className: e5.H1,
                                                            onMouseDown: Z("end"),
                                                            onKeyDown: K,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": o + 0.1,
                                                            "aria-valuenow": c,
                                                            "aria-valuetext": e9(c),
                                                            "aria-valuemax": r,
                                                            "aria-label": es.intl.string(es.t.bBgBYo),
                                                            children: [
                                                                (0, n.jsx)("div", { className: e5.kn }),
                                                                (0, n.jsxs)("svg", {
                                                                    className: e5.mN,
                                                                    width: "8",
                                                                    height: "56",
                                                                    viewBox: "0 0 8 56",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    "aria-hidden": !0,
                                                                    children: [
                                                                        (0, n.jsx)("path", {
                                                                            d: "M8 48C8 52.4183 4.41828 56 0 56H8V48Z",
                                                                        }),
                                                                        (0, n.jsx)("path", {
                                                                            d: "M0 0C4.41828 0 8 3.58172 8 8V0H0Z",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                C.map((e) =>
                                    (0, n.jsx)(
                                        e0,
                                        {
                                            label: (function (e) {
                                                switch (e) {
                                                    case T.Me.TEXT:
                                                        return es.intl.string(ej.default.WvkbtB);
                                                    case T.Me.IMAGE:
                                                        return es.intl.string(ej.default.heHHUW);
                                                    default:
                                                        return "";
                                                }
                                            })(e.type),
                                            text: (function (e) {
                                                switch (e.type) {
                                                    case T.Me.TEXT:
                                                        return e.data.text;
                                                    case T.Me.IMAGE:
                                                        return e.data.fileName;
                                                    default:
                                                        return "";
                                                }
                                            })(e),
                                            color: T.mY[e.type],
                                            startSec: e.startSec,
                                            endSec: e.endSec,
                                            totalDurationSec: r,
                                            selected: k === e.id,
                                            onSelect: () => N(e.id),
                                            onChangeRange: (t, l) => E(e.id, t, l),
                                        },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
function e2(e) {
    let { transitionState: t, onBack: l } = e,
        {
            cropStart: m,
            cropEnd: h,
            videoPlayerRef: p,
            videoURL: v,
            audioTracks: x,
            clip: g,
            activeTool: b,
            cropPreset: j,
            videoDimensions: y,
        } = (0, I.T)(),
        { analyticsLocations: C } = (0, c.Ay)(o.A.CLIPS_EDITOR),
        { tracks: k, selectedTrackId: N, setSelectedTrackId: E, removeTrack: w } = (0, eb.fn)(),
        A = g.type === T.nQ.SCREENSHOT;
    a.useEffect(() => {
        if (!A) return (document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e));
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            if ("Delete" === e.key) {
                null != N && (e.stopPropagation(), e.preventDefault(), w(N));
                return;
            }
            let t = p.current;
            if (null == t) return;
            let l = p.current?.videoElement;
            if (null == l) return;
            let n = U(l.duration, e.shiftKey),
                a = !1;
            switch (e.key) {
                case " ":
                    ((a = !0), l.paused ? t.play() : t.pause());
                    break;
                case "ArrowLeft":
                    ((a = !0), t.seek(Math.max(m, l.currentTime - n)));
                    break;
                case "ArrowRight":
                    ((a = !0), t.seek(Math.min(h, l.currentTime + n)));
            }
            a && (e.stopPropagation(), e.preventDefault());
        }
    }, [p, A, g.type, m, h, N, w]);
    let R = a.useMemo(() => x.filter((e) => e.trackName.includes(":voice")), [x]),
        S = a.useCallback(() => {
            (0, u.R)(
                {
                    items: [{ type: "IMAGE", url: g.thumbnail, proxyUrl: g.thumbnail, alt: g.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [g.thumbnail, g.name]);
    if (A)
        return (0, n.jsxs)("div", {
            className: ed.OJ,
            children: [
                (0, n.jsx)(V, {}),
                t !== r.ip.ENTERED
                    ? (0, n.jsx)(f, {})
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(eu, { onBack: l }),
                              (0, n.jsx)("div", {
                                  className: M.zT,
                                  children: (0, n.jsx)(s.D, {
                                      className: M.xS,
                                      onClick: S,
                                      children: (0, n.jsx)("img", {
                                          className: M.V_,
                                          src: g.thumbnail,
                                          alt: g.name ?? "",
                                      }),
                                  }),
                              }),
                          ],
                      }),
            ],
        });
    let L = null == v || t !== r.ip.ENTERED,
        D = g.type === T.nQ.VOICE_CLIP,
        O = b === d.Y.CROP,
        P = null != y ? y.width / y.height : null,
        _ = O
            ? P
            : (function (e, t) {
                  switch (e) {
                      case T.yz.PORTRAIT_9_16:
                          return 9 / 16;
                      case T.yz.LANDSCAPE_16_9:
                          return 16 / 9;
                      case T.yz.ORIGINAL:
                      default:
                          return t;
                  }
              })(j, P),
        z = null;
    return (
        (z =
            O && !D
                ? (0, n.jsx)(ef, {})
                : k.map((e) => {
                      switch (e.type) {
                          case T.Me.TEXT:
                              return (0, n.jsx)(eN, { track: e, selected: e.id === N, onSelect: () => E(e.id) }, e.id);
                          case T.Me.IMAGE:
                              return (0, n.jsx)(eC, { track: e, selected: e.id === N, onSelect: () => E(e.id) }, e.id);
                          default:
                              return null;
                      }
                  })),
        (0, n.jsx)(c.f5, {
            value: C,
            children: (0, n.jsxs)("div", {
                className: ed.OJ,
                children: [
                    (0, n.jsx)(V, {}),
                    (0, n.jsx)("div", {
                        className: ed.zT,
                        children: L
                            ? (0, n.jsx)(f, {})
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(eu, { onBack: l }),
                                      (0, n.jsx)("div", {
                                          className: ed.x3,
                                          children: (0, n.jsx)($, {
                                              ref: p,
                                              cropFraming: !D,
                                              frameAspectRatio: _,
                                              overlay: z,
                                              loop: !1,
                                          }),
                                      }),
                                      (0, n.jsx)("div", {
                                          className: ed.fL,
                                          children: (0, n.jsx)(e6, { transitionState: t, voiceAudioTracks: R }),
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
        })
    );
}

l.d(t, { A: () => e3 });
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
    x = l(435558),
    v = l.n(x),
    g = l(194498),
    b = l(607470),
    j = l(176781),
    y = l(901127);
function C(e) {
    let { className: t } = e;
    return (0, n.jsx)("div", {
        className: p()(y.L, t),
        children: (0, n.jsx)(j.ClipsIcon, { size: "lg", color: "currentColor" }),
    });
}
var N = l(367974),
    k = l(376595),
    E = l(773503),
    w = l(923904);
let A = [],
    I = [];
function L() {
    let { subscribe: e, soundboardAudioEnabled: t, voiceAudioEnabled: l, clip: i } = (0, w.T)(),
        r = i.decision?.timestamp ?? 0,
        s = a.useMemo(() => new k.H(i.timeline ?? []), [i.timeline]),
        o = r - i.length,
        c = a.useCallback(
            (e) => {
                let t = 1e3 * v().round(e, 3);
                return s.getEventsAtTimestamp(o + t);
            },
            [s, o],
        ),
        [u, d] = a.useState(() => c(0));
    return (
        a.useEffect(
            () =>
                e({
                    onTimeUpdate: (e) => {
                        d(c(e));
                    },
                }),
            [e, c],
        ),
        (0, n.jsx)(E.A, {
            speakingUserIds: l ? u.speakingUserIds : A,
            activeSoundboards: t ? u.activeSoundboards : I,
            userIds: i.users,
            guildId: i.guildId,
            channelId: i.channelId,
        })
    );
}
var R = l(696016),
    T = l(933092),
    S = l(24468);
function D(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: n, soundboardAudioEnabled: a, isVoiceClip: i } = t;
    if (!i && l && n && a)
        if (e.includes(R.gC.ALL)) return !1;
        else return !0;
    return e.includes(R.gC.APPLICATION) ? !l : e.includes(R.gC.VOICE) ? !n : !e.includes(R.gC.SOUNDBOARD) || !a;
}
function M(e) {
    let { setRef: t, audioTrackLabel: l, src: i, muted: r } = e,
        s = a.useCallback(
            (e) => {
                t(e, l);
            },
            [t, l],
        ),
        o = a.useCallback(
            (e) => {
                Object.values(e.currentTarget.audioTracks).forEach((e) => {
                    e.enabled = l === e.label;
                });
            },
            [l],
        );
    return (0, n.jsx)("audio", {
        id: `ClipsPlayerAudioTrack:${l}`,
        ref: s,
        src: i ?? void 0,
        muted: r,
        preload: "auto",
        className: S.R,
        onLoadedMetadata: o,
    });
}
function P(e) {
    let { overlay: t, cropFraming: l, frameAspectRatio: i, loop: r = !0, ref: s } = e,
        {
            cropStart: o,
            cropEnd: c,
            setVideoPlayerRef: u,
            videoURL: d,
            audioURL: m,
            applicationAudioEnabled: f,
            voiceAudioEnabled: h,
            soundboardAudioEnabled: v,
            clip: j,
        } = (0, w.T)(),
        y = a.useRef({}),
        k = a.useRef(null),
        E = a.useRef(!1),
        [A, I] = a.useState([]),
        P = a.useCallback(() => {
            let e = y.current.main;
            if (null == e) return;
            let t = (0, x.round)(e.currentTime, 3),
                l = (0, x.round)(o, 3);
            if (t >= (null != c ? (0, x.round)(c, 3) : (0, x.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(y.current)) null != e && (e.currentTime = o);
                return !0;
            }
        }, [o, c]),
        O = a.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(R.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(R.gC.VOICE) || l.label.includes(R.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            I(t);
        }, []),
        _ = a.useCallback(() => {
            for (let e of ((E.current = !0), P(), Object.values(y.current))) null != e && e.play();
        }, [P]),
        z = a.useCallback(() => {
            for (let e of Object.values(y.current)) null != e && e.pause();
        }, []);
    (0, g.A)(() => {
        if (E.current) {
            if (!r) {
                let e = y.current.main;
                if (null != e) {
                    let t = null != c ? (0, x.round)(c, 3) : (0, x.round)(e.duration, 3);
                    if ((0, x.round)(e.currentTime, 3) >= t) {
                        (z(), (E.current = !1));
                        return;
                    }
                }
            }
            P() && _();
        }
    });
    let U = a.useCallback((e) => {
            for (let t of (y.current.main?.paused && (E.current = !1), Object.values(y.current)))
                null != t && (t.currentTime = e);
        }, []),
        $ = a.useCallback(() => {
            y.current.main?.paused ? _() : z();
        }, [_, z]),
        G = a.useCallback((e) => {
            y.current.main = e;
        }, []),
        B = a.useCallback((e, t) => {
            y.current[t] = e;
        }, []);
    a.useImperativeHandle(s, () => {
        let e = { play: _, seek: U, pause: z, videoElement: y.current.main };
        return (u(e), e);
    }, [_, U, z, u]);
    let X = a.useCallback(() => {
        U(o);
    }, [U, o]);
    a.useLayoutEffect(() => {
        let e = y.current;
        return () => {
            for (let t of Object.values(e)) (0, N.A)(t);
        };
    }, []);
    let H = j.type === R.nQ.VOICE_CLIP,
        W = !0 === l && !H && null != i;
    return (a.useLayoutEffect(() => {
        let e = k.current;
        if (null == e) return;
        if (!W) {
            ((e.style.width = ""), (e.style.height = ""));
            return;
        }
        function t() {
            let e = k.current,
                t = y.current.main;
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
    }, [W, i]),
    null == d)
        ? null
        : (0, n.jsxs)("div", {
              ref: k,
              className: p()(T.DV, W && T.Ln),
              children: [
                  H
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("audio", { ref: G, src: d, muted: !0, preload: "auto" }),
                                (0, n.jsx)(C, { className: T.Ap }),
                            ],
                        })
                      : (0, n.jsx)(b.A, {
                            onClick: $,
                            className: p()(T.Ap, W && T.HU),
                            style: W ? { aspectRatio: i } : void 0,
                            ref: G,
                            src: d,
                            muted: D(":all", {
                                applicationAudioEnabled: f,
                                voiceAudioEnabled: h,
                                soundboardAudioEnabled: v,
                                isVoiceClip: H,
                            }),
                            preload: "auto",
                            onLoadedData: X,
                        }),
                  (0, n.jsx)(L, {}),
                  t,
                  (0, n.jsx)("audio", {
                      id: "ClipsPlayerAudioTrack:application",
                      src: m ?? void 0,
                      muted: D(":application", {
                          applicationAudioEnabled: f,
                          voiceAudioEnabled: h,
                          soundboardAudioEnabled: v,
                          isVoiceClip: H,
                      }),
                      className: S.R,
                      preload: "auto",
                      ref: (e) => B(e, "main:application"),
                      onLoadedMetadata: O,
                  }),
                  A.map((e) =>
                      (0, n.jsx)(
                          M,
                          {
                              setRef: B,
                              audioTrackLabel: e,
                              src: m,
                              muted: D(e, {
                                  applicationAudioEnabled: f,
                                  voiceAudioEnabled: h,
                                  soundboardAudioEnabled: v,
                                  isVoiceClip: H,
                              }),
                          },
                          e,
                      ),
                  ),
              ],
          });
}
function O(e, t) {
    let l = e / 30;
    return (t && (l /= 10), l);
}
var _ = l(22745);
function z() {
    let { clip: e } = (0, w.T)();
    return "" !== e.thumbnail
        ? (0, n.jsx)("img", { className: _.T, src: e.thumbnail, alt: "", "aria-hidden": !0 })
        : null;
}
var U = l(855986),
    $ = l(342952),
    G = l(834730),
    B = l(866665),
    X = l(408278),
    H = l(548411),
    W = l(778712),
    F = l(429913),
    K = l(47167),
    V = l(713654),
    Y = l(769015),
    Z = l(145497),
    Q = l(734057),
    q = l(71393),
    J = l(287809),
    ee = l(5377),
    et = l(403362),
    el = l(818433),
    en = l(792996),
    ea = l(620828);
function ei(e) {
    let { icon: t, label: l } = e;
    return (0, n.jsxs)("div", {
        className: ea.Ho,
        children: [
            null != t && (0, n.jsx)("div", { className: ea.t8, children: t }),
            (0, n.jsx)(G.E, { variant: "body-xs/normal", color: "text-subtle", className: ea.Mk, children: l }),
        ],
    });
}
function er(e) {
    let { onBack: t } = e,
        { clip: l } = (0, w.T)(),
        a = (0, F.h)(l.applicationId),
        i = (0, U.yK)([J.default], () => l.users.map(J.default.getUser).filter(et.Vq)),
        r = (0, U.bG)([q.A], () => (null != l.guildId ? q.A.getGuild(l.guildId) : null)),
        s = (0, U.bG)([Q.A], () => (null != l.channelId ? Q.A.getChannel(l.channelId) : null)),
        o = (0, K.Ay)(s),
        c = null != s ? (0, V.gU)(s, r) : null,
        u = a?.name ?? l.applicationName,
        d =
            null != s && null != c
                ? (0, n.jsx)(c, { size: "custom", width: 16, height: 16, color: "currentColor" })
                : null;
    return (0, n.jsxs)("div", {
        className: ea.wx,
        children: [
            null != t &&
                (0, n.jsx)(B.m, {
                    position: "bottom",
                    text: en.intl.string(en.t["13/7kX"]),
                    children: (0, n.jsx)(X.K, {
                        onClick: t,
                        icon: H.ArrowLargeLeftIcon,
                        size: "md",
                        variant: "icon-only",
                        "aria-label": en.intl.string(en.t["13/7kX"]),
                    }),
                }),
            (0, n.jsxs)("div", {
                className: p()(ea.K5, null != t && ea.fr),
                children: [
                    (0, n.jsx)(el.A, { variant: "heading-lg/medium", className: ea.DD, asHeading: !0 }),
                    (0, n.jsxs)("div", {
                        className: ea.KW,
                        children: [
                            null != u &&
                                "" !== u &&
                                (0, n.jsx)(ei, {
                                    icon: null != a ? (0, n.jsx)(Y.A, { game: a, size: Y.M.XXSMALL }) : void 0,
                                    label: u,
                                }),
                            null != r &&
                                (0, n.jsx)(ei, { icon: (0, n.jsx)(Z.Ay, { guild: r, iconSize: 16 }), label: r.name }),
                            null != d && (0, n.jsx)(ei, { icon: d, label: o ?? "" }),
                            (0, n.jsx)(ei, { label: (0, ee.mk)(new Date(l.createdAt)) }),
                            i.length > 0 &&
                                (0, n.jsx)("div", {
                                    className: ea.Ho,
                                    children: (0, n.jsx)($.A, { users: i, maxUsers: 10, size: W._3.SIZE_16 }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var es = l(973177);
let eo = { [R.yz.ORIGINAL]: null, [R.yz.PORTRAIT_9_16]: 9 / 16, [R.yz.LANDSCAPE_16_9]: 16 / 9 };
function ec() {
    let { cropPreset: e, videoPlayerRef: t } = (0, w.T)(),
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
                    u = eo[e],
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
        (0, n.jsx)("div", { ref: l, className: es.pC, children: (0, n.jsx)("div", { ref: i, className: es.E$ }) })
    );
}
var eu = l(831453),
    ed = l(607345);
let em = [
    { key: "topStart", className: ed.On },
    { key: "topEnd", className: ed.zI },
    { key: "bottomEnd", className: ed.TP },
    { key: "bottomStart", className: ed.kb },
];
function ef(e) {
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
            onSelect: v,
            onChange: g,
            children: b,
        } = e,
        j = a.useRef(null),
        y = a.useRef(null),
        C = a.useRef(null),
        N = a.useRef(l),
        k = a.useRef(i),
        E = a.useRef(r),
        A = a.useRef(d),
        I = a.useCallback(
            (e) => {
                let t,
                    l = y.current;
                if (null == l) return;
                let { x: n, y: a } = N.current;
                if (
                    ((l.style.left = `${e.left + n * e.width}px`),
                    (l.style.top = `${e.top + a * e.height}px`),
                    (l.style.transform = `translate(-50%, -50%) rotate(${k.current}deg)`),
                    "fixed" === u)
                ) {
                    ((t = E.current * e.width), (l.style.width = `${t}px`));
                    let n = A.current;
                    l.style.height = null != n && n > 0 ? `${t / n}px` : "auto";
                } else ((t = E.current * e.height), (l.style.fontSize = `${t}px`));
                l.style.setProperty("--clip-track-scale", `${t}px`);
            },
            [u],
        ),
        L = (function (e, t) {
            let { videoPlayerRef: l } = (0, w.T)(),
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
        })(j, I);
    a.useEffect(() => {
        ((N.current = l), (k.current = i), (E.current = r), (A.current = d));
        let e = L.current;
        null != e && I(e);
    }, [l, i, r, d, I, L]);
    let T = a.useCallback(
            (e) => {
                let t = C.current,
                    l = L.current,
                    n = j.current?.getBoundingClientRect();
                if (null != t && null != l && null != n)
                    switch (t.mode) {
                        case "move":
                            g({
                                position: {
                                    x: (0, x.clamp)((e.clientX - n.left - l.left) / l.width - t.grabOffset.x, 0, 1),
                                    y: (0, x.clamp)((e.clientY - n.top - l.top) / l.height - t.grabOffset.y, 0, 1),
                                },
                            });
                            break;
                        case "scale": {
                            if (0 === t.startDistance) return;
                            let l = Math.hypot(e.clientX - t.centerX, e.clientY - t.centerY);
                            g({ scale: (0, x.clamp)((t.baseScale * l) / t.startDistance, o, c) });
                            break;
                        }
                        case "rotate": {
                            let l = eh(t.centerX, t.centerY, e.clientX, e.clientY);
                            g({ rotationDeg: (0, R.Ew)(t.baseRotationDeg + l - t.startAngleDeg) });
                        }
                    }
            },
            [g, o, c, L],
        ),
        S = a.useCallback(() => {
            C.current = null;
        }, []);
    a.useEffect(
        () => (
            document.addEventListener("mousemove", T),
            document.addEventListener("mouseup", S),
            () => {
                (document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", S));
            }
        ),
        [T, S],
    );
    let D = a.useCallback(
            (e) => (t) => {
                (t.stopPropagation(), t.preventDefault(), v(), y.current?.focus({ preventScroll: !0 }));
                let n = L.current,
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
                    startAngleDeg: eh(s, o, t.clientX, t.clientY),
                };
            },
            [v, l, i, r, L],
        ),
        M = a.useCallback(
            (e) => {
                if (e.altKey) {
                    let t = 0;
                    if ("ArrowLeft" === e.key) t = -1;
                    else {
                        if ("ArrowRight" !== e.key) return;
                        t = 1;
                    }
                    (e.preventDefault(), e.stopPropagation(), g({ rotationDeg: (0, R.Ew)(i + 15 * t) }));
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
                    g({ position: { x: (0, x.clamp)(l.x + n, 0, 1), y: (0, x.clamp)(l.y + a, 0, 1) } }));
            },
            [g, l, i],
        );
    return (0, n.jsx)("div", {
        ref: j,
        className: ed.DW,
        children: (0, n.jsxs)(s.D, {
            innerRef: y,
            className: p()(ed.aP, { [ed.$A]: f }),
            style: { display: h ? void 0 : "none" },
            "aria-label": t,
            "aria-keyshortcuts": "Alt+ArrowLeft Alt+ArrowRight",
            onClick: v,
            onMouseDown: D("move"),
            onKeyDown: M,
            children: [
                b,
                f &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { "aria-hidden": !0, className: ed.t$ }),
                            (0, n.jsx)("div", {
                                "aria-hidden": !0,
                                className: ed.oT,
                                onMouseDown: D("rotate"),
                                children: (0, n.jsx)(eu.RotateIcon, { size: "xxs", color: "currentColor" }),
                            }),
                            m &&
                                em.map((e) => {
                                    let { key: t, className: l } = e;
                                    return (0, n.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: p()(ed.ZV, l), onMouseDown: D("scale") },
                                        t,
                                    );
                                }),
                        ],
                    }),
            ],
        }),
    });
}
function eh(e, t, l, n) {
    return (180 * Math.atan2(n - t, l - e)) / Math.PI;
}
var ep = l(1093),
    ex = l(683825),
    ev = l(545052);
function eg(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { useCurrentTime: r } = (0, w.T)(),
        { updateImageTrackData: s } = (0, ep.fn)(),
        o = r(),
        { src: c, position: u, rotationDeg: d, widthFraction: m, naturalWidth: f, naturalHeight: h } = t.data,
        p = t.data.shadow ?? "none",
        x = t.data.shadowColor ?? R.pk,
        v = a.useCallback(
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
        b = R.EC[p],
        j =
            b > 0
                ? `drop-shadow(0 calc(${0.4 * b} * var(--clip-track-scale)) calc(${b} * var(--clip-track-scale)) ${x})`
                : void 0;
    return (0, n.jsx)(ef, {
        label: en.intl.formatToPlainString(ex.default.lZuIri, { fileName: t.data.fileName }),
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
        onChange: v,
        children: (0, n.jsx)("img", {
            className: ev.S,
            src: c,
            alt: "",
            "aria-hidden": !0,
            draggable: !1,
            style: { filter: j },
        }),
    });
}
var eb = l(637526);
function ej(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { useCurrentTime: r } = (0, w.T)(),
        { updateTextTrackData: s } = (0, ep.fn)(),
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
        p = R.mO[d.strokeWidth];
    return (0, n.jsxs)(ef, {
        label: en.intl.formatToPlainString(ex.default.EDmwVf, { text: c }),
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
                    className: eb.C,
                    style: {
                        color: d.strokeColor,
                        WebkitTextStrokeColor: d.strokeColor,
                        WebkitTextStrokeWidth: `${p}em`,
                    },
                    children: c,
                }),
            (0, n.jsx)("span", { className: eb.L, style: { color: d.color }, children: c }),
        ],
    });
}
var ey = l(164636),
    eC = l(461150),
    eN = l(782134),
    ek = l(113494),
    eE = l(898196),
    ew = l(559106),
    eA = l(765671),
    eI = l(531685);
(l(323874), l(14289), l(35956), l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162));
var eL = l(646514),
    eR = l(602853),
    eT = l(602674),
    eS = l(335416),
    eD = l(556250);
let eM = new Map(),
    eP = a.memo(function (e) {
        let { clipId: t, voiceAudioTracks: i, onMouseDown: r, className: s, alwaysRenderContainer: o = !1 } = e,
            c = a.useRef(null),
            { ref: u, width: d, height: m } = (0, eA.Ay)(),
            [f, h] = a.useState(null),
            x = (0, eR.r)(eL.A.colors.BACKGROUND_MOD_STRONG).hex();
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
                l = eM.get(e);
            if (null != l) return void h(l.waveform);
            let n = c.current,
                a = !1;
            function r(t) {
                if (a) return;
                let { waveform: l, error: n } = t.data;
                null != n ? R.GU.error("Failed to load waveform:", n) : (eM.set(e, { waveform: l }), h(l));
            }
            return (
                n.addEventListener("message", r),
                !(async function () {
                    try {
                        let e = (0, eT.v)();
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
                        a || R.GU.error("Failed to decode audio:", e);
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
                i = -(a * (eS.Jh.waveformBarWidth - 1));
            (t.clearRect(0, 0, l, n), (t.fillStyle = x));
            for (let e = 0; e < f.length; e++) {
                let l = f[e] * n,
                    r = e * a + i;
                t.fillRect(r, n, a - i, -l);
            }
        }, [x, d, u, m, f]),
        0 === i.length)
            ? o
                ? (0, n.jsx)("div", { className: p()(eD.k, s), onMouseDown: r })
                : null
            : (0, n.jsx)("div", {
                  className: p()(eD.k, s),
                  children: (0, n.jsx)("canvas", {
                      className: eD.s,
                      ref: u,
                      width: (d ?? 0) * 2,
                      height: (m ?? 0) * 2,
                      onMouseDown: r,
                  }),
              });
    });
var eO = l(683063),
    e_ = l(565645),
    ez = l(562153),
    eU = l(443184),
    e$ = l(931540);
function eG(e, t) {
    return (0, eU.$b)(e, t.type, t.type === R.Gy.GAME_EVENT ? t.eventName : void 0);
}
function eB(e) {
    return { timestamp: e.peakMs, signal: { type: e.type, userId: e.userId, confidence: e.peakConfidence } };
}
function eX(e) {
    let { icon: t, title: l, body: a, position: i, compact: r } = e;
    return (0, n.jsx)(eO.u, {
        title: l,
        body: a,
        position: "top",
        children: (0, n.jsx)("div", {
            className: p()(e$.H, { [e$.c]: r }),
            style: { left: `${i}%` },
            children: (0, n.jsx)(t, { size: "refresh_sm", color: eL.A.colors.ICON_DEFAULT }),
        }),
    });
}
let eH = { [R.Gy.LAUGHTER]: ex.default.bTC23D, [R.Gy.SHOUTING]: ex.default["3gqpuo"] };
function eW(e) {
    let { icon: t, signal: l, guildId: a, position: i, compact: r } = e,
        s = (0, U.bG)([J.default], () => J.default.getUser(l.userId)),
        o = (0, ez.tx)(a, null, s);
    return null == l.emojiId && null == l.emojiName
        ? (0, n.jsx)(eX, { icon: t, title: l.name, body: o, position: i, compact: r })
        : (0, n.jsx)(eO.u, {
              title: l.name,
              body: o,
              position: "top",
              children: (0, n.jsx)("div", {
                  className: p()(e$.H, { [e$.c]: r }),
                  style: { left: `${i}%` },
                  children: (0, n.jsx)(e_.A, {
                      emojiId: l.emojiId ?? null,
                      emojiName: l.emojiName ?? null,
                      animated: l.emojiAnimated,
                      size: "reaction",
                  }),
              }),
          });
}
let eF = a.memo(function (e) {
    let { clip: t, videoLength: l, compact: i = !1 } = e,
        r = t.audioEvents,
        s = t.applicationId,
        o = a.useMemo(() => {
            let e = t.timeline.filter(
                (e) => !e.signal.hiddenFromTimeline && !(e.signal.type === R.Gy.SOUNDBOARD && !e.signal.playing),
            );
            return (
                null != r
                    ? (e = e.filter((e) => {
                          var t;
                          return (t = e.signal.type) !== R.Gy.LAUGHTER && t !== R.Gy.SHOUTING;
                      })).push(...r.map(eB))
                    : (e = (function (e) {
                          let t = e
                                  .filter((e) => e.signal.type === R.Gy.LAUGHTER && e.signal.confidence > 0.8)
                                  .sort((e, t) => e.timestamp - t.timestamp),
                              l = new Set(),
                              n = 0;
                          for (let e = 1; e <= t.length; e++)
                              (e < t.length && t[e].timestamp - t[e - 1].timestamp < 2500) ||
                                  (e - n >= 2 && l.add(t[e - 1]), (n = e));
                          return e.filter((e) => e.signal.type !== R.Gy.LAUGHTER || l.has(e));
                      })(e)),
                (e = e.filter((e) => eG(s, e.signal) > 0)).sort((e, t) => e.timestamp - t.timestamp),
                e.sort((e, t) => eG(s, t.signal) - eG(s, e.signal)),
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
        let o = ((l = e.signal), (0, eU.u6)(s, l.type, l.type === R.Gy.GAME_EVENT ? l.eventName : void 0));
        if (null == o) return null;
        let u = `${e.timestamp}-${e.signal.type}`;
        switch (e.signal.type) {
            case R.Gy.LAUGHTER:
            case R.Gy.SHOUTING:
                return (0, n.jsx)(
                    eX,
                    {
                        icon: o,
                        title: en.intl.string(eH[e.signal.type]),
                        body: en.intl.string(ex.default.Ek6GZO),
                        position: r,
                        compact: i,
                    },
                    u,
                );
            case R.Gy.GAME_EVENT:
                return (0, n.jsx)(
                    eX,
                    {
                        icon: o,
                        title:
                            ((a = e.signal),
                            (0, eU.PZ)(s, a.type, a.type === R.Gy.GAME_EVENT ? a.eventName : void 0) ?? ""),
                        body: en.intl.string(ex.default["347DBb"]),
                        position: r,
                        compact: i,
                    },
                    `${u}-${e.signal.eventName ?? ""}`,
                );
            case R.Gy.SOUNDBOARD:
                if (!e.signal.playing) return null;
                return (0, n.jsx)(eW, { icon: o, signal: e.signal, guildId: t.guildId, position: r, compact: i }, u);
            default:
                return null;
        }
    });
});
var eK = l(590936);
let eV = a.memo(function (e) {
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
        className: p()(eK.ZX, { [eK.dZ]: r, [eK.oE]: s }),
        onMouseDown: i,
        children: (0, n.jsxs)("div", {
            className: eK.QY,
            children: [
                c.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: eK.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, n.jsx)("div", { className: eK.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                o.map((e, t) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: eK.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, n.jsx)("div", { className: eK.d9 }),
                                (0, n.jsxs)(G.E, {
                                    variant: "footnote/normal",
                                    color: "text-muted",
                                    className: eK.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, n.jsx)(eF, { clip: l, videoLength: t, compact: s }),
            ],
        }),
    });
});
var eY = l(765548),
    eZ = l(591246);
function eQ(e) {
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
        [v, g] = a.useState(null),
        b = a.useCallback(() => {
            let e = f.current;
            if (null == e) return 0;
            let t = e.getBoundingClientRect();
            return 0 === t.width ? 0 : c / t.width;
        }, [c]),
        j = (0, eY.A)((e) => {
            let t = h.current;
            if (null == t) return;
            let l = (e.clientX - t.clientX) * b();
            if ("start" === t.mode) m((0, x.clamp)(t.initialStart + l, 0, t.initialEnd - 1), t.initialEnd);
            else if ("end" === t.mode) {
                let e = (0, x.clamp)(t.initialEnd + l, t.initialStart + 1, c);
                m(t.initialStart, e);
            } else {
                let e = t.initialEnd - t.initialStart,
                    n = (0, x.clamp)(t.initialStart + l, 0, c - e);
                m(n, n + e);
            }
        }),
        y = a.useCallback(() => {
            ((h.current = null), g(null));
        }, []);
    a.useEffect(() => {
        if (null != v)
            return (
                document.addEventListener("mousemove", j),
                document.addEventListener("mouseup", y),
                () => {
                    (document.removeEventListener("mousemove", j), document.removeEventListener("mouseup", y));
                }
            );
    }, [v, j, y]);
    let C = a.useCallback(
            (e) => (t) => {
                (t.stopPropagation(),
                    d(),
                    (h.current = { mode: e, clientX: t.clientX, initialStart: r, initialEnd: o }),
                    g(e));
            },
            [d, r, o],
        ),
        N = a.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = o - r,
                    n = !1,
                    a = r;
                ("ArrowLeft" === e.key
                    ? ((n = !0), (a = (0, x.clamp)(r - t, 0, c - l)))
                    : "ArrowRight" === e.key && ((n = !0), (a = (0, x.clamp)(r + t, 0, c - l))),
                    n && (e.preventDefault(), e.stopPropagation(), m(a, a + l)));
            },
            [r, o, c, m],
        ),
        k = a.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    n = r;
                ("ArrowLeft" === e.key
                    ? ((l = !0), (n = (0, x.clamp)(r - t, 0, o - 1)))
                    : "ArrowRight" === e.key && ((l = !0), (n = (0, x.clamp)(r + t, 0, o - 1))),
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
                    ? ((l = !0), (n = (0, x.clamp)(o - t, r + 1, c)))
                    : "ArrowRight" === e.key && ((l = !0), (n = (0, x.clamp)(o + t, r + 1, c))),
                    l && (e.preventDefault(), e.stopPropagation(), m(r, n)));
            },
            [r, o, c, m],
        ),
        w = 0 === c ? 0 : (r / c) * 100,
        A = 0 === c ? 0 : ((o - r) / c) * 100;
    return (0, n.jsx)("div", {
        className: eZ.nM,
        children: (0, n.jsxs)("div", {
            ref: f,
            className: eZ.hz,
            children: [
                (0, n.jsx)(ew.vN, {
                    children: (0, n.jsx)(s.D, {
                        className: p()(eZ.u4, { [eZ.jX]: u }),
                        style: { left: `${w}%`, width: `${A}%`, backgroundColor: i },
                        onMouseDown: C("move"),
                        onKeyDown: N,
                        "aria-label": t,
                        children: (0, n.jsx)("div", {
                            className: eZ.Kq,
                            children: (0, n.jsx)(G.E, {
                                variant: "body-sm/medium",
                                color: "none",
                                className: eZ.Vd,
                                children: l,
                            }),
                        }),
                    }),
                }),
                (0, n.jsx)(ew.vN, {
                    children: (0, n.jsx)("button", {
                        className: eZ.YQ,
                        style: { left: `${w}%` },
                        onMouseDown: C("start"),
                        onKeyDown: k,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": 0,
                        "aria-valuenow": r,
                        "aria-valuemax": o - 1,
                        "aria-label": t,
                        children: (0, n.jsx)("div", { className: eZ.gt }),
                    }),
                }),
                (0, n.jsx)(ew.vN, {
                    children: (0, n.jsx)("button", {
                        className: eZ.JZ,
                        style: { left: `${w + A}%` },
                        onMouseDown: C("end"),
                        onKeyDown: E,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": r + 1,
                        "aria-valuenow": o,
                        "aria-valuemax": c,
                        "aria-label": t,
                        children: (0, n.jsx)("div", { className: eZ.gt }),
                    }),
                }),
            ],
        }),
    });
}
var eq = l(302034),
    eJ = l(503535);
function e0(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        n = Math.floor((e % 1) * 100);
    return ((t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (n = n < 10 ? "0" + n : n), `${t}:${l}.${n}`);
}
function e1(e) {
    let t = Math.floor(e / 60),
        l = en.intl.formatToPlainString(en.t.iXLF9W, { minutes: t }),
        n = en.intl.formatToPlainString(en.t.geSp4K, { seconds: e % 60 });
    return `${l} ${n}`;
}
function e5(e) {
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
            subscribe: v,
            seek: g,
            clip: b,
            generateThumbnails: j,
            videoDimensions: y,
        } = (0, w.T)(),
        { tracks: C, selectedTrackId: N, setSelectedTrackId: k, updateTrackRange: E } = (0, ep.fn)(),
        A = i(),
        [I, L] = a.useState(null),
        T = a.useRef(null),
        S = a.useRef(null),
        [D, M] = a.useState(!1),
        [P, _] = a.useState(null);
    a.useEffect(
        () =>
            v({
                onPlay: () => {
                    (L(null), M(!1));
                },
            }),
        [v],
    );
    let { ref: z, width: U = 0, height: $ = 0 } = (0, eA.Ay)(),
        B = (0, ey.bG)([eI.A], () => eI.A.windowSize()),
        H = a.useRef(null),
        W = a.useCallback(() => {
            let e = z.current;
            null != e && _(e.getBoundingClientRect());
        }, [z]);
    (a.useMemo(() => {
        (B.width, B.height, W());
    }, [B.width, B.height, U, l, W]),
        a.useEffect(() => {
            let e = H.current;
            if (null != e) return (e.addEventListener("scroll", W), () => e.removeEventListener("scroll", W));
        }, [W]));
    let F = a.useCallback(
            (e, t) => {
                if (null == r || null == P) return;
                let l = (((0, x.clamp)(e, P.left, P.right) - P.left) / P.width) * r,
                    n = (0, x.clamp)(l, 0, r),
                    a = I;
                (null == a && t && ((a = "playhead"), s && (h(), M(!0)), L(a)),
                    "start" === a ? d(n) : "end" === a ? m(n) : "playhead" === a && g((0, x.clamp)(n, o, c)));
            },
            [r, P, I, o, c, s, h, d, m, g],
        ),
        K = a.useCallback(
            (e) => {
                if (null == r) return;
                let t = O(r, e.shiftKey),
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
        V = a.useCallback(
            (e) => {
                if (null == r) return;
                let t = O(r, e.shiftKey),
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
                F(e.clientX, !0);
            },
            [F],
        ),
        Z = a.useCallback(
            (e) => (t) => {
                (t.stopPropagation(), s && (h(), M(!0)), L(e));
            },
            [s, h],
        ),
        Q = a.useCallback(
            (e) => {
                F(e.clientX, !1);
            },
            [F],
        ),
        q = a.useCallback(() => {
            (D && f(), M(!1), L(null));
        }, [D, f]);
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
        return { numberOfPreviews: Math.ceil(U / e), timelinePreviewWidth: e };
    }, [$, U, y]);
    a.useEffect(() => {
        if (0 === J || 0 === ee) return;
        let e = z.current;
        if (null == e) return;
        ((e.height = $), (e.width = U));
        let t = e.getContext("2d");
        if (null == t) return;
        ((t.fillStyle = "transparent"), t.fillRect(0, 0, U, $));
        let l = [];
        for (let e = 0; e < J; e++) l.push((ee / U) * r * e);
        return j(l, ee, $, (e) => {
            for (let l = 0; l < e.length; l++) (t.drawImage(e[l], ee * l, 0, ee, $), e[l].close());
        });
    }, [$, z, r, J, ee, j, U]);
    let et = A - o,
        el = a.useCallback(() => {
            g(Math.max(o, A - 10));
        }, [o, A, g]),
        ea = a.useCallback(() => {
            g(Math.min(c, A + 10));
        }, [c, A, g]),
        ei = a.useCallback(() => {
            s ? h() : f();
        }, [s, f, h]),
        er = (o / r) * 100,
        es = (1 - (r - c) / r) * 100,
        eo = {
            background: `linear-gradient(to right, var(--black-500) ${er}%, transparent ${er}%, transparent ${es}%, var(--black-500) ${es}%)`,
        };
    return (0, n.jsxs)("div", {
        className: eJ.f4,
        children: [
            (0, n.jsx)("div", { className: eJ.qs }),
            (0, n.jsxs)("div", {
                className: eJ.lx,
                children: [
                    (0, n.jsx)("div", {
                        className: eJ.k2,
                        children: (0, n.jsx)("div", {
                            ref: S,
                            className: eJ.re,
                            children: (0, n.jsxs)(G.E, {
                                variant: "body-xs/medium",
                                className: eJ.g7,
                                color: "text-muted",
                                children: [
                                    (0, n.jsx)("span", { className: eJ.$k, children: e0(et) }),
                                    (0, n.jsx)("span", { className: eJ.xW, children: " / " }),
                                    e0(u),
                                ],
                            }),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: eJ.s2,
                        children: [
                            (0, n.jsx)(X.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: eC.SkipBackwardIcon,
                                onClick: el,
                                "aria-label": en.intl.string(eq.default["dRVF+Z"]),
                            }),
                            (0, n.jsx)(X.K, {
                                size: "sm",
                                icon: s ? ek.PauseIcon : eN.PlayIcon,
                                onClick: ei,
                                "aria-label": en.intl.string(s ? en.t.ZcgDJX : en.t.RscU7I),
                                variant: "icon-only",
                            }),
                            (0, n.jsx)(X.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: eE.SkipForwardIcon,
                                onClick: ea,
                                "aria-label": en.intl.string(eq.default.yV2FLL),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: eJ.fL,
                ref: H,
                children: [
                    (0, n.jsx)(eV, { onMouseDown: Y, videoLength: r, clip: b, noBottomMargin: !0, compact: !0 }),
                    (0, n.jsx)(eP, {
                        onMouseDown: Y,
                        voiceAudioTracks: t,
                        clipId: b.id,
                        className: eJ.ou,
                        alwaysRenderContainer: !0,
                    }),
                    (0, n.jsx)("div", {
                        className: eJ.iI,
                        children: (0, n.jsxs)("div", {
                            className: eJ.Qp,
                            children: [
                                (0, n.jsx)("div", { className: eJ.bd }),
                                (0, n.jsx)("div", {
                                    className: eJ.PH,
                                    children: (0, n.jsxs)("div", {
                                        className: p()(eJ.IO, { [eJ.Dg]: null != I }),
                                        onMouseDown: Y,
                                        children: [
                                            (0, n.jsx)("canvas", { className: eJ.Ay, ref: z }),
                                            (0, n.jsx)(ew.vN, {
                                                children: (0, n.jsx)("div", {
                                                    tabIndex: 0,
                                                    ref: T,
                                                    className: eJ.lG,
                                                    children: (0, n.jsx)("svg", {
                                                        className: eJ.$6,
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
                                            (0, n.jsx)("div", { className: eJ.QT, style: eo }),
                                            (0, n.jsxs)("div", {
                                                className: eJ.Ws,
                                                style: {
                                                    left: null != r ? `${(o / r) * 100}%` : "0",
                                                    right: null != r ? `${((r - c) / r) * 100}%` : "0",
                                                },
                                                children: [
                                                    (0, n.jsx)(ew.vN, {
                                                        children: (0, n.jsxs)("button", {
                                                            className: eJ.uI,
                                                            onMouseDown: Z("start"),
                                                            onKeyDown: K,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": 0,
                                                            "aria-valuenow": o,
                                                            "aria-valuetext": e1(o),
                                                            "aria-valuemax": c - 0.1,
                                                            "aria-label": en.intl.string(en.t["+BTvw8"]),
                                                            children: [
                                                                (0, n.jsx)("div", { className: eJ.FV }),
                                                                (0, n.jsxs)("svg", {
                                                                    className: eJ.lm,
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
                                                    (0, n.jsx)(ew.vN, {
                                                        children: (0, n.jsxs)("button", {
                                                            className: eJ.H1,
                                                            onMouseDown: Z("end"),
                                                            onKeyDown: V,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": o + 0.1,
                                                            "aria-valuenow": c,
                                                            "aria-valuetext": e1(c),
                                                            "aria-valuemax": r,
                                                            "aria-label": en.intl.string(en.t.bBgBYo),
                                                            children: [
                                                                (0, n.jsx)("div", { className: eJ.kn }),
                                                                (0, n.jsxs)("svg", {
                                                                    className: eJ.mN,
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
                                        eQ,
                                        {
                                            label: (function (e) {
                                                switch (e) {
                                                    case R.Me.TEXT:
                                                        return en.intl.string(ex.default.WvkbtB);
                                                    case R.Me.IMAGE:
                                                        return en.intl.string(ex.default.heHHUW);
                                                    default:
                                                        return "";
                                                }
                                            })(e.type),
                                            text: (function (e) {
                                                switch (e.type) {
                                                    case R.Me.TEXT:
                                                        return e.data.text;
                                                    case R.Me.IMAGE:
                                                        return e.data.fileName;
                                                    default:
                                                        return "";
                                                }
                                            })(e),
                                            color: R.mY[e.type],
                                            startSec: e.startSec,
                                            endSec: e.endSec,
                                            totalDurationSec: r,
                                            selected: N === e.id,
                                            onSelect: () => k(e.id),
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
function e3(e) {
    let { transitionState: t, onBack: l } = e,
        {
            cropStart: m,
            cropEnd: h,
            videoPlayerRef: p,
            videoURL: x,
            audioTracks: v,
            clip: g,
            activeTool: b,
            cropPreset: j,
            videoDimensions: y,
        } = (0, w.T)(),
        { analyticsLocations: C } = (0, c.Ay)(o.A.CLIPS_EDITOR),
        { tracks: N, selectedTrackId: k, setSelectedTrackId: E, removeTrack: A } = (0, ep.fn)(),
        I = g.type === R.nQ.SCREENSHOT;
    a.useEffect(() => {
        if (!I) return (document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e));
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            if ("Delete" === e.key) {
                null != k && (e.stopPropagation(), e.preventDefault(), A(k));
                return;
            }
            let t = p.current;
            if (null == t) return;
            let l = p.current?.videoElement;
            if (null == l) return;
            let n = O(l.duration, e.shiftKey),
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
    }, [p, I, g.type, m, h, k, A]);
    let L = a.useMemo(() => v.filter((e) => e.trackName.includes(":voice")), [v]),
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
    if (I)
        return (0, n.jsxs)("div", {
            className: es.OJ,
            children: [
                (0, n.jsx)(z, {}),
                t !== r.ip.ENTERED
                    ? (0, n.jsx)(f, {})
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(er, { onBack: l }),
                              (0, n.jsx)("div", {
                                  className: T.zT,
                                  children: (0, n.jsx)(s.D, {
                                      className: T.xS,
                                      onClick: S,
                                      children: (0, n.jsx)("img", {
                                          className: T.V_,
                                          src: g.thumbnail,
                                          alt: g.name ?? "",
                                      }),
                                  }),
                              }),
                          ],
                      }),
            ],
        });
    let D = null == x || t !== r.ip.ENTERED,
        M = g.type === R.nQ.VOICE_CLIP,
        _ = b === d.Y.CROP,
        U = null != y ? y.width / y.height : null,
        $ = _
            ? U
            : (function (e, t) {
                  switch (e) {
                      case R.yz.PORTRAIT_9_16:
                          return 9 / 16;
                      case R.yz.LANDSCAPE_16_9:
                          return 16 / 9;
                      case R.yz.ORIGINAL:
                      default:
                          return t;
                  }
              })(j, U),
        G = null;
    return (
        (G =
            _ && !M
                ? (0, n.jsx)(ec, {})
                : N.map((e) => {
                      switch (e.type) {
                          case R.Me.TEXT:
                              return (0, n.jsx)(ej, { track: e, selected: e.id === k, onSelect: () => E(e.id) }, e.id);
                          case R.Me.IMAGE:
                              return (0, n.jsx)(eg, { track: e, selected: e.id === k, onSelect: () => E(e.id) }, e.id);
                          default:
                              return null;
                      }
                  })),
        (0, n.jsx)(c.f5, {
            value: C,
            children: (0, n.jsxs)("div", {
                className: es.OJ,
                children: [
                    (0, n.jsx)(z, {}),
                    (0, n.jsx)("div", {
                        className: es.zT,
                        children: D
                            ? (0, n.jsx)(f, {})
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(er, { onBack: l }),
                                      (0, n.jsx)("div", {
                                          className: es.x3,
                                          children: (0, n.jsx)(P, {
                                              ref: p,
                                              cropFraming: !M,
                                              frameAspectRatio: $,
                                              overlay: G,
                                              loop: !1,
                                          }),
                                      }),
                                      (0, n.jsx)("div", {
                                          className: es.fL,
                                          children: (0, n.jsx)(e5, { transitionState: t, voiceAudioTracks: L }),
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
        })
    );
}

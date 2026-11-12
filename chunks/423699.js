l.d(t, { A: () => e9 });
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
                let t = 1e3 * x().round(e, 3);
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
            soundboardAudioEnabled: x,
            clip: j,
        } = (0, w.T)(),
        y = a.useRef({}),
        k = a.useRef(null),
        E = a.useRef(!1),
        [A, I] = a.useState([]),
        P = a.useCallback(() => {
            let e = y.current.main;
            if (null == e) return;
            let t = (0, v.round)(e.currentTime, 3),
                l = (0, v.round)(o, 3);
            if (t >= (null != c ? (0, v.round)(c, 3) : (0, v.round)(e.duration, 3)) || t < l) {
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
                    let t = null != c ? (0, v.round)(c, 3) : (0, v.round)(e.duration, 3);
                    if ((0, v.round)(e.currentTime, 3) >= t) {
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
                                soundboardAudioEnabled: x,
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
                          soundboardAudioEnabled: x,
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
                                  soundboardAudioEnabled: x,
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
    W = l(534514),
    F = l(778712),
    V = l(429913),
    K = l(47167),
    Y = l(713654),
    Z = l(769015),
    Q = l(145497),
    q = l(734057),
    J = l(71393),
    ee = l(287809),
    et = l(5377),
    el = l(403362),
    en = l(718812),
    ea = l(792996),
    ei = l(620828);
function er(e) {
    let { icon: t, label: l } = e;
    return (0, n.jsxs)("div", {
        className: ei.Ho,
        children: [
            null != t && (0, n.jsx)("div", { className: ei.t8, children: t }),
            (0, n.jsx)(G.E, { variant: "body-xs/normal", color: "text-subtle", className: ei.Mk, children: l }),
        ],
    });
}
function es(e) {
    let { onBack: t } = e,
        { clip: l, clipName: a } = (0, w.T)(),
        i = (0, en.h)(l),
        r = (0, V.h)(l.applicationId),
        s = (0, U.yK)([ee.default], () => l.users.map(ee.default.getUser).filter(el.Vq)),
        o = (0, U.bG)([J.A], () => (null != l.guildId ? J.A.getGuild(l.guildId) : null)),
        c = (0, U.bG)([q.A], () => (null != l.channelId ? q.A.getChannel(l.channelId) : null)),
        u = (0, K.Ay)(c),
        d = null != c ? (0, Y.gU)(c, o) : null,
        m = r?.name ?? l.applicationName,
        f =
            null != c && null != d
                ? (0, n.jsx)(d, { size: "custom", width: 16, height: 16, color: "currentColor" })
                : null;
    return (0, n.jsxs)("div", {
        className: ei.wx,
        children: [
            null != t &&
                (0, n.jsx)(B.m, {
                    position: "bottom",
                    text: ea.intl.string(ea.t["13/7kX"]),
                    children: (0, n.jsx)(X.K, {
                        onClick: t,
                        icon: H.ArrowLargeLeftIcon,
                        size: "md",
                        variant: "icon-only",
                        "aria-label": ea.intl.string(ea.t["13/7kX"]),
                    }),
                }),
            (0, n.jsxs)("div", {
                className: p()(ei.K5, null != t && ei.fr),
                children: [
                    (0, n.jsx)(W.D, {
                        variant: "heading-lg/medium",
                        color: "text-strong",
                        className: ei.DD,
                        children: null != a && "" !== a ? a : i,
                    }),
                    (0, n.jsxs)("div", {
                        className: ei.KW,
                        children: [
                            null != m &&
                                "" !== m &&
                                (0, n.jsx)(er, {
                                    icon: null != r ? (0, n.jsx)(Z.A, { game: r, size: Z.M.XXSMALL }) : void 0,
                                    label: m,
                                }),
                            null != o &&
                                (0, n.jsx)(er, { icon: (0, n.jsx)(Q.Ay, { guild: o, iconSize: 16 }), label: o.name }),
                            null != f && (0, n.jsx)(er, { icon: f, label: u ?? "" }),
                            (0, n.jsx)(er, { label: (0, et.mk)(new Date(l.createdAt)) }),
                            s.length > 0 &&
                                (0, n.jsx)("div", {
                                    className: ei.Ho,
                                    children: (0, n.jsx)($.A, { users: s, maxUsers: 10, size: F._3.SIZE_16 }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var eo = l(973177);
let ec = { [R.yz.ORIGINAL]: null, [R.yz.PORTRAIT_9_16]: 9 / 16, [R.yz.LANDSCAPE_16_9]: 16 / 9 };
function eu() {
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
                    u = ec[e],
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
        (0, n.jsx)("div", { ref: l, className: eo.pC, children: (0, n.jsx)("div", { ref: i, className: eo.E$ }) })
    );
}
var ed = l(831453),
    em = l(607345);
let ef = [
    { key: "topStart", className: em.On },
    { key: "topEnd", className: em.zI },
    { key: "bottomEnd", className: em.TP },
    { key: "bottomStart", className: em.kb },
];
function eh(e) {
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
                            let l = ep(t.centerX, t.centerY, e.clientX, e.clientY);
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
                (t.stopPropagation(), t.preventDefault(), x(), y.current?.focus({ preventScroll: !0 }));
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
                    startAngleDeg: ep(s, o, t.clientX, t.clientY),
                };
            },
            [x, l, i, r, L],
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
                    g({ position: { x: (0, v.clamp)(l.x + n, 0, 1), y: (0, v.clamp)(l.y + a, 0, 1) } }));
            },
            [g, l, i],
        );
    return (0, n.jsx)("div", {
        ref: j,
        className: em.DW,
        children: (0, n.jsxs)(s.D, {
            innerRef: y,
            className: p()(em.aP, { [em.$A]: f }),
            style: { display: h ? void 0 : "none" },
            "aria-label": t,
            "aria-keyshortcuts": "Alt+ArrowLeft Alt+ArrowRight",
            onClick: x,
            onMouseDown: D("move"),
            onKeyDown: M,
            children: [
                b,
                f &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { "aria-hidden": !0, className: em.t$ }),
                            (0, n.jsx)("div", {
                                "aria-hidden": !0,
                                className: em.oT,
                                onMouseDown: D("rotate"),
                                children: (0, n.jsx)(ed.RotateIcon, { size: "xxs", color: "currentColor" }),
                            }),
                            m &&
                                ef.map((e) => {
                                    let { key: t, className: l } = e;
                                    return (0, n.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: p()(em.ZV, l), onMouseDown: D("scale") },
                                        t,
                                    );
                                }),
                        ],
                    }),
            ],
        }),
    });
}
function ep(e, t, l, n) {
    return (180 * Math.atan2(n - t, l - e)) / Math.PI;
}
var ev = l(663357),
    ex = l(683825),
    eg = l(545052);
function eb(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { useCurrentTime: r } = (0, w.T)(),
        { updateImageTrackData: s } = (0, ev.fn)(),
        o = r(),
        { src: c, position: u, rotationDeg: d, widthFraction: m, naturalWidth: f, naturalHeight: h } = t.data,
        p = t.data.shadow ?? "none",
        v = t.data.shadowColor ?? R.pk,
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
        b = R.EC[p],
        j =
            b > 0
                ? `drop-shadow(0 calc(${0.4 * b} * var(--clip-track-scale)) calc(${b} * var(--clip-track-scale)) ${v})`
                : void 0;
    return (0, n.jsx)(eh, {
        label: ea.intl.formatToPlainString(ex.default.lZuIri, { fileName: t.data.fileName }),
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
            className: eg.S,
            src: c,
            alt: "",
            "aria-hidden": !0,
            draggable: !1,
            style: { filter: j },
        }),
    });
}
var ej = l(637526);
function ey(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { useCurrentTime: r } = (0, w.T)(),
        { updateTextTrackData: s } = (0, ev.fn)(),
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
    return (0, n.jsxs)(eh, {
        label: ea.intl.formatToPlainString(ex.default.EDmwVf, { text: c }),
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
                    className: ej.C,
                    style: {
                        color: d.strokeColor,
                        WebkitTextStrokeColor: d.strokeColor,
                        WebkitTextStrokeWidth: `${p}em`,
                    },
                    children: c,
                }),
            (0, n.jsx)("span", { className: ej.L, style: { color: d.color }, children: c }),
        ],
    });
}
var eC = l(164636),
    eN = l(461150),
    ek = l(782134),
    eE = l(113494),
    ew = l(898196),
    eA = l(559106),
    eI = l(765671),
    eL = l(531685);
(l(323874), l(14289), l(35956), l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162));
var eR = l(646514),
    eT = l(602853),
    eS = l(602674),
    eD = l(335416),
    eM = l(556250);
let eP = new Map(),
    eO = a.memo(function (e) {
        let { clipId: t, voiceAudioTracks: i, onMouseDown: r, className: s, alwaysRenderContainer: o = !1 } = e,
            c = a.useRef(null),
            { ref: u, width: d, height: m } = (0, eI.Ay)(),
            [f, h] = a.useState(null),
            v = (0, eT.r)(eR.A.colors.BACKGROUND_MOD_STRONG).hex();
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
                l = eP.get(e);
            if (null != l) return void h(l.waveform);
            let n = c.current,
                a = !1;
            function r(t) {
                if (a) return;
                let { waveform: l, error: n } = t.data;
                null != n ? R.GU.error("Failed to load waveform:", n) : (eP.set(e, { waveform: l }), h(l));
            }
            return (
                n.addEventListener("message", r),
                !(async function () {
                    try {
                        let e = (0, eS.v)();
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
                i = -(a * (eD.Jh.waveformBarWidth - 1));
            (t.clearRect(0, 0, l, n), (t.fillStyle = v));
            for (let e = 0; e < f.length; e++) {
                let l = f[e] * n,
                    r = e * a + i;
                t.fillRect(r, n, a - i, -l);
            }
        }, [v, d, u, m, f]),
        0 === i.length)
            ? o
                ? (0, n.jsx)("div", { className: p()(eM.k, s), onMouseDown: r })
                : null
            : (0, n.jsx)("div", {
                  className: p()(eM.k, s),
                  children: (0, n.jsx)("canvas", {
                      className: eM.s,
                      ref: u,
                      width: (d ?? 0) * 2,
                      height: (m ?? 0) * 2,
                      onMouseDown: r,
                  }),
              });
    });
var e_ = l(683063),
    ez = l(565645),
    eU = l(562153),
    e$ = l(443184),
    eG = l(931540);
function eB(e, t) {
    return (0, e$.$b)(e, t.type, t.type === R.Gy.GAME_EVENT ? t.eventName : void 0);
}
function eX(e) {
    return { timestamp: e.peakMs, signal: { type: e.type, userId: e.userId, confidence: e.peakConfidence } };
}
function eH(e) {
    let { icon: t, title: l, body: a, position: i, compact: r } = e;
    return (0, n.jsx)(e_.u, {
        title: l,
        body: a,
        position: "top",
        children: (0, n.jsx)("div", {
            className: p()(eG.H, { [eG.c]: r }),
            style: { left: `${i}%` },
            children: (0, n.jsx)(t, { size: "refresh_sm", color: eR.A.colors.ICON_DEFAULT }),
        }),
    });
}
let eW = { [R.Gy.LAUGHTER]: ex.default.bTC23D, [R.Gy.SHOUTING]: ex.default["3gqpuo"] };
function eF(e) {
    let { icon: t, signal: l, guildId: a, position: i, compact: r } = e,
        s = (0, U.bG)([ee.default], () => ee.default.getUser(l.userId)),
        o = (0, eU.tx)(a, null, s);
    return null == l.emojiId && null == l.emojiName
        ? (0, n.jsx)(eH, { icon: t, title: l.name, body: o, position: i, compact: r })
        : (0, n.jsx)(e_.u, {
              title: l.name,
              body: o,
              position: "top",
              children: (0, n.jsx)("div", {
                  className: p()(eG.H, { [eG.c]: r }),
                  style: { left: `${i}%` },
                  children: (0, n.jsx)(ez.A, {
                      emojiId: l.emojiId ?? null,
                      emojiName: l.emojiName ?? null,
                      animated: l.emojiAnimated,
                      size: "reaction",
                  }),
              }),
          });
}
let eV = a.memo(function (e) {
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
                      })).push(...r.map(eX))
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
                (e = e.filter((e) => eB(s, e.signal) > 0)).sort((e, t) => e.timestamp - t.timestamp),
                e.sort((e, t) => eB(s, t.signal) - eB(s, e.signal)),
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
        let o = ((l = e.signal), (0, e$.u6)(s, l.type, l.type === R.Gy.GAME_EVENT ? l.eventName : void 0));
        if (null == o) return null;
        let u = `${e.timestamp}-${e.signal.type}`;
        switch (e.signal.type) {
            case R.Gy.LAUGHTER:
            case R.Gy.SHOUTING:
                return (0, n.jsx)(
                    eH,
                    {
                        icon: o,
                        title: ea.intl.string(eW[e.signal.type]),
                        body: ea.intl.string(ex.default["ry+jxm"]),
                        position: r,
                        compact: i,
                    },
                    u,
                );
            case R.Gy.GAME_EVENT:
                return (0, n.jsx)(
                    eH,
                    {
                        icon: o,
                        title:
                            ((a = e.signal),
                            (0, e$.PZ)(s, a.type, a.type === R.Gy.GAME_EVENT ? a.eventName : void 0) ?? ""),
                        body: ea.intl.string(ex.default["347DBb"]),
                        position: r,
                        compact: i,
                    },
                    `${u}-${e.signal.eventName ?? ""}`,
                );
            case R.Gy.SOUNDBOARD:
                if (!e.signal.playing) return null;
                return (0, n.jsx)(eF, { icon: o, signal: e.signal, guildId: t.guildId, position: r, compact: i }, u);
            default:
                return null;
        }
    });
});
var eK = l(590936);
let eY = a.memo(function (e) {
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
                (0, n.jsx)(eV, { clip: l, videoLength: t, compact: s }),
            ],
        }),
    });
});
var eZ = l(765548),
    eQ = l(591246);
function eq(e) {
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
        j = (0, eZ.A)((e) => {
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
        N = a.useCallback(
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
        k = a.useCallback(
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
        className: eQ.nM,
        children: (0, n.jsxs)("div", {
            ref: f,
            className: eQ.hz,
            children: [
                (0, n.jsx)(eA.vN, {
                    children: (0, n.jsx)(s.D, {
                        className: p()(eQ.u4, { [eQ.jX]: u }),
                        style: { left: `${w}%`, width: `${A}%`, backgroundColor: i },
                        onMouseDown: C("move"),
                        onKeyDown: N,
                        "aria-label": t,
                        children: (0, n.jsx)("div", {
                            className: eQ.Kq,
                            children: (0, n.jsx)(G.E, {
                                variant: "body-sm/medium",
                                color: "none",
                                className: eQ.Vd,
                                children: l,
                            }),
                        }),
                    }),
                }),
                (0, n.jsx)(eA.vN, {
                    children: (0, n.jsx)("button", {
                        className: eQ.YQ,
                        style: { left: `${w}%` },
                        onMouseDown: C("start"),
                        onKeyDown: k,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": 0,
                        "aria-valuenow": r,
                        "aria-valuemax": o - 1,
                        "aria-label": t,
                        children: (0, n.jsx)("div", { className: eQ.gt }),
                    }),
                }),
                (0, n.jsx)(eA.vN, {
                    children: (0, n.jsx)("button", {
                        className: eQ.JZ,
                        style: { left: `${w + A}%` },
                        onMouseDown: C("end"),
                        onKeyDown: E,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": r + 1,
                        "aria-valuenow": o,
                        "aria-valuemax": c,
                        "aria-label": t,
                        children: (0, n.jsx)("div", { className: eQ.gt }),
                    }),
                }),
            ],
        }),
    });
}
var eJ = l(302034),
    e0 = l(503535);
function e1(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        n = Math.floor((e % 1) * 100);
    return ((t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (n = n < 10 ? "0" + n : n), `${t}:${l}.${n}`);
}
function e5(e) {
    let t = Math.floor(e / 60),
        l = ea.intl.formatToPlainString(ea.t.iXLF9W, { minutes: t }),
        n = ea.intl.formatToPlainString(ea.t.geSp4K, { seconds: e % 60 });
    return `${l} ${n}`;
}
function e3(e) {
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
        } = (0, w.T)(),
        { tracks: C, selectedTrackId: N, setSelectedTrackId: k, updateTrackRange: E } = (0, ev.fn)(),
        A = i(),
        [I, L] = a.useState(null),
        T = a.useRef(null),
        S = a.useRef(null),
        [D, M] = a.useState(!1),
        [P, _] = a.useState(null);
    a.useEffect(
        () =>
            x({
                onPlay: () => {
                    (L(null), M(!1));
                },
            }),
        [x],
    );
    let { ref: z, width: U = 0, height: $ = 0 } = (0, eI.Ay)(),
        B = (0, eC.bG)([eL.A], () => eL.A.windowSize()),
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
                let l = (((0, v.clamp)(e, P.left, P.right) - P.left) / P.width) * r,
                    n = (0, v.clamp)(l, 0, r),
                    a = I;
                (null == a && t && ((a = "playhead"), s && (h(), M(!0)), L(a)),
                    "start" === a ? d(n) : "end" === a ? m(n) : "playhead" === a && g((0, v.clamp)(n, o, c)));
            },
            [r, P, I, o, c, s, h, d, m, g],
        ),
        V = a.useCallback(
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
        K = a.useCallback(
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
        en = a.useCallback(() => {
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
        className: e0.f4,
        children: [
            (0, n.jsx)("div", { className: e0.qs }),
            (0, n.jsxs)("div", {
                className: e0.lx,
                children: [
                    (0, n.jsx)("div", {
                        className: e0.k2,
                        children: (0, n.jsx)("div", {
                            ref: S,
                            className: e0.re,
                            children: (0, n.jsxs)(G.E, {
                                variant: "body-xs/medium",
                                className: e0.g7,
                                color: "text-muted",
                                children: [
                                    (0, n.jsx)("span", { className: e0.$k, children: e1(et) }),
                                    (0, n.jsx)("span", { className: e0.xW, children: " / " }),
                                    e1(u),
                                ],
                            }),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: e0.s2,
                        children: [
                            (0, n.jsx)(X.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: eN.SkipBackwardIcon,
                                onClick: el,
                                "aria-label": ea.intl.string(eJ.default["dRVF+Z"]),
                            }),
                            (0, n.jsx)(X.K, {
                                size: "sm",
                                icon: s ? eE.PauseIcon : ek.PlayIcon,
                                onClick: ei,
                                "aria-label": ea.intl.string(s ? ea.t.ZcgDJX : ea.t.RscU7I),
                                variant: "icon-only",
                            }),
                            (0, n.jsx)(X.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: ew.SkipForwardIcon,
                                onClick: en,
                                "aria-label": ea.intl.string(eJ.default.yV2FLL),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: e0.fL,
                ref: H,
                children: [
                    (0, n.jsx)(eY, { onMouseDown: Y, videoLength: r, clip: b, noBottomMargin: !0, compact: !0 }),
                    (0, n.jsx)(eO, {
                        onMouseDown: Y,
                        voiceAudioTracks: t,
                        clipId: b.id,
                        className: e0.ou,
                        alwaysRenderContainer: !0,
                    }),
                    (0, n.jsx)("div", {
                        className: e0.iI,
                        children: (0, n.jsxs)("div", {
                            className: e0.Qp,
                            children: [
                                (0, n.jsx)("div", { className: e0.bd }),
                                (0, n.jsx)("div", {
                                    className: e0.PH,
                                    children: (0, n.jsxs)("div", {
                                        className: p()(e0.IO, { [e0.Dg]: null != I }),
                                        onMouseDown: Y,
                                        children: [
                                            (0, n.jsx)("canvas", { className: e0.Ay, ref: z }),
                                            (0, n.jsx)(eA.vN, {
                                                children: (0, n.jsx)("div", {
                                                    tabIndex: 0,
                                                    ref: T,
                                                    className: e0.lG,
                                                    children: (0, n.jsx)("svg", {
                                                        className: e0.$6,
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
                                            (0, n.jsx)("div", { className: e0.QT, style: eo }),
                                            (0, n.jsxs)("div", {
                                                className: e0.Ws,
                                                style: {
                                                    left: null != r ? `${(o / r) * 100}%` : "0",
                                                    right: null != r ? `${((r - c) / r) * 100}%` : "0",
                                                },
                                                children: [
                                                    (0, n.jsx)(eA.vN, {
                                                        children: (0, n.jsxs)("button", {
                                                            className: e0.uI,
                                                            onMouseDown: Z("start"),
                                                            onKeyDown: V,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": 0,
                                                            "aria-valuenow": o,
                                                            "aria-valuetext": e5(o),
                                                            "aria-valuemax": c - 0.1,
                                                            "aria-label": ea.intl.string(ea.t["+BTvw8"]),
                                                            children: [
                                                                (0, n.jsx)("div", { className: e0.FV }),
                                                                (0, n.jsxs)("svg", {
                                                                    className: e0.lm,
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
                                                    (0, n.jsx)(eA.vN, {
                                                        children: (0, n.jsxs)("button", {
                                                            className: e0.H1,
                                                            onMouseDown: Z("end"),
                                                            onKeyDown: K,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": o + 0.1,
                                                            "aria-valuenow": c,
                                                            "aria-valuetext": e5(c),
                                                            "aria-valuemax": r,
                                                            "aria-label": ea.intl.string(ea.t.bBgBYo),
                                                            children: [
                                                                (0, n.jsx)("div", { className: e0.kn }),
                                                                (0, n.jsxs)("svg", {
                                                                    className: e0.mN,
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
                                        eq,
                                        {
                                            label: (function (e) {
                                                switch (e) {
                                                    case R.Me.TEXT:
                                                        return ea.intl.string(ex.default.WvkbtB);
                                                    case R.Me.IMAGE:
                                                        return ea.intl.string(ex.default.heHHUW);
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
function e9(e) {
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
        } = (0, w.T)(),
        { analyticsLocations: C } = (0, c.Ay)(o.A.CLIPS_EDITOR),
        { tracks: N, selectedTrackId: k, setSelectedTrackId: E, removeTrack: A } = (0, ev.fn)(),
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
    let L = a.useMemo(() => x.filter((e) => e.trackName.includes(":voice")), [x]),
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
            className: eo.OJ,
            children: [
                (0, n.jsx)(z, {}),
                t !== r.ip.ENTERED
                    ? (0, n.jsx)(f, {})
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(es, { onBack: l }),
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
    let D = null == v || t !== r.ip.ENTERED,
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
                ? (0, n.jsx)(eu, {})
                : N.map((e) => {
                      switch (e.type) {
                          case R.Me.TEXT:
                              return (0, n.jsx)(ey, { track: e, selected: e.id === k, onSelect: () => E(e.id) }, e.id);
                          case R.Me.IMAGE:
                              return (0, n.jsx)(eb, { track: e, selected: e.id === k, onSelect: () => E(e.id) }, e.id);
                          default:
                              return null;
                      }
                  })),
        (0, n.jsx)(c.f5, {
            value: C,
            children: (0, n.jsxs)("div", {
                className: eo.OJ,
                children: [
                    (0, n.jsx)(z, {}),
                    (0, n.jsx)("div", {
                        className: eo.zT,
                        children: D
                            ? (0, n.jsx)(f, {})
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(es, { onBack: l }),
                                      (0, n.jsx)("div", {
                                          className: eo.x3,
                                          children: (0, n.jsx)(P, {
                                              ref: p,
                                              cropFraming: !M,
                                              frameAspectRatio: $,
                                              overlay: G,
                                              loop: !1,
                                          }),
                                      }),
                                      (0, n.jsx)("div", {
                                          className: eo.fL,
                                          children: (0, n.jsx)(e3, { transitionState: t, voiceAudioTracks: L }),
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
        })
    );
}

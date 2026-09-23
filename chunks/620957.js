l.d(t, { A: () => e2 });
var a = l(477900),
    n = l(582128),
    i = l(621466),
    s = l(231723),
    r = l(939249),
    o = l(793574),
    c = l(688810),
    u = l(256905),
    d = l(635793),
    m = l(164386);
function f() {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { className: m.OC }),
            (0, a.jsx)("div", {
                className: m.f4,
                children: (0, a.jsxs)("div", {
                    className: m.fL,
                    children: [
                        (0, a.jsx)("div", { className: m.u }),
                        (0, a.jsx)("div", { className: m.ou }),
                        (0, a.jsx)("div", { className: m.PH }),
                    ],
                }),
            }),
        ],
    });
}
l(321073);
var h = l(503698),
    x = l.n(h),
    p = l(435558),
    v = l.n(p),
    g = l(194498),
    j = l(607470),
    C = l(176781),
    b = l(901127);
function y(e) {
    let { className: t } = e;
    return (0, a.jsx)("div", {
        className: x()(b.L, t),
        children: (0, a.jsx)(C.x, { size: "lg", color: "currentColor" }),
    });
}
var w = l(367974),
    N = l(376595),
    E = l(773503),
    k = l(362081);
let A = [],
    L = [];
function R() {
    let { subscribe: e, soundboardAudioEnabled: t, voiceAudioEnabled: l, clip: i } = (0, k.T)(),
        s = i.decision?.timestamp ?? 0,
        r = n.useMemo(() => new N.H(i.timeline ?? []), [i.timeline]),
        o = s - i.length,
        c = n.useCallback(
            (e) => {
                let t = 1e3 * v().round(e, 3);
                return r.getEventsAtTimestamp(o + t);
            },
            [r, o],
        ),
        [u, d] = n.useState(() => c(0));
    return (
        n.useEffect(
            () =>
                e({
                    onTimeUpdate: (e) => {
                        d(c(e));
                    },
                }),
            [e, c],
        ),
        (0, a.jsx)(E.A, {
            speakingUserIds: l ? u.speakingUserIds : A,
            activeSoundboards: t ? u.activeSoundboards : L,
            userIds: i.users,
            guildId: i.guildId,
            channelId: i.channelId,
        })
    );
}
var M = l(696016),
    I = l(933092),
    T = l(24468);
function D(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: a, soundboardAudioEnabled: n, isVoiceClip: i } = t;
    if (!i && l && a && n)
        if (e.includes(M.gC.ALL)) return !1;
        else return !0;
    return e.includes(M.gC.APPLICATION) ? !l : e.includes(M.gC.VOICE) ? !a : !e.includes(M.gC.SOUNDBOARD) || !n;
}
function S(e) {
    let { setRef: t, audioTrackLabel: l, src: i, muted: s } = e,
        r = n.useCallback(
            (e) => {
                t(e, l);
            },
            [t, l],
        ),
        o = n.useCallback(
            (e) => {
                Object.values(e.currentTarget.audioTracks).forEach((e) => {
                    e.enabled = l === e.label;
                });
            },
            [l],
        );
    return (0, a.jsx)("audio", {
        id: `ClipsPlayerAudioTrack:${l}`,
        ref: r,
        src: i ?? void 0,
        muted: s,
        preload: "auto",
        className: T.R,
        onLoadedMetadata: o,
    });
}
let O = n.forwardRef(function (e, t) {
    let { overlay: l, cropFraming: i, frameAspectRatio: s, loop: r = !0 } = e,
        {
            cropStart: o,
            cropEnd: c,
            setVideoPlayerRef: u,
            videoURL: d,
            audioURL: m,
            applicationAudioEnabled: f,
            voiceAudioEnabled: h,
            soundboardAudioEnabled: v,
            clip: C,
        } = (0, k.T)(),
        b = n.useRef({}),
        N = n.useRef(null),
        E = n.useRef(!1),
        [A, L] = n.useState([]),
        O = n.useCallback(() => {
            let e = b.current.main;
            if (null == e) return;
            let t = (0, p.round)(e.currentTime, 3),
                l = (0, p.round)(o, 3);
            if (t >= (null != c ? (0, p.round)(c, 3) : (0, p.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(b.current)) null != e && (e.currentTime = o);
                return !0;
            }
        }, [o, c]),
        P = n.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(M.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(M.gC.VOICE) || l.label.includes(M.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            L(t);
        }, []),
        _ = n.useCallback(() => {
            for (let e of ((E.current = !0), O(), Object.values(b.current))) null != e && e.play();
        }, [O]),
        z = n.useCallback(() => {
            for (let e of Object.values(b.current)) null != e && e.pause();
        }, []);
    (0, g.A)(() => {
        if (E.current) {
            if (!r) {
                let e = b.current.main;
                if (null != e) {
                    let t = null != c ? (0, p.round)(c, 3) : (0, p.round)(e.duration, 3);
                    if ((0, p.round)(e.currentTime, 3) >= t) {
                        (z(), (E.current = !1));
                        return;
                    }
                }
            }
            O() && _();
        }
    });
    let U = n.useCallback((e) => {
            for (let t of (b.current.main?.paused && (E.current = !1), Object.values(b.current)))
                null != t && (t.currentTime = e);
        }, []),
        $ = n.useCallback(() => {
            b.current.main?.paused ? _() : z();
        }, [_, z]),
        H = n.useCallback((e) => {
            b.current.main = e;
        }, []),
        G = n.useCallback((e, t) => {
            b.current[t] = e;
        }, []);
    n.useImperativeHandle(t, () => {
        let e = { play: _, seek: U, pause: z, videoElement: b.current.main };
        return (u(e), e);
    }, [_, U, z, u]);
    let B = n.useCallback(() => {
        U(o);
    }, [U, o]);
    n.useLayoutEffect(() => {
        let e = b.current;
        return () => {
            for (let t of Object.values(e)) (0, w.A)(t);
        };
    }, []);
    let F = C.type === M.nQ.VOICE_CLIP,
        X = !0 === i && !F && null != s;
    return (n.useLayoutEffect(() => {
        let e = N.current;
        if (null == e) return;
        if (!X) {
            ((e.style.width = ""), (e.style.height = ""));
            return;
        }
        function t() {
            let e = N.current,
                t = b.current.main;
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
        let a = new ResizeObserver(t);
        return (a.observe(l), () => a.disconnect());
    }, [X, s]),
    null == d)
        ? null
        : (0, a.jsxs)("div", {
              ref: N,
              className: x()(I.DV, X && I.Ln),
              children: [
                  F
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)("audio", { ref: H, src: d, muted: !0, preload: "auto" }),
                                (0, a.jsx)(y, { className: I.Ap }),
                            ],
                        })
                      : (0, a.jsx)(j.A, {
                            onClick: $,
                            className: x()(I.Ap, X && I.HU),
                            style: X ? { aspectRatio: s } : void 0,
                            ref: H,
                            src: d,
                            muted: D(":all", {
                                applicationAudioEnabled: f,
                                voiceAudioEnabled: h,
                                soundboardAudioEnabled: v,
                                isVoiceClip: F,
                            }),
                            preload: "auto",
                            onLoadedData: B,
                        }),
                  (0, a.jsx)(R, {}),
                  l,
                  (0, a.jsx)("audio", {
                      id: "ClipsPlayerAudioTrack:application",
                      src: m ?? void 0,
                      muted: D(":application", {
                          applicationAudioEnabled: f,
                          voiceAudioEnabled: h,
                          soundboardAudioEnabled: v,
                          isVoiceClip: F,
                      }),
                      className: T.R,
                      preload: "auto",
                      ref: (e) => G(e, "main:application"),
                      onLoadedMetadata: P,
                  }),
                  A.map((e) =>
                      (0, a.jsx)(
                          S,
                          {
                              setRef: G,
                              audioTrackLabel: e,
                              src: m,
                              muted: D(e, {
                                  applicationAudioEnabled: f,
                                  voiceAudioEnabled: h,
                                  soundboardAudioEnabled: v,
                                  isVoiceClip: F,
                              }),
                          },
                          e,
                      ),
                  ),
              ],
          });
});
function P(e, t) {
    let l = e / M.YM;
    return (t && (l /= M.iJ), l);
}
var _ = l(22745);
function z() {
    let { clip: e } = (0, k.T)();
    return "" !== e.thumbnail
        ? (0, a.jsx)("img", { className: _.T, src: e.thumbnail, alt: "", "aria-hidden": !0 })
        : null;
}
var U = l(17928),
    $ = l(342952),
    H = l(834730),
    G = l(778712),
    B = l(429913),
    F = l(47167),
    X = l(713654),
    V = l(769015),
    W = l(145497),
    Z = l(734057),
    K = l(71393),
    Y = l(287809),
    J = l(58703),
    Q = l(403362),
    q = l(818433),
    ee = l(620828);
function et(e) {
    let { icon: t, label: l } = e;
    return (0, a.jsxs)("div", {
        className: ee.Ho,
        children: [
            null != t && (0, a.jsx)("div", { className: ee.t8, children: t }),
            (0, a.jsx)(H.E, { variant: "text-xs/normal", color: "text-subtle", className: ee.Mk, children: l }),
        ],
    });
}
function el() {
    let { clip: e } = (0, k.T)(),
        t = (0, B.h)(e.applicationId),
        l = (0, U.yK)([Y.default], () => e.users.map(Y.default.getUser).filter(Q.Vq)),
        n = (0, U.bG)([K.A], () => (null != e.guildId ? K.A.getGuild(e.guildId) : null)),
        i = (0, U.bG)([Z.A], () => (null != e.channelId ? Z.A.getChannel(e.channelId) : null)),
        s = (0, F.Ay)(i),
        r = null != i ? (0, X.gU)(i, n) : null,
        o = t?.name ?? e.applicationName,
        c =
            null != i && null != r
                ? (0, a.jsx)(r, { size: "custom", width: 16, height: 16, color: "currentColor" })
                : null;
    return (0, a.jsxs)("div", {
        className: ee.wx,
        children: [
            (0, a.jsx)(q.A, { variant: "text-md/medium", className: ee.DD }),
            (0, a.jsxs)("div", {
                className: ee.KW,
                children: [
                    null != o &&
                        "" !== o &&
                        (0, a.jsx)(et, {
                            icon: null != t ? (0, a.jsx)(V.A, { game: t, size: V.M.XXSMALL }) : void 0,
                            label: o,
                        }),
                    null != n && (0, a.jsx)(et, { icon: (0, a.jsx)(W.Ay, { guild: n, iconSize: 16 }), label: n.name }),
                    null != c && (0, a.jsx)(et, { icon: c, label: s ?? "" }),
                    (0, a.jsx)(et, { label: (0, J.mk)(new Date(e.createdAt)) }),
                    l.length > 0 &&
                        (0, a.jsx)("div", {
                            className: ee.Ho,
                            children: (0, a.jsx)($.A, { users: l, maxUsers: 10, size: G._3.SIZE_16 }),
                        }),
                ],
            }),
        ],
    });
}
var ea = l(973177);
let en = { [M.yz.ORIGINAL]: null, [M.yz.PORTRAIT_9_16]: 9 / 16, [M.yz.LANDSCAPE_16_9]: 16 / 9 };
function ei() {
    let { cropPreset: e, videoPlayerRef: t } = (0, k.T)(),
        l = n.useRef(null),
        i = n.useRef(null);
    return (
        n.useEffect(() => {
            let a = l.current;
            if (null == a) return;
            function n() {
                if (null == a) return;
                let l = a.parentElement,
                    n = i.current;
                if (null == l || null == n) return;
                let s = l.getBoundingClientRect(),
                    r = (t.current?.videoElement ?? l).getBoundingClientRect(),
                    o = r.left - s.left,
                    c = r.top - s.top,
                    u = en[e],
                    d = o,
                    m = c,
                    f = r.width,
                    h = r.height;
                (null != u &&
                    ((h = (f = Math.min(r.width, r.height * u)) / u),
                    (d = o + (r.width - f) / 2),
                    (m = c + (r.height - h) / 2)),
                    (n.style.left = `${d}px`),
                    (n.style.top = `${m}px`),
                    (n.style.width = `${f}px`),
                    (n.style.height = `${h}px`));
            }
            n();
            let s = new ResizeObserver(n);
            s.observe(a.parentElement ?? a);
            let r = t.current?.videoElement;
            return (
                null != r && s.observe(r),
                window.addEventListener("resize", n),
                () => {
                    (s.disconnect(), window.removeEventListener("resize", n));
                }
            );
        }, [e, t]),
        (0, a.jsx)("div", { ref: l, className: ea.pC, children: (0, a.jsx)("div", { ref: i, className: ea.E$ }) })
    );
}
var es = l(831453),
    er = l(607345);
let eo = [
    { key: "topStart", className: er.On },
    { key: "topEnd", className: er.zI },
    { key: "bottomEnd", className: er.TP },
    { key: "bottomStart", className: er.kb },
];
function ec(e) {
    let {
            label: t,
            position: l,
            rotationDeg: i,
            scale: s,
            minScale: o,
            maxScale: c,
            sizing: u,
            aspectRatio: d,
            resizable: m = !0,
            selected: f,
            visible: h,
            onSelect: v,
            onChange: g,
            children: j,
        } = e,
        C = n.useRef(null),
        b = n.useRef(null),
        y = n.useRef(null),
        w = n.useRef(l),
        N = n.useRef(i),
        E = n.useRef(s),
        A = n.useRef(d),
        L = n.useCallback(
            (e) => {
                let t,
                    l = b.current;
                if (null == l) return;
                let { x: a, y: n } = w.current;
                if (
                    ((l.style.left = `${e.left + a * e.width}px`),
                    (l.style.top = `${e.top + n * e.height}px`),
                    (l.style.transform = `translate(-50%, -50%) rotate(${N.current}deg)`),
                    "fixed" === u)
                ) {
                    ((t = E.current * e.width), (l.style.width = `${t}px`));
                    let a = A.current;
                    l.style.height = null != a && a > 0 ? `${t / a}px` : "auto";
                } else ((t = E.current * e.height), (l.style.fontSize = `${t}px`));
                l.style.setProperty("--clip-track-scale", `${t}px`);
            },
            [u],
        ),
        R = (function (e, t) {
            let { videoPlayerRef: l } = (0, k.T)(),
                a = n.useRef(null);
            return (
                n.useEffect(() => {
                    let n = e.current?.parentElement;
                    if (null == n) return;
                    function i() {
                        if (null == n) return;
                        let e = n.getBoundingClientRect(),
                            i = (l.current?.videoElement ?? n).getBoundingClientRect(),
                            s = { left: i.left - e.left, top: i.top - e.top, width: i.width, height: i.height };
                        ((a.current = s), t(s));
                    }
                    i();
                    let s = new ResizeObserver(i);
                    s.observe(n);
                    let r = l.current?.videoElement;
                    return (
                        null != r && s.observe(r),
                        window.addEventListener("resize", i),
                        () => {
                            (s.disconnect(), window.removeEventListener("resize", i));
                        }
                    );
                }, [e, t, l]),
                a
            );
        })(C, L);
    n.useEffect(() => {
        ((w.current = l), (N.current = i), (E.current = s), (A.current = d));
        let e = R.current;
        null != e && L(e);
    }, [l, i, s, d, L, R]);
    let I = n.useCallback(
            (e) => {
                let t = y.current,
                    l = R.current,
                    a = C.current?.getBoundingClientRect();
                if (null != t && null != l && null != a)
                    switch (t.mode) {
                        case "move":
                            g({
                                position: {
                                    x: (0, p.clamp)((e.clientX - a.left - l.left) / l.width - t.grabOffset.x, 0, 1),
                                    y: (0, p.clamp)((e.clientY - a.top - l.top) / l.height - t.grabOffset.y, 0, 1),
                                },
                            });
                            break;
                        case "scale": {
                            if (0 === t.startDistance) return;
                            let l = Math.hypot(e.clientX - t.centerX, e.clientY - t.centerY);
                            g({ scale: (0, p.clamp)((t.baseScale * l) / t.startDistance, o, c) });
                            break;
                        }
                        case "rotate": {
                            let l = eu(t.centerX, t.centerY, e.clientX, e.clientY);
                            g({ rotationDeg: (0, M.Ew)(t.baseRotationDeg + l - t.startAngleDeg) });
                        }
                    }
            },
            [g, o, c, R],
        ),
        T = n.useCallback(() => {
            y.current = null;
        }, []);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", I),
            document.addEventListener("mouseup", T),
            () => {
                (document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", T));
            }
        ),
        [I, T],
    );
    let D = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(), t.preventDefault(), v(), b.current?.focus({ preventScroll: !0 }));
                let a = R.current,
                    n = C.current?.getBoundingClientRect();
                if (null == a || null == n || 0 === a.width || 0 === a.height) return;
                let r = n.left + a.left + l.x * a.width,
                    o = n.top + a.top + l.y * a.height;
                y.current = {
                    mode: e,
                    centerX: r,
                    centerY: o,
                    baseRotationDeg: i,
                    baseScale: s,
                    grabOffset: {
                        x: (t.clientX - n.left - a.left) / a.width - l.x,
                        y: (t.clientY - n.top - a.top) / a.height - l.y,
                    },
                    startDistance: Math.hypot(t.clientX - r, t.clientY - o),
                    startAngleDeg: eu(r, o, t.clientX, t.clientY),
                };
            },
            [v, l, i, s, R],
        ),
        S = n.useCallback(
            (e) => {
                if (e.altKey) {
                    let t = 0;
                    if ("ArrowLeft" === e.key) t = -1;
                    else {
                        if ("ArrowRight" !== e.key) return;
                        t = 1;
                    }
                    (e.preventDefault(), e.stopPropagation(), g({ rotationDeg: (0, M.Ew)(i + t * M.p4) }));
                    return;
                }
                let t = e.shiftKey ? 0.05 : 0.01,
                    a = 0,
                    n = 0;
                switch (e.key) {
                    case "ArrowLeft":
                        a = -t;
                        break;
                    case "ArrowRight":
                        a = t;
                        break;
                    case "ArrowUp":
                        n = -t;
                        break;
                    case "ArrowDown":
                        n = t;
                        break;
                    default:
                        return;
                }
                (e.preventDefault(),
                    e.stopPropagation(),
                    g({ position: { x: (0, p.clamp)(l.x + a, 0, 1), y: (0, p.clamp)(l.y + n, 0, 1) } }));
            },
            [g, l, i],
        );
    return (0, a.jsx)("div", {
        ref: C,
        className: er.DW,
        children: (0, a.jsxs)(r.D, {
            innerRef: b,
            className: x()(er.aP, { [er.$A]: f }),
            style: { display: h ? void 0 : "none" },
            "aria-label": t,
            "aria-keyshortcuts": "Alt+ArrowLeft Alt+ArrowRight",
            onClick: v,
            onMouseDown: D("move"),
            onKeyDown: S,
            children: [
                j,
                f &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", { "aria-hidden": !0, className: er.t$ }),
                            (0, a.jsx)("div", {
                                "aria-hidden": !0,
                                className: er.oT,
                                onMouseDown: D("rotate"),
                                children: (0, a.jsx)(es.H, { size: "xxs", color: "currentColor" }),
                            }),
                            m &&
                                eo.map((e) => {
                                    let { key: t, className: l } = e;
                                    return (0, a.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: x()(er.ZV, l), onMouseDown: D("scale") },
                                        t,
                                    );
                                }),
                        ],
                    }),
            ],
        }),
    });
}
function eu(e, t, l, a) {
    return (180 * Math.atan2(a - t, l - e)) / Math.PI;
}
var ed = l(245116),
    em = l(704796),
    ef = l(375708),
    eh = l(545052);
function ex(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { useCurrentTime: s } = (0, k.T)(),
        { updateImageTrackData: r } = (0, ed.fn)(),
        o = s(),
        { src: c, position: u, rotationDeg: d, widthFraction: m, naturalWidth: f, naturalHeight: h } = t.data,
        x = t.data.shadow ?? M.xy,
        p = t.data.shadowColor ?? M.pk,
        v = n.useCallback(
            (e) => {
                let { position: l, rotationDeg: a, scale: n } = e;
                r(t.id, (e) => ({
                    ...e,
                    position: l ?? e.position,
                    rotationDeg: a ?? e.rotationDeg,
                    widthFraction: n ?? e.widthFraction,
                }));
            },
            [r, t.id],
        ),
        g = o >= t.startSec - 0.05 && o <= t.endSec + 0.05,
        j = M.EC[x],
        C =
            j > 0
                ? `drop-shadow(0 calc(${j * M.HA} * var(--clip-track-scale)) calc(${j} * var(--clip-track-scale)) ${p})`
                : void 0;
    return (0, a.jsx)(ec, {
        label: ef.intl.formatToPlainString(em.default.lZuIri, { fileName: t.data.fileName }),
        position: u,
        rotationDeg: d,
        scale: m,
        minScale: M.DX,
        maxScale: M.nS,
        sizing: "fixed",
        aspectRatio: f / h,
        selected: l,
        visible: g,
        onSelect: i,
        onChange: v,
        children: (0, a.jsx)("img", {
            className: eh.S,
            src: c,
            alt: "",
            "aria-hidden": !0,
            draggable: !1,
            style: { filter: C },
        }),
    });
}
var ep = l(637526);
function ev(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { useCurrentTime: s } = (0, k.T)(),
        { updateTextTrackData: r } = (0, ed.fn)(),
        o = s(),
        { text: c, position: u, style: d } = t.data,
        m = t.data.rotationDeg ?? M.ad,
        f = n.useCallback(
            (e) => {
                let { position: l, rotationDeg: a, scale: n } = e;
                r(t.id, (e) => ({
                    ...e,
                    position: l ?? e.position,
                    rotationDeg: a ?? e.rotationDeg,
                    style: null != n ? { ...e.style, fontSize: n } : e.style,
                }));
            },
            [r, t.id],
        ),
        h = o >= t.startSec - 0.05 && o <= t.endSec + 0.05,
        x = M.mO[d.strokeWidth];
    return (0, a.jsxs)(ec, {
        label: ef.intl.formatToPlainString(em.default.EDmwVf, { text: c }),
        position: u,
        rotationDeg: m,
        scale: d.fontSize,
        minScale: M.z2,
        maxScale: M.T7,
        sizing: "content",
        resizable: !1,
        selected: l,
        visible: h,
        onSelect: i,
        onChange: f,
        children: [
            x > 0 &&
                (0, a.jsx)("span", {
                    "aria-hidden": !0,
                    className: ep.C,
                    style: {
                        color: d.strokeColor,
                        WebkitTextStrokeColor: d.strokeColor,
                        WebkitTextStrokeWidth: `${x}em`,
                    },
                    children: c,
                }),
            (0, a.jsx)("span", { className: ep.L, style: { color: d.color }, children: c }),
        ],
    });
}
var eg = l(702841),
    ej = l(408278),
    eC = l(461150),
    eb = l(782134),
    ey = l(113494),
    ew = l(898196),
    eN = l(559106),
    eE = l(765671),
    ek = l(531685);
(l(323874), l(14289), l(35956), l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162));
var eA = l(661531),
    eL = l(602853),
    eR = l(602674),
    eM = l(335416),
    eI = l(556250);
let eT = new Map(),
    eD = n.memo(function (e) {
        let { clipId: t, voiceAudioTracks: i, onMouseDown: s, className: r, alwaysRenderContainer: o = !1 } = e,
            c = n.useRef(null),
            { ref: u, width: d, height: m } = (0, eE.Ay)(),
            [f, h] = n.useState(null),
            p = (0, eL.r)(eA.A.colors.BACKGROUND_MOD_STRONG).hex();
        return (n.useEffect(
            () => (
                (c.current = new Worker(new URL("/assets/" + l.u("33197"), l.b))),
                () => {
                    c.current?.terminate();
                }
            ),
            [],
        ),
        n.useEffect(() => {
            if (0 === d || 0 === i.length || null == c.current) return;
            let e = `${t}-${i.map((e) => e.trackName).join(",")}-${d}`,
                l = eT.get(e);
            if (null != l) return void h(l.waveform);
            let a = c.current,
                n = !1;
            function s(t) {
                if (n) return;
                let { waveform: l, error: a } = t.data;
                null != a ? M.nx.error("Failed to load waveform:", a) : (eT.set(e, { waveform: l }), h(l));
            }
            return (
                a.addEventListener("message", s),
                (async function () {
                    try {
                        let e = (0, eR.v)();
                        if (null == e) throw Error("Failed to create audio context");
                        let t = await Promise.all(i.map((t) => e.decodeAudioData(t.arrayBuffer.slice(0))));
                        if (n) return;
                        let l = [],
                            s = [];
                        for (let e of t) {
                            let t = [];
                            for (let l = 0; l < e.numberOfChannels; l++) {
                                let a = new Float32Array(e.getChannelData(l));
                                (t.push(a), s.push(a.buffer));
                            }
                            l.push(t);
                        }
                        a.postMessage({ trackChannels: l, width: d }, s);
                    } catch (e) {
                        n || M.nx.error("Failed to decode audio:", e);
                    }
                })(),
                () => {
                    ((n = !0), a.removeEventListener("message", s));
                }
            );
        }, [i, t, d]),
        n.useEffect(() => {
            if (null == u.current || null == f || (d ?? 0) === 0 || (m ?? 0) === 0) return;
            let e = u.current,
                t = e.getContext("2d");
            if (null == t) return;
            let { width: l, height: a } = e,
                n = l / f.length,
                i = -(n * (eM.Jh.waveformBarWidth - 1));
            (t.clearRect(0, 0, l, a), (t.fillStyle = p));
            for (let e = 0; e < f.length; e++) {
                let l = f[e] * a,
                    s = e * n + i;
                t.fillRect(s, a, n - i, -l);
            }
        }, [p, d, u, m, f]),
        0 === i.length)
            ? o
                ? (0, a.jsx)("div", { className: x()(eI.k, r), onMouseDown: s })
                : null
            : (0, a.jsx)("div", {
                  className: x()(eI.k, r),
                  children: (0, a.jsx)("canvas", {
                      className: eI.s,
                      ref: u,
                      width: (d ?? 0) * 2,
                      height: (m ?? 0) * 2,
                      onMouseDown: s,
                  }),
              });
    });
var eS = l(343032),
    eO = l(713608),
    eP = l(683063),
    e_ = l(7807),
    ez = l(565645),
    eU = l(562153),
    e$ = l(260612),
    eH = l(953727),
    eG = l(931540);
function eB(e) {
    let { icon: t, title: l, body: n, position: i, compact: s } = e;
    return (0, a.jsx)(eP.u, {
        title: l,
        body: n,
        position: "top",
        children: (0, a.jsx)("div", {
            className: x()(eG.H, { [eG.c]: s }),
            style: { left: `${i}%` },
            children: (0, a.jsx)(t, { size: "refresh_sm", color: eA.A.colors.ICON_DEFAULT }),
        }),
    });
}
let eF = {
    [M.Gy.LAUGHTER]: { icon: eS.i, title: em.default.bTC23D },
    [M.Gy.SHOUTING]: {
        icon: function (e) {
            let {
                    size: t = "md",
                    width: l,
                    height: n,
                    color: i = eA.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: s = "",
                    ...r
                } = e,
                o = (0, e$.J)(t),
                c = o?.width ?? l,
                u = o?.height ?? n,
                d = "string" == typeof i ? i : i.css;
            return (0, a.jsxs)("svg", {
                ...(0, eH.A)(r),
                width: c,
                height: u,
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, a.jsx)("path", {
                        d: "M8.00002 8.00033C7.30688 8.00033 6.73728 8.79367 6.67277 9.80803C7.07947 9.93174 7.5283 10.0003 8.00002 10.0003C8.47174 10.0003 8.92057 9.93174 9.32727 9.80803C9.26276 8.79367 8.69315 8.00033 8.00002 8.00033Z",
                        fill: d,
                        className: s,
                    }),
                    (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M15.3334 8.00033C15.3334 12.0504 12.0502 15.3337 8.00008 15.3337C3.94999 15.3337 0.666748 12.0504 0.666748 8.00033C0.666748 3.95024 3.94999 0.666992 8.00008 0.666992C12.0502 0.666992 15.3334 3.95024 15.3334 8.00033ZM3.4038 4.36885C3.56846 4.03953 3.9689 3.90605 4.29822 4.07071L6.29822 5.07071C6.52408 5.18364 6.66675 5.41448 6.66675 5.66699C6.66675 5.91951 6.52408 6.15035 6.29822 6.26328L4.29822 7.26328C3.9689 7.42794 3.56846 7.29445 3.4038 6.96514C3.23914 6.63582 3.37262 6.23537 3.70194 6.07071L4.50937 5.66699L3.70194 5.26328C3.37262 5.09862 3.23914 4.69817 3.4038 4.36885ZM11.7019 4.07071C12.0313 3.90605 12.4317 4.03953 12.5964 4.36885C12.761 4.69817 12.6275 5.09862 12.2982 5.26328L11.4908 5.66699L12.2982 6.07071C12.6275 6.23537 12.761 6.63582 12.5964 6.96514C12.4317 7.29445 12.0313 7.42794 11.7019 7.26328L9.70194 6.26328C9.47608 6.15035 9.33341 5.91951 9.33341 5.66699C9.33341 5.41448 9.47608 5.18364 9.70194 5.07071L11.7019 4.07071ZM10.6667 10.0003C10.6667 11.8413 9.47284 13.3337 8.00008 13.3337C6.52732 13.3337 5.33341 11.8413 5.33341 10.0003C5.33341 8.15938 6.52732 6.66699 8.00008 6.66699C9.47284 6.66699 10.6667 8.15938 10.6667 10.0003Z",
                        fill: d,
                        className: s,
                    }),
                ],
            });
        },
        title: em.default["3gqpuo"],
    },
};
function eX(e, t, l, n) {
    let { icon: i, title: s } = eF[e];
    return (0, a.jsx)(
        eB,
        { icon: i, title: ef.intl.string(s), body: ef.intl.string(em.default["ry+jxm"]), position: l, compact: n },
        t,
    );
}
function eV(e) {
    let { signal: t, guildId: l, position: n, compact: i } = e,
        s = (0, U.bG)([Y.default], () => Y.default.getUser(t.userId)),
        r = (0, eU.tx)(l, null, s);
    return null == t.emojiId && null == t.emojiName
        ? (0, a.jsx)(eB, { icon: e_.J, title: t.name, body: r, position: n, compact: i })
        : (0, a.jsx)(eP.u, {
              title: t.name,
              body: r,
              position: "top",
              children: (0, a.jsx)("div", {
                  className: x()(eG.H, { [eG.c]: i }),
                  style: { left: `${n}%` },
                  children: (0, a.jsx)(ez.A, {
                      emojiId: t.emojiId ?? null,
                      emojiName: t.emojiName ?? null,
                      animated: t.emojiAnimated,
                      size: "reaction",
                  }),
              }),
          });
}
let eW = n.memo(function (e) {
    let { clip: t, videoLength: l, compact: i = !1 } = e,
        s = t.audioEvents,
        r = null != s,
        o = n.useMemo(
            () =>
                r
                    ? t.timeline.filter((e) => {
                          var t;
                          return (t = e.signal.type) !== M.Gy.LAUGHTER && t !== M.Gy.SHOUTING;
                      })
                    : (function (e) {
                          let t = e
                                  .filter((e) => e.signal.type === M.Gy.LAUGHTER && e.signal.confidence > 0.8)
                                  .sort((e, t) => e.timestamp - t.timestamp),
                              l = new Set(),
                              a = 0;
                          for (let e = 1; e <= t.length; e++)
                              (e < t.length && t[e].timestamp - t[e - 1].timestamp < 2500) ||
                                  (e - a >= 2 && l.add(t[e - 1]), (a = e));
                          return e.filter((e) => e.signal.type !== M.Gy.LAUGHTER || l.has(e));
                      })(t.timeline),
            [t.timeline, r],
        );
    function c(e) {
        if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
        let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
        return a < 0 || a > l ? null : (a / l) * 100;
    }
    return [
        ...(r
            ? s.map(function (e, t) {
                  let l = c(e.peakMs);
                  return null == l ? null : eX(e.type, `audio-${e.peakMs}-${e.type}-${t}`, l, i);
              })
            : []),
        ...o.map(function (e) {
            if (e.signal.hiddenFromTimeline) return null;
            let l = c(e.timestamp);
            if (null == l) return null;
            let n = `${e.timestamp}-${e.signal.type}`;
            switch (e.signal.type) {
                case M.Gy.LAUGHTER:
                    return eX(M.Gy.LAUGHTER, n, l, i);
                case M.Gy.SHOUTING:
                    return eX(M.Gy.SHOUTING, n, l, i);
                case M.Gy.GAME_EVENT:
                    return (0, a.jsx)(
                        eB,
                        {
                            icon: eO.q,
                            title: e.signal.title ?? "",
                            body: ef.intl.string(em.default["347DBb"]),
                            position: l,
                            compact: i,
                        },
                        n,
                    );
                case M.Gy.SOUNDBOARD:
                    if (!e.signal.playing) return null;
                    return (0, a.jsx)(eV, { signal: e.signal, guildId: t.guildId, position: l, compact: i }, n);
                default:
                    return null;
            }
        }),
    ];
});
var eZ = l(590936);
let eK = n.memo(function (e) {
    let { videoLength: t, clip: l, onMouseDown: i, noBottomMargin: s = !1, compact: r = !1 } = e,
        { timeNotches: o, subNotches: c } = n.useMemo(() => {
            let e;
            if (null == t || t <= 0) return { timeNotches: [], subNotches: [] };
            let l = [],
                a = t / 6;
            e =
                a <= 1
                    ? 1
                    : a <= 2
                      ? 2
                      : a <= 5
                        ? 5
                        : a <= 10
                          ? 10
                          : a <= 15
                            ? 15
                            : a <= 20
                              ? 20
                              : a <= 30
                                ? 30
                                : 10 * Math.round(a / 10);
            for (let a = 0; a <= t; a += e) {
                let e = (a / t) * 100;
                l.push({ time: a, position: e });
            }
            (0 === l.length || l[l.length - 1].time < t - 2) && l.push({ time: t, position: 100 });
            let n = [],
                i = e / 5;
            for (let e = i; e < t; e += i)
                if (!l.some((t) => 0.01 > Math.abs(t.time - e))) {
                    let l = (e / t) * 100;
                    n.push({ position: l });
                }
            return { timeNotches: l, subNotches: n };
        }, [t]);
    return (0, a.jsx)("div", {
        className: x()(eZ.ZX, { [eZ.dZ]: s, [eZ.oE]: r }),
        onMouseDown: i,
        children: (0, a.jsxs)("div", {
            className: eZ.QY,
            children: [
                c.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: eZ.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, a.jsx)("div", { className: eZ.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                o.map((e, t) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: eZ.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, a.jsx)("div", { className: eZ.d9 }),
                                (0, a.jsxs)(H.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: eZ.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, a.jsx)(eW, { clip: l, videoLength: t, compact: r }),
            ],
        }),
    });
});
var eY = l(591246);
function eJ(e) {
    let {
            label: t,
            text: l,
            color: i,
            startSec: s,
            endSec: o,
            totalDurationSec: c,
            selected: u,
            onSelect: d,
            onChangeRange: m,
        } = e,
        f = n.useRef(null),
        h = n.useRef(null),
        [v, g] = n.useState(null),
        j = n.useCallback(() => {
            let e = f.current;
            if (null == e) return 0;
            let t = e.getBoundingClientRect();
            return 0 === t.width ? 0 : c / t.width;
        }, [c]),
        C = n.useCallback(
            (e) => {
                let t = h.current;
                if (null == t) return;
                let l = (e.clientX - t.clientX) * j();
                if ("start" === t.mode) m((0, p.clamp)(t.initialStart + l, 0, t.initialEnd - M.Cx), t.initialEnd);
                else if ("end" === t.mode) {
                    let e = (0, p.clamp)(t.initialEnd + l, t.initialStart + M.Cx, c);
                    m(t.initialStart, e);
                } else {
                    let e = t.initialEnd - t.initialStart,
                        a = (0, p.clamp)(t.initialStart + l, 0, c - e);
                    m(a, a + e);
                }
            },
            [j, m, c],
        ),
        b = n.useCallback(() => {
            ((h.current = null), g(null));
        }, []);
    n.useEffect(() => {
        if (null != v)
            return (
                document.addEventListener("mousemove", C),
                document.addEventListener("mouseup", b),
                () => {
                    (document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", b));
                }
            );
    }, [v, C, b]);
    let y = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(),
                    d(),
                    (h.current = { mode: e, clientX: t.clientX, initialStart: s, initialEnd: o }),
                    g(e));
            },
            [d, s, o],
        ),
        w = n.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = o - s,
                    a = !1,
                    n = s;
                ("ArrowLeft" === e.key
                    ? ((a = !0), (n = (0, p.clamp)(s - t, 0, c - l)))
                    : "ArrowRight" === e.key && ((a = !0), (n = (0, p.clamp)(s + t, 0, c - l))),
                    a && (e.preventDefault(), e.stopPropagation(), m(n, n + l)));
            },
            [s, o, c, m],
        ),
        N = n.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    a = s;
                ("ArrowLeft" === e.key
                    ? ((l = !0), (a = (0, p.clamp)(s - t, 0, o - M.Cx)))
                    : "ArrowRight" === e.key && ((l = !0), (a = (0, p.clamp)(s + t, 0, o - M.Cx))),
                    l && (e.preventDefault(), e.stopPropagation(), m(a, o)));
            },
            [s, o, m],
        ),
        E = n.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    a = o;
                ("ArrowLeft" === e.key
                    ? ((l = !0), (a = (0, p.clamp)(o - t, s + M.Cx, c)))
                    : "ArrowRight" === e.key && ((l = !0), (a = (0, p.clamp)(o + t, s + M.Cx, c))),
                    l && (e.preventDefault(), e.stopPropagation(), m(s, a)));
            },
            [s, o, c, m],
        ),
        k = 0 === c ? 0 : (s / c) * 100,
        A = 0 === c ? 0 : ((o - s) / c) * 100;
    return (0, a.jsx)("div", {
        className: eY.nM,
        children: (0, a.jsxs)("div", {
            ref: f,
            className: eY.hz,
            children: [
                (0, a.jsx)(eN.vN, {
                    children: (0, a.jsx)(r.D, {
                        className: x()(eY.u4, { [eY.jX]: u }),
                        style: { left: `${k}%`, width: `${A}%`, backgroundColor: i },
                        onMouseDown: y("move"),
                        onKeyDown: w,
                        "aria-label": t,
                        children: (0, a.jsx)("div", {
                            className: eY.Kq,
                            children: (0, a.jsx)(H.E, {
                                variant: "text-sm/medium",
                                color: "none",
                                className: eY.Vd,
                                children: l,
                            }),
                        }),
                    }),
                }),
                (0, a.jsx)(eN.vN, {
                    children: (0, a.jsx)("button", {
                        className: eY.YQ,
                        style: { left: `${k}%` },
                        onMouseDown: y("start"),
                        onKeyDown: N,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": 0,
                        "aria-valuenow": s,
                        "aria-valuemax": o - M.Cx,
                        "aria-label": t,
                        children: (0, a.jsx)("div", { className: eY.gt }),
                    }),
                }),
                (0, a.jsx)(eN.vN, {
                    children: (0, a.jsx)("button", {
                        className: eY.JZ,
                        style: { left: `${k + A}%` },
                        onMouseDown: y("end"),
                        onKeyDown: E,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": s + M.Cx,
                        "aria-valuenow": o,
                        "aria-valuemax": c,
                        "aria-label": t,
                        children: (0, a.jsx)("div", { className: eY.gt }),
                    }),
                }),
            ],
        }),
    });
}
var eQ = l(871273),
    eq = l(503535);
function e0(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return ((t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (a = a < 10 ? "0" + a : a), `${t}:${l}.${a}`);
}
function e1(e) {
    let t = Math.floor(e / 60),
        l = ef.intl.formatToPlainString(ef.t.iXLF9W, { minutes: t }),
        a = ef.intl.formatToPlainString(ef.t.geSp4K, { seconds: e % 60 });
    return `${l} ${a}`;
}
function e3(e) {
    let { voiceAudioTracks: t, transitionState: l } = e,
        {
            useCurrentTime: i,
            duration: s,
            isPlaying: r,
            cropStart: o,
            cropEnd: c,
            cropDuration: u,
            setCropStart: d,
            setCropEnd: m,
            play: f,
            pause: h,
            subscribe: v,
            seek: g,
            clip: j,
            generateThumbnails: C,
            videoDimensions: b,
        } = (0, k.T)(),
        { tracks: y, selectedTrackId: w, setSelectedTrackId: N, updateTrackRange: E } = (0, ed.fn)(),
        A = i(),
        [L, R] = n.useState(null),
        I = n.useRef(null),
        T = n.useRef(null),
        [D, S] = n.useState(!1),
        [O, _] = n.useState(null);
    n.useEffect(
        () =>
            v({
                onPlay: () => {
                    (R(null), S(!1));
                },
            }),
        [v],
    );
    let { ref: z, width: U = 0, height: $ = 0 } = (0, eE.Ay)(),
        G = (0, eg.bG)([ek.A], () => ek.A.windowSize()),
        B = n.useRef(null),
        F = n.useCallback(() => {
            let e = z.current;
            null != e && _(e.getBoundingClientRect());
        }, [z]);
    (n.useMemo(() => {
        (G.width, G.height, F());
    }, [G.width, G.height, U, l, F]),
        n.useEffect(() => {
            let e = B.current;
            if (null != e) return (e.addEventListener("scroll", F), () => e.removeEventListener("scroll", F));
        }, [F]));
    let X = n.useCallback(
            (e, t) => {
                if (null == s || null == O) return;
                let l = (((0, p.clamp)(e, O.left, O.right) - O.left) / O.width) * s,
                    a = (0, p.clamp)(l, 0, s),
                    n = L;
                (null == n && t && ((n = "playhead"), r && (h(), S(!0)), R(n)),
                    "start" === n ? d(a) : "end" === n ? m(a) : "playhead" === n && g((0, p.clamp)(a, o, c)));
            },
            [s, O, L, o, c, r, h, d, m, g],
        ),
        V = n.useCallback(
            (e) => {
                if (null == s) return;
                let t = P(s, e.shiftKey),
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
            [s, d, o],
        ),
        W = n.useCallback(
            (e) => {
                if (null == s) return;
                let t = P(s, e.shiftKey),
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
            [s, m, c],
        ),
        Z = n.useCallback(
            (e) => {
                X(e.clientX, !0);
            },
            [X],
        ),
        K = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(), r && (h(), S(!0)), R(e));
            },
            [r, h],
        ),
        Y = n.useCallback(
            (e) => {
                X(e.clientX, !1);
            },
            [X],
        ),
        J = n.useCallback(() => {
            (D && f(), S(!1), R(null));
        }, [D, f]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", Y),
            document.addEventListener("mouseup", J),
            () => {
                (document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", J));
            }
        ),
        [Y, J],
    );
    let { numberOfPreviews: Q, timelinePreviewWidth: q } = n.useMemo(() => {
        if (null == b) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil($ * (b.width / b.height));
        return { numberOfPreviews: Math.ceil(U / e), timelinePreviewWidth: e };
    }, [$, U, b]);
    n.useEffect(() => {
        if (0 === Q || 0 === q) return;
        let e = z.current;
        if (null == e) return;
        ((e.height = $), (e.width = U));
        let t = e.getContext("2d");
        if (null == t) return;
        ((t.fillStyle = "transparent"), t.fillRect(0, 0, U, $));
        let l = [];
        for (let e = 0; e < Q; e++) l.push((q / U) * s * e);
        return C(l, q, $, (e) => {
            for (let l = 0; l < e.length; l++) (t.drawImage(e[l], q * l, 0, q, $), e[l].close());
        });
    }, [$, z, s, Q, q, C, U]);
    let ee = A - o,
        et = n.useCallback(() => {
            g(Math.max(o, A - 10));
        }, [o, A, g]),
        el = n.useCallback(() => {
            g(Math.min(c, A + 10));
        }, [c, A, g]),
        ea = n.useCallback(() => {
            r ? h() : f();
        }, [r, f, h]),
        en = (o / s) * 100,
        ei = (1 - (s - c) / s) * 100,
        es = {
            background: `linear-gradient(to right, var(--black-500) ${en}%, transparent ${en}%, transparent ${ei}%, var(--black-500) ${ei}%)`,
        };
    return (0, a.jsxs)("div", {
        className: eq.f4,
        children: [
            (0, a.jsx)("div", { className: eq.qs }),
            (0, a.jsxs)("div", {
                className: eq.lx,
                children: [
                    (0, a.jsx)("div", {
                        className: eq.k2,
                        children: (0, a.jsx)("div", {
                            ref: T,
                            className: eq.re,
                            children: (0, a.jsxs)(H.E, {
                                variant: "text-xs/medium",
                                className: eq.g7,
                                color: "text-muted",
                                children: [
                                    (0, a.jsx)("span", { className: eq.$k, children: e0(ee) }),
                                    (0, a.jsx)("span", { className: eq.xW, children: " / " }),
                                    e0(u),
                                ],
                            }),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: eq.s2,
                        children: [
                            (0, a.jsx)(ej.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: eC.q,
                                onClick: et,
                                "aria-label": ef.intl.string(eQ.default["dRVF+Z"]),
                            }),
                            (0, a.jsx)(ej.K, {
                                size: "sm",
                                icon: r ? ey.PauseIcon : eb.PlayIcon,
                                onClick: ea,
                                "aria-label": ef.intl.string(r ? ef.t.ZcgDJX : ef.t.RscU7I),
                                variant: "icon-only",
                            }),
                            (0, a.jsx)(ej.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: ew.i,
                                onClick: el,
                                "aria-label": ef.intl.string(eQ.default.yV2FLL),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: eq.fL,
                ref: B,
                children: [
                    (0, a.jsx)(eK, { onMouseDown: Z, videoLength: s, clip: j, noBottomMargin: !0, compact: !0 }),
                    (0, a.jsx)(eD, {
                        onMouseDown: Z,
                        voiceAudioTracks: t,
                        clipId: j.id,
                        className: eq.ou,
                        alwaysRenderContainer: !0,
                    }),
                    (0, a.jsx)("div", {
                        className: eq.iI,
                        children: (0, a.jsxs)("div", {
                            className: eq.Qp,
                            children: [
                                (0, a.jsx)("div", { className: eq.bd }),
                                (0, a.jsx)("div", {
                                    className: eq.PH,
                                    children: (0, a.jsxs)("div", {
                                        className: x()(eq.IO, { [eq.Dg]: null != L }),
                                        onMouseDown: Z,
                                        children: [
                                            (0, a.jsx)("canvas", { className: eq.Ay, ref: z }),
                                            (0, a.jsx)(eN.vN, {
                                                children: (0, a.jsx)("div", {
                                                    tabIndex: 0,
                                                    ref: I,
                                                    className: eq.lG,
                                                    children: (0, a.jsx)("svg", {
                                                        className: eq.$6,
                                                        width: "10",
                                                        height: "7.5",
                                                        viewBox: "0 0 8 6",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0, a.jsx)("path", {
                                                            d: "M0 0.999999C0 0.447714 0.447715 0 1 0H7C7.55228 0 8 0.447715 8 1V2.5998C8 2.9209 7.8458 3.22248 7.58549 3.41048L4.58549 5.57715C4.23598 5.82957 3.76402 5.82957 3.41451 5.57715L0.41451 3.41048C0.154198 3.22248 0 2.9209 0 2.5998V0.999999Z",
                                                            fill: "currentColor",
                                                        }),
                                                    }),
                                                }),
                                            }),
                                            (0, a.jsx)("div", { className: eq.QT, style: es }),
                                            (0, a.jsxs)("div", {
                                                className: eq.Ws,
                                                style: {
                                                    left: null != s ? `${(o / s) * 100}%` : "0",
                                                    right: null != s ? `${((s - c) / s) * 100}%` : "0",
                                                },
                                                children: [
                                                    (0, a.jsx)(eN.vN, {
                                                        children: (0, a.jsxs)("button", {
                                                            className: eq.uI,
                                                            onMouseDown: K("start"),
                                                            onKeyDown: V,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": 0,
                                                            "aria-valuenow": o,
                                                            "aria-valuetext": e1(o),
                                                            "aria-valuemax": c - M.zj,
                                                            "aria-label": ef.intl.string(ef.t["+BTvw8"]),
                                                            children: [
                                                                (0, a.jsx)("div", { className: eq.FV }),
                                                                (0, a.jsxs)("svg", {
                                                                    className: eq.lm,
                                                                    width: "8",
                                                                    height: "56",
                                                                    viewBox: "0 0 8 56",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    "aria-hidden": !0,
                                                                    children: [
                                                                        (0, a.jsx)("path", {
                                                                            d: "M0 48C1.93283e-07 52.4183 3.58172 56 8 56H0V48Z",
                                                                        }),
                                                                        (0, a.jsx)("path", {
                                                                            d: "M8 0C3.58172 0 0 3.58172 0 8V0H8Z",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, a.jsx)(eN.vN, {
                                                        children: (0, a.jsxs)("button", {
                                                            className: eq.H1,
                                                            onMouseDown: K("end"),
                                                            onKeyDown: W,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": o + M.zj,
                                                            "aria-valuenow": c,
                                                            "aria-valuetext": e1(c),
                                                            "aria-valuemax": s,
                                                            "aria-label": ef.intl.string(ef.t.bBgBYo),
                                                            children: [
                                                                (0, a.jsx)("div", { className: eq.kn }),
                                                                (0, a.jsxs)("svg", {
                                                                    className: eq.mN,
                                                                    width: "8",
                                                                    height: "56",
                                                                    viewBox: "0 0 8 56",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    "aria-hidden": !0,
                                                                    children: [
                                                                        (0, a.jsx)("path", {
                                                                            d: "M8 48C8 52.4183 4.41828 56 0 56H8V48Z",
                                                                        }),
                                                                        (0, a.jsx)("path", {
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
                                y.map((e) =>
                                    (0, a.jsx)(
                                        eJ,
                                        {
                                            label: (function (e) {
                                                switch (e) {
                                                    case M.Me.TEXT:
                                                        return ef.intl.string(em.default.WvkbtB);
                                                    case M.Me.IMAGE:
                                                        return ef.intl.string(em.default.heHHUW);
                                                    default:
                                                        return "";
                                                }
                                            })(e.type),
                                            text: (function (e) {
                                                switch (e.type) {
                                                    case M.Me.TEXT:
                                                        return e.data.text;
                                                    case M.Me.IMAGE:
                                                        return e.data.fileName;
                                                    default:
                                                        return "";
                                                }
                                            })(e),
                                            color: M.mY[e.type],
                                            startSec: e.startSec,
                                            endSec: e.endSec,
                                            totalDurationSec: s,
                                            selected: w === e.id,
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
    let { transitionState: t } = e,
        {
            cropStart: l,
            cropEnd: m,
            videoPlayerRef: h,
            videoURL: x,
            audioTracks: p,
            clip: v,
            activeTool: g,
            cropPreset: j,
            videoDimensions: C,
        } = (0, k.T)(),
        { analyticsLocations: b } = (0, c.Ay)(o.A.CLIPS_EDITOR),
        { tracks: y, selectedTrackId: w, setSelectedTrackId: N, removeTrack: E } = (0, ed.fn)(),
        A = v.type === M.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!A) return (document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e));
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            if ("Delete" === e.key) {
                null != w && (e.stopPropagation(), e.preventDefault(), E(w));
                return;
            }
            let t = h.current;
            if (null == t) return;
            let a = h.current?.videoElement;
            if (null == a) return;
            let n = P(a.duration, e.shiftKey),
                s = !1;
            switch (e.key) {
                case " ":
                    ((s = !0), a.paused ? t.play() : t.pause());
                    break;
                case "ArrowLeft":
                    ((s = !0), t.seek(Math.max(l, a.currentTime - n)));
                    break;
                case "ArrowRight":
                    ((s = !0), t.seek(Math.min(m, a.currentTime + n)));
            }
            s && (e.stopPropagation(), e.preventDefault());
        }
    }, [h, A, v.type, l, m, w, E]);
    let L = n.useMemo(() => p.filter((e) => e.trackName.includes(":voice")), [p]),
        R = n.useCallback(() => {
            (0, u.R)(
                {
                    items: [{ type: "IMAGE", url: v.thumbnail, proxyUrl: v.thumbnail, alt: v.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [v.thumbnail, v.name]);
    if (A)
        return (0, a.jsxs)("div", {
            className: ea.OJ,
            children: [
                (0, a.jsx)(z, {}),
                t !== s.ip.ENTERED
                    ? (0, a.jsx)(f, {})
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(el, {}),
                              (0, a.jsx)("div", {
                                  className: I.zT,
                                  children: (0, a.jsx)(r.D, {
                                      className: I.xS,
                                      onClick: R,
                                      children: (0, a.jsx)("img", {
                                          className: I.V_,
                                          src: v.thumbnail,
                                          alt: v.name ?? "",
                                      }),
                                  }),
                              }),
                          ],
                      }),
            ],
        });
    let T = null == x || t !== s.ip.ENTERED,
        D = v.type === M.nQ.VOICE_CLIP,
        S = g === d.Y.CROP,
        _ = null != C ? C.width / C.height : null,
        U = S
            ? _
            : (function (e, t) {
                  switch (e) {
                      case M.yz.PORTRAIT_9_16:
                          return 9 / 16;
                      case M.yz.LANDSCAPE_16_9:
                          return 16 / 9;
                      case M.yz.ORIGINAL:
                      default:
                          return t;
                  }
              })(j, _),
        $ = null;
    return (
        ($ =
            S && !D
                ? (0, a.jsx)(ei, {})
                : y.map((e) => {
                      switch (e.type) {
                          case M.Me.TEXT:
                              return (0, a.jsx)(ev, { track: e, selected: e.id === w, onSelect: () => N(e.id) }, e.id);
                          case M.Me.IMAGE:
                              return (0, a.jsx)(ex, { track: e, selected: e.id === w, onSelect: () => N(e.id) }, e.id);
                          default:
                              return null;
                      }
                  })),
        (0, a.jsx)(c.f5, {
            value: b,
            children: (0, a.jsxs)("div", {
                className: ea.OJ,
                children: [
                    (0, a.jsx)(z, {}),
                    (0, a.jsx)("div", {
                        className: ea.zT,
                        children: T
                            ? (0, a.jsx)(f, {})
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(el, {}),
                                      (0, a.jsx)("div", {
                                          className: ea.x3,
                                          children: (0, a.jsx)(O, {
                                              ref: h,
                                              cropFraming: !D,
                                              frameAspectRatio: U,
                                              overlay: $,
                                              loop: !1,
                                          }),
                                      }),
                                      (0, a.jsx)("div", {
                                          className: ea.fL,
                                          children: (0, a.jsx)(e3, { transitionState: t, voiceAudioTracks: L }),
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
        })
    );
}

l.d(t, { A: () => e3 });
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
    p = l.n(h),
    v = l(435558),
    x = l.n(v),
    g = l(194498),
    b = l(607470),
    j = l(176781),
    y = l(901127);
function C(e) {
    let { className: t } = e;
    return (0, a.jsx)("div", {
        className: p()(y.L, t),
        children: (0, a.jsx)(j.x, { size: "lg", color: "currentColor" }),
    });
}
var N = l(367974),
    E = l(376595),
    k = l(773503),
    w = l(923904);
let A = [],
    R = [];
function L() {
    let { subscribe: e, soundboardAudioEnabled: t, voiceAudioEnabled: l, clip: i } = (0, w.T)(),
        s = i.decision?.timestamp ?? 0,
        r = n.useMemo(() => new E.H(i.timeline ?? []), [i.timeline]),
        o = s - i.length,
        c = n.useCallback(
            (e) => {
                let t = 1e3 * x().round(e, 3);
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
        (0, a.jsx)(k.A, {
            speakingUserIds: l ? u.speakingUserIds : A,
            activeSoundboards: t ? u.activeSoundboards : R,
            userIds: i.users,
            guildId: i.guildId,
            channelId: i.channelId,
        })
    );
}
var T = l(696016),
    I = l(933092),
    D = l(24468);
function M(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: a, soundboardAudioEnabled: n, isVoiceClip: i } = t;
    if (!i && l && a && n)
        if (e.includes(T.gC.ALL)) return !1;
        else return !0;
    return e.includes(T.gC.APPLICATION) ? !l : e.includes(T.gC.VOICE) ? !a : !e.includes(T.gC.SOUNDBOARD) || !n;
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
        className: D.R,
        onLoadedMetadata: o,
    });
}
function O(e) {
    let { overlay: t, cropFraming: l, frameAspectRatio: i, loop: s = !0, ref: r } = e,
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
        y = n.useRef({}),
        E = n.useRef(null),
        k = n.useRef(!1),
        [A, R] = n.useState([]),
        O = n.useCallback(() => {
            let e = y.current.main;
            if (null == e) return;
            let t = (0, v.round)(e.currentTime, 3),
                l = (0, v.round)(o, 3);
            if (t >= (null != c ? (0, v.round)(c, 3) : (0, v.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(y.current)) null != e && (e.currentTime = o);
                return !0;
            }
        }, [o, c]),
        P = n.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(T.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(T.gC.VOICE) || l.label.includes(T.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            R(t);
        }, []),
        _ = n.useCallback(() => {
            for (let e of ((k.current = !0), O(), Object.values(y.current))) null != e && e.play();
        }, [O]),
        z = n.useCallback(() => {
            for (let e of Object.values(y.current)) null != e && e.pause();
        }, []);
    (0, g.A)(() => {
        if (k.current) {
            if (!s) {
                let e = y.current.main;
                if (null != e) {
                    let t = null != c ? (0, v.round)(c, 3) : (0, v.round)(e.duration, 3);
                    if ((0, v.round)(e.currentTime, 3) >= t) {
                        (z(), (k.current = !1));
                        return;
                    }
                }
            }
            O() && _();
        }
    });
    let U = n.useCallback((e) => {
            for (let t of (y.current.main?.paused && (k.current = !1), Object.values(y.current)))
                null != t && (t.currentTime = e);
        }, []),
        $ = n.useCallback(() => {
            y.current.main?.paused ? _() : z();
        }, [_, z]),
        G = n.useCallback((e) => {
            y.current.main = e;
        }, []),
        B = n.useCallback((e, t) => {
            y.current[t] = e;
        }, []);
    n.useImperativeHandle(r, () => {
        let e = { play: _, seek: U, pause: z, videoElement: y.current.main };
        return (u(e), e);
    }, [_, U, z, u]);
    let H = n.useCallback(() => {
        U(o);
    }, [U, o]);
    n.useLayoutEffect(() => {
        let e = y.current;
        return () => {
            for (let t of Object.values(e)) (0, N.A)(t);
        };
    }, []);
    let X = j.type === T.nQ.VOICE_CLIP,
        F = !0 === l && !X && null != i;
    return (n.useLayoutEffect(() => {
        let e = E.current;
        if (null == e) return;
        if (!F) {
            ((e.style.width = ""), (e.style.height = ""));
            return;
        }
        function t() {
            let e = E.current,
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
        let a = new ResizeObserver(t);
        return (a.observe(l), () => a.disconnect());
    }, [F, i]),
    null == d)
        ? null
        : (0, a.jsxs)("div", {
              ref: E,
              className: p()(I.DV, F && I.Ln),
              children: [
                  X
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)("audio", { ref: G, src: d, muted: !0, preload: "auto" }),
                                (0, a.jsx)(C, { className: I.Ap }),
                            ],
                        })
                      : (0, a.jsx)(b.A, {
                            onClick: $,
                            className: p()(I.Ap, F && I.HU),
                            style: F ? { aspectRatio: i } : void 0,
                            ref: G,
                            src: d,
                            muted: M(":all", {
                                applicationAudioEnabled: f,
                                voiceAudioEnabled: h,
                                soundboardAudioEnabled: x,
                                isVoiceClip: X,
                            }),
                            preload: "auto",
                            onLoadedData: H,
                        }),
                  (0, a.jsx)(L, {}),
                  t,
                  (0, a.jsx)("audio", {
                      id: "ClipsPlayerAudioTrack:application",
                      src: m ?? void 0,
                      muted: M(":application", {
                          applicationAudioEnabled: f,
                          voiceAudioEnabled: h,
                          soundboardAudioEnabled: x,
                          isVoiceClip: X,
                      }),
                      className: D.R,
                      preload: "auto",
                      ref: (e) => B(e, "main:application"),
                      onLoadedMetadata: P,
                  }),
                  A.map((e) =>
                      (0, a.jsx)(
                          S,
                          {
                              setRef: B,
                              audioTrackLabel: e,
                              src: m,
                              muted: M(e, {
                                  applicationAudioEnabled: f,
                                  voiceAudioEnabled: h,
                                  soundboardAudioEnabled: x,
                                  isVoiceClip: X,
                              }),
                          },
                          e,
                      ),
                  ),
              ],
          });
}
function P(e, t) {
    let l = e / 30;
    return (t && (l /= 10), l);
}
var _ = l(22745);
function z() {
    let { clip: e } = (0, w.T)();
    return "" !== e.thumbnail
        ? (0, a.jsx)("img", { className: _.T, src: e.thumbnail, alt: "", "aria-hidden": !0 })
        : null;
}
var U = l(855986),
    $ = l(342952),
    G = l(834730),
    B = l(866665),
    H = l(408278),
    X = l(548411),
    F = l(534514),
    V = l(778712),
    W = l(429913),
    K = l(47167),
    Z = l(713654),
    Y = l(769015),
    Q = l(145497),
    q = l(734057),
    J = l(71393),
    ee = l(287809),
    et = l(5377),
    el = l(403362),
    ea = l(718812),
    en = l(792996),
    ei = l(620828);
function es(e) {
    let { icon: t, label: l } = e;
    return (0, a.jsxs)("div", {
        className: ei.Ho,
        children: [
            null != t && (0, a.jsx)("div", { className: ei.t8, children: t }),
            (0, a.jsx)(G.E, { variant: "body-xs/normal", color: "text-subtle", className: ei.Mk, children: l }),
        ],
    });
}
function er(e) {
    let { onBack: t } = e,
        { clip: l, clipName: n } = (0, w.T)(),
        i = (0, ea.h)(l),
        s = (0, W.h)(l.applicationId),
        r = (0, U.yK)([ee.default], () => l.users.map(ee.default.getUser).filter(el.Vq)),
        o = (0, U.bG)([J.A], () => (null != l.guildId ? J.A.getGuild(l.guildId) : null)),
        c = (0, U.bG)([q.A], () => (null != l.channelId ? q.A.getChannel(l.channelId) : null)),
        u = (0, K.Ay)(c),
        d = null != c ? (0, Z.gU)(c, o) : null,
        m = s?.name ?? l.applicationName,
        f =
            null != c && null != d
                ? (0, a.jsx)(d, { size: "custom", width: 16, height: 16, color: "currentColor" })
                : null;
    return (0, a.jsxs)("div", {
        className: ei.wx,
        children: [
            null != t &&
                (0, a.jsx)(B.m, {
                    position: "bottom",
                    text: en.intl.string(en.t["13/7kX"]),
                    children: (0, a.jsx)(H.K, {
                        onClick: t,
                        icon: X.Z,
                        size: "md",
                        variant: "icon-only",
                        "aria-label": en.intl.string(en.t["13/7kX"]),
                    }),
                }),
            (0, a.jsxs)("div", {
                className: p()(ei.K5, null != t && ei.fr),
                children: [
                    (0, a.jsx)(F.D, {
                        variant: "heading-lg/medium",
                        color: "text-strong",
                        className: ei.DD,
                        children: null != n && "" !== n ? n : i,
                    }),
                    (0, a.jsxs)("div", {
                        className: ei.KW,
                        children: [
                            null != m &&
                                "" !== m &&
                                (0, a.jsx)(es, {
                                    icon: null != s ? (0, a.jsx)(Y.A, { game: s, size: Y.M.XXSMALL }) : void 0,
                                    label: m,
                                }),
                            null != o &&
                                (0, a.jsx)(es, { icon: (0, a.jsx)(Q.Ay, { guild: o, iconSize: 16 }), label: o.name }),
                            null != f && (0, a.jsx)(es, { icon: f, label: u ?? "" }),
                            (0, a.jsx)(es, { label: (0, et.mk)(new Date(l.createdAt)) }),
                            r.length > 0 &&
                                (0, a.jsx)("div", {
                                    className: ei.Ho,
                                    children: (0, a.jsx)($.A, { users: r, maxUsers: 10, size: V._3.SIZE_16 }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var eo = l(973177);
let ec = { [T.yz.ORIGINAL]: null, [T.yz.PORTRAIT_9_16]: 9 / 16, [T.yz.LANDSCAPE_16_9]: 16 / 9 };
function eu() {
    let { cropPreset: e, videoPlayerRef: t } = (0, w.T)(),
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
                    u = ec[e],
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
        (0, a.jsx)("div", { ref: l, className: eo.pC, children: (0, a.jsx)("div", { ref: i, className: eo.E$ }) })
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
            scale: s,
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
        j = n.useRef(null),
        y = n.useRef(null),
        C = n.useRef(null),
        N = n.useRef(l),
        E = n.useRef(i),
        k = n.useRef(s),
        A = n.useRef(d),
        R = n.useCallback(
            (e) => {
                let t,
                    l = y.current;
                if (null == l) return;
                let { x: a, y: n } = N.current;
                if (
                    ((l.style.left = `${e.left + a * e.width}px`),
                    (l.style.top = `${e.top + n * e.height}px`),
                    (l.style.transform = `translate(-50%, -50%) rotate(${E.current}deg)`),
                    "fixed" === u)
                ) {
                    ((t = k.current * e.width), (l.style.width = `${t}px`));
                    let a = A.current;
                    l.style.height = null != a && a > 0 ? `${t / a}px` : "auto";
                } else ((t = k.current * e.height), (l.style.fontSize = `${t}px`));
                l.style.setProperty("--clip-track-scale", `${t}px`);
            },
            [u],
        ),
        L = (function (e, t) {
            let { videoPlayerRef: l } = (0, w.T)(),
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
        })(j, R);
    n.useEffect(() => {
        ((N.current = l), (E.current = i), (k.current = s), (A.current = d));
        let e = L.current;
        null != e && R(e);
    }, [l, i, s, d, R, L]);
    let I = n.useCallback(
            (e) => {
                let t = C.current,
                    l = L.current,
                    a = j.current?.getBoundingClientRect();
                if (null != t && null != l && null != a)
                    switch (t.mode) {
                        case "move":
                            g({
                                position: {
                                    x: (0, v.clamp)((e.clientX - a.left - l.left) / l.width - t.grabOffset.x, 0, 1),
                                    y: (0, v.clamp)((e.clientY - a.top - l.top) / l.height - t.grabOffset.y, 0, 1),
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
                            g({ rotationDeg: (0, T.Ew)(t.baseRotationDeg + l - t.startAngleDeg) });
                        }
                    }
            },
            [g, o, c, L],
        ),
        D = n.useCallback(() => {
            C.current = null;
        }, []);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", I),
            document.addEventListener("mouseup", D),
            () => {
                (document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", D));
            }
        ),
        [I, D],
    );
    let M = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(), t.preventDefault(), x(), y.current?.focus({ preventScroll: !0 }));
                let a = L.current,
                    n = j.current?.getBoundingClientRect();
                if (null == a || null == n || 0 === a.width || 0 === a.height) return;
                let r = n.left + a.left + l.x * a.width,
                    o = n.top + a.top + l.y * a.height;
                C.current = {
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
                    startAngleDeg: ep(r, o, t.clientX, t.clientY),
                };
            },
            [x, l, i, s, L],
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
                    (e.preventDefault(), e.stopPropagation(), g({ rotationDeg: (0, T.Ew)(i + 15 * t) }));
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
                    g({ position: { x: (0, v.clamp)(l.x + a, 0, 1), y: (0, v.clamp)(l.y + n, 0, 1) } }));
            },
            [g, l, i],
        );
    return (0, a.jsx)("div", {
        ref: j,
        className: em.DW,
        children: (0, a.jsxs)(r.D, {
            innerRef: y,
            className: p()(em.aP, { [em.$A]: f }),
            style: { display: h ? void 0 : "none" },
            "aria-label": t,
            "aria-keyshortcuts": "Alt+ArrowLeft Alt+ArrowRight",
            onClick: x,
            onMouseDown: M("move"),
            onKeyDown: S,
            children: [
                b,
                f &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", { "aria-hidden": !0, className: em.t$ }),
                            (0, a.jsx)("div", {
                                "aria-hidden": !0,
                                className: em.oT,
                                onMouseDown: M("rotate"),
                                children: (0, a.jsx)(ed.H, { size: "xxs", color: "currentColor" }),
                            }),
                            m &&
                                ef.map((e) => {
                                    let { key: t, className: l } = e;
                                    return (0, a.jsx)(
                                        "div",
                                        { "aria-hidden": !0, className: p()(em.ZV, l), onMouseDown: M("scale") },
                                        t,
                                    );
                                }),
                        ],
                    }),
            ],
        }),
    });
}
function ep(e, t, l, a) {
    return (180 * Math.atan2(a - t, l - e)) / Math.PI;
}
var ev = l(663357),
    ex = l(683825),
    eg = l(545052);
function eb(e) {
    let { track: t, selected: l, onSelect: i } = e,
        { useCurrentTime: s } = (0, w.T)(),
        { updateImageTrackData: r } = (0, ev.fn)(),
        o = s(),
        { src: c, position: u, rotationDeg: d, widthFraction: m, naturalWidth: f, naturalHeight: h } = t.data,
        p = t.data.shadow ?? "none",
        v = t.data.shadowColor ?? T.pk,
        x = n.useCallback(
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
        b = T.EC[p],
        j =
            b > 0
                ? `drop-shadow(0 calc(${0.4 * b} * var(--clip-track-scale)) calc(${b} * var(--clip-track-scale)) ${v})`
                : void 0;
    return (0, a.jsx)(eh, {
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
        onChange: x,
        children: (0, a.jsx)("img", {
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
        { useCurrentTime: s } = (0, w.T)(),
        { updateTextTrackData: r } = (0, ev.fn)(),
        o = s(),
        { text: c, position: u, style: d } = t.data,
        m = t.data.rotationDeg ?? 0,
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
        p = T.mO[d.strokeWidth];
    return (0, a.jsxs)(eh, {
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
                (0, a.jsx)("span", {
                    "aria-hidden": !0,
                    className: ej.C,
                    style: {
                        color: d.strokeColor,
                        WebkitTextStrokeColor: d.strokeColor,
                        WebkitTextStrokeWidth: `${p}em`,
                    },
                    children: c,
                }),
            (0, a.jsx)("span", { className: ej.L, style: { color: d.color }, children: c }),
        ],
    });
}
var eC = l(164636),
    eN = l(461150),
    eE = l(782134),
    ek = l(113494),
    ew = l(898196),
    eA = l(559106),
    eR = l(765671),
    eL = l(531685);
(l(323874), l(14289), l(35956), l(393431), l(532706), l(42231), l(232424), l(949626), l(767709), l(65162));
var eT = l(646514),
    eI = l(602853),
    eD = l(602674),
    eM = l(335416),
    eS = l(556250);
let eO = new Map(),
    eP = n.memo(function (e) {
        let { clipId: t, voiceAudioTracks: i, onMouseDown: s, className: r, alwaysRenderContainer: o = !1 } = e,
            c = n.useRef(null),
            { ref: u, width: d, height: m } = (0, eR.Ay)(),
            [f, h] = n.useState(null),
            v = (0, eI.r)(eT.A.colors.BACKGROUND_MOD_STRONG).hex();
        return (n.useEffect(
            () => (
                (c.current = new Worker(new URL("/assets/" + l.u(33197), l.b))),
                () => {
                    c.current?.terminate();
                }
            ),
            [],
        ),
        n.useEffect(() => {
            if (0 === d || 0 === i.length || null == c.current) return;
            let e = `${t}-${i.map((e) => e.trackName).join(",")}-${d}`,
                l = eO.get(e);
            if (null != l) return void h(l.waveform);
            let a = c.current,
                n = !1;
            function s(t) {
                if (n) return;
                let { waveform: l, error: a } = t.data;
                null != a ? T.GU.error("Failed to load waveform:", a) : (eO.set(e, { waveform: l }), h(l));
            }
            return (
                a.addEventListener("message", s),
                !(async function () {
                    try {
                        let e = (0, eD.v)();
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
                        n || T.GU.error("Failed to decode audio:", e);
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
            (t.clearRect(0, 0, l, a), (t.fillStyle = v));
            for (let e = 0; e < f.length; e++) {
                let l = f[e] * a,
                    s = e * n + i;
                t.fillRect(s, a, n - i, -l);
            }
        }, [v, d, u, m, f]),
        0 === i.length)
            ? o
                ? (0, a.jsx)("div", { className: p()(eS.k, r), onMouseDown: s })
                : null
            : (0, a.jsx)("div", {
                  className: p()(eS.k, r),
                  children: (0, a.jsx)("canvas", {
                      className: eS.s,
                      ref: u,
                      width: (d ?? 0) * 2,
                      height: (m ?? 0) * 2,
                      onMouseDown: s,
                  }),
              });
    });
var e_ = l(683063),
    ez = l(565645),
    eU = l(562153),
    e$ = l(443184),
    eG = l(931540);
function eB(e, t) {
    return (0, e$.$b)(e, t.type, t.type === T.Gy.GAME_EVENT ? t.eventName : void 0);
}
function eH(e) {
    return { timestamp: e.peakMs, signal: { type: e.type, userId: e.userId, confidence: e.peakConfidence } };
}
function eX(e) {
    let { icon: t, title: l, body: n, position: i, compact: s } = e;
    return (0, a.jsx)(e_.u, {
        title: l,
        body: n,
        position: "top",
        children: (0, a.jsx)("div", {
            className: p()(eG.H, { [eG.c]: s }),
            style: { left: `${i}%` },
            children: (0, a.jsx)(t, { size: "refresh_sm", color: eT.A.colors.ICON_DEFAULT }),
        }),
    });
}
let eF = { [T.Gy.LAUGHTER]: ex.default.bTC23D, [T.Gy.SHOUTING]: ex.default["3gqpuo"] };
function eV(e) {
    let { icon: t, signal: l, guildId: n, position: i, compact: s } = e,
        r = (0, U.bG)([ee.default], () => ee.default.getUser(l.userId)),
        o = (0, eU.tx)(n, null, r);
    return null == l.emojiId && null == l.emojiName
        ? (0, a.jsx)(eX, { icon: t, title: l.name, body: o, position: i, compact: s })
        : (0, a.jsx)(e_.u, {
              title: l.name,
              body: o,
              position: "top",
              children: (0, a.jsx)("div", {
                  className: p()(eG.H, { [eG.c]: s }),
                  style: { left: `${i}%` },
                  children: (0, a.jsx)(ez.A, {
                      emojiId: l.emojiId ?? null,
                      emojiName: l.emojiName ?? null,
                      animated: l.emojiAnimated,
                      size: "reaction",
                  }),
              }),
          });
}
let eW = n.memo(function (e) {
    let { clip: t, videoLength: l, compact: i = !1 } = e,
        s = t.audioEvents,
        r = t.applicationId,
        o = n.useMemo(() => {
            let e = t.timeline.filter(
                (e) => !e.signal.hiddenFromTimeline && !(e.signal.type === T.Gy.SOUNDBOARD && !e.signal.playing),
            );
            return (
                null != s
                    ? (e = e.filter((e) => {
                          var t;
                          return (t = e.signal.type) !== T.Gy.LAUGHTER && t !== T.Gy.SHOUTING;
                      })).push(...s.map(eH))
                    : (e = (function (e) {
                          let t = e
                                  .filter((e) => e.signal.type === T.Gy.LAUGHTER && e.signal.confidence > 0.8)
                                  .sort((e, t) => e.timestamp - t.timestamp),
                              l = new Set(),
                              a = 0;
                          for (let e = 1; e <= t.length; e++)
                              (e < t.length && t[e].timestamp - t[e - 1].timestamp < 2500) ||
                                  (e - a >= 2 && l.add(t[e - 1]), (a = e));
                          return e.filter((e) => e.signal.type !== T.Gy.LAUGHTER || l.has(e));
                      })(e)),
                (e = e.filter((e) => eB(r, e.signal) > 0)).sort((e, t) => e.timestamp - t.timestamp),
                e.sort((e, t) => eB(r, t.signal) - eB(r, e.signal)),
                e
            );
        }, [t.timeline, s, r]);
    function c(e) {
        if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
        let a = (e - (t.decision?.timestamp - t.length)) / 1e3;
        return a < 0 || a > l ? null : (a / l) * 100;
    }
    let u = [],
        d = [];
    for (let e of o) {
        let t = c(e.timestamp);
        null != t && (d.some((e) => 3 > Math.abs(e - t)) || (u.push(e), d.push(t)));
    }
    return u.map(function (e) {
        var l, n;
        if (e.signal.hiddenFromTimeline) return null;
        let s = c(e.timestamp);
        if (null == s) return null;
        let o = ((l = e.signal), (0, e$.u6)(r, l.type, l.type === T.Gy.GAME_EVENT ? l.eventName : void 0));
        if (null == o) return null;
        let u = `${e.timestamp}-${e.signal.type}`;
        switch (e.signal.type) {
            case T.Gy.LAUGHTER:
            case T.Gy.SHOUTING:
                return (0, a.jsx)(
                    eX,
                    {
                        icon: o,
                        title: en.intl.string(eF[e.signal.type]),
                        body: en.intl.string(ex.default["ry+jxm"]),
                        position: s,
                        compact: i,
                    },
                    u,
                );
            case T.Gy.GAME_EVENT:
                return (0, a.jsx)(
                    eX,
                    {
                        icon: o,
                        title:
                            ((n = e.signal),
                            (0, e$.PZ)(r, n.type, n.type === T.Gy.GAME_EVENT ? n.eventName : void 0) ?? ""),
                        body: en.intl.string(ex.default["347DBb"]),
                        position: s,
                        compact: i,
                    },
                    `${u}-${e.signal.eventName ?? ""}`,
                );
            case T.Gy.SOUNDBOARD:
                if (!e.signal.playing) return null;
                return (0, a.jsx)(eV, { icon: o, signal: e.signal, guildId: t.guildId, position: s, compact: i }, u);
            default:
                return null;
        }
    });
});
var eK = l(590936);
let eZ = n.memo(function (e) {
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
        className: p()(eK.ZX, { [eK.dZ]: s, [eK.oE]: r }),
        onMouseDown: i,
        children: (0, a.jsxs)("div", {
            className: eK.QY,
            children: [
                c.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: eK.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, a.jsx)("div", { className: eK.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                o.map((e, t) =>
                    (0, a.jsxs)(
                        "div",
                        {
                            className: eK.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, a.jsx)("div", { className: eK.d9 }),
                                (0, a.jsxs)(G.E, {
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
                (0, a.jsx)(eW, { clip: l, videoLength: t, compact: r }),
            ],
        }),
    });
});
var eY = l(591246);
function eQ(e) {
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
        [x, g] = n.useState(null),
        b = n.useCallback(() => {
            let e = f.current;
            if (null == e) return 0;
            let t = e.getBoundingClientRect();
            return 0 === t.width ? 0 : c / t.width;
        }, [c]),
        j = n.useCallback(
            (e) => {
                let t = h.current;
                if (null == t) return;
                let l = (e.clientX - t.clientX) * b();
                if ("start" === t.mode) m((0, v.clamp)(t.initialStart + l, 0, t.initialEnd - 1), t.initialEnd);
                else if ("end" === t.mode) {
                    let e = (0, v.clamp)(t.initialEnd + l, t.initialStart + 1, c);
                    m(t.initialStart, e);
                } else {
                    let e = t.initialEnd - t.initialStart,
                        a = (0, v.clamp)(t.initialStart + l, 0, c - e);
                    m(a, a + e);
                }
            },
            [b, m, c],
        ),
        y = n.useCallback(() => {
            ((h.current = null), g(null));
        }, []);
    n.useEffect(() => {
        if (null != x)
            return (
                document.addEventListener("mousemove", j),
                document.addEventListener("mouseup", y),
                () => {
                    (document.removeEventListener("mousemove", j), document.removeEventListener("mouseup", y));
                }
            );
    }, [x, j, y]);
    let C = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(),
                    d(),
                    (h.current = { mode: e, clientX: t.clientX, initialStart: s, initialEnd: o }),
                    g(e));
            },
            [d, s, o],
        ),
        N = n.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = o - s,
                    a = !1,
                    n = s;
                ("ArrowLeft" === e.key
                    ? ((a = !0), (n = (0, v.clamp)(s - t, 0, c - l)))
                    : "ArrowRight" === e.key && ((a = !0), (n = (0, v.clamp)(s + t, 0, c - l))),
                    a && (e.preventDefault(), e.stopPropagation(), m(n, n + l)));
            },
            [s, o, c, m],
        ),
        E = n.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    a = s;
                ("ArrowLeft" === e.key
                    ? ((l = !0), (a = (0, v.clamp)(s - t, 0, o - 1)))
                    : "ArrowRight" === e.key && ((l = !0), (a = (0, v.clamp)(s + t, 0, o - 1))),
                    l && (e.preventDefault(), e.stopPropagation(), m(a, o)));
            },
            [s, o, m],
        ),
        k = n.useCallback(
            (e) => {
                let t = e.shiftKey ? 1 : 0.1,
                    l = !1,
                    a = o;
                ("ArrowLeft" === e.key
                    ? ((l = !0), (a = (0, v.clamp)(o - t, s + 1, c)))
                    : "ArrowRight" === e.key && ((l = !0), (a = (0, v.clamp)(o + t, s + 1, c))),
                    l && (e.preventDefault(), e.stopPropagation(), m(s, a)));
            },
            [s, o, c, m],
        ),
        w = 0 === c ? 0 : (s / c) * 100,
        A = 0 === c ? 0 : ((o - s) / c) * 100;
    return (0, a.jsx)("div", {
        className: eY.nM,
        children: (0, a.jsxs)("div", {
            ref: f,
            className: eY.hz,
            children: [
                (0, a.jsx)(eA.vN, {
                    children: (0, a.jsx)(r.D, {
                        className: p()(eY.u4, { [eY.jX]: u }),
                        style: { left: `${w}%`, width: `${A}%`, backgroundColor: i },
                        onMouseDown: C("move"),
                        onKeyDown: N,
                        "aria-label": t,
                        children: (0, a.jsx)("div", {
                            className: eY.Kq,
                            children: (0, a.jsx)(G.E, {
                                variant: "body-sm/medium",
                                color: "none",
                                className: eY.Vd,
                                children: l,
                            }),
                        }),
                    }),
                }),
                (0, a.jsx)(eA.vN, {
                    children: (0, a.jsx)("button", {
                        className: eY.YQ,
                        style: { left: `${w}%` },
                        onMouseDown: C("start"),
                        onKeyDown: E,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": 0,
                        "aria-valuenow": s,
                        "aria-valuemax": o - 1,
                        "aria-label": t,
                        children: (0, a.jsx)("div", { className: eY.gt }),
                    }),
                }),
                (0, a.jsx)(eA.vN, {
                    children: (0, a.jsx)("button", {
                        className: eY.JZ,
                        style: { left: `${w + A}%` },
                        onMouseDown: C("end"),
                        onKeyDown: k,
                        role: "slider",
                        tabIndex: 0,
                        "aria-valuemin": s + 1,
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
var eq = l(302034),
    eJ = l(503535);
function e0(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        l = Math.floor(e % 60),
        a = Math.floor((e % 1) * 100);
    return ((t = t < 10 ? "0" + t : t), (l = l < 10 ? "0" + l : l), (a = a < 10 ? "0" + a : a), `${t}:${l}.${a}`);
}
function e1(e) {
    let t = Math.floor(e / 60),
        l = en.intl.formatToPlainString(en.t.iXLF9W, { minutes: t }),
        a = en.intl.formatToPlainString(en.t.geSp4K, { seconds: e % 60 });
    return `${l} ${a}`;
}
function e5(e) {
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
            subscribe: x,
            seek: g,
            clip: b,
            generateThumbnails: j,
            videoDimensions: y,
        } = (0, w.T)(),
        { tracks: C, selectedTrackId: N, setSelectedTrackId: E, updateTrackRange: k } = (0, ev.fn)(),
        A = i(),
        [R, L] = n.useState(null),
        I = n.useRef(null),
        D = n.useRef(null),
        [M, S] = n.useState(!1),
        [O, _] = n.useState(null);
    n.useEffect(
        () =>
            x({
                onPlay: () => {
                    (L(null), S(!1));
                },
            }),
        [x],
    );
    let { ref: z, width: U = 0, height: $ = 0 } = (0, eR.Ay)(),
        B = (0, eC.bG)([eL.A], () => eL.A.windowSize()),
        X = n.useRef(null),
        F = n.useCallback(() => {
            let e = z.current;
            null != e && _(e.getBoundingClientRect());
        }, [z]);
    (n.useMemo(() => {
        (B.width, B.height, F());
    }, [B.width, B.height, U, l, F]),
        n.useEffect(() => {
            let e = X.current;
            if (null != e) return (e.addEventListener("scroll", F), () => e.removeEventListener("scroll", F));
        }, [F]));
    let V = n.useCallback(
            (e, t) => {
                if (null == s || null == O) return;
                let l = (((0, v.clamp)(e, O.left, O.right) - O.left) / O.width) * s,
                    a = (0, v.clamp)(l, 0, s),
                    n = R;
                (null == n && t && ((n = "playhead"), r && (h(), S(!0)), L(n)),
                    "start" === n ? d(a) : "end" === n ? m(a) : "playhead" === n && g((0, v.clamp)(a, o, c)));
            },
            [s, O, R, o, c, r, h, d, m, g],
        ),
        W = n.useCallback(
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
        K = n.useCallback(
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
                V(e.clientX, !0);
            },
            [V],
        ),
        Y = n.useCallback(
            (e) => (t) => {
                (t.stopPropagation(), r && (h(), S(!0)), L(e));
            },
            [r, h],
        ),
        Q = n.useCallback(
            (e) => {
                V(e.clientX, !1);
            },
            [V],
        ),
        q = n.useCallback(() => {
            (M && f(), S(!1), L(null));
        }, [M, f]);
    n.useEffect(
        () => (
            document.addEventListener("mousemove", Q),
            document.addEventListener("mouseup", q),
            () => {
                (document.removeEventListener("mousemove", Q), document.removeEventListener("mouseup", q));
            }
        ),
        [Q, q],
    );
    let { numberOfPreviews: J, timelinePreviewWidth: ee } = n.useMemo(() => {
        if (null == y) return { numberOfPreviews: 0, timelinePreviewWidth: 0 };
        let e = Math.ceil($ * (y.width / y.height));
        return { numberOfPreviews: Math.ceil(U / e), timelinePreviewWidth: e };
    }, [$, U, y]);
    n.useEffect(() => {
        if (0 === J || 0 === ee) return;
        let e = z.current;
        if (null == e) return;
        ((e.height = $), (e.width = U));
        let t = e.getContext("2d");
        if (null == t) return;
        ((t.fillStyle = "transparent"), t.fillRect(0, 0, U, $));
        let l = [];
        for (let e = 0; e < J; e++) l.push((ee / U) * s * e);
        return j(l, ee, $, (e) => {
            for (let l = 0; l < e.length; l++) (t.drawImage(e[l], ee * l, 0, ee, $), e[l].close());
        });
    }, [$, z, s, J, ee, j, U]);
    let et = A - o,
        el = n.useCallback(() => {
            g(Math.max(o, A - 10));
        }, [o, A, g]),
        ea = n.useCallback(() => {
            g(Math.min(c, A + 10));
        }, [c, A, g]),
        ei = n.useCallback(() => {
            r ? h() : f();
        }, [r, f, h]),
        es = (o / s) * 100,
        er = (1 - (s - c) / s) * 100,
        eo = {
            background: `linear-gradient(to right, var(--black-500) ${es}%, transparent ${es}%, transparent ${er}%, var(--black-500) ${er}%)`,
        };
    return (0, a.jsxs)("div", {
        className: eJ.f4,
        children: [
            (0, a.jsx)("div", { className: eJ.qs }),
            (0, a.jsxs)("div", {
                className: eJ.lx,
                children: [
                    (0, a.jsx)("div", {
                        className: eJ.k2,
                        children: (0, a.jsx)("div", {
                            ref: D,
                            className: eJ.re,
                            children: (0, a.jsxs)(G.E, {
                                variant: "body-xs/medium",
                                className: eJ.g7,
                                color: "text-muted",
                                children: [
                                    (0, a.jsx)("span", { className: eJ.$k, children: e0(et) }),
                                    (0, a.jsx)("span", { className: eJ.xW, children: " / " }),
                                    e0(u),
                                ],
                            }),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: eJ.s2,
                        children: [
                            (0, a.jsx)(H.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: eN.q,
                                onClick: el,
                                "aria-label": en.intl.string(eq.default["dRVF+Z"]),
                            }),
                            (0, a.jsx)(H.K, {
                                size: "sm",
                                icon: r ? ek.PauseIcon : eE.PlayIcon,
                                onClick: ei,
                                "aria-label": en.intl.string(r ? en.t.ZcgDJX : en.t.RscU7I),
                                variant: "icon-only",
                            }),
                            (0, a.jsx)(H.K, {
                                size: "sm",
                                variant: "icon-only",
                                icon: ew.i,
                                onClick: ea,
                                "aria-label": en.intl.string(eq.default.yV2FLL),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: eJ.fL,
                ref: X,
                children: [
                    (0, a.jsx)(eZ, { onMouseDown: Z, videoLength: s, clip: b, noBottomMargin: !0, compact: !0 }),
                    (0, a.jsx)(eP, {
                        onMouseDown: Z,
                        voiceAudioTracks: t,
                        clipId: b.id,
                        className: eJ.ou,
                        alwaysRenderContainer: !0,
                    }),
                    (0, a.jsx)("div", {
                        className: eJ.iI,
                        children: (0, a.jsxs)("div", {
                            className: eJ.Qp,
                            children: [
                                (0, a.jsx)("div", { className: eJ.bd }),
                                (0, a.jsx)("div", {
                                    className: eJ.PH,
                                    children: (0, a.jsxs)("div", {
                                        className: p()(eJ.IO, { [eJ.Dg]: null != R }),
                                        onMouseDown: Z,
                                        children: [
                                            (0, a.jsx)("canvas", { className: eJ.Ay, ref: z }),
                                            (0, a.jsx)(eA.vN, {
                                                children: (0, a.jsx)("div", {
                                                    tabIndex: 0,
                                                    ref: I,
                                                    className: eJ.lG,
                                                    children: (0, a.jsx)("svg", {
                                                        className: eJ.$6,
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
                                            (0, a.jsx)("div", { className: eJ.QT, style: eo }),
                                            (0, a.jsxs)("div", {
                                                className: eJ.Ws,
                                                style: {
                                                    left: null != s ? `${(o / s) * 100}%` : "0",
                                                    right: null != s ? `${((s - c) / s) * 100}%` : "0",
                                                },
                                                children: [
                                                    (0, a.jsx)(eA.vN, {
                                                        children: (0, a.jsxs)("button", {
                                                            className: eJ.uI,
                                                            onMouseDown: Y("start"),
                                                            onKeyDown: W,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": 0,
                                                            "aria-valuenow": o,
                                                            "aria-valuetext": e1(o),
                                                            "aria-valuemax": c - 0.1,
                                                            "aria-label": en.intl.string(en.t["+BTvw8"]),
                                                            children: [
                                                                (0, a.jsx)("div", { className: eJ.FV }),
                                                                (0, a.jsxs)("svg", {
                                                                    className: eJ.lm,
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
                                                    (0, a.jsx)(eA.vN, {
                                                        children: (0, a.jsxs)("button", {
                                                            className: eJ.H1,
                                                            onMouseDown: Y("end"),
                                                            onKeyDown: K,
                                                            role: "slider",
                                                            tabIndex: 0,
                                                            "aria-valuemin": o + 0.1,
                                                            "aria-valuenow": c,
                                                            "aria-valuetext": e1(c),
                                                            "aria-valuemax": s,
                                                            "aria-label": en.intl.string(en.t.bBgBYo),
                                                            children: [
                                                                (0, a.jsx)("div", { className: eJ.kn }),
                                                                (0, a.jsxs)("svg", {
                                                                    className: eJ.mN,
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
                                C.map((e) =>
                                    (0, a.jsx)(
                                        eQ,
                                        {
                                            label: (function (e) {
                                                switch (e) {
                                                    case T.Me.TEXT:
                                                        return en.intl.string(ex.default.WvkbtB);
                                                    case T.Me.IMAGE:
                                                        return en.intl.string(ex.default.heHHUW);
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
                                            totalDurationSec: s,
                                            selected: N === e.id,
                                            onSelect: () => E(e.id),
                                            onChangeRange: (t, l) => k(e.id, t, l),
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
            videoURL: v,
            audioTracks: x,
            clip: g,
            activeTool: b,
            cropPreset: j,
            videoDimensions: y,
        } = (0, w.T)(),
        { analyticsLocations: C } = (0, c.Ay)(o.A.CLIPS_EDITOR),
        { tracks: N, selectedTrackId: E, setSelectedTrackId: k, removeTrack: A } = (0, ev.fn)(),
        R = g.type === T.nQ.SCREENSHOT;
    n.useEffect(() => {
        if (!R) return (document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e));
        function e(e) {
            if ((0, i.Cw)(document.activeElement)) return;
            if ("Delete" === e.key) {
                null != E && (e.stopPropagation(), e.preventDefault(), A(E));
                return;
            }
            let t = p.current;
            if (null == t) return;
            let l = p.current?.videoElement;
            if (null == l) return;
            let a = P(l.duration, e.shiftKey),
                n = !1;
            switch (e.key) {
                case " ":
                    ((n = !0), l.paused ? t.play() : t.pause());
                    break;
                case "ArrowLeft":
                    ((n = !0), t.seek(Math.max(m, l.currentTime - a)));
                    break;
                case "ArrowRight":
                    ((n = !0), t.seek(Math.min(h, l.currentTime + a)));
            }
            n && (e.stopPropagation(), e.preventDefault());
        }
    }, [p, R, g.type, m, h, E, A]);
    let L = n.useMemo(() => x.filter((e) => e.trackName.includes(":voice")), [x]),
        D = n.useCallback(() => {
            (0, u.R)(
                {
                    items: [{ type: "IMAGE", url: g.thumbnail, proxyUrl: g.thumbnail, alt: g.name ?? "" }],
                    startingIndex: 0,
                    location: "ClipsEditModal",
                },
                "stack",
            );
        }, [g.thumbnail, g.name]);
    if (R)
        return (0, a.jsxs)("div", {
            className: eo.OJ,
            children: [
                (0, a.jsx)(z, {}),
                t !== s.ip.ENTERED
                    ? (0, a.jsx)(f, {})
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(er, { onBack: l }),
                              (0, a.jsx)("div", {
                                  className: I.zT,
                                  children: (0, a.jsx)(r.D, {
                                      className: I.xS,
                                      onClick: D,
                                      children: (0, a.jsx)("img", {
                                          className: I.V_,
                                          src: g.thumbnail,
                                          alt: g.name ?? "",
                                      }),
                                  }),
                              }),
                          ],
                      }),
            ],
        });
    let M = null == v || t !== s.ip.ENTERED,
        S = g.type === T.nQ.VOICE_CLIP,
        _ = b === d.Y.CROP,
        U = null != y ? y.width / y.height : null,
        $ = _
            ? U
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
              })(j, U),
        G = null;
    return (
        (G =
            _ && !S
                ? (0, a.jsx)(eu, {})
                : N.map((e) => {
                      switch (e.type) {
                          case T.Me.TEXT:
                              return (0, a.jsx)(ey, { track: e, selected: e.id === E, onSelect: () => k(e.id) }, e.id);
                          case T.Me.IMAGE:
                              return (0, a.jsx)(eb, { track: e, selected: e.id === E, onSelect: () => k(e.id) }, e.id);
                          default:
                              return null;
                      }
                  })),
        (0, a.jsx)(c.f5, {
            value: C,
            children: (0, a.jsxs)("div", {
                className: eo.OJ,
                children: [
                    (0, a.jsx)(z, {}),
                    (0, a.jsx)("div", {
                        className: eo.zT,
                        children: M
                            ? (0, a.jsx)(f, {})
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(er, { onBack: l }),
                                      (0, a.jsx)("div", {
                                          className: eo.x3,
                                          children: (0, a.jsx)(O, {
                                              ref: p,
                                              cropFraming: !S,
                                              frameAspectRatio: $,
                                              overlay: G,
                                              loop: !1,
                                          }),
                                      }),
                                      (0, a.jsx)("div", {
                                          className: eo.fL,
                                          children: (0, a.jsx)(e5, { transitionState: t, voiceAudioTracks: L }),
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
        })
    );
}

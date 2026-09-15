n.d(t, { A: () => N });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(404144),
    o = n.n(r),
    d = n(939249),
    c = n(481901),
    u = n(607470),
    h = n(494012),
    m = n(61491),
    p = n(97808),
    f = n(778712),
    g = n(339350),
    A = n(834730);
function x(e, t) {
    return t >= e.startSec && t < e.startSec + e.durationSec;
}
function v(e, t, n) {
    return (
        !x(t, n) ||
        (null != e &&
            !(e.readyState < HTMLMediaElement.HAVE_FUTURE_DATA) &&
            !e.seeking &&
            0.35 >= Math.abs(e.currentTime - (n - t.startSec)))
    );
}
function E(e, t) {
    if (t < e.startSec) return e.startSec - t;
    let n = e.startSec + e.durationSec;
    return t >= n ? n - t : 0;
}
var C = n(704796),
    T = n(375708),
    _ = n(243189);
let S = l.memo(function (e) {
    let t,
        { source: n, masterSec: a, isPlaying: r, playbackRate: o, isGridView: d, onMediaElement: c, children: v } = e,
        S = l.useRef(null),
        [I, j] = l.useState(!1),
        b = x(n, a),
        y = a - n.startSec,
        N = a < n.startSec,
        M = Math.ceil(E(n, a)),
        R = (0, m.rB)(M),
        k = n.owner?.name ?? n.label ?? T.intl.string(C.default["6XuC8e"]),
        { ref: w, width: O } = (0, h.Ay)();
    (l.useEffect(() => {
        let e = S.current;
        if (null != e) {
            if (!b) return void e.pause();
            if (Math.abs(e.currentTime - y) > 0.35)
                try {
                    e.currentTime = y;
                } catch {}
            ((e.playbackRate = o), r ? e.play().catch(() => {}) : e.pause());
        }
    }, [b, y, r, o, I]),
        l.useEffect(() => (c?.(n.id, S.current), () => c?.(n.id, null)), [c, n.id]));
    let P = d && !b && 0 !== M;
    return (
        d && b
            ? (t = T.intl.formatToPlainString(C.default.zc1itm, { name: k }))
            : d && (t = T.intl.formatToPlainString(N ? C.default.dUPcpR : C.default.q8TlkE, { name: k, time: R })),
        (0, i.jsxs)("div", {
            className: _.Vs,
            role: d ? "group" : void 0,
            "aria-label": t,
            "data-testid": "discord-web-multi-video-player-grid-tile",
            children: [
                (0, i.jsxs)("div", {
                    ref: w,
                    className: s()(_.iH, { [_.om]: d }),
                    children: [
                        v ??
                            (0, i.jsx)(u.A, {
                                ref: S,
                                className: s()(_.cr, { [_.qb]: P }),
                                poster: n.poster,
                                preload: "auto",
                                playsInline: !0,
                                muted: !0,
                                crossOrigin: "anonymous",
                                disablePictureInPicture: !0,
                                src: n.url,
                                onLoadedMetadata: function () {
                                    j(!0);
                                },
                            }),
                        d &&
                            null != n.owner &&
                            (0, i.jsx)("div", {
                                className: _.cL,
                                children: (0, i.jsx)(p.eu, {
                                    src: n.owner.avatarUrl,
                                    size: (O ?? 0) > 300 ? f._3.SIZE_32 : f._3.SIZE_20,
                                    "aria-hidden": !0,
                                }),
                            }),
                    ],
                }),
                P &&
                    (0, i.jsxs)("div", {
                        className: _.rm,
                        "aria-hidden": !0,
                        children: [
                            (0, i.jsx)(g.Q, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)(A.E, { variant: "text-xs/medium", color: "none", children: R }),
                        ],
                    }),
            ],
        })
    );
});
var I = n(683063),
    j = n(599507);
let b = l.memo(function (e) {
    let { source: t, label: n, isActive: l, isOriginal: a, currentMasterTimeSec: r, onSelect: o } = e,
        c = t.owner?.name ?? n ?? T.intl.string(C.default["6XuC8e"]);
    if (!x(t, r) && !l && !a) {
        let e = (0, m.rB)(E(t, r));
        return (0, i.jsx)(I.u, {
            asset: (0, i.jsx)(g.Q, { size: "xs" }),
            assetSize: 16,
            body: e,
            position: "left",
            ariaHidden: !0,
            children: (0, i.jsx)("div", {
                className: j.RG,
                "aria-label": T.intl.formatToPlainString(C.default.JFaxs2, { name: c, time: e }),
                "data-testid": "discord-web-multi-video-player-pov-out-of-range",
                children: (0, i.jsx)(p.eu, { src: t.owner?.avatarUrl, size: f._3.SIZE_32, "aria-hidden": !0 }),
            }),
        });
    }
    return (0, i.jsxs)(d.D, {
        className: s()(j.uF, { [j._]: l }),
        "aria-label": l
            ? T.intl.formatToPlainString(C.default["RSMzC/"], { name: c })
            : T.intl.formatToPlainString(C.default["4AH1Vb"], { name: c }),
        "aria-current": l,
        onClick: function (e) {
            (e.stopPropagation(), o(t));
        },
        "data-testid": "discord-web-multi-video-player-pov",
        children: [
            (0, i.jsx)("div", {
                className: s()(j.U8, { [j.ED]: l }),
                children:
                    null != t.poster &&
                    (0, i.jsx)("img", { className: j.a1, src: t.poster, alt: "", "aria-hidden": !0 }),
            }),
            null != t.owner &&
                (0, i.jsx)("div", {
                    className: j.UH,
                    children: (0, i.jsx)(p.eu, { src: t.owner.avatarUrl, size: f._3.SIZE_16, "aria-hidden": !0 }),
                }),
        ],
    });
});
var y = n(340710);
function N(e) {
    let {
            ref: t,
            src: n,
            poster: a,
            className: r,
            onSourceError: h,
            isScrubbing: m,
            onTimeUpdate: p,
            onEnded: f,
            onLoadedMetadata: g,
            onError: A,
            onPlay: E,
            onPause: _,
            children: I,
            original: j,
            subSources: N,
            isGridView: M,
            setIsGridView: R,
            suppressSourceSelection: k = !1,
            ...w
        } = e,
        O = l.useRef(null),
        [P, L] = l.useState(j.durationSec ?? 0),
        [D, U] = l.useState(j.id),
        [G, F] = l.useState(0),
        [V, H] = l.useState(!1),
        [B, W] = l.useState(1),
        {
            freezeCanvasRef: z,
            freezeObjectFit: Z,
            isFreezeFrameHidden: K,
            captureFreezeFrame: q,
            releaseFreezeFrame: Y,
        } = (function (e) {
            let [t, n] = l.useState("hidden"),
                [i, a] = l.useState("contain"),
                s = l.useRef(null),
                r = l.useCallback(() => {
                    let t = e.current,
                        i = s.current;
                    if (null == t || null == i || 0 === t.videoWidth) return;
                    let l = i.getContext("2d");
                    if (null != l) {
                        ((i.width = t.videoWidth), (i.height = t.videoHeight));
                        try {
                            l.drawImage(t, 0, 0);
                        } catch {
                            return;
                        }
                        (a(window.getComputedStyle(t).objectFit), n("holding"));
                    }
                }, [e]),
                o = l.useCallback(() => {
                    n((e) => ("holding" === e ? "releasing" : e));
                }, []);
            return (
                l.useEffect(() => {
                    if ("releasing" !== t) return;
                    let i = e.current,
                        l = !1;
                    function a() {
                        l || ((l = !0), n("hidden"));
                    }
                    let s = setTimeout(a, 1500 * (null != i));
                    if (null == i)
                        return () => {
                            ((l = !0), clearTimeout(s));
                        };
                    if ("function" == typeof i.requestVideoFrameCallback) {
                        let e = i.requestVideoFrameCallback(a);
                        return () => {
                            ((l = !0), clearTimeout(s), i.cancelVideoFrameCallback(e));
                        };
                    }
                    return (
                        i.addEventListener("seeked", a),
                        () => {
                            ((l = !0), clearTimeout(s), i.removeEventListener("seeked", a));
                        }
                    );
                }, [t, e]),
                {
                    freezeCanvasRef: s,
                    freezeObjectFit: i,
                    isFreezeFrameHidden: "hidden" === t,
                    captureFreezeFrame: r,
                    releaseFreezeFrame: o,
                }
            );
        })(O),
        $ = l.useMemo(() => [{ ...j, startSec: 0, durationSec: P }, ...N], [j, N, P]),
        X = $.find((e) => e.id === D) ?? $[0],
        {
            registerFollowerElement: J,
            isGateRaised: Q,
            raiseSyncGate: ee,
            clearSyncGate: et,
            handleDriverPlay: en,
            handleDriverPause: ei,
        } = (function (e) {
            let { elementRef: t, sources: n, activeSourceId: i, isGridView: a } = e,
                [s, r] = l.useState(null),
                o = l.useRef(null),
                d = l.useRef(new Map()),
                c = l.useRef(!1),
                u = l.useCallback((e, t) => {
                    null == t ? d.current.delete(e) : d.current.set(e, t);
                }, []),
                h = l.useCallback((e) => (e.id === i ? t.current : (d.current.get(e.id) ?? null)), [i, t]),
                m = l.useRef({ sources: n, isGridView: a, getSourceElement: h });
            l.useLayoutEffect(() => {
                m.current = { sources: n, isGridView: a, getSourceElement: h };
            });
            let p = l.useCallback(() => null != o.current, []),
                f = l.useCallback(
                    function (e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.current.isGridView,
                            i = t.current;
                        if (null == i || i.paused || !n) return;
                        let { sources: l, getSourceElement: a } = m.current;
                        l.every((t) => v(a(t), t, e)) ||
                            ((c.current = !0), (o.current = e), i.pause(), i.dispatchEvent(new Event("waiting")), r(e));
                    },
                    [t],
                ),
                g = l.useCallback(
                    (e) => {
                        ((o.current = null), r(null));
                        let n = t.current;
                        null == n ||
                            (n.dispatchEvent(new Event("canplay")),
                            e &&
                                ((c.current = !0),
                                n.play().catch(() => {
                                    c.current = !1;
                                })));
                    },
                    [t],
                ),
                A = l.useCallback(
                    (e) => {
                        if (c.current) {
                            c.current = !1;
                            return;
                        }
                        f(e);
                    },
                    [f],
                ),
                x = l.useCallback(() => {
                    if (c.current) {
                        c.current = !1;
                        return;
                    }
                    null != o.current && g(!1);
                }, [g]);
            return (
                l.useEffect(() => {
                    if (null == s) return;
                    let e = n.map(h).filter((e) => null != e);
                    function t() {
                        n.every((e) => v(h(e), e, s)) && g(!0);
                    }
                    let i = setTimeout(() => g(!0), 2500);
                    return (
                        e.forEach((e) => {
                            (e.addEventListener("canplay", t),
                                e.addEventListener("canplaythrough", t),
                                e.addEventListener("seeked", t));
                        }),
                        t(),
                        () => {
                            (clearTimeout(i),
                                e.forEach((e) => {
                                    (e.removeEventListener("canplay", t),
                                        e.removeEventListener("canplaythrough", t),
                                        e.removeEventListener("seeked", t));
                                }));
                        }
                    );
                }, [s, n, h, g]),
                {
                    registerFollowerElement: u,
                    isGateRaised: p,
                    raiseSyncGate: f,
                    clearSyncGate: g,
                    handleDriverPlay: A,
                    handleDriverPause: x,
                }
            );
        })({ elementRef: O, sources: $, activeSourceId: X.id, isGridView: M }),
        el = l.useRef(null),
        ea = l.useRef(null),
        es = l.useRef(j.id),
        er = l.useRef(!1),
        eo = l.useRef(null),
        ed = l.useRef(null);
    function ec() {
        null != ed.current &&
            (clearTimeout(ed.current), (ed.current = null), O.current?.dispatchEvent(new Event("canplay")));
    }
    function eu() {
        let e = eo.current;
        null != e && ((eo.current = null), ec(), eh(e.sourceId, e.masterSec));
    }
    function eh(e, t) {
        let n = $.find((t) => t.id === e);
        if (null == n) return;
        if (n.id === j.id) ((eo.current = null), ec());
        else if (!er.current) {
            let e;
            ((eo.current = { sourceId: n.id, masterSec: t }),
                null == ed.current &&
                    null != (e = O.current) &&
                    (e.dispatchEvent(new Event("waiting")),
                    (e.preload = "metadata"),
                    e.load(),
                    (ed.current = setTimeout(() => {
                        ((er.current = !0), ep.current.applyDeferredSwitch());
                    }, 5e3))));
            return;
        }
        let i = o()(t, 0, ep.current.masterDurationSec),
            l = O.current;
        if (n.id === ep.current.activeSource.id) {
            ((ea.current = null), null != l && (l.currentTime = i - n.startSec));
            return;
        }
        (q(),
            (el.current = {
                localSeekSec: o()(i - n.startSec, 0, n.durationSec),
                resumePlayback: null != l && !l.paused,
                playbackRate: l?.playbackRate ?? 1,
            }),
            (ea.current = i),
            (ep.current = { ...ep.current, activeSource: n }),
            U(n.id),
            F(i));
    }
    function em(e) {
        eh(j.id, e);
    }
    let ep = l.useRef({
        activeSource: X,
        masterDurationSec: P,
        isScrubbing: m,
        revertToOriginal: em,
        applyDeferredSwitch: eu,
    });
    l.useLayoutEffect(() => {
        ep.current = {
            ...ep.current,
            activeSource: X,
            masterDurationSec: P,
            isScrubbing: m,
            revertToOriginal: em,
            applyDeferredSwitch: eu,
        };
    });
    let ef = l.useRef(null);
    (l.useLayoutEffect(
        () => (
            (ef.current ??= (function (e) {
                let t = null;
                function n() {
                    let n = e.getElement();
                    return (null != n && (t = n), t);
                }
                return new Proxy(
                    {},
                    {
                        get(t, i) {
                            let l = n();
                            switch (i) {
                                case "domNode":
                                    return e.getElement();
                                case "currentTime":
                                    return e.getCurrentTimeSec();
                                case "duration":
                                    return e.getDurationSec();
                                case "buffered":
                                    var a, s;
                                    return (
                                        (a = l?.buffered),
                                        (s = e.getActiveStartSec()),
                                        {
                                            length: a?.length ?? 0,
                                            start: (e) => (a?.start(e) ?? 0) + s,
                                            end: (e) => (a?.end(e) ?? 0) + s,
                                        }
                                    );
                            }
                            if (null == l) return;
                            let r = Reflect.get(l, i);
                            return "function" == typeof r ? r.bind(l) : r;
                        },
                        set(t, i, l) {
                            if ("currentTime" === i) return (e.seekTo(l), !0);
                            let a = n();
                            return (null != a && Reflect.set(a, i, l), !0);
                        },
                        has(e, t) {
                            let i = n();
                            return null != i && Reflect.has(i, t);
                        },
                    },
                );
            })({
                getElement: () => O.current,
                getDurationSec: () => ep.current.masterDurationSec,
                getActiveStartSec: () => ep.current.activeSource.startSec,
                getCurrentTimeSec: () => {
                    let e = ea.current;
                    return null != e
                        ? e
                        : Math.max(0, ep.current.activeSource.startSec + (O.current?.currentTime ?? 0));
                },
                seekTo: (e) => {
                    let t = o()(e, 0, ep.current.masterDurationSec);
                    if ((F(t), x(ep.current.activeSource, t))) {
                        ea.current = null;
                        let e = O.current;
                        (null != e && (e.currentTime = t - ep.current.activeSource.startSec),
                            ep.current.isScrubbing || ee(t));
                        return;
                    }
                    ((ea.current = t), ep.current.isScrubbing || ep.current.revertToOriginal(t));
                },
            })),
            t(ef.current),
            () => {
                t(null);
            }
        ),
        [t, ee],
    ),
        l.useEffect(
            () => () => {
                null != ed.current && clearTimeout(ed.current);
            },
            [],
        ));
    let eg = l.useRef(D);
    function eA(e) {
        e.id !== X.id && eh(e.id, G);
    }
    function ex(e) {
        Q() || w.onCanPlay?.(e);
    }
    (l.useEffect(() => {
        eg.current !== D && ((eg.current = D), O.current?.load());
    }, [D]),
        l.useEffect(() => {
            if (m) return;
            let e = ea.current;
            null == e || null != el.current || x(ep.current.activeSource, e) || ep.current.revertToOriginal(e);
        }, [m]));
    let ev = !x(X, G);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.D, {
                onClick: w.onClick ?? void 0,
                className: s()(y.dw, { [y.x2]: M }),
                children: [
                    (0, i.jsxs)(S, {
                        source: X,
                        masterSec: G,
                        isPlaying: V,
                        playbackRate: B,
                        isGridView: M,
                        children: [
                            (0, i.jsxs)(u.A, {
                                ...w,
                                ref: O,
                                className: s()(r, { [y._b]: ev, [y.l3]: M }),
                                poster: X.poster ?? a,
                                onCanPlay: ex,
                                onCanPlayThrough: ex,
                                onTimeUpdate: function (e) {
                                    let t = O.current;
                                    if (null != t && null == el.current && null == ea.current) {
                                        W(t.playbackRate);
                                        let e = Math.max(0, X.startSec + t.currentTime);
                                        (F(e), X.id !== j.id && e >= X.startSec + X.durationSec - 0.12 && em(e));
                                    }
                                    p?.(e);
                                },
                                onEnded: function (e) {
                                    X.id !== j.id ? em(X.startSec + X.durationSec) : f?.(e);
                                },
                                onLoadedMetadata: function (e) {
                                    let t = O.current,
                                        n = el.current;
                                    if (
                                        (D === j.id &&
                                            null != t &&
                                            ((er.current = !0),
                                            Number.isFinite(t.duration) &&
                                                (L(t.duration),
                                                (ep.current = { ...ep.current, masterDurationSec: t.duration }))),
                                        null == n)
                                    ) {
                                        (g?.(e), eu());
                                        return;
                                    }
                                    if (((el.current = null), null != t)) {
                                        t.playbackRate = n.playbackRate;
                                        try {
                                            t.currentTime = n.localSeekSec;
                                        } catch {}
                                        n.resumePlayback && t.play().catch(() => {});
                                    }
                                    ((ea.current = null), Y());
                                },
                                onError: function (e) {
                                    X.id !== j.id ? em(X.startSec + (O.current?.currentTime ?? 0)) : A?.(e);
                                },
                                onPlay: function (e) {
                                    (H(!0), en(G), E?.(e));
                                },
                                onPause: function (e) {
                                    (H(!1), ei(), _?.(e));
                                },
                                children: [I, (0, i.jsx)("source", { onError: h, src: X.url })],
                            }),
                            (0, i.jsx)("canvas", {
                                ref: z,
                                className: y.bQ,
                                style: { objectFit: Z },
                                hidden: K,
                                "aria-hidden": !0,
                            }),
                        ],
                    }),
                    M &&
                        N.map((e) =>
                            (0, i.jsx)(
                                S,
                                {
                                    source: e,
                                    masterSec: G,
                                    isPlaying: V,
                                    playbackRate: B,
                                    isGridView: !0,
                                    onMediaElement: J,
                                },
                                e.id,
                            ),
                        ),
                ],
            }),
            $.length > 1 &&
                !k &&
                (0, i.jsxs)("div", {
                    className: y.c2,
                    "data-testid": "discord-web-multi-video-player-povs",
                    children: [
                        !M &&
                            $.map((e) =>
                                (0, i.jsx)(
                                    b,
                                    {
                                        source: e,
                                        label:
                                            e.id === j.id ? (e.label ?? T.intl.string(C.default["9tdsDk"])) : e.label,
                                        isActive: e.id === X.id,
                                        isOriginal: e.id === j.id,
                                        currentMasterTimeSec: G,
                                        onSelect: eA,
                                    },
                                    e.id,
                                ),
                            ),
                        (0, i.jsx)(d.D, {
                            className: y.LI,
                            "aria-label": T.intl.string(C.default.lykjkX),
                            "aria-pressed": !1,
                            onClick: function (e) {
                                if ((e.stopPropagation(), M)) {
                                    (Q() && et(!0), R(!1));
                                    let e = $.find((e) => e.id === es.current);
                                    eh(null != e && x(e, G) ? e.id : j.id, G);
                                    return;
                                }
                                ((es.current = X.id), R(!0), ee(G, !0), eh(j.id, G));
                            },
                            "data-testid": "discord-web-multi-video-player-grid-toggle",
                            children: (0, i.jsx)(c.d, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
        ],
    });
}

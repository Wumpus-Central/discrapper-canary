n.d(t, { A: () => R });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(404144),
    o = n.n(s),
    u = n(494012),
    c = n(939249),
    d = n(481901),
    m = n(607470),
    p = n(394039),
    f = n(61491),
    h = n(97808),
    g = n(778712),
    A = n(339350),
    C = n(834730);
function x(e, t) {
    return t >= e.startSec && t < e.startSec + e.durationSec;
}
function E(e, t, n) {
    return (
        !x(t, n) ||
        (null != e &&
            !(e.readyState < HTMLMediaElement.HAVE_FUTURE_DATA) &&
            !e.seeking &&
            0.35 >= Math.abs(e.currentTime - (n - t.startSec)))
    );
}
function v(e, t) {
    if (t < e.startSec) return e.startSec - t;
    let n = e.startSec + e.durationSec;
    return t >= n ? n - t : 0;
}
var _ = n(683825),
    y = n(792996),
    b = n(243189);
let T = l.memo(function (e) {
    let t,
        { source: n, masterSec: a, isPlaying: s, playbackRate: o, isGridView: c, onMediaElement: d, children: E } = e,
        T = l.useRef(null),
        [S, I] = l.useState(!1),
        N = x(n, a),
        j = a - n.startSec,
        R = a < n.startSec,
        O = Math.ceil(v(n, a)),
        M = (0, f.rB)(O),
        P = n.owner?.name ?? n.label ?? y.intl.string(_.default["6XuC8e"]),
        { ref: k, width: L, height: w } = (0, u.Ay)();
    (l.useEffect(() => {
        let e = T.current;
        if (null != e) {
            if (!N) return void e.pause();
            if (Math.abs(e.currentTime - j) > 0.35)
                try {
                    e.currentTime = j;
                } catch {}
            ((e.playbackRate = o), s ? e.play().catch(() => {}) : e.pause());
        }
    }, [N, j, s, o, S]),
        l.useEffect(() => (d?.(n.id, T.current), () => d?.(n.id, null)), [d, n.id]));
    let D = c && !N && 0 !== O;
    return (
        c && N
            ? (t = y.intl.formatToPlainString(_.default.zc1itm, { name: P }))
            : c && (t = y.intl.formatToPlainString(R ? _.default.dUPcpR : _.default.q8TlkE, { name: P, time: M })),
        (0, i.jsxs)("div", {
            className: b.Vs,
            role: c ? "group" : void 0,
            "aria-label": t,
            "data-testid": "discord-web-multi-video-player-grid-tile",
            children: [
                (0, i.jsxs)("div", {
                    ref: k,
                    className: r()(b.iH, { [b.om]: c }),
                    children: [
                        E ??
                            (0, i.jsx)(m.A, {
                                ref: T,
                                className: r()(b.cr, { [b.qb]: D }),
                                poster: (0, p.s)(n.poster, n, L, w),
                                preload: "auto",
                                playsInline: !0,
                                muted: !0,
                                crossOrigin: "anonymous",
                                disablePictureInPicture: !0,
                                src: n.url,
                                onLoadedMetadata: function () {
                                    I(!0);
                                },
                            }),
                        c &&
                            null != n.owner &&
                            (0, i.jsx)("div", {
                                className: b.cL,
                                children: (0, i.jsx)(h.eu, {
                                    src: n.owner.avatarUrl,
                                    size: (L ?? 0) > 300 ? g._3.SIZE_32 : g._3.SIZE_20,
                                    "aria-hidden": !0,
                                }),
                            }),
                    ],
                }),
                D &&
                    (0, i.jsxs)("div", {
                        className: b.rm,
                        "aria-hidden": !0,
                        children: [
                            (0, i.jsx)(A.HourglassIcon, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)(C.E, { variant: "body-xs/medium", color: "none", children: M }),
                        ],
                    }),
            ],
        })
    );
});
var S = n(683063),
    I = n(599507);
let N = l.memo(function (e) {
    let { source: t, label: n, isActive: l, isOriginal: a, currentMasterTimeSec: s, onSelect: o } = e,
        d = t.owner?.name ?? n ?? y.intl.string(_.default["6XuC8e"]),
        m = x(t, s),
        { ref: C, width: E, height: b } = (0, u.Ay)(m, l, a);
    if (!m && !l && !a) {
        let e = (0, f.rB)(v(t, s));
        return (0, i.jsx)(S.u, {
            asset: (0, i.jsx)(A.HourglassIcon, { size: "xs" }),
            assetSize: 16,
            body: e,
            position: "left",
            ariaHidden: !0,
            children: (0, i.jsx)("div", {
                className: I.RG,
                "aria-label": y.intl.formatToPlainString(_.default.JFaxs2, { name: d, time: e }),
                "data-testid": "discord-web-multi-video-player-pov-out-of-range",
                children: (0, i.jsx)(h.eu, { src: t.owner?.avatarUrl, size: g._3.SIZE_32, "aria-hidden": !0 }),
            }),
        });
    }
    return (0, i.jsxs)(c.D, {
        className: r()(I.uF, { [I._]: l }),
        "aria-label": l
            ? y.intl.formatToPlainString(_.default["RSMzC/"], { name: d })
            : y.intl.formatToPlainString(_.default["4AH1Vb"], { name: d }),
        "aria-current": l,
        onClick: function (e) {
            (e.stopPropagation(), o(t));
        },
        "data-testid": "discord-web-multi-video-player-pov",
        children: [
            (0, i.jsx)("div", {
                className: r()(I.U8, { [I.ED]: l }),
                children:
                    null != t.poster &&
                    (0, i.jsx)("img", {
                        ref: C,
                        className: I.a1,
                        src: (0, p.s)(t.poster, t, E, b),
                        alt: "",
                        "aria-hidden": !0,
                    }),
            }),
            null != t.owner &&
                (0, i.jsx)("div", {
                    className: I.UH,
                    children: (0, i.jsx)(h.eu, { src: t.owner.avatarUrl, size: g._3.SIZE_16, "aria-hidden": !0 }),
                }),
        ],
    });
});
var j = n(340710);
function R(e) {
    let {
            ref: t,
            src: n,
            poster: a,
            className: s,
            onSourceError: f,
            isScrubbing: h,
            onTimeUpdate: g,
            onEnded: A,
            onLoadedMetadata: C,
            onError: v,
            onPlay: b,
            onPause: S,
            children: I,
            original: R,
            subSources: O,
            isGridView: M,
            setIsGridView: P,
            suppressSourceSelection: k = !1,
            ...L
        } = e,
        w = l.useRef(null),
        { ref: D, width: U, height: G } = (0, u.Ay)(),
        F = l.useCallback(
            (e) => {
                ((w.current = e), (D.current = e));
            },
            [D],
        ),
        [B, V] = l.useState(R.durationSec ?? 0),
        [H, W] = l.useState(R.id),
        [z, K] = l.useState(0),
        [Y, q] = l.useState(!1),
        [Q, $] = l.useState(1),
        {
            freezeCanvasRef: X,
            freezeObjectFit: Z,
            isFreezeFrameHidden: J,
            captureFreezeFrame: ee,
            releaseFreezeFrame: et,
        } = (function (e) {
            let [t, n] = l.useState("hidden"),
                [i, a] = l.useState("contain"),
                r = l.useRef(null),
                s = l.useCallback(() => {
                    let t = e.current,
                        i = r.current;
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
                    let r = setTimeout(a, 1500 * (null != i));
                    if (null == i)
                        return () => {
                            ((l = !0), clearTimeout(r));
                        };
                    if ("function" == typeof i.requestVideoFrameCallback) {
                        let e = i.requestVideoFrameCallback(a);
                        return () => {
                            ((l = !0), clearTimeout(r), i.cancelVideoFrameCallback(e));
                        };
                    }
                    return (
                        i.addEventListener("seeked", a),
                        () => {
                            ((l = !0), clearTimeout(r), i.removeEventListener("seeked", a));
                        }
                    );
                }, [t, e]),
                {
                    freezeCanvasRef: r,
                    freezeObjectFit: i,
                    isFreezeFrameHidden: "hidden" === t,
                    captureFreezeFrame: s,
                    releaseFreezeFrame: o,
                }
            );
        })(w),
        en = l.useMemo(() => [{ ...R, startSec: 0, durationSec: B }, ...O], [R, O, B]),
        ei = en.find((e) => e.id === H) ?? en[0],
        {
            registerFollowerElement: el,
            isGateRaised: ea,
            raiseSyncGate: er,
            clearSyncGate: es,
            handleDriverPlay: eo,
            handleDriverPause: eu,
        } = (function (e) {
            let { elementRef: t, sources: n, activeSourceId: i, isGridView: a } = e,
                [r, s] = l.useState(null),
                o = l.useRef(null),
                u = l.useRef(new Map()),
                c = l.useRef(!1),
                d = l.useCallback((e, t) => {
                    null == t ? u.current.delete(e) : u.current.set(e, t);
                }, []),
                m = l.useCallback((e) => (e.id === i ? t.current : (u.current.get(e.id) ?? null)), [i, t]),
                p = l.useRef({ sources: n, isGridView: a, getSourceElement: m });
            l.useLayoutEffect(() => {
                p.current = { sources: n, isGridView: a, getSourceElement: m };
            });
            let f = l.useCallback(() => null != o.current, []),
                h = l.useCallback(
                    function (e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.current.isGridView,
                            i = t.current;
                        if (null == i || i.paused || !n) return;
                        let { sources: l, getSourceElement: a } = p.current;
                        l.every((t) => E(a(t), t, e)) ||
                            ((c.current = !0), (o.current = e), i.pause(), i.dispatchEvent(new Event("waiting")), s(e));
                    },
                    [t],
                ),
                g = l.useCallback(
                    (e) => {
                        ((o.current = null), s(null));
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
                        h(e);
                    },
                    [h],
                ),
                C = l.useCallback(() => {
                    if (c.current) {
                        c.current = !1;
                        return;
                    }
                    null != o.current && g(!1);
                }, [g]);
            return (
                l.useEffect(() => {
                    if (null == r) return;
                    let e = n.map(m).filter((e) => null != e);
                    function t() {
                        n.every((e) => E(m(e), e, r)) && g(!0);
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
                }, [r, n, m, g]),
                {
                    registerFollowerElement: d,
                    isGateRaised: f,
                    raiseSyncGate: h,
                    clearSyncGate: g,
                    handleDriverPlay: A,
                    handleDriverPause: C,
                }
            );
        })({ elementRef: w, sources: en, activeSourceId: ei.id, isGridView: M }),
        ec = l.useRef(null),
        ed = l.useRef(null),
        em = l.useRef(R.id),
        ep = l.useRef(!1),
        ef = l.useRef(null),
        eh = l.useRef(null);
    function eg() {
        null != eh.current &&
            (clearTimeout(eh.current), (eh.current = null), w.current?.dispatchEvent(new Event("canplay")));
    }
    function eA() {
        let e = ef.current;
        null != e && ((ef.current = null), eg(), eC(e.sourceId, e.masterSec));
    }
    function eC(e, t) {
        let n = en.find((t) => t.id === e);
        if (null == n) return;
        if (n.id === R.id) ((ef.current = null), eg());
        else if (!ep.current) {
            let e;
            ((ef.current = { sourceId: n.id, masterSec: t }),
                null == eh.current &&
                    null != (e = w.current) &&
                    (e.dispatchEvent(new Event("waiting")),
                    (e.preload = "metadata"),
                    e.load(),
                    (eh.current = setTimeout(() => {
                        ((ep.current = !0), eE.current.applyDeferredSwitch());
                    }, 5e3))));
            return;
        }
        let i = o()(t, 0, eE.current.masterDurationSec),
            l = w.current;
        if (n.id === eE.current.activeSource.id) {
            ((ed.current = null), null != l && (l.currentTime = i - n.startSec));
            return;
        }
        (ee(),
            (ec.current = {
                localSeekSec: o()(i - n.startSec, 0, n.durationSec),
                resumePlayback: null != l && !l.paused,
                playbackRate: l?.playbackRate ?? 1,
            }),
            (ed.current = i),
            (eE.current = { ...eE.current, activeSource: n }),
            W(n.id),
            K(i));
    }
    function ex(e) {
        eC(R.id, e);
    }
    let eE = l.useRef({
        activeSource: ei,
        masterDurationSec: B,
        isScrubbing: h,
        revertToOriginal: ex,
        applyDeferredSwitch: eA,
    });
    l.useLayoutEffect(() => {
        eE.current = {
            ...eE.current,
            activeSource: ei,
            masterDurationSec: B,
            isScrubbing: h,
            revertToOriginal: ex,
            applyDeferredSwitch: eA,
        };
    });
    let ev = l.useRef(null);
    (l.useLayoutEffect(
        () => (
            (ev.current ??= (function (e) {
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
                                    var a, r;
                                    return (
                                        (a = l?.buffered),
                                        (r = e.getActiveStartSec()),
                                        {
                                            length: a?.length ?? 0,
                                            start: (e) => (a?.start(e) ?? 0) + r,
                                            end: (e) => (a?.end(e) ?? 0) + r,
                                        }
                                    );
                            }
                            if (null == l) return;
                            let s = Reflect.get(l, i);
                            return "function" == typeof s ? s.bind(l) : s;
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
                getElement: () => w.current,
                getDurationSec: () => eE.current.masterDurationSec,
                getActiveStartSec: () => eE.current.activeSource.startSec,
                getCurrentTimeSec: () => {
                    let e = ed.current;
                    return null != e
                        ? e
                        : Math.max(0, eE.current.activeSource.startSec + (w.current?.currentTime ?? 0));
                },
                seekTo: (e) => {
                    let t = o()(e, 0, eE.current.masterDurationSec);
                    if ((K(t), x(eE.current.activeSource, t))) {
                        ed.current = null;
                        let e = w.current;
                        (null != e && (e.currentTime = t - eE.current.activeSource.startSec),
                            eE.current.isScrubbing || er(t));
                        return;
                    }
                    ((ed.current = t), eE.current.isScrubbing || eE.current.revertToOriginal(t));
                },
            })),
            t(ev.current),
            () => {
                t(null);
            }
        ),
        [t, er],
    ),
        l.useEffect(
            () => () => {
                null != eh.current && clearTimeout(eh.current);
            },
            [],
        ));
    let e_ = l.useRef(H);
    function ey(e) {
        e.id !== ei.id && eC(e.id, z);
    }
    function eb(e) {
        ea() || L.onCanPlay?.(e);
    }
    (l.useEffect(() => {
        e_.current !== H && ((e_.current = H), w.current?.load());
    }, [H]),
        l.useEffect(() => {
            if (h) return;
            let e = ed.current;
            null == e || null != ec.current || x(eE.current.activeSource, e) || eE.current.revertToOriginal(e);
        }, [h]));
    let eT = !x(ei, z);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c.D, {
                onClick: L.onClick ?? void 0,
                className: r()(j.dw, { [j.x2]: M }),
                children: [
                    (0, i.jsxs)(T, {
                        source: ei,
                        masterSec: z,
                        isPlaying: Y,
                        playbackRate: Q,
                        isGridView: M,
                        children: [
                            (0, i.jsxs)(m.A, {
                                ...L,
                                ref: F,
                                className: r()(s, { [j._b]: eT, [j.l3]: M }),
                                poster: (0, p.s)(ei.poster ?? a, ei, U, G),
                                onCanPlay: eb,
                                onCanPlayThrough: eb,
                                onTimeUpdate: function (e) {
                                    let t = w.current;
                                    if (null != t && null == ec.current && null == ed.current) {
                                        $(t.playbackRate);
                                        let e = Math.max(0, ei.startSec + t.currentTime);
                                        (K(e), ei.id !== R.id && e >= ei.startSec + ei.durationSec - 0.12 && ex(e));
                                    }
                                    g?.(e);
                                },
                                onEnded: function (e) {
                                    ei.id !== R.id ? ex(ei.startSec + ei.durationSec) : A?.(e);
                                },
                                onLoadedMetadata: function (e) {
                                    let t = w.current,
                                        n = ec.current;
                                    if (
                                        (H === R.id &&
                                            null != t &&
                                            ((ep.current = !0),
                                            Number.isFinite(t.duration) &&
                                                (V(t.duration),
                                                (eE.current = { ...eE.current, masterDurationSec: t.duration }))),
                                        null == n)
                                    ) {
                                        (C?.(e), eA());
                                        return;
                                    }
                                    if (((ec.current = null), null != t)) {
                                        t.playbackRate = n.playbackRate;
                                        try {
                                            t.currentTime = n.localSeekSec;
                                        } catch {}
                                        n.resumePlayback && t.play().catch(() => {});
                                    }
                                    ((ed.current = null), et());
                                },
                                onError: function (e) {
                                    ei.id !== R.id ? ex(ei.startSec + (w.current?.currentTime ?? 0)) : v?.(e);
                                },
                                onPlay: function (e) {
                                    (q(!0), eo(z), b?.(e));
                                },
                                onPause: function (e) {
                                    (q(!1), eu(), S?.(e));
                                },
                                children: [I, (0, i.jsx)("source", { onError: f, src: ei.url })],
                            }),
                            (0, i.jsx)("canvas", {
                                ref: X,
                                className: j.bQ,
                                style: { objectFit: Z },
                                hidden: J,
                                "aria-hidden": !0,
                            }),
                        ],
                    }),
                    M &&
                        O.map((e) =>
                            (0, i.jsx)(
                                T,
                                {
                                    source: e,
                                    masterSec: z,
                                    isPlaying: Y,
                                    playbackRate: Q,
                                    isGridView: !0,
                                    onMediaElement: el,
                                },
                                e.id,
                            ),
                        ),
                ],
            }),
            en.length > 1 &&
                !k &&
                (0, i.jsxs)("div", {
                    className: j.c2,
                    "data-testid": "discord-web-multi-video-player-povs",
                    children: [
                        !M &&
                            en.map((e) =>
                                (0, i.jsx)(
                                    N,
                                    {
                                        source: e,
                                        label:
                                            e.id === R.id ? (e.label ?? y.intl.string(_.default["9tdsDk"])) : e.label,
                                        isActive: e.id === ei.id,
                                        isOriginal: e.id === R.id,
                                        currentMasterTimeSec: z,
                                        onSelect: ey,
                                    },
                                    e.id,
                                ),
                            ),
                        (0, i.jsx)(c.D, {
                            className: j.LI,
                            "aria-label": y.intl.string(_.default.lykjkX),
                            "aria-pressed": !1,
                            onClick: function (e) {
                                if ((e.stopPropagation(), M)) {
                                    (ea() && es(!0), P(!1));
                                    let e = en.find((e) => e.id === em.current);
                                    eC(null != e && x(e, z) ? e.id : R.id, z);
                                    return;
                                }
                                ((em.current = ei.id), P(!0), er(z, !0), eC(R.id, z));
                            },
                            "data-testid": "discord-web-multi-video-player-grid-toggle",
                            children: (0, i.jsx)(d.GridSquareIcon, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
        ],
    });
}

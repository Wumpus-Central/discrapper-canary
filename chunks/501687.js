n.d(t, { A: () => R });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(404144),
    o = n.n(s),
    u = n(494012),
    c = n(939249),
    d = n(481901),
    m = n(607470),
    f = n(394039),
    p = n(61491),
    h = n(97808),
    g = n(778712),
    A = n(339350),
    C = n(834730);
function E(e, t) {
    return t >= e.startSec && t < e.startSec + e.durationSec;
}
function x(e, t, n) {
    return (
        !E(t, n) ||
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
    b = n(792996),
    y = n(243189);
let T = l.memo(function (e) {
    let t,
        { source: n, masterSec: r, isPlaying: s, playbackRate: o, isGridView: c, onMediaElement: d, children: x } = e,
        T = l.useRef(null),
        [S, I] = l.useState(!1),
        N = E(n, r),
        j = r - n.startSec,
        R = r < n.startSec,
        O = Math.ceil(v(n, r)),
        M = (0, p.rB)(O),
        k = n.owner?.name ?? n.label ?? b.intl.string(_.default["6XuC8e"]),
        { ref: P, width: L, height: w } = (0, u.Ay)();
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
            ? (t = b.intl.formatToPlainString(_.default.zc1itm, { name: k }))
            : c && (t = b.intl.formatToPlainString(R ? _.default.dUPcpR : _.default.q8TlkE, { name: k, time: M })),
        (0, i.jsxs)("div", {
            className: y.Vs,
            role: c ? "group" : void 0,
            "aria-label": t,
            "data-testid": "discord-web-multi-video-player-grid-tile",
            children: [
                (0, i.jsxs)("div", {
                    ref: P,
                    className: a()(y.iH, { [y.om]: c }),
                    children: [
                        x ??
                            (0, i.jsx)(m.A, {
                                ref: T,
                                className: a()(y.cr, { [y.qb]: D }),
                                poster: (0, f.s)(n.poster, n, L, w),
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
                                className: y.cL,
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
                        className: y.rm,
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
    let { source: t, label: n, isActive: l, isOriginal: r, currentMasterTimeSec: s, onSelect: o } = e,
        d = t.owner?.name ?? n ?? b.intl.string(_.default["6XuC8e"]),
        m = E(t, s),
        { ref: C, width: x, height: y } = (0, u.Ay)(m, l, r);
    if (!m && !l && !r) {
        let e = (0, p.rB)(v(t, s));
        return (0, i.jsx)(S.u, {
            asset: (0, i.jsx)(A.HourglassIcon, { size: "xs" }),
            assetSize: 16,
            body: e,
            position: "left",
            ariaHidden: !0,
            children: (0, i.jsx)("div", {
                className: I.RG,
                "aria-label": b.intl.formatToPlainString(_.default.JFaxs2, { name: d, time: e }),
                "data-testid": "discord-web-multi-video-player-pov-out-of-range",
                children: (0, i.jsx)(h.eu, { src: t.owner?.avatarUrl, size: g._3.SIZE_32, "aria-hidden": !0 }),
            }),
        });
    }
    return (0, i.jsxs)(c.D, {
        className: a()(I.uF, { [I._]: l }),
        "aria-label": l
            ? b.intl.formatToPlainString(_.default["RSMzC/"], { name: d })
            : b.intl.formatToPlainString(_.default["4AH1Vb"], { name: d }),
        "aria-current": l,
        onClick: function (e) {
            (e.stopPropagation(), o(t));
        },
        "data-testid": "discord-web-multi-video-player-pov",
        children: [
            (0, i.jsx)("div", {
                className: a()(I.U8, { [I.ED]: l }),
                children:
                    null != t.poster &&
                    (0, i.jsx)("img", {
                        ref: C,
                        className: I.a1,
                        src: (0, f.s)(t.poster, t, x, y),
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
            poster: r,
            className: s,
            onSourceError: p,
            isScrubbing: h,
            onTimeUpdate: g,
            onEnded: A,
            onLoadedMetadata: C,
            onError: v,
            onPlay: y,
            onPause: S,
            children: I,
            original: R,
            subSources: O,
            isGridView: M,
            setIsGridView: k,
            suppressSourceSelection: P = !1,
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
        [B, H] = l.useState(R.durationSec ?? 0),
        [V, W] = l.useState(R.id),
        [K, z] = l.useState(0),
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
                [i, r] = l.useState("contain"),
                a = l.useRef(null),
                s = l.useCallback(() => {
                    let t = e.current,
                        i = a.current;
                    if (null == t || null == i || 0 === t.videoWidth) return;
                    let l = i.getContext("2d");
                    if (null != l) {
                        ((i.width = t.videoWidth), (i.height = t.videoHeight));
                        try {
                            l.drawImage(t, 0, 0);
                        } catch {
                            return;
                        }
                        (r(window.getComputedStyle(t).objectFit), n("holding"));
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
                    function r() {
                        l || ((l = !0), n("hidden"));
                    }
                    let a = setTimeout(r, 1500 * (null != i));
                    if (null == i)
                        return () => {
                            ((l = !0), clearTimeout(a));
                        };
                    if ("function" == typeof i.requestVideoFrameCallback) {
                        let e = i.requestVideoFrameCallback(r);
                        return () => {
                            ((l = !0), clearTimeout(a), i.cancelVideoFrameCallback(e));
                        };
                    }
                    return (
                        i.addEventListener("seeked", r),
                        () => {
                            ((l = !0), clearTimeout(a), i.removeEventListener("seeked", r));
                        }
                    );
                }, [t, e]),
                {
                    freezeCanvasRef: a,
                    freezeObjectFit: i,
                    isFreezeFrameHidden: "hidden" === t,
                    captureFreezeFrame: s,
                    releaseFreezeFrame: o,
                }
            );
        })(w),
        en = l.useMemo(() => [{ ...R, startSec: 0, durationSec: B }, ...O], [R, O, B]),
        ei = en.find((e) => e.id === V) ?? en[0],
        {
            registerFollowerElement: el,
            isGateRaised: er,
            raiseSyncGate: ea,
            clearSyncGate: es,
            handleDriverPlay: eo,
            handleDriverPause: eu,
        } = (function (e) {
            let { elementRef: t, sources: n, activeSourceId: i, isGridView: r } = e,
                [a, s] = l.useState(null),
                o = l.useRef(null),
                u = l.useRef(new Map()),
                c = l.useRef(!1),
                d = l.useCallback((e, t) => {
                    null == t ? u.current.delete(e) : u.current.set(e, t);
                }, []),
                m = l.useCallback((e) => (e.id === i ? t.current : (u.current.get(e.id) ?? null)), [i, t]),
                f = l.useRef({ sources: n, isGridView: r, getSourceElement: m });
            l.useLayoutEffect(() => {
                f.current = { sources: n, isGridView: r, getSourceElement: m };
            });
            let p = l.useCallback(() => null != o.current, []),
                h = l.useCallback(
                    function (e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.current.isGridView,
                            i = t.current;
                        if (null == i || i.paused || !n) return;
                        let { sources: l, getSourceElement: r } = f.current;
                        l.every((t) => x(r(t), t, e)) ||
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
                    if (null == a) return;
                    let e = n.map(m).filter((e) => null != e);
                    function t() {
                        n.every((e) => x(m(e), e, a)) && g(!0);
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
                }, [a, n, m, g]),
                {
                    registerFollowerElement: d,
                    isGateRaised: p,
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
        ef = l.useRef(!1),
        ep = l.useRef(null),
        eh = l.useRef(null);
    function eg() {
        null != eh.current &&
            (clearTimeout(eh.current), (eh.current = null), w.current?.dispatchEvent(new Event("canplay")));
    }
    function eA() {
        let e = ep.current;
        null != e && ((ep.current = null), eg(), eC(e.sourceId, e.masterSec));
    }
    function eC(e, t) {
        let n = en.find((t) => t.id === e);
        if (null == n) return;
        if (n.id === R.id) ((ep.current = null), eg());
        else if (!ef.current) {
            let e;
            ((ep.current = { sourceId: n.id, masterSec: t }),
                null == eh.current &&
                    null != (e = w.current) &&
                    (e.dispatchEvent(new Event("waiting")),
                    (e.preload = "metadata"),
                    e.load(),
                    (eh.current = setTimeout(() => {
                        ((ef.current = !0), ex.current.applyDeferredSwitch());
                    }, 5e3))));
            return;
        }
        let i = o()(t, 0, ex.current.masterDurationSec),
            l = w.current;
        if (n.id === ex.current.activeSource.id) {
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
            (ex.current = { ...ex.current, activeSource: n }),
            W(n.id),
            z(i));
    }
    function eE(e) {
        eC(R.id, e);
    }
    let ex = l.useRef({
        activeSource: ei,
        masterDurationSec: B,
        isScrubbing: h,
        revertToOriginal: eE,
        applyDeferredSwitch: eA,
    });
    l.useLayoutEffect(() => {
        ex.current = {
            ...ex.current,
            activeSource: ei,
            masterDurationSec: B,
            isScrubbing: h,
            revertToOriginal: eE,
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
                                    var r, a;
                                    return (
                                        (r = l?.buffered),
                                        (a = e.getActiveStartSec()),
                                        {
                                            length: r?.length ?? 0,
                                            start: (e) => (r?.start(e) ?? 0) + a,
                                            end: (e) => (r?.end(e) ?? 0) + a,
                                        }
                                    );
                            }
                            if (null == l) return;
                            let s = Reflect.get(l, i);
                            return "function" == typeof s ? s.bind(l) : s;
                        },
                        set(t, i, l) {
                            if ("currentTime" === i) return (e.seekTo(l), !0);
                            let r = n();
                            return (null != r && Reflect.set(r, i, l), !0);
                        },
                        has(e, t) {
                            let i = n();
                            return null != i && Reflect.has(i, t);
                        },
                    },
                );
            })({
                getElement: () => w.current,
                getDurationSec: () => ex.current.masterDurationSec,
                getActiveStartSec: () => ex.current.activeSource.startSec,
                getCurrentTimeSec: () => {
                    let e = ed.current;
                    return null != e
                        ? e
                        : Math.max(0, ex.current.activeSource.startSec + (w.current?.currentTime ?? 0));
                },
                seekTo: (e) => {
                    let t = o()(e, 0, ex.current.masterDurationSec);
                    if ((z(t), E(ex.current.activeSource, t))) {
                        ed.current = null;
                        let e = w.current;
                        (null != e && (e.currentTime = t - ex.current.activeSource.startSec),
                            ex.current.isScrubbing || ea(t));
                        return;
                    }
                    ((ed.current = t), ex.current.isScrubbing || ex.current.revertToOriginal(t));
                },
            })),
            t(ev.current),
            () => {
                t(null);
            }
        ),
        [t, ea],
    ),
        l.useEffect(
            () => () => {
                null != eh.current && clearTimeout(eh.current);
            },
            [],
        ));
    let e_ = l.useRef(V);
    function eb(e) {
        e.id !== ei.id && eC(e.id, K);
    }
    function ey(e) {
        er() || L.onCanPlay?.(e);
    }
    (l.useEffect(() => {
        e_.current !== V && ((e_.current = V), w.current?.load());
    }, [V]),
        l.useEffect(() => {
            if (h) return;
            let e = ed.current;
            null == e || null != ec.current || E(ex.current.activeSource, e) || ex.current.revertToOriginal(e);
        }, [h]));
    let eT = !E(ei, K);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c.D, {
                onClick: L.onClick ?? void 0,
                className: a()(j.dw, { [j.x2]: M }),
                children: [
                    (0, i.jsxs)(T, {
                        source: ei,
                        masterSec: K,
                        isPlaying: Y,
                        playbackRate: Q,
                        isGridView: M,
                        children: [
                            (0, i.jsxs)(m.A, {
                                ...L,
                                ref: F,
                                className: a()(s, { [j._b]: eT, [j.l3]: M }),
                                poster: (0, f.s)(ei.poster ?? r, ei, U, G),
                                onCanPlay: ey,
                                onCanPlayThrough: ey,
                                onTimeUpdate: function (e) {
                                    let t = w.current;
                                    if (null != t && null == ec.current && null == ed.current) {
                                        $(t.playbackRate);
                                        let e = Math.max(0, ei.startSec + t.currentTime);
                                        (z(e), ei.id !== R.id && e >= ei.startSec + ei.durationSec - 0.12 && eE(e));
                                    }
                                    g?.(e);
                                },
                                onEnded: function (e) {
                                    ei.id !== R.id ? eE(ei.startSec + ei.durationSec) : A?.(e);
                                },
                                onLoadedMetadata: function (e) {
                                    let t = w.current,
                                        n = ec.current;
                                    if (
                                        (V === R.id &&
                                            null != t &&
                                            ((ef.current = !0),
                                            Number.isFinite(t.duration) &&
                                                (H(t.duration),
                                                (ex.current = { ...ex.current, masterDurationSec: t.duration }))),
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
                                    ei.id !== R.id ? eE(ei.startSec + (w.current?.currentTime ?? 0)) : v?.(e);
                                },
                                onPlay: function (e) {
                                    (q(!0), eo(K), y?.(e));
                                },
                                onPause: function (e) {
                                    (q(!1), eu(), S?.(e));
                                },
                                children: [I, (0, i.jsx)("source", { onError: p, src: ei.url })],
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
                                    masterSec: K,
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
                !P &&
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
                                            e.id === R.id ? (e.label ?? b.intl.string(_.default["9tdsDk"])) : e.label,
                                        isActive: e.id === ei.id,
                                        isOriginal: e.id === R.id,
                                        currentMasterTimeSec: K,
                                        onSelect: eb,
                                    },
                                    e.id,
                                ),
                            ),
                        (0, i.jsx)(c.D, {
                            className: j.LI,
                            "aria-label": b.intl.string(_.default.lykjkX),
                            "aria-pressed": !1,
                            onClick: function (e) {
                                if ((e.stopPropagation(), M)) {
                                    (er() && es(!0), k(!1));
                                    let e = en.find((e) => e.id === em.current);
                                    eC(null != e && E(e, K) ? e.id : R.id, K);
                                    return;
                                }
                                ((em.current = ei.id), k(!0), ea(K, !0), eC(R.id, K));
                            },
                            "data-testid": "discord-web-multi-video-player-grid-toggle",
                            children: (0, i.jsx)(d.GridSquareIcon, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
        ],
    });
}

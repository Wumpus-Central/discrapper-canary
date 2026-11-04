n.d(t, { A: () => R });
var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(404144),
    o = n.n(s),
    u = n(494012),
    d = n(939249),
    c = n(481901),
    m = n(607470),
    h = n(394039),
    f = n(61491),
    p = n(97808),
    g = n(778712),
    A = n(339350),
    v = n(834730);
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
function C(e, t) {
    if (t < e.startSec) return e.startSec - t;
    let n = e.startSec + e.durationSec;
    return t >= n ? n - t : 0;
}
var _ = n(683825),
    y = n(792996),
    T = n(243189);
let N = i.memo(function (e) {
    let t,
        { source: n, masterSec: a, isPlaying: s, playbackRate: o, isGridView: d, onMediaElement: c, children: E } = e,
        N = i.useRef(null),
        [b, j] = i.useState(!1),
        I = x(n, a),
        S = a - n.startSec,
        R = a < n.startSec,
        M = Math.ceil(C(n, a)),
        O = (0, f.rB)(M),
        w = n.owner?.name ?? n.label ?? y.intl.string(_.default["6XuC8e"]),
        { ref: P, width: L, height: k } = (0, u.Ay)();
    (i.useEffect(() => {
        let e = N.current;
        if (null != e) {
            if (!I) return void e.pause();
            if (Math.abs(e.currentTime - S) > 0.35)
                try {
                    e.currentTime = S;
                } catch {}
            ((e.playbackRate = o), s ? e.play().catch(() => {}) : e.pause());
        }
    }, [I, S, s, o, b]),
        i.useEffect(() => (c?.(n.id, N.current), () => c?.(n.id, null)), [c, n.id]));
    let D = d && !I && 0 !== M;
    return (
        d && I
            ? (t = y.intl.formatToPlainString(_.default.zc1itm, { name: w }))
            : d && (t = y.intl.formatToPlainString(R ? _.default.dUPcpR : _.default.q8TlkE, { name: w, time: O })),
        (0, l.jsxs)("div", {
            className: T.Vs,
            role: d ? "group" : void 0,
            "aria-label": t,
            "data-testid": "discord-web-multi-video-player-grid-tile",
            children: [
                (0, l.jsxs)("div", {
                    ref: P,
                    className: r()(T.iH, { [T.om]: d }),
                    children: [
                        E ??
                            (0, l.jsx)(m.A, {
                                ref: N,
                                className: r()(T.cr, { [T.qb]: D }),
                                poster: (0, h.s)(n.poster, n, L, k),
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
                            (0, l.jsx)("div", {
                                className: T.cL,
                                children: (0, l.jsx)(p.eu, {
                                    src: n.owner.avatarUrl,
                                    size: (L ?? 0) > 300 ? g._3.SIZE_32 : g._3.SIZE_20,
                                    "aria-hidden": !0,
                                }),
                            }),
                    ],
                }),
                D &&
                    (0, l.jsxs)("div", {
                        className: T.rm,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)(A.Q, { size: "xs", color: "currentColor" }),
                            (0, l.jsx)(v.E, { variant: "body-xs/medium", color: "none", children: O }),
                        ],
                    }),
            ],
        })
    );
});
var b = n(683063),
    j = n(599507);
let I = i.memo(function (e) {
    let { source: t, label: n, isActive: i, isOriginal: a, currentMasterTimeSec: s, onSelect: o } = e,
        c = t.owner?.name ?? n ?? y.intl.string(_.default["6XuC8e"]),
        m = x(t, s),
        { ref: v, width: E, height: T } = (0, u.Ay)(m, i, a);
    if (!m && !i && !a) {
        let e = (0, f.rB)(C(t, s));
        return (0, l.jsx)(b.u, {
            asset: (0, l.jsx)(A.Q, { size: "xs" }),
            assetSize: 16,
            body: e,
            position: "left",
            ariaHidden: !0,
            children: (0, l.jsx)("div", {
                className: j.RG,
                "aria-label": y.intl.formatToPlainString(_.default.JFaxs2, { name: c, time: e }),
                "data-testid": "discord-web-multi-video-player-pov-out-of-range",
                children: (0, l.jsx)(p.eu, { src: t.owner?.avatarUrl, size: g._3.SIZE_32, "aria-hidden": !0 }),
            }),
        });
    }
    return (0, l.jsxs)(d.D, {
        className: r()(j.uF, { [j._]: i }),
        "aria-label": i
            ? y.intl.formatToPlainString(_.default["RSMzC/"], { name: c })
            : y.intl.formatToPlainString(_.default["4AH1Vb"], { name: c }),
        "aria-current": i,
        onClick: function (e) {
            (e.stopPropagation(), o(t));
        },
        "data-testid": "discord-web-multi-video-player-pov",
        children: [
            (0, l.jsx)("div", {
                className: r()(j.U8, { [j.ED]: i }),
                children:
                    null != t.poster &&
                    (0, l.jsx)("img", {
                        ref: v,
                        className: j.a1,
                        src: (0, h.s)(t.poster, t, E, T),
                        alt: "",
                        "aria-hidden": !0,
                    }),
            }),
            null != t.owner &&
                (0, l.jsx)("div", {
                    className: j.UH,
                    children: (0, l.jsx)(p.eu, { src: t.owner.avatarUrl, size: g._3.SIZE_16, "aria-hidden": !0 }),
                }),
        ],
    });
});
var S = n(340710);
function R(e) {
    let {
            ref: t,
            src: n,
            poster: a,
            className: s,
            onSourceError: f,
            isScrubbing: p,
            onTimeUpdate: g,
            onEnded: A,
            onLoadedMetadata: v,
            onError: C,
            onPlay: T,
            onPause: b,
            children: j,
            original: R,
            subSources: M,
            isGridView: O,
            setIsGridView: w,
            suppressSourceSelection: P = !1,
            ...L
        } = e,
        k = i.useRef(null),
        { ref: D, width: U, height: F } = (0, u.Ay)(),
        G = i.useCallback(
            (e) => {
                ((k.current = e), (D.current = e));
            },
            [D],
        ),
        [V, H] = i.useState(R.durationSec ?? 0),
        [B, W] = i.useState(R.id),
        [Z, z] = i.useState(0),
        [K, q] = i.useState(!1),
        [Y, Q] = i.useState(1),
        {
            freezeCanvasRef: $,
            freezeObjectFit: X,
            isFreezeFrameHidden: J,
            captureFreezeFrame: ee,
            releaseFreezeFrame: et,
        } = (function (e) {
            let [t, n] = i.useState("hidden"),
                [l, a] = i.useState("contain"),
                r = i.useRef(null),
                s = i.useCallback(() => {
                    let t = e.current,
                        l = r.current;
                    if (null == t || null == l || 0 === t.videoWidth) return;
                    let i = l.getContext("2d");
                    if (null != i) {
                        ((l.width = t.videoWidth), (l.height = t.videoHeight));
                        try {
                            i.drawImage(t, 0, 0);
                        } catch {
                            return;
                        }
                        (a(window.getComputedStyle(t).objectFit), n("holding"));
                    }
                }, [e]),
                o = i.useCallback(() => {
                    n((e) => ("holding" === e ? "releasing" : e));
                }, []);
            return (
                i.useEffect(() => {
                    if ("releasing" !== t) return;
                    let l = e.current,
                        i = !1;
                    function a() {
                        i || ((i = !0), n("hidden"));
                    }
                    let r = setTimeout(a, 1500 * (null != l));
                    if (null == l)
                        return () => {
                            ((i = !0), clearTimeout(r));
                        };
                    if ("function" == typeof l.requestVideoFrameCallback) {
                        let e = l.requestVideoFrameCallback(a);
                        return () => {
                            ((i = !0), clearTimeout(r), l.cancelVideoFrameCallback(e));
                        };
                    }
                    return (
                        l.addEventListener("seeked", a),
                        () => {
                            ((i = !0), clearTimeout(r), l.removeEventListener("seeked", a));
                        }
                    );
                }, [t, e]),
                {
                    freezeCanvasRef: r,
                    freezeObjectFit: l,
                    isFreezeFrameHidden: "hidden" === t,
                    captureFreezeFrame: s,
                    releaseFreezeFrame: o,
                }
            );
        })(k),
        en = i.useMemo(() => [{ ...R, startSec: 0, durationSec: V }, ...M], [R, M, V]),
        el = en.find((e) => e.id === B) ?? en[0],
        {
            registerFollowerElement: ei,
            isGateRaised: ea,
            raiseSyncGate: er,
            clearSyncGate: es,
            handleDriverPlay: eo,
            handleDriverPause: eu,
        } = (function (e) {
            let { elementRef: t, sources: n, activeSourceId: l, isGridView: a } = e,
                [r, s] = i.useState(null),
                o = i.useRef(null),
                u = i.useRef(new Map()),
                d = i.useRef(!1),
                c = i.useCallback((e, t) => {
                    null == t ? u.current.delete(e) : u.current.set(e, t);
                }, []),
                m = i.useCallback((e) => (e.id === l ? t.current : (u.current.get(e.id) ?? null)), [l, t]),
                h = i.useRef({ sources: n, isGridView: a, getSourceElement: m });
            i.useLayoutEffect(() => {
                h.current = { sources: n, isGridView: a, getSourceElement: m };
            });
            let f = i.useCallback(() => null != o.current, []),
                p = i.useCallback(
                    function (e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.current.isGridView,
                            l = t.current;
                        if (null == l || l.paused || !n) return;
                        let { sources: i, getSourceElement: a } = h.current;
                        i.every((t) => E(a(t), t, e)) ||
                            ((d.current = !0), (o.current = e), l.pause(), l.dispatchEvent(new Event("waiting")), s(e));
                    },
                    [t],
                ),
                g = i.useCallback(
                    (e) => {
                        ((o.current = null), s(null));
                        let n = t.current;
                        null == n ||
                            (n.dispatchEvent(new Event("canplay")),
                            e &&
                                ((d.current = !0),
                                n.play().catch(() => {
                                    d.current = !1;
                                })));
                    },
                    [t],
                ),
                A = i.useCallback(
                    (e) => {
                        if (d.current) {
                            d.current = !1;
                            return;
                        }
                        p(e);
                    },
                    [p],
                ),
                v = i.useCallback(() => {
                    if (d.current) {
                        d.current = !1;
                        return;
                    }
                    null != o.current && g(!1);
                }, [g]);
            return (
                i.useEffect(() => {
                    if (null == r) return;
                    let e = n.map(m).filter((e) => null != e);
                    function t() {
                        n.every((e) => E(m(e), e, r)) && g(!0);
                    }
                    let l = setTimeout(() => g(!0), 2500);
                    return (
                        e.forEach((e) => {
                            (e.addEventListener("canplay", t),
                                e.addEventListener("canplaythrough", t),
                                e.addEventListener("seeked", t));
                        }),
                        t(),
                        () => {
                            (clearTimeout(l),
                                e.forEach((e) => {
                                    (e.removeEventListener("canplay", t),
                                        e.removeEventListener("canplaythrough", t),
                                        e.removeEventListener("seeked", t));
                                }));
                        }
                    );
                }, [r, n, m, g]),
                {
                    registerFollowerElement: c,
                    isGateRaised: f,
                    raiseSyncGate: p,
                    clearSyncGate: g,
                    handleDriverPlay: A,
                    handleDriverPause: v,
                }
            );
        })({ elementRef: k, sources: en, activeSourceId: el.id, isGridView: O }),
        ed = i.useRef(null),
        ec = i.useRef(null),
        em = i.useRef(R.id),
        eh = i.useRef(!1),
        ef = i.useRef(null),
        ep = i.useRef(null);
    function eg() {
        null != ep.current &&
            (clearTimeout(ep.current), (ep.current = null), k.current?.dispatchEvent(new Event("canplay")));
    }
    function eA() {
        let e = ef.current;
        null != e && ((ef.current = null), eg(), ev(e.sourceId, e.masterSec));
    }
    function ev(e, t) {
        let n = en.find((t) => t.id === e);
        if (null == n) return;
        if (n.id === R.id) ((ef.current = null), eg());
        else if (!eh.current) {
            let e;
            ((ef.current = { sourceId: n.id, masterSec: t }),
                null == ep.current &&
                    null != (e = k.current) &&
                    (e.dispatchEvent(new Event("waiting")),
                    (e.preload = "metadata"),
                    e.load(),
                    (ep.current = setTimeout(() => {
                        ((eh.current = !0), eE.current.applyDeferredSwitch());
                    }, 5e3))));
            return;
        }
        let l = o()(t, 0, eE.current.masterDurationSec),
            i = k.current;
        if (n.id === eE.current.activeSource.id) {
            ((ec.current = null), null != i && (i.currentTime = l - n.startSec));
            return;
        }
        (ee(),
            (ed.current = {
                localSeekSec: o()(l - n.startSec, 0, n.durationSec),
                resumePlayback: null != i && !i.paused,
                playbackRate: i?.playbackRate ?? 1,
            }),
            (ec.current = l),
            (eE.current = { ...eE.current, activeSource: n }),
            W(n.id),
            z(l));
    }
    function ex(e) {
        ev(R.id, e);
    }
    let eE = i.useRef({
        activeSource: el,
        masterDurationSec: V,
        isScrubbing: p,
        revertToOriginal: ex,
        applyDeferredSwitch: eA,
    });
    i.useLayoutEffect(() => {
        eE.current = {
            ...eE.current,
            activeSource: el,
            masterDurationSec: V,
            isScrubbing: p,
            revertToOriginal: ex,
            applyDeferredSwitch: eA,
        };
    });
    let eC = i.useRef(null);
    (i.useLayoutEffect(
        () => (
            (eC.current ??= (function (e) {
                let t = null;
                function n() {
                    let n = e.getElement();
                    return (null != n && (t = n), t);
                }
                return new Proxy(
                    {},
                    {
                        get(t, l) {
                            let i = n();
                            switch (l) {
                                case "domNode":
                                    return e.getElement();
                                case "currentTime":
                                    return e.getCurrentTimeSec();
                                case "duration":
                                    return e.getDurationSec();
                                case "buffered":
                                    var a, r;
                                    return (
                                        (a = i?.buffered),
                                        (r = e.getActiveStartSec()),
                                        {
                                            length: a?.length ?? 0,
                                            start: (e) => (a?.start(e) ?? 0) + r,
                                            end: (e) => (a?.end(e) ?? 0) + r,
                                        }
                                    );
                            }
                            if (null == i) return;
                            let s = Reflect.get(i, l);
                            return "function" == typeof s ? s.bind(i) : s;
                        },
                        set(t, l, i) {
                            if ("currentTime" === l) return (e.seekTo(i), !0);
                            let a = n();
                            return (null != a && Reflect.set(a, l, i), !0);
                        },
                        has(e, t) {
                            let l = n();
                            return null != l && Reflect.has(l, t);
                        },
                    },
                );
            })({
                getElement: () => k.current,
                getDurationSec: () => eE.current.masterDurationSec,
                getActiveStartSec: () => eE.current.activeSource.startSec,
                getCurrentTimeSec: () => {
                    let e = ec.current;
                    return null != e
                        ? e
                        : Math.max(0, eE.current.activeSource.startSec + (k.current?.currentTime ?? 0));
                },
                seekTo: (e) => {
                    let t = o()(e, 0, eE.current.masterDurationSec);
                    if ((z(t), x(eE.current.activeSource, t))) {
                        ec.current = null;
                        let e = k.current;
                        (null != e && (e.currentTime = t - eE.current.activeSource.startSec),
                            eE.current.isScrubbing || er(t));
                        return;
                    }
                    ((ec.current = t), eE.current.isScrubbing || eE.current.revertToOriginal(t));
                },
            })),
            t(eC.current),
            () => {
                t(null);
            }
        ),
        [t, er],
    ),
        i.useEffect(
            () => () => {
                null != ep.current && clearTimeout(ep.current);
            },
            [],
        ));
    let e_ = i.useRef(B);
    function ey(e) {
        e.id !== el.id && ev(e.id, Z);
    }
    function eT(e) {
        ea() || L.onCanPlay?.(e);
    }
    (i.useEffect(() => {
        e_.current !== B && ((e_.current = B), k.current?.load());
    }, [B]),
        i.useEffect(() => {
            if (p) return;
            let e = ec.current;
            null == e || null != ed.current || x(eE.current.activeSource, e) || eE.current.revertToOriginal(e);
        }, [p]));
    let eN = !x(el, Z);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(d.D, {
                onClick: L.onClick ?? void 0,
                className: r()(S.dw, { [S.x2]: O }),
                children: [
                    (0, l.jsxs)(N, {
                        source: el,
                        masterSec: Z,
                        isPlaying: K,
                        playbackRate: Y,
                        isGridView: O,
                        children: [
                            (0, l.jsxs)(m.A, {
                                ...L,
                                ref: G,
                                className: r()(s, { [S._b]: eN, [S.l3]: O }),
                                poster: (0, h.s)(el.poster ?? a, el, U, F),
                                onCanPlay: eT,
                                onCanPlayThrough: eT,
                                onTimeUpdate: function (e) {
                                    let t = k.current;
                                    if (null != t && null == ed.current && null == ec.current) {
                                        Q(t.playbackRate);
                                        let e = Math.max(0, el.startSec + t.currentTime);
                                        (z(e), el.id !== R.id && e >= el.startSec + el.durationSec - 0.12 && ex(e));
                                    }
                                    g?.(e);
                                },
                                onEnded: function (e) {
                                    el.id !== R.id ? ex(el.startSec + el.durationSec) : A?.(e);
                                },
                                onLoadedMetadata: function (e) {
                                    let t = k.current,
                                        n = ed.current;
                                    if (
                                        (B === R.id &&
                                            null != t &&
                                            ((eh.current = !0),
                                            Number.isFinite(t.duration) &&
                                                (H(t.duration),
                                                (eE.current = { ...eE.current, masterDurationSec: t.duration }))),
                                        null == n)
                                    ) {
                                        (v?.(e), eA());
                                        return;
                                    }
                                    if (((ed.current = null), null != t)) {
                                        t.playbackRate = n.playbackRate;
                                        try {
                                            t.currentTime = n.localSeekSec;
                                        } catch {}
                                        n.resumePlayback && t.play().catch(() => {});
                                    }
                                    ((ec.current = null), et());
                                },
                                onError: function (e) {
                                    el.id !== R.id ? ex(el.startSec + (k.current?.currentTime ?? 0)) : C?.(e);
                                },
                                onPlay: function (e) {
                                    (q(!0), eo(Z), T?.(e));
                                },
                                onPause: function (e) {
                                    (q(!1), eu(), b?.(e));
                                },
                                children: [j, (0, l.jsx)("source", { onError: f, src: el.url })],
                            }),
                            (0, l.jsx)("canvas", {
                                ref: $,
                                className: S.bQ,
                                style: { objectFit: X },
                                hidden: J,
                                "aria-hidden": !0,
                            }),
                        ],
                    }),
                    O &&
                        M.map((e) =>
                            (0, l.jsx)(
                                N,
                                {
                                    source: e,
                                    masterSec: Z,
                                    isPlaying: K,
                                    playbackRate: Y,
                                    isGridView: !0,
                                    onMediaElement: ei,
                                },
                                e.id,
                            ),
                        ),
                ],
            }),
            en.length > 1 &&
                !P &&
                (0, l.jsxs)("div", {
                    className: S.c2,
                    "data-testid": "discord-web-multi-video-player-povs",
                    children: [
                        !O &&
                            en.map((e) =>
                                (0, l.jsx)(
                                    I,
                                    {
                                        source: e,
                                        label:
                                            e.id === R.id ? (e.label ?? y.intl.string(_.default["9tdsDk"])) : e.label,
                                        isActive: e.id === el.id,
                                        isOriginal: e.id === R.id,
                                        currentMasterTimeSec: Z,
                                        onSelect: ey,
                                    },
                                    e.id,
                                ),
                            ),
                        (0, l.jsx)(d.D, {
                            className: S.LI,
                            "aria-label": y.intl.string(_.default.lykjkX),
                            "aria-pressed": !1,
                            onClick: function (e) {
                                if ((e.stopPropagation(), O)) {
                                    (ea() && es(!0), w(!1));
                                    let e = en.find((e) => e.id === em.current);
                                    ev(null != e && x(e, Z) ? e.id : R.id, Z);
                                    return;
                                }
                                ((em.current = el.id), w(!0), er(Z, !0), ev(R.id, Z));
                            },
                            "data-testid": "discord-web-multi-video-player-grid-toggle",
                            children: (0, l.jsx)(c.d, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
        ],
    });
}

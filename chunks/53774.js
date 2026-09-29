n.d(t, { A: () => _ });
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(404144),
    s = n.n(u),
    c = n(939249),
    o = n(481901),
    d = n(607470),
    m = n(494012),
    f = n(61491),
    g = n(97808),
    h = n(778712),
    p = n(339350),
    v = n(834730);
function x(e, t) {
    return t >= e.startSec && t < e.startSec + e.durationSec;
}
function S(e, t, n) {
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
var b = n(704796),
    y = n(375708),
    E = n(243189);
let j = l.memo(function (e) {
    let t,
        { source: n, masterSec: a, isPlaying: u, playbackRate: s, isGridView: c, onMediaElement: o, children: S } = e,
        j = l.useRef(null),
        [A, I] = l.useState(!1),
        T = x(n, a),
        M = a - n.startSec,
        _ = a < n.startSec,
        N = Math.ceil(C(n, a)),
        L = (0, f.rB)(N),
        k = n.owner?.name ?? n.label ?? y.intl.string(b.default["6XuC8e"]),
        { ref: R, width: w } = (0, m.Ay)();
    (l.useEffect(() => {
        let e = j.current;
        if (null != e) {
            if (!T) return void e.pause();
            if (Math.abs(e.currentTime - M) > 0.35)
                try {
                    e.currentTime = M;
                } catch {}
            ((e.playbackRate = s), u ? e.play().catch(() => {}) : e.pause());
        }
    }, [T, M, u, s, A]),
        l.useEffect(() => (o?.(n.id, j.current), () => o?.(n.id, null)), [o, n.id]));
    let P = c && !T && 0 !== N;
    return (
        c && T
            ? (t = y.intl.formatToPlainString(b.default.zc1itm, { name: k }))
            : c && (t = y.intl.formatToPlainString(_ ? b.default.dUPcpR : b.default.q8TlkE, { name: k, time: L })),
        (0, r.jsxs)("div", {
            className: E.Vs,
            role: c ? "group" : void 0,
            "aria-label": t,
            "data-testid": "discord-web-multi-video-player-grid-tile",
            children: [
                (0, r.jsxs)("div", {
                    ref: R,
                    className: i()(E.iH, { [E.om]: c }),
                    children: [
                        S ??
                            (0, r.jsx)(d.A, {
                                ref: j,
                                className: i()(E.cr, { [E.qb]: P }),
                                poster: n.poster,
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
                            (0, r.jsx)("div", {
                                className: E.cL,
                                children: (0, r.jsx)(g.eu, {
                                    src: n.owner.avatarUrl,
                                    size: (w ?? 0) > 300 ? h._3.SIZE_32 : h._3.SIZE_20,
                                    "aria-hidden": !0,
                                }),
                            }),
                    ],
                }),
                P &&
                    (0, r.jsxs)("div", {
                        className: E.rm,
                        "aria-hidden": !0,
                        children: [
                            (0, r.jsx)(p.Q, { size: "xs", color: "currentColor" }),
                            (0, r.jsx)(v.E, { variant: "text-xs/medium", color: "none", children: L }),
                        ],
                    }),
            ],
        })
    );
});
var A = n(683063),
    I = n(599507);
let T = l.memo(function (e) {
    let { source: t, label: n, isActive: l, isOriginal: a, currentMasterTimeSec: u, onSelect: s } = e,
        o = t.owner?.name ?? n ?? y.intl.string(b.default["6XuC8e"]);
    if (!x(t, u) && !l && !a) {
        let e = (0, f.rB)(C(t, u));
        return (0, r.jsx)(A.u, {
            asset: (0, r.jsx)(p.Q, { size: "xs" }),
            assetSize: 16,
            body: e,
            position: "left",
            ariaHidden: !0,
            children: (0, r.jsx)("div", {
                className: I.RG,
                "aria-label": y.intl.formatToPlainString(b.default.JFaxs2, { name: o, time: e }),
                "data-testid": "discord-web-multi-video-player-pov-out-of-range",
                children: (0, r.jsx)(g.eu, { src: t.owner?.avatarUrl, size: h._3.SIZE_32, "aria-hidden": !0 }),
            }),
        });
    }
    return (0, r.jsxs)(c.D, {
        className: i()(I.uF, { [I._]: l }),
        "aria-label": l
            ? y.intl.formatToPlainString(b.default["RSMzC/"], { name: o })
            : y.intl.formatToPlainString(b.default["4AH1Vb"], { name: o }),
        "aria-current": l,
        onClick: function (e) {
            (e.stopPropagation(), s(t));
        },
        "data-testid": "discord-web-multi-video-player-pov",
        children: [
            (0, r.jsx)("div", {
                className: i()(I.U8, { [I.ED]: l }),
                children:
                    null != t.poster &&
                    (0, r.jsx)("img", { className: I.a1, src: t.poster, alt: "", "aria-hidden": !0 }),
            }),
            null != t.owner &&
                (0, r.jsx)("div", {
                    className: I.UH,
                    children: (0, r.jsx)(g.eu, { src: t.owner.avatarUrl, size: h._3.SIZE_16, "aria-hidden": !0 }),
                }),
        ],
    });
});
var M = n(340710);
function _(e) {
    let {
            ref: t,
            src: n,
            poster: a,
            className: u,
            onSourceError: m,
            isScrubbing: f,
            onTimeUpdate: g,
            onEnded: h,
            onLoadedMetadata: p,
            onError: v,
            onPlay: C,
            onPause: E,
            children: A,
            original: I,
            subSources: _,
            isGridView: N,
            setIsGridView: L,
            suppressSourceSelection: k = !1,
            ...R
        } = e,
        w = l.useRef(null),
        [P, O] = l.useState(I.durationSec ?? 0),
        [D, V] = l.useState(I.id),
        [U, H] = l.useState(0),
        [z, F] = l.useState(!1),
        [G, $] = l.useState(1),
        {
            freezeCanvasRef: Z,
            freezeObjectFit: K,
            isFreezeFrameHidden: X,
            captureFreezeFrame: Y,
            releaseFreezeFrame: B,
        } = (function (e) {
            let [t, n] = l.useState("hidden"),
                [r, a] = l.useState("contain"),
                i = l.useRef(null),
                u = l.useCallback(() => {
                    let t = e.current,
                        r = i.current;
                    if (null == t || null == r || 0 === t.videoWidth) return;
                    let l = r.getContext("2d");
                    if (null != l) {
                        ((r.width = t.videoWidth), (r.height = t.videoHeight));
                        try {
                            l.drawImage(t, 0, 0);
                        } catch {
                            return;
                        }
                        (a(window.getComputedStyle(t).objectFit), n("holding"));
                    }
                }, [e]),
                s = l.useCallback(() => {
                    n((e) => ("holding" === e ? "releasing" : e));
                }, []);
            return (
                l.useEffect(() => {
                    if ("releasing" !== t) return;
                    let r = e.current,
                        l = !1;
                    function a() {
                        l || ((l = !0), n("hidden"));
                    }
                    let i = setTimeout(a, 1500 * (null != r));
                    if (null == r)
                        return () => {
                            ((l = !0), clearTimeout(i));
                        };
                    if ("function" == typeof r.requestVideoFrameCallback) {
                        let e = r.requestVideoFrameCallback(a);
                        return () => {
                            ((l = !0), clearTimeout(i), r.cancelVideoFrameCallback(e));
                        };
                    }
                    return (
                        r.addEventListener("seeked", a),
                        () => {
                            ((l = !0), clearTimeout(i), r.removeEventListener("seeked", a));
                        }
                    );
                }, [t, e]),
                {
                    freezeCanvasRef: i,
                    freezeObjectFit: r,
                    isFreezeFrameHidden: "hidden" === t,
                    captureFreezeFrame: u,
                    releaseFreezeFrame: s,
                }
            );
        })(w),
        Q = l.useMemo(() => [{ ...I, startSec: 0, durationSec: P }, ..._], [I, _, P]),
        q = Q.find((e) => e.id === D) ?? Q[0],
        {
            registerFollowerElement: W,
            isGateRaised: J,
            raiseSyncGate: ee,
            clearSyncGate: et,
            handleDriverPlay: en,
            handleDriverPause: er,
        } = (function (e) {
            let { elementRef: t, sources: n, activeSourceId: r, isGridView: a } = e,
                [i, u] = l.useState(null),
                s = l.useRef(null),
                c = l.useRef(new Map()),
                o = l.useRef(!1),
                d = l.useCallback((e, t) => {
                    null == t ? c.current.delete(e) : c.current.set(e, t);
                }, []),
                m = l.useCallback((e) => (e.id === r ? t.current : (c.current.get(e.id) ?? null)), [r, t]),
                f = l.useRef({ sources: n, isGridView: a, getSourceElement: m });
            l.useLayoutEffect(() => {
                f.current = { sources: n, isGridView: a, getSourceElement: m };
            });
            let g = l.useCallback(() => null != s.current, []),
                h = l.useCallback(
                    function (e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.current.isGridView,
                            r = t.current;
                        if (null == r || r.paused || !n) return;
                        let { sources: l, getSourceElement: a } = f.current;
                        l.every((t) => S(a(t), t, e)) ||
                            ((o.current = !0), (s.current = e), r.pause(), r.dispatchEvent(new Event("waiting")), u(e));
                    },
                    [t],
                ),
                p = l.useCallback(
                    (e) => {
                        ((s.current = null), u(null));
                        let n = t.current;
                        null == n ||
                            (n.dispatchEvent(new Event("canplay")),
                            e &&
                                ((o.current = !0),
                                n.play().catch(() => {
                                    o.current = !1;
                                })));
                    },
                    [t],
                ),
                v = l.useCallback(
                    (e) => {
                        if (o.current) {
                            o.current = !1;
                            return;
                        }
                        h(e);
                    },
                    [h],
                ),
                x = l.useCallback(() => {
                    if (o.current) {
                        o.current = !1;
                        return;
                    }
                    null != s.current && p(!1);
                }, [p]);
            return (
                l.useEffect(() => {
                    if (null == i) return;
                    let e = n.map(m).filter((e) => null != e);
                    function t() {
                        n.every((e) => S(m(e), e, i)) && p(!0);
                    }
                    let r = setTimeout(() => p(!0), 2500);
                    return (
                        e.forEach((e) => {
                            (e.addEventListener("canplay", t),
                                e.addEventListener("canplaythrough", t),
                                e.addEventListener("seeked", t));
                        }),
                        t(),
                        () => {
                            (clearTimeout(r),
                                e.forEach((e) => {
                                    (e.removeEventListener("canplay", t),
                                        e.removeEventListener("canplaythrough", t),
                                        e.removeEventListener("seeked", t));
                                }));
                        }
                    );
                }, [i, n, m, p]),
                {
                    registerFollowerElement: d,
                    isGateRaised: g,
                    raiseSyncGate: h,
                    clearSyncGate: p,
                    handleDriverPlay: v,
                    handleDriverPause: x,
                }
            );
        })({ elementRef: w, sources: Q, activeSourceId: q.id, isGridView: N }),
        el = l.useRef(null),
        ea = l.useRef(null),
        ei = l.useRef(I.id),
        eu = l.useRef(!1),
        es = l.useRef(null),
        ec = l.useRef(null);
    function eo() {
        null != ec.current &&
            (clearTimeout(ec.current), (ec.current = null), w.current?.dispatchEvent(new Event("canplay")));
    }
    function ed() {
        let e = es.current;
        null != e && ((es.current = null), eo(), em(e.sourceId, e.masterSec));
    }
    function em(e, t) {
        let n = Q.find((t) => t.id === e);
        if (null == n) return;
        if (n.id === I.id) ((es.current = null), eo());
        else if (!eu.current) {
            let e;
            ((es.current = { sourceId: n.id, masterSec: t }),
                null == ec.current &&
                    null != (e = w.current) &&
                    (e.dispatchEvent(new Event("waiting")),
                    (e.preload = "metadata"),
                    e.load(),
                    (ec.current = setTimeout(() => {
                        ((eu.current = !0), eg.current.applyDeferredSwitch());
                    }, 5e3))));
            return;
        }
        let r = s()(t, 0, eg.current.masterDurationSec),
            l = w.current;
        if (n.id === eg.current.activeSource.id) {
            ((ea.current = null), null != l && (l.currentTime = r - n.startSec));
            return;
        }
        (Y(),
            (el.current = {
                localSeekSec: s()(r - n.startSec, 0, n.durationSec),
                resumePlayback: null != l && !l.paused,
                playbackRate: l?.playbackRate ?? 1,
            }),
            (ea.current = r),
            (eg.current = { ...eg.current, activeSource: n }),
            V(n.id),
            H(r));
    }
    function ef(e) {
        em(I.id, e);
    }
    let eg = l.useRef({
        activeSource: q,
        masterDurationSec: P,
        isScrubbing: f,
        revertToOriginal: ef,
        applyDeferredSwitch: ed,
    });
    l.useLayoutEffect(() => {
        eg.current = {
            ...eg.current,
            activeSource: q,
            masterDurationSec: P,
            isScrubbing: f,
            revertToOriginal: ef,
            applyDeferredSwitch: ed,
        };
    });
    let eh = l.useRef(null);
    (l.useLayoutEffect(
        () => (
            (eh.current ??= (function (e) {
                let t = null;
                function n() {
                    let n = e.getElement();
                    return (null != n && (t = n), t);
                }
                return new Proxy(
                    {},
                    {
                        get(t, r) {
                            let l = n();
                            switch (r) {
                                case "domNode":
                                    return e.getElement();
                                case "currentTime":
                                    return e.getCurrentTimeSec();
                                case "duration":
                                    return e.getDurationSec();
                                case "buffered":
                                    var a, i;
                                    return (
                                        (a = l?.buffered),
                                        (i = e.getActiveStartSec()),
                                        {
                                            length: a?.length ?? 0,
                                            start: (e) => (a?.start(e) ?? 0) + i,
                                            end: (e) => (a?.end(e) ?? 0) + i,
                                        }
                                    );
                            }
                            if (null == l) return;
                            let u = Reflect.get(l, r);
                            return "function" == typeof u ? u.bind(l) : u;
                        },
                        set(t, r, l) {
                            if ("currentTime" === r) return (e.seekTo(l), !0);
                            let a = n();
                            return (null != a && Reflect.set(a, r, l), !0);
                        },
                        has(e, t) {
                            let r = n();
                            return null != r && Reflect.has(r, t);
                        },
                    },
                );
            })({
                getElement: () => w.current,
                getDurationSec: () => eg.current.masterDurationSec,
                getActiveStartSec: () => eg.current.activeSource.startSec,
                getCurrentTimeSec: () => {
                    let e = ea.current;
                    return null != e
                        ? e
                        : Math.max(0, eg.current.activeSource.startSec + (w.current?.currentTime ?? 0));
                },
                seekTo: (e) => {
                    let t = s()(e, 0, eg.current.masterDurationSec);
                    if ((H(t), x(eg.current.activeSource, t))) {
                        ea.current = null;
                        let e = w.current;
                        (null != e && (e.currentTime = t - eg.current.activeSource.startSec),
                            eg.current.isScrubbing || ee(t));
                        return;
                    }
                    ((ea.current = t), eg.current.isScrubbing || eg.current.revertToOriginal(t));
                },
            })),
            t(eh.current),
            () => {
                t(null);
            }
        ),
        [t, ee],
    ),
        l.useEffect(
            () => () => {
                null != ec.current && clearTimeout(ec.current);
            },
            [],
        ));
    let ep = l.useRef(D);
    function ev(e) {
        e.id !== q.id && em(e.id, U);
    }
    function ex(e) {
        J() || R.onCanPlay?.(e);
    }
    (l.useEffect(() => {
        ep.current !== D && ((ep.current = D), w.current?.load());
    }, [D]),
        l.useEffect(() => {
            if (f) return;
            let e = ea.current;
            null == e || null != el.current || x(eg.current.activeSource, e) || eg.current.revertToOriginal(e);
        }, [f]));
    let eS = !x(q, U);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(c.D, {
                onClick: R.onClick ?? void 0,
                className: i()(M.dw, { [M.x2]: N }),
                children: [
                    (0, r.jsxs)(j, {
                        source: q,
                        masterSec: U,
                        isPlaying: z,
                        playbackRate: G,
                        isGridView: N,
                        children: [
                            (0, r.jsxs)(d.A, {
                                ...R,
                                ref: w,
                                className: i()(u, { [M._b]: eS, [M.l3]: N }),
                                poster: q.poster ?? a,
                                onCanPlay: ex,
                                onCanPlayThrough: ex,
                                onTimeUpdate: function (e) {
                                    let t = w.current;
                                    if (null != t && null == el.current && null == ea.current) {
                                        $(t.playbackRate);
                                        let e = Math.max(0, q.startSec + t.currentTime);
                                        (H(e), q.id !== I.id && e >= q.startSec + q.durationSec - 0.12 && ef(e));
                                    }
                                    g?.(e);
                                },
                                onEnded: function (e) {
                                    q.id !== I.id ? ef(q.startSec + q.durationSec) : h?.(e);
                                },
                                onLoadedMetadata: function (e) {
                                    let t = w.current,
                                        n = el.current;
                                    if (
                                        (D === I.id &&
                                            null != t &&
                                            ((eu.current = !0),
                                            Number.isFinite(t.duration) &&
                                                (O(t.duration),
                                                (eg.current = { ...eg.current, masterDurationSec: t.duration }))),
                                        null == n)
                                    ) {
                                        (p?.(e), ed());
                                        return;
                                    }
                                    if (((el.current = null), null != t)) {
                                        t.playbackRate = n.playbackRate;
                                        try {
                                            t.currentTime = n.localSeekSec;
                                        } catch {}
                                        n.resumePlayback && t.play().catch(() => {});
                                    }
                                    ((ea.current = null), B());
                                },
                                onError: function (e) {
                                    q.id !== I.id ? ef(q.startSec + (w.current?.currentTime ?? 0)) : v?.(e);
                                },
                                onPlay: function (e) {
                                    (F(!0), en(U), C?.(e));
                                },
                                onPause: function (e) {
                                    (F(!1), er(), E?.(e));
                                },
                                children: [A, (0, r.jsx)("source", { onError: m, src: q.url })],
                            }),
                            (0, r.jsx)("canvas", {
                                ref: Z,
                                className: M.bQ,
                                style: { objectFit: K },
                                hidden: X,
                                "aria-hidden": !0,
                            }),
                        ],
                    }),
                    N &&
                        _.map((e) =>
                            (0, r.jsx)(
                                j,
                                {
                                    source: e,
                                    masterSec: U,
                                    isPlaying: z,
                                    playbackRate: G,
                                    isGridView: !0,
                                    onMediaElement: W,
                                },
                                e.id,
                            ),
                        ),
                ],
            }),
            Q.length > 1 &&
                !k &&
                (0, r.jsxs)("div", {
                    className: M.c2,
                    "data-testid": "discord-web-multi-video-player-povs",
                    children: [
                        !N &&
                            Q.map((e) =>
                                (0, r.jsx)(
                                    T,
                                    {
                                        source: e,
                                        label:
                                            e.id === I.id ? (e.label ?? y.intl.string(b.default["9tdsDk"])) : e.label,
                                        isActive: e.id === q.id,
                                        isOriginal: e.id === I.id,
                                        currentMasterTimeSec: U,
                                        onSelect: ev,
                                    },
                                    e.id,
                                ),
                            ),
                        (0, r.jsx)(c.D, {
                            className: M.LI,
                            "aria-label": y.intl.string(b.default.lykjkX),
                            "aria-pressed": !1,
                            onClick: function (e) {
                                if ((e.stopPropagation(), N)) {
                                    (J() && et(!0), L(!1));
                                    let e = Q.find((e) => e.id === ei.current);
                                    em(null != e && x(e, U) ? e.id : I.id, U);
                                    return;
                                }
                                ((ei.current = q.id), L(!0), ee(U, !0), em(I.id, U));
                            },
                            "data-testid": "discord-web-multi-video-player-grid-toggle",
                            children: (0, r.jsx)(o.d, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
        ],
    });
}

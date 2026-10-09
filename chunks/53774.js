n.d(t, { A: () => w });
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(404144),
    s = n.n(u),
    c = n(494012),
    o = n(939249),
    d = n(481901),
    m = n(607470),
    f = n(394039),
    h = n(61491),
    g = n(97808),
    p = n(778712),
    v = n(339350),
    x = n(834730);
function S(e, t) {
    return t >= e.startSec && t < e.startSec + e.durationSec;
}
function C(e, t, n) {
    return (
        !S(t, n) ||
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
var b = n(268378),
    y = n(660183),
    A = n(243189);
let j = l.memo(function (e) {
    let t,
        { source: n, masterSec: a, isPlaying: u, playbackRate: s, isGridView: o, onMediaElement: d, children: C } = e,
        j = l.useRef(null),
        [I, T] = l.useState(!1),
        M = S(n, a),
        _ = a - n.startSec,
        w = a < n.startSec,
        N = Math.ceil(E(n, a)),
        L = (0, h.rB)(N),
        k = n.owner?.name ?? n.label ?? y.intl.string(b.default["6XuC8e"]),
        { ref: R, width: P, height: O } = (0, c.Ay)();
    (l.useEffect(() => {
        let e = j.current;
        if (null != e) {
            if (!M) return void e.pause();
            if (Math.abs(e.currentTime - _) > 0.35)
                try {
                    e.currentTime = _;
                } catch {}
            ((e.playbackRate = s), u ? e.play().catch(() => {}) : e.pause());
        }
    }, [M, _, u, s, I]),
        l.useEffect(() => (d?.(n.id, j.current), () => d?.(n.id, null)), [d, n.id]));
    let D = o && !M && 0 !== N;
    return (
        o && M
            ? (t = y.intl.formatToPlainString(b.default.zc1itm, { name: k }))
            : o && (t = y.intl.formatToPlainString(w ? b.default.dUPcpR : b.default.q8TlkE, { name: k, time: L })),
        (0, r.jsxs)("div", {
            className: A.Vs,
            role: o ? "group" : void 0,
            "aria-label": t,
            "data-testid": "discord-web-multi-video-player-grid-tile",
            children: [
                (0, r.jsxs)("div", {
                    ref: R,
                    className: i()(A.iH, { [A.om]: o }),
                    children: [
                        C ??
                            (0, r.jsx)(m.A, {
                                ref: j,
                                className: i()(A.cr, { [A.qb]: D }),
                                poster: (0, f.s)(n.poster, n, P, O),
                                preload: "auto",
                                playsInline: !0,
                                muted: !0,
                                crossOrigin: "anonymous",
                                disablePictureInPicture: !0,
                                src: n.url,
                                onLoadedMetadata: function () {
                                    T(!0);
                                },
                            }),
                        o &&
                            null != n.owner &&
                            (0, r.jsx)("div", {
                                className: A.cL,
                                children: (0, r.jsx)(g.eu, {
                                    src: n.owner.avatarUrl,
                                    size: (P ?? 0) > 300 ? p._3.SIZE_32 : p._3.SIZE_20,
                                    "aria-hidden": !0,
                                }),
                            }),
                    ],
                }),
                D &&
                    (0, r.jsxs)("div", {
                        className: A.rm,
                        "aria-hidden": !0,
                        children: [
                            (0, r.jsx)(v.Q, { size: "xs", color: "currentColor" }),
                            (0, r.jsx)(x.E, { variant: "text-xs/medium", color: "none", children: L }),
                        ],
                    }),
            ],
        })
    );
});
var I = n(683063),
    T = n(599507);
let M = l.memo(function (e) {
    let { source: t, label: n, isActive: l, isOriginal: a, currentMasterTimeSec: u, onSelect: s } = e,
        d = t.owner?.name ?? n ?? y.intl.string(b.default["6XuC8e"]),
        m = S(t, u),
        { ref: x, width: C, height: A } = (0, c.Ay)(m, l, a);
    if (!m && !l && !a) {
        let e = (0, h.rB)(E(t, u));
        return (0, r.jsx)(I.u, {
            asset: (0, r.jsx)(v.Q, { size: "xs" }),
            assetSize: 16,
            body: e,
            position: "left",
            ariaHidden: !0,
            children: (0, r.jsx)("div", {
                className: T.RG,
                "aria-label": y.intl.formatToPlainString(b.default.JFaxs2, { name: d, time: e }),
                "data-testid": "discord-web-multi-video-player-pov-out-of-range",
                children: (0, r.jsx)(g.eu, { src: t.owner?.avatarUrl, size: p._3.SIZE_32, "aria-hidden": !0 }),
            }),
        });
    }
    return (0, r.jsxs)(o.D, {
        className: i()(T.uF, { [T._]: l }),
        "aria-label": l
            ? y.intl.formatToPlainString(b.default["RSMzC/"], { name: d })
            : y.intl.formatToPlainString(b.default["4AH1Vb"], { name: d }),
        "aria-current": l,
        onClick: function (e) {
            (e.stopPropagation(), s(t));
        },
        "data-testid": "discord-web-multi-video-player-pov",
        children: [
            (0, r.jsx)("div", {
                className: i()(T.U8, { [T.ED]: l }),
                children:
                    null != t.poster &&
                    (0, r.jsx)("img", {
                        ref: x,
                        className: T.a1,
                        src: (0, f.s)(t.poster, t, C, A),
                        alt: "",
                        "aria-hidden": !0,
                    }),
            }),
            null != t.owner &&
                (0, r.jsx)("div", {
                    className: T.UH,
                    children: (0, r.jsx)(g.eu, { src: t.owner.avatarUrl, size: p._3.SIZE_16, "aria-hidden": !0 }),
                }),
        ],
    });
});
var _ = n(340710);
function w(e) {
    let {
            ref: t,
            src: n,
            poster: a,
            className: u,
            onSourceError: h,
            isScrubbing: g,
            onTimeUpdate: p,
            onEnded: v,
            onLoadedMetadata: x,
            onError: E,
            onPlay: A,
            onPause: I,
            children: T,
            original: w,
            subSources: N,
            isGridView: L,
            setIsGridView: k,
            suppressSourceSelection: R = !1,
            ...P
        } = e,
        O = l.useRef(null),
        { ref: D, width: V, height: U } = (0, c.Ay)(),
        H = l.useCallback(
            (e) => {
                ((O.current = e), (D.current = e));
            },
            [D],
        ),
        [z, G] = l.useState(w.durationSec ?? 0),
        [F, $] = l.useState(w.id),
        [Z, X] = l.useState(0),
        [Y, B] = l.useState(!1),
        [K, Q] = l.useState(1),
        {
            freezeCanvasRef: q,
            freezeObjectFit: J,
            isFreezeFrameHidden: W,
            captureFreezeFrame: ee,
            releaseFreezeFrame: et,
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
        })(O),
        en = l.useMemo(() => [{ ...w, startSec: 0, durationSec: z }, ...N], [w, N, z]),
        er = en.find((e) => e.id === F) ?? en[0],
        {
            registerFollowerElement: el,
            isGateRaised: ea,
            raiseSyncGate: ei,
            clearSyncGate: eu,
            handleDriverPlay: es,
            handleDriverPause: ec,
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
            let h = l.useCallback(() => null != s.current, []),
                g = l.useCallback(
                    function (e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.current.isGridView,
                            r = t.current;
                        if (null == r || r.paused || !n) return;
                        let { sources: l, getSourceElement: a } = f.current;
                        l.every((t) => C(a(t), t, e)) ||
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
                        g(e);
                    },
                    [g],
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
                        n.every((e) => C(m(e), e, i)) && p(!0);
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
                    isGateRaised: h,
                    raiseSyncGate: g,
                    clearSyncGate: p,
                    handleDriverPlay: v,
                    handleDriverPause: x,
                }
            );
        })({ elementRef: O, sources: en, activeSourceId: er.id, isGridView: L }),
        eo = l.useRef(null),
        ed = l.useRef(null),
        em = l.useRef(w.id),
        ef = l.useRef(!1),
        eh = l.useRef(null),
        eg = l.useRef(null);
    function ep() {
        null != eg.current &&
            (clearTimeout(eg.current), (eg.current = null), O.current?.dispatchEvent(new Event("canplay")));
    }
    function ev() {
        let e = eh.current;
        null != e && ((eh.current = null), ep(), ex(e.sourceId, e.masterSec));
    }
    function ex(e, t) {
        let n = en.find((t) => t.id === e);
        if (null == n) return;
        if (n.id === w.id) ((eh.current = null), ep());
        else if (!ef.current) {
            let e;
            ((eh.current = { sourceId: n.id, masterSec: t }),
                null == eg.current &&
                    null != (e = O.current) &&
                    (e.dispatchEvent(new Event("waiting")),
                    (e.preload = "metadata"),
                    e.load(),
                    (eg.current = setTimeout(() => {
                        ((ef.current = !0), eC.current.applyDeferredSwitch());
                    }, 5e3))));
            return;
        }
        let r = s()(t, 0, eC.current.masterDurationSec),
            l = O.current;
        if (n.id === eC.current.activeSource.id) {
            ((ed.current = null), null != l && (l.currentTime = r - n.startSec));
            return;
        }
        (ee(),
            (eo.current = {
                localSeekSec: s()(r - n.startSec, 0, n.durationSec),
                resumePlayback: null != l && !l.paused,
                playbackRate: l?.playbackRate ?? 1,
            }),
            (ed.current = r),
            (eC.current = { ...eC.current, activeSource: n }),
            $(n.id),
            X(r));
    }
    function eS(e) {
        ex(w.id, e);
    }
    let eC = l.useRef({
        activeSource: er,
        masterDurationSec: z,
        isScrubbing: g,
        revertToOriginal: eS,
        applyDeferredSwitch: ev,
    });
    l.useLayoutEffect(() => {
        eC.current = {
            ...eC.current,
            activeSource: er,
            masterDurationSec: z,
            isScrubbing: g,
            revertToOriginal: eS,
            applyDeferredSwitch: ev,
        };
    });
    let eE = l.useRef(null);
    (l.useLayoutEffect(
        () => (
            (eE.current ??= (function (e) {
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
                getElement: () => O.current,
                getDurationSec: () => eC.current.masterDurationSec,
                getActiveStartSec: () => eC.current.activeSource.startSec,
                getCurrentTimeSec: () => {
                    let e = ed.current;
                    return null != e
                        ? e
                        : Math.max(0, eC.current.activeSource.startSec + (O.current?.currentTime ?? 0));
                },
                seekTo: (e) => {
                    let t = s()(e, 0, eC.current.masterDurationSec);
                    if ((X(t), S(eC.current.activeSource, t))) {
                        ed.current = null;
                        let e = O.current;
                        (null != e && (e.currentTime = t - eC.current.activeSource.startSec),
                            eC.current.isScrubbing || ei(t));
                        return;
                    }
                    ((ed.current = t), eC.current.isScrubbing || eC.current.revertToOriginal(t));
                },
            })),
            t(eE.current),
            () => {
                t(null);
            }
        ),
        [t, ei],
    ),
        l.useEffect(
            () => () => {
                null != eg.current && clearTimeout(eg.current);
            },
            [],
        ));
    let eb = l.useRef(F);
    function ey(e) {
        e.id !== er.id && ex(e.id, Z);
    }
    function eA(e) {
        ea() || P.onCanPlay?.(e);
    }
    (l.useEffect(() => {
        eb.current !== F && ((eb.current = F), O.current?.load());
    }, [F]),
        l.useEffect(() => {
            if (g) return;
            let e = ed.current;
            null == e || null != eo.current || S(eC.current.activeSource, e) || eC.current.revertToOriginal(e);
        }, [g]));
    let ej = !S(er, Z);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.D, {
                onClick: P.onClick ?? void 0,
                className: i()(_.dw, { [_.x2]: L }),
                children: [
                    (0, r.jsxs)(j, {
                        source: er,
                        masterSec: Z,
                        isPlaying: Y,
                        playbackRate: K,
                        isGridView: L,
                        children: [
                            (0, r.jsxs)(m.A, {
                                ...P,
                                ref: H,
                                className: i()(u, { [_._b]: ej, [_.l3]: L }),
                                poster: (0, f.s)(er.poster ?? a, er, V, U),
                                onCanPlay: eA,
                                onCanPlayThrough: eA,
                                onTimeUpdate: function (e) {
                                    let t = O.current;
                                    if (null != t && null == eo.current && null == ed.current) {
                                        Q(t.playbackRate);
                                        let e = Math.max(0, er.startSec + t.currentTime);
                                        (X(e), er.id !== w.id && e >= er.startSec + er.durationSec - 0.12 && eS(e));
                                    }
                                    p?.(e);
                                },
                                onEnded: function (e) {
                                    er.id !== w.id ? eS(er.startSec + er.durationSec) : v?.(e);
                                },
                                onLoadedMetadata: function (e) {
                                    let t = O.current,
                                        n = eo.current;
                                    if (
                                        (F === w.id &&
                                            null != t &&
                                            ((ef.current = !0),
                                            Number.isFinite(t.duration) &&
                                                (G(t.duration),
                                                (eC.current = { ...eC.current, masterDurationSec: t.duration }))),
                                        null == n)
                                    ) {
                                        (x?.(e), ev());
                                        return;
                                    }
                                    if (((eo.current = null), null != t)) {
                                        t.playbackRate = n.playbackRate;
                                        try {
                                            t.currentTime = n.localSeekSec;
                                        } catch {}
                                        n.resumePlayback && t.play().catch(() => {});
                                    }
                                    ((ed.current = null), et());
                                },
                                onError: function (e) {
                                    er.id !== w.id ? eS(er.startSec + (O.current?.currentTime ?? 0)) : E?.(e);
                                },
                                onPlay: function (e) {
                                    (B(!0), es(Z), A?.(e));
                                },
                                onPause: function (e) {
                                    (B(!1), ec(), I?.(e));
                                },
                                children: [T, (0, r.jsx)("source", { onError: h, src: er.url })],
                            }),
                            (0, r.jsx)("canvas", {
                                ref: q,
                                className: _.bQ,
                                style: { objectFit: J },
                                hidden: W,
                                "aria-hidden": !0,
                            }),
                        ],
                    }),
                    L &&
                        N.map((e) =>
                            (0, r.jsx)(
                                j,
                                {
                                    source: e,
                                    masterSec: Z,
                                    isPlaying: Y,
                                    playbackRate: K,
                                    isGridView: !0,
                                    onMediaElement: el,
                                },
                                e.id,
                            ),
                        ),
                ],
            }),
            en.length > 1 &&
                !R &&
                (0, r.jsxs)("div", {
                    className: _.c2,
                    "data-testid": "discord-web-multi-video-player-povs",
                    children: [
                        !L &&
                            en.map((e) =>
                                (0, r.jsx)(
                                    M,
                                    {
                                        source: e,
                                        label:
                                            e.id === w.id ? (e.label ?? y.intl.string(b.default["9tdsDk"])) : e.label,
                                        isActive: e.id === er.id,
                                        isOriginal: e.id === w.id,
                                        currentMasterTimeSec: Z,
                                        onSelect: ey,
                                    },
                                    e.id,
                                ),
                            ),
                        (0, r.jsx)(o.D, {
                            className: _.LI,
                            "aria-label": y.intl.string(b.default.lykjkX),
                            "aria-pressed": !1,
                            onClick: function (e) {
                                if ((e.stopPropagation(), L)) {
                                    (ea() && eu(!0), k(!1));
                                    let e = en.find((e) => e.id === em.current);
                                    ex(null != e && S(e, Z) ? e.id : w.id, Z);
                                    return;
                                }
                                ((em.current = er.id), k(!0), ei(Z, !0), ex(w.id, Z));
                            },
                            "data-testid": "discord-web-multi-video-player-grid-toggle",
                            children: (0, r.jsx)(d.d, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
        ],
    });
}

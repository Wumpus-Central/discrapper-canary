n.d(t, { A: () => N });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
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
function E(e, t, n) {
    return (
        !S(t, n) ||
        (null != e &&
            !(e.readyState < HTMLMediaElement.HAVE_FUTURE_DATA) &&
            !e.seeking &&
            0.35 >= Math.abs(e.currentTime - (n - t.startSec)))
    );
}
function y(e, t) {
    if (t < e.startSec) return e.startSec - t;
    let n = e.startSec + e.durationSec;
    return t >= n ? n - t : 0;
}
var A = n(185973),
    b = n(105292),
    C = n(243189);
let j = l.memo(function (e) {
    let t,
        { source: n, masterSec: i, isPlaying: u, playbackRate: s, isGridView: o, onMediaElement: d, children: E } = e,
        j = l.useRef(null),
        [I, _] = l.useState(!1),
        T = S(n, i),
        M = i - n.startSec,
        N = i < n.startSec,
        w = Math.ceil(y(n, i)),
        L = (0, h.rB)(w),
        R = n.owner?.name ?? n.label ?? b.intl.string(A.default["6XuC8e"]),
        { ref: k, width: P, height: O } = (0, c.Ay)();
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
    }, [T, M, u, s, I]),
        l.useEffect(() => (d?.(n.id, j.current), () => d?.(n.id, null)), [d, n.id]));
    let G = o && !T && 0 !== w;
    return (
        o && T
            ? (t = b.intl.formatToPlainString(A.default.zc1itm, { name: R }))
            : o && (t = b.intl.formatToPlainString(N ? A.default.dUPcpR : A.default.q8TlkE, { name: R, time: L })),
        (0, r.jsxs)("div", {
            className: C.Vs,
            role: o ? "group" : void 0,
            "aria-label": t,
            "data-testid": "discord-web-multi-video-player-grid-tile",
            children: [
                (0, r.jsxs)("div", {
                    ref: k,
                    className: a()(C.iH, { [C.om]: o }),
                    children: [
                        E ??
                            (0, r.jsx)(m.A, {
                                ref: j,
                                className: a()(C.cr, { [C.qb]: G }),
                                poster: (0, f.s)(n.poster, n, P, O),
                                preload: "auto",
                                playsInline: !0,
                                muted: !0,
                                crossOrigin: "anonymous",
                                disablePictureInPicture: !0,
                                src: n.url,
                                onLoadedMetadata: function () {
                                    _(!0);
                                },
                            }),
                        o &&
                            null != n.owner &&
                            (0, r.jsx)("div", {
                                className: C.cL,
                                children: (0, r.jsx)(g.eu, {
                                    src: n.owner.avatarUrl,
                                    size: (P ?? 0) > 300 ? p._3.SIZE_32 : p._3.SIZE_20,
                                    "aria-hidden": !0,
                                }),
                            }),
                    ],
                }),
                G &&
                    (0, r.jsxs)("div", {
                        className: C.rm,
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
    _ = n(599507);
let T = l.memo(function (e) {
    let { source: t, label: n, isActive: l, isOriginal: i, currentMasterTimeSec: u, onSelect: s } = e,
        d = t.owner?.name ?? n ?? b.intl.string(A.default["6XuC8e"]),
        m = S(t, u),
        { ref: x, width: E, height: C } = (0, c.Ay)(m, l, i);
    if (!m && !l && !i) {
        let e = (0, h.rB)(y(t, u));
        return (0, r.jsx)(I.u, {
            asset: (0, r.jsx)(v.Q, { size: "xs" }),
            assetSize: 16,
            body: e,
            position: "left",
            ariaHidden: !0,
            children: (0, r.jsx)("div", {
                className: _.RG,
                "aria-label": b.intl.formatToPlainString(A.default.JFaxs2, { name: d, time: e }),
                "data-testid": "discord-web-multi-video-player-pov-out-of-range",
                children: (0, r.jsx)(g.eu, { src: t.owner?.avatarUrl, size: p._3.SIZE_32, "aria-hidden": !0 }),
            }),
        });
    }
    return (0, r.jsxs)(o.D, {
        className: a()(_.uF, { [_._]: l }),
        "aria-label": l
            ? b.intl.formatToPlainString(A.default["RSMzC/"], { name: d })
            : b.intl.formatToPlainString(A.default["4AH1Vb"], { name: d }),
        "aria-current": l,
        onClick: function (e) {
            (e.stopPropagation(), s(t));
        },
        "data-testid": "discord-web-multi-video-player-pov",
        children: [
            (0, r.jsx)("div", {
                className: a()(_.U8, { [_.ED]: l }),
                children:
                    null != t.poster &&
                    (0, r.jsx)("img", {
                        ref: x,
                        className: _.a1,
                        src: (0, f.s)(t.poster, t, E, C),
                        alt: "",
                        "aria-hidden": !0,
                    }),
            }),
            null != t.owner &&
                (0, r.jsx)("div", {
                    className: _.UH,
                    children: (0, r.jsx)(g.eu, { src: t.owner.avatarUrl, size: p._3.SIZE_16, "aria-hidden": !0 }),
                }),
        ],
    });
});
var M = n(340710);
function N(e) {
    let {
            ref: t,
            src: n,
            poster: i,
            className: u,
            onSourceError: h,
            isScrubbing: g,
            onTimeUpdate: p,
            onEnded: v,
            onLoadedMetadata: x,
            onError: y,
            onPlay: C,
            onPause: I,
            children: _,
            original: N,
            subSources: w,
            isGridView: L,
            setIsGridView: R,
            suppressSourceSelection: k = !1,
            ...P
        } = e,
        O = l.useRef(null),
        { ref: G, width: V, height: D } = (0, c.Ay)(),
        U = l.useCallback(
            (e) => {
                ((O.current = e), (G.current = e));
            },
            [G],
        ),
        [H, z] = l.useState(N.durationSec ?? 0),
        [$, F] = l.useState(N.id),
        [Z, B] = l.useState(0),
        [X, K] = l.useState(!1),
        [Y, Q] = l.useState(1),
        {
            freezeCanvasRef: J,
            freezeObjectFit: q,
            isFreezeFrameHidden: W,
            captureFreezeFrame: ee,
            releaseFreezeFrame: et,
        } = (function (e) {
            let [t, n] = l.useState("hidden"),
                [r, i] = l.useState("contain"),
                a = l.useRef(null),
                u = l.useCallback(() => {
                    let t = e.current,
                        r = a.current;
                    if (null == t || null == r || 0 === t.videoWidth) return;
                    let l = r.getContext("2d");
                    if (null != l) {
                        ((r.width = t.videoWidth), (r.height = t.videoHeight));
                        try {
                            l.drawImage(t, 0, 0);
                        } catch {
                            return;
                        }
                        (i(window.getComputedStyle(t).objectFit), n("holding"));
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
                    function i() {
                        l || ((l = !0), n("hidden"));
                    }
                    let a = setTimeout(i, 1500 * (null != r));
                    if (null == r)
                        return () => {
                            ((l = !0), clearTimeout(a));
                        };
                    if ("function" == typeof r.requestVideoFrameCallback) {
                        let e = r.requestVideoFrameCallback(i);
                        return () => {
                            ((l = !0), clearTimeout(a), r.cancelVideoFrameCallback(e));
                        };
                    }
                    return (
                        r.addEventListener("seeked", i),
                        () => {
                            ((l = !0), clearTimeout(a), r.removeEventListener("seeked", i));
                        }
                    );
                }, [t, e]),
                {
                    freezeCanvasRef: a,
                    freezeObjectFit: r,
                    isFreezeFrameHidden: "hidden" === t,
                    captureFreezeFrame: u,
                    releaseFreezeFrame: s,
                }
            );
        })(O),
        en = l.useMemo(() => [{ ...N, startSec: 0, durationSec: H }, ...w], [N, w, H]),
        er = en.find((e) => e.id === $) ?? en[0],
        {
            registerFollowerElement: el,
            isGateRaised: ei,
            raiseSyncGate: ea,
            clearSyncGate: eu,
            handleDriverPlay: es,
            handleDriverPause: ec,
        } = (function (e) {
            let { elementRef: t, sources: n, activeSourceId: r, isGridView: i } = e,
                [a, u] = l.useState(null),
                s = l.useRef(null),
                c = l.useRef(new Map()),
                o = l.useRef(!1),
                d = l.useCallback((e, t) => {
                    null == t ? c.current.delete(e) : c.current.set(e, t);
                }, []),
                m = l.useCallback((e) => (e.id === r ? t.current : (c.current.get(e.id) ?? null)), [r, t]),
                f = l.useRef({ sources: n, isGridView: i, getSourceElement: m });
            l.useLayoutEffect(() => {
                f.current = { sources: n, isGridView: i, getSourceElement: m };
            });
            let h = l.useCallback(() => null != s.current, []),
                g = l.useCallback(
                    function (e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.current.isGridView,
                            r = t.current;
                        if (null == r || r.paused || !n) return;
                        let { sources: l, getSourceElement: i } = f.current;
                        l.every((t) => E(i(t), t, e)) ||
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
                    if (null == a) return;
                    let e = n.map(m).filter((e) => null != e);
                    function t() {
                        n.every((e) => E(m(e), e, a)) && p(!0);
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
                }, [a, n, m, p]),
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
        em = l.useRef(N.id),
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
        if (n.id === N.id) ((eh.current = null), ep());
        else if (!ef.current) {
            let e;
            ((eh.current = { sourceId: n.id, masterSec: t }),
                null == eg.current &&
                    null != (e = O.current) &&
                    (e.dispatchEvent(new Event("waiting")),
                    (e.preload = "metadata"),
                    e.load(),
                    (eg.current = setTimeout(() => {
                        ((ef.current = !0), eE.current.applyDeferredSwitch());
                    }, 5e3))));
            return;
        }
        let r = s()(t, 0, eE.current.masterDurationSec),
            l = O.current;
        if (n.id === eE.current.activeSource.id) {
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
            (eE.current = { ...eE.current, activeSource: n }),
            F(n.id),
            B(r));
    }
    function eS(e) {
        ex(N.id, e);
    }
    let eE = l.useRef({
        activeSource: er,
        masterDurationSec: H,
        isScrubbing: g,
        revertToOriginal: eS,
        applyDeferredSwitch: ev,
    });
    l.useLayoutEffect(() => {
        eE.current = {
            ...eE.current,
            activeSource: er,
            masterDurationSec: H,
            isScrubbing: g,
            revertToOriginal: eS,
            applyDeferredSwitch: ev,
        };
    });
    let ey = l.useRef(null);
    (l.useLayoutEffect(
        () => (
            (ey.current ??= (function (e) {
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
                                    var i, a;
                                    return (
                                        (i = l?.buffered),
                                        (a = e.getActiveStartSec()),
                                        {
                                            length: i?.length ?? 0,
                                            start: (e) => (i?.start(e) ?? 0) + a,
                                            end: (e) => (i?.end(e) ?? 0) + a,
                                        }
                                    );
                            }
                            if (null == l) return;
                            let u = Reflect.get(l, r);
                            return "function" == typeof u ? u.bind(l) : u;
                        },
                        set(t, r, l) {
                            if ("currentTime" === r) return (e.seekTo(l), !0);
                            let i = n();
                            return (null != i && Reflect.set(i, r, l), !0);
                        },
                        has(e, t) {
                            let r = n();
                            return null != r && Reflect.has(r, t);
                        },
                    },
                );
            })({
                getElement: () => O.current,
                getDurationSec: () => eE.current.masterDurationSec,
                getActiveStartSec: () => eE.current.activeSource.startSec,
                getCurrentTimeSec: () => {
                    let e = ed.current;
                    return null != e
                        ? e
                        : Math.max(0, eE.current.activeSource.startSec + (O.current?.currentTime ?? 0));
                },
                seekTo: (e) => {
                    let t = s()(e, 0, eE.current.masterDurationSec);
                    if ((B(t), S(eE.current.activeSource, t))) {
                        ed.current = null;
                        let e = O.current;
                        (null != e && (e.currentTime = t - eE.current.activeSource.startSec),
                            eE.current.isScrubbing || ea(t));
                        return;
                    }
                    ((ed.current = t), eE.current.isScrubbing || eE.current.revertToOriginal(t));
                },
            })),
            t(ey.current),
            () => {
                t(null);
            }
        ),
        [t, ea],
    ),
        l.useEffect(
            () => () => {
                null != eg.current && clearTimeout(eg.current);
            },
            [],
        ));
    let eA = l.useRef($);
    function eb(e) {
        e.id !== er.id && ex(e.id, Z);
    }
    function eC(e) {
        ei() || P.onCanPlay?.(e);
    }
    (l.useEffect(() => {
        eA.current !== $ && ((eA.current = $), O.current?.load());
    }, [$]),
        l.useEffect(() => {
            if (g) return;
            let e = ed.current;
            null == e || null != eo.current || S(eE.current.activeSource, e) || eE.current.revertToOriginal(e);
        }, [g]));
    let ej = !S(er, Z);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.D, {
                onClick: P.onClick ?? void 0,
                className: a()(M.dw, { [M.x2]: L }),
                children: [
                    (0, r.jsxs)(j, {
                        source: er,
                        masterSec: Z,
                        isPlaying: X,
                        playbackRate: Y,
                        isGridView: L,
                        children: [
                            (0, r.jsxs)(m.A, {
                                ...P,
                                ref: U,
                                className: a()(u, { [M._b]: ej, [M.l3]: L }),
                                poster: (0, f.s)(er.poster ?? i, er, V, D),
                                onCanPlay: eC,
                                onCanPlayThrough: eC,
                                onTimeUpdate: function (e) {
                                    let t = O.current;
                                    if (null != t && null == eo.current && null == ed.current) {
                                        Q(t.playbackRate);
                                        let e = Math.max(0, er.startSec + t.currentTime);
                                        (B(e), er.id !== N.id && e >= er.startSec + er.durationSec - 0.12 && eS(e));
                                    }
                                    p?.(e);
                                },
                                onEnded: function (e) {
                                    er.id !== N.id ? eS(er.startSec + er.durationSec) : v?.(e);
                                },
                                onLoadedMetadata: function (e) {
                                    let t = O.current,
                                        n = eo.current;
                                    if (
                                        ($ === N.id &&
                                            null != t &&
                                            ((ef.current = !0),
                                            Number.isFinite(t.duration) &&
                                                (z(t.duration),
                                                (eE.current = { ...eE.current, masterDurationSec: t.duration }))),
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
                                    er.id !== N.id ? eS(er.startSec + (O.current?.currentTime ?? 0)) : y?.(e);
                                },
                                onPlay: function (e) {
                                    (K(!0), es(Z), C?.(e));
                                },
                                onPause: function (e) {
                                    (K(!1), ec(), I?.(e));
                                },
                                children: [_, (0, r.jsx)("source", { onError: h, src: er.url })],
                            }),
                            (0, r.jsx)("canvas", {
                                ref: J,
                                className: M.bQ,
                                style: { objectFit: q },
                                hidden: W,
                                "aria-hidden": !0,
                            }),
                        ],
                    }),
                    L &&
                        w.map((e) =>
                            (0, r.jsx)(
                                j,
                                {
                                    source: e,
                                    masterSec: Z,
                                    isPlaying: X,
                                    playbackRate: Y,
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
                (0, r.jsxs)("div", {
                    className: M.c2,
                    "data-testid": "discord-web-multi-video-player-povs",
                    children: [
                        !L &&
                            en.map((e) =>
                                (0, r.jsx)(
                                    T,
                                    {
                                        source: e,
                                        label:
                                            e.id === N.id ? (e.label ?? b.intl.string(A.default["9tdsDk"])) : e.label,
                                        isActive: e.id === er.id,
                                        isOriginal: e.id === N.id,
                                        currentMasterTimeSec: Z,
                                        onSelect: eb,
                                    },
                                    e.id,
                                ),
                            ),
                        (0, r.jsx)(o.D, {
                            className: M.LI,
                            "aria-label": b.intl.string(A.default.lykjkX),
                            "aria-pressed": !1,
                            onClick: function (e) {
                                if ((e.stopPropagation(), L)) {
                                    (ei() && eu(!0), R(!1));
                                    let e = en.find((e) => e.id === em.current);
                                    ex(null != e && S(e, Z) ? e.id : N.id, Z);
                                    return;
                                }
                                ((em.current = er.id), R(!0), ea(Z, !0), ex(N.id, Z));
                            },
                            "data-testid": "discord-web-multi-video-player-grid-toggle",
                            children: (0, r.jsx)(d.d, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
        ],
    });
}

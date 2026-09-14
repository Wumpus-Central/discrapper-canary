n.d(t, { A: () => b });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(404144),
    u = n.n(s),
    o = n(607470),
    c = n(61491),
    d = n(683063),
    m = n(339350),
    f = n(939249),
    g = n(97808),
    h = n(778712),
    p = n(268378),
    x = n(375708),
    v = n(599507);
let S = l.memo(function (e) {
    let { source: t, label: n, isActive: l, isInRange: i, onSelect: s } = e,
        u = t.owner?.name ?? n ?? x.intl.string(p.default["6XuC8e"]);
    if (!i && !l) {
        let e = (0, c.rB)(t.startSec);
        return (0, r.jsx)(d.u, {
            asset: (0, r.jsx)(m.Q, { size: "xs" }),
            assetSize: 16,
            body: e,
            position: "left",
            ariaHidden: !0,
            children: (0, r.jsx)(f.D, {
                className: v.RG,
                "aria-label": x.intl.formatToPlainString(p.default.JFaxs2, { name: u, time: e }),
                "aria-disabled": !0,
                "data-testid": "discord-web-multi-video-player-pov-out-of-range",
                children: (0, r.jsx)(g.eu, { src: t.owner?.avatarUrl, size: h._3.SIZE_32, "aria-hidden": !0 }),
            }),
        });
    }
    return (0, r.jsxs)(f.D, {
        className: a()(v.uF, { [v._]: l }),
        "aria-label": l
            ? x.intl.formatToPlainString(p.default["RSMzC/"], { name: u })
            : x.intl.formatToPlainString(p.default["4AH1Vb"], { name: u }),
        "aria-current": l,
        onClick: () => s(t),
        "data-testid": "discord-web-multi-video-player-pov",
        children: [
            (0, r.jsx)("div", {
                className: a()(v.U8, { [v.ED]: l }),
                children:
                    null != t.poster &&
                    (0, r.jsx)("img", { className: v.a1, src: t.poster, alt: "", "aria-hidden": !0 }),
            }),
            null != t.owner &&
                (0, r.jsx)("div", {
                    className: v.UH,
                    children: (0, r.jsx)(g.eu, { src: t.owner.avatarUrl, size: h._3.SIZE_16, "aria-hidden": !0 }),
                }),
        ],
    });
});
function A(e, t) {
    return t >= e.startSec && t < e.startSec + e.durationSec;
}
var C = n(340710);
function b(e) {
    let {
            ref: t,
            src: n,
            poster: i,
            className: s,
            onSourceError: c,
            isScrubbing: d,
            onTimeUpdate: m,
            onEnded: f,
            onLoadedMetadata: g,
            onError: h,
            children: v,
            original: b,
            subSources: j,
            ...I
        } = e,
        y = l.useRef(null),
        [E, _] = l.useState(b.durationSec ?? 0),
        [T, M] = l.useState(b.id),
        [N, L] = l.useState(0),
        [R, w] = l.useState("hidden"),
        [k, P] = l.useState("contain"),
        O = l.useMemo(() => [{ ...b, startSec: 0, durationSec: E }, ...j], [b, j, E]),
        D = O.find((e) => e.id === T) ?? O[0],
        U = l.useRef(null),
        V = l.useRef(null),
        $ = l.useRef(null);
    function H(e, t) {
        let n = O.find((t) => t.id === e);
        if (null == n) return;
        let r = u()(t, 0, E),
            l = y.current;
        if (n.id === F.current.activeSource.id) {
            ((V.current = null), null != l && (l.currentTime = r - n.startSec));
            return;
        }
        (!(function () {
            let e = y.current,
                t = $.current;
            if (null == e || null == t || 0 === e.videoWidth) return;
            let n = t.getContext("2d");
            if (null != n) {
                ((t.width = e.videoWidth), (t.height = e.videoHeight));
                try {
                    n.drawImage(e, 0, 0);
                } catch {
                    return;
                }
                (P(window.getComputedStyle(e).objectFit), w("holding"));
            }
        })(),
            (U.current = {
                localSeekSec: u()(r - n.startSec, 0, n.durationSec),
                resumePlayback: null != l && !l.paused,
                playbackRate: l?.playbackRate ?? 1,
            }),
            (V.current = r),
            (F.current = { ...F.current, activeSource: n }),
            M(n.id),
            L(r));
    }
    function z(e) {
        H(b.id, e);
    }
    let F = l.useRef({ activeSource: D, masterDurationSec: E, isScrubbing: d, revertToOriginal: z });
    l.useLayoutEffect(() => {
        F.current = { ...F.current, activeSource: D, masterDurationSec: E, isScrubbing: d, revertToOriginal: z };
    });
    let G = l.useRef(null);
    l.useLayoutEffect(
        () => (
            (G.current ??= (function (e) {
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
                            let s = Reflect.get(l, r);
                            return "function" == typeof s ? s.bind(l) : s;
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
                getElement: () => y.current,
                getDurationSec: () => F.current.masterDurationSec,
                getActiveStartSec: () => F.current.activeSource.startSec,
                getCurrentTimeSec: () => {
                    let e = V.current;
                    return null != e ? e : F.current.activeSource.startSec + (y.current?.currentTime ?? 0);
                },
                seekTo: (e) => {
                    let t = u()(e, 0, F.current.masterDurationSec);
                    if ((L(t), A(F.current.activeSource, t))) {
                        V.current = null;
                        let e = y.current;
                        null != e && (e.currentTime = t - F.current.activeSource.startSec);
                        return;
                    }
                    ((V.current = t), F.current.isScrubbing || F.current.revertToOriginal(t));
                },
            })),
            t(G.current),
            () => {
                t(null);
            }
        ),
        [t],
    );
    let Z = l.useRef(T);
    function K(e) {
        e.id !== D.id && H(e.id, N);
    }
    (l.useEffect(() => {
        Z.current !== T && ((Z.current = T), y.current?.load());
    }, [T]),
        l.useEffect(() => {
            if ("releasing" !== R) return;
            let e = y.current;
            if (null == e) return void w("hidden");
            let t = !1;
            function n() {
                t || ((t = !0), w("hidden"));
            }
            let r = setTimeout(n, 1e3);
            if ("function" == typeof e.requestVideoFrameCallback) {
                let l = e.requestVideoFrameCallback(n);
                return () => {
                    ((t = !0), clearTimeout(r), e.cancelVideoFrameCallback(l));
                };
            }
            return (
                e.addEventListener("seeked", n),
                () => {
                    ((t = !0), clearTimeout(r), e.removeEventListener("seeked", n));
                }
            );
        }, [R]),
        l.useEffect(() => {
            if (d) return;
            let e = V.current;
            null == e || null != U.current || A(F.current.activeSource, e) || F.current.revertToOriginal(e);
        }, [d]));
    let Y = !A(D, N);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.A, {
                ...I,
                ref: y,
                className: a()(s, { [C._b]: Y }),
                poster: D.poster ?? i,
                onTimeUpdate: function (e) {
                    let t = y.current;
                    if (null != t && null == U.current && null == V.current) {
                        let e = D.startSec + t.currentTime;
                        (L(e), D.id !== b.id && e >= D.startSec + D.durationSec - 0.12 && z(e));
                    }
                    m?.(e);
                },
                onEnded: function (e) {
                    D.id !== b.id ? z(D.startSec + D.durationSec) : f?.(e);
                },
                onLoadedMetadata: function (e) {
                    let t = y.current,
                        n = U.current;
                    if (null == n) {
                        (null != t &&
                            Number.isFinite(t.duration) &&
                            (_(t.duration), (F.current = { ...F.current, masterDurationSec: t.duration })),
                            g?.(e));
                        return;
                    }
                    if (((U.current = null), null != t)) {
                        t.playbackRate = n.playbackRate;
                        try {
                            t.currentTime = n.localSeekSec;
                        } catch {}
                        n.resumePlayback && t.play().catch(() => {});
                    }
                    ((V.current = null), w((e) => ("holding" === e ? "releasing" : e)));
                },
                onError: function (e) {
                    D.id !== b.id ? z(D.startSec + (y.current?.currentTime ?? 0)) : h?.(e);
                },
                children: [v, (0, r.jsx)("source", { onError: c, src: D.url })],
            }),
            (0, r.jsx)("canvas", {
                ref: $,
                className: C.bQ,
                style: { objectFit: k },
                hidden: "hidden" === R,
                "aria-hidden": !0,
            }),
            O.length > 1 &&
                (0, r.jsx)("div", {
                    className: C.c2,
                    "data-testid": "discord-web-multi-video-player-povs",
                    children: O.map((e) =>
                        (0, r.jsx)(
                            S,
                            {
                                source: e,
                                label: e.id === b.id ? (e.label ?? x.intl.string(p.default["9tdsDk"])) : e.label,
                                isActive: e.id === D.id,
                                isInRange: A(e, N),
                                onSelect: K,
                            },
                            e.id,
                        ),
                    ),
                }),
        ],
    });
}

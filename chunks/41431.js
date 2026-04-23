"use strict";
n.d(t, { A: () => R });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(834730),
    u = n(113494),
    c = n(782134),
    d = n(939249),
    _ = n(775602),
    f = n(57625),
    p = n(713021),
    h = n(118019),
    E = n(922667),
    m = n(20504),
    g = n(203982),
    A = n(927813),
    I = n(824744),
    T = n(404325),
    S = n(518950),
    y = n(652215),
    N = n(985018),
    v = n(132246);
let C = i.lazy(() => n.e("94436").then(n.bind(n, 660207)));
function O(e) {
    let { played: t, duration: n, currentTime: i } = e,
        s = null == n ? "--:--" : t ? (0, E.rB)(Math.ceil(n - i)) : (0, E.rB)(Math.ceil(n));
    return (0, r.jsx)(l.E, { variant: "text-sm/normal", className: v.p0, tabularNumbers: !0, children: s });
}
let R = i.memo(function (e) {
    let t,
        {
            src: n,
            volume: s = 1,
            onVolumeChange: E,
            onMute: R,
            waveform: b,
            durationSecs: D,
            onVolumeShow: L,
            onVolumeHide: w,
            onPlay: M,
            onPause: P,
            onError: x,
            playbackCacheKey: k,
        } = e,
        U = i.useRef(null),
        G = i.useMemo(() => (null != k ? p.Ay.getPlaybackPosition(k) : 0), [k]),
        F = (0, o.bG)([p.Ay], () => p.Ay.getPlaybackRate(p.k0.VOICE_MESSAGE)),
        [V, B] = i.useState(G > 0),
        [H, j] = i.useState(G),
        [Y, W] = i.useState(D),
        [K, $] = i.useState(!1),
        [z, q] = i.useState(!1),
        [X, Q] = i.useState(!1),
        [Z, J] = i.useState(!1),
        [ee, et] = i.useState("none"),
        [en, er] = i.useState(() => ("function" == typeof s ? s() : s)),
        ei = i.useRef(void 0),
        es = i.useCallback(() => {
            q((e) => !e), J(!0);
        }, []),
        ea = i.useCallback(() => {
            et("metadata");
        }, []),
        eo = i.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || W(t);
        }, []),
        el = i.useCallback(
            (e) => {
                null != D && null != k && (0, f.d)(k, e, D);
            },
            [k, D],
        ),
        eu = i.useCallback(() => {
            q(!1),
                null == ei.current &&
                    (ei.current = setTimeout(() => {
                        B(!1), J(!1), (ei.current = void 0);
                    }, 500));
        }, []),
        ec = i.useCallback(() => {
            X || (el(0), eu());
        }, [eu, X, el]),
        ed = i.useCallback((e) => {
            let t = U.current;
            null != t && (j(e), (t.currentTime = e), B(!0));
        }, []),
        e_ = i.useCallback(() => {
            let e = U.current;
            if (null == e) return;
            let t = e.error;
            x?.(t);
        }, [x]),
        ef = i.useCallback(
            (e) => {
                let t = (0, I.w)(e, 1);
                $(0 === t), er(t), E?.(t);
            },
            [E],
        ),
        ep = i.useCallback(() => {
            $(!K), R?.(!K);
        }, [K, R]),
        eh = i.useCallback(() => {
            Q(!0);
        }, []),
        eE = i.useCallback(() => {
            Q(!1), H === Y && eu(), el(H);
        }, [H, Y, eu, el]),
        em = i.useCallback(
            (e) => {
                let t = U.current;
                null == Y || null == t || (ed(e * Y), clearTimeout(ei.current), (ei.current = void 0));
            },
            [Y, ed],
        );
    i.useEffect(() => {
        !V && z && B(!0);
    }, [z, V]);
    let eg = i.useRef(null),
        eA = { played: Z, currentTime: H, onPause: P, onPlay: M },
        eI = i.useRef(eA);
    i.useEffect(() => {
        eI.current = eA;
    }),
        i.useEffect(() => {
            G > 0 && ed(G);
        }, [G, ed]),
        i.useEffect(() => {
            let e;
            return (
                z &&
                    !X &&
                    (e = setInterval(() => {
                        el(U.current?.currentTime ?? 0);
                    }, A.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [z, X, el]),
        i.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: r } = eI.current;
            if (e || z)
                if (z) (eg.current = performance.now()), r?.(!1, t, (U.current?.duration ?? 0) * A.A.Millis.SECOND);
                else {
                    let e = performance.now(),
                        r = eg.current;
                    n?.(t, null != r ? (e - r) / 1e3 : 0), el(t), (eg.current = null);
                }
        }, [z, n, Y, el]),
        i.useEffect(() => {
            let e;
            return (
                !(function t() {
                    let n = U.current;
                    null == n || (j(n.currentTime), z && (e = requestAnimationFrame(t)));
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [U, z, j]),
        i.useEffect(() => {
            if (z)
                return (
                    g._.dispatch(y.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
                    g._.subscribe(y.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        g._.unsubscribe(y.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                n !== t && q(!1);
            }
        }, [n, z, q]);
    let eT = z ? u.E : c.u,
        eS = z ? N.intl.string(N.t["3XohGn"]) : N.intl.string(N.t.AlHqHT),
        ey = N.intl.formatToPlainString(N.t.LgCPMt, { playbackRate: F }),
        eN = `${F.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, r.jsx)(i.Suspense, {
                  children: (0, r.jsx)(C, {
                      ref: U,
                      className: v.Zn,
                      src: n,
                      preload: ee,
                      playing: z && !X,
                      onEnded: ec,
                      onLoadedMetadata: eo,
                      onError: e_,
                      muted: K,
                      volume: en,
                      playbackRate: F,
                  }),
              })
            : (0, r.jsx)(h.A, {
                  ref: U,
                  className: v.Zn,
                  controls: !1,
                  preload: ee,
                  onEnded: ec,
                  onLoadedMetadata: eo,
                  onError: e_,
                  muted: K,
                  volume: en,
                  playbackRate: F,
                  playing: z && !X,
                  children: (0, r.jsx)("source", { src: n }),
              });
    let ev = (0, o.bG)([_.A], () => _.A.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: a()(v.kL, { [v.he]: z }),
        onMouseEnter: ea,
        role: "region",
        "aria-label": N.intl.string(N.t.c8U6xd),
        children: [
            (0, r.jsx)("div", {
                className: v.Kl,
                children: (0, r.jsx)("div", { className: a()(v.fq, { [v.VN]: ev }) }),
            }),
            (0, r.jsx)(d.D, {
                className: v.k0,
                onClick: es,
                "aria-label": eS,
                children: (0, r.jsx)(eT, { className: v.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, r.jsx)(T.A, {
                className: v.ou,
                waveform: b,
                currentTime: H,
                duration: Y ?? 1,
                playing: z,
                played: V,
                onDrag: em,
                onDragStart: eh,
                onDragEnd: eE,
            }),
            (0, r.jsx)(O, { played: V, currentTime: H, duration: Y }),
            (0, r.jsx)(d.D, {
                className: v.LJ,
                onClick: () => {
                    let e, t;
                    return (
                        (e = (S.CA.indexOf(F) + 1) % S.CA.length), (t = S.CA[e]), void (0, f.Y)(t, p.k0.VOICE_MESSAGE)
                    );
                },
                "aria-label": ey,
                children: (0, r.jsx)(l.E, { variant: "text-xs/semibold", className: v.Sn, children: eN }),
            }),
            (0, r.jsx)(m.A, {
                className: v.bk,
                iconClassName: v._j,
                iconColor: "currentColor",
                sliderWrapperClassName: v.MQ,
                muted: K,
                value: (0, I.M)(en, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: ef,
                onToggleMute: ep,
                onVolumeShow: L,
                onVolumeHide: w,
            }),
            t,
        ],
    });
});

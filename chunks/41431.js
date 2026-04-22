"use strict";
n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(834730),
    c = n(113494),
    u = n(782134),
    d = n(939249),
    h = n(775602),
    m = n(57625),
    p = n(713021),
    f = n(118019),
    g = n(922667),
    _ = n(20504),
    x = n(203982),
    A = n(927813),
    C = n(824744),
    E = n(404325),
    I = n(518950),
    v = n(652215),
    y = n(985018),
    S = n(132246);
let b = l.lazy(() => n.e("94436").then(n.bind(n, 660207)));
function N(e) {
    let { played: t, duration: n, currentTime: l } = e,
        s = null == n ? "--:--" : t ? (0, g.rB)(Math.ceil(n - l)) : (0, g.rB)(Math.ceil(n));
    return (0, i.jsx)(o.E, { variant: "text-sm/normal", className: S.p0, tabularNumbers: !0, children: s });
}
let T = l.memo(function (e) {
    let t,
        {
            src: n,
            volume: s = 1,
            onVolumeChange: g,
            onMute: T,
            waveform: j,
            durationSecs: R,
            onVolumeShow: w,
            onVolumeHide: L,
            onPlay: M,
            onPause: k,
            onError: O,
            playbackCacheKey: P,
        } = e,
        D = l.useRef(null),
        U = l.useMemo(() => (null != P ? p.Ay.getPlaybackPosition(P) : 0), [P]),
        V = (0, a.bG)([p.Ay], () => p.Ay.getPlaybackRate(p.k0.VOICE_MESSAGE)),
        [G, F] = l.useState(U > 0),
        [B, H] = l.useState(U),
        [W, K] = l.useState(R),
        [z, Z] = l.useState(!1),
        [q, Y] = l.useState(!1),
        [J, $] = l.useState(!1),
        [X, Q] = l.useState(!1),
        [ee, et] = l.useState("none"),
        [en, ei] = l.useState(() => ("function" == typeof s ? s() : s)),
        el = l.useRef(void 0),
        es = l.useCallback(() => {
            Y((e) => !e), Q(!0);
        }, []),
        er = l.useCallback(() => {
            et("metadata");
        }, []),
        ea = l.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || K(t);
        }, []),
        eo = l.useCallback(
            (e) => {
                null != R && null != P && (0, m.d)(P, e, R);
            },
            [P, R],
        ),
        ec = l.useCallback(() => {
            Y(!1),
                null == el.current &&
                    (el.current = setTimeout(() => {
                        F(!1), Q(!1), (el.current = void 0);
                    }, 500));
        }, []),
        eu = l.useCallback(() => {
            J || (eo(0), ec());
        }, [ec, J, eo]),
        ed = l.useCallback((e) => {
            let t = D.current;
            null != t && (H(e), (t.currentTime = e), F(!0));
        }, []),
        eh = l.useCallback(() => {
            let e = D.current;
            if (null == e) return;
            let t = e.error;
            O?.(t);
        }, [O]),
        em = l.useCallback(
            (e) => {
                let t = (0, C.w)(e, 1);
                Z(0 === t), ei(t), g?.(t);
            },
            [g],
        ),
        ep = l.useCallback(() => {
            Z(!z), T?.(!z);
        }, [z, T]),
        ef = l.useCallback(() => {
            $(!0);
        }, []),
        eg = l.useCallback(() => {
            $(!1), B === W && ec(), eo(B);
        }, [B, W, ec, eo]),
        e_ = l.useCallback(
            (e) => {
                let t = D.current;
                null == W || null == t || (ed(e * W), clearTimeout(el.current), (el.current = void 0));
            },
            [W, ed],
        );
    l.useEffect(() => {
        !G && q && F(!0);
    }, [q, G]);
    let ex = l.useRef(null),
        eA = { played: X, currentTime: B, onPause: k, onPlay: M },
        eC = l.useRef(eA);
    l.useEffect(() => {
        eC.current = eA;
    }),
        l.useEffect(() => {
            U > 0 && ed(U);
        }, [U, ed]),
        l.useEffect(() => {
            let e;
            return (
                q &&
                    !J &&
                    (e = setInterval(() => {
                        eo(D.current?.currentTime ?? 0);
                    }, A.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [q, J, eo]),
        l.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: i } = eC.current;
            if (e || q)
                if (q) (ex.current = performance.now()), i?.(!1, t, (D.current?.duration ?? 0) * A.A.Millis.SECOND);
                else {
                    let e = performance.now(),
                        i = ex.current;
                    n?.(t, null != i ? (e - i) / 1e3 : 0), eo(t), (ex.current = null);
                }
        }, [q, n, W, eo]),
        l.useEffect(() => {
            let e;
            return (
                !(function t() {
                    let n = D.current;
                    null == n || (H(n.currentTime), q && (e = requestAnimationFrame(t)));
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [D, q, H]),
        l.useEffect(() => {
            if (q)
                return (
                    x._.dispatch(v.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
                    x._.subscribe(v.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        x._.unsubscribe(v.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                n !== t && Y(!1);
            }
        }, [n, q, Y]);
    let eE = q ? c.E : u.u,
        eI = q ? y.intl.string(y.t.ZcgDJX) : y.intl.string(y.t.RscU7I),
        ev = y.intl.formatToPlainString(y.t.LgCPMt, { playbackRate: V }),
        ey = `${V.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, i.jsx)(l.Suspense, {
                  children: (0, i.jsx)(b, {
                      ref: D,
                      className: S.Zn,
                      src: n,
                      preload: ee,
                      playing: q && !J,
                      onEnded: eu,
                      onLoadedMetadata: ea,
                      onError: eh,
                      muted: z,
                      volume: en,
                      playbackRate: V,
                  }),
              })
            : (0, i.jsx)(f.A, {
                  ref: D,
                  className: S.Zn,
                  controls: !1,
                  preload: ee,
                  onEnded: eu,
                  onLoadedMetadata: ea,
                  onError: eh,
                  muted: z,
                  volume: en,
                  playbackRate: V,
                  playing: q && !J,
                  children: (0, i.jsx)("source", { src: n }),
              });
    let eS = (0, a.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: r()(S.kL, { [S.he]: q }),
        onMouseEnter: er,
        children: [
            (0, i.jsx)("div", {
                className: S.Kl,
                children: (0, i.jsx)("div", { className: r()(S.fq, { [S.VN]: eS }) }),
            }),
            (0, i.jsx)(d.D, {
                className: S.k0,
                onClick: es,
                "aria-label": eI,
                children: (0, i.jsx)(eE, { className: S.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, i.jsx)(E.A, {
                className: S.ou,
                waveform: j,
                currentTime: B,
                duration: W ?? 1,
                playing: q,
                played: G,
                onDrag: e_,
                onDragStart: ef,
                onDragEnd: eg,
            }),
            (0, i.jsx)(N, { played: G, currentTime: B, duration: W }),
            (0, i.jsx)(d.D, {
                className: S.LJ,
                onClick: () => {
                    let e, t;
                    return (
                        (e = (I.CA.indexOf(V) + 1) % I.CA.length), (t = I.CA[e]), void (0, m.Y)(t, p.k0.VOICE_MESSAGE)
                    );
                },
                "aria-label": ev,
                children: (0, i.jsx)(o.E, { variant: "text-xs/semibold", className: S.Sn, children: ey }),
            }),
            (0, i.jsx)(_.A, {
                className: S.bk,
                iconClassName: S._j,
                iconColor: "currentColor",
                sliderWrapperClassName: S.MQ,
                muted: z,
                value: (0, C.M)(en, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: em,
                onToggleMute: ep,
                onVolumeShow: w,
                onVolumeHide: L,
            }),
            t,
        ],
    });
});

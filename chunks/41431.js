"use strict";
n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(775602),
    c = n(57625),
    d = n(713021),
    _ = n(118019),
    f = n(922667),
    h = n(20504),
    p = n(203982),
    g = n(927813),
    E = n(824744),
    A = n(404325),
    I = n(518950),
    T = n(652215),
    y = n(985018),
    S = n(97051);
let v = i.lazy(() => n.e("94436").then(n.bind(n, 660207)));
function C(e) {
    let t = (I.CA.indexOf(e) + 1) % I.CA.length,
        n = I.CA[t];
    (0, c.Y)(n, d.k0.VOICE_MESSAGE);
}
function b(e) {
    let { played: t, duration: n, currentTime: i } = e,
        a = null == n ? "--:--" : t ? (0, f.rB)(Math.ceil(n - i)) : (0, f.rB)(Math.ceil(n));
    return (0, r.jsx)(l.Text, { variant: "text-sm/normal", className: S.p0, tabularNumbers: !0, children: a });
}
function N(e, t, n) {
    i.useEffect(() => {
        let r;
        function i() {
            let a = e.current;
            null == a || (n(a.currentTime), t && (r = requestAnimationFrame(i)));
        }
        return (
            i(),
            () => {
                null != r && cancelAnimationFrame(r);
            }
        );
    }, [e, t, n]);
}
function R(e, t, n) {
    i.useEffect(() => {
        if (t)
            return (
                p._.dispatch(T.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: e }),
                p._.subscribe(T.jej.VOICE_MESSAGE_PLAYBACK_STARTED, r),
                () => {
                    p._.unsubscribe(T.jej.VOICE_MESSAGE_PLAYBACK_STARTED, r);
                }
            );
        function r(t) {
            let { src: r } = t;
            e !== r && n(!1);
        }
    }, [e, t, n]);
}
let O = i.memo(function (e) {
    let t,
        {
            src: n,
            volume: a = 1,
            onVolumeChange: f,
            onMute: p,
            waveform: I,
            durationSecs: T,
            onVolumeShow: O,
            onVolumeHide: D,
            onPlay: L,
            onPause: w,
            onError: x,
            playbackCacheKey: P,
        } = e,
        M = i.useRef(null),
        k = i.useMemo(() => (null != P ? d.Ay.getPlaybackPosition(P) : 0), [P]),
        U = (0, o.bG)([d.Ay], () => d.Ay.getPlaybackRate(d.k0.VOICE_MESSAGE)),
        [G, F] = i.useState(k > 0),
        [V, B] = i.useState(k),
        [j, H] = i.useState(T),
        [Y, W] = i.useState(!1),
        [K, $] = i.useState(!1),
        [z, q] = i.useState(!1),
        [X, Z] = i.useState(!1),
        [Q, J] = i.useState("none"),
        [ee, et] = i.useState(() => ("function" == typeof a ? a() : a)),
        en = i.useRef(void 0),
        er = i.useCallback(() => {
            $((e) => !e), Z(!0);
        }, []),
        ei = i.useCallback(() => {
            J("metadata");
        }, []),
        ea = i.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || H(t);
        }, []),
        es = i.useCallback(
            (e) => {
                null != T && null != P && (0, c.d)(P, e, T);
            },
            [P, T],
        ),
        eo = i.useCallback(() => {
            $(!1),
                null == en.current &&
                    (en.current = setTimeout(() => {
                        F(!1), Z(!1), (en.current = void 0);
                    }, 500));
        }, []),
        el = i.useCallback(() => {
            z || (es(0), eo());
        }, [eo, z, es]),
        eu = i.useCallback((e) => {
            let t = M.current;
            null != t && (B(e), (t.currentTime = e), F(!0));
        }, []),
        ec = i.useCallback(() => {
            let e = M.current;
            if (null == e) return;
            let t = e.error;
            x?.(t);
        }, [x]),
        ed = i.useCallback(
            (e) => {
                let t = (0, E.w)(e, 1);
                W(0 === t), et(t), f?.(t);
            },
            [f],
        ),
        e_ = i.useCallback(() => {
            W(!Y), p?.(!Y);
        }, [Y, p]),
        ef = i.useCallback(() => {
            q(!0);
        }, []),
        eh = i.useCallback(() => {
            q(!1), V === j && eo(), es(V);
        }, [V, j, eo, es]),
        ep = i.useCallback(
            (e) => {
                let t = M.current;
                null == j || null == t || (eu(e * j), clearTimeout(en.current), (en.current = void 0));
            },
            [j, eu],
        );
    i.useEffect(() => {
        !G && K && F(!0);
    }, [K, G]);
    let em = i.useRef(null),
        eg = { played: X, currentTime: V, onPause: w, onPlay: L },
        eE = i.useRef(eg);
    i.useEffect(() => {
        eE.current = eg;
    }),
        i.useEffect(() => {
            k > 0 && eu(k);
        }, [k, eu]),
        i.useEffect(() => {
            let e;
            return (
                K &&
                    !z &&
                    (e = setInterval(() => {
                        es(M.current?.currentTime ?? 0);
                    }, g.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [K, z, es]),
        i.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: r } = eE.current;
            if (e || K)
                if (K) (em.current = performance.now()), r?.(!1, t, (M.current?.duration ?? 0) * g.A.Millis.SECOND);
                else {
                    let e = performance.now(),
                        r = em.current,
                        i = null != r ? (e - r) / 1e3 : 0;
                    n?.(t, i), es(t), (em.current = null);
                }
        }, [K, n, j, es]),
        N(M, K, B),
        R(n, K, $);
    let eA = K ? l.E$n : l.udU,
        eI = K ? y.intl.string(y.t.ZcgDJX) : y.intl.string(y.t.RscU7I),
        eT = y.intl.formatToPlainString(y.t.LgCPMt, { playbackRate: U }),
        ey = `${U.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, r.jsx)(i.Suspense, {
                  children: (0, r.jsx)(v, {
                      ref: M,
                      className: S.Zn,
                      src: n,
                      preload: Q,
                      playing: K && !z,
                      onEnded: el,
                      onLoadedMetadata: ea,
                      onError: ec,
                      muted: Y,
                      volume: ee,
                      playbackRate: U,
                  }),
              })
            : (0, r.jsx)(_.A, {
                  ref: M,
                  className: S.Zn,
                  controls: !1,
                  preload: Q,
                  onEnded: el,
                  onLoadedMetadata: ea,
                  onError: ec,
                  muted: Y,
                  volume: ee,
                  playbackRate: U,
                  playing: K && !z,
                  children: (0, r.jsx)("source", { src: n }),
              });
    let eS = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: s()(S.kL, { [S.he]: K }),
        onMouseEnter: ei,
        children: [
            (0, r.jsx)("div", {
                className: S.Kl,
                children: (0, r.jsx)("div", { className: s()(S.fq, { [S.VN]: eS }) }),
            }),
            (0, r.jsx)(l.DUT, {
                className: S.k0,
                onClick: er,
                "aria-label": eI,
                children: (0, r.jsx)(eA, { className: S.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, r.jsx)(A.A, {
                className: S.ou,
                waveform: I,
                currentTime: V,
                duration: j ?? 1,
                playing: K,
                played: G,
                onDrag: ep,
                onDragStart: ef,
                onDragEnd: eh,
            }),
            (0, r.jsx)(b, { played: G, currentTime: V, duration: j }),
            (0, r.jsx)(l.DUT, {
                className: S.LJ,
                onClick: () => C(U),
                "aria-label": eT,
                children: (0, r.jsx)(l.Text, { variant: "text-xs/semibold", className: S.Sn, children: ey }),
            }),
            (0, r.jsx)(h.A, {
                className: S.bk,
                iconClassName: S._j,
                iconColor: "currentColor",
                sliderWrapperClassName: S.MQ,
                muted: Y,
                value: (0, E.M)(ee, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: ed,
                onToggleMute: e_,
                onVolumeShow: O,
                onVolumeHide: D,
            }),
            t,
        ],
    });
});

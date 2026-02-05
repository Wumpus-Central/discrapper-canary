"use strict";
n.d(t, { A: () => R });
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
    p = n(20504),
    h = n(203982),
    m = n(927813),
    g = n(824744),
    E = n(404325),
    A = n(518950),
    I = n(652215),
    T = n(985018),
    y = n(97051);
let S = i.lazy(() => n.e("94436").then(n.bind(n, 660207)));
function v(e) {
    let t = (A.CA.indexOf(e) + 1) % A.CA.length,
        n = A.CA[t];
    (0, c.Y)(n, d.k0.VOICE_MESSAGE);
}
function C(e) {
    let { played: t, duration: n, currentTime: i } = e,
        a = null == n ? "--:--" : t ? (0, f.rB)(Math.ceil(n - i)) : (0, f.rB)(Math.ceil(n));
    return (0, r.jsx)(l.Text, { variant: "text-sm/normal", className: y.p0, tabularNumbers: !0, children: a });
}
function b(e, t, n) {
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
function N(e, t, n) {
    i.useEffect(() => {
        if (t)
            return (
                h._.dispatch(I.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: e }),
                h._.subscribe(I.jej.VOICE_MESSAGE_PLAYBACK_STARTED, r),
                () => {
                    h._.unsubscribe(I.jej.VOICE_MESSAGE_PLAYBACK_STARTED, r);
                }
            );
        function r(t) {
            let { src: r } = t;
            e !== r && n(!1);
        }
    }, [e, t, n]);
}
let R = i.memo(function (e) {
    let t,
        {
            src: n,
            volume: a = 1,
            onVolumeChange: f,
            onMute: h,
            waveform: A,
            durationSecs: I,
            onVolumeShow: R,
            onVolumeHide: O,
            onPlay: D,
            onPause: L,
            onError: w,
            playbackCacheKey: x,
        } = e,
        P = i.useRef(null),
        M = i.useMemo(() => (null != x ? d.Ay.getPlaybackPosition(x) : 0), [x]),
        k = (0, o.bG)([d.Ay], () => d.Ay.getPlaybackRate(d.k0.VOICE_MESSAGE)),
        [U, G] = i.useState(M > 0),
        [V, F] = i.useState(M),
        [B, j] = i.useState(I),
        [H, Y] = i.useState(!1),
        [W, K] = i.useState(!1),
        [z, $] = i.useState(!1),
        [q, Z] = i.useState(!1),
        [Q, X] = i.useState("none"),
        [J, ee] = i.useState(() => ("function" == typeof a ? a() : a)),
        et = i.useRef(void 0),
        en = i.useCallback(() => {
            K((e) => !e), Z(!0);
        }, []),
        er = i.useCallback(() => {
            X("metadata");
        }, []),
        ei = i.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || j(t);
        }, []),
        ea = i.useCallback(
            (e) => {
                null != I && null != x && (0, c.d)(x, e, I);
            },
            [x, I],
        ),
        es = i.useCallback(() => {
            K(!1),
                null == et.current &&
                    (et.current = setTimeout(() => {
                        G(!1), Z(!1), (et.current = void 0);
                    }, 500));
        }, []),
        eo = i.useCallback(() => {
            z || (ea(0), es());
        }, [es, z, ea]),
        el = i.useCallback((e) => {
            let t = P.current;
            null != t && (F(e), (t.currentTime = e), G(!0));
        }, []),
        eu = i.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = e.error;
            w?.(t);
        }, [w]),
        ec = i.useCallback(
            (e) => {
                let t = (0, g.w)(e, 1);
                Y(0 === t), ee(t), f?.(t);
            },
            [f],
        ),
        ed = i.useCallback(() => {
            Y(!H), h?.(!H);
        }, [H, h]),
        e_ = i.useCallback(() => {
            $(!0);
        }, []),
        ef = i.useCallback(() => {
            $(!1), V === B && es(), ea(V);
        }, [V, B, es, ea]),
        ep = i.useCallback(
            (e) => {
                let t = P.current;
                null == B || null == t || (el(e * B), clearTimeout(et.current), (et.current = void 0));
            },
            [B, el],
        );
    i.useEffect(() => {
        !U && W && G(!0);
    }, [W, U]);
    let eh = i.useRef(null),
        em = { played: q, currentTime: V, onPause: L, onPlay: D },
        eg = i.useRef(em);
    i.useEffect(() => {
        eg.current = em;
    }),
        i.useEffect(() => {
            M > 0 && el(M);
        }, [M, el]),
        i.useEffect(() => {
            let e;
            return (
                W &&
                    !z &&
                    (e = setInterval(() => {
                        ea(P.current?.currentTime ?? 0);
                    }, m.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [W, z, ea]),
        i.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: r } = eg.current;
            if (e || W)
                if (W) (eh.current = performance.now()), r?.(!1, t, (P.current?.duration ?? 0) * m.A.Millis.SECOND);
                else {
                    let e = performance.now(),
                        r = eh.current,
                        i = null != r ? (e - r) / 1e3 : 0;
                    n?.(t, i), ea(t), (eh.current = null);
                }
        }, [W, n, B, ea]),
        b(P, W, F),
        N(n, W, K);
    let eE = W ? l.E$n : l.udU,
        eA = W ? T.intl.string(T.t.ZcgDJX) : T.intl.string(T.t.RscU7I),
        eI = T.intl.formatToPlainString(T.t.LgCPMt, { playbackRate: k }),
        eT = `${k.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, r.jsx)(i.Suspense, {
                  children: (0, r.jsx)(S, {
                      ref: P,
                      className: y.Zn,
                      src: n,
                      preload: Q,
                      playing: W && !z,
                      onEnded: eo,
                      onLoadedMetadata: ei,
                      onError: eu,
                      muted: H,
                      volume: J,
                      playbackRate: k,
                  }),
              })
            : (0, r.jsx)(_.A, {
                  ref: P,
                  className: y.Zn,
                  controls: !1,
                  preload: Q,
                  onEnded: eo,
                  onLoadedMetadata: ei,
                  onError: eu,
                  muted: H,
                  volume: J,
                  playbackRate: k,
                  playing: W && !z,
                  children: (0, r.jsx)("source", { src: n }),
              });
    let ey = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: s()(y.kL, { [y.he]: W }),
        onMouseEnter: er,
        children: [
            (0, r.jsx)("div", {
                className: y.Kl,
                children: (0, r.jsx)("div", { className: s()(y.fq, { [y.VN]: ey }) }),
            }),
            (0, r.jsx)(l.DUT, {
                className: y.k0,
                onClick: en,
                "aria-label": eA,
                children: (0, r.jsx)(eE, { className: y.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, r.jsx)(E.A, {
                className: y.ou,
                waveform: A,
                currentTime: V,
                duration: B ?? 1,
                playing: W,
                played: U,
                onDrag: ep,
                onDragStart: e_,
                onDragEnd: ef,
            }),
            (0, r.jsx)(C, { played: U, currentTime: V, duration: B }),
            (0, r.jsx)(l.DUT, {
                className: y.LJ,
                onClick: () => v(k),
                "aria-label": eI,
                children: (0, r.jsx)(l.Text, { variant: "text-xs/semibold", className: y.Sn, children: eT }),
            }),
            (0, r.jsx)(p.A, {
                className: y.bk,
                iconClassName: y._j,
                iconColor: "currentColor",
                sliderWrapperClassName: y.MQ,
                muted: H,
                value: (0, g.M)(J, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: ec,
                onToggleMute: ed,
                onVolumeShow: R,
                onVolumeHide: O,
            }),
            t,
        ],
    });
});

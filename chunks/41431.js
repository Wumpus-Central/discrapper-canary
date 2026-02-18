"use strict";
n.d(t, { A: () => R });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(824744),
    g = n(404325),
    A = n(518950),
    I = n(652215),
    T = n(985018),
    S = n(97051);
let y = i.lazy(() => n.e("94436").then(n.bind(n, 660207)));
function v(e) {
    let t = (A.CA.indexOf(e) + 1) % A.CA.length,
        n = A.CA[t];
    (0, c.Y)(n, d.k0.VOICE_MESSAGE);
}
function N(e) {
    let { played: t, duration: n, currentTime: i } = e,
        s = null == n ? "--:--" : t ? (0, f.rB)(Math.ceil(n - i)) : (0, f.rB)(Math.ceil(n));
    return (0, r.jsx)(l.Text, { variant: "text-sm/normal", className: S.p0, tabularNumbers: !0, children: s });
}
function C(e, t, n) {
    i.useEffect(() => {
        let r;
        function i() {
            let s = e.current;
            null == s || (n(s.currentTime), t && (r = requestAnimationFrame(i)));
        }
        return (
            i(),
            () => {
                null != r && cancelAnimationFrame(r);
            }
        );
    }, [e, t, n]);
}
function b(e, t, n) {
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
            volume: s = 1,
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
        M = i.useRef(null),
        P = i.useMemo(() => (null != x ? d.Ay.getPlaybackPosition(x) : 0), [x]),
        k = (0, o.bG)([d.Ay], () => d.Ay.getPlaybackRate(d.k0.VOICE_MESSAGE)),
        [U, G] = i.useState(P > 0),
        [F, V] = i.useState(P),
        [B, H] = i.useState(I),
        [j, Y] = i.useState(!1),
        [W, K] = i.useState(!1),
        [z, $] = i.useState(!1),
        [q, Z] = i.useState(!1),
        [X, Q] = i.useState("none"),
        [J, ee] = i.useState(() => ("function" == typeof s ? s() : s)),
        et = i.useRef(void 0),
        en = i.useCallback(() => {
            K((e) => !e), Z(!0);
        }, []),
        er = i.useCallback(() => {
            Q("metadata");
        }, []),
        ei = i.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || H(t);
        }, []),
        es = i.useCallback(
            (e) => {
                null != I && null != x && (0, c.d)(x, e, I);
            },
            [x, I],
        ),
        ea = i.useCallback(() => {
            K(!1),
                null == et.current &&
                    (et.current = setTimeout(() => {
                        G(!1), Z(!1), (et.current = void 0);
                    }, 500));
        }, []),
        eo = i.useCallback(() => {
            z || (es(0), ea());
        }, [ea, z, es]),
        el = i.useCallback((e) => {
            let t = M.current;
            null != t && (V(e), (t.currentTime = e), G(!0));
        }, []),
        eu = i.useCallback(() => {
            let e = M.current;
            if (null == e) return;
            let t = e.error;
            w?.(t);
        }, [w]),
        ec = i.useCallback(
            (e) => {
                let t = (0, E.w)(e, 1);
                Y(0 === t), ee(t), f?.(t);
            },
            [f],
        ),
        ed = i.useCallback(() => {
            Y(!j), h?.(!j);
        }, [j, h]),
        e_ = i.useCallback(() => {
            $(!0);
        }, []),
        ef = i.useCallback(() => {
            $(!1), F === B && ea(), es(F);
        }, [F, B, ea, es]),
        ep = i.useCallback(
            (e) => {
                let t = M.current;
                null == B || null == t || (el(e * B), clearTimeout(et.current), (et.current = void 0));
            },
            [B, el],
        );
    i.useEffect(() => {
        !U && W && G(!0);
    }, [W, U]);
    let eh = i.useRef(null),
        em = { played: q, currentTime: F, onPause: L, onPlay: D },
        eE = i.useRef(em);
    i.useEffect(() => {
        eE.current = em;
    }),
        i.useEffect(() => {
            P > 0 && el(P);
        }, [P, el]),
        i.useEffect(() => {
            let e;
            return (
                W &&
                    !z &&
                    (e = setInterval(() => {
                        es(M.current?.currentTime ?? 0);
                    }, m.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [W, z, es]),
        i.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: r } = eE.current;
            if (e || W)
                if (W) (eh.current = performance.now()), r?.(!1, t, (M.current?.duration ?? 0) * m.A.Millis.SECOND);
                else {
                    let e = performance.now(),
                        r = eh.current,
                        i = null != r ? (e - r) / 1e3 : 0;
                    n?.(t, i), es(t), (eh.current = null);
                }
        }, [W, n, B, es]),
        C(M, W, V),
        b(n, W, K);
    let eg = W ? l.E$n : l.udU,
        eA = W ? T.intl.string(T.t.ZcgDJX) : T.intl.string(T.t.RscU7I),
        eI = T.intl.formatToPlainString(T.t.LgCPMt, { playbackRate: k }),
        eT = `${k.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, r.jsx)(i.Suspense, {
                  children: (0, r.jsx)(y, {
                      ref: M,
                      className: S.Zn,
                      src: n,
                      preload: X,
                      playing: W && !z,
                      onEnded: eo,
                      onLoadedMetadata: ei,
                      onError: eu,
                      muted: j,
                      volume: J,
                      playbackRate: k,
                  }),
              })
            : (0, r.jsx)(_.A, {
                  ref: M,
                  className: S.Zn,
                  controls: !1,
                  preload: X,
                  onEnded: eo,
                  onLoadedMetadata: ei,
                  onError: eu,
                  muted: j,
                  volume: J,
                  playbackRate: k,
                  playing: W && !z,
                  children: (0, r.jsx)("source", { src: n }),
              });
    let eS = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: a()(S.kL, { [S.he]: W }),
        onMouseEnter: er,
        children: [
            (0, r.jsx)("div", {
                className: S.Kl,
                children: (0, r.jsx)("div", { className: a()(S.fq, { [S.VN]: eS }) }),
            }),
            (0, r.jsx)(l.DUT, {
                className: S.k0,
                onClick: en,
                "aria-label": eA,
                children: (0, r.jsx)(eg, { className: S.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, r.jsx)(g.A, {
                className: S.ou,
                waveform: A,
                currentTime: F,
                duration: B ?? 1,
                playing: W,
                played: U,
                onDrag: ep,
                onDragStart: e_,
                onDragEnd: ef,
            }),
            (0, r.jsx)(N, { played: U, currentTime: F, duration: B }),
            (0, r.jsx)(l.DUT, {
                className: S.LJ,
                onClick: () => v(k),
                "aria-label": eI,
                children: (0, r.jsx)(l.Text, { variant: "text-xs/semibold", className: S.Sn, children: eT }),
            }),
            (0, r.jsx)(p.A, {
                className: S.bk,
                iconClassName: S._j,
                iconColor: "currentColor",
                sliderWrapperClassName: S.MQ,
                muted: j,
                value: (0, E.M)(J, 1),
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

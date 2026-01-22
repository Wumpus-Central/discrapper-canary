n.d(t, {
    A: () => N,
}),
    n(896048),
    n(747238),
    n(812715);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(775602),
    u = n(57625),
    d = n(713021),
    f = n(118019),
    p = n(922667),
    _ = n(20504),
    h = n(203982),
    m = n(927813),
    g = n(824744),
    E = n(404325),
    b = n(518950),
    y = n(652215),
    O = n(985018),
    A = n(97051);
let v = i.lazy(() => n.e("94436").then(n.bind(n, 660207)));

function S(e) {
    let t = (b.CA.indexOf(e) + 1) % b.CA.length,
        n = b.CA[t];
    (0, u.Y)(n, d.k0.VOICE_MESSAGE);
}

function I(e) {
    let { played: t, duration: n, currentTime: i } = e,
        a = null == n ? "--:--" : t ? (0, p.rB)(Math.ceil(n - i)) : (0, p.rB)(Math.ceil(n));
    return (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        className: A.p0,
        tabularNumbers: !0,
        children: a,
    });
}

function T(e, t, n) {
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

function C(e, t, n) {
    i.useEffect(() => {
        if (t)
            return (
                h._.dispatch(y.jej.VOICE_MESSAGE_PLAYBACK_STARTED, {
                    src: e,
                }),
                h._.subscribe(y.jej.VOICE_MESSAGE_PLAYBACK_STARTED, r),
                () => {
                    h._.unsubscribe(y.jej.VOICE_MESSAGE_PLAYBACK_STARTED, r);
                }
            );

        function r(t) {
            let { src: r } = t;
            e !== r && n(!1);
        }
    }, [e, t, n]);
}
let N = i.memo(function (e) {
    let t,
        {
            src: n,
            volume: a = 1,
            onVolumeChange: p,
            onMute: h,
            waveform: b,
            durationSecs: y,
            onVolumeShow: N,
            onVolumeHide: R,
            onPlay: w,
            onPause: P,
            onError: D,
            playbackCacheKey: x,
        } = e,
        L = i.useRef(null),
        j = i.useMemo(() => (null != x ? d.Ay.getPlaybackPosition(x) : 0), [x]),
        M = (0, o.bG)([d.Ay], () => d.Ay.getPlaybackRate(d.k0.VOICE_MESSAGE)),
        [k, U] = i.useState(j > 0),
        [G, V] = i.useState(j),
        [F, B] = i.useState(y),
        [H, Y] = i.useState(!1),
        [W, K] = i.useState(!1),
        [z, q] = i.useState(!1),
        [X, Z] = i.useState(!1),
        [Q, $] = i.useState("none"),
        [J, ee] = i.useState(() => ("function" == typeof a ? a() : a)),
        et = i.useRef(void 0),
        en = i.useCallback(() => {
            K((e) => !e), Z(!0);
        }, []),
        er = i.useCallback(() => {
            $("metadata");
        }, []),
        ei = i.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || B(t);
        }, []),
        ea = i.useCallback(
            (e) => {
                null != y && null != x && (0, u.d)(x, e, y);
            },
            [x, y],
        ),
        es = i.useCallback(() => {
            K(!1),
                null == et.current &&
                    (et.current = setTimeout(() => {
                        U(!1), Z(!1), (et.current = void 0);
                    }, 500));
        }, []),
        eo = i.useCallback(() => {
            z || (ea(0), es());
        }, [es, z, ea]),
        el = i.useCallback((e) => {
            let t = L.current;
            null != t && (V(e), (t.currentTime = e), U(!0));
        }, []),
        ec = i.useCallback(() => {
            let e = L.current;
            if (null == e) return;
            let t = e.error;
            null == D || D(t);
        }, [D]),
        eu = i.useCallback(
            (e) => {
                let t = (0, g.w)(e, 1);
                Y(0 === t), ee(t), null == p || p(t);
            },
            [p],
        ),
        ed = i.useCallback(() => {
            Y(!H), null == h || h(!H);
        }, [H, h]),
        ef = i.useCallback(() => {
            q(!0);
        }, []),
        ep = i.useCallback(() => {
            q(!1), G === F && es(), ea(G);
        }, [G, F, es, ea]),
        e_ = i.useCallback(
            (e) => {
                let t = L.current;
                null == F || null == t || (el(e * F), clearTimeout(et.current), (et.current = void 0));
            },
            [F, el],
        );
    i.useEffect(() => {
        !k && W && U(!0);
    }, [W, k]);
    let eh = i.useRef(null),
        em = {
            played: X,
            currentTime: G,
            onPause: P,
            onPlay: w,
        },
        eg = i.useRef(em);
    i.useEffect(() => {
        eg.current = em;
    }),
        i.useEffect(() => {
            j > 0 && el(j);
        }, [j, el]),
        i.useEffect(() => {
            let e;
            return (
                W &&
                    !z &&
                    (e = setInterval(() => {
                        var e, t;
                        ea(null != (e = null == (t = L.current) ? void 0 : t.currentTime) ? e : 0);
                    }, m.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [W, z, ea]),
        i.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: r } = eg.current;
            if (e || W)
                if (W) {
                    var i, a;
                    (eh.current = performance.now()),
                        null == r ||
                            r(
                                !1,
                                t,
                                (null != (i = null == (a = L.current) ? void 0 : a.duration) ? i : 0) *
                                    m.A.Millis.SECOND,
                            );
                } else {
                    let e = performance.now(),
                        r = eh.current,
                        i = null != r ? (e - r) / 1e3 : 0;
                    null == n || n(t, i), ea(t), (eh.current = null);
                }
        }, [W, n, F, ea]),
        T(L, W, V),
        C(n, W, K);
    let eE = W ? l.E$n : l.udU,
        eb = W ? O.intl.string(O.t.ZcgDJX) : O.intl.string(O.t.RscU7I),
        ey = O.intl.formatToPlainString(O.t.LgCPMt, {
            playbackRate: M,
        }),
        eO = "".concat(M.toString().replace(/^0/, ""), "X");
    t =
        "Safari" === platform.name
            ? (0, r.jsx)(i.Suspense, {
                  children: (0, r.jsx)(v, {
                      ref: L,
                      className: A.Zn,
                      src: n,
                      preload: Q,
                      playing: W && !z,
                      onEnded: eo,
                      onLoadedMetadata: ei,
                      onError: ec,
                      muted: H,
                      volume: J,
                      playbackRate: M,
                  }),
              })
            : (0, r.jsx)(f.A, {
                  ref: L,
                  className: A.Zn,
                  controls: !1,
                  preload: Q,
                  onEnded: eo,
                  onLoadedMetadata: ei,
                  onError: ec,
                  muted: H,
                  volume: J,
                  playbackRate: M,
                  playing: W && !z,
                  children: (0, r.jsx)("source", {
                      src: n,
                  }),
              });
    let eA = (0, o.bG)([c.A], () => c.A.useReducedMotion);
    return (0, r.jsxs)("div", {
        className: s()(A.kL, {
            [A.he]: W,
        }),
        onMouseEnter: er,
        children: [
            (0, r.jsx)("div", {
                className: A.Kl,
                children: (0, r.jsx)("div", {
                    className: s()(A.fq, {
                        [A.VN]: eA,
                    }),
                }),
            }),
            (0, r.jsx)(l.DUT, {
                className: A.k0,
                onClick: en,
                "aria-label": eb,
                children: (0, r.jsx)(eE, {
                    className: A.uZ,
                    color: "currentColor",
                    size: "sm",
                }),
            }),
            (0, r.jsx)(E.A, {
                className: A.ou,
                waveform: b,
                currentTime: G,
                duration: null != F ? F : 1,
                playing: W,
                played: k,
                onDrag: e_,
                onDragStart: ef,
                onDragEnd: ep,
            }),
            (0, r.jsx)(I, {
                played: k,
                currentTime: G,
                duration: F,
            }),
            (0, r.jsx)(l.DUT, {
                className: A.LJ,
                onClick: () => S(M),
                "aria-label": ey,
                children: (0, r.jsx)(l.Text, {
                    variant: "text-xs/semibold",
                    className: A.Sn,
                    children: eO,
                }),
            }),
            (0, r.jsx)(_.A, {
                className: A.bk,
                iconClassName: A._j,
                iconColor: "currentColor",
                sliderWrapperClassName: A.MQ,
                muted: H,
                value: (0, g.M)(J, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: eu,
                onToggleMute: ed,
                onVolumeShow: N,
                onVolumeHide: R,
            }),
            t,
        ],
    });
});

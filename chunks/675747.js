l.d(t, { A: () => k }), l(321073);
var n = l(477900),
    a = l(582128),
    i = l(503698),
    s = l.n(i),
    r = l(435558),
    c = l.n(r),
    o = l(972117),
    u = l(607470),
    d = l(176781),
    m = l(730730);
function h(e) {
    let { className: t } = e;
    return (0, n.jsx)("div", {
        className: s()(m.L, t),
        children: (0, n.jsx)(d.x, { size: "lg", color: "currentColor" }),
    });
}
var f = l(367974),
    x = l(376595),
    v = l(773503),
    p = l(362081);
let g = [],
    j = [];
function b() {
    let { subscribe: e, soundboardAudioEnabled: t, voiceAudioEnabled: l, clip: i } = (0, p.T)(),
        s = i.decision?.timestamp ?? 0,
        r = a.useMemo(() => new x.H(i.timeline ?? []), [i.timeline]),
        o = s - i.length,
        u = a.useCallback(
            (e) => {
                let t = 1e3 * c().round(e, 3);
                return r.getEventsAtTimestamp(o + t);
            },
            [r, o],
        ),
        [d, m] = a.useState(() => u(0));
    return (
        a.useEffect(
            () =>
                e({
                    onTimeUpdate: (e) => {
                        m(u(e));
                    },
                }),
            [e, u],
        ),
        (0, n.jsx)(v.A, {
            speakingUserIds: l ? d.speakingUserIds : g,
            activeSoundboards: t ? d.activeSoundboards : j,
            userIds: i.users,
            guildId: i.guildId,
            channelId: i.channelId,
        })
    );
}
var C = l(696016),
    y = l(884003),
    N = l(344801);
function E(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: n, soundboardAudioEnabled: a, isVoiceClip: i } = t;
    if (!i && l && n && a)
        if (e.includes(C.gC.ALL)) return !1;
        else return !0;
    return e.includes(C.gC.APPLICATION) ? !l : e.includes(C.gC.VOICE) ? !n : !e.includes(C.gC.SOUNDBOARD) || !a;
}
function w(e) {
    let { setRef: t, audioTrackLabel: l, src: i, muted: s } = e,
        r = a.useCallback(
            (e) => {
                t(e, l);
            },
            [t, l],
        ),
        c = a.useCallback(
            (e) => {
                Object.values(e.currentTarget.audioTracks).forEach((e) => {
                    e.enabled = l === e.label;
                });
            },
            [l],
        );
    return (0, n.jsx)("audio", {
        id: `ClipsPlayerAudioTrack:${l}`,
        ref: r,
        src: i ?? void 0,
        muted: s,
        preload: "auto",
        className: N.R,
        onLoadedMetadata: c,
    });
}
let k = a.forwardRef(function (e, t) {
    let { overlay: l, cropFraming: i, frameAspectRatio: c, loop: d = !0 } = e,
        {
            cropStart: m,
            cropEnd: x,
            setVideoPlayerRef: v,
            videoURL: g,
            audioURL: j,
            applicationAudioEnabled: k,
            voiceAudioEnabled: A,
            soundboardAudioEnabled: R,
            clip: L,
        } = (0, p.T)(),
        T = a.useRef({}),
        I = a.useRef(null),
        M = a.useRef(!1),
        [D, S] = a.useState([]),
        O = a.useCallback(() => {
            let e = T.current.main;
            if (null == e) return;
            let t = (0, r.round)(e.currentTime, 3),
                l = (0, r.round)(m, 3);
            if (t >= (null != x ? (0, r.round)(x, 3) : (0, r.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(T.current)) null != e && (e.currentTime = m);
                return !0;
            }
        }, [m, x]),
        P = a.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(C.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(C.gC.VOICE) || l.label.includes(C.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            S(t);
        }, []),
        _ = a.useCallback(() => {
            for (let e of ((M.current = !0), O(), Object.values(T.current))) null != e && e.play();
        }, [O]),
        z = a.useCallback(() => {
            for (let e of Object.values(T.current)) null != e && e.pause();
        }, []);
    (0, o.A)(() => {
        if (M.current) {
            if (!d) {
                let e = T.current.main;
                if (null != e) {
                    let t = null != x ? (0, r.round)(x, 3) : (0, r.round)(e.duration, 3);
                    if ((0, r.round)(e.currentTime, 3) >= t) {
                        z(), (M.current = !1);
                        return;
                    }
                }
            }
            O() && _();
        }
    });
    let U = a.useCallback((e) => {
            for (let t of (T.current.main?.paused && (M.current = !1), Object.values(T.current)))
                null != t && (t.currentTime = e);
        }, []),
        $ = a.useCallback(() => {
            T.current.main?.paused ? _() : z();
        }, [_, z]),
        G = a.useCallback((e) => {
            T.current.main = e;
        }, []),
        B = a.useCallback((e, t) => {
            T.current[t] = e;
        }, []);
    a.useImperativeHandle(t, () => {
        let e = { play: _, seek: U, pause: z, videoElement: T.current.main };
        return v(e), e;
    }, [_, U, z, v]);
    let H = a.useCallback(() => {
        U(m);
    }, [U, m]);
    a.useLayoutEffect(() => {
        let e = T.current;
        return () => {
            for (let t of Object.values(e)) (0, f.A)(t);
        };
    }, []);
    let V = L.type === C.nQ.VOICE_CLIP,
        K = !0 === i && !V && null != c;
    return (a.useLayoutEffect(() => {
        let e = I.current;
        if (null == e) return;
        if (!K) {
            (e.style.width = ""), (e.style.height = "");
            return;
        }
        function t() {
            let e = I.current,
                t = T.current.main;
            null != e &&
                null != t &&
                ((e.style.width = ""),
                (e.style.height = ""),
                (e.style.width = `${t.clientWidth}px`),
                (e.style.height = `${t.clientHeight}px`));
        }
        t();
        let l = e.parentElement;
        if (null == l) return;
        let n = new ResizeObserver(t);
        return n.observe(l), () => n.disconnect();
    }, [K, c]),
    null == g)
        ? null
        : (0, n.jsxs)("div", {
              ref: I,
              className: s()(y.DV, K && y.Ln),
              children: [
                  V
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("audio", { ref: G, src: g, muted: !0, preload: "auto" }),
                                (0, n.jsx)(h, { className: y.Ap }),
                            ],
                        })
                      : (0, n.jsx)(u.A, {
                            onClick: $,
                            className: s()(y.Ap, K && y.HU),
                            style: K ? { aspectRatio: c } : void 0,
                            ref: G,
                            src: g,
                            muted: E(":all", {
                                applicationAudioEnabled: k,
                                voiceAudioEnabled: A,
                                soundboardAudioEnabled: R,
                                isVoiceClip: V,
                            }),
                            preload: "auto",
                            onLoadedData: H,
                        }),
                  (0, n.jsx)(b, {}),
                  l,
                  (0, n.jsx)("audio", {
                      id: "ClipsPlayerAudioTrack:application",
                      src: j ?? void 0,
                      muted: E(":application", {
                          applicationAudioEnabled: k,
                          voiceAudioEnabled: A,
                          soundboardAudioEnabled: R,
                          isVoiceClip: V,
                      }),
                      className: N.R,
                      preload: "auto",
                      ref: (e) => B(e, "main:application"),
                      onLoadedMetadata: P,
                  }),
                  D.map((e) =>
                      (0, n.jsx)(
                          w,
                          {
                              setRef: B,
                              audioTrackLabel: e,
                              src: j,
                              muted: E(e, {
                                  applicationAudioEnabled: k,
                                  voiceAudioEnabled: A,
                                  soundboardAudioEnabled: R,
                                  isVoiceClip: V,
                              }),
                          },
                          e,
                      ),
                  ),
              ],
          });
});

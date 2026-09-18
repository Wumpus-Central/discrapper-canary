(l.d(t, { A: () => k }), l(321073));
var a = l(477900),
    n = l(582128),
    i = l(503698),
    s = l.n(i),
    r = l(435558),
    o = l.n(r),
    c = l(194498),
    u = l(607470),
    d = l(176781),
    m = l(901127);
function h(e) {
    let { className: t } = e;
    return (0, a.jsx)("div", {
        className: s()(m.L, t),
        children: (0, a.jsx)(d.x, { size: "lg", color: "currentColor" }),
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
        r = n.useMemo(() => new x.H(i.timeline ?? []), [i.timeline]),
        c = s - i.length,
        u = n.useCallback(
            (e) => {
                let t = 1e3 * o().round(e, 3);
                return r.getEventsAtTimestamp(c + t);
            },
            [r, c],
        ),
        [d, m] = n.useState(() => u(0));
    return (
        n.useEffect(
            () =>
                e({
                    onTimeUpdate: (e) => {
                        m(u(e));
                    },
                }),
            [e, u],
        ),
        (0, a.jsx)(v.A, {
            speakingUserIds: l ? d.speakingUserIds : g,
            activeSoundboards: t ? d.activeSoundboards : j,
            userIds: i.users,
            guildId: i.guildId,
            channelId: i.channelId,
        })
    );
}
var C = l(696016),
    y = l(933092),
    w = l(24468);
function N(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: a, soundboardAudioEnabled: n, isVoiceClip: i } = t;
    if (!i && l && a && n)
        if (e.includes(C.gC.ALL)) return !1;
        else return !0;
    return e.includes(C.gC.APPLICATION) ? !l : e.includes(C.gC.VOICE) ? !a : !e.includes(C.gC.SOUNDBOARD) || !n;
}
function E(e) {
    let { setRef: t, audioTrackLabel: l, src: i, muted: s } = e,
        r = n.useCallback(
            (e) => {
                t(e, l);
            },
            [t, l],
        ),
        o = n.useCallback(
            (e) => {
                Object.values(e.currentTarget.audioTracks).forEach((e) => {
                    e.enabled = l === e.label;
                });
            },
            [l],
        );
    return (0, a.jsx)("audio", {
        id: `ClipsPlayerAudioTrack:${l}`,
        ref: r,
        src: i ?? void 0,
        muted: s,
        preload: "auto",
        className: w.R,
        onLoadedMetadata: o,
    });
}
let k = n.forwardRef(function (e, t) {
    let { overlay: l, cropFraming: i, frameAspectRatio: o, loop: d = !0 } = e,
        {
            cropStart: m,
            cropEnd: x,
            setVideoPlayerRef: v,
            videoURL: g,
            audioURL: j,
            applicationAudioEnabled: k,
            voiceAudioEnabled: A,
            soundboardAudioEnabled: L,
            clip: R,
        } = (0, p.T)(),
        I = n.useRef({}),
        M = n.useRef(null),
        T = n.useRef(!1),
        [D, S] = n.useState([]),
        O = n.useCallback(() => {
            let e = I.current.main;
            if (null == e) return;
            let t = (0, r.round)(e.currentTime, 3),
                l = (0, r.round)(m, 3);
            if (t >= (null != x ? (0, r.round)(x, 3) : (0, r.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(I.current)) null != e && (e.currentTime = m);
                return !0;
            }
        }, [m, x]),
        P = n.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(C.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(C.gC.VOICE) || l.label.includes(C.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            S(t);
        }, []),
        z = n.useCallback(() => {
            for (let e of ((T.current = !0), O(), Object.values(I.current))) null != e && e.play();
        }, [O]),
        _ = n.useCallback(() => {
            for (let e of Object.values(I.current)) null != e && e.pause();
        }, []);
    (0, c.A)(() => {
        if (T.current) {
            if (!d) {
                let e = I.current.main;
                if (null != e) {
                    let t = null != x ? (0, r.round)(x, 3) : (0, r.round)(e.duration, 3);
                    if ((0, r.round)(e.currentTime, 3) >= t) {
                        (_(), (T.current = !1));
                        return;
                    }
                }
            }
            O() && z();
        }
    });
    let $ = n.useCallback((e) => {
            for (let t of (I.current.main?.paused && (T.current = !1), Object.values(I.current)))
                null != t && (t.currentTime = e);
        }, []),
        U = n.useCallback(() => {
            I.current.main?.paused ? z() : _();
        }, [z, _]),
        G = n.useCallback((e) => {
            I.current.main = e;
        }, []),
        H = n.useCallback((e, t) => {
            I.current[t] = e;
        }, []);
    n.useImperativeHandle(t, () => {
        let e = { play: z, seek: $, pause: _, videoElement: I.current.main };
        return (v(e), e);
    }, [z, $, _, v]);
    let B = n.useCallback(() => {
        $(m);
    }, [$, m]);
    n.useLayoutEffect(() => {
        let e = I.current;
        return () => {
            for (let t of Object.values(e)) (0, f.A)(t);
        };
    }, []);
    let X = R.type === C.nQ.VOICE_CLIP,
        F = !0 === i && !X && null != o;
    return (n.useLayoutEffect(() => {
        let e = M.current;
        if (null == e) return;
        if (!F) {
            ((e.style.width = ""), (e.style.height = ""));
            return;
        }
        function t() {
            let e = M.current,
                t = I.current.main;
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
        let a = new ResizeObserver(t);
        return (a.observe(l), () => a.disconnect());
    }, [F, o]),
    null == g)
        ? null
        : (0, a.jsxs)("div", {
              ref: M,
              className: s()(y.DV, F && y.Ln),
              children: [
                  X
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)("audio", { ref: G, src: g, muted: !0, preload: "auto" }),
                                (0, a.jsx)(h, { className: y.Ap }),
                            ],
                        })
                      : (0, a.jsx)(u.A, {
                            onClick: U,
                            className: s()(y.Ap, F && y.HU),
                            style: F ? { aspectRatio: o } : void 0,
                            ref: G,
                            src: g,
                            muted: N(":all", {
                                applicationAudioEnabled: k,
                                voiceAudioEnabled: A,
                                soundboardAudioEnabled: L,
                                isVoiceClip: X,
                            }),
                            preload: "auto",
                            onLoadedData: B,
                        }),
                  (0, a.jsx)(b, {}),
                  l,
                  (0, a.jsx)("audio", {
                      id: "ClipsPlayerAudioTrack:application",
                      src: j ?? void 0,
                      muted: N(":application", {
                          applicationAudioEnabled: k,
                          voiceAudioEnabled: A,
                          soundboardAudioEnabled: L,
                          isVoiceClip: X,
                      }),
                      className: w.R,
                      preload: "auto",
                      ref: (e) => H(e, "main:application"),
                      onLoadedMetadata: P,
                  }),
                  D.map((e) =>
                      (0, a.jsx)(
                          E,
                          {
                              setRef: H,
                              audioTrackLabel: e,
                              src: j,
                              muted: N(e, {
                                  applicationAudioEnabled: k,
                                  voiceAudioEnabled: A,
                                  soundboardAudioEnabled: L,
                                  isVoiceClip: X,
                              }),
                          },
                          e,
                      ),
                  ),
              ],
          });
});

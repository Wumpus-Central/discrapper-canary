l.d(t, { A: () => g }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(735438),
    s = l(194498),
    r = l(607470),
    d = l(372684),
    o = l(226421),
    c = l(252449),
    u = l(429364),
    m = l(696016),
    h = l(889904),
    p = l(825040);
function x(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: n, soundboardAudioEnabled: a, isVoiceClip: i } = t;
    if (!i && l && n && a)
        if (e.includes(m.gC.ALL)) return !1;
        else return !0;
    return e.includes(m.gC.APPLICATION) ? !l : e.includes(m.gC.VOICE) ? !n : !e.includes(m.gC.SOUNDBOARD) || !a;
}
function f(e) {
    let { setRef: t, audioTrackLabel: l, src: i, muted: s } = e,
        r = a.useCallback(
            (e) => {
                t(e, l);
            },
            [t, l],
        ),
        d = a.useCallback(
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
        className: p.R,
        onLoadedMetadata: d,
    });
}
let g = a.forwardRef(function (e, t) {
    let { clip: l, applicationAudioEnabled: g, voiceAudioEnabled: v, soundboardAudioEnabled: j } = e,
        { cropStart: b, cropEnd: C, setVideoPlayerRef: y, videoURL: N, audioURL: A } = (0, u.T)(),
        E = a.useRef({}),
        k = a.useRef(!1),
        [I, S] = a.useState([]),
        w = a.useCallback(() => {
            let e = E.current.main;
            if (null == e) return;
            let t = (0, i.round)(e.currentTime, 3),
                l = (0, i.round)(b, 3);
            if (t >= (null != C ? (0, i.round)(C, 3) : (0, i.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(E.current)) null != e && (e.currentTime = b);
                return !0;
            }
        }, [b, C]),
        L = a.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(m.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(m.gC.VOICE) || l.label.includes(m.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            S(t);
        }, []);
    (0, s.A)(() => {
        k.current && w() && M();
    });
    let M = a.useCallback(() => {
            for (let e of ((k.current = !0), w(), Object.values(E.current))) null != e && e.play();
        }, [w]),
        T = a.useCallback(() => {
            for (let e of Object.values(E.current)) null != e && e.pause();
        }, []),
        R = a.useCallback((e) => {
            for (let t of (E.current.main?.paused && (k.current = !1), Object.values(E.current)))
                null != t && (t.currentTime = e);
        }, []),
        D = a.useCallback(() => {
            E.current.main?.paused ? M() : T();
        }, [M, T]),
        O = a.useCallback((e) => {
            E.current.main = e;
        }, []),
        P = a.useCallback((e, t) => {
            E.current[t] = e;
        }, []);
    a.useImperativeHandle(t, () => {
        let e = { play: M, seek: R, pause: T, videoElement: E.current.main };
        return y(e), e;
    }, [M, R, T, y]);
    let U = a.useCallback(() => {
        R(b);
    }, [R, b]);
    if (null == N) return null;
    let G = l.type === d.nQ.VOICE_CLIP;
    return (0, n.jsxs)("div", {
        className: h.DV,
        children: [
            G
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("audio", { ref: O, src: N, muted: !0, preload: "auto" }),
                          (0, n.jsx)(o.A, { className: h.Ap }),
                      ],
                  })
                : (0, n.jsx)(r.A, {
                      onClick: D,
                      className: h.Ap,
                      ref: O,
                      src: N,
                      muted: x(":all", {
                          applicationAudioEnabled: g,
                          voiceAudioEnabled: v,
                          soundboardAudioEnabled: j,
                          isVoiceClip: G,
                      }),
                      preload: "auto",
                      onLoadedData: U,
                  }),
            (0, n.jsx)(c.E, { soundboardAudioEnabled: j, voiceAudioEnabled: v, clip: l }),
            (0, n.jsx)("audio", {
                id: "ClipsPlayerAudioTrack:application",
                src: A ?? void 0,
                muted: x(":application", {
                    applicationAudioEnabled: g,
                    voiceAudioEnabled: v,
                    soundboardAudioEnabled: j,
                    isVoiceClip: G,
                }),
                className: p.R,
                preload: "auto",
                ref: (e) => P(e, "main:application"),
                onLoadedMetadata: L,
            }),
            I.map((e) =>
                (0, n.jsx)(
                    f,
                    {
                        setRef: P,
                        audioTrackLabel: e,
                        src: A,
                        muted: x(e, {
                            applicationAudioEnabled: g,
                            voiceAudioEnabled: v,
                            soundboardAudioEnabled: j,
                            isVoiceClip: G,
                        }),
                    },
                    e,
                ),
            ),
        ],
    });
});

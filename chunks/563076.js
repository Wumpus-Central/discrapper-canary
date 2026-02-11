l.d(t, { A: () => v }), l(321073);
var a = l(627968),
    n = l(64700),
    s = l(735438),
    i = l(194498),
    r = l(607470),
    o = l(372684),
    u = l(226421),
    c = l(252449),
    d = l(429364),
    m = l(696016),
    h = l(662400),
    p = l(12288);
function f(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: a, soundboardAudioEnabled: n, isVoiceClip: s } = t;
    if (!s && l && a && n)
        if (e.includes(m.gC.ALL)) return !1;
        else return !0;
    return e.includes(m.gC.APPLICATION) ? !l : e.includes(m.gC.VOICE) ? !a : !e.includes(m.gC.SOUNDBOARD) || !n;
}
function g(e) {
    let { setRef: t, audioTrackLabel: l, src: s, muted: i } = e,
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
        src: s ?? void 0,
        muted: i,
        preload: "auto",
        className: p.R,
        onLoadedMetadata: o,
    });
}
let v = n.forwardRef(function (e, t) {
    let { clip: l, applicationAudioEnabled: v, voiceAudioEnabled: x, soundboardAudioEnabled: b } = e,
        { cropStart: j, cropEnd: C, setVideoPlayerRef: N, videoURL: k, audioURL: y } = (0, d.T)(),
        E = n.useRef({}),
        A = n.useRef(!1),
        [S, I] = n.useState([]),
        w = n.useCallback(() => {
            let e = E.current.main;
            if (null == e) return;
            let t = (0, s.round)(e.currentTime, 3),
                l = (0, s.round)(j, 3);
            if (t >= (null != C ? (0, s.round)(C, 3) : (0, s.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(E.current)) null != e && (e.currentTime = j);
                return !0;
            }
        }, [j, C]),
        T = n.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(m.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(m.gC.VOICE) || l.label.includes(m.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            I(t);
        }, []);
    (0, i.A)(() => {
        A.current && w() && L();
    });
    let L = n.useCallback(() => {
            for (let e of ((A.current = !0), w(), Object.values(E.current))) null != e && e.play();
        }, [w]),
        R = n.useCallback(() => {
            for (let e of Object.values(E.current)) null != e && e.pause();
        }, []),
        M = n.useCallback((e) => {
            for (let t of (E.current.main?.paused && (A.current = !1), Object.values(E.current)))
                null != t && (t.currentTime = e);
        }, []),
        O = n.useCallback(() => {
            E.current.main?.paused ? L() : R();
        }, [L, R]),
        U = n.useCallback((e) => {
            E.current.main = e;
        }, []),
        D = n.useCallback((e, t) => {
            E.current[t] = e;
        }, []);
    n.useImperativeHandle(t, () => {
        let e = { play: L, seek: M, pause: R, videoElement: E.current.main };
        return N(e), e;
    }, [L, M, R, N]);
    let $ = n.useCallback(() => {
        M(j);
    }, [M, j]);
    if (null == k) return null;
    let P = l.type === o.nQ.VOICE_CLIP;
    return (0, a.jsxs)("div", {
        className: h.DV,
        children: [
            P
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("audio", { ref: U, src: k, muted: !0, preload: "auto" }),
                          (0, a.jsx)(u.A, { className: h.Ap }),
                      ],
                  })
                : (0, a.jsx)(r.A, {
                      onClick: O,
                      className: h.Ap,
                      ref: U,
                      src: k,
                      muted: f(":all", {
                          applicationAudioEnabled: v,
                          voiceAudioEnabled: x,
                          soundboardAudioEnabled: b,
                          isVoiceClip: P,
                      }),
                      preload: "auto",
                      onLoadedData: $,
                  }),
            (0, a.jsx)(c.E, { soundboardAudioEnabled: b, voiceAudioEnabled: x, clip: l }),
            (0, a.jsx)("audio", {
                id: "ClipsPlayerAudioTrack:application",
                src: y ?? void 0,
                muted: f(":application", {
                    applicationAudioEnabled: v,
                    voiceAudioEnabled: x,
                    soundboardAudioEnabled: b,
                    isVoiceClip: P,
                }),
                className: p.R,
                preload: "auto",
                ref: (e) => D(e, "main:application"),
                onLoadedMetadata: T,
            }),
            S.map((e) =>
                (0, a.jsx)(
                    g,
                    {
                        setRef: D,
                        audioTrackLabel: e,
                        src: y,
                        muted: f(e, {
                            applicationAudioEnabled: v,
                            voiceAudioEnabled: x,
                            soundboardAudioEnabled: b,
                            isVoiceClip: P,
                        }),
                    },
                    e,
                ),
            ),
        ],
    });
});

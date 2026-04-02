a.d(t, { A: () => v }), a(321073);
var l = a(627968),
    n = a(64700),
    i = a(735438),
    s = a(194498),
    r = a(607470),
    o = a(372684),
    u = a(226421),
    d = a(252449),
    c = a(429364),
    m = a(696016),
    h = a(14363),
    p = a(695241);
function f(e, t) {
    let { applicationAudioEnabled: a, voiceAudioEnabled: l, soundboardAudioEnabled: n, isVoiceClip: i } = t;
    if (!i && a && l && n)
        if (e.includes(m.gC.ALL)) return !1;
        else return !0;
    return e.includes(m.gC.APPLICATION) ? !a : e.includes(m.gC.VOICE) ? !l : !e.includes(m.gC.SOUNDBOARD) || !n;
}
function g(e) {
    let { setRef: t, audioTrackLabel: a, src: i, muted: s } = e,
        r = n.useCallback(
            (e) => {
                t(e, a);
            },
            [t, a],
        ),
        o = n.useCallback(
            (e) => {
                Object.values(e.currentTarget.audioTracks).forEach((e) => {
                    e.enabled = a === e.label;
                });
            },
            [a],
        );
    return (0, l.jsx)("audio", {
        id: `ClipsPlayerAudioTrack:${a}`,
        ref: r,
        src: i ?? void 0,
        muted: s,
        preload: "auto",
        className: p.R,
        onLoadedMetadata: o,
    });
}
let v = n.forwardRef(function (e, t) {
    let { clip: a, applicationAudioEnabled: v, voiceAudioEnabled: x, soundboardAudioEnabled: b } = e,
        { cropStart: j, cropEnd: _, setVideoPlayerRef: C, videoURL: k, audioURL: y } = (0, c.T)(),
        N = n.useRef({}),
        E = n.useRef(!1),
        [A, S] = n.useState([]),
        w = n.useCallback(() => {
            let e = N.current.main;
            if (null == e) return;
            let t = (0, i.round)(e.currentTime, 3),
                a = (0, i.round)(j, 3);
            if (t >= (null != _ ? (0, i.round)(_, 3) : (0, i.round)(e.duration, 3)) || t < a) {
                for (let e of Object.values(N.current)) null != e && (e.currentTime = j);
                return !0;
            }
        }, [j, _]),
        I = n.useCallback((e) => {
            let t = [];
            for (let a of Object.values(e.currentTarget.audioTracks))
                a.label.includes(m.gC.APPLICATION)
                    ? (a.enabled = !0)
                    : a.label.includes(m.gC.VOICE) || a.label.includes(m.gC.SOUNDBOARD)
                      ? ((a.enabled = !1), t.includes(a.label) || t.push(a.label))
                      : (a.enabled = !1);
            S(t);
        }, []);
    (0, s.A)(() => {
        E.current && w() && T();
    });
    let T = n.useCallback(() => {
            for (let e of ((E.current = !0), w(), Object.values(N.current))) null != e && e.play();
        }, [w]),
        L = n.useCallback(() => {
            for (let e of Object.values(N.current)) null != e && e.pause();
        }, []),
        R = n.useCallback((e) => {
            for (let t of (N.current.main?.paused && (E.current = !1), Object.values(N.current)))
                null != t && (t.currentTime = e);
        }, []),
        M = n.useCallback(() => {
            N.current.main?.paused ? T() : L();
        }, [T, L]),
        O = n.useCallback((e) => {
            N.current.main = e;
        }, []),
        U = n.useCallback((e, t) => {
            N.current[t] = e;
        }, []);
    n.useImperativeHandle(t, () => {
        let e = { play: T, seek: R, pause: L, videoElement: N.current.main };
        return C(e), e;
    }, [T, R, L, C]);
    let D = n.useCallback(() => {
        R(j);
    }, [R, j]);
    if (null == k) return null;
    let P = a.type === o.nQ.VOICE_CLIP;
    return (0, l.jsxs)("div", {
        className: h.DV,
        children: [
            P
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("audio", { ref: O, src: k, muted: !0, preload: "auto" }),
                          (0, l.jsx)(u.A, { className: h.Ap }),
                      ],
                  })
                : (0, l.jsx)(r.A, {
                      onClick: M,
                      className: h.Ap,
                      ref: O,
                      src: k,
                      muted: f(":all", {
                          applicationAudioEnabled: v,
                          voiceAudioEnabled: x,
                          soundboardAudioEnabled: b,
                          isVoiceClip: P,
                      }),
                      preload: "auto",
                      onLoadedData: D,
                  }),
            (0, l.jsx)(d.E, { soundboardAudioEnabled: b, voiceAudioEnabled: x, clip: a }),
            (0, l.jsx)("audio", {
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
                ref: (e) => U(e, "main:application"),
                onLoadedMetadata: I,
            }),
            A.map((e) =>
                (0, l.jsx)(
                    g,
                    {
                        setRef: U,
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

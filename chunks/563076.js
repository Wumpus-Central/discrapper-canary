l.d(t, { A: () => g }), l(321073);
var a = l(627968),
    n = l(64700),
    s = l(735438),
    i = l(194498),
    r = l(607470),
    d = l(372684),
    o = l(226421),
    c = l(252449),
    u = l(429364),
    m = l(696016),
    h = l(97451),
    p = l(813433);
function f(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: a, soundboardAudioEnabled: n, isVoiceClip: s } = t;
    if (!s && l && a && n)
        if (e.includes(m.gC.ALL)) return !1;
        else return !0;
    return e.includes(m.gC.APPLICATION) ? !l : e.includes(m.gC.VOICE) ? !a : !e.includes(m.gC.SOUNDBOARD) || !n;
}
function v(e) {
    let { setRef: t, audioTrackLabel: l, src: s, muted: i } = e,
        r = n.useCallback(
            (e) => {
                t(e, l);
            },
            [t, l],
        ),
        d = n.useCallback(
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
        onLoadedMetadata: d,
    });
}
let g = n.forwardRef(function (e, t) {
    let { clip: l, applicationAudioEnabled: g, voiceAudioEnabled: x, soundboardAudioEnabled: j } = e,
        { cropStart: b, cropEnd: C, setVideoPlayerRef: y, videoURL: A, audioURL: N } = (0, u.T)(),
        E = n.useRef({}),
        w = n.useRef(!1),
        [k, I] = n.useState([]),
        S = n.useCallback(() => {
            let e = E.current.main;
            if (null == e) return;
            let t = (0, s.round)(e.currentTime, 3),
                l = (0, s.round)(b, 3);
            if (t >= (null != C ? (0, s.round)(C, 3) : (0, s.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(E.current)) null != e && (e.currentTime = b);
                return !0;
            }
        }, [b, C]),
        L = n.useCallback((e) => {
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
        w.current && S() && M();
    });
    let M = n.useCallback(() => {
            for (let e of ((w.current = !0), S(), Object.values(E.current))) null != e && e.play();
        }, [S]),
        R = n.useCallback(() => {
            for (let e of Object.values(E.current)) null != e && e.pause();
        }, []),
        T = n.useCallback((e) => {
            for (let t of (E.current.main?.paused && (w.current = !1), Object.values(E.current)))
                null != t && (t.currentTime = e);
        }, []),
        D = n.useCallback(() => {
            E.current.main?.paused ? M() : R();
        }, [M, R]),
        O = n.useCallback((e) => {
            E.current.main = e;
        }, []),
        P = n.useCallback((e, t) => {
            E.current[t] = e;
        }, []);
    n.useImperativeHandle(t, () => {
        let e = { play: M, seek: T, pause: R, videoElement: E.current.main };
        return y(e), e;
    }, [M, T, R, y]);
    let U = n.useCallback(() => {
        T(b);
    }, [T, b]);
    if (null == A) return null;
    let G = l.type === d.nQ.VOICE_CLIP;
    return (0, a.jsxs)("div", {
        className: h.DV,
        children: [
            G
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("audio", { ref: O, src: A, muted: !0, preload: "auto" }),
                          (0, a.jsx)(o.A, { className: h.Ap }),
                      ],
                  })
                : (0, a.jsx)(r.A, {
                      onClick: D,
                      className: h.Ap,
                      ref: O,
                      src: A,
                      muted: f(":all", {
                          applicationAudioEnabled: g,
                          voiceAudioEnabled: x,
                          soundboardAudioEnabled: j,
                          isVoiceClip: G,
                      }),
                      preload: "auto",
                      onLoadedData: U,
                  }),
            (0, a.jsx)(c.E, { soundboardAudioEnabled: j, voiceAudioEnabled: x, clip: l }),
            (0, a.jsx)("audio", {
                id: "ClipsPlayerAudioTrack:application",
                src: N ?? void 0,
                muted: f(":application", {
                    applicationAudioEnabled: g,
                    voiceAudioEnabled: x,
                    soundboardAudioEnabled: j,
                    isVoiceClip: G,
                }),
                className: p.R,
                preload: "auto",
                ref: (e) => P(e, "main:application"),
                onLoadedMetadata: L,
            }),
            k.map((e) =>
                (0, a.jsx)(
                    v,
                    {
                        setRef: P,
                        audioTrackLabel: e,
                        src: N,
                        muted: f(e, {
                            applicationAudioEnabled: g,
                            voiceAudioEnabled: x,
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

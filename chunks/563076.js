l.d(t, {
    A: () => b,
}),
    l(896048),
    l(321073);
var n = l(627968),
    a = l(64700),
    r = l(735438),
    i = l(194498),
    s = l(607470),
    o = l(372684),
    u = l(226421),
    c = l(252449),
    d = l(429364),
    m = l(696016),
    h = l(327742),
    p = l(866090);

function v(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: n, soundboardAudioEnabled: a, isVoiceClip: r } = t;
    if (!r && l && n && a)
        if (e.includes(m.gC.ALL)) return !1;
        else return !0;
    return e.includes(m.gC.APPLICATION) ? !l : e.includes(m.gC.VOICE) ? !n : !e.includes(m.gC.SOUNDBOARD) || !a;
}

function f(e) {
    let { setRef: t, audioTrackLabel: l, src: r, muted: i } = e,
        s = a.useCallback(
            (e) => {
                t(e, l);
            },
            [t, l],
        ),
        o = a.useCallback(
            (e) => {
                Object.values(e.currentTarget.audioTracks).forEach((e) => {
                    e.enabled = l === e.label;
                });
            },
            [l],
        );
    return (0, n.jsx)("audio", {
        id: "ClipsPlayerAudioTrack:".concat(l),
        ref: s,
        src: null != r ? r : void 0,
        muted: i,
        preload: "auto",
        className: p.R,
        onLoadedMetadata: o,
    });
}
let b = a.forwardRef(function (e, t) {
    let { clip: l, applicationAudioEnabled: b, voiceAudioEnabled: g, soundboardAudioEnabled: j } = e,
        { cropStart: x, cropEnd: y, setVideoPlayerRef: C, videoURL: k, audioURL: N } = (0, d.T)(),
        E = a.useRef({}),
        S = a.useRef(!1),
        [w, O] = a.useState([]),
        A = a.useCallback(() => {
            let e = E.current.main;
            if (null == e) return;
            let t = (0, r.round)(e.currentTime, 3),
                l = (0, r.round)(x, 3);
            if (t >= (null != y ? (0, r.round)(y, 3) : (0, r.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(E.current)) null != e && (e.currentTime = x);
                return !0;
            }
        }, [x, y]),
        I = a.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(m.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(m.gC.VOICE) || l.label.includes(m.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            O(t);
        }, []);
    (0, i.A)(() => {
        S.current && A() && T();
    });
    let T = a.useCallback(() => {
            for (let e of ((S.current = !0), A(), Object.values(E.current))) null != e && e.play();
        }, [A]),
        L = a.useCallback(() => {
            for (let e of Object.values(E.current)) null != e && e.pause();
        }, []),
        R = a.useCallback((e) => {
            var t;
            for (let l of ((null == (t = E.current.main) ? void 0 : t.paused) && (S.current = !1),
            Object.values(E.current)))
                null != l && (l.currentTime = e);
        }, []),
        M = a.useCallback(() => {
            var e;
            (null == (e = E.current.main) ? void 0 : e.paused) ? T() : L();
        }, [T, L]),
        P = a.useCallback((e) => {
            E.current.main = e;
        }, []),
        U = a.useCallback((e, t) => {
            E.current[t] = e;
        }, []);
    a.useImperativeHandle(t, () => {
        let e = {
            play: T,
            seek: R,
            pause: L,
            videoElement: E.current.main,
        };
        return C(e), e;
    }, [T, R, L, C]);
    let D = a.useCallback(() => {
        R(x);
    }, [R, x]);
    if (null == k) return null;
    let z = l.type === o.nQ.VOICE_CLIP;
    return (0, n.jsxs)("div", {
        className: h.DV,
        children: [
            z
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("audio", {
                              ref: P,
                              src: k,
                              muted: !0,
                              preload: "auto",
                          }),
                          (0, n.jsx)(u.A, {
                              className: h.Ap,
                          }),
                      ],
                  })
                : (0, n.jsx)(s.A, {
                      onClick: M,
                      className: h.Ap,
                      ref: P,
                      src: k,
                      muted: v(":all", {
                          applicationAudioEnabled: b,
                          voiceAudioEnabled: g,
                          soundboardAudioEnabled: j,
                          isVoiceClip: z,
                      }),
                      preload: "auto",
                      onLoadedData: D,
                  }),
            (0, n.jsx)(c.E, {
                soundboardAudioEnabled: j,
                voiceAudioEnabled: g,
                clip: l,
            }),
            (0, n.jsx)("audio", {
                id: "ClipsPlayerAudioTrack:application",
                src: null != N ? N : void 0,
                muted: v(":application", {
                    applicationAudioEnabled: b,
                    voiceAudioEnabled: g,
                    soundboardAudioEnabled: j,
                    isVoiceClip: z,
                }),
                className: p.R,
                preload: "auto",
                ref: (e) => U(e, "main:application"),
                onLoadedMetadata: I,
            }),
            w.map((e) =>
                (0, n.jsx)(
                    f,
                    {
                        setRef: U,
                        audioTrackLabel: e,
                        src: N,
                        muted: v(e, {
                            applicationAudioEnabled: b,
                            voiceAudioEnabled: g,
                            soundboardAudioEnabled: j,
                            isVoiceClip: z,
                        }),
                    },
                    e,
                ),
            ),
        ],
    });
});

n.d(t, { Z: () => g }), n(388685), n(539854);
var l = n(54381),
    a = n(473749),
    i = n(392711),
    r = n(98650),
    s = n(70097),
    o = n(894694),
    u = n(367825),
    c = n(129697),
    d = n(115559),
    m = n(356659),
    h = n(285006),
    p = n(491836);
function f(e, t) {
    let { applicationAudioEnabled: n, voiceAudioEnabled: l, soundboardAudioEnabled: a, isVoiceClip: i } = t;
    if (!i && n && l && a)
        if (e.includes(m.zh.ALL)) return !1;
        else return !0;
    return e.includes(m.zh.APPLICATION) ? !n : e.includes(m.zh.VOICE) ? !l : !e.includes(m.zh.SOUNDBOARD) || !a;
}
function v(e) {
    let { setRef: t, audioTrackLabel: n, src: i, muted: r } = e,
        s = a.useCallback(
            (e) => {
                t(e, n);
            },
            [t, n],
        ),
        o = a.useCallback(
            (e) => {
                Object.values(e.currentTarget.audioTracks).forEach((e) => {
                    e.enabled = n === e.label;
                });
            },
            [n],
        );
    return (0, l.jsx)("audio", {
        id: "ClipsPlayerAudioTrack:".concat(n),
        ref: s,
        src: null != i ? i : void 0,
        muted: r,
        preload: "auto",
        className: p.hidden,
        onLoadedMetadata: o,
    });
}
let g = a.forwardRef(function (e, t) {
    let { clip: n, applicationAudioEnabled: g, voiceAudioEnabled: b, soundboardAudioEnabled: j } = e,
        { cropStart: x, cropEnd: y, setVideoPlayerRef: C, videoURL: k, audioURL: N } = (0, d.D)(),
        E = a.useRef({}),
        w = a.useRef(!1),
        [S, I] = a.useState([]),
        O = a.useCallback(() => {
            let e = E.current.main;
            if (null == e) return;
            let t = (0, i.round)(e.currentTime, 3),
                n = (0, i.round)(x, 3);
            if (t >= (null != y ? (0, i.round)(y, 3) : (0, i.round)(e.duration, 3)) || t < n) {
                for (let e of Object.values(E.current)) null != e && (e.currentTime = x);
                return !0;
            }
        }, [x, y]),
        T = a.useCallback((e) => {
            let t = [];
            for (let n of Object.values(e.currentTarget.audioTracks))
                n.label.includes(m.zh.APPLICATION)
                    ? (n.enabled = !0)
                    : n.label.includes(m.zh.VOICE) || n.label.includes(m.zh.SOUNDBOARD)
                      ? ((n.enabled = !1), t.includes(n.label) || t.push(n.label))
                      : (n.enabled = !1);
            I(t);
        }, []);
    (0, r.Z)(() => {
        w.current && O() && R();
    });
    let R = a.useCallback(() => {
            for (let e of ((w.current = !0), O(), Object.values(E.current))) null != e && e.play();
        }, [O]),
        P = a.useCallback(() => {
            for (let e of Object.values(E.current)) null != e && e.pause();
        }, []),
        A = a.useCallback((e) => {
            var t;
            for (let n of ((null == (t = E.current.main) ? void 0 : t.paused) && (w.current = !1),
            Object.values(E.current)))
                null != n && (n.currentTime = e);
        }, []),
        L = a.useCallback(() => {
            var e;
            (null == (e = E.current.main) ? void 0 : e.paused) ? R() : P();
        }, [R, P]),
        M = a.useCallback((e) => {
            E.current.main = e;
        }, []),
        D = a.useCallback((e, t) => {
            E.current[t] = e;
        }, []);
    a.useImperativeHandle(t, () => {
        let e = {
            play: R,
            seek: A,
            pause: P,
            videoElement: E.current.main,
        };
        return C(e), e;
    }, [R, A, P, C]);
    let U = a.useCallback(() => {
        A(x);
    }, [A, x]);
    if (null == k) return null;
    let Z = n.type === o.NJ.VOICE_CLIP;
    return (0, l.jsxs)("div", {
        className: h.clipsPlayer,
        children: [
            Z
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("audio", {
                              ref: M,
                              src: k,
                              muted: !0,
                              preload: "auto",
                          }),
                          (0, l.jsx)(u.Z, { className: h.displayVideo }),
                      ],
                  })
                : (0, l.jsx)(s.Z, {
                      onClick: L,
                      className: h.displayVideo,
                      ref: M,
                      src: k,
                      muted: f(":all", {
                          applicationAudioEnabled: g,
                          voiceAudioEnabled: b,
                          soundboardAudioEnabled: j,
                          isVoiceClip: Z,
                      }),
                      preload: "auto",
                      onLoadedData: U,
                  }),
            (0, l.jsx)(c.i, {
                soundboardAudioEnabled: j,
                voiceAudioEnabled: b,
                clip: n,
            }),
            (0, l.jsx)("audio", {
                id: "ClipsPlayerAudioTrack:application",
                src: null != N ? N : void 0,
                muted: f(":application", {
                    applicationAudioEnabled: g,
                    voiceAudioEnabled: b,
                    soundboardAudioEnabled: j,
                    isVoiceClip: Z,
                }),
                className: p.hidden,
                preload: "auto",
                ref: (e) => D(e, "main:application"),
                onLoadedMetadata: T,
            }),
            S.map((e) =>
                (0, l.jsx)(
                    v,
                    {
                        setRef: D,
                        audioTrackLabel: e,
                        src: N,
                        muted: f(e, {
                            applicationAudioEnabled: g,
                            voiceAudioEnabled: b,
                            soundboardAudioEnabled: j,
                            isVoiceClip: Z,
                        }),
                    },
                    e,
                ),
            ),
        ],
    });
});

l.d(t, { A: () => w }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(735438),
    c = l.n(r),
    o = l(194498),
    u = l(607470),
    d = l(372684),
    m = l(176781),
    h = l(941682);
function f(e) {
    let { className: t } = e;
    return (0, n.jsx)("div", {
        className: s()(h.L, t),
        children: (0, n.jsx)(m.x, { size: "lg", color: "currentColor" }),
    });
}
var p = l(367974),
    x = l(376595),
    v = l(773503),
    g = l(362081);
let j = [],
    b = [];
function y() {
    let { subscribe: e, soundboardAudioEnabled: t, voiceAudioEnabled: l, clip: i } = (0, g.T)(),
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
            speakingUserIds: l ? d.speakingUserIds : j,
            activeSoundboards: t ? d.activeSoundboards : b,
            userIds: i.users,
            guildId: i.guildId,
            channelId: i.channelId,
        })
    );
}
var C = l(696016),
    E = l(594731),
    A = l(70585);
function N(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: n, soundboardAudioEnabled: a, isVoiceClip: i } = t;
    if (!i && l && n && a)
        if (e.includes(C.gC.ALL)) return !1;
        else return !0;
    return e.includes(C.gC.APPLICATION) ? !l : e.includes(C.gC.VOICE) ? !n : !e.includes(C.gC.SOUNDBOARD) || !a;
}
function k(e) {
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
        className: A.R,
        onLoadedMetadata: c,
    });
}
let w = a.forwardRef(function (e, t) {
    let { overlay: l, cropFraming: i, frameAspectRatio: c } = e,
        {
            cropStart: m,
            cropEnd: h,
            setVideoPlayerRef: x,
            videoURL: v,
            audioURL: j,
            applicationAudioEnabled: b,
            voiceAudioEnabled: w,
            soundboardAudioEnabled: R,
            clip: T,
        } = (0, g.T)(),
        L = a.useRef({}),
        I = a.useRef(!1),
        [O, D] = a.useState([]),
        M = a.useCallback(() => {
            let e = L.current.main;
            if (null == e) return;
            let t = (0, r.round)(e.currentTime, 3),
                l = (0, r.round)(m, 3);
            if (t >= (null != h ? (0, r.round)(h, 3) : (0, r.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(L.current)) null != e && (e.currentTime = m);
                return !0;
            }
        }, [m, h]),
        _ = a.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(C.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(C.gC.VOICE) || l.label.includes(C.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            D(t);
        }, []);
    (0, o.A)(() => {
        I.current && M() && S();
    });
    let S = a.useCallback(() => {
            for (let e of ((I.current = !0), M(), Object.values(L.current))) null != e && e.play();
        }, [M]),
        P = a.useCallback(() => {
            for (let e of Object.values(L.current)) null != e && e.pause();
        }, []),
        G = a.useCallback((e) => {
            for (let t of (L.current.main?.paused && (I.current = !1), Object.values(L.current)))
                null != t && (t.currentTime = e);
        }, []),
        U = a.useCallback(() => {
            L.current.main?.paused ? S() : P();
        }, [S, P]),
        z = a.useCallback((e) => {
            L.current.main = e;
        }, []),
        B = a.useCallback((e, t) => {
            L.current[t] = e;
        }, []);
    a.useImperativeHandle(t, () => {
        let e = { play: S, seek: G, pause: P, videoElement: L.current.main };
        return x(e), e;
    }, [S, G, P, x]);
    let $ = a.useCallback(() => {
        G(m);
    }, [G, m]);
    if (
        (a.useLayoutEffect(() => {
            let e = L.current;
            return () => {
                for (let t of Object.values(e)) (0, p.A)(t);
            };
        }, []),
        null == v)
    )
        return null;
    let H = T.type === d.nQ.VOICE_CLIP,
        V = !0 === i && !H && null != c;
    return (0, n.jsxs)("div", {
        className: s()(E.DV, V && E.Ln),
        children: [
            H
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("audio", { ref: z, src: v, muted: !0, preload: "auto" }),
                          (0, n.jsx)(f, { className: E.Ap }),
                      ],
                  })
                : (0, n.jsx)(u.A, {
                      onClick: U,
                      className: s()(E.Ap, V && E.HU),
                      style: V ? { aspectRatio: c } : void 0,
                      ref: z,
                      src: v,
                      muted: N(":all", {
                          applicationAudioEnabled: b,
                          voiceAudioEnabled: w,
                          soundboardAudioEnabled: R,
                          isVoiceClip: H,
                      }),
                      preload: "auto",
                      onLoadedData: $,
                  }),
            (0, n.jsx)(y, {}),
            l,
            (0, n.jsx)("audio", {
                id: "ClipsPlayerAudioTrack:application",
                src: j ?? void 0,
                muted: N(":application", {
                    applicationAudioEnabled: b,
                    voiceAudioEnabled: w,
                    soundboardAudioEnabled: R,
                    isVoiceClip: H,
                }),
                className: A.R,
                preload: "auto",
                ref: (e) => B(e, "main:application"),
                onLoadedMetadata: _,
            }),
            O.map((e) =>
                (0, n.jsx)(
                    k,
                    {
                        setRef: B,
                        audioTrackLabel: e,
                        src: j,
                        muted: N(e, {
                            applicationAudioEnabled: b,
                            voiceAudioEnabled: w,
                            soundboardAudioEnabled: R,
                            isVoiceClip: H,
                        }),
                    },
                    e,
                ),
            ),
        ],
    });
});

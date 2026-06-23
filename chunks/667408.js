l.d(t, { A: () => N }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(735438),
    c = l.n(r),
    o = l(194498),
    u = l(607470),
    d = l(372684),
    m = l(226421),
    h = l(367974),
    f = l(376595),
    p = l(773503),
    x = l(362081);
let v = [],
    g = [];
function j() {
    let { subscribe: e, soundboardAudioEnabled: t, voiceAudioEnabled: l, clip: i } = (0, x.T)(),
        s = i.decision?.timestamp ?? 0,
        r = a.useMemo(() => new f.H(i.timeline ?? []), [i.timeline]),
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
        (0, n.jsx)(p.A, {
            speakingUserIds: l ? d.speakingUserIds : v,
            activeSoundboards: t ? d.activeSoundboards : g,
            userIds: i.users,
            guildId: i.guildId,
            channelId: i.channelId,
        })
    );
}
var b = l(696016),
    y = l(97451),
    C = l(813433);
function E(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: n, soundboardAudioEnabled: a, isVoiceClip: i } = t;
    if (!i && l && n && a)
        if (e.includes(b.gC.ALL)) return !1;
        else return !0;
    return e.includes(b.gC.APPLICATION) ? !l : e.includes(b.gC.VOICE) ? !n : !e.includes(b.gC.SOUNDBOARD) || !a;
}
function A(e) {
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
        className: C.R,
        onLoadedMetadata: c,
    });
}
let N = a.forwardRef(function (e, t) {
    let { overlay: l, cropFraming: i, frameAspectRatio: c } = e,
        {
            cropStart: f,
            cropEnd: p,
            setVideoPlayerRef: v,
            videoURL: g,
            audioURL: N,
            applicationAudioEnabled: k,
            voiceAudioEnabled: w,
            soundboardAudioEnabled: R,
            clip: T,
        } = (0, x.T)(),
        L = a.useRef({}),
        I = a.useRef(!1),
        [O, D] = a.useState([]),
        _ = a.useCallback(() => {
            let e = L.current.main;
            if (null == e) return;
            let t = (0, r.round)(e.currentTime, 3),
                l = (0, r.round)(f, 3);
            if (t >= (null != p ? (0, r.round)(p, 3) : (0, r.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(L.current)) null != e && (e.currentTime = f);
                return !0;
            }
        }, [f, p]),
        M = a.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(b.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(b.gC.VOICE) || l.label.includes(b.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            D(t);
        }, []);
    (0, o.A)(() => {
        I.current && _() && S();
    });
    let S = a.useCallback(() => {
            for (let e of ((I.current = !0), _(), Object.values(L.current))) null != e && e.play();
        }, [_]),
        P = a.useCallback(() => {
            for (let e of Object.values(L.current)) null != e && e.pause();
        }, []),
        z = a.useCallback((e) => {
            for (let t of (L.current.main?.paused && (I.current = !1), Object.values(L.current)))
                null != t && (t.currentTime = e);
        }, []),
        U = a.useCallback(() => {
            L.current.main?.paused ? S() : P();
        }, [S, P]),
        G = a.useCallback((e) => {
            L.current.main = e;
        }, []),
        B = a.useCallback((e, t) => {
            L.current[t] = e;
        }, []);
    a.useImperativeHandle(t, () => {
        let e = { play: S, seek: z, pause: P, videoElement: L.current.main };
        return v(e), e;
    }, [S, z, P, v]);
    let $ = a.useCallback(() => {
        z(f);
    }, [z, f]);
    if (
        (a.useLayoutEffect(() => {
            let e = L.current;
            return () => {
                for (let t of Object.values(e)) (0, h.A)(t);
            };
        }, []),
        null == g)
    )
        return null;
    let V = T.type === d.nQ.VOICE_CLIP,
        F = !0 === i && !V && null != c;
    return (0, n.jsxs)("div", {
        className: s()(y.DV, F && y.Ln),
        children: [
            V
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("audio", { ref: G, src: g, muted: !0, preload: "auto" }),
                          (0, n.jsx)(m.A, { className: y.Ap }),
                      ],
                  })
                : (0, n.jsx)(u.A, {
                      onClick: U,
                      className: s()(y.Ap, F && y.HU),
                      style: F ? { aspectRatio: c } : void 0,
                      ref: G,
                      src: g,
                      muted: E(":all", {
                          applicationAudioEnabled: k,
                          voiceAudioEnabled: w,
                          soundboardAudioEnabled: R,
                          isVoiceClip: V,
                      }),
                      preload: "auto",
                      onLoadedData: $,
                  }),
            (0, n.jsx)(j, {}),
            l,
            (0, n.jsx)("audio", {
                id: "ClipsPlayerAudioTrack:application",
                src: N ?? void 0,
                muted: E(":application", {
                    applicationAudioEnabled: k,
                    voiceAudioEnabled: w,
                    soundboardAudioEnabled: R,
                    isVoiceClip: V,
                }),
                className: C.R,
                preload: "auto",
                ref: (e) => B(e, "main:application"),
                onLoadedMetadata: M,
            }),
            O.map((e) =>
                (0, n.jsx)(
                    A,
                    {
                        setRef: B,
                        audioTrackLabel: e,
                        src: N,
                        muted: E(e, {
                            applicationAudioEnabled: k,
                            voiceAudioEnabled: w,
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

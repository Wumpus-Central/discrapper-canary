l.d(t, { A: () => A }), l(321073);
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
    h = l(376595),
    f = l(773503),
    p = l(429364);
let x = [],
    v = [];
function g() {
    let { subscribe: e, soundboardAudioEnabled: t, voiceAudioEnabled: l, clip: i } = (0, p.T)(),
        s = i.decision?.timestamp ?? 0,
        r = a.useMemo(() => new h.H(i.timeline ?? []), [i.timeline]),
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
        (0, n.jsx)(f.A, {
            speakingUserIds: l ? d.speakingUserIds : x,
            activeSoundboards: t ? d.activeSoundboards : v,
            userIds: i.users,
            guildId: i.guildId,
            channelId: i.channelId,
        })
    );
}
var j = l(696016),
    b = l(97451),
    y = l(813433);
function C(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: n, soundboardAudioEnabled: a, isVoiceClip: i } = t;
    if (!i && l && n && a)
        if (e.includes(j.gC.ALL)) return !1;
        else return !0;
    return e.includes(j.gC.APPLICATION) ? !l : e.includes(j.gC.VOICE) ? !n : !e.includes(j.gC.SOUNDBOARD) || !a;
}
function E(e) {
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
        className: y.R,
        onLoadedMetadata: c,
    });
}
let A = a.forwardRef(function (e, t) {
    let { overlay: l, cropFraming: i, frameAspectRatio: c } = e,
        {
            cropStart: h,
            cropEnd: f,
            setVideoPlayerRef: x,
            videoURL: v,
            audioURL: A,
            applicationAudioEnabled: N,
            voiceAudioEnabled: k,
            soundboardAudioEnabled: w,
            clip: R,
        } = (0, p.T)(),
        T = a.useRef({}),
        L = a.useRef(!1),
        [I, O] = a.useState([]),
        D = a.useCallback(() => {
            let e = T.current.main;
            if (null == e) return;
            let t = (0, r.round)(e.currentTime, 3),
                l = (0, r.round)(h, 3);
            if (t >= (null != f ? (0, r.round)(f, 3) : (0, r.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(T.current)) null != e && (e.currentTime = h);
                return !0;
            }
        }, [h, f]),
        _ = a.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(j.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(j.gC.VOICE) || l.label.includes(j.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            O(t);
        }, []);
    (0, o.A)(() => {
        L.current && D() && M();
    });
    let M = a.useCallback(() => {
            for (let e of ((L.current = !0), D(), Object.values(T.current))) null != e && e.play();
        }, [D]),
        S = a.useCallback(() => {
            for (let e of Object.values(T.current)) null != e && e.pause();
        }, []),
        P = a.useCallback((e) => {
            for (let t of (T.current.main?.paused && (L.current = !1), Object.values(T.current)))
                null != t && (t.currentTime = e);
        }, []),
        z = a.useCallback(() => {
            T.current.main?.paused ? M() : S();
        }, [M, S]),
        U = a.useCallback((e) => {
            T.current.main = e;
        }, []),
        G = a.useCallback((e, t) => {
            T.current[t] = e;
        }, []);
    a.useImperativeHandle(t, () => {
        let e = { play: M, seek: P, pause: S, videoElement: T.current.main };
        return x(e), e;
    }, [M, P, S, x]);
    let B = a.useCallback(() => {
        P(h);
    }, [P, h]);
    if (null == v) return null;
    let $ = R.type === d.nQ.VOICE_CLIP,
        V = !0 === i && !$ && null != c;
    return (0, n.jsxs)("div", {
        className: s()(b.DV, V && b.Ln),
        children: [
            $
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("audio", { ref: U, src: v, muted: !0, preload: "auto" }),
                          (0, n.jsx)(m.A, { className: b.Ap }),
                      ],
                  })
                : (0, n.jsx)(u.A, {
                      onClick: z,
                      className: s()(b.Ap, V && b.HU),
                      style: V ? { aspectRatio: c } : void 0,
                      ref: U,
                      src: v,
                      muted: C(":all", {
                          applicationAudioEnabled: N,
                          voiceAudioEnabled: k,
                          soundboardAudioEnabled: w,
                          isVoiceClip: $,
                      }),
                      preload: "auto",
                      onLoadedData: B,
                  }),
            (0, n.jsx)(g, {}),
            l,
            (0, n.jsx)("audio", {
                id: "ClipsPlayerAudioTrack:application",
                src: A ?? void 0,
                muted: C(":application", {
                    applicationAudioEnabled: N,
                    voiceAudioEnabled: k,
                    soundboardAudioEnabled: w,
                    isVoiceClip: $,
                }),
                className: y.R,
                preload: "auto",
                ref: (e) => G(e, "main:application"),
                onLoadedMetadata: _,
            }),
            I.map((e) =>
                (0, n.jsx)(
                    E,
                    {
                        setRef: G,
                        audioTrackLabel: e,
                        src: A,
                        muted: C(e, {
                            applicationAudioEnabled: N,
                            voiceAudioEnabled: k,
                            soundboardAudioEnabled: w,
                            isVoiceClip: $,
                        }),
                    },
                    e,
                ),
            ),
        ],
    });
});

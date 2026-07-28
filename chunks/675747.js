l.d(t, { A: () => A }), l(321073);
var n = l(477900),
    a = l(582128),
    i = l(503698),
    s = l.n(i),
    r = l(435558),
    c = l.n(r),
    o = l(972117),
    u = l(607470),
    d = l(372684),
    m = l(176781),
    h = l(730730);
function f(e) {
    let { className: t } = e;
    return (0, n.jsx)("div", {
        className: s()(h.L, t),
        children: (0, n.jsx)(m.x, { size: "lg", color: "currentColor" }),
    });
}
var x = l(367974),
    v = l(376595),
    p = l(773503),
    j = l(362081);
let g = [],
    b = [];
function C() {
    let { subscribe: e, soundboardAudioEnabled: t, voiceAudioEnabled: l, clip: i } = (0, j.T)(),
        s = i.decision?.timestamp ?? 0,
        r = a.useMemo(() => new v.H(i.timeline ?? []), [i.timeline]),
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
            speakingUserIds: l ? d.speakingUserIds : g,
            activeSoundboards: t ? d.activeSoundboards : b,
            userIds: i.users,
            guildId: i.guildId,
            channelId: i.channelId,
        })
    );
}
var y = l(696016),
    N = l(884003),
    E = l(344801);
function k(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: n, soundboardAudioEnabled: a, isVoiceClip: i } = t;
    if (!i && l && n && a)
        if (e.includes(y.gC.ALL)) return !1;
        else return !0;
    return e.includes(y.gC.APPLICATION) ? !l : e.includes(y.gC.VOICE) ? !n : !e.includes(y.gC.SOUNDBOARD) || !a;
}
function w(e) {
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
        className: E.R,
        onLoadedMetadata: c,
    });
}
let A = a.forwardRef(function (e, t) {
    let { overlay: l, cropFraming: i, frameAspectRatio: c, loop: m = !0 } = e,
        {
            cropStart: h,
            cropEnd: v,
            setVideoPlayerRef: p,
            videoURL: g,
            audioURL: b,
            applicationAudioEnabled: A,
            voiceAudioEnabled: L,
            soundboardAudioEnabled: R,
            clip: T,
        } = (0, j.T)(),
        M = a.useRef({}),
        I = a.useRef(!1),
        [D, S] = a.useState([]),
        O = a.useCallback(() => {
            let e = M.current.main;
            if (null == e) return;
            let t = (0, r.round)(e.currentTime, 3),
                l = (0, r.round)(h, 3);
            if (t >= (null != v ? (0, r.round)(v, 3) : (0, r.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(M.current)) null != e && (e.currentTime = h);
                return !0;
            }
        }, [h, v]),
        P = a.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(y.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(y.gC.VOICE) || l.label.includes(y.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            S(t);
        }, []),
        _ = a.useCallback(() => {
            for (let e of ((I.current = !0), O(), Object.values(M.current))) null != e && e.play();
        }, [O]),
        z = a.useCallback(() => {
            for (let e of Object.values(M.current)) null != e && e.pause();
        }, []);
    (0, o.A)(() => {
        if (I.current) {
            if (!m) {
                let e = M.current.main;
                if (null != e) {
                    let t = null != v ? (0, r.round)(v, 3) : (0, r.round)(e.duration, 3);
                    if ((0, r.round)(e.currentTime, 3) >= t) {
                        z(), (I.current = !1);
                        return;
                    }
                }
            }
            O() && _();
        }
    });
    let U = a.useCallback((e) => {
            for (let t of (M.current.main?.paused && (I.current = !1), Object.values(M.current)))
                null != t && (t.currentTime = e);
        }, []),
        $ = a.useCallback(() => {
            M.current.main?.paused ? _() : z();
        }, [_, z]),
        B = a.useCallback((e) => {
            M.current.main = e;
        }, []),
        G = a.useCallback((e, t) => {
            M.current[t] = e;
        }, []);
    a.useImperativeHandle(t, () => {
        let e = { play: _, seek: U, pause: z, videoElement: M.current.main };
        return p(e), e;
    }, [_, U, z, p]);
    let H = a.useCallback(() => {
        U(h);
    }, [U, h]);
    if (
        (a.useLayoutEffect(() => {
            let e = M.current;
            return () => {
                for (let t of Object.values(e)) (0, x.A)(t);
            };
        }, []),
        null == g)
    )
        return null;
    let F = T.type === d.nQ.VOICE_CLIP,
        K = !0 === i && !F && null != c;
    return (0, n.jsxs)("div", {
        className: s()(N.DV, K && N.Ln),
        children: [
            F
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("audio", { ref: B, src: g, muted: !0, preload: "auto" }),
                          (0, n.jsx)(f, { className: N.Ap }),
                      ],
                  })
                : (0, n.jsx)(u.A, {
                      onClick: $,
                      className: s()(N.Ap, K && N.HU),
                      style: K ? { aspectRatio: c } : void 0,
                      ref: B,
                      src: g,
                      muted: k(":all", {
                          applicationAudioEnabled: A,
                          voiceAudioEnabled: L,
                          soundboardAudioEnabled: R,
                          isVoiceClip: F,
                      }),
                      preload: "auto",
                      onLoadedData: H,
                  }),
            (0, n.jsx)(C, {}),
            l,
            (0, n.jsx)("audio", {
                id: "ClipsPlayerAudioTrack:application",
                src: b ?? void 0,
                muted: k(":application", {
                    applicationAudioEnabled: A,
                    voiceAudioEnabled: L,
                    soundboardAudioEnabled: R,
                    isVoiceClip: F,
                }),
                className: E.R,
                preload: "auto",
                ref: (e) => G(e, "main:application"),
                onLoadedMetadata: P,
            }),
            D.map((e) =>
                (0, n.jsx)(
                    w,
                    {
                        setRef: G,
                        audioTrackLabel: e,
                        src: b,
                        muted: k(e, {
                            applicationAudioEnabled: A,
                            voiceAudioEnabled: L,
                            soundboardAudioEnabled: R,
                            isVoiceClip: F,
                        }),
                    },
                    e,
                ),
            ),
        ],
    });
});

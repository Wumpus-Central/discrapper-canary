l.d(t, { A: () => w }), l(321073);
var n = l(477900),
    a = l(582128),
    i = l(503698),
    s = l.n(i),
    r = l(435558),
    c = l.n(r),
    o = l(972117),
    u = l(607470),
    d = l(176781),
    m = l(730730);
function f(e) {
    let { className: t } = e;
    return (0, n.jsx)("div", {
        className: s()(m.L, t),
        children: (0, n.jsx)(d.x, { size: "lg", color: "currentColor" }),
    });
}
var h = l(367974),
    x = l(376595),
    v = l(773503),
    p = l(362081);
let g = [],
    j = [];
function C() {
    let { subscribe: e, soundboardAudioEnabled: t, voiceAudioEnabled: l, clip: i } = (0, p.T)(),
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
            speakingUserIds: l ? d.speakingUserIds : g,
            activeSoundboards: t ? d.activeSoundboards : j,
            userIds: i.users,
            guildId: i.guildId,
            channelId: i.channelId,
        })
    );
}
var b = l(696016),
    y = l(884003),
    E = l(344801);
function N(e, t) {
    let { applicationAudioEnabled: l, voiceAudioEnabled: n, soundboardAudioEnabled: a, isVoiceClip: i } = t;
    if (!i && l && n && a)
        if (e.includes(b.gC.ALL)) return !1;
        else return !0;
    return e.includes(b.gC.APPLICATION) ? !l : e.includes(b.gC.VOICE) ? !n : !e.includes(b.gC.SOUNDBOARD) || !a;
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
        className: E.R,
        onLoadedMetadata: c,
    });
}
let w = a.forwardRef(function (e, t) {
    let { overlay: l, cropFraming: i, frameAspectRatio: c, loop: d = !0 } = e,
        {
            cropStart: m,
            cropEnd: x,
            setVideoPlayerRef: v,
            videoURL: g,
            audioURL: j,
            applicationAudioEnabled: w,
            voiceAudioEnabled: A,
            soundboardAudioEnabled: L,
            clip: R,
        } = (0, p.T)(),
        T = a.useRef({}),
        I = a.useRef(!1),
        [M, D] = a.useState([]),
        S = a.useCallback(() => {
            let e = T.current.main;
            if (null == e) return;
            let t = (0, r.round)(e.currentTime, 3),
                l = (0, r.round)(m, 3);
            if (t >= (null != x ? (0, r.round)(x, 3) : (0, r.round)(e.duration, 3)) || t < l) {
                for (let e of Object.values(T.current)) null != e && (e.currentTime = m);
                return !0;
            }
        }, [m, x]),
        O = a.useCallback((e) => {
            let t = [];
            for (let l of Object.values(e.currentTarget.audioTracks))
                l.label.includes(b.gC.APPLICATION)
                    ? (l.enabled = !0)
                    : l.label.includes(b.gC.VOICE) || l.label.includes(b.gC.SOUNDBOARD)
                      ? ((l.enabled = !1), t.includes(l.label) || t.push(l.label))
                      : (l.enabled = !1);
            D(t);
        }, []),
        P = a.useCallback(() => {
            for (let e of ((I.current = !0), S(), Object.values(T.current))) null != e && e.play();
        }, [S]),
        _ = a.useCallback(() => {
            for (let e of Object.values(T.current)) null != e && e.pause();
        }, []);
    (0, o.A)(() => {
        if (I.current) {
            if (!d) {
                let e = T.current.main;
                if (null != e) {
                    let t = null != x ? (0, r.round)(x, 3) : (0, r.round)(e.duration, 3);
                    if ((0, r.round)(e.currentTime, 3) >= t) {
                        _(), (I.current = !1);
                        return;
                    }
                }
            }
            S() && P();
        }
    });
    let z = a.useCallback((e) => {
            for (let t of (T.current.main?.paused && (I.current = !1), Object.values(T.current)))
                null != t && (t.currentTime = e);
        }, []),
        U = a.useCallback(() => {
            T.current.main?.paused ? P() : _();
        }, [P, _]),
        $ = a.useCallback((e) => {
            T.current.main = e;
        }, []),
        B = a.useCallback((e, t) => {
            T.current[t] = e;
        }, []);
    a.useImperativeHandle(t, () => {
        let e = { play: P, seek: z, pause: _, videoElement: T.current.main };
        return v(e), e;
    }, [P, z, _, v]);
    let G = a.useCallback(() => {
        z(m);
    }, [z, m]);
    if (
        (a.useLayoutEffect(() => {
            let e = T.current;
            return () => {
                for (let t of Object.values(e)) (0, h.A)(t);
            };
        }, []),
        null == g)
    )
        return null;
    let H = R.type === b.nQ.VOICE_CLIP,
        V = !0 === i && !H && null != c;
    return (0, n.jsxs)("div", {
        className: s()(y.DV, V && y.Ln),
        children: [
            H
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("audio", { ref: $, src: g, muted: !0, preload: "auto" }),
                          (0, n.jsx)(f, { className: y.Ap }),
                      ],
                  })
                : (0, n.jsx)(u.A, {
                      onClick: U,
                      className: s()(y.Ap, V && y.HU),
                      style: V ? { aspectRatio: c } : void 0,
                      ref: $,
                      src: g,
                      muted: N(":all", {
                          applicationAudioEnabled: w,
                          voiceAudioEnabled: A,
                          soundboardAudioEnabled: L,
                          isVoiceClip: H,
                      }),
                      preload: "auto",
                      onLoadedData: G,
                  }),
            (0, n.jsx)(C, {}),
            l,
            (0, n.jsx)("audio", {
                id: "ClipsPlayerAudioTrack:application",
                src: j ?? void 0,
                muted: N(":application", {
                    applicationAudioEnabled: w,
                    voiceAudioEnabled: A,
                    soundboardAudioEnabled: L,
                    isVoiceClip: H,
                }),
                className: E.R,
                preload: "auto",
                ref: (e) => B(e, "main:application"),
                onLoadedMetadata: O,
            }),
            M.map((e) =>
                (0, n.jsx)(
                    k,
                    {
                        setRef: B,
                        audioTrackLabel: e,
                        src: j,
                        muted: N(e, {
                            applicationAudioEnabled: w,
                            voiceAudioEnabled: A,
                            soundboardAudioEnabled: L,
                            isVoiceClip: H,
                        }),
                    },
                    e,
                ),
            ),
        ],
    });
});

a.d(t, { Z: () => d }), a(47120), a(653041);
var n = a(200651),
    l = a(192379),
    i = a(392711),
    r = a(98650),
    o = a(70097),
    s = a(969318);
function u(e) {
    let { setRef: t, audioTrackLabel: a, src: i, muted: r } = e,
        o = l.useCallback(
            (e) => {
                t(e, a);
            },
            [t, a]
        ),
        u = l.useCallback(
            (e) => {
                Object.values(e.currentTarget.audioTracks).forEach((e) => {
                    e.enabled = a === e.label;
                });
            },
            [a]
        );
    return (0, n.jsx)('audio', {
        id: 'ClipsPlayerAudioTrack:'.concat(a),
        className: s.hidden,
        ref: o,
        src: i,
        muted: r,
        preload: 'auto',
        onLoadedMetadata: u
    });
}
let d = l.forwardRef(function (e, t) {
    let { src: a, audioSrc: d, applicationAudioEnabled: c, voiceAudioEnabled: m, isLoading: p, onDoneLoading: v, startTime: f = 0, endTime: h } = e,
        x = l.useRef({}),
        [g, _] = l.useState([]),
        j = l.useRef(!1),
        C = l.useCallback(() => {
            let e = x.current.main;
            if (null == e) return;
            let t = (0, i.round)(e.currentTime, 3),
                a = (0, i.round)(f, 3);
            if (t >= (null != h ? (0, i.round)(h, 3) : (0, i.round)(e.duration, 3)) || t < a) {
                for (let e of Object.values(x.current)) null != e && (e.currentTime = f);
                return !0;
            }
        }, [f, h]);
    (0, r.Z)(() => {
        j.current && C() && b();
    });
    let b = l.useCallback(() => {
            for (let e of ((j.current = !0), C(), Object.values(x.current))) null != e && e.play();
        }, [C]),
        w = l.useCallback(() => {
            for (let e of Object.values(x.current)) null != e && e.pause();
        }, []),
        y = l.useCallback((e) => {
            var t;
            for (let a of ((null === (t = x.current.main) || void 0 === t ? void 0 : t.paused) && (j.current = !1), Object.values(x.current))) null != a && (a.currentTime = e);
        }, []),
        k = l.useCallback(() => {
            var e;
            (null === (e = x.current.main) || void 0 === e ? void 0 : e.paused) ? b() : w();
        }, [b, w]),
        N = l.useCallback((e) => {
            x.current.main = e;
        }, []),
        S = l.useCallback((e) => {
            let t = [];
            for (let a of Object.values(e.currentTarget.audioTracks)) a.label.includes(':application') ? (a.enabled = !0) : a.label.includes(':voice') ? ((a.enabled = !1), t.includes(a.label) || t.push(a.label)) : (a.enabled = !1);
            _(t);
        }, []),
        R = l.useCallback((e, t) => {
            x.current[t] = e;
        }, []);
    return (l.useImperativeHandle(t, () => ({
        play: b,
        seek: y,
        pause: w,
        videoElement: x.current.main
    })),
    null == a)
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(o.Z, {
                      onClick: k,
                      className: p ? s.hidden : s.displayVideo,
                      ref: N,
                      src: a,
                      muted: !0,
                      onLoadedData: v,
                      preload: 'auto'
                  }),
                  (0, n.jsx)('audio', {
                      id: 'ClipsPlayerAudioTrack:application',
                      src: d,
                      muted: !c,
                      preload: 'auto',
                      className: s.hidden,
                      ref: (e) => R(e, 'application'),
                      onLoadedMetadata: S
                  }),
                  g.map((e) =>
                      (0, n.jsx)(
                          u,
                          {
                              audioTrackLabel: e,
                              setRef: R,
                              src: d,
                              muted: !m
                          },
                          e
                      )
                  )
              ]
          });
});

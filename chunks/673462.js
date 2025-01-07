n(47120), n(653041);
var a = n(200651),
    l = n(192379),
    i = n(392711),
    r = n(98650),
    o = n(70097),
    s = n(927932);
function u(e) {
    let { setRef: t, audioTrackLabel: n, src: i, muted: r } = e,
        o = l.useCallback(
            (e) => {
                t(e, n);
            },
            [t, n]
        ),
        u = l.useCallback(
            (e) => {
                Object.values(e.currentTarget.audioTracks).forEach((e) => {
                    e.enabled = n === e.label;
                });
            },
            [n]
        );
    return (0, a.jsx)('audio', {
        id: 'ClipsPlayerAudioTrack:'.concat(n),
        className: s.hidden,
        ref: o,
        src: i,
        muted: r,
        preload: 'auto',
        onLoadedMetadata: u
    });
}
t.Z = l.forwardRef(function (e, t) {
    let { src: n, audioSrc: d, applicationAudioEnabled: c, voiceAudioEnabled: m, isLoading: p, onDoneLoading: v, startTime: f = 0, endTime: b } = e,
        h = l.useRef({}),
        [x, g] = l.useState([]),
        j = l.useRef(!1),
        C = l.useCallback(() => {
            let e = h.current.main;
            if (null == e) return;
            let t = (0, i.round)(e.currentTime, 3),
                n = (0, i.round)(f, 3);
            if (t >= (null != b ? (0, i.round)(b, 3) : (0, i.round)(e.duration, 3)) || t < n) {
                for (let e of Object.values(h.current)) null != e && (e.currentTime = f);
                return !0;
            }
        }, [f, b]);
    (0, r.Z)(() => {
        j.current && C() && w();
    });
    let w = l.useCallback(() => {
            for (let e of ((j.current = !0), C(), Object.values(h.current))) null != e && e.play();
        }, [C]),
        y = l.useCallback(() => {
            for (let e of Object.values(h.current)) null != e && e.pause();
        }, []),
        _ = l.useCallback((e) => {
            var t;
            for (let n of ((null === (t = h.current.main) || void 0 === t ? void 0 : t.paused) && (j.current = !1), Object.values(h.current))) null != n && (n.currentTime = e);
        }, []),
        k = l.useCallback(() => {
            var e;
            (null === (e = h.current.main) || void 0 === e ? void 0 : e.paused) ? w() : y();
        }, [w, y]),
        S = l.useCallback((e) => {
            h.current.main = e;
        }, []),
        N = l.useCallback((e) => {
            let t = [];
            for (let n of Object.values(e.currentTarget.audioTracks)) n.label.includes(':application') ? (n.enabled = !0) : n.label.includes(':voice') ? ((n.enabled = !1), !t.includes(n.label) && t.push(n.label)) : (n.enabled = !1);
            g(t);
        }, []),
        T = l.useCallback((e, t) => {
            h.current[t] = e;
        }, []);
    return (l.useImperativeHandle(t, () => ({
        play: w,
        seek: _,
        pause: y,
        videoElement: h.current.main
    })),
    null == n)
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(o.Z, {
                      onClick: k,
                      className: p ? s.hidden : s.displayVideo,
                      ref: S,
                      src: n,
                      muted: !0,
                      onLoadedData: v,
                      preload: 'auto'
                  }),
                  (0, a.jsx)('audio', {
                      id: 'ClipsPlayerAudioTrack:application',
                      src: d,
                      muted: !c,
                      preload: 'auto',
                      className: s.hidden,
                      ref: (e) => T(e, 'application'),
                      onLoadedMetadata: N
                  }),
                  x.map((e) =>
                      (0, a.jsx)(
                          u,
                          {
                              audioTrackLabel: e,
                              setRef: T,
                              src: d,
                              muted: !m
                          },
                          e
                      )
                  )
              ]
          });
});

n.d(t, { Z: () => c }), n(388685), n(539854);
var r = n(200651),
    a = n(192379),
    l = n(392711),
    i = n(98650),
    o = n(70097),
    s = n(802887);
function u(e) {
    let { setRef: t, audioTrackLabel: n, src: l, muted: i } = e,
        o = a.useCallback(
            (e) => {
                t(e, n);
            },
            [t, n]
        ),
        u = a.useCallback(
            (e) => {
                Object.values(e.currentTarget.audioTracks).forEach((e) => {
                    e.enabled = n === e.label;
                });
            },
            [n]
        );
    return (0, r.jsx)('audio', {
        id: 'ClipsPlayerAudioTrack:'.concat(n),
        className: s.hidden,
        ref: o,
        src: l,
        muted: i,
        preload: 'auto',
        onLoadedMetadata: u
    });
}
let c = a.forwardRef(function (e, t) {
    let { src: n, audioSrc: c, applicationAudioEnabled: d, voiceAudioEnabled: m, isLoading: p, onDoneLoading: f, startTime: v = 0, endTime: h } = e,
        g = a.useRef({}),
        [x, b] = a.useState([]),
        j = a.useRef(!1),
        y = a.useCallback(() => {
            let e = g.current.main;
            if (null == e) return;
            let t = (0, l.round)(e.currentTime, 3),
                n = (0, l.round)(v, 3);
            if (t >= (null != h ? (0, l.round)(h, 3) : (0, l.round)(e.duration, 3)) || t < n) {
                for (let e of Object.values(g.current)) null != e && (e.currentTime = v);
                return !0;
            }
        }, [v, h]);
    (0, i.Z)(() => {
        j.current && y() && _();
    });
    let _ = a.useCallback(() => {
            for (let e of ((j.current = !0), y(), Object.values(g.current))) null != e && e.play();
        }, [y]),
        w = a.useCallback(() => {
            for (let e of Object.values(g.current)) null != e && e.pause();
        }, []),
        C = a.useCallback((e) => {
            var t;
            for (let n of ((null == (t = g.current.main) ? void 0 : t.paused) && (j.current = !1), Object.values(g.current))) null != n && (n.currentTime = e);
        }, []),
        N = a.useCallback(() => {
            var e;
            (null == (e = g.current.main) ? void 0 : e.paused) ? _() : w();
        }, [_, w]),
        k = a.useCallback((e) => {
            g.current.main = e;
        }, []),
        P = a.useCallback((e) => {
            let t = [];
            for (let n of Object.values(e.currentTarget.audioTracks)) n.label.includes(':application') ? (n.enabled = !0) : n.label.includes(':voice') ? ((n.enabled = !1), t.includes(n.label) || t.push(n.label)) : (n.enabled = !1);
            b(t);
        }, []),
        O = a.useCallback((e, t) => {
            g.current[t] = e;
        }, []);
    return (a.useImperativeHandle(t, () => ({
        play: _,
        seek: C,
        pause: w,
        videoElement: g.current.main
    })),
    null == n)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o.Z, {
                      onClick: N,
                      className: p ? s.hidden : s.displayVideo,
                      ref: k,
                      src: n,
                      muted: !0,
                      onLoadedData: f,
                      preload: 'auto'
                  }),
                  (0, r.jsx)('audio', {
                      id: 'ClipsPlayerAudioTrack:application',
                      src: c,
                      muted: !d,
                      preload: 'auto',
                      className: s.hidden,
                      ref: (e) => O(e, 'application'),
                      onLoadedMetadata: P
                  }),
                  x.map((e) =>
                      (0, r.jsx)(
                          u,
                          {
                              audioTrackLabel: e,
                              setRef: O,
                              src: c,
                              muted: !m
                          },
                          e
                      )
                  )
              ]
          });
});

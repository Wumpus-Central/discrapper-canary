n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(62170),
    o = n(19780),
    s = n(960048),
    c = n(627097),
    u = n(805422),
    d = n(390551),
    p = n(779324);
let f = () => {
    var e, t;
    let n = (0, l.e7)([o.Z], () => o.Z.getChannelId()),
        f = (0, l.e7)([u.Z], () => null != n && u.Z.isUserConnected(n)),
        h = (0, c.O)((e) => e.genre),
        g = (0, c.O)((e) => e.songIndex),
        m = (0, c.O)((e) => e.playRadio),
        b = (0, c.O)((e) => e.globalMute),
        y = (0, c.O)((e) => e.playNextSong),
        v = (0, c.O)((e) => e.volumes),
        O = i.useRef(null),
        j = i.useRef(null),
        x = i.useRef(null),
        C = (0, p.Z)(h, g),
        E = (0, l.e7)([u.Z], () => u.Z.assets);
    return (i.useEffect(() => {
        let e = O.current;
        if (null != e && (null == C ? void 0 : C.src) != null && (e.pause(), (e.src = C.src), !b && m && f)) {
            var t;
            null == (t = e.play()) ||
                t.catch((e) => {
                    s.Z.captureException(e);
                });
        }
    }, [null == C ? void 0 : C.src, b, m, f]),
    i.useEffect(() => {
        var e, t;
        let n = j.current,
            r = x.current;
        null != n &&
            (b || !f
                ? n.pause()
                : null == (e = n.play()) ||
                  e.catch((e) => {
                      s.Z.captureException(e);
                  })),
            null != r &&
                (b || !f
                    ? r.pause()
                    : null == (t = r.play()) ||
                      t.catch((e) => {
                          s.Z.captureException(e);
                      }));
    }, [b, f]),
    f)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(a.Z, {
                      ref: O,
                      onEnded: y,
                      volume: b ? 0 : v.radio,
                      children: (0, r.jsx)("source", { src: null == C ? void 0 : C.src }),
                  }),
                  (0, r.jsx)(a.Z, {
                      ref: j,
                      volume: b ? 0 : v.environment,
                      children: (0, r.jsx)("source", {
                          src: null == E || null == (e = E.sounds) ? void 0 : e[d.wv.ENVIRONMENT],
                      }),
                  }),
                  (0, r.jsx)(a.Z, {
                      ref: x,
                      volume: b ? 0 : v.campfire,
                      children: (0, r.jsx)("source", {
                          src: null == E || null == (t = E.sounds) ? void 0 : t[d.wv.CAMPFIRE],
                      }),
                  }),
              ],
          })
        : null;
};

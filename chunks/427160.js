n.d(t, { A: () => g }), n(321073);
var i = n(64700),
    l = n(451988),
    a = n(827734),
    s = n(397927),
    r = n(654107),
    o = n(977997),
    c = n(318937),
    d = n(533117),
    u = n(134753),
    h = n(666717),
    m = n(921652),
    A = n(139831);
n(824217);
let p = 1e3 / 60;
function g(e, t, n, g) {
    let f = (0, s.rdh)(a.A.unsafe_rawColors.BRAND_500).hex(),
        _ = (0, s.rdh)(a.A.unsafe_rawColors.BLACK).hex(),
        E = (0, s.rdh)(a.A.unsafe_rawColors.WHITE).hex(),
        C = i.useRef({}),
        x = i.useRef(new l.IX()),
        S = i.useCallback(
            (t) => {
                let n = d.A.getDrawables(t);
                (0, h.iV)(e),
                    (function (e) {
                        let {
                            canvasRef: t,
                            drawables: n,
                            fallbackColor: i,
                            linesDrawnAt: l,
                            streamerId: a,
                            channelId: s,
                            outlineColorDark: r,
                            outlineColorLight: d,
                        } = e;
                        if (0 === n.length) return;
                        let h = t.current;
                        if (null == h) return;
                        let p = h.getContext("2d");
                        if (null == p) return;
                        let { width: g, height: f } = h.getBoundingClientRect(),
                            _ = [];
                        n.forEach((e) => {
                            null == o.A.getVoiceStateForChannel(s, e.userId)
                                ? _.push(e)
                                : (function (e) {
                                      let {
                                          drawable: t,
                                          context: n,
                                          canvasWidth: i,
                                          canvasHeight: l,
                                          fallbackColor: a,
                                          outlineColorDark: s,
                                          outlineColorLight: r,
                                          linesDrawnAt: o,
                                          streamerId: c,
                                          deadDrawables: d,
                                      } = e;
                                      switch (t.type) {
                                          case u.Z.LINE:
                                              return (0, A.A)({
                                                  line: t,
                                                  context: n,
                                                  canvasWidth: i,
                                                  canvasHeight: l,
                                                  fallbackColor: a,
                                                  outlineColorDark: s,
                                                  outlineColorLight: r,
                                                  linesDrawnAt: o,
                                                  deadDrawables: d,
                                              });
                                          case u.Z.EMOJI_HOSE:
                                              return (0, m.A)({
                                                  emojiHose: t,
                                                  context: n,
                                                  canvasWidth: i,
                                                  canvasHeight: l,
                                                  fallbackColor: a,
                                                  outlineColorDark: s,
                                                  outlineColorLight: r,
                                                  streamerId: c,
                                                  deadDrawables: d,
                                              });
                                      }
                                  })({
                                      drawable: e,
                                      context: p,
                                      canvasWidth: g,
                                      canvasHeight: f,
                                      fallbackColor: i,
                                      outlineColorDark: r,
                                      outlineColorLight: d,
                                      linesDrawnAt: l,
                                      deadDrawables: _,
                                      streamerId: a,
                                  });
                        }),
                            _.length > 0 && (0, c.Nm)(_, a);
                    })({
                        canvasRef: e,
                        drawables: n,
                        fallbackColor: f,
                        linesDrawnAt: C,
                        streamerId: t,
                        outlineColorDark: _,
                        outlineColorLight: E,
                        channelId: g,
                    });
            },
            [e, g, f, _, E],
        );
    i.useEffect(() => {
        let t = new ResizeObserver(() => {
            let t = e.current;
            if (null == t) return;
            let { width: i, height: l } = t.getBoundingClientRect();
            (t.width = i * window.devicePixelRatio), (t.height = l * window.devicePixelRatio), S(n);
        });
        return null != e.current && t.observe(e.current), () => t.disconnect();
    }, [e, S, n]);
    let T = i.useCallback(() => {
        let t = d.A.getDrawables(n),
            i = m.m.getState().particles,
            l = t.length > 0 || Object.keys(i).length > 0;
        l &&
            null == x.current._ref &&
            (null == x.current._ref
                ? (S(n), x.current.start(p, () => S(n)))
                : l || null == x.current._ref || (x.current.stop(), (0, h.iV)(e)));
    }, [e, S, n]);
    i.useEffect(() => {
        let e = x.current;
        return (
            d.A.addChangeListener(T),
            T(),
            (0, r.l0)(t.getAvatarURL(null, 80)),
            () => {
                d.A.removeChangeListener(T), e.stop();
            }
        );
    });
}

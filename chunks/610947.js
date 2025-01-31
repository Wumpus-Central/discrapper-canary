n.d(t, { Z: () => v }), n(653041);
var i = n(192379),
    l = n(846519),
    a = n(692547),
    r = n(481060),
    s = n(220082),
    o = n(979651),
    c = n(125268),
    u = n(673125),
    d = n(984063),
    m = n(88315),
    f = n(262433),
    p = n(400321),
    h = n(813900);
let g = 1000 / 60;
function v(e, t, n, v) {
    let _ = (0, r.dQu)(a.Z.unsafe_rawColors.BRAND_500).hex(),
        S = (0, r.dQu)(a.Z.unsafe_rawColors.BLACK_500).hex(),
        I = (0, r.dQu)(a.Z.unsafe_rawColors.WHITE_500).hex(),
        x = i.useRef({}),
        E = i.useRef(new l.Xp()),
        C = i.useCallback(
            (t) => {
                let n = u.Z.getDrawables(t);
                (0, m.UN)(e),
                    (function (e) {
                        let { canvasRef: t, drawables: n, fallbackColor: i, linesDrawnAt: l, streamerId: a, channelId: r, outlineColorDark: s, outlineColorLight: u } = e;
                        if (0 === n.length) return;
                        let m = t.current;
                        if (null == m) return;
                        let h = m.getContext('2d');
                        if (null == h) return;
                        let { width: g, height: v } = m.getBoundingClientRect(),
                            _ = [];
                        n.forEach((e) => {
                            if (!(null != o.Z.getVoiceStateForChannel(r, e.userId))) {
                                _.push(e);
                                return;
                            }
                            !(function (e) {
                                let { drawable: t, context: n, canvasWidth: i, canvasHeight: l, fallbackColor: a, outlineColorDark: r, outlineColorLight: s, linesDrawnAt: o, streamerId: c, deadDrawables: u } = e;
                                switch (t.type) {
                                    case d.W.LINE:
                                        return (0, p.Z)({
                                            line: t,
                                            context: n,
                                            canvasWidth: i,
                                            canvasHeight: l,
                                            fallbackColor: a,
                                            outlineColorDark: r,
                                            outlineColorLight: s,
                                            linesDrawnAt: o,
                                            deadDrawables: u
                                        });
                                    case d.W.EMOJI_HOSE:
                                        return (0, f.Z)({
                                            emojiHose: t,
                                            context: n,
                                            canvasWidth: i,
                                            canvasHeight: l,
                                            fallbackColor: a,
                                            outlineColorDark: r,
                                            outlineColorLight: s,
                                            streamerId: c,
                                            deadDrawables: u
                                        });
                                }
                            })({
                                drawable: e,
                                context: h,
                                canvasWidth: g,
                                canvasHeight: v,
                                fallbackColor: i,
                                outlineColorDark: s,
                                outlineColorLight: u,
                                linesDrawnAt: l,
                                deadDrawables: _,
                                streamerId: a
                            });
                        }),
                            _.length > 0 && (0, c.fW)(_, a);
                    })({
                        canvasRef: e,
                        drawables: n,
                        fallbackColor: _,
                        linesDrawnAt: x,
                        streamerId: t,
                        outlineColorDark: S,
                        outlineColorLight: I,
                        channelId: v
                    });
            },
            [e, v, _, S, I]
        );
    i.useEffect(() => {
        let t = new ResizeObserver(() => {
            let t = e.current;
            if (null == t) return;
            let { width: i, height: l } = t.getBoundingClientRect();
            (t.width = i * window.devicePixelRatio), (t.height = l * window.devicePixelRatio), C(n);
        });
        return null != e.current && t.observe(e.current), () => t.disconnect();
    }, [e, C, n]);
    let Z = i.useCallback(() => {
        let t = u.Z.getDrawables(n),
            i = f.U.getState().particles,
            l = t.length > 0 || Object.keys(i).length > 0;
        l && null == E.current._ref && (null == E.current._ref ? (C(n), E.current.start(g, () => C(n))) : l || null == E.current._ref || (E.current.stop(), (0, m.UN)(e)));
    }, [e, C, n]);
    i.useEffect(() => {
        let e = E.current;
        return (
            u.Z.addChangeListener(Z),
            Z(),
            (0, s.vM)(t.getAvatarURL(null, h.Ks)),
            () => {
                u.Z.removeChangeListener(Z), e.stop();
            }
        );
    });
}

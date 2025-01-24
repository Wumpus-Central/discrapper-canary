n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(653041);
var i = n(192379),
    l = n(846519),
    r = n(692547),
    a = n(481060),
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
    let S = (0, a.useToken)(r.Z.unsafe_rawColors.BRAND_500).hex(),
        I = (0, a.useToken)(r.Z.unsafe_rawColors.BLACK_500).hex(),
        x = (0, a.useToken)(r.Z.unsafe_rawColors.WHITE_500).hex(),
        _ = i.useRef({}),
        C = i.useRef(new l.Xp()),
        b = i.useCallback(
            (t) => {
                let n = u.Z.getDrawables(t);
                (0, m.UN)(e),
                    !(function (e) {
                        let { canvasRef: t, drawables: n, fallbackColor: i, linesDrawnAt: l, streamerId: r, channelId: a, outlineColorDark: s, outlineColorLight: u } = e;
                        if (0 === n.length) return;
                        let m = t.current;
                        if (null == m) return;
                        let h = m.getContext('2d');
                        if (null == h) return;
                        let { width: g, height: v } = m.getBoundingClientRect(),
                            S = [];
                        n.forEach((e) => {
                            if (!(null != o.Z.getVoiceStateForChannel(a, e.userId))) {
                                S.push(e);
                                return;
                            }
                            !(function (e) {
                                let { drawable: t, context: n, canvasWidth: i, canvasHeight: l, fallbackColor: r, outlineColorDark: a, outlineColorLight: s, linesDrawnAt: o, streamerId: c, deadDrawables: u } = e;
                                switch (t.type) {
                                    case d.W.LINE:
                                        return (0, p.Z)({
                                            line: t,
                                            context: n,
                                            canvasWidth: i,
                                            canvasHeight: l,
                                            fallbackColor: r,
                                            outlineColorDark: a,
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
                                            fallbackColor: r,
                                            outlineColorDark: a,
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
                                deadDrawables: S,
                                streamerId: r
                            });
                        }),
                            S.length > 0 && (0, c.fW)(S, r);
                    })({
                        canvasRef: e,
                        drawables: n,
                        fallbackColor: S,
                        linesDrawnAt: _,
                        streamerId: t,
                        outlineColorDark: I,
                        outlineColorLight: x,
                        channelId: v
                    });
            },
            [e, v, S, I, x]
        );
    i.useEffect(() => {
        let t = new ResizeObserver(() => {
            let t = e.current;
            if (null == t) return;
            let { width: i, height: l } = t.getBoundingClientRect();
            (t.width = i * window.devicePixelRatio), (t.height = l * window.devicePixelRatio), b(n);
        });
        return null != e.current && t.observe(e.current), () => t.disconnect();
    }, [e, b, n]);
    let E = i.useCallback(() => {
        let t = u.Z.getDrawables(n),
            i = f.U.getState().particles,
            l = t.length > 0 || Object.keys(i).length > 0;
        l && null == C.current._ref && (null == C.current._ref ? (b(n), C.current.start(g, () => b(n))) : !l && null != C.current._ref && (C.current.stop(), (0, m.UN)(e)));
    }, [e, b, n]);
    i.useEffect(() => {
        let e = C.current;
        return (
            u.Z.addChangeListener(E),
            E(),
            (0, s.vM)(t.getAvatarURL(null, h.Ks)),
            () => {
                u.Z.removeChangeListener(E), e.stop();
            }
        );
    });
}

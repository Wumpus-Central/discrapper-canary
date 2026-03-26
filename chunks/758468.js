n.d(t, { Ay: () => p, Ue: () => d, lS: () => c });
var r = n(64700),
    l = n(158954),
    a = n(892358),
    i = n(92246),
    s = n(795068),
    o = n(654487);
let u = { tension: 500, friction: 30, clamp: !0 },
    c = 26,
    d = 4,
    m = 32;
function p(e) {
    let { timelineRect: t, videoDuration: n, targetSec: c } = e,
        { questConfig: p } = r.useContext(s.l),
        E = r.useMemo(() => p.features.includes(o.Li.FULL_EPISODE_VIDEO_QUEST), [p.features]),
        [f, h] = r.useState(null),
        [v, x] = r.useState(null),
        g = r.useRef(null),
        [{ expansion: S }, A] = (0, l.zhh)(() => ({
            expansion: 0,
            config: u,
            onRest: () => {
                null == g.current && x(null);
            },
        })),
        b = r.useCallback(
            (e) => {
                (g.current = e), null != e ? (x(e), A({ expansion: 4 })) : A({ expansion: 0 }), h(e);
            },
            [A],
        ),
        _ = r.useMemo(
            () =>
                !E || null == n || null == t || isNaN(n)
                    ? []
                    : [
                          ((e) => {
                              let { index: t, targetSec: n, videoDuration: r, questConfig: l, timelineRect: s } = e,
                                  o = Math.max(0, (0, a.DX)(n, r, s) - m);
                              return { leftPx: o, rightPx: o + m, targetSec: n, label: (0, i.mq)(l), index: t };
                          })({ index: 0, targetSec: c, videoDuration: n, questConfig: p, timelineRect: t }),
                      ],
            [c, n, p, t, E],
        ),
        C = r.useCallback(
            (e) =>
                null != n &&
                null != t &&
                null != e &&
                _.some((t) => e >= t.leftPx - d - 4 * (f === t.index) && e <= t.rightPx + d + 4 * (f === t.index)),
            [_, n, t, f],
        );
    return {
        indicators: _,
        isInExclusionZone: C,
        setHoveredIndicatorIndex: b,
        expansionSpring: S,
        animatingIndicatorIndex: v,
    };
}

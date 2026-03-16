n.d(t, { Ay: () => p, Ue: () => d, lS: () => c });
var r = n(64700),
    l = n(158954),
    i = n(892358),
    s = n(92246),
    a = n(752231),
    o = n(654487);
let u = { tension: 500, friction: 30, clamp: !0 },
    c = 26,
    d = 4,
    m = 32;
function p(e) {
    let { timelineRect: t, videoDuration: n, targetSec: c } = e,
        { questConfig: p } = r.useContext(a.VideoQuestConfigContext),
        f = r.useMemo(() => p.features.includes(o.Li.FULL_EPISODE_VIDEO_QUEST), [p.features]),
        [E, h] = r.useState(null),
        [v, x] = r.useState(null),
        g = r.useRef(null),
        [{ expansion: S }, A] = (0, l.zhh)(() => ({
            expansion: 0,
            config: u,
            onRest: () => {
                null == g.current && x(null);
            },
        })),
        C = r.useCallback(
            (e) => {
                (g.current = e), null != e ? (x(e), A({ expansion: 4 })) : A({ expansion: 0 }), h(e);
            },
            [A],
        ),
        _ = r.useMemo(
            () =>
                !f || null == n || null == t || isNaN(n)
                    ? []
                    : [
                          ((e) => {
                              let { index: t, targetSec: n, videoDuration: r, questConfig: l, timelineRect: a } = e,
                                  o = Math.max(0, (0, i.DX)(n, r, a) - m);
                              return { leftPx: o, rightPx: o + m, targetSec: n, label: (0, s.mq)(l), index: t };
                          })({ index: 0, targetSec: c, videoDuration: n, questConfig: p, timelineRect: t }),
                      ],
            [c, n, p, t, f],
        ),
        b = r.useCallback(
            (e) =>
                null != n &&
                null != t &&
                null != e &&
                _.some((t) => e >= t.leftPx - d - 4 * (E === t.index) && e <= t.rightPx + d + 4 * (E === t.index)),
            [_, n, t, E],
        );
    return {
        indicators: _,
        isInExclusionZone: b,
        setHoveredIndicatorIndex: C,
        expansionSpring: S,
        animatingIndicatorIndex: v,
    };
}

n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(92246),
    l = n(856658),
    o = n(80026),
    u = n(654487);
let c = { tension: 500, friction: 30, clamp: !0 };
function d(e) {
    let { targetSec: t, quest: n, sourceQuestContent: d, questConfig: m, onIndicatorClick: E } = e,
        _ = i.useMemo(() => m?.features.includes(u.Li.FULL_EPISODE_VIDEO_QUEST) === !0, [m?.features]),
        [p, f] = i.useState(null),
        v = i.useRef(null),
        [{ expansion: S }, h] = (0, s.zhh)(() => ({
            expansion: 0,
            config: c,
            onRest: () => {
                null == v.current && f(null);
            },
        })),
        g = i.useCallback(
            (e) => {
                (v.current = e), null != e ? (f(e), h({ expansion: o.KY })) : h({ expansion: 0 });
            },
            [h],
        ),
        A = i.useMemo(() => [{ index: 0, timeSec: t, widthPx: o.ws, gapPx: o.Ue }], [t]),
        C = i.useMemo(() => (_ ? (0, a.mq)(m) : void 0), [m, _]),
        T = i.useCallback(
            (e, i) => {
                let s = { leftPx: e.leftPx, rightPx: e.rightPx, targetSec: t, index: e.index, label: C };
                return (0, r.jsx)(
                    l.A,
                    {
                        currentPx: i,
                        indicator: s,
                        isAnimated: p === e.index,
                        expansionSpring: S,
                        quest: n,
                        sourceQuestContent: d,
                        onMouseEnter: () => g(e.index),
                        onMouseLeave: () => g(null),
                        onClick: null != E ? () => E(s.targetSec) : void 0,
                    },
                    `indicator-${e.index}`,
                );
            },
            [t, C, p, S, n, d, g, E],
        );
    if (_) return { indicators: A, animatingIndex: p, expansionSpring: S, hoverExpansionPx: o.KY, renderIndicator: T };
}

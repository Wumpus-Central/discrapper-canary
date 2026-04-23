n.d(t, { A: () => d });
var r = n(627968),
    s = n(64700),
    a = n(717421),
    l = n(92246),
    i = n(856658),
    u = n(80026),
    o = n(654487);
let c = { tension: 500, friction: 30, clamp: !0 };
function d(e) {
    let { targetSec: t, quest: n, sourceQuestContent: d, questConfig: E, onIndicatorClick: m } = e,
        f = s.useMemo(() => E?.features.includes(o.Li.FULL_EPISODE_VIDEO_QUEST) === !0, [E?.features]),
        [_, S] = s.useState(null),
        p = s.useRef(null),
        [{ expansion: v }, g] = (0, a.z)(() => ({
            expansion: 0,
            config: c,
            onRest: () => {
                null == p.current && S(null);
            },
        })),
        h = s.useCallback(
            (e) => {
                (p.current = e), null != e ? (S(e), g({ expansion: u.KY })) : g({ expansion: 0 });
            },
            [g],
        ),
        A = s.useMemo(() => [{ index: 0, timeSec: t, widthPx: u.ws, gapPx: u.Ue }], [t]),
        C = s.useMemo(() => (f ? (0, l.mq)(E) : void 0), [E, f]),
        x = s.useCallback(
            (e, s) => {
                let a = { leftPx: e.leftPx, rightPx: e.rightPx, targetSec: t, index: e.index, label: C };
                return (0, r.jsx)(
                    i.A,
                    {
                        currentPx: s,
                        indicator: a,
                        isAnimated: _ === e.index,
                        expansionSpring: v,
                        quest: n,
                        sourceQuestContent: d,
                        onMouseEnter: () => h(e.index),
                        onMouseLeave: () => h(null),
                        onClick: null != m ? () => m(a.targetSec) : void 0,
                    },
                    `indicator-${e.index}`,
                );
            },
            [t, C, _, v, n, d, h, m],
        );
    if (f) return { indicators: A, animatingIndex: _, expansionSpring: v, hoverExpansionPx: u.KY, renderIndicator: x };
}

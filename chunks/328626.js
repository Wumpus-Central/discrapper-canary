(r.d(t, {
    g: () => o,
    y: () => i
}),
    r(388685));
var n,
    l = r(73800),
    o = (((n = {}).MOUNTED = 'mounted'), (n.SORT_OUT = 'sort-out'), (n.SORT_IN = 'sort-in'), (n.SHUFFLE_OUT = 'shuffle-out'), (n.SHUFFLE_IN = 'shuffle-in'), (n.FINISHED = 'finished'), n);
let i = () => {
    let [e, t] = l.useState('mounted'),
        [r, n] = l.useState(!1),
        o = l.useRef(null);
    return (
        l.useEffect(() => {
            r && 'finished' === e && (null !== o.current && o.current.focus(), n(!1));
        }, [e, r]),
        {
            animationPhase: e,
            startAnimation: l.useCallback((e) => {
                let { isShuffling: r, onOutroComplete: l, returnRef: i } = e;
                ((null == i ? void 0 : i.current) != null && ((o.current = i.current), n(!0)),
                    t(r ? 'shuffle-out' : 'sort-out'),
                    setTimeout(
                        () => {
                            (l(),
                                t(r ? 'shuffle-in' : 'sort-in'),
                                setTimeout(
                                    () => {
                                        t('finished');
                                    },
                                    r ? 200 : 300
                                ));
                        },
                        r ? 250 : 300
                    ));
            }, [])
        }
    );
};

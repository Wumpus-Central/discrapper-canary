(n.d(t, {
    g: () => o,
    y: () => a
}),
    n(388685));
var r,
    l = n(73800),
    o = (((r = {}).MOUNTED = 'mounted'), (r.SORT_OUT = 'sort-out'), (r.SORT_IN = 'sort-in'), (r.SHUFFLE_OUT = 'shuffle-out'), (r.SHUFFLE_IN = 'shuffle-in'), (r.FINISHED = 'finished'), r);
let a = () => {
    let [e, t] = l.useState('mounted'),
        [n, r] = l.useState(!1),
        o = l.useRef(null);
    return (
        l.useEffect(() => {
            n && 'finished' === e && (null !== o.current && o.current.focus(), r(!1));
        }, [e, n]),
        {
            animationPhase: e,
            startAnimation: l.useCallback((e) => {
                let { isShuffling: n, onOutroComplete: l, returnRef: a } = e;
                ((null == a ? void 0 : a.current) != null && ((o.current = a.current), r(!0)),
                    t(n ? 'shuffle-out' : 'sort-out'),
                    setTimeout(
                        () => {
                            (l(),
                                t(n ? 'shuffle-in' : 'sort-in'),
                                setTimeout(
                                    () => {
                                        t('finished');
                                    },
                                    n ? 200 : 300
                                ));
                        },
                        n ? 250 : 300
                    ));
            }, [])
        }
    );
};

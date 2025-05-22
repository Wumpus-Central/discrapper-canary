n.d(t, {
    g: () => a,
    y: () => i
}),
    n(388685);
var r,
    l = n(73800),
    a = (((r = {}).MOUNTED = 'mounted'), (r.SORT_OUT = 'sort-out'), (r.SORT_IN = 'sort-in'), (r.SHUFFLE_OUT = 'shuffle-out'), (r.SHUFFLE_IN = 'shuffle-in'), (r.FINISHED = 'finished'), r);
let i = () => {
    let [e, t] = l.useState('mounted'),
        [n, r] = l.useState(!1),
        a = l.useRef(null);
    return (
        l.useEffect(() => {
            n && 'finished' === e && (null !== a.current && a.current.focus(), r(!1));
        }, [e, n]),
        {
            animationPhase: e,
            startAnimation: l.useCallback((e) => {
                let { isShuffling: n, onOutroComplete: l, returnRef: i } = e;
                (null == i ? void 0 : i.current) != null && ((a.current = i.current), r(!0)),
                    t(n ? 'shuffle-out' : 'sort-out'),
                    setTimeout(
                        () => {
                            l(),
                                t(n ? 'shuffle-in' : 'sort-in'),
                                setTimeout(
                                    () => {
                                        t('finished');
                                    },
                                    n ? 200 : 300
                                );
                        },
                        n ? 250 : 300
                    );
            }, [])
        }
    );
};

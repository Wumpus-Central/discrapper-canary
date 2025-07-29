(r.d(t, {
    g: () => i,
    y: () => a
}),
    r(388685));
var n,
    l = r(73800),
    i = (((n = {}).MOUNTED = 'mounted'), (n.SORT_OUT = 'sort-out'), (n.SORT_IN = 'sort-in'), (n.SHUFFLE_OUT = 'shuffle-out'), (n.SHUFFLE_IN = 'shuffle-in'), (n.FINISHED = 'finished'), n);
let a = () => {
    let [e, t] = l.useState('mounted'),
        [r, n] = l.useState(!1),
        i = l.useRef(null);
    return (
        l.useEffect(() => {
            r && 'finished' === e && (null !== i.current && i.current.focus(), n(!1));
        }, [e, r]),
        {
            animationPhase: e,
            startAnimation: l.useCallback((e) => {
                let { isShuffling: r, onOutroComplete: l, returnRef: a } = e;
                ((null == a ? void 0 : a.current) != null && ((i.current = a.current), n(!0)),
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

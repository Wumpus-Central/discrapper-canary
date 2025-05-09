n.d(t, {
    g: () => a,
    y: () => i
}),
    n(388685);
var r,
    l = n(73800),
    a = (((r = {}).MOUNTED = 'mounted'), (r.SORT_OUT = 'sort-out'), (r.SORT_IN = 'sort-in'), (r.SHUFFLE_OUT = 'shuffle-out'), (r.SHUFFLE_IN = 'shuffle-in'), (r.FINISHED = 'finished'), r);
let i = () => {
    let [e, t] = l.useState('mounted');
    return {
        animationPhase: e,
        startAnimation: l.useCallback((e) => {
            let { isShuffling: n, onOutroComplete: r } = e;
            t(n ? 'shuffle-out' : 'sort-out'),
                setTimeout(
                    () => {
                        r(),
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
    };
};

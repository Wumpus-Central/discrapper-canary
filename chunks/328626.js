n.d(t, {
    g: () => i,
    y: () => a
}),
    n(388685);
var r,
    l = n(73800),
    i = (((r = {}).MOUNTED = 'mounted'), (r.SORT_OUT = 'sort-out'), (r.SORT_IN = 'sort-in'), (r.SHUFFLE_OUT = 'shuffle-out'), (r.SHUFFLE_IN = 'shuffle-in'), (r.FINISHED = 'finished'), r);
let a = () => {
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

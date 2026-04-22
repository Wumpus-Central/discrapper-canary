t.d(r, { o: () => l, u: () => u });
var n = t(64700),
    a = t(735438);
let u = (e) => e.sort((e, r) => (e.zIndex ?? 0) - (r.zIndex ?? 0)),
    l = (e) =>
        n.useMemo(() => {
            if (null == e) return e;
            let r = (0, a.cloneDeep)(e),
                t = Math.floor(
                    Math.random() *
                        (r.effects.reduce((e, r) => {
                            let t = r.randomizedSources?.length ?? 0;
                            return t > 0 && (e = 0 === e ? t : Math.min(e, t)), e;
                        }, 0) -
                            1 -
                            0 +
                            1) +
                        0,
                );
            return (
                (r.effects = r.effects.map(
                    (e) => (
                        null != e.randomizedSources &&
                            e.randomizedSources.length > 0 &&
                            (e.src = e.randomizedSources[t].src),
                        e
                    ),
                )),
                r
            );
        }, [e]);

"use strict";
n.d(t, { o: () => a, u: () => s });
var r = n(64700),
    i = n(735438);
let s = (e) => e.sort((e, t) => (e.zIndex ?? 0) - (t.zIndex ?? 0)),
    a = (e) =>
        r.useMemo(() => {
            if (null == e) return e;
            let t = (0, i.cloneDeep)(e),
                n = Math.floor(
                    Math.random() *
                        (t.effects.reduce((e, t) => {
                            let n = t.randomizedSources?.length ?? 0;
                            return n > 0 && (e = 0 === e ? n : Math.min(e, n)), e;
                        }, 0) -
                            1 -
                            0 +
                            1) +
                        0,
                );
            return (
                (t.effects = t.effects.map(
                    (e) => (
                        null != e.randomizedSources &&
                            e.randomizedSources.length > 0 &&
                            (e.src = e.randomizedSources[n].src),
                        e
                    ),
                )),
                t
            );
        }, [e]);

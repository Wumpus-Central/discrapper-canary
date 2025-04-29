n.d(t, { Z: () => o });
var i = n(255367),
    r = n(73800),
    s = n(392711),
    l = n(680295);
let a = (e) => (1 === e ? -1 : Math.floor(Math.random() * e)),
    o = (e) => {
        let { config: t } = e,
            n = r.useMemo(() => (0, s.cloneDeep)(t), [t]),
            o = r.useMemo(() => t.effects.some((e) => null != e.randomizedSources && e.randomizedSources.length > 0), [t]),
            c = r.useMemo(() => {
                if (o) {
                    let e = a(
                        n.effects.reduce((e, t) => {
                            var n;
                            let i = 1 + (null != (n = t.randomizedSources) ? n : []).length;
                            return i > 1 ? (1 === e ? i : Math.min(i, e)) : e;
                        }, 1)
                    );
                    e > 0 &&
                        t.effects.forEach((t, i) => {
                            null != t.randomizedSources && t.randomizedSources.length > 0 && (n.effects[i].src = t.randomizedSources[e - 1].src);
                        });
                }
                return n;
            }, [t.effects, n, o]);
        return (0, i.jsx)(l.n, {
            profileEffectConfig: c,
            profileEffectId: 'debug'
        });
    };

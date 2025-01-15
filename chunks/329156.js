n(724458);
var i = n(200651),
    s = n(192379),
    r = n(392711),
    a = n(680295);
let l = (e) => (1 === e ? -1 : Math.floor(Math.random() * e));
t.Z = (e) => {
    let { config: t } = e,
        n = s.useMemo(() => (0, r.cloneDeep)(t), [t]),
        o = s.useMemo(() => t.effects.some((e) => null != e.randomizedSources && e.randomizedSources.length > 0), [t]),
        c = s.useMemo(() => {
            if (o) {
                let e = l(
                    n.effects.reduce((e, t) => {
                        var n;
                        let i = 1 + (null !== (n = t.randomizedSources) && void 0 !== n ? n : []).length;
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
    return (0, i.jsx)(a.n, {
        profileEffectConfig: c,
        profileEffectId: 'debug'
    });
};

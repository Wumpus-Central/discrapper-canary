n.d(t, { Z: () => l });
var r = n(200651),
    i = n(192379),
    s = n(392711),
    a = n(680295);
let o = (e) => (1 === e ? -1 : Math.floor(Math.random() * e)),
    l = (e) => {
        let { config: t } = e,
            n = i.useMemo(() => (0, s.cloneDeep)(t), [t]),
            l = i.useMemo(() => t.effects.some((e) => null != e.randomizedSources && e.randomizedSources.length > 0), [t]),
            c = i.useMemo(() => {
                if (l) {
                    let e = o(
                        n.effects.reduce((e, t) => {
                            var n;
                            let r = 1 + (null !== (n = t.randomizedSources) && void 0 !== n ? n : []).length;
                            return r > 1 ? (1 === e ? r : Math.min(r, e)) : e;
                        }, 1)
                    );
                    e > 0 &&
                        t.effects.forEach((t, r) => {
                            null != t.randomizedSources && t.randomizedSources.length > 0 && (n.effects[r].src = t.randomizedSources[e - 1].src);
                        });
                }
                return n;
            }, [t.effects, n, l]);
        return (0, r.jsx)(a.n, {
            profileEffectConfig: c,
            profileEffectId: 'debug'
        });
    };

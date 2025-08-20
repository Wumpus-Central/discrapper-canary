n.d(t, { Z: () => l });
var r = n(951288),
    i = n(647438),
    a = n(392711),
    o = n(680295);
let s = (e) => (1 === e ? -1 : Math.floor(Math.random() * e)),
    l = (e) => {
        let { config: t } = e,
            n = i.useMemo(() => (0, a.cloneDeep)(t), [t]),
            l = i.useMemo(
                () => t.effects.some((e) => null != e.randomizedSources && e.randomizedSources.length > 0),
                [t],
            ),
            c = i.useMemo(() => {
                if (l) {
                    let e = s(
                        n.effects.reduce((e, t) => {
                            var n;
                            let r = 1 + (null != (n = t.randomizedSources) ? n : []).length;
                            return r > 1 ? (1 === e ? r : Math.min(r, e)) : e;
                        }, 1),
                    );
                    e > 0 &&
                        t.effects.forEach((t, r) => {
                            let i = t;
                            null != i.randomizedSources &&
                                i.randomizedSources.length > 0 &&
                                (n.effects[r].src = i.randomizedSources[e - 1].src);
                        });
                }
                return n;
            }, [t.effects, n, l]);
        return (0, r.jsx)(o.n, {
            profileEffectConfig: c,
            profileEffectId: "debug",
        });
    };

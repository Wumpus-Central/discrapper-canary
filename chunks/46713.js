n.d(t, { q: () => c }), n(388685);
var r = n(473749),
    i = n(392711),
    a = n(624968),
    o = n(682420),
    s = n(405629);
let l = {
        ContainedHero: o.Z,
        BasicHero: (e) => {
            let { bannerSrc: t } = e;
            return null;
        },
        PromotionalHero: () => null,
        InteractiveHScroll: a.Z,
        Stack: s.Nt,
        Text: s.lc,
        Heading: s.WS,
    },
    c = (e) => {
        let { overrides: t } = e;
        return r.useMemo(() => {
            let e = (0, i.cloneDeep)(l);
            if (null != t) for (let [n, r] of Object.entries(t)) null != r && (e[n] = r);
            return e;
        }, [t]);
    };

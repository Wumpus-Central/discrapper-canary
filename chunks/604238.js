n.d(t, { e: () => c }), n(896048);
var r = n(64700),
    i = n(735438),
    a = n(408238),
    s = n(528226),
    o = n(219561);
let l = {
        ContainedHero: s.A,
        BasicHero: (e) => {
            let { bannerSrc: t } = e;
            return null;
        },
        PromotionalHero: () => null,
        InteractiveHScroll: a.A,
        Stack: o.Kp,
        Text: o.t,
        Heading: o.Oo,
    },
    c = (e) => {
        let { overrides: t } = e;
        return r.useMemo(() => {
            let e = (0, i.cloneDeep)(l);
            if (null != t) for (let [n, r] of Object.entries(t)) null != r && (e[n] = r);
            return e;
        }, [t]);
    };

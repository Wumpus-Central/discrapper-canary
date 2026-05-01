n.d(t, { A: () => o }), n(323874), n(14289), n(35956);
var i = n(877227),
    a = n(839214),
    r = n(890687),
    s = n(652215);
let l = Object.freeze({ tab: r.NC.ALL }),
    o = (0, a.D)((e) => ({
        ...l,
        initializeFromUrl: (t, n) => {
            let i = new URLSearchParams(t).get(r.L1.TAB);
            (i !== r.NC.PREVIEW_TOOL || n) && null != i && Object.values(r.NC).includes(i)
                ? e({ tab: i })
                : e({ tab: r.NC.ALL });
        },
        setTab: (t) => {
            e({ tab: t });
            let n = new URLSearchParams();
            n.set(r.L1.TAB, t);
            let a = `${s.BVt.QUEST_HOME}?${n.toString()}`;
            (0, i.pX)(a.toString());
        },
    }));

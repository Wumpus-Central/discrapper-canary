n.d(t, { A: () => o }), n(323874), n(14289), n(35956);
var i = n(877227),
    r = n(839214),
    a = n(309593),
    s = n(652215);
let l = Object.freeze({ tab: a.NC.ALL }),
    o = (0, r.D)((e) => ({
        ...l,
        initializeFromUrl: (t, n) => {
            let i = new URLSearchParams(t).get(a.L1.TAB);
            (i !== a.NC.PREVIEW_TOOL || n) && null != i && Object.values(a.NC).includes(i)
                ? e({ tab: i })
                : e({ tab: a.NC.ALL });
        },
        setTab: (t) => {
            e({ tab: t });
            let n = new URLSearchParams();
            n.set(a.L1.TAB, t);
            let r = `${s.BVt.QUEST_HOME}?${n.toString()}`;
            (0, i.pX)(r.toString());
        },
    }));

"use strict";
n.d(t, { A: () => l }), n(323874), n(14289), n(35956);
var i = n(877227),
    r = n(839214),
    s = n(31587),
    a = n(652215);
let o = Object.freeze({ tab: s.NC.ALL }),
    l = (0, r.D)((e) => ({
        ...o,
        initializeFromUrl: (t, n) => {
            let i = new URLSearchParams(t).get(s.L1.TAB);
            (i !== s.NC.PREVIEW_TOOL || n) && null != i && Object.values(s.NC).includes(i)
                ? e({ tab: i })
                : e({ tab: s.NC.ALL });
        },
        setTab: (t) => {
            e({ tab: t });
            let n = new URLSearchParams();
            n.set(s.L1.TAB, t);
            let r = `${a.BVt.QUEST_HOME}?${n.toString()}`;
            (0, i.pX)(r.toString());
        },
    }));

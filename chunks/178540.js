"use strict";
n.d(t, { A: () => a, O: () => s });
var r = n(353640);
let i = [],
    s = (0, r.v)((e, t) => ({
        errorHintsByQuestId: new Map(),
        setErrorHints: (t, n) => {
            e((e) => {
                if (0 === n.length && !e.errorHintsByQuestId.has(t)) return e;
                let r = new Map(e.errorHintsByQuestId);
                return 0 === n.length ? r.delete(t) : r.set(t, [...n]), { errorHintsByQuestId: r };
            });
        },
        getErrorHints: (e) => t().errorHintsByQuestId.get(e) ?? i,
        clearErrorHints: (t) => {
            e((e) => {
                if (!e.errorHintsByQuestId.has(t)) return e;
                let n = new Map(e.errorHintsByQuestId);
                return n.delete(t), { errorHintsByQuestId: n };
            });
        },
        clearErrorHintsByType: (t, n) => {
            e((e) => {
                let r = e.errorHintsByQuestId.get(t);
                if (null == r) return e;
                let i = r.filter((e) => e.type !== n);
                if (i.length === r.length) return e;
                let s = new Map(e.errorHintsByQuestId);
                return 0 === i.length ? s.delete(t) : s.set(t, i), { errorHintsByQuestId: s };
            });
        },
        reset: () => {
            e({ errorHintsByQuestId: new Map() });
        },
    })),
    a = s;

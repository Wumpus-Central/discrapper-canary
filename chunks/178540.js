"use strict";
n.d(t, { A: () => a, O: () => s });
var i = n(353640);
let r = [],
    s = (0, i.v)((e, t) => ({
        errorHintsByQuestId: new Map(),
        setErrorHints: (t, n) => {
            e((e) => {
                if (0 === n.length && !e.errorHintsByQuestId.has(t)) return e;
                let i = new Map(e.errorHintsByQuestId);
                return 0 === n.length ? i.delete(t) : i.set(t, [...n]), { errorHintsByQuestId: i };
            });
        },
        getErrorHints: (e) => t().errorHintsByQuestId.get(e) ?? r,
        clearErrorHints: (t) => {
            e((e) => {
                if (!e.errorHintsByQuestId.has(t)) return e;
                let n = new Map(e.errorHintsByQuestId);
                return n.delete(t), { errorHintsByQuestId: n };
            });
        },
        clearErrorHintsByType: (t, n) => {
            e((e) => {
                let i = e.errorHintsByQuestId.get(t);
                if (null == i) return e;
                let r = i.filter((e) => e.type !== n);
                if (r.length === i.length) return e;
                let s = new Map(e.errorHintsByQuestId);
                return 0 === r.length ? s.delete(t) : s.set(t, r), { errorHintsByQuestId: s };
            });
        },
        reset: () => {
            e({ errorHintsByQuestId: new Map() });
        },
    })),
    a = s;

n.d(t, { A: () => s, O: () => a });
var i = n(196765);
let r = [],
    a = (0, i.v)((e, t) => ({
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
                let a = new Map(e.errorHintsByQuestId);
                return 0 === r.length ? a.delete(t) : a.set(t, r), { errorHintsByQuestId: a };
            });
        },
        reset: () => {
            e({ errorHintsByQuestId: new Map() });
        },
    })),
    s = a;

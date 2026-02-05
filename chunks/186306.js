"use strict";
n.d(t, { o: () => o }), n(321073);
var r = n(711371);
let i = 250,
    a = new WeakMap(),
    s = new WeakMap(),
    o = {
        isMerging: (e) => s.get(e) ?? !0,
        isSaving: (e) => a.get(e) ?? !0,
        withoutMerging(e, t) {
            let n = this.isMerging(e);
            s.set(e, !1);
            try {
                t();
            } finally {
                s.set(e, n);
            }
        },
        withoutSaving(e, t) {
            let n = this.isSaving(e);
            a.set(e, !1);
            try {
                t();
            } finally {
                a.set(e, n);
            }
        },
        withSingleEntry: (e, t) => l(e, "other", !1, t),
        withMergedEntry: (e, t) => l(e, "other", !0, t),
        currentEntry: (e) => (e.history.stack.length > 0 ? e.history.stack[e.history.index] : null),
        insertOrMergeEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = o.currentEntry(e);
            o.isMerging(e) && r?.mergeable ? this.mergeEntry(e, n) : this.insertEntry(e, t, n);
        },
        insertEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                a = arguments.length > 3 ? arguments[3] : void 0,
                s = arguments.length > 4 ? arguments[4] : void 0;
            (s = s ?? e.selection), (a = a ?? r.VW.richValue(e));
            let { history: l } = e,
                u = o.currentEntry(e);
            for (
                null != u && (u.mergeable = !1), l.stack.length > 0 && (l.stack.length = l.index + 1);
                l.stack.length >= i;
            )
                l.stack.shift();
            l.stack.push({ type: t, mergeable: n, createdAt: Date.now(), value: a, selection: s }),
                (l.index = l.stack.length - 1);
        },
        mergeEntry(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                { selection: n } = e,
                i = r.VW.richValue(e),
                a = o.currentEntry(e);
            null != a && ((a.value = i), (a.selection = n), t || (a.mergeable = !1));
        },
    };
function l(e, t, n, i) {
    let s = e.children,
        l = e.selection,
        u = o.isSaving(e);
    a.set(e, !1);
    try {
        let a = i();
        return (
            u &&
                (n
                    ? o.mergeEntry(e)
                    : e.children !== s
                      ? o.insertEntry(e, t, !1)
                      : o.isMerging(e) &&
                        null != e.selection &&
                        (null == l || !r.ZF.equals(e.selection, l)) &&
                        o.mergeEntry(e)),
            a
        );
    } finally {
        a.set(e, u);
    }
}

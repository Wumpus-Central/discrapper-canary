"use strict";
n.d(t, { o: () => a }), n(321073);
var l = n(820066);
let i = new WeakMap(),
    s = new WeakMap(),
    a = {
        isMerging: (e) => s.get(e) ?? !0,
        isSaving: (e) => i.get(e) ?? !0,
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
            i.set(e, !1);
            try {
                t();
            } finally {
                i.set(e, n);
            }
        },
        withSingleEntry: (e, t) => r(e, "other", !1, t),
        withMergedEntry: (e, t) => r(e, "other", !0, t),
        currentEntry: (e) => (e.history.stack.length > 0 ? e.history.stack[e.history.index] : null),
        insertOrMergeEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                l = a.currentEntry(e);
            a.isMerging(e) && l?.mergeable ? this.mergeEntry(e, n) : this.insertEntry(e, t, n);
        },
        insertEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = arguments.length > 3 ? arguments[3] : void 0,
                s = arguments.length > 4 ? arguments[4] : void 0;
            (s = s ?? e.selection), (i = i ?? l.VW.richValue(e));
            let { history: r } = e,
                o = a.currentEntry(e);
            for (
                null != o && (o.mergeable = !1), r.stack.length > 0 && (r.stack.length = r.index + 1);
                r.stack.length >= 250;
            )
                r.stack.shift();
            r.stack.push({ type: t, mergeable: n, createdAt: Date.now(), value: i, selection: s }),
                (r.index = r.stack.length - 1);
        },
        mergeEntry(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                { selection: n } = e,
                i = l.VW.richValue(e),
                s = a.currentEntry(e);
            null != s && ((s.value = i), (s.selection = n), t || (s.mergeable = !1));
        },
    };
function r(e, t, n, s) {
    let r = e.children,
        o = e.selection,
        c = a.isSaving(e);
    i.set(e, !1);
    try {
        let i = s();
        return (
            c &&
                (n
                    ? a.mergeEntry(e)
                    : e.children !== r
                      ? a.insertEntry(e, t, !1)
                      : a.isMerging(e) &&
                        null != e.selection &&
                        (null == o || !l.ZF.equals(e.selection, o)) &&
                        a.mergeEntry(e)),
            i
        );
    } finally {
        i.set(e, c);
    }
}

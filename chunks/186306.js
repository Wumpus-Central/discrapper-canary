"use strict";
n.d(t, { o: () => r }), n(321073);
var l = n(820066);
let i = new WeakMap(),
    s = new WeakMap(),
    r = {
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
        withSingleEntry: (e, t) => a(e, "other", !1, t),
        withMergedEntry: (e, t) => a(e, "other", !0, t),
        currentEntry: (e) => (e.history.stack.length > 0 ? e.history.stack[e.history.index] : null),
        insertOrMergeEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                l = r.currentEntry(e);
            r.isMerging(e) && l?.mergeable ? this.mergeEntry(e, n) : this.insertEntry(e, t, n);
        },
        insertEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = arguments.length > 3 ? arguments[3] : void 0,
                s = arguments.length > 4 ? arguments[4] : void 0;
            (s = s ?? e.selection), (i = i ?? l.VW.richValue(e));
            let { history: a } = e,
                o = r.currentEntry(e);
            for (
                null != o && (o.mergeable = !1), a.stack.length > 0 && (a.stack.length = a.index + 1);
                a.stack.length >= 250;
            )
                a.stack.shift();
            a.stack.push({ type: t, mergeable: n, createdAt: Date.now(), value: i, selection: s }),
                (a.index = a.stack.length - 1);
        },
        mergeEntry(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                { selection: n } = e,
                i = l.VW.richValue(e),
                s = r.currentEntry(e);
            null != s && ((s.value = i), (s.selection = n), t || (s.mergeable = !1));
        },
    };
function a(e, t, n, s) {
    let a = e.children,
        o = e.selection,
        u = r.isSaving(e);
    i.set(e, !1);
    try {
        let i = s();
        return (
            u &&
                (n
                    ? r.mergeEntry(e)
                    : e.children !== a
                      ? r.insertEntry(e, t, !1)
                      : r.isMerging(e) &&
                        null != e.selection &&
                        (null == o || !l.ZF.equals(e.selection, o)) &&
                        r.mergeEntry(e)),
            i
        );
    } finally {
        i.set(e, u);
    }
}

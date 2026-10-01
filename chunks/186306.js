(n.d(t, { o: () => r }), n(321073));
var l = n(820066);
let i = new WeakMap(),
    a = new WeakMap(),
    r = {
        isMerging: (e) => a.get(e) ?? !0,
        isSaving: (e) => i.get(e) ?? !0,
        withoutMerging(e, t) {
            let n = this.isMerging(e);
            a.set(e, !1);
            try {
                t();
            } finally {
                a.set(e, n);
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
        withSingleEntry: (e, t) => s(e, "other", !1, t),
        withMergedEntry: (e, t) => s(e, "other", !0, t),
        currentEntry: (e) => (e.history.stack.length > 0 ? e.history.stack[e.history.index] : null),
        insertOrMergeEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                l = r.currentEntry(e);
            r.isMerging(e) && l?.mergeable ? this.mergeEntry(e, n) : this.insertEntry(e, t, n);
        },
        insertEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = arguments.length > 3 ? arguments[3] : void 0,
                a = arguments.length > 4 ? arguments[4] : void 0;
            ((a = a ?? e.selection), (i = i ?? l.VW.richValue(e)));
            let { history: s } = e,
                o = r.currentEntry(e);
            for (
                null != o && (o.mergeable = !1), s.stack.length > 0 && (s.stack.length = s.index + 1);
                s.stack.length >= 250;
            )
                s.stack.shift();
            (s.stack.push({ type: t, mergeable: n, createdAt: Date.now(), value: i, selection: a }),
                (s.index = s.stack.length - 1));
        },
        mergeEntry(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                { selection: n } = e,
                i = l.VW.richValue(e),
                a = r.currentEntry(e);
            null != a && ((a.value = i), (a.selection = n), t || (a.mergeable = !1));
        },
    };
function s(e, t, n, a) {
    let s = e.children,
        o = e.selection,
        u = r.isSaving(e);
    i.set(e, !1);
    try {
        let i = a();
        return (
            u &&
                (n
                    ? r.mergeEntry(e)
                    : e.children !== s
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

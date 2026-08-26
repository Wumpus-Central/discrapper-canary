n.d(t, { o: () => a }), n(321073);
var l = n(820066);
let i = new WeakMap(),
    r = new WeakMap(),
    a = {
        isMerging: (e) => r.get(e) ?? !0,
        isSaving: (e) => i.get(e) ?? !0,
        withoutMerging(e, t) {
            let n = this.isMerging(e);
            r.set(e, !1);
            try {
                t();
            } finally {
                r.set(e, n);
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
                l = a.currentEntry(e);
            a.isMerging(e) && l?.mergeable ? this.mergeEntry(e, n) : this.insertEntry(e, t, n);
        },
        insertEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = arguments.length > 3 ? arguments[3] : void 0,
                r = arguments.length > 4 ? arguments[4] : void 0;
            (r = r ?? e.selection), (i = i ?? l.VW.richValue(e));
            let { history: s } = e,
                o = a.currentEntry(e);
            for (
                null != o && (o.mergeable = !1), s.stack.length > 0 && (s.stack.length = s.index + 1);
                s.stack.length >= 250;
            )
                s.stack.shift();
            s.stack.push({ type: t, mergeable: n, createdAt: Date.now(), value: i, selection: r }),
                (s.index = s.stack.length - 1);
        },
        mergeEntry(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                { selection: n } = e,
                i = l.VW.richValue(e),
                r = a.currentEntry(e);
            null != r && ((r.value = i), (r.selection = n), t || (r.mergeable = !1));
        },
    };
function s(e, t, n, r) {
    let s = e.children,
        o = e.selection,
        u = a.isSaving(e);
    i.set(e, !1);
    try {
        let i = r();
        return (
            u &&
                (n
                    ? a.mergeEntry(e)
                    : e.children !== s
                      ? a.insertEntry(e, t, !1)
                      : a.isMerging(e) &&
                        null != e.selection &&
                        (null == o || !l.ZF.equals(e.selection, o)) &&
                        a.mergeEntry(e)),
            i
        );
    } finally {
        i.set(e, u);
    }
}

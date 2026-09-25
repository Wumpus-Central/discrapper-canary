(n.d(t, { o: () => s }), n(321073));
var l = n(820066);
let i = new WeakMap(),
    r = new WeakMap(),
    s = {
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
        withSingleEntry: (e, t) => a(e, "other", !1, t),
        withMergedEntry: (e, t) => a(e, "other", !0, t),
        currentEntry: (e) => (e.history.stack.length > 0 ? e.history.stack[e.history.index] : null),
        insertOrMergeEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                l = s.currentEntry(e);
            s.isMerging(e) && l?.mergeable ? this.mergeEntry(e, n) : this.insertEntry(e, t, n);
        },
        insertEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = arguments.length > 3 ? arguments[3] : void 0,
                r = arguments.length > 4 ? arguments[4] : void 0;
            ((r = r ?? e.selection), (i = i ?? l.VW.richValue(e)));
            let { history: a } = e,
                o = s.currentEntry(e);
            for (
                null != o && (o.mergeable = !1), a.stack.length > 0 && (a.stack.length = a.index + 1);
                a.stack.length >= 250;
            )
                a.stack.shift();
            (a.stack.push({ type: t, mergeable: n, createdAt: Date.now(), value: i, selection: r }),
                (a.index = a.stack.length - 1));
        },
        mergeEntry(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                { selection: n } = e,
                i = l.VW.richValue(e),
                r = s.currentEntry(e);
            null != r && ((r.value = i), (r.selection = n), t || (r.mergeable = !1));
        },
    };
function a(e, t, n, r) {
    let a = e.children,
        o = e.selection,
        u = s.isSaving(e);
    i.set(e, !1);
    try {
        let i = r();
        return (
            u &&
                (n
                    ? s.mergeEntry(e)
                    : e.children !== a
                      ? s.insertEntry(e, t, !1)
                      : s.isMerging(e) &&
                        null != e.selection &&
                        (null == o || !l.ZF.equals(e.selection, o)) &&
                        s.mergeEntry(e)),
            i
        );
    } finally {
        i.set(e, u);
    }
}

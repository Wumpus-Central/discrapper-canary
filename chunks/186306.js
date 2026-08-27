n.d(t, { o: () => s }), n(321073);
var l = n(820066);
let r = new WeakMap(),
    i = new WeakMap(),
    s = {
        isMerging: (e) => i.get(e) ?? !0,
        isSaving: (e) => r.get(e) ?? !0,
        withoutMerging(e, t) {
            let n = this.isMerging(e);
            i.set(e, !1);
            try {
                t();
            } finally {
                i.set(e, n);
            }
        },
        withoutSaving(e, t) {
            let n = this.isSaving(e);
            r.set(e, !1);
            try {
                t();
            } finally {
                r.set(e, n);
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
                r = arguments.length > 3 ? arguments[3] : void 0,
                i = arguments.length > 4 ? arguments[4] : void 0;
            (i = i ?? e.selection), (r = r ?? l.VW.richValue(e));
            let { history: a } = e,
                u = s.currentEntry(e);
            for (
                null != u && (u.mergeable = !1), a.stack.length > 0 && (a.stack.length = a.index + 1);
                a.stack.length >= 250;
            )
                a.stack.shift();
            a.stack.push({ type: t, mergeable: n, createdAt: Date.now(), value: r, selection: i }),
                (a.index = a.stack.length - 1);
        },
        mergeEntry(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                { selection: n } = e,
                r = l.VW.richValue(e),
                i = s.currentEntry(e);
            null != i && ((i.value = r), (i.selection = n), t || (i.mergeable = !1));
        },
    };
function a(e, t, n, i) {
    let a = e.children,
        u = e.selection,
        o = s.isSaving(e);
    r.set(e, !1);
    try {
        let r = i();
        return (
            o &&
                (n
                    ? s.mergeEntry(e)
                    : e.children !== a
                      ? s.insertEntry(e, t, !1)
                      : s.isMerging(e) &&
                        null != e.selection &&
                        (null == u || !l.ZF.equals(e.selection, u)) &&
                        s.mergeEntry(e)),
            r
        );
    } finally {
        r.set(e, o);
    }
}

(n.d(t, { o: () => a }), n(321073));
var l = n(820066);
let r = new WeakMap(),
    i = new WeakMap(),
    a = {
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
        withSingleEntry: (e, t) => u(e, "other", !1, t),
        withMergedEntry: (e, t) => u(e, "other", !0, t),
        currentEntry: (e) => (e.history.stack.length > 0 ? e.history.stack[e.history.index] : null),
        insertOrMergeEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                l = a.currentEntry(e);
            a.isMerging(e) && l?.mergeable ? this.mergeEntry(e, n) : this.insertEntry(e, t, n);
        },
        insertEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = arguments.length > 3 ? arguments[3] : void 0,
                i = arguments.length > 4 ? arguments[4] : void 0;
            ((i = i ?? e.selection), (r = r ?? l.VW.richValue(e)));
            let { history: u } = e,
                o = a.currentEntry(e);
            for (
                null != o && (o.mergeable = !1), u.stack.length > 0 && (u.stack.length = u.index + 1);
                u.stack.length >= 250;
            )
                u.stack.shift();
            (u.stack.push({ type: t, mergeable: n, createdAt: Date.now(), value: r, selection: i }),
                (u.index = u.stack.length - 1));
        },
        mergeEntry(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                { selection: n } = e,
                r = l.VW.richValue(e),
                i = a.currentEntry(e);
            null != i && ((i.value = r), (i.selection = n), t || (i.mergeable = !1));
        },
    };
function u(e, t, n, i) {
    let u = e.children,
        o = e.selection,
        s = a.isSaving(e);
    r.set(e, !1);
    try {
        let r = i();
        return (
            s &&
                (n
                    ? a.mergeEntry(e)
                    : e.children !== u
                      ? a.insertEntry(e, t, !1)
                      : a.isMerging(e) &&
                        null != e.selection &&
                        (null == o || !l.ZF.equals(e.selection, o)) &&
                        a.mergeEntry(e)),
            r
        );
    } finally {
        r.set(e, s);
    }
}

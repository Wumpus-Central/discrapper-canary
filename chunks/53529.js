r.d(n, {
    T: function () {
        return c;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(887490);
let s = 250,
    l = new WeakMap(),
    u = new WeakMap(),
    c = {
        isMerging(e) {
            var n;
            return null === (n = u.get(e)) || void 0 === n || n;
        },
        isSaving(e) {
            var n;
            return null === (n = l.get(e)) || void 0 === n || n;
        },
        withoutMerging(e, n) {
            let r = this.isMerging(e);
            u.set(e, !1);
            try {
                n();
            } finally {
                u.set(e, r);
            }
        },
        withoutSaving(e, n) {
            let r = this.isSaving(e);
            l.set(e, !1);
            try {
                n();
            } finally {
                l.set(e, r);
            }
        },
        withSingleEntry: (e, n) => d(e, 'other', !1, n),
        withMergedEntry: (e, n) => d(e, 'other', !0, n),
        currentEntry: (e) => (e.history.stack.length > 0 ? e.history.stack[e.history.index] : null),
        insertOrMergeEntry(e, n) {
            let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = c.currentEntry(e);
            c.isMerging(e) && (null == i ? void 0 : i.mergeable) ? this.mergeEntry(e, r) : this.insertEntry(e, n, r);
        },
        insertEntry(e, n) {
            let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = arguments.length > 3 ? arguments[3] : void 0,
                a = arguments.length > 4 ? arguments[4] : void 0;
            (a = null != a ? a : e.selection), (i = null != i ? i : o.bN.richValue(e));
            let { history: l } = e,
                u = c.currentEntry(e);
            for (null != u && (u.mergeable = !1), l.stack.length > 0 && (l.stack.length = l.index + 1); l.stack.length >= s; ) l.stack.shift();
            l.stack.push({
                type: n,
                mergeable: r,
                createdAt: Date.now(),
                value: i,
                selection: a
            }),
                (l.index = l.stack.length - 1);
        },
        mergeEntry(e) {
            let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                { selection: r } = e,
                i = o.bN.richValue(e),
                a = c.currentEntry(e);
            null != a && ((a.value = i), (a.selection = r), !n && (a.mergeable = !1));
        }
    };
function d(e, n, r, i) {
    let a = e.children,
        s = e.selection,
        u = c.isSaving(e);
    l.set(e, !1);
    try {
        let l = i();
        return u && (r ? c.mergeEntry(e) : e.children !== a ? c.insertEntry(e, n, !1) : c.isMerging(e) && null != e.selection && (null == s || !o.M8.equals(e.selection, s)) && c.mergeEntry(e)), l;
    } finally {
        l.set(e, u);
    }
}

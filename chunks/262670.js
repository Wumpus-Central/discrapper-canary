"use strict";
function n(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                }),
            )),
            n.forEach(function (e) {
                var n, i, o;
                (n = t),
                    (i = e),
                    (o = r[e]),
                    i in n
                        ? Object.defineProperty(n, i, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                        : (n[i] = o);
            });
    }
    return t;
}
var i = r(414501),
    o = r(387739),
    a = r(68055),
    s = r(617179),
    u = r(954055),
    c = r(869639),
    l = r(279998),
    f = r(661551),
    p = r(116740),
    h = r(311610),
    d = f("draft_tree_data_support"),
    g = d ? s : a,
    y = p.List,
    v = p.Repeat;
t.exports = {
    insertAtomicBlock: function (t, e, r) {
        var a = t.getCurrentContent(),
            s = t.getSelection(),
            f = u.removeRange(a, s, "backward"),
            p = f.getSelectionAfter(),
            h = u.splitBlock(f, p),
            m = h.getSelectionAfter(),
            _ = u.setBlockType(h, m, "atomic"),
            b = o.create({ entity: e }),
            S = { key: l(), type: "atomic", text: r, characterList: y(v(b, r.length)) },
            w = { key: l(), type: "unstyled" };
        d && ((S = n({}, S, { nextSibling: w.key })), (w = n({}, w, { prevSibling: S.key })));
        var k = [new g(S), new g(w)],
            x = i.createFromArray(k),
            C = u.replaceWithFragment(_, m, x),
            E = C.merge({ selectionBefore: s, selectionAfter: C.getSelectionAfter().set("hasFocus", !0) });
        return c.push(t, E, "insert-fragment");
    },
    moveAtomicBlock: function (t, e, r, n) {
        var i,
            o = t.getCurrentContent(),
            a = t.getSelection();
        if ("before" === n || "after" === n) {
            var s = o.getBlockForKey("before" === n ? r.getStartKey() : r.getEndKey());
            i = h(o, e, s, n);
        } else {
            var l = u.removeRange(o, r, "backward"),
                f = l.getSelectionAfter(),
                p = l.getBlockForKey(f.getFocusKey());
            if (0 === f.getStartOffset()) i = h(l, e, p, "before");
            else if (f.getEndOffset() === p.getLength()) i = h(l, e, p, "after");
            else {
                var d = u.splitBlock(l, f),
                    g = d.getSelectionAfter(),
                    y = d.getBlockForKey(g.getFocusKey());
                i = h(d, e, y, "before");
            }
        }
        var v = i.merge({ selectionBefore: a, selectionAfter: i.getSelectionAfter().set("hasFocus", !0) });
        return c.push(t, v, "move-block");
    },
};

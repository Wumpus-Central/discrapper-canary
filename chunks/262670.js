function r(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}

function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var a = n(414501),
    s = n(387739),
    o = n(68055),
    l = n(617179),
    c = n(954055),
    u = n(869639),
    d = n(279998),
    f = n(661551),
    p = n(116740),
    _ = n(311610),
    h = f("draft_tree_data_support"),
    m = h ? l : o,
    g = p.List,
    E = p.Repeat;
e.exports = {
    insertAtomicBlock: function (e, t, n) {
        var i = e.getCurrentContent(),
            o = e.getSelection(),
            l = c.removeRange(i, o, "backward"),
            f = l.getSelectionAfter(),
            p = c.splitBlock(l, f),
            _ = p.getSelectionAfter(),
            b = c.setBlockType(p, _, "atomic"),
            y = s.create({
                entity: t,
            }),
            O = {
                key: d(),
                type: "atomic",
                text: n,
                characterList: g(E(y, n.length)),
            },
            A = {
                key: d(),
                type: "unstyled",
            };
        h &&
            ((O = r({}, O, {
                nextSibling: A.key,
            })),
            (A = r({}, A, {
                prevSibling: O.key,
            })));
        var v = [new m(O), new m(A)],
            S = a.createFromArray(v),
            I = c.replaceWithFragment(b, _, S),
            T = I.merge({
                selectionBefore: o,
                selectionAfter: I.getSelectionAfter().set("hasFocus", !0),
            });
        return u.push(e, T, "insert-fragment");
    },
    moveAtomicBlock: function (e, t, n, r) {
        var i,
            a = e.getCurrentContent(),
            s = e.getSelection();
        if ("before" === r || "after" === r) {
            var o = a.getBlockForKey("before" === r ? n.getStartKey() : n.getEndKey());
            i = _(a, t, o, r);
        } else {
            var l = c.removeRange(a, n, "backward"),
                d = l.getSelectionAfter(),
                f = l.getBlockForKey(d.getFocusKey());
            if (0 === d.getStartOffset()) i = _(l, t, f, "before");
            else if (d.getEndOffset() === f.getLength()) i = _(l, t, f, "after");
            else {
                var p = c.splitBlock(l, d),
                    h = p.getSelectionAfter(),
                    m = p.getBlockForKey(h.getFocusKey());
                i = _(p, t, m, "before");
            }
        }
        var g = i.merge({
            selectionBefore: s,
            selectionAfter: i.getSelectionAfter().set("hasFocus", !0),
        });
        return u.push(e, g, "move-block");
    },
};

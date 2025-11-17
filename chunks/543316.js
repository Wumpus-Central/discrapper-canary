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
var a = n(126182),
    o = n(50153),
    s = n(117242),
    l = n(309987),
    c = n(720218),
    u = n(384404),
    d = n(703579),
    f = n(40375),
    _ = n(65183),
    p = n(423331),
    h = f("draft_tree_data_support"),
    m = h ? l : s,
    g = _.List,
    E = _.Repeat;
e.exports = {
    insertAtomicBlock: function (e, t, n) {
        var i = e.getCurrentContent(),
            s = e.getSelection(),
            l = c.removeRange(i, s, "backward"),
            f = l.getSelectionAfter(),
            _ = c.splitBlock(l, f),
            p = _.getSelectionAfter(),
            b = c.setBlockType(_, p, "atomic"),
            y = o.create({ entity: t }),
            O = {
                key: d(),
                type: "atomic",
                text: n,
                characterList: g(E(y, n.length)),
            },
            v = {
                key: d(),
                type: "unstyled",
            };
        h && ((O = r({}, O, { nextSibling: v.key })), (v = r({}, v, { prevSibling: O.key })));
        var I = [new m(O), new m(v)],
            T = a.createFromArray(I),
            S = c.replaceWithFragment(b, p, T),
            A = S.merge({
                selectionBefore: s,
                selectionAfter: S.getSelectionAfter().set("hasFocus", !0),
            });
        return u.push(e, A, "insert-fragment");
    },
    moveAtomicBlock: function (e, t, n, r) {
        var i,
            a = e.getCurrentContent(),
            o = e.getSelection();
        if ("before" === r || "after" === r) {
            var s = a.getBlockForKey("before" === r ? n.getStartKey() : n.getEndKey());
            i = p(a, t, s, r);
        } else {
            var l = c.removeRange(a, n, "backward"),
                d = l.getSelectionAfter(),
                f = l.getBlockForKey(d.getFocusKey());
            if (0 === d.getStartOffset()) i = p(l, t, f, "before");
            else if (d.getEndOffset() === f.getLength()) i = p(l, t, f, "after");
            else {
                var _ = c.splitBlock(l, d),
                    h = _.getSelectionAfter(),
                    m = _.getBlockForKey(h.getFocusKey());
                i = p(_, t, m, "before");
            }
        }
        var g = i.merge({
            selectionBefore: o,
            selectionAfter: i.getSelectionAfter().set("hasFocus", !0),
        });
        return u.push(e, g, "move-block");
    },
};

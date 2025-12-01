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
    p = n(65183),
    _ = n(423331),
    m = f("draft_tree_data_support"),
    h = m ? l : s,
    g = p.List,
    E = p.Repeat;
e.exports = {
    insertAtomicBlock: function (e, t, n) {
        var i = e.getCurrentContent(),
            s = e.getSelection(),
            l = c.removeRange(i, s, "backward"),
            f = l.getSelectionAfter(),
            p = c.splitBlock(l, f),
            _ = p.getSelectionAfter(),
            b = c.setBlockType(p, _, "atomic"),
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
        m && ((O = r({}, O, { nextSibling: v.key })), (v = r({}, v, { prevSibling: O.key })));
        var S = [new h(O), new h(v)],
            I = a.createFromArray(S),
            T = c.replaceWithFragment(b, _, I),
            A = T.merge({
                selectionBefore: s,
                selectionAfter: T.getSelectionAfter().set("hasFocus", !0),
            });
        return u.push(e, A, "insert-fragment");
    },
    moveAtomicBlock: function (e, t, n, r) {
        var i,
            a = e.getCurrentContent(),
            o = e.getSelection();
        if ("before" === r || "after" === r) {
            var s = a.getBlockForKey("before" === r ? n.getStartKey() : n.getEndKey());
            i = _(a, t, s, r);
        } else {
            var l = c.removeRange(a, n, "backward"),
                d = l.getSelectionAfter(),
                f = l.getBlockForKey(d.getFocusKey());
            if (0 === d.getStartOffset()) i = _(l, t, f, "before");
            else if (d.getEndOffset() === f.getLength()) i = _(l, t, f, "after");
            else {
                var p = c.splitBlock(l, d),
                    m = p.getSelectionAfter(),
                    h = p.getBlockForKey(m.getFocusKey());
                i = _(p, t, h, "before");
            }
        }
        var g = i.merge({
            selectionBefore: o,
            selectionAfter: i.getSelectionAfter().set("hasFocus", !0),
        });
        return u.push(e, g, "move-block");
    },
};

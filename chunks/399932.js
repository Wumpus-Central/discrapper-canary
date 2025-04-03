function n(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                })
            )),
            n.forEach(function (e) {
                var n, i, o;
                (n = t),
                    (i = e),
                    (o = r[e]),
                    i in n
                        ? Object.defineProperty(n, i, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (n[i] = o);
            });
    }
    return t;
}
var i = r(763453),
    o = r(310958),
    a = r(7298),
    u = r(806998),
    s = r(166763),
    c = r(133092),
    l = r(344751),
    f = r(218675),
    p = r(65183),
    h = r(161065),
    d = f('draft_tree_data_support'),
    g = d ? u : a,
    y = p.List,
    v = p.Repeat;
t.exports = {
    insertAtomicBlock: function (t, e, r) {
        var a = t.getCurrentContent(),
            u = t.getSelection(),
            f = s.removeRange(a, u, 'backward'),
            p = f.getSelectionAfter(),
            h = s.splitBlock(f, p),
            m = h.getSelectionAfter(),
            _ = s.setBlockType(h, m, 'atomic'),
            b = o.create({ entity: e }),
            S = {
                key: l(),
                type: 'atomic',
                text: r,
                characterList: y(v(b, r.length))
            },
            w = {
                key: l(),
                type: 'unstyled'
            };
        d && ((S = n({}, S, { nextSibling: w.key })), (w = n({}, w, { prevSibling: S.key })));
        var x = [new g(S), new g(w)],
            k = i.createFromArray(x),
            E = s.replaceWithFragment(_, m, k),
            C = E.merge({
                selectionBefore: u,
                selectionAfter: E.getSelectionAfter().set('hasFocus', !0)
            });
        return c.push(t, C, 'insert-fragment');
    },
    moveAtomicBlock: function (t, e, r, n) {
        var i,
            o = t.getCurrentContent(),
            a = t.getSelection();
        if ('before' === n || 'after' === n) {
            var u = o.getBlockForKey('before' === n ? r.getStartKey() : r.getEndKey());
            i = h(o, e, u, n);
        } else {
            var l = s.removeRange(o, r, 'backward'),
                f = l.getSelectionAfter(),
                p = l.getBlockForKey(f.getFocusKey());
            if (0 === f.getStartOffset()) i = h(l, e, p, 'before');
            else if (f.getEndOffset() === p.getLength()) i = h(l, e, p, 'after');
            else {
                var d = s.splitBlock(l, f),
                    g = d.getSelectionAfter(),
                    y = d.getBlockForKey(g.getFocusKey());
                i = h(d, e, y, 'before');
            }
        }
        var v = i.merge({
            selectionBefore: a,
            selectionAfter: i.getSelectionAfter().set('hasFocus', !0)
        });
        return c.push(t, v, 'move-block');
    }
};

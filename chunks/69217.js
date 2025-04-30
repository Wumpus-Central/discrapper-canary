var n = r(763453),
    i = r(806998),
    o = r(65183),
    a = r(489593),
    u = r(581079),
    s = r(720720),
    c = o.List,
    l = function (t, e, r, n, i, o) {
        var u = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 'REPLACE_WITH_NEW_DATA',
            s = r.get(i),
            c = s.getText(),
            l = s.getCharacterList(),
            f = o + n.getText().length,
            p = null;
        switch (u) {
            case 'MERGE_OLD_DATA_TO_NEW_DATA':
                p = n.getData().merge(s.getData());
                break;
            case 'REPLACE_WITH_NEW_DATA':
                p = n.getData();
        }
        var h = s.merge({
            text: c.slice(0, o) + n.getText() + c.slice(o),
            characterList: a(l, n.getCharacterList(), o),
            data: p
        });
        return t.merge({
            blockMap: r.set(i, h),
            selectionBefore: e,
            selectionAfter: e.merge({
                anchorKey: i,
                anchorOffset: f,
                focusKey: i,
                focusOffset: f,
                isBackward: !1
            })
        });
    },
    f = function (t, e, r) {
        var n = t.getText(),
            i = t.getCharacterList(),
            o = n.slice(0, e),
            a = i.slice(0, e),
            u = r.first();
        return t.merge({
            text: o + u.getText(),
            characterList: a.concat(u.getCharacterList()),
            type: o ? t.getType() : u.getType(),
            data: u.getData()
        });
    },
    p = function (t, e, r) {
        var n = t.getText(),
            i = t.getCharacterList(),
            o = n.length,
            a = n.slice(e, o),
            u = i.slice(e, o),
            s = r.last();
        return s.merge({
            text: s.getText() + a,
            characterList: s.getCharacterList().concat(u),
            data: s.getData()
        });
    },
    h = function (t, e) {
        var r = t.getKey(),
            n = t,
            i = [];
        for (e.get(r) && i.push(r); n && n.getNextSiblingKey(); ) {
            var o = n.getNextSiblingKey();
            if (!o) break;
            i.push(o), (n = e.get(o));
        }
        return i;
    },
    d = function (t, e, r, o, a, u) {
        var s,
            l = r.first() instanceof i,
            d = [],
            g = o.size,
            y = r.get(a),
            v = o.first(),
            m = o.last(),
            _ = m.getLength(),
            b = m.getKey(),
            S = l && (!y.getChildKeys().isEmpty() || !v.getChildKeys().isEmpty());
        r.forEach(function (t, e) {
            if (e !== a) return void d.push(t);
            S ? d.push(t) : d.push(f(t, u, o)),
                o.slice(+!S, g - 1).forEach(function (t) {
                    return d.push(t);
                }),
                d.push(p(t, u, o));
        });
        var w = n.createFromArray(d);
        return (
            l &&
                (w = (s = w).withMutations(function (t) {
                    var e = y.getKey(),
                        r = v.getKey(),
                        n = y.getNextSiblingKey(),
                        i = y.getParentKey(),
                        o = h(v, s),
                        a = o[o.length - 1];
                    if (
                        (t.get(r) ? (t.setIn([e, 'nextSibling'], r), t.setIn([r, 'prevSibling'], e)) : (t.setIn([e, 'nextSibling'], v.getNextSiblingKey()), t.setIn([v.getNextSiblingKey(), 'prevSibling'], e)),
                        t.setIn([a, 'nextSibling'], n),
                        n && t.setIn([n, 'prevSibling'], a),
                        o.forEach(function (e) {
                            return t.setIn([e, 'parent'], i);
                        }),
                        i)
                    ) {
                        var u = s.get(i).getChildKeys(),
                            l = u.indexOf(e),
                            f = u.toArray();
                        f.splice.apply(f, [l + 1, 0].concat(o)), t.setIn([i, 'children'], c(f));
                    }
                })),
            t.merge({
                blockMap: w,
                selectionBefore: e,
                selectionAfter: e.merge({
                    anchorKey: b,
                    anchorOffset: _,
                    focusKey: b,
                    focusOffset: _,
                    isBackward: !1
                })
            })
        );
    };
t.exports = function (t, e, r) {
    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'REPLACE_WITH_NEW_DATA';
    e.isCollapsed() || u(!1);
    var o = t.getBlockMap(),
        a = s(r),
        c = e.getStartKey(),
        f = e.getStartOffset(),
        p = o.get(c);
    return (p instanceof i && (p.getChildKeys().isEmpty() || u(!1)), 1 === a.size) ? l(t, e, o, a.first(), c, f, n) : d(t, e, o, a, c, f);
};

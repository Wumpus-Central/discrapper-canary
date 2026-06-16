"use strict";
var n = r(414501),
    i = r(617179),
    o = r(116740),
    a = r(885578),
    s = r(797686),
    u = r(541635),
    c = o.List,
    l = function (t, e, r, n, i, o) {
        var s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "REPLACE_WITH_NEW_DATA",
            u = r.get(i),
            c = u.getText(),
            l = u.getCharacterList(),
            f = o + n.getText().length,
            p = null;
        switch (s) {
            case "MERGE_OLD_DATA_TO_NEW_DATA":
                p = n.getData().merge(u.getData());
                break;
            case "REPLACE_WITH_NEW_DATA":
                p = n.getData();
        }
        var h = u.merge({
            text: c.slice(0, o) + n.getText() + c.slice(o),
            characterList: a(l, n.getCharacterList(), o),
            data: p,
        });
        return t.merge({
            blockMap: r.set(i, h),
            selectionBefore: e,
            selectionAfter: e.merge({ anchorKey: i, anchorOffset: f, focusKey: i, focusOffset: f, isBackward: !1 }),
        });
    },
    f = function (t, e, r) {
        var n = t.getText(),
            i = t.getCharacterList(),
            o = n.slice(0, e),
            a = i.slice(0, e),
            s = r.first();
        return t.merge({
            text: o + s.getText(),
            characterList: a.concat(s.getCharacterList()),
            type: o ? t.getType() : s.getType(),
            data: s.getData(),
        });
    },
    p = function (t, e, r) {
        var n = t.getText(),
            i = t.getCharacterList(),
            o = n.length,
            a = n.slice(e, o),
            s = i.slice(e, o),
            u = r.last();
        return u.merge({ text: u.getText() + a, characterList: u.getCharacterList().concat(s), data: u.getData() });
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
    d = function (t, e, r, o, a, s) {
        var u,
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
            e !== a
                ? d.push(t)
                : (S ? d.push(t) : d.push(f(t, s, o)),
                  o.slice(+!S, g - 1).forEach(function (t) {
                      return d.push(t);
                  }),
                  d.push(p(t, s, o)));
        });
        var w = n.createFromArray(d);
        return (
            l &&
                (w = (u = w).withMutations(function (t) {
                    var e = y.getKey(),
                        r = v.getKey(),
                        n = y.getNextSiblingKey(),
                        i = y.getParentKey(),
                        o = h(v, u),
                        a = o[o.length - 1];
                    if (
                        (t.get(r)
                            ? (t.setIn([e, "nextSibling"], r), t.setIn([r, "prevSibling"], e))
                            : (t.setIn([e, "nextSibling"], v.getNextSiblingKey()),
                              t.setIn([v.getNextSiblingKey(), "prevSibling"], e)),
                        t.setIn([a, "nextSibling"], n),
                        n && t.setIn([n, "prevSibling"], a),
                        o.forEach(function (e) {
                            return t.setIn([e, "parent"], i);
                        }),
                        i)
                    ) {
                        var s = u.get(i).getChildKeys(),
                            l = s.indexOf(e),
                            f = s.toArray();
                        f.splice.apply(f, [l + 1, 0].concat(o)), t.setIn([i, "children"], c(f));
                    }
                })),
            t.merge({
                blockMap: w,
                selectionBefore: e,
                selectionAfter: e.merge({ anchorKey: b, anchorOffset: _, focusKey: b, focusOffset: _, isBackward: !1 }),
            })
        );
    };
t.exports = function (t, e, r) {
    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "REPLACE_WITH_NEW_DATA";
    e.isCollapsed() || s(!1);
    var o = t.getBlockMap(),
        a = u(r),
        c = e.getStartKey(),
        f = e.getStartOffset(),
        p = o.get(c);
    return (p instanceof i && (p.getChildKeys().isEmpty() || s(!1)), 1 === a.size)
        ? l(t, e, o, a.first(), c, f, n)
        : d(t, e, o, a, c, f);
};

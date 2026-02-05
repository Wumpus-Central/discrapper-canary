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
var i = r(68055),
    o = r(617179),
    a = r(244767),
    s = r(45069),
    u = r(144531);
r(9011);
var c = r(225758),
    l = r(190346),
    f = r(622114),
    p = r(185607),
    h = r(279998),
    d = r(661551),
    g = r(116740),
    y = r(797686),
    v = d("draft_tree_data_support"),
    m = g.List,
    _ = g.Map,
    b = g.OrderedMap,
    S = function (t, e) {
        var r = t.key,
            n = t.type,
            i = t.data;
        return {
            text: t.text,
            depth: t.depth || 0,
            type: n || "unstyled",
            key: r || h(),
            data: _(i),
            characterList: w(t, e),
        };
    },
    w = function (t, e) {
        var r = t.text,
            i = t.entityRanges;
        return l(
            p(r, t.inlineStyleRanges || []),
            f(
                r,
                (i || [])
                    .filter(function (t) {
                        return e.hasOwnProperty(t.key);
                    })
                    .map(function (t) {
                        return n({}, t, { key: e[t.key] });
                    }),
            ),
        );
    },
    k = function (t) {
        return n({}, t, { key: t.key || h() });
    },
    x = function (t, e, r) {
        var i = e.map(function (t) {
            return n({}, t, { parentRef: r });
        });
        return t.concat(i.reverse());
    },
    C = function (t, e) {
        var r,
            a = t.blocks.find(function (t) {
                return Array.isArray(t.children) && t.children.length > 0;
            }),
            s = v && !a ? u.fromRawStateToRawTreeState(t).blocks : t.blocks;
        return v
            ? s.map(k).reduce(function (t, r, i) {
                  Array.isArray(r.children) || y(!1);
                  var a = r.children.map(k),
                      u = new o(
                          n({}, S(r, e), {
                              prevSibling: 0 === i ? null : s[i - 1].key,
                              nextSibling: i === s.length - 1 ? null : s[i + 1].key,
                              children: m(
                                  a.map(function (t) {
                                      return t.key;
                                  }),
                              ),
                          }),
                      );
                  t = t.set(u.getKey(), u);
                  for (var c = x([], a, u); c.length > 0; ) {
                      var l = c.pop(),
                          f = l.parentRef,
                          p = f.getChildKeys(),
                          h = p.indexOf(l.key),
                          d = Array.isArray(l.children);
                      if (!d) {
                          d || y(!1);
                          break;
                      }
                      var g = l.children.map(k),
                          v = new o(
                              n({}, S(l, e), {
                                  parent: f.getKey(),
                                  children: m(
                                      g.map(function (t) {
                                          return t.key;
                                      }),
                                  ),
                                  prevSibling: 0 === h ? null : p.get(h - 1),
                                  nextSibling: h === p.size - 1 ? null : p.get(h + 1),
                              }),
                          );
                      (t = t.set(v.getKey(), v)), (c = x(c, g, v));
                  }
                  return t;
              }, b())
            : ((r = a ? u.fromRawTreeStateToRawState(t).blocks : s),
              b(
                  r.map(function (t) {
                      var r = new i(S(t, e));
                      return [r.getKey(), r];
                  }),
              ));
    },
    E = function (t) {
        var e = t.entityMap,
            r = {};
        return (
            Object.keys(e).forEach(function (t) {
                var n = e[t],
                    i = n.type,
                    o = n.mutability,
                    a = n.data;
                r[t] = s.__create(i, o, a || {});
            }),
            r
        );
    };
t.exports = function (t) {
    Array.isArray(t.blocks) || y(!1);
    var e = E(t),
        r = C(t, e),
        n = r.isEmpty() ? new c() : c.createEmpty(r.first().getKey());
    return new a({ blockMap: r, entityMap: e, selectionBefore: n, selectionAfter: n });
};

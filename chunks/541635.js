"use strict";
var n = r(617179),
    i = r(279998),
    o = r(116740).OrderedMap,
    a = function (t) {
        var e,
            r = {};
        return o(
            t
                .withMutations(function (t) {
                    t.forEach(function (n, o) {
                        var a = n.getKey(),
                            s = n.getNextSiblingKey(),
                            u = n.getPrevSiblingKey(),
                            c = n.getChildKeys(),
                            l = n.getParentKey(),
                            f = i();
                        if (
                            ((r[a] = f),
                            s && (t.get(s) ? t.setIn([s, "prevSibling"], f) : t.setIn([a, "nextSibling"], null)),
                            u && (t.get(u) ? t.setIn([u, "nextSibling"], f) : t.setIn([a, "prevSibling"], null)),
                            l && t.get(l))
                        ) {
                            var p = t.get(l).getChildKeys();
                            t.setIn([l, "children"], p.set(p.indexOf(n.getKey()), f));
                        } else
                            t.setIn([a, "parent"], null),
                                e &&
                                    (t.setIn([e.getKey(), "nextSibling"], f),
                                    t.setIn([a, "prevSibling"], r[e.getKey()])),
                                (e = t.get(a));
                        c.forEach(function (e) {
                            t.get(e)
                                ? t.setIn([e, "parent"], f)
                                : t.setIn(
                                      [a, "children"],
                                      n.getChildKeys().filter(function (t) {
                                          return t !== e;
                                      }),
                                  );
                        });
                    });
                })
                .toArray()
                .map(function (t) {
                    return [r[t.getKey()], t.set("key", r[t.getKey()])];
                }),
        );
    };
t.exports = function (t) {
    return t.first() instanceof n
        ? a(t)
        : o(
              t.toArray().map(function (t) {
                  var e = i();
                  return [e, t.set("key", e)];
              }),
          );
};

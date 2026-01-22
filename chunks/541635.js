var r = n(617179),
    i = n(279998),
    a = n(116740).OrderedMap,
    s = function (e) {
        var t,
            n = {};
        return a(
            e
                .withMutations(function (e) {
                    e.forEach(function (r, a) {
                        var s = r.getKey(),
                            o = r.getNextSiblingKey(),
                            l = r.getPrevSiblingKey(),
                            c = r.getChildKeys(),
                            u = r.getParentKey(),
                            d = i();
                        if (
                            ((n[s] = d),
                            o && (e.get(o) ? e.setIn([o, "prevSibling"], d) : e.setIn([s, "nextSibling"], null)),
                            l && (e.get(l) ? e.setIn([l, "nextSibling"], d) : e.setIn([s, "prevSibling"], null)),
                            u && e.get(u))
                        ) {
                            var f = e.get(u).getChildKeys();
                            e.setIn([u, "children"], f.set(f.indexOf(r.getKey()), d));
                        } else
                            e.setIn([s, "parent"], null),
                                t &&
                                    (e.setIn([t.getKey(), "nextSibling"], d),
                                    e.setIn([s, "prevSibling"], n[t.getKey()])),
                                (t = e.get(s));
                        c.forEach(function (t) {
                            e.get(t)
                                ? e.setIn([t, "parent"], d)
                                : e.setIn(
                                      [s, "children"],
                                      r.getChildKeys().filter(function (e) {
                                          return e !== t;
                                      }),
                                  );
                        });
                    });
                })
                .toArray()
                .map(function (e) {
                    return [n[e.getKey()], e.set("key", n[e.getKey()])];
                }),
        );
    },
    o = function (e) {
        return a(
            e.toArray().map(function (e) {
                var t = i();
                return [t, e.set("key", t)];
            }),
        );
    };
e.exports = function (e) {
    return e.first() instanceof r ? s(e) : o(e);
};

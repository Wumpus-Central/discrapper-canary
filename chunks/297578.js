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
var a = n(117242),
    o = n(309987),
    s = n(591305),
    l = n(584072),
    c = n(829906),
    u = n(581079),
    d = function (e, t) {
        return {
            key: e.getKey(),
            text: e.getText(),
            type: e.getType(),
            depth: e.getDepth(),
            inlineStyleRanges: c(e),
            entityRanges: l(e, t),
            data: e.getData().toObject(),
        };
    },
    f = function (e, t, n, i) {
        if (e instanceof a) return void n.push(d(e, t));
        e instanceof o || u(!1);
        var s = e.getParentKey(),
            l = (i[e.getKey()] = r({}, d(e, t), { children: [] }));
        if (s) return void i[s].children.push(l);
        n.push(l);
    },
    p = function (e, t) {
        var n = t.entityMap,
            r = [],
            i = {},
            a = {},
            o = 0;
        return (
            e.getBlockMap().forEach(function (e) {
                e.findEntityRanges(
                    function (e) {
                        return null !== e.getEntity();
                    },
                    function (t) {
                        var r = e.getEntityAt(t),
                            i = s.stringify(r);
                        !a[i] && ((a[i] = r), (n[i] = "".concat(o)), o++);
                    },
                ),
                    f(e, n, r, i);
            }),
            {
                blocks: r,
                entityMap: n,
            }
        );
    },
    _ = function (e, t) {
        var n = t.blocks,
            r = t.entityMap,
            i = {};
        return (
            Object.keys(r).forEach(function (t, n) {
                var r = e.getEntity(s.unstringify(t));
                i[n] = {
                    type: r.getType(),
                    mutability: r.getMutability(),
                    data: r.getData(),
                };
            }),
            {
                blocks: n,
                entityMap: i,
            }
        );
    };
e.exports = function (e) {
    var t = {
        entityMap: {},
        blocks: [],
    };
    return (t = p(e, t)), (t = _(e, t));
};

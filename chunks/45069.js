"use strict";
var n = r(630678),
    i = r(116740),
    o = r(797686),
    a = (0, i.Map)(),
    s = 0;
function u(t, e) {
    console.warn("WARNING: " + t + ' will be deprecated soon!\nPlease use "' + e + '" instead.');
}
var c = {
    getLastCreatedEntityKey: function () {
        return (
            u("DraftEntity.getLastCreatedEntityKey", "contentState.getLastCreatedEntityKey"),
            c.__getLastCreatedEntityKey()
        );
    },
    create: function (t, e, r) {
        return u("DraftEntity.create", "contentState.createEntity"), c.__create(t, e, r);
    },
    add: function (t) {
        return u("DraftEntity.add", "contentState.addEntity"), c.__add(t);
    },
    get: function (t) {
        return u("DraftEntity.get", "contentState.getEntity"), c.__get(t);
    },
    mergeData: function (t, e) {
        return u("DraftEntity.mergeData", "contentState.mergeEntityData"), c.__mergeData(t, e);
    },
    replaceData: function (t, e) {
        return u("DraftEntity.replaceData", "contentState.replaceEntityData"), c.__replaceData(t, e);
    },
    __getLastCreatedEntityKey: function () {
        return "" + s;
    },
    __create: function (t, e, r) {
        return c.__add(new n({ type: t, mutability: e, data: r || {} }));
    },
    __add: function (t) {
        var e = "" + ++s;
        return (a = a.set(e, t)), e;
    },
    __get: function (t) {
        var e = a.get(t);
        return e || o(!1), e;
    },
    __mergeData: function (t, e) {
        var r = c.__get(t),
            n = (function (t) {
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
                                    ? Object.defineProperty(n, i, {
                                          value: o,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (n[i] = o);
                        });
                }
                return t;
            })({}, r.getData(), e),
            i = r.set("data", n);
        return (a = a.set(t, i)), i;
    },
    __replaceData: function (t, e) {
        var r = c.__get(t).set("data", e);
        return (a = a.set(t, r)), r;
    },
};
t.exports = c;

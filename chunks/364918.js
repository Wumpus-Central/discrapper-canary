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
var a = n(722798),
    o = n(65183),
    s = n(581079),
    l = (0, o.Map)(),
    c = 0;
function u(e, t) {
    console.warn("WARNING: " + e + ' will be deprecated soon!\nPlease use "' + t + '" instead.');
}
var d = {
    getLastCreatedEntityKey: function () {
        return (
            u("DraftEntity.getLastCreatedEntityKey", "contentState.getLastCreatedEntityKey"),
            d.__getLastCreatedEntityKey()
        );
    },
    create: function (e, t, n) {
        return u("DraftEntity.create", "contentState.createEntity"), d.__create(e, t, n);
    },
    add: function (e) {
        return u("DraftEntity.add", "contentState.addEntity"), d.__add(e);
    },
    get: function (e) {
        return u("DraftEntity.get", "contentState.getEntity"), d.__get(e);
    },
    mergeData: function (e, t) {
        return u("DraftEntity.mergeData", "contentState.mergeEntityData"), d.__mergeData(e, t);
    },
    replaceData: function (e, t) {
        return u("DraftEntity.replaceData", "contentState.replaceEntityData"), d.__replaceData(e, t);
    },
    __getLastCreatedEntityKey: function () {
        return "" + c;
    },
    __create: function (e, t, n) {
        return d.__add(
            new a({
                type: e,
                mutability: t,
                data: n || {},
            }),
        );
    },
    __add: function (e) {
        var t = "" + ++c;
        return (l = l.set(t, e)), t;
    },
    __get: function (e) {
        var t = l.get(e);
        return t || s(!1), t;
    },
    __mergeData: function (e, t) {
        var n = d.__get(e),
            i = r({}, n.getData(), t),
            a = n.set("data", i);
        return (l = l.set(e, a)), a;
    },
    __replaceData: function (e, t) {
        var n = d.__get(e).set("data", t);
        return (l = l.set(e, n)), n;
    },
};
e.exports = d;

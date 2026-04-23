"use strict";
r.d(t, { A: () => y });
var a = r(1139),
    n = r(416886),
    o = r(106526),
    s = r(64700),
    i = r(223108),
    l = r.n(i),
    c = r(189776),
    u = r(531228),
    f = r(609822),
    b = r(790777),
    h = r(1514),
    d = ["getItemString", "keyPath", "labelRenderer", "styling", "value", "valueRenderer", "isCustomNode"];
function p(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
    }
    return r;
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? p(Object(r), !0).forEach(function (t) {
                  (0, n.A)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : p(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var g = function (e) {
    var t = e.getItemString,
        r = e.keyPath,
        n = e.labelRenderer,
        i = e.styling,
        l = e.value,
        p = e.valueRenderer,
        g = e.isCustomNode,
        y = (0, o.A)(e, d),
        v = g(l) ? "Custom" : (0, c.A)(l),
        w = {
            getItemString: t,
            key: r[0],
            keyPath: r,
            labelRenderer: n,
            nodeType: v,
            styling: i,
            value: l,
            valueRenderer: p,
        },
        M = m(m(m({}, y), w), {}, { data: l, isCustomNode: g });
    switch (v) {
        case "Object":
        case "Error":
        case "WeakMap":
        case "WeakSet":
            return s.createElement(u.A, M);
        case "Array":
            return s.createElement(f.A, M);
        case "Iterable":
        case "Map":
        case "Set":
            return s.createElement(b.A, M);
        case "String":
            return s.createElement(
                h.A,
                (0, a.A)({}, w, {
                    valueGetter: function (e) {
                        return '"'.concat(e, '"');
                    },
                }),
            );
        case "Number":
        case "Custom":
            return s.createElement(h.A, w);
        case "Boolean":
            return s.createElement(
                h.A,
                (0, a.A)({}, w, {
                    valueGetter: function (e) {
                        return e ? "true" : "false";
                    },
                }),
            );
        case "Date":
            return s.createElement(
                h.A,
                (0, a.A)({}, w, {
                    valueGetter: function (e) {
                        return e.toISOString();
                    },
                }),
            );
        case "Null":
            return s.createElement(
                h.A,
                (0, a.A)({}, w, {
                    valueGetter: function () {
                        return "null";
                    },
                }),
            );
        case "Undefined":
            return s.createElement(
                h.A,
                (0, a.A)({}, w, {
                    valueGetter: function () {
                        return "undefined";
                    },
                }),
            );
        case "Function":
        case "Symbol":
            return s.createElement(
                h.A,
                (0, a.A)({}, w, {
                    valueGetter: function (e) {
                        return e.toString();
                    },
                }),
            );
        default:
            return s.createElement(
                h.A,
                (0, a.A)({}, w, {
                    valueGetter: function () {
                        return "<".concat(v, ">");
                    },
                }),
            );
    }
};
g.propTypes = {
    getItemString: l().func.isRequired,
    keyPath: l().arrayOf(l().oneOfType([l().string, l().number]).isRequired).isRequired,
    labelRenderer: l().func.isRequired,
    styling: l().func.isRequired,
    value: l().any,
    valueRenderer: l().func.isRequired,
    isCustomNode: l().func.isRequired,
};
let y = g;

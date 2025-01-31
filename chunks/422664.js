r.d(t, { Z: () => y });
var a = r(910974),
    n = r(621028),
    s = r(190293),
    o = r(192379),
    i = r(639519),
    c = r.n(i),
    l = r(101933),
    u = r(612415),
    f = r(988819),
    b = r(905692),
    d = r(885533),
    h = ['getItemString', 'keyPath', 'labelRenderer', 'styling', 'value', 'valueRenderer', 'isCustomNode'];
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
                  (0, n.Z)(e, t, r[t]);
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
        c = e.value,
        p = e.valueRenderer,
        g = e.isCustomNode,
        y = (0, s.Z)(e, h),
        v = g(c) ? 'Custom' : (0, l.Z)(c),
        Z = {
            getItemString: t,
            key: r[0],
            keyPath: r,
            labelRenderer: n,
            nodeType: v,
            styling: i,
            value: c,
            valueRenderer: p
        },
        w = m(
            m(m({}, y), Z),
            {},
            {
                data: c,
                isCustomNode: g
            }
        );
    switch (v) {
        case 'Object':
        case 'Error':
        case 'WeakMap':
        case 'WeakSet':
            return o.createElement(u.Z, w);
        case 'Array':
            return o.createElement(f.Z, w);
        case 'Iterable':
        case 'Map':
        case 'Set':
            return o.createElement(b.Z, w);
        case 'String':
            return o.createElement(
                d.Z,
                (0, a.Z)({}, Z, {
                    valueGetter: function (e) {
                        return '"'.concat(e, '"');
                    }
                })
            );
        case 'Number':
        case 'Custom':
            return o.createElement(d.Z, Z);
        case 'Boolean':
            return o.createElement(
                d.Z,
                (0, a.Z)({}, Z, {
                    valueGetter: function (e) {
                        return e ? 'true' : 'false';
                    }
                })
            );
        case 'Date':
            return o.createElement(
                d.Z,
                (0, a.Z)({}, Z, {
                    valueGetter: function (e) {
                        return e.toISOString();
                    }
                })
            );
        case 'Null':
            return o.createElement(
                d.Z,
                (0, a.Z)({}, Z, {
                    valueGetter: function () {
                        return 'null';
                    }
                })
            );
        case 'Undefined':
            return o.createElement(
                d.Z,
                (0, a.Z)({}, Z, {
                    valueGetter: function () {
                        return 'undefined';
                    }
                })
            );
        case 'Function':
        case 'Symbol':
            return o.createElement(
                d.Z,
                (0, a.Z)({}, Z, {
                    valueGetter: function (e) {
                        return e.toString();
                    }
                })
            );
        default:
            return o.createElement(
                d.Z,
                (0, a.Z)({}, Z, {
                    valueGetter: function () {
                        return '<'.concat(v, '>');
                    }
                })
            );
    }
};
g.propTypes = {
    getItemString: c().func.isRequired,
    keyPath: c().arrayOf(c().oneOfType([c().string, c().number]).isRequired).isRequired,
    labelRenderer: c().func.isRequired,
    styling: c().func.isRequired,
    value: c().any,
    valueRenderer: c().func.isRequired,
    isCustomNode: c().func.isRequired
};
let y = g;

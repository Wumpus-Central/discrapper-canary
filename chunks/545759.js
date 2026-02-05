"use strict";
n.d(t, { U: () => f });
var r = n(790525),
    i = n(726402),
    a = n(389704),
    s = n(821085),
    o = n(8885),
    l = n(519948),
    u = n(182569),
    c = n(444746),
    d = { placement: "bottom", modifiers: [], strategy: "absolute" };
function _() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function (e) {
        return !(e && "function" == typeof e.getBoundingClientRect);
    });
}
function f(e) {
    void 0 === e && (e = {});
    var t = e,
        n = t.defaultModifiers,
        f = void 0 === n ? [] : n,
        p = t.defaultOptions,
        h = void 0 === p ? d : p;
    return function (e, t, n) {
        void 0 === n && (n = h);
        var p = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, d, h),
                modifiersData: {},
                elements: { reference: e, popper: t },
                attributes: {},
                styles: {},
            },
            m = [],
            g = !1,
            E = {
                state: p,
                setOptions: function (n) {
                    var r = "function" == typeof n ? n(p.options) : n;
                    I(),
                        (p.options = Object.assign({}, h, p.options, r)),
                        (p.scrollParents = {
                            reference: (0, c.vq)(e) ? (0, a.A)(e) : e.contextElement ? (0, a.A)(e.contextElement) : [],
                            popper: (0, a.A)(t),
                        });
                    var i = (0, o.A)((0, u.A)([].concat(f, p.options.modifiers)));
                    return (
                        (p.orderedModifiers = i.filter(function (e) {
                            return e.enabled;
                        })),
                        A(),
                        E.update()
                    );
                },
                forceUpdate: function () {
                    if (!g) {
                        var e = p.elements,
                            t = e.reference,
                            n = e.popper;
                        if (_(t, n)) {
                            (p.rects = {
                                reference: (0, r.A)(t, (0, s.A)(n), "fixed" === p.options.strategy),
                                popper: (0, i.A)(n),
                            }),
                                (p.reset = !1),
                                (p.placement = p.options.placement),
                                p.orderedModifiers.forEach(function (e) {
                                    return (p.modifiersData[e.name] = Object.assign({}, e.data));
                                });
                            for (var a = 0; a < p.orderedModifiers.length; a++) {
                                if (!0 === p.reset) {
                                    (p.reset = !1), (a = -1);
                                    continue;
                                }
                                var o = p.orderedModifiers[a],
                                    l = o.fn,
                                    u = o.options,
                                    c = void 0 === u ? {} : u,
                                    d = o.name;
                                "function" == typeof l && (p = l({ state: p, options: c, name: d, instance: E }) || p);
                            }
                        }
                    }
                },
                update: (0, l.A)(function () {
                    return new Promise(function (e) {
                        E.forceUpdate(), e(p);
                    });
                }),
                destroy: function () {
                    I(), (g = !0);
                },
            };
        if (!_(e, t)) return E;
        function A() {
            p.orderedModifiers.forEach(function (e) {
                var t = e.name,
                    n = e.options,
                    r = void 0 === n ? {} : n,
                    i = e.effect;
                if ("function" == typeof i) {
                    var a = i({ state: p, name: t, instance: E, options: r }),
                        s = function () {};
                    m.push(a || s);
                }
            });
        }
        function I() {
            m.forEach(function (e) {
                return e();
            }),
                (m = []);
        }
        return (
            E.setOptions(n).then(function (e) {
                !g && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            E
        );
    };
}

"use strict";
n.d(t, { U: () => f });
var r = n(790525),
    i = n(726402),
    s = n(389704),
    a = n(821085),
    o = n(8885),
    l = n(519948),
    u = n(182569),
    d = n(444746),
    c = { placement: "bottom", modifiers: [], strategy: "absolute" };
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
        E = t.defaultOptions,
        h = void 0 === E ? c : E;
    return function (e, t, n) {
        void 0 === n && (n = h);
        var E = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, c, h),
                modifiersData: {},
                elements: { reference: e, popper: t },
                attributes: {},
                styles: {},
            },
            p = [],
            m = !1,
            g = {
                state: E,
                setOptions: function (n) {
                    var r = "function" == typeof n ? n(E.options) : n;
                    A(),
                        (E.options = Object.assign({}, h, E.options, r)),
                        (E.scrollParents = {
                            reference: (0, d.vq)(e) ? (0, s.A)(e) : e.contextElement ? (0, s.A)(e.contextElement) : [],
                            popper: (0, s.A)(t),
                        });
                    var i = (0, o.A)((0, u.A)([].concat(f, E.options.modifiers)));
                    return (
                        (E.orderedModifiers = i.filter(function (e) {
                            return e.enabled;
                        })),
                        E.orderedModifiers.forEach(function (e) {
                            var t = e.name,
                                n = e.options,
                                r = e.effect;
                            if ("function" == typeof r) {
                                var i = r({ state: E, name: t, instance: g, options: void 0 === n ? {} : n });
                                p.push(i || function () {});
                            }
                        }),
                        g.update()
                    );
                },
                forceUpdate: function () {
                    if (!m) {
                        var e = E.elements,
                            t = e.reference,
                            n = e.popper;
                        if (_(t, n)) {
                            (E.rects = {
                                reference: (0, r.A)(t, (0, a.A)(n), "fixed" === E.options.strategy),
                                popper: (0, i.A)(n),
                            }),
                                (E.reset = !1),
                                (E.placement = E.options.placement),
                                E.orderedModifiers.forEach(function (e) {
                                    return (E.modifiersData[e.name] = Object.assign({}, e.data));
                                });
                            for (var s = 0; s < E.orderedModifiers.length; s++) {
                                if (!0 === E.reset) {
                                    (E.reset = !1), (s = -1);
                                    continue;
                                }
                                var o = E.orderedModifiers[s],
                                    l = o.fn,
                                    u = o.options,
                                    d = void 0 === u ? {} : u,
                                    c = o.name;
                                "function" == typeof l && (E = l({ state: E, options: d, name: c, instance: g }) || E);
                            }
                        }
                    }
                },
                update: (0, l.A)(function () {
                    return new Promise(function (e) {
                        g.forceUpdate(), e(E);
                    });
                }),
                destroy: function () {
                    A(), (m = !0);
                },
            };
        if (!_(e, t)) return g;
        function A() {
            p.forEach(function (e) {
                return e();
            }),
                (p = []);
        }
        return (
            g.setOptions(n).then(function (e) {
                !m && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            g
        );
    };
}

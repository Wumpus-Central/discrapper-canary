"use strict";
n.d(t, { U: () => f });
var r = n(790525),
    i = n(726402),
    s = n(389704),
    a = n(821085),
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
            E = [],
            m = !1,
            g = {
                state: p,
                setOptions: function (n) {
                    var r = "function" == typeof n ? n(p.options) : n;
                    A(),
                        (p.options = Object.assign({}, h, p.options, r)),
                        (p.scrollParents = {
                            reference: (0, c.vq)(e) ? (0, s.A)(e) : e.contextElement ? (0, s.A)(e.contextElement) : [],
                            popper: (0, s.A)(t),
                        });
                    var i = (0, o.A)((0, u.A)([].concat(f, p.options.modifiers)));
                    return (
                        (p.orderedModifiers = i.filter(function (e) {
                            return e.enabled;
                        })),
                        p.orderedModifiers.forEach(function (e) {
                            var t = e.name,
                                n = e.options,
                                r = e.effect;
                            if ("function" == typeof r) {
                                var i = r({ state: p, name: t, instance: g, options: void 0 === n ? {} : n });
                                E.push(i || function () {});
                            }
                        }),
                        g.update()
                    );
                },
                forceUpdate: function () {
                    if (!m) {
                        var e = p.elements,
                            t = e.reference,
                            n = e.popper;
                        if (_(t, n)) {
                            (p.rects = {
                                reference: (0, r.A)(t, (0, a.A)(n), "fixed" === p.options.strategy),
                                popper: (0, i.A)(n),
                            }),
                                (p.reset = !1),
                                (p.placement = p.options.placement),
                                p.orderedModifiers.forEach(function (e) {
                                    return (p.modifiersData[e.name] = Object.assign({}, e.data));
                                });
                            for (var s = 0; s < p.orderedModifiers.length; s++) {
                                if (!0 === p.reset) {
                                    (p.reset = !1), (s = -1);
                                    continue;
                                }
                                var o = p.orderedModifiers[s],
                                    l = o.fn,
                                    u = o.options,
                                    c = void 0 === u ? {} : u,
                                    d = o.name;
                                "function" == typeof l && (p = l({ state: p, options: c, name: d, instance: g }) || p);
                            }
                        }
                    }
                },
                update: (0, l.A)(function () {
                    return new Promise(function (e) {
                        g.forceUpdate(), e(p);
                    });
                }),
                destroy: function () {
                    A(), (m = !0);
                },
            };
        if (!_(e, t)) return g;
        function A() {
            E.forEach(function (e) {
                return e();
            }),
                (E = []);
        }
        return (
            g.setOptions(n).then(function (e) {
                !m && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            g
        );
    };
}

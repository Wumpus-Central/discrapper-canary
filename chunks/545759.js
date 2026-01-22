n.d(t, { U: () => p });
var r = n(790525),
    i = n(726402),
    a = n(389704),
    s = n(821085),
    o = n(8885),
    l = n(519948),
    c = n(182569),
    u = n(444746),
    d = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute",
    };
function f() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function (e) {
        return !(e && "function" == typeof e.getBoundingClientRect);
    });
}
function p(e) {
    void 0 === e && (e = {});
    var t = e,
        n = t.defaultModifiers,
        p = void 0 === n ? [] : n,
        _ = t.defaultOptions,
        h = void 0 === _ ? d : _;
    return function (e, t, n) {
        void 0 === n && (n = h);
        var _ = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, d, h),
                modifiersData: {},
                elements: {
                    reference: e,
                    popper: t,
                },
                attributes: {},
                styles: {},
            },
            m = [],
            g = !1,
            E = {
                state: _,
                setOptions: function (n) {
                    var r = "function" == typeof n ? n(_.options) : n;
                    y(),
                        (_.options = Object.assign({}, h, _.options, r)),
                        (_.scrollParents = {
                            reference: (0, u.vq)(e) ? (0, a.A)(e) : e.contextElement ? (0, a.A)(e.contextElement) : [],
                            popper: (0, a.A)(t),
                        });
                    var i = (0, o.A)((0, c.A)([].concat(p, _.options.modifiers)));
                    return (
                        (_.orderedModifiers = i.filter(function (e) {
                            return e.enabled;
                        })),
                        b(),
                        E.update()
                    );
                },
                forceUpdate: function () {
                    if (!g) {
                        var e = _.elements,
                            t = e.reference,
                            n = e.popper;
                        if (f(t, n)) {
                            (_.rects = {
                                reference: (0, r.A)(t, (0, s.A)(n), "fixed" === _.options.strategy),
                                popper: (0, i.A)(n),
                            }),
                                (_.reset = !1),
                                (_.placement = _.options.placement),
                                _.orderedModifiers.forEach(function (e) {
                                    return (_.modifiersData[e.name] = Object.assign({}, e.data));
                                });
                            for (var a = 0; a < _.orderedModifiers.length; a++) {
                                if (!0 === _.reset) {
                                    (_.reset = !1), (a = -1);
                                    continue;
                                }
                                var o = _.orderedModifiers[a],
                                    l = o.fn,
                                    c = o.options,
                                    u = void 0 === c ? {} : c,
                                    d = o.name;
                                "function" == typeof l &&
                                    (_ =
                                        l({
                                            state: _,
                                            options: u,
                                            name: d,
                                            instance: E,
                                        }) || _);
                            }
                        }
                    }
                },
                update: (0, l.A)(function () {
                    return new Promise(function (e) {
                        E.forceUpdate(), e(_);
                    });
                }),
                destroy: function () {
                    y(), (g = !0);
                },
            };
        if (!f(e, t)) return E;
        function b() {
            _.orderedModifiers.forEach(function (e) {
                var t = e.name,
                    n = e.options,
                    r = void 0 === n ? {} : n,
                    i = e.effect;
                if ("function" == typeof i) {
                    var a = i({
                            state: _,
                            name: t,
                            instance: E,
                            options: r,
                        }),
                        s = function () {};
                    m.push(a || s);
                }
            });
        }
        function y() {
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

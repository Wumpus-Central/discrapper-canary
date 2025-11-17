r.d(t, { L: () => k });
var a = r(44837),
    n = r(381537),
    o = r(891943),
    s = r(856706),
    i = r(706852),
    c = r(371101),
    u = r(174083),
    l = r(565294),
    f = r(565963),
    b = r(473749),
    d = r(639519),
    h = r.n(d),
    p = r(558876),
    m = r(59295),
    g = r(667929),
    y = ["data", "keyPath", "postprocessValue", "hideRoot", "theme", "invertTheme"];
function v(e, t) {
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
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? v(Object(r), !0).forEach(function (t) {
                  (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : v(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var w = function (e) {
    return e;
};
function M(e) {
    var t,
        r,
        a,
        n =
            ((t = e.theme),
            (a = Object.keys(
                (r = {
                    getArrowStyle: "arrow",
                    getListStyle: "nestedNodeChildren",
                    getItemStringStyle: "nestedNodeItemString",
                    getLabelStyle: "label",
                    getValueStyle: "valueText",
                }),
            ).filter(function (t) {
                return e[t];
            })).length > 0 &&
                ((t = "string" == typeof t ? { extend: t } : Z({}, t)),
                a.forEach(function (a) {
                    console.error('Styling method "'.concat(a, '" is deprecated, use "theme" property instead')),
                        (t[r[a]] = function (t) {
                            for (var r = t.style, n = arguments.length, o = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
                                o[s - 1] = arguments[s];
                            return { style: Z(Z({}, r), e[a].apply(e, o)) };
                        });
                })),
            t);
    return e.invertTheme && (n = (0, g.y7)(n)), { styling: (0, m.Z)(n) };
}
var k = (function (e) {
    (0, i.Z)(l, e);
    var t,
        r =
            ((t = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r = (0, u.Z)(l);
                return (
                    (e = t ? Reflect.construct(r, arguments, (0, u.Z)(this).constructor) : r.apply(this, arguments)),
                    (0, c.Z)(this, e)
                );
            });
    function l(e) {
        var t;
        return (0, o.Z)(this, l), ((t = r.call(this, e)).state = M(e)), t;
    }
    return (
        (0, s.Z)(l, [
            {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                    var t = this;
                    ["theme", "invertTheme"].find(function (r) {
                        return e[r] !== t.props[r];
                    }) && this.setState(M(e));
                },
            },
            {
                key: "shouldComponentUpdate",
                value: function (e) {
                    var t = this;
                    return !!Object.keys(e).find(function (r) {
                        return "keyPath" === r ? e[r].join("/") !== t.props[r].join("/") : e[r] !== t.props[r];
                    });
                },
            },
            {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.data,
                        r = e.keyPath,
                        o = e.postprocessValue,
                        s = e.hideRoot,
                        i = (e.theme, e.invertTheme, (0, n.Z)(e, y)),
                        c = this.state.styling;
                    return b.createElement(
                        "ul",
                        c("tree"),
                        b.createElement(
                            p.Z,
                            (0, a.Z)(
                                {},
                                Z(
                                    {
                                        postprocessValue: o,
                                        hideRoot: s,
                                        styling: c,
                                    },
                                    i,
                                ),
                                {
                                    keyPath: s ? [] : r,
                                    value: o(t),
                                },
                            ),
                        ),
                    );
                },
            },
        ]),
        l
    );
})(b.Component);
(0, l.Z)(k, "propTypes", {
    data: h().any,
    hideRoot: h().bool,
    theme: h().oneOfType([h().object, h().string]),
    invertTheme: h().bool,
    keyPath: h().arrayOf(h().oneOfType([h().string, h().number])),
    postprocessValue: h().func,
    sortObjectKeys: h().oneOfType([h().func, h().bool]),
}),
    (0, l.Z)(k, "defaultProps", {
        shouldExpandNode: function (e, t, r) {
            return 0 === r;
        },
        hideRoot: !1,
        keyPath: ["root"],
        getItemString: function (e, t, r, a) {
            return b.createElement("span", null, r, " ", a);
        },
        labelRenderer: function (e) {
            var t = (0, f.Z)(e, 1)[0];
            return b.createElement("span", null, t, ":");
        },
        valueRenderer: w,
        postprocessValue: w,
        isCustomNode: function () {
            return !1;
        },
        collectionLimit: 50,
        invertTheme: !0,
    });

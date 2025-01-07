r.d(t, {
    L: function () {
        return k;
    }
});
var a = r(910974),
    n = r(190293),
    s = r(681996),
    o = r(525207),
    i = r(332133),
    c = r(775310),
    u = r(700717),
    l = r(621028),
    f = r(872463),
    b = r(192379),
    h = r(639519),
    d = r.n(h),
    p = r(422664),
    m = r(605897),
    g = r(667929),
    y = ['data', 'keyPath', 'postprocessValue', 'hideRoot', 'theme', 'invertTheme'];
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
        n,
        s =
            ((t = e.theme),
            (r = e),
            (n = Object.keys(
                (a = {
                    getArrowStyle: 'arrow',
                    getListStyle: 'nestedNodeChildren',
                    getItemStringStyle: 'nestedNodeItemString',
                    getLabelStyle: 'label',
                    getValueStyle: 'valueText'
                })
            ).filter(function (e) {
                return r[e];
            })).length > 0 &&
                ((t = 'string' == typeof t ? { extend: t } : Z({}, t)),
                n.forEach(function (e) {
                    console.error('Styling method "'.concat(e, '" is deprecated, use "theme" property instead')),
                        (t[a[e]] = function (t) {
                            for (var a = t.style, n = arguments.length, s = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) s[o - 1] = arguments[o];
                            return { style: Z(Z({}, a), r[e].apply(r, s)) };
                        });
                })),
            t);
    return e.invertTheme && (s = (0, g.y7)(s)), { styling: (0, m.Z)(s) };
}
var k = (function (e) {
    (0, i.Z)(f, e);
    var t,
        r,
        l =
            ((t = f),
            (r = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    a = (0, u.Z)(t);
                return (e = r ? Reflect.construct(a, arguments, (0, u.Z)(this).constructor) : a.apply(this, arguments)), (0, c.Z)(this, e);
            });
    function f(e) {
        var t;
        return (0, s.Z)(this, f), ((t = l.call(this, e)).state = M(e)), t;
    }
    return (
        (0, o.Z)(f, [
            {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                    var t = this;
                    ['theme', 'invertTheme'].find(function (r) {
                        return e[r] !== t.props[r];
                    }) && this.setState(M(e));
                }
            },
            {
                key: 'shouldComponentUpdate',
                value: function (e) {
                    var t = this;
                    return !!Object.keys(e).find(function (r) {
                        return 'keyPath' === r ? e[r].join('/') !== t.props[r].join('/') : e[r] !== t.props[r];
                    });
                }
            },
            {
                key: 'render',
                value: function () {
                    var e = this.props,
                        t = e.data,
                        r = e.keyPath,
                        s = e.postprocessValue,
                        o = e.hideRoot,
                        i = (e.theme, e.invertTheme, (0, n.Z)(e, y)),
                        c = this.state.styling;
                    return b.createElement(
                        'ul',
                        c('tree'),
                        b.createElement(
                            p.Z,
                            (0, a.Z)(
                                {},
                                Z(
                                    {
                                        postprocessValue: s,
                                        hideRoot: o,
                                        styling: c
                                    },
                                    i
                                ),
                                {
                                    keyPath: o ? [] : r,
                                    value: s(t)
                                }
                            )
                        )
                    );
                }
            }
        ]),
        f
    );
})(b.Component);
(0, l.Z)(k, 'propTypes', {
    data: d().any,
    hideRoot: d().bool,
    theme: d().oneOfType([d().object, d().string]),
    invertTheme: d().bool,
    keyPath: d().arrayOf(d().oneOfType([d().string, d().number])),
    postprocessValue: d().func,
    sortObjectKeys: d().oneOfType([d().func, d().bool])
}),
    (0, l.Z)(k, 'defaultProps', {
        shouldExpandNode: function (e, t, r) {
            return 0 === r;
        },
        hideRoot: !1,
        keyPath: ['root'],
        getItemString: function (e, t, r, a) {
            return b.createElement('span', null, r, ' ', a);
        },
        labelRenderer: function (e) {
            var t = (0, f.Z)(e, 1)[0];
            return b.createElement('span', null, t, ':');
        },
        valueRenderer: w,
        postprocessValue: w,
        isCustomNode: function () {
            return !1;
        },
        collectionLimit: 50,
        invertTheme: !0
    });

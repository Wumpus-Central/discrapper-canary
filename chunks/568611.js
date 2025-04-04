n.d(t, {
    VK: () => u,
    rU: () => g
});
var r = n(512969),
    i = n(190031),
    o = n(192379),
    a = n(539528);
n(476400);
var s = n(910974),
    l = n(312089),
    c = n(568895),
    u = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return ((t = e.call.apply(e, [this].concat(r)) || this).history = (0, a.lX)(t.props)), t;
        }
        return (
            (0, i.Z)(t, e),
            (t.prototype.render = function () {
                return o.createElement(r.F0, {
                    history: this.history,
                    children: this.props.children
                });
            }),
            t
        );
    })(o.Component);
o.Component;
var d = function (e, t) {
        return 'function' == typeof e ? e(t) : e;
    },
    f = function (e, t) {
        return 'string' == typeof e ? (0, a.ob)(e, null, null, t) : e;
    },
    _ = function (e) {
        return e;
    },
    p = o.forwardRef;
function h(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
void 0 === p && (p = _);
var m = p(function (e, t) {
        var n = e.innerRef,
            r = e.navigate,
            i = e.onClick,
            a = (0, l.Z)(e, ['innerRef', 'navigate', 'onClick']),
            c = a.target,
            u = (0, s.Z)({}, a, {
                onClick: function (e) {
                    try {
                        i && i(e);
                    } catch (t) {
                        throw (e.preventDefault(), t);
                    }
                    e.defaultPrevented || 0 !== e.button || (c && '_self' !== c) || h(e) || (e.preventDefault(), r());
                }
            });
        return _ !== p ? (u.ref = t || n) : (u.ref = n), o.createElement('a', u);
    }),
    g = p(function (e, t) {
        var n = e.component,
            i = void 0 === n ? m : n,
            a = e.replace,
            u = e.to,
            h = e.innerRef,
            g = (0, l.Z)(e, ['component', 'replace', 'to', 'innerRef']);
        return o.createElement(r.s6.Consumer, null, function (e) {
            e || (0, c.Z)(!1);
            var n = e.history,
                r = f(d(u, e.location), e.location),
                l = r ? n.createHref(r) : '',
                m = (0, s.Z)({}, g, {
                    href: l,
                    navigate: function () {
                        var t = d(u, e.location);
                        (a ? n.replace : n.push)(t);
                    }
                });
            return _ !== p ? (m.ref = t || h) : (m.innerRef = h), o.createElement(i, m);
        });
    }),
    E = function (e) {
        return e;
    },
    b = o.forwardRef;
function y() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t
        .filter(function (e) {
            return e;
        })
        .join(' ');
}
void 0 === b && (b = E),
    b(function (e, t) {
        var n = e['aria-current'],
            i = void 0 === n ? 'page' : n,
            a = e.activeClassName,
            u = void 0 === a ? 'active' : a,
            _ = e.activeStyle,
            p = e.className,
            h = e.exact,
            m = e.isActive,
            v = e.location,
            O = e.sensitive,
            I = e.strict,
            S = e.style,
            T = e.to,
            N = e.innerRef,
            A = (0, l.Z)(e, ['aria-current', 'activeClassName', 'activeStyle', 'className', 'exact', 'isActive', 'location', 'sensitive', 'strict', 'style', 'to', 'innerRef']);
        return o.createElement(r.s6.Consumer, null, function (e) {
            e || (0, c.Z)(!1);
            var n = v || e.location,
                a = f(d(T, n), n),
                l = a.pathname,
                C = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
                R = C
                    ? (0, r.LX)(n.pathname, {
                          path: C,
                          exact: h,
                          sensitive: O,
                          strict: I
                      })
                    : null,
                P = !!(m ? m(R, n) : R),
                w = P ? y(p, u) : p,
                D = P ? (0, s.Z)({}, S, {}, _) : S,
                L = (0, s.Z)(
                    {
                        'aria-current': (P && i) || null,
                        className: w,
                        style: D,
                        to: a
                    },
                    A
                );
            return E !== b ? (L.ref = t || N) : (L.innerRef = N), o.createElement(g, L);
        });
    });

r.d(n, {
    VK: function () {
        return f;
    },
    rU: function () {
        return v;
    }
});
var i = r(512969),
    a = r(190031),
    s = r(192379),
    o = r(539528),
    l = r(476400);
var u = r(910974),
    c = r(312089),
    d = r(568895),
    f = (function (e) {
        function n() {
            for (var n, r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
            return ((n = e.call.apply(e, [this].concat(i)) || this).history = (0, o.lX)(n.props)), n;
        }
        return (
            (0, a.Z)(n, e),
            (n.prototype.render = function () {
                return s.createElement(i.F0, {
                    history: this.history,
                    children: this.props.children
                });
            }),
            n
        );
    })(s.Component);
s.Component;
var _ = function (e, n) {
        return 'function' == typeof e ? e(n) : e;
    },
    h = function (e, n) {
        return 'string' == typeof e ? (0, o.ob)(e, null, null, n) : e;
    },
    p = function (e) {
        return e;
    },
    m = s.forwardRef;
function g(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
void 0 === m && (m = p);
var E = m(function (e, n) {
        var r = e.innerRef,
            i = e.navigate,
            a = e.onClick,
            o = (0, c.Z)(e, ['innerRef', 'navigate', 'onClick']),
            l = o.target,
            d = (0, u.Z)({}, o, {
                onClick: function (e) {
                    try {
                        a && a(e);
                    } catch (n) {
                        throw (e.preventDefault(), n);
                    }
                    !e.defaultPrevented && 0 === e.button && (!l || '_self' === l) && !g(e) && (e.preventDefault(), i());
                }
            });
        return p !== m ? (d.ref = n || r) : (d.ref = r), s.createElement('a', d);
    }),
    v = m(function (e, n) {
        var r = e.component,
            a = void 0 === r ? E : r,
            o = e.replace,
            l = e.to,
            f = e.innerRef,
            g = (0, c.Z)(e, ['component', 'replace', 'to', 'innerRef']);
        return s.createElement(i.s6.Consumer, null, function (e) {
            e || (0, d.Z)(!1);
            var r = e.history,
                i = h(_(l, e.location), e.location),
                c = i ? r.createHref(i) : '',
                E = (0, u.Z)({}, g, {
                    href: c,
                    navigate: function () {
                        var n = _(l, e.location);
                        (o ? r.replace : r.push)(n);
                    }
                });
            return p !== m ? (E.ref = n || f) : (E.innerRef = f), s.createElement(a, E);
        });
    }),
    I = function (e) {
        return e;
    },
    T = s.forwardRef;
function b() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return n
        .filter(function (e) {
            return e;
        })
        .join(' ');
}
void 0 === T && (T = I),
    T(function (e, n) {
        var r = e['aria-current'],
            a = void 0 === r ? 'page' : r,
            o = e.activeClassName,
            l = void 0 === o ? 'active' : o,
            f = e.activeStyle,
            p = e.className,
            m = e.exact,
            g = e.isActive,
            E = e.location,
            y = e.sensitive,
            S = e.strict,
            A = e.style,
            N = e.to,
            C = e.innerRef,
            R = (0, c.Z)(e, ['aria-current', 'activeClassName', 'activeStyle', 'className', 'exact', 'isActive', 'location', 'sensitive', 'strict', 'style', 'to', 'innerRef']);
        return s.createElement(i.s6.Consumer, null, function (e) {
            e || (0, d.Z)(!1);
            var r = E || e.location,
                o = h(_(N, r), r),
                c = o.pathname,
                O = c && c.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
                D = O
                    ? (0, i.LX)(r.pathname, {
                          path: O,
                          exact: m,
                          sensitive: y,
                          strict: S
                      })
                    : null,
                L = !!(g ? g(D, r) : D),
                x = L ? b(p, l) : p,
                w = L ? (0, u.Z)({}, A, {}, f) : A,
                P = (0, u.Z)(
                    {
                        'aria-current': (L && a) || null,
                        className: x,
                        style: w,
                        to: o
                    },
                    R
                );
            return I !== T ? (P.ref = n || C) : (P.innerRef = C), s.createElement(v, P);
        });
    });

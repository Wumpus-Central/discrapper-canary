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
    o = r(192379),
    s = r(539528),
    l = r(476400);
var u = r(910974),
    c = r(312089),
    d = r(568895),
    f = (function (e) {
        function n() {
            for (var n, r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
            return ((n = e.call.apply(e, [this].concat(i)) || this).history = (0, s.lX)(n.props)), n;
        }
        return (
            (0, a.Z)(n, e),
            (n.prototype.render = function () {
                return o.createElement(i.F0, {
                    history: this.history,
                    children: this.props.children
                });
            }),
            n
        );
    })(o.Component);
o.Component;
var p = function (e, n) {
        return 'function' == typeof e ? e(n) : e;
    },
    h = function (e, n) {
        return 'string' == typeof e ? (0, s.ob)(e, null, null, n) : e;
    },
    _ = function (e) {
        return e;
    },
    m = o.forwardRef;
function g(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
void 0 === m && (m = _);
var E = m(function (e, n) {
        var r = e.innerRef,
            i = e.navigate,
            a = e.onClick,
            s = (0, c.Z)(e, ['innerRef', 'navigate', 'onClick']),
            l = s.target,
            d = (0, u.Z)({}, s, {
                onClick: function (e) {
                    try {
                        a && a(e);
                    } catch (n) {
                        throw (e.preventDefault(), n);
                    }
                    !e.defaultPrevented && 0 === e.button && (!l || '_self' === l) && !g(e) && (e.preventDefault(), i());
                }
            });
        return _ !== m ? (d.ref = n || r) : (d.ref = r), o.createElement('a', d);
    }),
    v = m(function (e, n) {
        var r = e.component,
            a = void 0 === r ? E : r,
            s = e.replace,
            l = e.to,
            f = e.innerRef,
            g = (0, c.Z)(e, ['component', 'replace', 'to', 'innerRef']);
        return o.createElement(i.s6.Consumer, null, function (e) {
            e || (0, d.Z)(!1);
            var r = e.history,
                i = h(p(l, e.location), e.location),
                c = i ? r.createHref(i) : '',
                E = (0, u.Z)({}, g, {
                    href: c,
                    navigate: function () {
                        var n = p(l, e.location);
                        (s ? r.replace : r.push)(n);
                    }
                });
            return _ !== m ? (E.ref = n || f) : (E.innerRef = f), o.createElement(a, E);
        });
    }),
    y = function (e) {
        return e;
    },
    b = o.forwardRef;
function I() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    return n
        .filter(function (e) {
            return e;
        })
        .join(' ');
}
void 0 === b && (b = y),
    b(function (e, n) {
        var r = e['aria-current'],
            a = void 0 === r ? 'page' : r,
            s = e.activeClassName,
            l = void 0 === s ? 'active' : s,
            f = e.activeStyle,
            _ = e.className,
            m = e.exact,
            g = e.isActive,
            E = e.location,
            T = e.sensitive,
            S = e.strict,
            A = e.style,
            C = e.to,
            N = e.innerRef,
            R = (0, c.Z)(e, ['aria-current', 'activeClassName', 'activeStyle', 'className', 'exact', 'isActive', 'location', 'sensitive', 'strict', 'style', 'to', 'innerRef']);
        return o.createElement(i.s6.Consumer, null, function (e) {
            e || (0, d.Z)(!1);
            var r = E || e.location,
                s = h(p(C, r), r),
                c = s.pathname,
                O = c && c.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
                D = O
                    ? (0, i.LX)(r.pathname, {
                          path: O,
                          exact: m,
                          sensitive: T,
                          strict: S
                      })
                    : null,
                L = !!(g ? g(D, r) : D),
                x = L ? I(_, l) : _,
                w = L ? (0, u.Z)({}, A, {}, f) : A,
                P = (0, u.Z)(
                    {
                        'aria-current': (L && a) || null,
                        className: x,
                        style: w,
                        to: s
                    },
                    R
                );
            return y !== b ? (P.ref = n || N) : (P.innerRef = N), o.createElement(v, P);
        });
    });

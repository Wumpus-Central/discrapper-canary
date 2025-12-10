n.d(t, {
    VK: () => u,
    rU: () => g,
});
var r = n(828700),
    i = n(282253),
    a = n(473749),
    o = n(539528);
n(476400);
var s = n(44837),
    l = n(791819),
    c = n(431803),
    u = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return ((t = e.call.apply(e, [this].concat(r)) || this).history = (0, o.lX)(t.props)), t;
        }
        return (
            (0, i.Z)(t, e),
            (t.prototype.render = function () {
                return a.createElement(r.F0, {
                    history: this.history,
                    children: this.props.children,
                });
            }),
            t
        );
    })(a.Component);
a.Component;
var d = function (e, t) {
        return "function" == typeof e ? e(t) : e;
    },
    f = function (e, t) {
        return "string" == typeof e ? (0, o.ob)(e, null, null, t) : e;
    },
    p = function (e) {
        return e;
    },
    _ = a.forwardRef;
function m(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
void 0 === _ && (_ = p);
var h = _(function (e, t) {
        var n = e.innerRef,
            r = e.navigate,
            i = e.onClick,
            o = (0, l.Z)(e, ["innerRef", "navigate", "onClick"]),
            c = o.target,
            u = (0, s.Z)({}, o, {
                onClick: function (e) {
                    try {
                        i && i(e);
                    } catch (t) {
                        throw (e.preventDefault(), t);
                    }
                    e.defaultPrevented || 0 !== e.button || (c && "_self" !== c) || m(e) || (e.preventDefault(), r());
                },
            });
        return p !== _ ? (u.ref = t || n) : (u.ref = n), a.createElement("a", u);
    }),
    g = _(function (e, t) {
        var n = e.component,
            i = void 0 === n ? h : n,
            o = e.replace,
            u = e.to,
            m = e.innerRef,
            g = (0, l.Z)(e, ["component", "replace", "to", "innerRef"]);
        return a.createElement(r.s6.Consumer, null, function (e) {
            e || (0, c.Z)(!1);
            var n = e.history,
                r = f(d(u, e.location), e.location),
                l = r ? n.createHref(r) : "",
                h = (0, s.Z)({}, g, {
                    href: l,
                    navigate: function () {
                        var t = d(u, e.location);
                        (o ? n.replace : n.push)(t);
                    },
                });
            return p !== _ ? (h.ref = t || m) : (h.innerRef = m), a.createElement(i, h);
        });
    }),
    E = function (e) {
        return e;
    },
    b = a.forwardRef;
function y() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t
        .filter(function (e) {
            return e;
        })
        .join(" ");
}
void 0 === b && (b = E),
    b(function (e, t) {
        var n = e["aria-current"],
            i = void 0 === n ? "page" : n,
            o = e.activeClassName,
            u = void 0 === o ? "active" : o,
            p = e.activeStyle,
            _ = e.className,
            m = e.exact,
            h = e.isActive,
            O = e.location,
            v = e.sensitive,
            S = e.strict,
            I = e.style,
            T = e.to,
            C = e.innerRef,
            A = (0, l.Z)(e, [
                "aria-current",
                "activeClassName",
                "activeStyle",
                "className",
                "exact",
                "isActive",
                "location",
                "sensitive",
                "strict",
                "style",
                "to",
                "innerRef",
            ]);
        return a.createElement(r.s6.Consumer, null, function (e) {
            e || (0, c.Z)(!1);
            var n = O || e.location,
                o = f(d(T, n), n),
                l = o.pathname,
                N = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
                P = N
                    ? (0, r.LX)(n.pathname, {
                          path: N,
                          exact: m,
                          sensitive: v,
                          strict: S,
                      })
                    : null,
                R = !!(h ? h(P, n) : P),
                D = R ? y(_, u) : _,
                w = R ? (0, s.Z)({}, I, {}, p) : I,
                x = (0, s.Z)(
                    {
                        "aria-current": (R && i) || null,
                        className: D,
                        style: w,
                        to: o,
                    },
                    A,
                );
            return E !== b ? (x.ref = t || C) : (x.innerRef = C), a.createElement(g, x);
        });
    });

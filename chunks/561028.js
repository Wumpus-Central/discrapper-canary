"use strict";
n.d(t, { Kd: () => c, N_: () => g });
var r = n(806163),
    i = n(750573),
    a = n(582128),
    o = n(830845);
n(655972);
var s = n(542113),
    l = n(725664),
    u = n(258635),
    c = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return ((t = e.call.apply(e, [this].concat(r)) || this).history = (0, o.zR)(t.props)), t;
        }
        return (
            (0, i.A)(t, e),
            (t.prototype.render = function () {
                return a.createElement(r.Ix, { history: this.history, children: this.props.children });
            }),
            t
        );
    })(a.Component);
a.Component;
var d = function (e, t) {
        return "function" == typeof e ? e(t) : e;
    },
    f = function (e, t) {
        return "string" == typeof e ? (0, o.yJ)(e, null, null, t) : e;
    },
    p = function (e) {
        return e;
    },
    h = a.forwardRef;
void 0 === h && (h = p);
var m = h(function (e, t) {
        var n = e.innerRef,
            r = e.navigate,
            i = e.onClick,
            o = (0, l.A)(e, ["innerRef", "navigate", "onClick"]),
            u = o.target,
            c = (0, s.A)({}, o, {
                onClick: function (e) {
                    try {
                        i && i(e);
                    } catch (t) {
                        throw (e.preventDefault(), t);
                    }
                    e.defaultPrevented ||
                        0 !== e.button ||
                        (u && "_self" !== u) ||
                        e.metaKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        (e.preventDefault(), r());
                },
            });
        return p !== h ? (c.ref = t || n) : (c.ref = n), a.createElement("a", c);
    }),
    g = h(function (e, t) {
        var n = e.component,
            i = void 0 === n ? m : n,
            c = e.replace,
            g = e.to,
            v = e.innerRef,
            y = (0, l.A)(e, ["component", "replace", "to", "innerRef"]);
        return a.createElement(r.XZ.Consumer, null, function (e) {
            e || (0, u.A)(!1);
            var n = e.history,
                r = f(d(g, e.location), e.location),
                l = r ? n.createHref(r) : "",
                m = (0, s.A)({}, y, {
                    href: l,
                    navigate: function () {
                        var t = d(g, e.location),
                            r = (0, o.AO)(e.location) === (0, o.AO)(f(t));
                        (c || r ? n.replace : n.push)(t);
                    },
                });
            return p !== h ? (m.ref = t || v) : (m.innerRef = v), a.createElement(i, m);
        });
    }),
    v = function (e) {
        return e;
    },
    y = a.forwardRef;
void 0 === y && (y = v),
    y(function (e, t) {
        var n = e["aria-current"],
            i = void 0 === n ? "page" : n,
            o = e.activeClassName,
            c = void 0 === o ? "active" : o,
            p = e.activeStyle,
            h = e.className,
            m = e.exact,
            b = e.isActive,
            _ = e.location,
            w = e.sensitive,
            x = e.strict,
            E = e.style,
            S = e.to,
            k = e.innerRef,
            T = (0, l.A)(e, [
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
        return a.createElement(r.XZ.Consumer, null, function (e) {
            e || (0, u.A)(!1);
            var n = _ || e.location,
                o = f(d(S, n), n),
                l = o.pathname,
                C = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
                P = C ? (0, r.B6)(n.pathname, { path: C, exact: m, sensitive: w, strict: x }) : null,
                A = !!(b ? b(P, n) : P),
                M = "function" == typeof h ? h(A) : h,
                R = "function" == typeof E ? E(A) : E;
            A &&
                ((M = (function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t
                        .filter(function (e) {
                            return e;
                        })
                        .join(" ");
                })(M, c)),
                (R = (0, s.A)({}, R, p)));
            var I = (0, s.A)({ "aria-current": (A && i) || null, className: M, style: R, to: o }, T);
            return v !== y ? (I.ref = t || k) : (I.innerRef = k), a.createElement(g, I);
        });
    });

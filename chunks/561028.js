r.d(t, { Kd: () => c, N_: () => v });
var n = r(806163),
    i = r(750573),
    o = r(582128),
    a = r(830845);
r(655972);
var s = r(542113),
    l = r(725664),
    u = r(258635),
    c = (function (e) {
        function t() {
            for (var t, r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
            return ((t = e.call.apply(e, [this].concat(n)) || this).history = (0, a.zR)(t.props)), t;
        }
        return (
            (0, i.A)(t, e),
            (t.prototype.render = function () {
                return o.createElement(n.Ix, { history: this.history, children: this.props.children });
            }),
            t
        );
    })(o.Component);
o.Component;
var f = function (e, t) {
        return "function" == typeof e ? e(t) : e;
    },
    d = function (e, t) {
        return "string" == typeof e ? (0, a.yJ)(e, null, null, t) : e;
    },
    p = function (e) {
        return e;
    },
    h = o.forwardRef;
void 0 === h && (h = p);
var m = h(function (e, t) {
        var r = e.innerRef,
            n = e.navigate,
            i = e.onClick,
            a = (0, l.A)(e, ["innerRef", "navigate", "onClick"]),
            u = a.target,
            c = (0, s.A)({}, a, {
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
                        (e.preventDefault(), n());
                },
            });
        return p !== h ? (c.ref = t || r) : (c.ref = r), o.createElement("a", c);
    }),
    v = h(function (e, t) {
        var r = e.component,
            i = void 0 === r ? m : r,
            c = e.replace,
            v = e.to,
            y = e.innerRef,
            g = (0, l.A)(e, ["component", "replace", "to", "innerRef"]);
        return o.createElement(n.XZ.Consumer, null, function (e) {
            e || (0, u.A)(!1);
            var r = e.history,
                n = d(f(v, e.location), e.location),
                l = n ? r.createHref(n) : "",
                m = (0, s.A)({}, g, {
                    href: l,
                    navigate: function () {
                        var t = f(v, e.location),
                            n = (0, a.AO)(e.location) === (0, a.AO)(d(t));
                        (c || n ? r.replace : r.push)(t);
                    },
                });
            return p !== h ? (m.ref = t || y) : (m.innerRef = y), o.createElement(i, m);
        });
    }),
    y = function (e) {
        return e;
    },
    g = o.forwardRef;
void 0 === g && (g = y),
    g(function (e, t) {
        var r = e["aria-current"],
            i = void 0 === r ? "page" : r,
            a = e.activeClassName,
            c = void 0 === a ? "active" : a,
            p = e.activeStyle,
            h = e.className,
            m = e.exact,
            b = e.isActive,
            w = e.location,
            _ = e.sensitive,
            S = e.strict,
            x = e.style,
            E = e.to,
            k = e.innerRef,
            C = (0, l.A)(e, [
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
        return o.createElement(n.XZ.Consumer, null, function (e) {
            e || (0, u.A)(!1);
            var r = w || e.location,
                a = d(f(E, r), r),
                l = a.pathname,
                T = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
                M = T ? (0, n.B6)(r.pathname, { path: T, exact: m, sensitive: _, strict: S }) : null,
                P = !!(b ? b(M, r) : M),
                A = "function" == typeof h ? h(P) : h,
                I = "function" == typeof x ? x(P) : x;
            P &&
                ((A = (function () {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return t
                        .filter(function (e) {
                            return e;
                        })
                        .join(" ");
                })(A, c)),
                (I = (0, s.A)({}, I, p)));
            var O = (0, s.A)({ "aria-current": (P && i) || null, className: A, style: I, to: a }, C);
            return y !== g ? (O.ref = t || k) : (O.innerRef = k), o.createElement(v, O);
        });
    });

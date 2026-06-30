"use strict";
n.d(e, { N_: () => h, k2: () => y });
var r = n(968271);
n(47312);
var o = n(64700),
    i = n(830845);
n(655972);
var a = n(1139),
    u = n(299146),
    c = n(258635);
o.Component, o.Component;
var s = function (t, e) {
        return "function" == typeof t ? t(e) : t;
    },
    l = function (t, e) {
        return "string" == typeof t ? (0, i.yJ)(t, null, null, e) : t;
    },
    p = function (t) {
        return t;
    },
    f = o.forwardRef;
void 0 === f && (f = p);
var v = f(function (t, e) {
        var n = t.innerRef,
            r = t.navigate,
            i = t.onClick,
            c = (0, u.A)(t, ["innerRef", "navigate", "onClick"]),
            s = c.target,
            l = (0, a.A)({}, c, {
                onClick: function (t) {
                    try {
                        i && i(t);
                    } catch (e) {
                        throw (t.preventDefault(), e);
                    }
                    t.defaultPrevented ||
                        0 !== t.button ||
                        (s && "_self" !== s) ||
                        t.metaKey ||
                        t.altKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        (t.preventDefault(), r());
                },
            });
        return p !== f ? (l.ref = e || n) : (l.ref = n), o.createElement("a", l);
    }),
    h = f(function (t, e) {
        var n = t.component,
            h = void 0 === n ? v : n,
            d = t.replace,
            m = t.to,
            y = t.innerRef,
            g = (0, u.A)(t, ["component", "replace", "to", "innerRef"]);
        return o.createElement(r.XZ.Consumer, null, function (t) {
            t || (0, c.A)(!1);
            var n = t.history,
                r = l(s(m, t.location), t.location),
                u = r ? n.createHref(r) : "",
                v = (0, a.A)({}, g, {
                    href: u,
                    navigate: function () {
                        var e = s(m, t.location),
                            r = (0, i.AO)(t.location) === (0, i.AO)(l(e));
                        (d || r ? n.replace : n.push)(e);
                    },
                });
            return p !== f ? (v.ref = e || y) : (v.innerRef = y), o.createElement(h, v);
        });
    }),
    d = function (t) {
        return t;
    },
    m = o.forwardRef;
void 0 === m && (m = d);
var y = m(function (t, e) {
    var n = t["aria-current"],
        i = void 0 === n ? "page" : n,
        p = t.activeClassName,
        f = void 0 === p ? "active" : p,
        v = t.activeStyle,
        y = t.className,
        g = t.exact,
        x = t.isActive,
        C = t.location,
        _ = t.sensitive,
        R = t.strict,
        b = t.style,
        E = t.to,
        A = t.innerRef,
        w = (0, u.A)(t, [
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
    return o.createElement(r.XZ.Consumer, null, function (t) {
        t || (0, c.A)(!1);
        var n = C || t.location,
            u = l(s(E, n), n),
            p = u.pathname,
            k = p && p.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            O = k ? (0, r.B6)(n.pathname, { path: k, exact: g, sensitive: _, strict: R }) : null,
            N = !!(x ? x(O, n) : O),
            T = "function" == typeof y ? y(N) : y,
            j = "function" == typeof b ? b(N) : b;
        N &&
            ((T = (function () {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return e
                    .filter(function (t) {
                        return t;
                    })
                    .join(" ");
            })(T, f)),
            (j = (0, a.A)({}, j, v)));
        var P = (0, a.A)({ "aria-current": (N && i) || null, className: T, style: j, to: u }, w);
        return d !== m ? (P.ref = e || A) : (P.innerRef = A), o.createElement(h, P);
    });
});

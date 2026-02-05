e.d(n, { N_: () => h, k2: () => y });
var r = e(134402);
e(47312);
var i = e(64700),
    o = e(830845);
e(655972);
var a = e(1139),
    c = e(299146),
    u = e(258635);
i.Component, i.Component;
var s = function (t, n) {
        return "function" == typeof t ? t(n) : t;
    },
    l = function (t, n) {
        return "string" == typeof t ? (0, o.yJ)(t, null, null, n) : t;
    },
    p = function (t) {
        return t;
    },
    f = i.forwardRef;
void 0 === f && (f = p);
var v = f(function (t, n) {
        var e = t.innerRef,
            r = t.navigate,
            o = t.onClick,
            u = (0, c.A)(t, ["innerRef", "navigate", "onClick"]),
            s = u.target,
            l = (0, a.A)({}, u, {
                onClick: function (t) {
                    try {
                        o && o(t);
                    } catch (n) {
                        throw (t.preventDefault(), n);
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
        return p !== f ? (l.ref = n || e) : (l.ref = e), i.createElement("a", l);
    }),
    h = f(function (t, n) {
        var e = t.component,
            h = void 0 === e ? v : e,
            m = t.replace,
            d = t.to,
            y = t.innerRef,
            C = (0, c.A)(t, ["component", "replace", "to", "innerRef"]);
        return i.createElement(r.XZ.Consumer, null, function (t) {
            t || (0, u.A)(!1);
            var e = t.history,
                r = l(s(d, t.location), t.location),
                c = r ? e.createHref(r) : "",
                v = (0, a.A)({}, C, {
                    href: c,
                    navigate: function () {
                        var n = s(d, t.location),
                            r = (0, o.AO)(t.location) === (0, o.AO)(l(n));
                        (m || r ? e.replace : e.push)(n);
                    },
                });
            return p !== f ? (v.ref = n || y) : (v.innerRef = y), i.createElement(h, v);
        });
    }),
    m = function (t) {
        return t;
    },
    d = i.forwardRef;
void 0 === d && (d = m);
var y = d(function (t, n) {
    var e = t["aria-current"],
        o = void 0 === e ? "page" : e,
        p = t.activeClassName,
        f = void 0 === p ? "active" : p,
        v = t.activeStyle,
        y = t.className,
        C = t.exact,
        A = t.isActive,
        x = t.location,
        R = t.sensitive,
        g = t.strict,
        _ = t.style,
        E = t.to,
        k = t.innerRef,
        w = (0, c.A)(t, [
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
    return i.createElement(r.XZ.Consumer, null, function (t) {
        t || (0, u.A)(!1);
        var e = x || t.location,
            c = l(s(E, e), e),
            p = c.pathname,
            N = p && p.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            M = N ? (0, r.B6)(e.pathname, { path: N, exact: C, sensitive: R, strict: g }) : null,
            L = !!(A ? A(M, e) : M),
            K = "function" == typeof y ? y(L) : y,
            O = "function" == typeof _ ? _(L) : _;
        L &&
            ((K = (function () {
                for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                return n
                    .filter(function (t) {
                        return t;
                    })
                    .join(" ");
            })(K, f)),
            (O = (0, a.A)({}, O, v)));
        var P = (0, a.A)({ "aria-current": (L && o) || null, className: K, style: O, to: c }, w);
        return m !== d ? (P.ref = n || k) : (P.innerRef = k), i.createElement(h, P);
    });
});

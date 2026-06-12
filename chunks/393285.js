e.d(n, { N_: () => h, k2: () => y });
var r = e(968271);
e(47312);
var o = e(64700),
    i = e(830845);
e(655972);
var a = e(1139),
    u = e(299146),
    c = e(258635);
o.Component, o.Component;
var s = function (t, n) {
        return "function" == typeof t ? t(n) : t;
    },
    l = function (t, n) {
        return "string" == typeof t ? (0, i.yJ)(t, null, null, n) : t;
    },
    f = function (t) {
        return t;
    },
    p = o.forwardRef;
void 0 === p && (p = f);
var v = p(function (t, n) {
        var e = t.innerRef,
            r = t.navigate,
            i = t.onClick,
            c = (0, u.A)(t, ["innerRef", "navigate", "onClick"]),
            s = c.target,
            l = (0, a.A)({}, c, {
                onClick: function (t) {
                    try {
                        i && i(t);
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
        return f !== p ? (l.ref = n || e) : (l.ref = e), o.createElement("a", l);
    }),
    h = p(function (t, n) {
        var e = t.component,
            h = void 0 === e ? v : e,
            d = t.replace,
            m = t.to,
            y = t.innerRef,
            C = (0, u.A)(t, ["component", "replace", "to", "innerRef"]);
        return o.createElement(r.XZ.Consumer, null, function (t) {
            t || (0, c.A)(!1);
            var e = t.history,
                r = l(s(m, t.location), t.location),
                u = r ? e.createHref(r) : "",
                v = (0, a.A)({}, C, {
                    href: u,
                    navigate: function () {
                        var n = s(m, t.location),
                            r = (0, i.AO)(t.location) === (0, i.AO)(l(n));
                        (d || r ? e.replace : e.push)(n);
                    },
                });
            return f !== p ? (v.ref = n || y) : (v.innerRef = y), o.createElement(h, v);
        });
    }),
    d = function (t) {
        return t;
    },
    m = o.forwardRef;
void 0 === m && (m = d);
var y = m(function (t, n) {
    var e = t["aria-current"],
        i = void 0 === e ? "page" : e,
        f = t.activeClassName,
        p = void 0 === f ? "active" : f,
        v = t.activeStyle,
        y = t.className,
        C = t.exact,
        _ = t.isActive,
        g = t.location,
        x = t.sensitive,
        b = t.strict,
        R = t.style,
        A = t.to,
        w = t.innerRef,
        E = (0, u.A)(t, [
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
        var e = g || t.location,
            u = l(s(A, e), e),
            f = u.pathname,
            O = f && f.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            k = O ? (0, r.B6)(e.pathname, { path: O, exact: C, sensitive: x, strict: b }) : null,
            P = !!(_ ? _(k, e) : k),
            N = "function" == typeof y ? y(P) : y,
            j = "function" == typeof R ? R(P) : R;
        P &&
            ((N = (function () {
                for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                return n
                    .filter(function (t) {
                        return t;
                    })
                    .join(" ");
            })(N, p)),
            (j = (0, a.A)({}, j, v)));
        var M = (0, a.A)({ "aria-current": (P && i) || null, className: N, style: j, to: u }, E);
        return d !== m ? (M.ref = n || w) : (M.innerRef = w), o.createElement(h, M);
    });
});

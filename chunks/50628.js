e.d(n, {
    OL: () => y,
    rU: () => h,
});
var r = e(54111);
e(282253);
var i = e(473749),
    o = e(539528);
e(476400);
var a = e(44837),
    c = e(791819),
    u = e(431803);
i.Component, i.Component;
var s = function (t, n) {
        return "function" == typeof t ? t(n) : t;
    },
    l = function (t, n) {
        return "string" == typeof t ? (0, o.ob)(t, null, null, n) : t;
    },
    f = function (t) {
        return t;
    },
    p = i.forwardRef;
void 0 === p && (p = f);
var v = p(function (t, n) {
        var e = t.innerRef,
            r = t.navigate,
            o = t.onClick,
            u = (0, c.Z)(t, ["innerRef", "navigate", "onClick"]),
            s = u.target,
            l = (0, a.Z)({}, u, {
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
        return f !== p ? (l.ref = n || e) : (l.ref = e), i.createElement("a", l);
    }),
    h = p(function (t, n) {
        var e = t.component,
            h = void 0 === e ? v : e,
            d = t.replace,
            m = t.to,
            y = t.innerRef,
            C = (0, c.Z)(t, ["component", "replace", "to", "innerRef"]);
        return i.createElement(r.s6.Consumer, null, function (t) {
            t || (0, u.Z)(!1);
            var e = t.history,
                r = l(s(m, t.location), t.location),
                c = r ? e.createHref(r) : "",
                v = (0, a.Z)({}, C, {
                    href: c,
                    navigate: function () {
                        var n = s(m, t.location),
                            r = (0, o.Ep)(t.location) === (0, o.Ep)(l(n));
                        (d || r ? e.replace : e.push)(n);
                    },
                });
            return f !== p ? (v.ref = n || y) : (v.innerRef = y), i.createElement(h, v);
        });
    }),
    d = function (t) {
        return t;
    },
    m = i.forwardRef;
void 0 === m && (m = d);
var y = m(function (t, n) {
    var e = t["aria-current"],
        o = void 0 === e ? "page" : e,
        f = t.activeClassName,
        p = void 0 === f ? "active" : f,
        v = t.activeStyle,
        y = t.className,
        C = t.exact,
        g = t.isActive,
        R = t.location,
        Z = t.sensitive,
        x = t.strict,
        E = t.style,
        _ = t.to,
        k = t.innerRef,
        w = (0, c.Z)(t, [
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
    return i.createElement(r.s6.Consumer, null, function (t) {
        t || (0, u.Z)(!1);
        var e = R || t.location,
            c = l(s(_, e), e),
            f = c.pathname,
            N = f && f.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            L = N
                ? (0, r.LX)(e.pathname, {
                      path: N,
                      exact: C,
                      sensitive: Z,
                      strict: x,
                  })
                : null,
            b = !!(g ? g(L, e) : L),
            M = "function" == typeof y ? y(b) : y,
            O = "function" == typeof E ? E(b) : E;
        b &&
            ((M = (function () {
                for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                return n
                    .filter(function (t) {
                        return t;
                    })
                    .join(" ");
            })(M, p)),
            (O = (0, a.Z)({}, O, v)));
        var A = (0, a.Z)(
            {
                "aria-current": (b && o) || null,
                className: M,
                style: O,
                to: c,
            },
            w,
        );
        return d !== m ? (A.ref = n || k) : (A.innerRef = k), i.createElement(h, A);
    });
});

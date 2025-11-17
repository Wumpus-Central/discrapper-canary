n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(763472),
    o = n(49012),
    s = n(591759);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = d(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function f(e) {
    var { activity: t, user: n, variant: l = "secondary", onAction: d } = e,
        f = u(e, ["activity", "user", "variant", "onAction"]);
    if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1) return null;
    async function _(e, t, n) {
        try {
            let r = await (0, a.sd)(e, t);
            if (r.button_urls.length <= n) return;
            let i = r.button_urls[n];
            if ("string" != typeof i) return;
            let l = s.Z.safeParseWithQuery(i);
            if (null == l || null == l.protocol || null == l.hostname) return;
            (0, o.q)({
                href: s.Z.format(l),
                trusted: !1,
            });
        } catch (e) {}
    }
    return (0, r.jsx)(r.Fragment, {
        children: t.buttons.map((e, a) =>
            (0, r.jsx)(
                i.Button,
                c(
                    {
                        text: e,
                        variant: l,
                        size: "sm",
                        fullWidth: !0,
                        onClick: () => {
                            null == d || d(), _(t, n.id, a);
                        },
                    },
                    f,
                ),
                "customButton-".concat(a),
            ),
        ),
    });
}

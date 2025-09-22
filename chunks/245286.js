n.d(t, { default: () => O });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(82084),
    o = n(131051),
    s = n(996733),
    a = n(313789),
    u = n(914578),
    c = n(920952),
    d = n(839469),
    f = n(388032),
    g = n(942408);
function O(e) {
    var t,
        { target: n } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["target"]);
    let d = (0, s.Z7)(),
        { node: f, directory: g } = (0, o.Z)(c.Z, d),
        O = ((t = a.n.ACCOUNT_PANEL), null == g.entry(n) ? t : n);
    return (0, r.jsx)(
        l.Z,
        (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                root: f,
                directory: g,
                sidebarHeader: y,
                sidebarFooter: u.Z,
                target: O,
            },
            i,
        ),
    );
}
function y() {
    let e = (0, s.Z7)(),
        t = d.R.useField("hasSearchResults"),
        n = d.R.useField("searchResults");
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(i.E1j, {
                size: "md",
                query: e,
                onChange: s.yN,
                onClear: () => (0, s.yN)(""),
            }),
            t &&
                0 === n.length &&
                (0, r.jsxs)("div", {
                    className: g.emptySearchResultsContainer,
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: "text-sm/semibold",
                            color: "text-primary",
                            children: f.intl.string(f.t.zihbmp),
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: f.intl.string(f.t.XclvsL),
                        }),
                    ],
                }),
        ],
    });
}

n.d(t, { Z: () => y }), n(388685), n(704826), n(35282), n(539854);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(525654),
    s = n.n(o),
    l = n(481060),
    c = n(579806),
    u = n(304761),
    d = n(320161),
    f = n(998502),
    _ = n(388032),
    p = n(447160);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b() {
    var e;
    let t = null === s() || void 0 === s() || null == (e = s().os) ? void 0 : e.toString();
    if (null == t || null == c.Z) return null;
    let n = c.Z.os.release,
        [r, i, a] = f.ZP.parsedOSRelease;
    if (
        (t.includes("Windows 10") && void 0 !== a && a >= 22000 && (t = t.replace("Windows 10", "Windows 11")),
        t.includes("OS X 10.15.7") && void 0 !== r && r >= 20)
    ) {
        let e = r >= 25 ? r + 1 : r - 9;
        t = "macOS ".concat(e);
    }
    return "".concat(t, " (").concat(n, ")");
}
function y() {
    var e, t, n, i, o;
    let s = window.GLOBAL_ENV.RELEASE_CHANNEL,
        f = "434774",
        h = "b7b535efe230d1cb2b7a1fd927060e840f477f7d".substring(0, 7),
        g = null === c.Z || void 0 === c.Z ? void 0 : c.Z.remoteApp.getVersion(),
        y = null === c.Z || void 0 === c.Z || null == (e = (t = c.Z.remoteApp).getBuildNumber) ? void 0 : e.call(t),
        O = null === c.Z || void 0 === c.Z || null == (n = (i = c.Z.remoteApp).getAppArch) ? void 0 : n.call(i),
        v = null == (o = u.C.getCurrentBuildOverride().overrides) ? void 0 : o.discord_web,
        I = b(),
        T = [s, f, "(".concat(h, ")")];
    return (
        null != g &&
            (T.push("Host ".concat(g)), null != O && T.push(O.toLowerCase()), null != y && T.push("(".concat(y, ")"))),
        T.push("Build Override: ".concat(null != v ? v.id : "N/A")),
        null != I && T.push(I),
        (0, r.jsx)(d.Z, {
            copyValue: T.join(" "),
            text: _.intl.string(_.t["9Al4QU"]),
            "aria-label": !1,
            children: (e) =>
                (0, r.jsx)(
                    l.P3F,
                    E(m({}, e), {
                        "aria-label": _.intl.string(_.t["9Al4QU"]),
                        className: p.clickable,
                        children: (0, r.jsxs)("div", {
                            className: p.info,
                            "data-mtctest-ignore": "true",
                            children: [
                                (0, r.jsxs)(l.Text, {
                                    tag: "span",
                                    className: p.line,
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [
                                        s,
                                        " ",
                                        f,
                                        " ",
                                        (0, r.jsxs)("span", {
                                            className: p.versionHash,
                                            children: ["(", h, ")"],
                                        }),
                                    ],
                                }),
                                " ",
                                null != v &&
                                    (0, r.jsx)(l.Text, {
                                        tag: "span",
                                        className: p.line,
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: (0, r.jsxs)("span", {
                                            className: p.versionHash,
                                            children: ["Build Override: ", v.id],
                                        }),
                                    }),
                                null != g
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsxs)(l.Text, {
                                                  tag: "span",
                                                  className: p.line,
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  children: [
                                                      "Host ",
                                                      g,
                                                      " ",
                                                      null != O
                                                          ? (0, r.jsxs)("span", {
                                                                className: p.appArch,
                                                                children: [O.toLowerCase(), " "],
                                                            })
                                                          : null,
                                                      null != y
                                                          ? (0, r.jsxs)("span", {
                                                                children: ["(", y, ")"],
                                                            })
                                                          : null,
                                                  ],
                                              }),
                                              " ",
                                          ],
                                      })
                                    : null,
                                null != I
                                    ? (0, r.jsx)(l.Text, {
                                          tag: "span",
                                          className: a()(p.line, p.os),
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: I,
                                      })
                                    : null,
                            ],
                        }),
                    }),
                ),
        })
    );
}

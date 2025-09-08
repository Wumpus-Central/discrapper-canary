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
function y(e) {
    var t, n, i, o, s;
    let { compact: f = !1 } = e,
        h = window.GLOBAL_ENV.RELEASE_CHANNEL,
        g = "441782",
        y = "35d9bc093690c5e4502f1289b3d1336160fb2a4a".substring(0, 7),
        O = null === c.Z || void 0 === c.Z ? void 0 : c.Z.remoteApp.getVersion(),
        v = null === c.Z || void 0 === c.Z || null == (t = (n = c.Z.remoteApp).getBuildNumber) ? void 0 : t.call(n),
        I = null === c.Z || void 0 === c.Z || null == (i = (o = c.Z.remoteApp).getAppArch) ? void 0 : i.call(o),
        T = null == (s = u.C.getCurrentBuildOverride().overrides) ? void 0 : s.discord_web,
        S = b(),
        A = [h, g, "(".concat(y, ")")];
    return (null != O &&
        (A.push("Host ".concat(O)), null != I && A.push(I.toLowerCase()), null != v && A.push("(".concat(v, ")"))),
    A.push("Build Override: ".concat(null != T ? T.id : "N/A")),
    null != S && A.push(S),
    f)
        ? (0, r.jsx)(d.Z, {
              copyValue: A.join(" "),
              text: _.intl.string(_.t["9Al4QU"]),
              "aria-label": !1,
              children: (e) =>
                  (0, r.jsxs)(
                      l.P3F,
                      E(m({}, e), {
                          "aria-label": _.intl.string(_.t["9Al4QU"]),
                          className: a()(p.clickable, p.compact),
                          children: [
                              (0, r.jsxs)("div", {
                                  className: p.compactInfo,
                                  "data-mtctest-ignore": "true",
                                  children: [
                                      (0, r.jsxs)(l.Text, {
                                          tag: "span",
                                          variant: "text-xxs/normal",
                                          color: "text-muted",
                                          children: [
                                              h,
                                              " ",
                                              g,
                                              " ",
                                              (0, r.jsxs)("span", {
                                                  className: p.versionHash,
                                                  children: ["(", y, ")"],
                                              }),
                                          ],
                                      }),
                                      null != O &&
                                          (0, r.jsxs)(l.Text, {
                                              tag: "span",
                                              variant: "text-xxs/normal",
                                              color: "text-muted",
                                              children: [
                                                  O,
                                                  null != I &&
                                                      (0, r.jsxs)("span", {
                                                          className: p.appArch,
                                                          children: [" ", I.toLowerCase()],
                                                      }),
                                                  null != v &&
                                                      (0, r.jsxs)("span", {
                                                          children: [" (", v, ")"],
                                                      }),
                                              ],
                                          }),
                                  ],
                              }),
                              null != T &&
                                  (0, r.jsx)(l.Text, {
                                      tag: "span",
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: (0, r.jsxs)("span", {
                                          className: p.versionHash,
                                          children: ["Build Override: ", T.id],
                                      }),
                                  }),
                          ],
                      }),
                  ),
          })
        : (0, r.jsx)(d.Z, {
              copyValue: A.join(" "),
              text: _.intl.string(_.t["9Al4QU"]),
              "aria-label": !1,
              children: (e) =>
                  (0, r.jsx)(
                      l.P3F,
                      E(m({}, e), {
                          "aria-label": _.intl.string(_.t["9Al4QU"]),
                          className: a()(p.clickable, p.compact),
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
                                          h,
                                          " ",
                                          g,
                                          " ",
                                          (0, r.jsxs)("span", {
                                              className: p.versionHash,
                                              children: ["(", y, ")"],
                                          }),
                                      ],
                                  }),
                                  " ",
                                  null != T &&
                                      (0, r.jsx)(l.Text, {
                                          tag: "span",
                                          className: p.line,
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: (0, r.jsxs)("span", {
                                              className: p.versionHash,
                                              children: ["Build Override: ", T.id],
                                          }),
                                      }),
                                  null != O
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsxs)(l.Text, {
                                                    tag: "span",
                                                    className: p.line,
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: [
                                                        "Host ",
                                                        O,
                                                        " ",
                                                        null != I
                                                            ? (0, r.jsxs)("span", {
                                                                  className: p.appArch,
                                                                  children: [I.toLowerCase(), " "],
                                                              })
                                                            : null,
                                                        null != v
                                                            ? (0, r.jsxs)("span", {
                                                                  children: ["(", v, ")"],
                                                              })
                                                            : null,
                                                    ],
                                                }),
                                                " ",
                                            ],
                                        })
                                      : null,
                                  null != S
                                      ? (0, r.jsx)(l.Text, {
                                            tag: "span",
                                            className: a()(p.line, p.os),
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: S,
                                        })
                                      : null,
                              ],
                          }),
                      }),
                  ),
          });
}

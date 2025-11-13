n.d(t, { Z: () => O }), n(388685), n(704826), n(35282), n(539854);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(525654),
    s = n.n(o),
    l = n(481060),
    c = n(579806),
    u = n(304761),
    d = n(313201),
    f = n(320161),
    _ = n(998502),
    p = n(388032),
    h = n(447160);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y() {
    var e;
    let t = null === s() || void 0 === s() || null == (e = s().os) ? void 0 : e.toString();
    if (null == t || null == c.Z) return null;
    let n = c.Z.os.release,
        [r, i, a] = _.ZP.parsedOSRelease;
    if (
        (t.includes("Windows 10") && void 0 !== a && a >= 22000 && (t = t.replace("Windows 10", "Windows 11")),
        t.includes("OS X 10.15.7") && void 0 !== r && r >= 20)
    ) {
        let e = r >= 25 ? r + 1 : r - 9;
        t = "macOS ".concat(e);
    }
    return "".concat(t, " (").concat(n, ")");
}
function O(e) {
    var t, n, i, o, s;
    let { compact: _ = !1 } = e,
        m = (0, d.Dt)(),
        E = window.GLOBAL_ENV.RELEASE_CHANNEL,
        O = "467765",
        v = "31ae85216b6894fa391781fd12e7706186e80b53".substring(0, 7),
        I = null === c.Z || void 0 === c.Z ? void 0 : c.Z.remoteApp.getVersion(),
        T = null === c.Z || void 0 === c.Z || null == (t = (n = c.Z.remoteApp).getBuildNumber) ? void 0 : t.call(n),
        S = null === c.Z || void 0 === c.Z || null == (i = (o = c.Z.remoteApp).getAppArch) ? void 0 : i.call(o),
        A = null == (s = u.C.getCurrentBuildOverride().overrides) ? void 0 : s.discord_web,
        C = y(),
        N = [E, O, "(".concat(v, ")")];
    return (null != I &&
        (N.push("Host ".concat(I)), null != S && N.push(S.toLowerCase()), null != T && N.push("(".concat(T, ")"))),
    N.push("Build Override: ".concat(null != A ? A.id : "N/A")),
    null != C && N.push(C),
    _)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(f.Z, {
                      copyValue: N.join(" "),
                      text: p.intl.string(p.t["9Al4Qd"]),
                      "aria-label": !1,
                      dataMeticulousIgnore: "true",
                      children: (e) =>
                          (0, r.jsxs)(
                              l.P3F,
                              b(g({}, e), {
                                  "aria-describedby": m,
                                  className: a()(h.clickable, h.compact),
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: h.compactInfo,
                                          "data-mtctest-ignore": "true",
                                          children: [
                                              (0, r.jsxs)(l.Text, {
                                                  tag: "span",
                                                  variant: "text-xxs/normal",
                                                  color: "text-muted",
                                                  children: [
                                                      E,
                                                      " ",
                                                      O,
                                                      " ",
                                                      (0, r.jsxs)("span", {
                                                          className: h.versionHash,
                                                          children: ["(", v, ")"],
                                                      }),
                                                  ],
                                              }),
                                              null != I &&
                                                  (0, r.jsxs)(l.Text, {
                                                      tag: "span",
                                                      variant: "text-xxs/normal",
                                                      color: "text-muted",
                                                      children: [
                                                          I,
                                                          null != S &&
                                                              (0, r.jsxs)("span", {
                                                                  className: h.appArch,
                                                                  children: [" ", S.toLowerCase()],
                                                              }),
                                                          null != T &&
                                                              (0, r.jsxs)("span", {
                                                                  children: [" (", T, ")"],
                                                              }),
                                                      ],
                                                  }),
                                          ],
                                      }),
                                      null != A &&
                                          (0, r.jsx)(l.Text, {
                                              tag: "span",
                                              variant: "text-xxs/normal",
                                              color: "text-muted",
                                              children: (0, r.jsxs)("span", {
                                                  className: h.versionHash,
                                                  children: ["Build Override: ", A.id],
                                              }),
                                          }),
                                  ],
                              }),
                          ),
                  }),
                  (0, r.jsx)(l.nn4, {
                      id: m,
                      children: p.intl.string(p.t["9Al4Qd"]),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(f.Z, {
                      copyValue: N.join(" "),
                      text: p.intl.string(p.t["9Al4Qd"]),
                      "aria-label": !1,
                      dataMeticulousIgnore: "true",
                      children: (e) =>
                          (0, r.jsx)(
                              l.P3F,
                              b(g({}, e), {
                                  "aria-describedby": m,
                                  className: a()(h.clickable, h.compact),
                                  children: (0, r.jsxs)("div", {
                                      className: h.info,
                                      "data-mtctest-ignore": "true",
                                      children: [
                                          (0, r.jsxs)(l.Text, {
                                              tag: "span",
                                              className: h.line,
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: [
                                                  E,
                                                  " ",
                                                  O,
                                                  " ",
                                                  (0, r.jsxs)("span", {
                                                      className: h.versionHash,
                                                      children: ["(", v, ")"],
                                                  }),
                                              ],
                                          }),
                                          " ",
                                          null != A &&
                                              (0, r.jsx)(l.Text, {
                                                  tag: "span",
                                                  className: h.line,
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  children: (0, r.jsxs)("span", {
                                                      className: h.versionHash,
                                                      children: ["Build Override: ", A.id],
                                                  }),
                                              }),
                                          null != I
                                              ? (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsxs)(l.Text, {
                                                            tag: "span",
                                                            className: h.line,
                                                            variant: "text-xs/normal",
                                                            color: "text-muted",
                                                            children: [
                                                                "Host ",
                                                                I,
                                                                " ",
                                                                null != S
                                                                    ? (0, r.jsxs)("span", {
                                                                          className: h.appArch,
                                                                          children: [S.toLowerCase(), " "],
                                                                      })
                                                                    : null,
                                                                null != T
                                                                    ? (0, r.jsxs)("span", {
                                                                          children: ["(", T, ")"],
                                                                      })
                                                                    : null,
                                                            ],
                                                        }),
                                                        " ",
                                                    ],
                                                })
                                              : null,
                                          null != C
                                              ? (0, r.jsx)(l.Text, {
                                                    tag: "span",
                                                    className: a()(h.line, h.os),
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: C,
                                                })
                                              : null,
                                      ],
                                  }),
                              }),
                          ),
                  }),
                  (0, r.jsx)(l.nn4, {
                      id: m,
                      children: p.intl.string(p.t["9Al4Qd"]),
                  }),
              ],
          });
}

n.d(t, { z: () => f });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(854378),
    a = n(10088),
    s = n(723702),
    o = n(652215),
    c = n(985018),
    u = n(649778);
let d = n(843020);
function p(e) {
    let { children: t } = e,
        n = (0, i.bG)([a.A], () => a.A.getHighestState());
    return (0, s.isDesktop)() || n !== o.fAW.OPENING
        ? (0, s.isDesktop)() || n !== o.fAW.OPEN
            ? t
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("img", {
                          className: u.Lq,
                          src: d,
                          alt: "",
                      }),
                      (0, r.jsx)("div", {
                          className: u.kL,
                          children: (0, r.jsxs)(l.Ay, {
                              children: [
                                  (0, r.jsx)(l.hE, {
                                      className: u.Ns,
                                      children: c.intl.string(c.t.csrAMJ),
                                  }),
                                  (0, r.jsx)(l.tK, { children: c.intl.string(c.t.ghBJz9) }),
                              ],
                          }),
                      }),
                  ],
              })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("img", {
                      className: u.Lq,
                      src: d,
                      alt: "",
                  }),
                  (0, r.jsx)("div", {
                      className: u.kL,
                      children: (0, r.jsxs)(l.Ay, {
                          children: [
                              (0, r.jsx)(l.hE, { children: c.intl.string(c.t["Z+hCVU"]) }),
                              (0, r.jsx)(l.CK, {}),
                          ],
                      }),
                  }),
              ],
          });
}
function f(e) {
    var t, n;
    function i(t) {
        return (0, r.jsx)(p, {
            children: (0, r.jsx)(
                e,
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
                })({}, t),
                "deeplink-wrapper",
            ),
        });
    }
    return (
        (i.displayName = "Deeplink(".concat(
            null != (t = null != (n = e.displayName) ? n : e.name) ? t : "<Unknown>",
            ")",
        )),
        i
    );
}

"use strict";
n.d(t, { A: () => f, n: () => g });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(834730),
    o = n(534514),
    c = n(97808),
    u = n(854627),
    d = n(286320),
    h = n(778712),
    m = n(985018),
    p = n(526081);
function f(e) {
    let { smallerText: t, className: n, textColor: s, isApplicationHome: c, enablePremiumBrandRefresh: u } = e,
        f = (0, d.b)().slice(0, 3).reverse(),
        _ = f.map((e, t) =>
            (0, l.jsx)(g, { affinity: e, applyMask: t !== f.length - 1, size: u ? h._3.SIZE_24 : h._3.SIZE_32 }, e.id),
        ),
        x = (e) => (null != e.globalName ? e.globalName : e.username),
        C = i.useMemo(
            () =>
                3 === f.length
                    ? m.intl.formatToPlainString(m.t.c7ETJH, { username: x(f[2]) })
                    : 2 === f.length
                      ? m.intl.formatToPlainString(m.t["st8Rh/"], { username: x(f[1]), otherUsername: x(f[0]) })
                      : 1 === f.length
                        ? m.intl.formatToPlainString(m.t.dpjXPL, { username: x(f[0]) })
                        : "",
            [f],
        );
    return 0 === f.length
        ? null
        : (0, l.jsxs)("div", {
              className: a()(u ? p.bD : p.kL, n, { [p.gr]: !u && c }),
              children: [
                  (0, l.jsx)("div", { className: p.zc, children: _ }),
                  (0, l.jsx)("div", {
                      className: p.FS,
                      children: (0, l.jsx)(function () {
                          return u
                              ? (0, l.jsx)(r.E, { variant: "text-sm/medium", color: s, children: C })
                              : t || c
                                ? (0, l.jsx)(r.E, {
                                      variant: c ? "text-sm/normal" : "text-lg/medium",
                                      color: s,
                                      children: C,
                                  })
                                : (0, l.jsx)(o.D, { variant: "heading-xl/medium", color: s, children: C });
                      }, {}),
                  }),
              ],
          });
}
function g(e) {
    let { affinity: t, applyMask: n, size: i } = e,
        { avatarSrc: s, eventHandlers: r } = (0, u.A)({ userId: t?.id, size: i, animateOnHover: !0 });
    return (0, l.jsx)(c.eu, { className: a()(p.Kk, { [p.dK]: n }), src: s, "aria-label": t.username, size: i, ...r });
}

"use strict";
n.d(t, { A: () => p, n: () => g });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(834730),
    o = n(297264),
    u = n(97808),
    c = n(854627),
    d = n(286320),
    h = n(778712),
    m = n(375708),
    f = n(27535);
function p(e) {
    let { smallerText: t, className: n, textColor: s, isApplicationHome: u, enablePremiumBrandRefresh: c } = e,
        p = (0, d.b)().slice(0, 3).reverse(),
        x = p.map((e, t) =>
            (0, l.jsx)(g, { affinity: e, applyMask: t !== p.length - 1, size: c ? h._3.SIZE_24 : h._3.SIZE_32 }, e.id),
        );
    function A(e) {
        return null != e.globalName ? e.globalName : e.username;
    }
    let E = i.useMemo(
        () =>
            3 === p.length
                ? m.intl.formatToPlainString(m.t.c7ETJH, { username: A(p[2]) })
                : 2 === p.length
                  ? m.intl.formatToPlainString(m.t["st8Rh/"], { username: A(p[1]), otherUsername: A(p[0]) })
                  : 1 === p.length
                    ? m.intl.formatToPlainString(m.t.dpjXPL, { username: A(p[0]) })
                    : "",
        [p],
    );
    return 0 === p.length
        ? null
        : (0, l.jsxs)("div", {
              className: r()(c ? f.bD : f.kL, n, { [f.gr]: !c && u }),
              children: [
                  (0, l.jsx)("div", { className: f.zc, children: x }),
                  (0, l.jsx)("div", {
                      className: f.FS,
                      children: (0, l.jsx)(function () {
                          return c
                              ? (0, l.jsx)(a.E, { variant: "text-sm/medium", color: s, children: E })
                              : t || u
                                ? (0, l.jsx)(a.E, {
                                      variant: u ? "text-sm/normal" : "text-lg/medium",
                                      color: s,
                                      children: E,
                                  })
                                : (0, l.jsx)(o.D, { variant: "heading-xl/medium", color: s, children: E });
                      }, {}),
                  }),
              ],
          });
}
function g(e) {
    let { affinity: t, applyMask: n, size: i } = e,
        { avatarSrc: s, eventHandlers: a } = (0, c.A)({ userId: t?.id, size: i, animateOnHover: !0 });
    return (0, l.jsx)(u.eu, { className: r()(f.Kk, { [f.dK]: n }), src: s, "aria-label": t.username, size: i, ...a });
}

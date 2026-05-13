"use strict";
n.d(t, { A: () => p, n: () => E });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(834730),
    l = n(534514),
    u = n(97808),
    c = n(854627),
    d = n(286320),
    _ = n(778712),
    f = n(375708),
    h = n(727072);
function p(e) {
    let { smallerText: t, className: n, textColor: s, isApplicationHome: u, enablePremiumBrandRefresh: c } = e,
        p = (0, d.b)().slice(0, 3).reverse(),
        m = p.map((e, t) =>
            (0, i.jsx)(E, { affinity: e, applyMask: t !== p.length - 1, size: c ? _._3.SIZE_24 : _._3.SIZE_32 }, e.id),
        ),
        g = (e) => (null != e.globalName ? e.globalName : e.username),
        A = r.useMemo(
            () =>
                3 === p.length
                    ? f.intl.formatToPlainString(f.t.c7ETJH, { username: g(p[2]) })
                    : 2 === p.length
                      ? f.intl.formatToPlainString(f.t["st8Rh/"], { username: g(p[1]), otherUsername: g(p[0]) })
                      : 1 === p.length
                        ? f.intl.formatToPlainString(f.t.dpjXPL, { username: g(p[0]) })
                        : "",
            [p],
        );
    return 0 === p.length
        ? null
        : (0, i.jsxs)("div", {
              className: a()(c ? h.bD : h.kL, n, { [h.gr]: !c && u }),
              children: [
                  (0, i.jsx)("div", { className: h.zc, children: m }),
                  (0, i.jsx)("div", {
                      className: h.FS,
                      children: (0, i.jsx)(function () {
                          return c
                              ? (0, i.jsx)(o.E, { variant: "text-sm/medium", color: s, children: A })
                              : t || u
                                ? (0, i.jsx)(o.E, {
                                      variant: u ? "text-sm/normal" : "text-lg/medium",
                                      color: s,
                                      children: A,
                                  })
                                : (0, i.jsx)(l.D, { variant: "heading-xl/medium", color: s, children: A });
                      }, {}),
                  }),
              ],
          });
}
function E(e) {
    let { affinity: t, applyMask: n, size: r } = e,
        { avatarSrc: s, eventHandlers: o } = (0, c.A)({ userId: t?.id, size: r, animateOnHover: !0 });
    return (0, i.jsx)(u.eu, { className: a()(h.Kk, { [h.dK]: n }), src: s, "aria-label": t.username, size: r, ...o });
}

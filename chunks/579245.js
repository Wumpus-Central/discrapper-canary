"use strict";
n.d(t, { A: () => h, n: () => I });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(834730),
    o = n(297264),
    d = n(97808),
    c = n(854627),
    u = n(286320),
    _ = n(778712),
    E = n(375708),
    A = n(877256);
function h(e) {
    let { smallerText: t, className: n, textColor: a, isApplicationHome: d, enablePremiumBrandRefresh: c } = e,
        h = (0, u.b)().slice(0, 3).reverse(),
        f = h.map((e, t) =>
            (0, i.jsx)(I, { affinity: e, applyMask: t !== h.length - 1, size: c ? _._3.SIZE_24 : _._3.SIZE_32 }, e.id),
        );
    function p(e) {
        return null != e.globalName ? e.globalName : e.username;
    }
    let T = r.useMemo(
        () =>
            3 === h.length
                ? E.intl.formatToPlainString(E.t.c7ETJH, { username: p(h[2]) })
                : 2 === h.length
                  ? E.intl.formatToPlainString(E.t["st8Rh/"], { username: p(h[1]), otherUsername: p(h[0]) })
                  : 1 === h.length
                    ? E.intl.formatToPlainString(E.t.dpjXPL, { username: p(h[0]) })
                    : "",
        [h],
    );
    return 0 === h.length
        ? null
        : (0, i.jsxs)("div", {
              className: s()(c ? A.bD : A.kL, n, { [A.gr]: !c && d }),
              children: [
                  (0, i.jsx)("div", { className: A.zc, children: f }),
                  (0, i.jsx)("div", {
                      className: A.FS,
                      children: (0, i.jsx)(function () {
                          return c
                              ? (0, i.jsx)(l.E, { variant: "text-sm/medium", color: a, children: T })
                              : t || d
                                ? (0, i.jsx)(l.E, {
                                      variant: d ? "text-sm/normal" : "text-lg/medium",
                                      color: a,
                                      children: T,
                                  })
                                : (0, i.jsx)(o.D, { variant: "heading-xl/medium", color: a, children: T });
                      }, {}),
                  }),
              ],
          });
}
function I(e) {
    let { affinity: t, applyMask: n, size: r } = e,
        { avatarSrc: a, eventHandlers: l } = (0, c.A)({ userId: t?.id, size: r, animateOnHover: !0 });
    return (0, i.jsx)(d.eu, { className: s()(A.Kk, { [A.dK]: n }), src: a, "aria-label": t.username, size: r, ...l });
}

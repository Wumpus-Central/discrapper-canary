n.d(t, { A: () => p, n: () => f });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(834730),
    o = n(534514),
    c = n(97808),
    u = n(854627),
    d = n(286320),
    _ = n(778712),
    E = n(985018),
    A = n(526081);
function p(e) {
    let { smallerText: t, className: n, textColor: r, isApplicationHome: c, enablePremiumBrandRefresh: u } = e,
        p = (0, d.b)().slice(0, 3).reverse(),
        h = p.map((e, t) =>
            (0, a.jsx)(f, { affinity: e, applyMask: t !== p.length - 1, size: u ? _._3.SIZE_24 : _._3.SIZE_32 }, e.id),
        ),
        m = (e) => (null != e.globalName ? e.globalName : e.username),
        I = l.useMemo(
            () =>
                3 === p.length
                    ? E.intl.formatToPlainString(E.t.c7ETJH, { username: m(p[2]) })
                    : 2 === p.length
                      ? E.intl.formatToPlainString(E.t["st8Rh/"], { username: m(p[1]), otherUsername: m(p[0]) })
                      : 1 === p.length
                        ? E.intl.formatToPlainString(E.t.dpjXPL, { username: m(p[0]) })
                        : "",
            [p],
        );
    return 0 === p.length
        ? null
        : (0, a.jsxs)("div", {
              className: i()(u ? A.bD : A.kL, n, { [A.gr]: !u && c }),
              children: [
                  (0, a.jsx)("div", { className: A.zc, children: h }),
                  (0, a.jsx)("div", {
                      className: A.FS,
                      children: (0, a.jsx)(function () {
                          return u
                              ? (0, a.jsx)(s.E, { variant: "text-sm/medium", color: r, children: I })
                              : t || c
                                ? (0, a.jsx)(s.E, {
                                      variant: c ? "text-sm/normal" : "text-lg/medium",
                                      color: r,
                                      children: I,
                                  })
                                : (0, a.jsx)(o.D, { variant: "heading-xl/medium", color: r, children: I });
                      }, {}),
                  }),
              ],
          });
}
function f(e) {
    let { affinity: t, applyMask: n, size: l } = e,
        { avatarSrc: r, eventHandlers: s } = (0, u.A)({ userId: t?.id, size: l, animateOnHover: !0 });
    return (0, a.jsx)(c.eu, { className: i()(A.Kk, { [A.dK]: n }), src: r, "aria-label": t.username, size: l, ...s });
}

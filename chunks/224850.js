n.d(t, { A: () => A, n: () => f });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(834730),
    o = n(534514),
    c = n(97808),
    u = n(854627),
    d = n(286320),
    _ = n(778712),
    E = n(985018),
    p = n(526081);
function A(e) {
    let { smallerText: t, className: n, textColor: l, isApplicationHome: c, enablePremiumBrandRefresh: u } = e,
        A = (0, d.b)().slice(0, 3).reverse(),
        h = A.map((e, t) =>
            (0, a.jsx)(f, { affinity: e, applyMask: t !== A.length - 1, size: u ? _._3.SIZE_24 : _._3.SIZE_32 }, e.id),
        ),
        m = (e) => (null != e.globalName ? e.globalName : e.username),
        T = i.useMemo(
            () =>
                3 === A.length
                    ? E.intl.formatToPlainString(E.t.c7ETJH, { username: m(A[2]) })
                    : 2 === A.length
                      ? E.intl.formatToPlainString(E.t["st8Rh/"], { username: m(A[1]), otherUsername: m(A[0]) })
                      : 1 === A.length
                        ? E.intl.formatToPlainString(E.t.dpjXPL, { username: m(A[0]) })
                        : "",
            [A],
        );
    return 0 === A.length
        ? null
        : (0, a.jsxs)("div", {
              className: r()(u ? p.bD : p.kL, n, { [p.gr]: !u && c }),
              children: [
                  (0, a.jsx)("div", { className: p.zc, children: h }),
                  (0, a.jsx)("div", {
                      className: p.FS,
                      children: (0, a.jsx)(function () {
                          return u
                              ? (0, a.jsx)(s.E, { variant: "text-sm/medium", color: l, children: T })
                              : t || c
                                ? (0, a.jsx)(s.E, {
                                      variant: c ? "text-sm/normal" : "text-lg/medium",
                                      color: l,
                                      children: T,
                                  })
                                : (0, a.jsx)(o.D, { variant: "heading-xl/medium", color: l, children: T });
                      }, {}),
                  }),
              ],
          });
}
function f(e) {
    let { affinity: t, applyMask: n, size: i } = e,
        { avatarSrc: l, eventHandlers: s } = (0, u.A)({ userId: t?.id, size: i, animateOnHover: !0 });
    return (0, a.jsx)(c.eu, { className: r()(p.Kk, { [p.dK]: n }), src: l, "aria-label": t.username, size: i, ...s });
}

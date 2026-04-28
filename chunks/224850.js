n.d(t, { A: () => I, n: () => f });
var r = n(627968),
    a = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(834730),
    o = n(534514),
    c = n(97808),
    E = n(854627),
    _ = n(286320),
    A = n(778712),
    u = n(985018),
    d = n(526081);
function I(e) {
    let { smallerText: t, className: n, textColor: l, isApplicationHome: c, enablePremiumBrandRefresh: E } = e,
        I = (0, _.b)().slice(0, 3).reverse(),
        T = I.map((e, t) =>
            (0, r.jsx)(f, { affinity: e, applyMask: t !== I.length - 1, size: E ? A._3.SIZE_24 : A._3.SIZE_32 }, e.id),
        ),
        R = (e) => (null != e.globalName ? e.globalName : e.username),
        p = a.useMemo(
            () =>
                3 === I.length
                    ? u.intl.formatToPlainString(u.t.c7ETJH, { username: R(I[2]) })
                    : 2 === I.length
                      ? u.intl.formatToPlainString(u.t["st8Rh/"], { username: R(I[1]), otherUsername: R(I[0]) })
                      : 1 === I.length
                        ? u.intl.formatToPlainString(u.t.dpjXPL, { username: R(I[0]) })
                        : "",
            [I],
        );
    return 0 === I.length
        ? null
        : (0, r.jsxs)("div", {
              className: i()(E ? d.bD : d.kL, n, { [d.gr]: !E && c }),
              children: [
                  (0, r.jsx)("div", { className: d.zc, children: T }),
                  (0, r.jsx)("div", {
                      className: d.FS,
                      children: (0, r.jsx)(function () {
                          return E
                              ? (0, r.jsx)(s.E, { variant: "text-sm/medium", color: l, children: p })
                              : t || c
                                ? (0, r.jsx)(s.E, {
                                      variant: c ? "text-sm/normal" : "text-lg/medium",
                                      color: l,
                                      children: p,
                                  })
                                : (0, r.jsx)(o.D, { variant: "heading-xl/medium", color: l, children: p });
                      }, {}),
                  }),
              ],
          });
}
function f(e) {
    let { affinity: t, applyMask: n, size: a } = e,
        { avatarSrc: l, eventHandlers: s } = (0, E.A)({ userId: t?.id, size: a, animateOnHover: !0 });
    return (0, r.jsx)(c.eu, { className: i()(d.Kk, { [d.dK]: n }), src: l, "aria-label": t.username, size: a, ...s });
}

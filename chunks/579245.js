a.d(n, { A: () => x, n: () => p });
var i = a(627968),
    r = a(64700),
    s = a(503698),
    t = a.n(s),
    l = a(834730),
    m = a(534514),
    c = a(97808),
    d = a(854627),
    o = a(286320),
    u = a(778712),
    h = a(375708),
    g = a(727072);
function x(e) {
    let { smallerText: n, className: a, textColor: s, isApplicationHome: c, enablePremiumBrandRefresh: d } = e,
        x = (0, o.b)().slice(0, 3).reverse(),
        j = x.map((e, n) =>
            (0, i.jsx)(p, { affinity: e, applyMask: n !== x.length - 1, size: d ? u._3.SIZE_24 : u._3.SIZE_32 }, e.id),
        ),
        v = (e) => (null != e.globalName ? e.globalName : e.username),
        f = r.useMemo(
            () =>
                3 === x.length
                    ? h.intl.formatToPlainString(h.t.c7ETJH, { username: v(x[2]) })
                    : 2 === x.length
                      ? h.intl.formatToPlainString(h.t["st8Rh/"], { username: v(x[1]), otherUsername: v(x[0]) })
                      : 1 === x.length
                        ? h.intl.formatToPlainString(h.t.dpjXPL, { username: v(x[0]) })
                        : "",
            [x],
        );
    return 0 === x.length
        ? null
        : (0, i.jsxs)("div", {
              className: t()(d ? g.bD : g.kL, a, { [g.gr]: !d && c }),
              children: [
                  (0, i.jsx)("div", { className: g.zc, children: j }),
                  (0, i.jsx)("div", {
                      className: g.FS,
                      children: (0, i.jsx)(function () {
                          return d
                              ? (0, i.jsx)(l.E, { variant: "text-sm/medium", color: s, children: f })
                              : n || c
                                ? (0, i.jsx)(l.E, {
                                      variant: c ? "text-sm/normal" : "text-lg/medium",
                                      color: s,
                                      children: f,
                                  })
                                : (0, i.jsx)(m.D, { variant: "heading-xl/medium", color: s, children: f });
                      }, {}),
                  }),
              ],
          });
}
function p(e) {
    let { affinity: n, applyMask: a, size: r } = e,
        { avatarSrc: s, eventHandlers: l } = (0, d.A)({ userId: n?.id, size: r, animateOnHover: !0 });
    return (0, i.jsx)(c.eu, { className: t()(g.Kk, { [g.dK]: a }), src: s, "aria-label": n.username, size: r, ...l });
}

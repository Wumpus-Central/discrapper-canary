n.d(t, { A: () => T, n: () => A });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(397927),
    c = n(854627),
    d = n(560138),
    u = n(778712),
    _ = n(985018),
    E = n(115640);
function T(e) {
    let { smallerText: t, className: n, textColor: r, isApplicationHome: c, enablePremiumBrandRefresh: T } = e,
        I = (0, a.bG)([d.A], () => d.A.affinities.slice(0, 3).reverse()),
        p = I.map((e, t) =>
            (0, i.jsx)(A, { affinity: e, applyMask: t !== I.length - 1, size: T ? u._3.SIZE_24 : u._3.SIZE_32 }, e.id),
        ),
        N = (e) => (null != e.globalName ? e.globalName : e.username),
        m = l.useMemo(
            () =>
                3 === I.length
                    ? _.intl.formatToPlainString(_.t.c7ETJH, { username: N(I[2]) })
                    : 2 === I.length
                      ? _.intl.formatToPlainString(_.t["st8Rh/"], { username: N(I[1]), otherUsername: N(I[0]) })
                      : 1 === I.length
                        ? _.intl.formatToPlainString(_.t.dpjXPL, { username: N(I[0]) })
                        : "",
            [I],
        );
    return 0 === I.length
        ? null
        : (0, i.jsxs)("div", {
              className: s()(T ? E.bD : E.kL, n, { [E.gr]: !T && c }),
              children: [
                  (0, i.jsx)("div", { className: E.zc, children: p }),
                  (0, i.jsx)("div", {
                      className: E.FS,
                      children: (0, i.jsx)(function () {
                          return T
                              ? (0, i.jsx)(o.Text, { variant: "text-sm/medium", color: r, children: m })
                              : t || c
                                ? (0, i.jsx)(o.Text, {
                                      variant: c ? "text-sm/normal" : "text-lg/medium",
                                      color: r,
                                      children: m,
                                  })
                                : (0, i.jsx)(o.Heading, { variant: "heading-xl/medium", color: r, children: m });
                      }, {}),
                  }),
              ],
          });
}
function A(e) {
    let { affinity: t, applyMask: n, size: l } = e,
        { avatarSrc: r, eventHandlers: a } = (0, c.A)({ userId: t?.id, size: l, animateOnHover: !0 });
    return (0, i.jsx)(o.euF, { className: s()(E.Kk, { [E.dK]: n }), src: r, "aria-label": t.username, size: l, ...a });
}

i.d(t, { A: () => _, n: () => m });
var n = i(477900),
    a = i(582128),
    r = i(503698),
    s = i.n(r),
    c = i(834730),
    l = i(534514),
    h = i(97808),
    f = i(854627),
    d = i(286320),
    o = i(778712),
    I = i(105292),
    u = i(27535);
function _(e) {
    let { smallerText: t, className: i, textColor: r, isApplicationHome: h, enablePremiumBrandRefresh: f } = e,
        _ = (0, d.b)().slice(0, 3).reverse(),
        E = _.map((e, t) =>
            (0, n.jsx)(m, { affinity: e, applyMask: t !== _.length - 1, size: f ? o._3.SIZE_24 : o._3.SIZE_32 }, e.id),
        );
    function F(e) {
        return null != e.globalName ? e.globalName : e.username;
    }
    let g = a.useMemo(
        () =>
            3 === _.length
                ? I.intl.formatToPlainString(I.t.c7ETJH, { username: F(_[2]) })
                : 2 === _.length
                  ? I.intl.formatToPlainString(I.t["st8Rh/"], { username: F(_[1]), otherUsername: F(_[0]) })
                  : 1 === _.length
                    ? I.intl.formatToPlainString(I.t.dpjXPL, { username: F(_[0]) })
                    : "",
        [_],
    );
    return 0 === _.length
        ? null
        : (0, n.jsxs)("div", {
              className: s()(f ? u.bD : u.kL, i, { [u.gr]: !f && h }),
              children: [
                  (0, n.jsx)("div", { className: u.zc, children: E }),
                  (0, n.jsx)("div", {
                      className: u.FS,
                      children: (0, n.jsx)(function () {
                          return f
                              ? (0, n.jsx)(c.E, { variant: "body-sm/medium", color: r, children: g })
                              : t || h
                                ? (0, n.jsx)(c.E, {
                                      variant: h ? "body-sm/normal" : "body-lg/medium",
                                      color: r,
                                      children: g,
                                  })
                                : (0, n.jsx)(l.D, { variant: "heading-xl/medium", color: r, children: g });
                      }, {}),
                  }),
              ],
          });
}
function m(e) {
    let { affinity: t, applyMask: i, size: a } = e,
        { avatarSrc: r, eventHandlers: c } = (0, f.A)({ userId: t?.id, size: a, animateOnHover: !0 });
    return (0, n.jsx)(h.eu, { className: s()(u.Kk, { [u.dK]: i }), src: r, "aria-label": t.username, size: a, ...c });
}

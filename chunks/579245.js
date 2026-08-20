i.d(t, { A: () => _, n: () => m });
var n = i(477900),
    a = i(582128),
    s = i(503698),
    r = i.n(s),
    c = i(834730),
    l = i(297264),
    h = i(97808),
    f = i(854627),
    I = i(286320),
    u = i(778712),
    d = i(375708),
    o = i(27535);
function _(e) {
    let { smallerText: t, className: i, textColor: s, isApplicationHome: h, enablePremiumBrandRefresh: f } = e,
        _ = (0, I.b)().slice(0, 3).reverse(),
        E = _.map((e, t) =>
            (0, n.jsx)(m, { affinity: e, applyMask: t !== _.length - 1, size: f ? u._3.SIZE_24 : u._3.SIZE_32 }, e.id),
        );
    function F(e) {
        return null != e.globalName ? e.globalName : e.username;
    }
    let g = a.useMemo(
        () =>
            3 === _.length
                ? d.intl.formatToPlainString(d.t.c7ETJH, { username: F(_[2]) })
                : 2 === _.length
                  ? d.intl.formatToPlainString(d.t["st8Rh/"], { username: F(_[1]), otherUsername: F(_[0]) })
                  : 1 === _.length
                    ? d.intl.formatToPlainString(d.t.dpjXPL, { username: F(_[0]) })
                    : "",
        [_],
    );
    return 0 === _.length
        ? null
        : (0, n.jsxs)("div", {
              className: r()(f ? o.bD : o.kL, i, { [o.gr]: !f && h }),
              children: [
                  (0, n.jsx)("div", { className: o.zc, children: E }),
                  (0, n.jsx)("div", {
                      className: o.FS,
                      children: (0, n.jsx)(function () {
                          return f
                              ? (0, n.jsx)(c.E, { variant: "text-sm/medium", color: s, children: g })
                              : t || h
                                ? (0, n.jsx)(c.E, {
                                      variant: h ? "text-sm/normal" : "text-lg/medium",
                                      color: s,
                                      children: g,
                                  })
                                : (0, n.jsx)(l.D, { variant: "heading-xl/medium", color: s, children: g });
                      }, {}),
                  }),
              ],
          });
}
function m(e) {
    let { affinity: t, applyMask: i, size: a } = e,
        { avatarSrc: s, eventHandlers: c } = (0, f.A)({ userId: t?.id, size: a, animateOnHover: !0 });
    return (0, n.jsx)(h.eu, { className: r()(o.Kk, { [o.dK]: i }), src: s, "aria-label": t.username, size: a, ...c });
}

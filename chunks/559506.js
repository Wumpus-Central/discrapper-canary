n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(922590),
    o = n(622543),
    l = n(985018);

function c(e) {
    let { userId: t, className: n } = e,
        c = (0, s.f1)(t),
        u = (0, s.fi)(t),
        d = (0, i.bG)([o.A], () => {
            var e;
            return null == (e = o.A.getUserProfile(t)) ? void 0 : e.fetchError;
        });
    return c.length > 0 || u.length > 0 || null == d
        ? null
        : (0, r.jsx)("div", {
              className: n,
              children: (0, r.jsx)(a.wx6, {
                  type: "warning",
                  children: l.intl.string(l.t.p3Q9Y2),
              }),
          });
}

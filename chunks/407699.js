n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(320582),
    s = n(621853),
    l = n(388032);
function c(e) {
    let { userId: t, className: n } = e,
        c = (0, o.ML)(t),
        u = (0, o.vh)(t),
        d = (0, i.e7)([s.Z], () => {
            var e;
            return null == (e = s.Z.getUserProfile(t)) ? void 0 : e.fetchError;
        });
    return c.length > 0 || u.length > 0 || null == d
        ? null
        : (0, r.jsx)("div", {
              className: n,
              children: (0, r.jsx)(a.M14, {
                  type: "warning",
                  children: l.intl.string(l.t.p3Q9Y2),
              }),
          });
}

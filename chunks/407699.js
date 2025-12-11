n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(692547),
    l = n(481060),
    c = n(320582),
    u = n(621853),
    d = n(388032),
    f = n(853761);
function p(e) {
    let { userId: t, size: n = "refresh_sm", className: i } = e,
        p = (0, c.ML)(t),
        _ = (0, c.vh)(t),
        m = (0, o.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getUserProfile(t)) ? void 0 : e.fetchError;
        });
    return p.length > 0 || _.length > 0 || null == m
        ? null
        : (0, r.jsxs)("div", {
              className: a()(f.container, i),
              children: [
                  (0, r.jsx)(l.Mgn, {
                      size: n,
                      color: s.Z.colors.STATUS_WARNING.css,
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: d.intl.string(d.t.p3Q9Y2),
                  }),
              ],
          });
}

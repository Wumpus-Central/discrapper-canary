r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(692547),
    s = r(981729),
    l = r(481060),
    u = r(621853),
    c = r(228168),
    d = r(388032),
    f = r(100757);
function p(e) {
    let { userId: n } = e;
    return null ==
        (0, a.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(n)) || void 0 === e ? void 0 : e.fetchError;
        })
        ? null
        : (0, i.jsx)(s.DY, {
              className: f.container,
              text: d.intl.string(d.t.p3Q9Y2),
              delay: c.vB,
              children: (0, i.jsx)(l.CircleWarningIcon, {
                  size: 'xs',
                  color: o.Z.colors.STATUS_WARNING.css
              })
          });
}

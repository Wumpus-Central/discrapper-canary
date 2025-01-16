r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(692547),
    o = r(981729),
    l = r(481060),
    u = r(621853),
    c = r(228168),
    d = r(388032),
    f = r(100757);
function _(e) {
    let { userId: n } = e;
    return null ==
        (0, a.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(n)) || void 0 === e ? void 0 : e.fetchError;
        })
        ? null
        : (0, i.jsx)(o.DY, {
              className: f.container,
              text: d.intl.string(d.t.p3Q9Y2),
              delay: c.vB,
              children: (0, i.jsx)(l.CircleWarningIcon, {
                  size: 'xs',
                  color: s.Z.colors.STATUS_WARNING.css
              })
          });
}

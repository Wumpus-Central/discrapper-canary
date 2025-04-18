n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(692547),
    a = n(981729),
    s = n(481060),
    l = n(320582),
    c = n(621853),
    u = n(228168),
    d = n(388032),
    f = n(472852);
function _(e) {
    let { userId: t } = e,
        n = (0, l.ML)(t),
        _ = (0, l.vh)(t),
        p = (0, i.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getUserProfile(t)) ? void 0 : e.fetchError;
        });
    return n.length > 0 || _.length > 0 || null == p
        ? null
        : (0, r.jsx)(a.DY, {
              className: f.container,
              text: d.NW.string(d.t.p3Q9Y2),
              delay: u.vB,
              children: (0, r.jsx)(s.P4T, {
                  size: 'xs',
                  color: o.Z.colors.STATUS_WARNING.css
              })
          });
}

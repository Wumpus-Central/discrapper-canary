n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(692547),
    s = n(981729),
    o = n(481060),
    l = n(320582),
    u = n(621853),
    c = n(228168),
    d = n(388032),
    f = n(100757);
function _(e) {
    let { userId: t } = e,
        n = (0, l.ML)(t),
        _ = (0, l.vh)(t),
        p = (0, r.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t)) || void 0 === e ? void 0 : e.fetchError;
        });
    return n.length > 0 || _.length > 0 || null == p
        ? null
        : (0, i.jsx)(s.DY, {
              className: f.container,
              text: d.intl.string(d.t.p3Q9Y2),
              delay: c.vB,
              children: (0, i.jsx)(o.P4T, {
                  size: 'xs',
                  color: a.Z.colors.STATUS_WARNING.css
              })
          });
}

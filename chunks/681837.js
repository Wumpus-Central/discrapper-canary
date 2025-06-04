n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(692547),
    o = n(981729),
    s = n(481060),
    l = n(320582),
    c = n(621853),
    u = n(228168),
    d = n(388032),
    f = n(537987);
function _(e) {
    let { userId: t, size: n = 'xs' } = e,
        _ = (0, l.ML)(t),
        p = (0, l.vh)(t),
        h = (0, i.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getUserProfile(t)) ? void 0 : e.fetchError;
        });
    return _.length > 0 || p.length > 0 || null == h
        ? null
        : (0, r.jsx)(o.DY, {
              className: f.container,
              text: d.intl.string(d.t.p3Q9Y2),
              delay: u.vB,
              children: (0, r.jsx)(s.P4T, {
                  size: n,
                  color: a.Z.colors.STATUS_WARNING.css
              })
          });
}

t.d(n, {
    Z: function () {
        return g;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    a = t(668781),
    o = t(79390),
    s = t(222677),
    u = t(665906),
    d = t(496675),
    c = t(981631),
    f = t(388032);
function g(e, n) {
    let t = (0, u.$R)(n),
        g = (0, l.e7)([d.Z], () => d.Z.can(c.Plq.MANAGE_MESSAGES, n) && t, [n, t]);
    return !g || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, o.eQ)(e))
        ? null
        : (0, i.jsx)(r.MenuItem, {
              id: 'remove-reactions',
              label: f.intl.string(f.t.ZbtGBg),
              action: function (t) {
                  t.shiftKey
                      ? (0, s.wX)(n.id, e.id)
                      : a.Z.show({
                            title: f.intl.string(f.t.iz3vYW),
                            body: f.intl.string(f.t.VpjOCg),
                            confirmText: f.intl.string(f.t.p89ACg),
                            cancelText: f.intl.string(f.t.gm1Ven),
                            onConfirm: () => {
                                (0, s.wX)(n.id, e.id);
                            }
                        });
              },
              color: 'danger'
          });
}

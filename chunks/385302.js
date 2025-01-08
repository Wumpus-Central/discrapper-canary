t.d(n, {
    Z: function () {
        return f;
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
    g = t(388032);
function f(e, n) {
    let t = (0, u.$R)(n),
        f = (0, l.e7)([d.Z], () => d.Z.can(c.Plq.MANAGE_MESSAGES, n) && t, [n, t]);
    return !f || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, o.eQ)(e))
        ? null
        : (0, i.jsx)(r.MenuItem, {
              id: 'remove-reactions',
              label: g.intl.string(g.t.ZbtGBg),
              action: function (t) {
                  t.shiftKey
                      ? (0, s.wX)(n.id, e.id)
                      : a.Z.show({
                            title: g.intl.string(g.t.iz3vYW),
                            body: g.intl.string(g.t.VpjOCg),
                            confirmText: g.intl.string(g.t.p89ACg),
                            cancelText: g.intl.string(g.t.gm1Ven),
                            onConfirm: () => {
                                (0, s.wX)(n.id, e.id);
                            }
                        });
              },
              color: 'danger'
          });
}

n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    s = n(668781),
    r = n(79390),
    o = n(222677),
    d = n(665906),
    c = n(496675),
    u = n(981631),
    g = n(388032);
function f(e, t) {
    let n = (0, d.$R)(t);
    return !(0, l.e7)([c.Z], () => c.Z.can(u.Plq.MANAGE_MESSAGES, t) && n, [t, n]) || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, r.eQ)(e))
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'remove-reactions',
              label: g.intl.string(g.t.ZbtGBg),
              action: function (n) {
                  n.shiftKey
                      ? (0, o.wX)(t.id, e.id)
                      : s.Z.show({
                            title: g.intl.string(g.t.iz3vYW),
                            body: g.intl.string(g.t.VpjOCg),
                            confirmText: g.intl.string(g.t.p89ACg),
                            cancelText: g.intl.string(g.t.gm1Ven),
                            onConfirm: () => {
                                (0, o.wX)(t.id, e.id);
                            }
                        });
              },
              color: 'danger'
          });
}

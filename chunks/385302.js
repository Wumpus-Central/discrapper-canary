n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(668781),
    o = n(79390),
    s = n(222677),
    c = n(665906),
    u = n(496675),
    d = n(981631),
    f = n(388032);
function g(e, t) {
    let n = (0, c.$R)(t);
    return !(0, r.e7)([u.Z], () => u.Z.can(d.Plq.MANAGE_MESSAGES, t) && n, [t, n]) || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, o.eQ)(e))
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'remove-reactions',
              label: f.intl.string(f.t.ZbtGBg),
              action: function (n) {
                  n.shiftKey
                      ? (0, s.wX)(t.id, e.id)
                      : a.Z.show({
                            title: f.intl.string(f.t.iz3vYW),
                            body: f.intl.string(f.t.VpjOCg),
                            confirmText: f.intl.string(f.t.p89ACg),
                            cancelText: f.intl.string(f.t.gm1Ven),
                            onConfirm: () => {
                                (0, s.wX)(t.id, e.id);
                            }
                        });
              },
              color: 'danger'
          });
}

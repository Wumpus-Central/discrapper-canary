n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(668781),
    s = n(79390),
    l = n(222677),
    c = n(665906),
    u = n(496675),
    d = n(981631),
    f = n(388032);
function _(e, t) {
    let n = (0, c.$R)(t);
    function _(n) {
        n.shiftKey
            ? (0, l.wX)(t.id, e.id)
            : a.Z.show({
                  title: f.intl.string(f.t.iz3vYW),
                  body: f.intl.string(f.t.VpjOCg),
                  confirmText: f.intl.string(f.t.p89ACg),
                  confirmVariant: 'critical-primary',
                  cancelText: f.intl.string(f.t.gm1Ven),
                  onConfirm: () => {
                      (0, l.wX)(t.id, e.id);
                  }
              });
    }
    return !(0, i.e7)([u.Z], () => u.Z.can(d.Plq.MANAGE_MESSAGES, t) && n, [t, n]) || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, s.eQ)(e))
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'remove-reactions',
              label: f.intl.string(f.t.ZbtGBg),
              action: _,
              color: 'danger'
          });
}

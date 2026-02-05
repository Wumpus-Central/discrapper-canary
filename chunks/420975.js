n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(157559),
    s = n(969632),
    o = n(649963),
    d = n(406704),
    c = n(576705),
    u = n(652215),
    g = n(985018);
function A(e, t) {
    let n = (0, d.Id)(t);
    return !(0, l.bG)([c.A], () => c.A.can(u.xBc.MANAGE_MESSAGES, t) && n, [t, n]) ||
        null == e.reactions ||
        0 === e.reactions.length ||
        (e.isPoll() && !(0, s.Gh)(e))
        ? null
        : (0, i.jsx)(a.Drp, {
              id: "remove-reactions",
              label: g.intl.string(g.t.ZbtGBm),
              leadingAccessory: { type: "icon", icon: a.tjR },
              action: function (n) {
                  n.shiftKey
                      ? (0, o.Go)(t.id, e.id)
                      : r.A.show({
                            title: g.intl.string(g.t.iz3vYX),
                            body: g.intl.string(g.t.VpjOCo),
                            confirmText: g.intl.string(g.t.p89ACt),
                            confirmVariant: "critical-primary",
                            cancelText: g.intl.string(g.t.gm1Vej),
                            onConfirm: () => {
                                (0, o.Go)(t.id, e.id);
                            },
                        });
              },
              color: "danger",
          });
}

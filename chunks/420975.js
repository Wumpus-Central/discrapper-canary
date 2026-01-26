n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(157559),
    o = n(969632),
    c = n(649963),
    s = n(406704),
    d = n(576705),
    u = n(652215),
    g = n(985018);

function p(e, t) {
    let n = (0, s.Id)(t);
    return !(0, i.bG)([d.A], () => d.A.can(u.xBc.MANAGE_MESSAGES, t) && n, [t, n]) ||
        null == e.reactions ||
        0 === e.reactions.length ||
        (e.isPoll() && !(0, o.Gh)(e))
        ? null
        : (0, r.jsx)(l.Drp, {
              id: "remove-reactions",
              label: g.intl.string(g.t.ZbtGBm),
              leadingAccessory: {
                  type: "icon",
                  icon: l.tjR,
              },
              action: function (n) {
                  n.shiftKey
                      ? (0, c.Go)(t.id, e.id)
                      : a.A.show({
                            title: g.intl.string(g.t.iz3vYX),
                            body: g.intl.string(g.t.VpjOCo),
                            confirmText: g.intl.string(g.t.p89ACt),
                            confirmVariant: "critical-primary",
                            cancelText: g.intl.string(g.t.gm1Vej),
                            onConfirm: () => {
                                (0, c.Go)(t.id, e.id);
                            },
                        });
              },
              color: "danger",
          });
}

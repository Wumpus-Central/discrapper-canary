n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(477782),
    r = n(997571),
    s = n(157559),
    o = n(969632),
    d = n(649963),
    c = n(406704),
    u = n(576705),
    g = n(652215),
    A = n(985018);
function h(e, t) {
    let n = (0, c.Id)(t);
    return !(0, l.bG)([u.A], () => u.A.can(g.xBc.MANAGE_MESSAGES, t) && n, [t, n]) ||
        null == e.reactions ||
        0 === e.reactions.length ||
        (e.isPoll() && !(0, o.Gh)(e))
        ? null
        : (0, i.jsx)(a.Dr, {
              id: "remove-reactions",
              label: A.intl.string(A.t.ZbtGBm),
              leadingAccessory: { type: "icon", icon: r.t },
              action: function (n) {
                  n.shiftKey
                      ? (0, d.Go)(t.id, e.id)
                      : s.A.show({
                            title: A.intl.string(A.t.iz3vYX),
                            body: A.intl.string(A.t.VpjOCo),
                            confirmText: A.intl.string(A.t.p89ACt),
                            confirmVariant: "critical-primary",
                            cancelText: A.intl.string(A.t.gm1Vej),
                            onConfirm: () => {
                                (0, d.Go)(t.id, e.id);
                            },
                        });
              },
              color: "danger",
          });
}

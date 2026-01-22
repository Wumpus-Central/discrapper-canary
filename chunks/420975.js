n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    o = n(157559),
    a = n(969632),
    c = n(649963),
    s = n(406704),
    d = n(576705),
    u = n(652215),
    f = n(985018);
function g(e, t) {
    let n = (0, s.Id)(t);
    return !(0, l.bG)([d.A], () => d.A.can(u.xBc.MANAGE_MESSAGES, t) && n, [t, n]) ||
        null == e.reactions ||
        0 === e.reactions.length ||
        (e.isPoll() && !(0, a.Gh)(e))
        ? null
        : (0, r.jsx)(i.Drp, {
              id: "remove-reactions",
              label: f.intl.string(f.t.ZbtGBm),
              action: function (n) {
                  n.shiftKey
                      ? (0, c.Go)(t.id, e.id)
                      : o.A.show({
                            title: f.intl.string(f.t.iz3vYX),
                            body: f.intl.string(f.t.VpjOCo),
                            confirmText: f.intl.string(f.t.p89ACt),
                            confirmVariant: "critical-primary",
                            cancelText: f.intl.string(f.t.gm1Vej),
                            onConfirm: () => {
                                (0, c.Go)(t.id, e.id);
                            },
                        });
              },
              color: "danger",
          });
}

n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    o = n(668781),
    a = n(79390),
    c = n(222677),
    s = n(665906),
    u = n(496675),
    d = n(981631),
    f = n(388032);
function g(e, t) {
    let n = (0, s.$R)(t);
    return !(0, i.e7)([u.Z], () => u.Z.can(d.Plq.MANAGE_MESSAGES, t) && n, [t, n]) ||
        null == e.reactions ||
        0 === e.reactions.length ||
        (e.isPoll() && !(0, a.eQ)(e))
        ? null
        : (0, r.jsx)(l.sNh, {
              id: "remove-reactions",
              label: f.intl.string(f.t.ZbtGBm),
              action: function (n) {
                  n.shiftKey
                      ? (0, c.wX)(t.id, e.id)
                      : o.Z.show({
                            title: f.intl.string(f.t.iz3vYX),
                            body: f.intl.string(f.t.VpjOCo),
                            confirmText: f.intl.string(f.t.p89ACt),
                            confirmVariant: "critical-primary",
                            cancelText: f.intl.string(f.t.gm1Vej),
                            onConfirm: () => {
                                (0, c.wX)(t.id, e.id);
                            },
                        });
              },
              color: "danger",
          });
}

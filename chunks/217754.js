i.d(t, { A: () => A });
var e = i(627968);
i(64700);
var l = i(311907),
    r = i(314116),
    a = i(397927),
    s = i(849736),
    d = i(233993),
    c = i(576705),
    o = i(985018);
function A(n, t) {
    let i = (0, l.bG)([c.A], () => c.A.can(d.QY, n), [n]);
    return null != t && i
        ? (0, e.jsx)(a.Drp, {
              id: "end-stage",
              label: o.intl.string(o.t.saZaRb),
              color: "danger",
              action: function () {
                  (0, r.A)({
                      title: o.intl.string(o.t.gW9je1),
                      subtitle: o.intl.string(o.t.mT7jwN),
                      confirmText: o.intl.string(o.t.saZaRb),
                      onConfirm: () => (0, s.OE)(n),
                  });
              },
          })
        : null;
}

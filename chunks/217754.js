e.d(t, {
    A: () => u,
});
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(314116),
    a = e(397927),
    s = e(849736),
    c = e(233993),
    o = e(576705),
    d = e(985018);

function u(n, t) {
    let e = (0, l.bG)([o.A], () => o.A.can(c.QY, n), [n]);
    return null != t && e
        ? (0, i.jsx)(a.Drp, {
              id: "end-stage",
              label: d.intl.string(d.t.saZaRb),
              color: "danger",
              action: function () {
                  (0, r.A)({
                      title: d.intl.string(d.t.gW9je1),
                      subtitle: d.intl.string(d.t.mT7jwN),
                      confirmText: d.intl.string(d.t.saZaRb),
                      onConfirm: () => (0, s.OE)(n),
                  });
              },
          })
        : null;
}

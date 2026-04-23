e.d(t, { A: () => A });
var i = e(627968);
e(64700);
var l = e(311907),
    a = e(314116),
    r = e(477782),
    s = e(849736),
    d = e(233993),
    c = e(576705),
    o = e(985018);
function A(n, t) {
    let e = (0, l.bG)([c.A], () => c.A.can(d.QY, n), [n]);
    return null != t && e
        ? (0, i.jsx)(r.Dr, {
              id: "end-stage",
              label: o.intl.string(o.t.saZaRb),
              color: "danger",
              action: function () {
                  (0, a.A)({
                      title: o.intl.string(o.t.gW9je1),
                      subtitle: o.intl.string(o.t.mT7jwN),
                      confirmText: o.intl.string(o.t.saZaRb),
                      onConfirm: () => (0, s.OE)(n),
                  });
              },
          })
        : null;
}

e.d(t, { Z: () => u });
var i = e(54381);
e(473749);
var l = e(442837),
    r = e(248514),
    a = e(481060),
    c = e(471253),
    s = e(146085),
    o = e(496675),
    d = e(388032);
function u(n, t) {
    let e = (0, l.e7)([o.Z], () => o.Z.can(s.yP, n), [n]);
    return null != t && e
        ? (0, i.jsx)(a.sNh, {
              id: "end-stage",
              label: d.intl.string(d.t.saZaRb),
              color: "danger",
              action: function () {
                  (0, r.Z)({
                      title: d.intl.string(d.t.gW9je1),
                      subtitle: d.intl.string(d.t.mT7jwN),
                      confirmText: d.intl.string(d.t.saZaRb),
                      onConfirm: () => (0, c.NZ)(n),
                      variant: "critical",
                  });
              },
          })
        : null;
}

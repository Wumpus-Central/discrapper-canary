e.d(n, { A: () => p });
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(573648),
    a = e(688810),
    s = e(882997),
    o = e(962173),
    c = e(939496),
    u = e(993401),
    d = e(652215),
    A = e(996988),
    x = e(985018);
function p(t) {
    let { platformType: n, icon: e, onAction: p } = t,
        { newestAnalyticsLocation: f } = (0, a.Ay)(),
        { themeType: _ } = (0, c.E)(),
        m = _ === A.d.MODAL_V2;
    return (0, l.bG)([o.A], () => null != o.A.getAccount(null, n))
        ? null
        : (0, i.jsx)(u.FD, {
              icon: e,
              text: x.intl.formatToPlainString(x.t.XWSHTb, { platform: r.A.get(n).name }),
              fullWidth: !m,
              onClick: (t) => {
                  t.stopPropagation();
                  let e = n === d.fg2.XBOX;
                  p?.({ action: e ? "PRESS_CONNECT_XBOX_BUTTON" : "PRESS_CONNECT_PLAYSTATION_BUTTON" }),
                      (0, s.A)({ platformType: n, location: f });
              },
          });
}

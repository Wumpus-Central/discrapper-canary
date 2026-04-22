e.d(n, { A: () => f });
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(477782),
    a = e(573648),
    s = e(541806),
    o = e(261020),
    c = e(83971),
    u = e(780964),
    d = e(858897),
    A = e(962173),
    x = e(652215),
    p = e(985018);
function f(t) {
    let { activity: n, entry: e, display: f, onAction: _, onClose: m } = t,
        E = (0, l.bG)([A.A], () => null != A.A.getAccount(null, x.fg2.CRUNCHYROLL));
    if (!(0, s.A)(n) && !(0, c.CU)(e)) return null;
    if (!E)
        return (0, i.jsx)(r.Dr, {
            id: "connect-crunchyroll",
            label: p.intl.formatToPlainString(p.t.XWSHTb, { platform: a.A.get(x.fg2.CRUNCHYROLL).name }),
            action: () => {
                _?.({ action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM" }),
                    (0, d.openUserSettings)(u.X.CONNECTIONS_PANEL),
                    m?.();
            },
        });
    if ("recent" !== f || !(0, c.CU)(e)) return null;
    let T = e.extra.url;
    return null == T || "" === T
        ? null
        : (0, i.jsx)(r.Dr, {
              id: "watch-on-crunchyroll",
              label: p.intl.string(p.t.OpxQVH),
              action: () => {
                  _?.({ action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM" }), (0, o.C)(T);
              },
          });
}

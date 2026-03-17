"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    a = n(573648),
    o = n(541806),
    l = n(261020),
    u = n(83971),
    c = n(780964),
    d = n(840065),
    _ = n(962173),
    f = n(652215),
    p = n(985018);
function h(e) {
    let { activity: t, entry: n, display: h, onAction: m, onClose: E } = e,
        g = (0, i.bG)([_.A], () => null != _.A.getAccount(null, f.fg2.CRUNCHYROLL));
    if (!(0, o.A)(t) && !(0, u.CU)(n)) return null;
    if (!g)
        return (0, r.jsx)(s.Drp, {
            id: "connect-crunchyroll",
            label: p.intl.formatToPlainString(p.t.XWSHTb, { platform: a.A.get(f.fg2.CRUNCHYROLL).name }),
            action: () => {
                m?.({ action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM" }),
                    (0, d.openUserSettings)(c.X.CONNECTIONS_PANEL),
                    E?.();
            },
        });
    if ("recent" !== h || !(0, u.CU)(n)) return null;
    let A = n.extra.url;
    return null == A || "" === A
        ? null
        : (0, r.jsx)(s.Drp, {
              id: "watch-on-crunchyroll",
              label: p.intl.string(p.t.OpxQVH),
              action: () => {
                  m?.({ action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM" }), (0, l.C)(A);
              },
          });
}

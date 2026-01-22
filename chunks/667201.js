n.d(t, {
    A: () => h,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(573648),
    o = n(541806),
    l = n(261020),
    c = n(83971),
    u = n(780964),
    d = n(840065),
    f = n(962173),
    p = n(652215),
    _ = n(985018);

function h(e) {
    let { activity: t, entry: n, display: h, onAction: m, onClose: g } = e,
        E = (0, i.bG)([f.A], () => null != f.A.getAccount(null, p.fg2.CRUNCHYROLL));
    if (!(0, o.A)(t) && !(0, c.CU)(n)) return null;
    if (!E)
        return (0, r.jsx)(a.Drp, {
            id: "connect-crunchyroll",
            label: _.intl.formatToPlainString(_.t.XWSHTb, {
                platform: s.A.get(p.fg2.CRUNCHYROLL).name,
            }),
            action: () => {
                null == m ||
                    m({
                        action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM",
                    }),
                    (0, d.openUserSettings)(u.X.CONNECTIONS_PANEL, {
                        section: p.nc_.CONNECTIONS,
                    }),
                    null == g || g();
            },
        });
    if ("recent" !== h || !(0, c.CU)(n)) return null;
    let b = n.extra.url;
    return null == b || "" === b
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "watch-on-crunchyroll",
              label: _.intl.string(_.t.OpxQVH),
              action: () => {
                  null == m ||
                      m({
                          action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM",
                      }),
                      (0, l.C)(b);
              },
          });
}

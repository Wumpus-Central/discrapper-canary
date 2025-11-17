n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(726542),
    s = n(394821),
    l = n(740605),
    c = n(180335),
    u = n(313789),
    d = n(518596),
    f = n(553795),
    _ = n(981631),
    p = n(388032);
function h(e) {
    let { activity: t, entry: n, display: h, onAction: m, onClose: g } = e,
        E = (0, i.e7)([f.Z], () => null != f.Z.getAccount(null, _.ABu.CRUNCHYROLL));
    if (!(0, s.Z)(t) && !(0, c.gr)(n)) return null;
    if (!E)
        return (0, r.jsx)(a.sNh, {
            id: "connect-crunchyroll",
            label: p.intl.formatToPlainString(p.t.XWSHTb, { platform: o.Z.get(_.ABu.CRUNCHYROLL).name }),
            action: () => {
                null == m || m({ action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM" }),
                    (0, d.openUserSettings)(u.n.CONNECTIONS_PANEL, { section: _.oAB.CONNECTIONS }),
                    null == g || g();
            },
        });
    if ("recent" !== h || !(0, c.gr)(n)) return null;
    let b = n.extra.url;
    return null == b || "" === b
        ? null
        : (0, r.jsx)(a.sNh, {
              id: "watch-on-crunchyroll",
              label: p.intl.string(p.t.OpxQVH),
              action: () => {
                  null == m || m({ action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM" }), (0, l.Y)(b);
              },
          });
}

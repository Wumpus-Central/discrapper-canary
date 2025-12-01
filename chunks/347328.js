n.d(t, { Z: () => m });
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
    p = n(981631),
    _ = n(388032);
function m(e) {
    let { activity: t, entry: n, display: m, onAction: h, onClose: g } = e,
        E = (0, i.e7)([f.Z], () => null != f.Z.getAccount(null, p.ABu.CRUNCHYROLL));
    if (!(0, s.Z)(t) && !(0, c.gr)(n)) return null;
    if (!E)
        return (0, r.jsx)(a.sNh, {
            id: "connect-crunchyroll",
            label: _.intl.formatToPlainString(_.t.XWSHTb, { platform: o.Z.get(p.ABu.CRUNCHYROLL).name }),
            action: () => {
                null == h || h({ action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM" }),
                    (0, d.openUserSettings)(u.n.CONNECTIONS_PANEL, { section: p.oAB.CONNECTIONS }),
                    null == g || g();
            },
        });
    if ("recent" !== m || !(0, c.gr)(n)) return null;
    let b = n.extra.url;
    return null == b || "" === b
        ? null
        : (0, r.jsx)(a.sNh, {
              id: "watch-on-crunchyroll",
              label: _.intl.string(_.t.OpxQVH),
              action: () => {
                  null == h || h({ action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM" }), (0, l.Y)(b);
              },
          });
}

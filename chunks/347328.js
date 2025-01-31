n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(230711),
    o = n(726542),
    l = n(394821),
    u = n(740605),
    c = n(180335),
    d = n(553795),
    f = n(981631),
    _ = n(388032);
function p(e) {
    let { activity: t, entry: n, display: p, onAction: h, onClose: m } = e,
        g = (0, r.e7)([d.Z], () => null != d.Z.getAccount(null, f.ABu.CRUNCHYROLL));
    if (!(0, l.Z)(t) && !(0, c.gr)(n)) return null;
    if (!g)
        return (0, i.jsx)(a.sNh, {
            id: 'connect-crunchyroll',
            label: _.intl.formatToPlainString(_.t.XWSHTU, { platform: o.Z.get(f.ABu.CRUNCHYROLL).name }),
            action: () => {
                null == h || h({ action: 'PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM' }), s.Z.open(f.oAB.CONNECTIONS), null == m || m();
            }
        });
    if ('live' === p || !(0, c.gr)(n)) return null;
    let E = n.extra.url;
    return null == E || '' === E
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'watch-on-crunchyroll',
              label: _.intl.string(_.t.OpxQVF),
              action: () => {
                  null == h || h({ action: 'PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM' }), (0, u.Y)(E);
              }
          });
}

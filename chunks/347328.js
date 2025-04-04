n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(230711),
    s = n(726542),
    l = n(394821),
    c = n(740605),
    u = n(180335),
    d = n(553795),
    f = n(981631),
    _ = n(388032);
function p(e) {
    let { activity: t, entry: n, display: p, onAction: h, onClose: m } = e,
        g = (0, i.e7)([d.Z], () => null != d.Z.getAccount(null, f.ABu.CRUNCHYROLL));
    if (!(0, l.Z)(t) && !(0, u.gr)(n)) return null;
    if (!g)
        return (0, r.jsx)(o.sNh, {
            id: 'connect-crunchyroll',
            label: _.NW.formatToPlainString(_.t.XWSHTU, { platform: s.Z.get(f.ABu.CRUNCHYROLL).name }),
            action: () => {
                null == h || h({ action: 'PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM' }), a.Z.open(f.oAB.CONNECTIONS), null == m || m();
            }
        });
    if ('recent' !== p || !(0, u.gr)(n)) return null;
    let E = n.extra.url;
    return null == E || '' === E
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'watch-on-crunchyroll',
              label: _.NW.string(_.t.OpxQVF),
              action: () => {
                  null == h || h({ action: 'PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM' }), (0, c.Y)(E);
              }
          });
}

r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(230711),
    l = r(726542),
    u = r(394821),
    c = r(740605),
    d = r(180335),
    f = r(553795),
    p = r(981631),
    h = r(388032);
function _(e) {
    let { activity: n, entry: r, display: _, onAction: m, onClose: g } = e,
        E = (0, a.e7)([f.Z], () => null != f.Z.getAccount(null, p.ABu.CRUNCHYROLL));
    if (!(0, u.Z)(n) && !(0, d.gr)(r)) return null;
    if (!E)
        return (0, i.jsx)(o.MenuItem, {
            id: 'connect-crunchyroll',
            label: h.intl.formatToPlainString(h.t.XWSHTU, { platform: l.Z.get(p.ABu.CRUNCHYROLL).name }),
            action: () => {
                null == m || m({ action: 'PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM' }), s.Z.open(p.oAB.CONNECTIONS), null == g || g();
            }
        });
    if ('live' === _ || !(0, d.gr)(r)) return null;
    let v = r.extra.url;
    return null == v || '' === v
        ? null
        : (0, i.jsx)(o.MenuItem, {
              id: 'watch-on-crunchyroll',
              label: h.intl.string(h.t.OpxQVF),
              action: () => {
                  null == m || m({ action: 'PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM' }), (0, c.Y)(v);
              }
          });
}

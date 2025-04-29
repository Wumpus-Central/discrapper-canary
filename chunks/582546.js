n.d(t, { Z: () => h }), n(388685);
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(230711),
    s = n(26033),
    l = n(740605),
    c = n(180335),
    u = n(768419),
    d = n(594174),
    f = n(981631),
    _ = n(616922),
    p = n(388032);
function h(e) {
    var t;
    let { user: n, entry: h, display: m, onAction: g, onClose: E } = e,
        b = (0, i.e7)([d.default], () => {
            var e;
            return (null == (e = d.default.getCurrentUser()) ? void 0 : e.id) === n.id;
        }),
        y = (0, i.e7)([u.Z], () => u.Z.hasConnectedAccount());
    if ('recent' !== m || !(0, c.AZ)(h)) return null;
    if (!y)
        return (0, r.jsx)(o.sNh, {
            id: 'connect-spotify',
            label: p.intl.formatToPlainString(p.t.XWSHTU, { platform: _.ai }),
            action: () => {
                null == g || g({ action: 'PRESS_CONNECT_SPOTIFY_MENU_ITEM' }), a.Z.open(f.oAB.CONNECTIONS), null == E || E();
            }
        });
    if (b) return null;
    let O = (0, s.dU)(h) ? (null == (t = h.extra.entries[0]) ? void 0 : t.media) : h.extra.media;
    return null == O
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'play-on-spotify',
              label: p.intl.string(p.t.rRffNz),
              action: () => {
                  null == g || g({ action: 'PRESS_PLAY_ON_SPOTIFY_MENU_ITEM' }), (0, l.o)(_.Hw.TRACK, O.external_id);
              }
          });
}

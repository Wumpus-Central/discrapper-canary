n.d(t, { Z: () => h }), n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(230711),
    o = n(26033),
    l = n(740605),
    u = n(180335),
    c = n(768419),
    d = n(594174),
    f = n(981631),
    _ = n(616922),
    p = n(388032);
function h(e) {
    var t;
    let { user: n, entry: h, display: m, onAction: g, onClose: E } = e,
        v = (0, r.e7)([d.default], () => {
            var e;
            return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === n.id;
        }),
        y = (0, r.e7)([c.Z], () => c.Z.hasConnectedAccount());
    if ('live' === m || !(0, u.AZ)(h)) return null;
    if (!y)
        return (0, i.jsx)(a.sNh, {
            id: 'connect-spotify',
            label: p.intl.formatToPlainString(p.t.XWSHTU, { platform: _.ai }),
            action: () => {
                null == g || g({ action: 'PRESS_CONNECT_SPOTIFY_MENU_ITEM' }), s.Z.open(f.oAB.CONNECTIONS), null == E || E();
            }
        });
    if (v) return null;
    let I = (0, o.dU)(h) ? (null === (t = h.extra.entries[0]) || void 0 === t ? void 0 : t.media) : h.extra.media;
    return null == I
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'play-on-spotify',
              label: p.intl.string(p.t.rRffNz),
              action: () => {
                  null == g || g({ action: 'PRESS_PLAY_ON_SPOTIFY_MENU_ITEM' }), (0, l.o)(_.Hw.TRACK, I.external_id);
              }
          });
}

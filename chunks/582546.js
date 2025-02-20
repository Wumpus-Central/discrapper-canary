n.d(t, { Z: () => h }), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(230711),
    s = n(26033),
    l = n(740605),
    c = n(180335),
    u = n(768419),
    d = n(594174),
    f = n(981631),
    p = n(616922),
    _ = n(388032);
function h(e) {
    var t;
    let { user: n, entry: h, display: m, onAction: g, onClose: E } = e,
        v = (0, i.e7)([d.default], () => {
            var e;
            return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === n.id;
        }),
        b = (0, i.e7)([u.Z], () => u.Z.hasConnectedAccount());
    if ('recent' !== m || !(0, c.AZ)(h)) return null;
    if (!b)
        return (0, r.jsx)(o.sNh, {
            id: 'connect-spotify',
            label: _.NW.formatToPlainString(_.t.XWSHTU, { platform: p.ai }),
            action: () => {
                null == g || g({ action: 'PRESS_CONNECT_SPOTIFY_MENU_ITEM' }), a.Z.open(f.oAB.CONNECTIONS), null == E || E();
            }
        });
    if (v) return null;
    let y = (0, s.dU)(h) ? (null === (t = h.extra.entries[0]) || void 0 === t ? void 0 : t.media) : h.extra.media;
    return null == y
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'play-on-spotify',
              label: _.NW.string(_.t.rRffNz),
              action: () => {
                  null == g || g({ action: 'PRESS_PLAY_ON_SPOTIFY_MENU_ITEM' }), (0, l.o)(p.Hw.TRACK, y.external_id);
              }
          });
}

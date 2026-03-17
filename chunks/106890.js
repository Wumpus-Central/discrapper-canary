"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    a = n(20805),
    o = n(261020),
    l = n(83971),
    u = n(655116),
    c = n(780964),
    d = n(840065),
    _ = n(287809),
    f = n(272984),
    p = n(985018);
function h(e) {
    let { user: t, entry: n, display: h, onAction: m, onClose: E } = e,
        g = (0, i.bG)([_.default], () => _.default.getCurrentUser()?.id === t.id),
        A = (0, i.bG)([u.A], () => u.A.hasConnectedAccount());
    if ("recent" !== h || !(0, l.F3)(n)) return null;
    if (!A)
        return (0, r.jsx)(s.Drp, {
            id: "connect-spotify",
            label: p.intl.formatToPlainString(p.t.XWSHTb, { platform: f.HD }),
            action: () => {
                m?.({ action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM" }),
                    (0, d.openUserSettings)(c.X.CONNECTIONS_PANEL),
                    E?.();
            },
        });
    if (g) return null;
    let I = (0, a.Tq)(n) ? n.extra.entries[0]?.media : n.extra.media;
    return null == I
        ? null
        : (0, r.jsx)(s.Drp, {
              id: "play-on-spotify",
              label: p.intl.string(p.t.rRffNz),
              action: () => {
                  m?.({ action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM" }), (0, o.n)(f.M0.TRACK, I.external_id);
              },
          });
}

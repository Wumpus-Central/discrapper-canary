"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(20805),
    o = n(261020),
    l = n(83971),
    u = n(655116),
    c = n(780964),
    d = n(840065),
    _ = n(287809),
    f = n(652215),
    p = n(272984),
    h = n(985018);
function m(e) {
    let { user: t, entry: n, display: m, onAction: g, onClose: E } = e,
        A = (0, i.bG)([_.default], () => _.default.getCurrentUser()?.id === t.id),
        I = (0, i.bG)([u.A], () => u.A.hasConnectedAccount());
    if ("recent" !== m || !(0, l.F3)(n)) return null;
    if (!I)
        return (0, r.jsx)(a.Drp, {
            id: "connect-spotify",
            label: h.intl.formatToPlainString(h.t.XWSHTb, { platform: p.HD }),
            action: () => {
                g?.({ action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM" }),
                    (0, d.openUserSettings)(c.X.CONNECTIONS_PANEL, { section: f.nc_.CONNECTIONS }),
                    E?.();
            },
        });
    if (A) return null;
    let T = (0, s.Tq)(n) ? n.extra.entries[0]?.media : n.extra.media;
    return null == T
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "play-on-spotify",
              label: h.intl.string(h.t.rRffNz),
              action: () => {
                  g?.({ action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM" }), (0, o.n)(p.M0.TRACK, T.external_id);
              },
          });
}

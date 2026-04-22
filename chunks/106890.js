e.d(n, { A: () => f });
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(477782),
    a = e(20805),
    s = e(261020),
    o = e(83971),
    c = e(655116),
    u = e(780964),
    d = e(858897),
    A = e(287809),
    x = e(272984),
    p = e(985018);
function f(t) {
    let { user: n, entry: e, display: f, onAction: _, onClose: m } = t,
        E = (0, l.bG)([A.default], () => A.default.getCurrentUser()?.id === n.id),
        T = (0, l.bG)([c.A], () => c.A.hasConnectedAccount());
    if ("recent" !== f || !(0, o.F3)(e)) return null;
    if (!T)
        return (0, i.jsx)(r.Dr, {
            id: "connect-spotify",
            label: p.intl.formatToPlainString(p.t.XWSHTb, { platform: x.HD }),
            action: () => {
                _?.({ action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM" }),
                    (0, d.openUserSettings)(u.X.CONNECTIONS_PANEL),
                    m?.();
            },
        });
    if (E) return null;
    let g = (0, a.Tq)(e) ? e.extra.entries[0]?.media : e.extra.media;
    return null == g
        ? null
        : (0, i.jsx)(r.Dr, {
              id: "play-on-spotify",
              label: p.intl.string(p.t.rRffNz),
              action: () => {
                  _?.({ action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM" }), (0, s.n)(x.M0.TRACK, g.external_id);
              },
          });
}

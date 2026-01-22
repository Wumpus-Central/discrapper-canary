n.d(t, { A: () => m }), n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(20805),
    o = n(261020),
    l = n(83971),
    c = n(655116),
    u = n(780964),
    d = n(840065),
    f = n(287809),
    p = n(652215),
    _ = n(272984),
    h = n(985018);
function m(e) {
    var t;
    let { user: n, entry: m, display: g, onAction: E, onClose: b } = e,
        y = (0, i.bG)([f.default], () => {
            var e;
            return (null == (e = f.default.getCurrentUser()) ? void 0 : e.id) === n.id;
        }),
        O = (0, i.bG)([c.A], () => c.A.hasConnectedAccount());
    if ("recent" !== g || !(0, l.F3)(m)) return null;
    if (!O)
        return (0, r.jsx)(a.Drp, {
            id: "connect-spotify",
            label: h.intl.formatToPlainString(h.t.XWSHTb, { platform: _.HD }),
            action: () => {
                null == E || E({ action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM" }),
                    (0, d.openUserSettings)(u.X.CONNECTIONS_PANEL, { section: p.nc_.CONNECTIONS }),
                    null == b || b();
            },
        });
    if (y) return null;
    let A = (0, s.Tq)(m) ? (null == (t = m.extra.entries[0]) ? void 0 : t.media) : m.extra.media;
    return null == A
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "play-on-spotify",
              label: h.intl.string(h.t.rRffNz),
              action: () => {
                  null == E || E({ action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM" }), (0, o.n)(_.M0.TRACK, A.external_id);
              },
          });
}

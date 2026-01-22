n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(961350),
    s = n(655116),
    o = n(341335),
    c = n(286617),
    u = n(533207),
    d = n(881335),
    p = n(272984),
    f = n(985018);
function h(e, t, n) {
    let h = (0, i.bG)([s.A, a.default], () => (null != t ? (0, c.A)(s.A, a.default, t, e) : void 0), [e, t]);
    if (null == h || null == e || null == t) return null;
    let A = h.isCurrentUser || h.notPlayable || h.playingSameTrack,
        g = h.isCurrentUser || h.syncingWithUser || h.syncingWithParty;
    return [
        (0, r.jsx)(
            l.Drp,
            {
                id: "spotify-play-".concat(e.session_id),
                action: () => (0, d.A)(h, p.Qp.USER_ACTIVITY_PLAY, n),
                label: f.intl.string(f.t.rRffNz),
                subtext: A ? (0, o.A)(h, p.Qp.USER_ACTIVITY_PLAY) : void 0,
                disabled: A,
            },
            "spotify-play-".concat(e.session_id),
        ),
        h.canPlaySpotify
            ? (0, r.jsx)(
                  l.Drp,
                  {
                      id: "spotify-sync-".concat(e.session_id),
                      action: () => (0, u.A)(h, p.Qp.USER_ACTIVITY_SYNC, n),
                      label: f.intl.string(f.t.eU3inB),
                      subtext: g ? (0, o.A)(h, p.Qp.USER_ACTIVITY_SYNC) : void 0,
                      disabled: g,
                  },
                  "spotify-sync-".concat(e.session_id),
              )
            : null,
    ];
}

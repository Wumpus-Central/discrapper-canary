n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(477782),
    a = n(961350),
    r = n(655116),
    o = n(341335),
    c = n(286617),
    d = n(533207),
    u = n(881335),
    m = n(272984),
    A = n(985018);
function h(e, t, n) {
    let h = (0, s.bG)([r.A, a.default], () => (null != t ? (0, c.A)(r.A, a.default, t, e) : void 0), [e, t]);
    if (null == h || null == e || null == t) return null;
    let x = h.isCurrentUser || h.notPlayable || h.playingSameTrack,
        p = h.isCurrentUser || h.syncingWithUser || h.syncingWithParty;
    return [
        (0, i.jsx)(
            l.Dr,
            {
                id: `spotify-play-${e.session_id}`,
                action: () => (0, u.A)(h, m.Qp.USER_ACTIVITY_PLAY, n),
                label: A.intl.string(A.t.rRffNz),
                subtext: x ? (0, o.A)(h, m.Qp.USER_ACTIVITY_PLAY) : void 0,
                disabled: x,
            },
            `spotify-play-${e.session_id}`,
        ),
        h.canPlaySpotify
            ? (0, i.jsx)(
                  l.Dr,
                  {
                      id: `spotify-sync-${e.session_id}`,
                      action: () => (0, d.A)(h, m.Qp.USER_ACTIVITY_SYNC, n),
                      label: A.intl.string(A.t.eU3inB),
                      subtext: p ? (0, o.A)(h, m.Qp.USER_ACTIVITY_SYNC) : void 0,
                      disabled: p,
                  },
                  `spotify-sync-${e.session_id}`,
              )
            : null,
    ];
}

n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(397927),
    l = n(961350),
    s = n(655116),
    o = n(341335),
    d = n(286617),
    c = n(533207),
    u = n(881335),
    A = n(272984),
    h = n(985018);
function _(e, t, n) {
    let _ = (0, r.bG)([s.A, l.default], () => (null != t ? (0, d.A)(s.A, l.default, t, e) : void 0), [e, t]);
    if (null == _ || null == e || null == t) return null;
    let m = _.isCurrentUser || _.notPlayable || _.playingSameTrack,
        p = _.isCurrentUser || _.syncingWithUser || _.syncingWithParty;
    return [
        (0, i.jsx)(
            a.Drp,
            {
                id: `spotify-play-${e.session_id}`,
                action: () => (0, u.A)(_, A.Qp.USER_ACTIVITY_PLAY, n),
                label: h.intl.string(h.t.rRffNz),
                subtext: m ? (0, o.A)(_, A.Qp.USER_ACTIVITY_PLAY) : void 0,
                disabled: m,
            },
            `spotify-play-${e.session_id}`,
        ),
        _.canPlaySpotify
            ? (0, i.jsx)(
                  a.Drp,
                  {
                      id: `spotify-sync-${e.session_id}`,
                      action: () => (0, c.A)(_, A.Qp.USER_ACTIVITY_SYNC, n),
                      label: h.intl.string(h.t.eU3inB),
                      subtext: p ? (0, o.A)(_, A.Qp.USER_ACTIVITY_SYNC) : void 0,
                      disabled: p,
                  },
                  `spotify-sync-${e.session_id}`,
              )
            : null,
    ];
}

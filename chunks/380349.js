n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(314897),
    s = n(768419),
    o = n(456190),
    d = n(239470),
    c = n(894344),
    u = n(203777),
    h = n(616922),
    m = n(388032);
function p(e, t, n) {
    let p = (0, l.e7)([s.Z, a.default], () => (null != t ? (0, d.Z)(s.Z, a.default, t, e) : void 0), [e, t]);
    if (null == p || null == e || null == t) return null;
    let g = p.isCurrentUser || p.notPlayable || p.playingSameTrack,
        _ = p.isCurrentUser || p.syncingWithUser || p.syncingWithParty;
    return [
        (0, i.jsx)(
            r.sNh,
            {
                id: 'spotify-play-'.concat(e.session_id),
                action: () => (0, u.Z)(p, h.kG.USER_ACTIVITY_PLAY, n),
                label: m.intl.string(m.t.rRffNz),
                subtext: g ? (0, o.Z)(p, h.kG.USER_ACTIVITY_PLAY) : void 0,
                disabled: g
            },
            'spotify-play-'.concat(e.session_id)
        ),
        p.canPlaySpotify
            ? (0, i.jsx)(
                  r.sNh,
                  {
                      id: 'spotify-sync-'.concat(e.session_id),
                      action: () => (0, c.Z)(p, h.kG.USER_ACTIVITY_SYNC, n),
                      label: m.intl.string(m.t.eU3inJ),
                      subtext: _ ? (0, o.Z)(p, h.kG.USER_ACTIVITY_SYNC) : void 0,
                      disabled: _
                  },
                  'spotify-sync-'.concat(e.session_id)
              )
            : null
    ];
}

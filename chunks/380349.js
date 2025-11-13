n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(314897),
    s = n(768419),
    o = n(456190),
    c = n(239470),
    u = n(894344),
    d = n(203777),
    p = n(616922),
    f = n(388032);
function h(e, t, n) {
    let h = (0, i.e7)([s.Z, a.default], () => (null != t ? (0, c.Z)(s.Z, a.default, t, e) : void 0), [e, t]);
    if (null == h || null == e || null == t) return null;
    let g = h.isCurrentUser || h.notPlayable || h.playingSameTrack,
        m = h.isCurrentUser || h.syncingWithUser || h.syncingWithParty;
    return [
        (0, r.jsx)(
            l.sNh,
            {
                id: "spotify-play-".concat(e.session_id),
                action: () => (0, d.Z)(h, p.kG.USER_ACTIVITY_PLAY, n),
                label: f.intl.string(f.t.rRffNz),
                subtext: g ? (0, o.Z)(h, p.kG.USER_ACTIVITY_PLAY) : void 0,
                disabled: g,
            },
            "spotify-play-".concat(e.session_id),
        ),
        h.canPlaySpotify
            ? (0, r.jsx)(
                  l.sNh,
                  {
                      id: "spotify-sync-".concat(e.session_id),
                      action: () => (0, u.Z)(h, p.kG.USER_ACTIVITY_SYNC, n),
                      label: f.intl.string(f.t.eU3inB),
                      subtext: m ? (0, o.Z)(h, p.kG.USER_ACTIVITY_SYNC) : void 0,
                      disabled: m,
                  },
                  "spotify-sync-".concat(e.session_id),
              )
            : null,
    ];
}

n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    a = n(314897),
    o = n(768419),
    s = n(456190),
    c = n(239470),
    u = n(894344),
    d = n(203777),
    p = n(616922),
    f = n(388032);
function g(e, t, n) {
    let g = (0, i.e7)([o.Z, a.default], () => (null != t ? (0, c.Z)(o.Z, a.default, t, e) : void 0), [e, t]);
    if (null == g || null == e || null == t) return null;
    let h = g.isCurrentUser || g.notPlayable || g.playingSameTrack,
        m = g.isCurrentUser || g.syncingWithUser || g.syncingWithParty;
    return [
        (0, r.jsx)(
            l.sNh,
            {
                id: "spotify-play-".concat(e.session_id),
                action: () => (0, d.Z)(g, p.kG.USER_ACTIVITY_PLAY, n),
                label: f.intl.string(f.t.rRffNz),
                subtext: h ? (0, s.Z)(g, p.kG.USER_ACTIVITY_PLAY) : void 0,
                disabled: h,
            },
            "spotify-play-".concat(e.session_id),
        ),
        g.canPlaySpotify
            ? (0, r.jsx)(
                  l.sNh,
                  {
                      id: "spotify-sync-".concat(e.session_id),
                      action: () => (0, u.Z)(g, p.kG.USER_ACTIVITY_SYNC, n),
                      label: f.intl.string(f.t.eU3inB),
                      subtext: m ? (0, s.Z)(g, p.kG.USER_ACTIVITY_SYNC) : void 0,
                      disabled: m,
                  },
                  "spotify-sync-".concat(e.session_id),
              )
            : null,
    ];
}

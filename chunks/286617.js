"use strict";
n.d(t, { A: () => i });
var r = n(981616);
function i(e, t, n, i) {
    let a = e.hasConnectedAccount(),
        s = (0, r.d3)(e),
        o = e.getTrack(),
        l = e.getSyncingWith(),
        u = e.getActivity(),
        c = o?.id ?? u?.sync_id ?? e.getLastPlayedTrackId(),
        d = n.id === t.getId(),
        _ = a && !s,
        f = null != c && c === i?.sync_id,
        p = u?.party != null && i?.party?.id === u.party.id,
        h = l?.userId != null && l?.userId === n.id,
        m = d || _ || f,
        g = d || h || p;
    return {
        user: n,
        activity: i,
        hasSpotifyAccount: a,
        canPlaySpotify: s,
        notPlayable: _,
        syncingWithParty: p,
        syncingWithUser: h,
        isCurrentUser: d,
        currentUserTrackId: c,
        playingSameTrack: f,
        playDisabled: m,
        syncDisabled: g,
    };
}

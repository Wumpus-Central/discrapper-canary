"use strict";
n.d(t, { A: () => i });
var r = n(981616);
function i(e, t, n, i) {
    let s = e.hasConnectedAccount(),
        a = (0, r.d3)(e),
        o = e.getTrack(),
        l = e.getSyncingWith(),
        u = e.getActivity(),
        c = o?.id ?? u?.sync_id ?? e.getLastPlayedTrackId(),
        d = n.id === t.getId(),
        _ = s && !a,
        f = null != c && c === i?.sync_id,
        p = u?.party != null && i?.party?.id === u.party.id,
        h = l?.userId != null && l?.userId === n.id;
    return {
        user: n,
        activity: i,
        hasSpotifyAccount: s,
        canPlaySpotify: a,
        notPlayable: _,
        syncingWithParty: p,
        syncingWithUser: h,
        isCurrentUser: d,
        currentUserTrackId: c,
        playingSameTrack: f,
        playDisabled: d || _ || f,
        syncDisabled: d || h || p,
    };
}

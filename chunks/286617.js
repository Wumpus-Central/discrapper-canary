"use strict";
n.d(t, { A: () => r });
var i = n(981616);
function r(e, t, n, r) {
    let s = e.hasConnectedAccount(),
        a = (0, i.d3)(e),
        o = e.getTrack(),
        l = e.getSyncingWith(),
        u = e.getActivity(),
        c = o?.id ?? u?.sync_id ?? e.getLastPlayedTrackId(),
        d = n.id === t.getId(),
        _ = s && !a,
        f = null != c && c === r?.sync_id,
        h = u?.party != null && r?.party?.id === u.party.id,
        p = l?.userId != null && l?.userId === n.id;
    return {
        user: n,
        activity: r,
        hasSpotifyAccount: s,
        canPlaySpotify: a,
        notPlayable: _,
        syncingWithParty: h,
        syncingWithUser: p,
        isCurrentUser: d,
        currentUserTrackId: c,
        playingSameTrack: f,
        playDisabled: d || _ || f,
        syncDisabled: d || p || h,
    };
}

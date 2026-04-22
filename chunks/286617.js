i.d(e, { A: () => a });
var l = i(981616);
function a(t, e, i, a) {
    let n = t.hasConnectedAccount(),
        r = (0, l.d3)(t),
        s = t.getTrack(),
        o = t.getSyncingWith(),
        c = t.getActivity(),
        d = s?.id ?? c?.sync_id ?? t.getLastPlayedTrackId(),
        u = i.id === e.getId(),
        _ = n && !r,
        p = null != d && d === a?.sync_id,
        f = c?.party != null && a?.party?.id === c.party.id,
        A = o?.userId != null && o?.userId === i.id;
    return {
        user: i,
        activity: a,
        hasSpotifyAccount: n,
        canPlaySpotify: r,
        notPlayable: _,
        syncingWithParty: f,
        syncingWithUser: A,
        isCurrentUser: u,
        currentUserTrackId: d,
        playingSameTrack: p,
        playDisabled: u || _ || p,
        syncDisabled: u || A || f,
    };
}

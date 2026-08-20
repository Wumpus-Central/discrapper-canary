i.d(n, { A: () => l });
var e = i(981616);
function l(t, n, i, l) {
    let r = t.hasConnectedAccount(),
        a = (0, e.d3)(t),
        o = t.getTrack(),
        u = t.getSyncingWith(),
        c = t.getActivity(),
        d = o?.id ?? c?.sync_id ?? t.getLastPlayedTrackId(),
        s = i.id === n.getId(),
        p = r && !a,
        A = null != d && d === l?.sync_id,
        y = c?.party != null && l?.party?.id === c.party.id,
        _ = u?.userId != null && u?.userId === i.id;
    return {
        user: i,
        activity: l,
        hasSpotifyAccount: r,
        canPlaySpotify: a,
        notPlayable: p,
        syncingWithParty: y,
        syncingWithUser: _,
        isCurrentUser: s,
        currentUserTrackId: d,
        playingSameTrack: A,
        playDisabled: s || p || A,
        syncDisabled: s || _ || y,
    };
}

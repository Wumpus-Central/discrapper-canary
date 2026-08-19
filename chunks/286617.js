n.d(e, { A: () => r });
var i = n(981616);
function r(t, e, n, r) {
    let l = t.hasConnectedAccount(),
        o = (0, i.d3)(t),
        a = t.getTrack(),
        u = t.getSyncingWith(),
        c = t.getActivity(),
        s = a?.id ?? c?.sync_id ?? t.getLastPlayedTrackId(),
        d = n.id === e.getId(),
        p = l && !o,
        A = null != s && s === r?.sync_id,
        y = c?.party != null && r?.party?.id === c.party.id,
        f = u?.userId != null && u?.userId === n.id;
    return {
        user: n,
        activity: r,
        hasSpotifyAccount: l,
        canPlaySpotify: o,
        notPlayable: p,
        syncingWithParty: y,
        syncingWithUser: f,
        isCurrentUser: d,
        currentUserTrackId: s,
        playingSameTrack: A,
        playDisabled: d || p || A,
        syncDisabled: d || f || y,
    };
}

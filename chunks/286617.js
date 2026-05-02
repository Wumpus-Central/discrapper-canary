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
        A = l && !o,
        p = null != s && s === r?.sync_id,
        f = c?.party != null && r?.party?.id === c.party.id,
        y = u?.userId != null && u?.userId === n.id;
    return {
        user: n,
        activity: r,
        hasSpotifyAccount: l,
        canPlaySpotify: o,
        notPlayable: A,
        syncingWithParty: f,
        syncingWithUser: y,
        isCurrentUser: d,
        currentUserTrackId: s,
        playingSameTrack: p,
        playDisabled: d || A || p,
        syncDisabled: d || y || f,
    };
}

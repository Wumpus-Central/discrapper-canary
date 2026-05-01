e.d(n, { A: () => l });
var i = e(981616);
function l(t, n, e, l) {
    let r = t.hasConnectedAccount(),
        a = (0, i.d3)(t),
        u = t.getTrack(),
        c = t.getSyncingWith(),
        d = t.getActivity(),
        s = u?.id ?? d?.sync_id ?? t.getLastPlayedTrackId(),
        o = e.id === n.getId(),
        p = r && !a,
        A = null != s && s === l?.sync_id,
        y = d?.party != null && l?.party?.id === d.party.id,
        f = c?.userId != null && c?.userId === e.id;
    return {
        user: e,
        activity: l,
        hasSpotifyAccount: r,
        canPlaySpotify: a,
        notPlayable: p,
        syncingWithParty: y,
        syncingWithUser: f,
        isCurrentUser: o,
        currentUserTrackId: s,
        playingSameTrack: A,
        playDisabled: o || p || A,
        syncDisabled: o || f || y,
    };
}

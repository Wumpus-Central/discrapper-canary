n.d(t, { A: () => l });
var i = n(981616);
function l(e, t, n, l) {
    let s = e.hasConnectedAccount(),
        r = (0, i.d3)(e),
        a = e.getTrack(),
        o = e.getSyncingWith(),
        c = e.getActivity(),
        d = a?.id ?? c?.sync_id ?? e.getLastPlayedTrackId(),
        u = n.id === t.getId(),
        m = s && !r,
        h = null != d && d === l?.sync_id,
        g = c?.party != null && l?.party?.id === c.party.id,
        x = o?.userId != null && o?.userId === n.id;
    return {
        user: n,
        activity: l,
        hasSpotifyAccount: s,
        canPlaySpotify: r,
        notPlayable: m,
        syncingWithParty: g,
        syncingWithUser: x,
        isCurrentUser: u,
        currentUserTrackId: d,
        playingSameTrack: h,
        playDisabled: u || m || h,
        syncDisabled: u || x || g,
    };
}

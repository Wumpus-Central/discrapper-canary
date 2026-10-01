i.d(n, { A: () => a });
var r = i(981616);
function a(t, n, i, a) {
    let e = t.hasConnectedAccount(),
        l = (0, r.d3)(t),
        u = t.getTrack(),
        s = t.getSyncingWith(),
        c = t.getActivity(),
        o = u?.id ?? c?.sync_id ?? t.getLastPlayedTrackId(),
        d = i.id === n.getId(),
        f = e && !l,
        y = null != o && o === a?.sync_id,
        p = c?.party != null && a?.party?.id === c.party.id,
        S = s?.userId != null && s?.userId === i.id;
    return {
        user: i,
        activity: a,
        hasSpotifyAccount: e,
        canPlaySpotify: l,
        notPlayable: f,
        syncingWithParty: p,
        syncingWithUser: S,
        isCurrentUser: d,
        currentUserTrackId: o,
        playingSameTrack: y,
        playDisabled: d || f || y,
        syncDisabled: d || S || p,
    };
}

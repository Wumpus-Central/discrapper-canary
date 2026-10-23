r.d(n, { A: () => a });
var i = r(981616);
function a(t, n, r, a) {
    let e = t.hasConnectedAccount(),
        l = (0, i.d3)(t),
        u = t.getTrack(),
        s = t.getSyncingWith(),
        c = t.getActivity(),
        o = u?.id ?? c?.sync_id ?? t.getLastPlayedTrackId(),
        d = r.id === n.getId(),
        f = e && !l,
        y = null != o && o === a?.sync_id,
        p = c?.party != null && a?.party?.id === c.party.id,
        S = s?.userId != null && s?.userId === r.id;
    return {
        user: r,
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

n.d(t, { A: () => i });
var r = n(981616);
function i(e, t, n, i) {
    var a, s, o;
    let l = e.hasConnectedAccount(),
        c = (0, r.d3)(e),
        u = e.getTrack(),
        d = e.getSyncingWith(),
        f = e.getActivity(),
        p =
            null != (a = null != (s = null == u ? void 0 : u.id) ? s : null == f ? void 0 : f.sync_id)
                ? a
                : e.getLastPlayedTrackId(),
        _ = n.id === t.getId(),
        h = l && !c,
        m = null != p && p === (null == i ? void 0 : i.sync_id),
        g =
            (null == f ? void 0 : f.party) != null &&
            (null == i || null == (o = i.party) ? void 0 : o.id) === f.party.id,
        E = (null == d ? void 0 : d.userId) != null && (null == d ? void 0 : d.userId) === n.id,
        b = _ || h || m,
        y = _ || E || g;
    return {
        user: n,
        activity: i,
        hasSpotifyAccount: l,
        canPlaySpotify: c,
        notPlayable: h,
        syncingWithParty: g,
        syncingWithUser: E,
        isCurrentUser: _,
        currentUserTrackId: p,
        playingSameTrack: m,
        playDisabled: b,
        syncDisabled: y,
    };
}

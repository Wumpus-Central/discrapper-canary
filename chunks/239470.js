n.d(t, { Z: () => i });
var r = n(647162);
function i(e, t, n, i) {
    var a, o, s;
    let l = e.hasConnectedAccount(),
        c = (0, r.PY)(e),
        u = e.getTrack(),
        d = e.getSyncingWith(),
        f = e.getActivity(),
        p =
            null != (s = null != (o = null == u ? void 0 : u.id) ? o : null == f ? void 0 : f.sync_id)
                ? s
                : e.getLastPlayedTrackId(),
        _ = n.id === t.getId(),
        m = l && !c,
        h = null != p && p === (null == i ? void 0 : i.sync_id),
        g =
            (null == f ? void 0 : f.party) != null &&
            (null == i || null == (a = i.party) ? void 0 : a.id) === f.party.id,
        E = (null == d ? void 0 : d.userId) != null && (null == d ? void 0 : d.userId) === n.id,
        b = _ || m || h,
        y = _ || E || g;
    return {
        user: n,
        activity: i,
        hasSpotifyAccount: l,
        canPlaySpotify: c,
        notPlayable: m,
        syncingWithParty: g,
        syncingWithUser: E,
        isCurrentUser: _,
        currentUserTrackId: p,
        playingSameTrack: h,
        playDisabled: b,
        syncDisabled: y,
    };
}

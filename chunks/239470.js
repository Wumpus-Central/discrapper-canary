n.d(t, { Z: () => i });
var r = n(647162);
function i(e, t, n, i) {
    var o, a, s;
    let l = e.hasConnectedAccount(),
        c = (0, r.PY)(e),
        u = e.getTrack(),
        d = e.getSyncingWith(),
        f = e.getActivity(),
        p = null !== (s = null !== (a = null == u ? void 0 : u.id) && void 0 !== a ? a : null == f ? void 0 : f.sync_id) && void 0 !== s ? s : e.getLastPlayedTrackId(),
        _ = n.id === t.getId(),
        h = l && !c,
        m = null != p && p === (null == i ? void 0 : i.sync_id),
        g = (null == f ? void 0 : f.party) != null && (null == i ? void 0 : null === (o = i.party) || void 0 === o ? void 0 : o.id) === f.party.id,
        E = (null == d ? void 0 : d.userId) != null && (null == d ? void 0 : d.userId) === n.id,
        v = _ || h || m,
        b = _ || E || g;
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
        playDisabled: v,
        syncDisabled: b
    };
}

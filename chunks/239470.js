n.d(t, { Z: () => i });
var r = n(647162);
function i(e, t, n, i) {
    var a, o, s;
    let l = e.hasConnectedAccount(),
        c = (0, r.PY)(e),
        u = e.getTrack(),
        d = e.getSyncingWith(),
        _ = e.getActivity(),
        f = null != (s = null != (o = null == u ? void 0 : u.id) ? o : null == _ ? void 0 : _.sync_id) ? s : e.getLastPlayedTrackId(),
        p = n.id === t.getId(),
        h = l && !c,
        m = null != f && f === (null == i ? void 0 : i.sync_id),
        g = (null == _ ? void 0 : _.party) != null && (null == i || null == (a = i.party) ? void 0 : a.id) === _.party.id,
        E = (null == d ? void 0 : d.userId) != null && (null == d ? void 0 : d.userId) === n.id,
        b = p || h || m,
        y = p || E || g;
    return {
        user: n,
        activity: i,
        hasSpotifyAccount: l,
        canPlaySpotify: c,
        notPlayable: h,
        syncingWithParty: g,
        syncingWithUser: E,
        isCurrentUser: p,
        currentUserTrackId: f,
        playingSameTrack: m,
        playDisabled: b,
        syncDisabled: y
    };
}

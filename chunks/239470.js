n.d(t, { Z: () => r });
var i = n(647162);
function r(e, t, n, r) {
    var a, s, o;
    let l = e.hasConnectedAccount(),
        u = (0, i.PY)(e),
        c = e.getTrack(),
        d = e.getSyncingWith(),
        f = e.getActivity(),
        _ = null !== (o = null !== (s = null == c ? void 0 : c.id) && void 0 !== s ? s : null == f ? void 0 : f.sync_id) && void 0 !== o ? o : e.getLastPlayedTrackId(),
        p = n.id === t.getId(),
        h = l && !u,
        m = null != _ && _ === (null == r ? void 0 : r.sync_id),
        g = (null == f ? void 0 : f.party) != null && (null == r ? void 0 : null === (a = r.party) || void 0 === a ? void 0 : a.id) === f.party.id,
        E = (null == d ? void 0 : d.userId) != null && (null == d ? void 0 : d.userId) === n.id,
        v = p || h || m,
        y = p || E || g;
    return {
        user: n,
        activity: r,
        hasSpotifyAccount: l,
        canPlaySpotify: u,
        notPlayable: h,
        syncingWithParty: g,
        syncingWithUser: E,
        isCurrentUser: p,
        currentUserTrackId: _,
        playingSameTrack: m,
        playDisabled: v,
        syncDisabled: y
    };
}

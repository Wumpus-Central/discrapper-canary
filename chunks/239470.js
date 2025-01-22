r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(647162);
function a(e, n, r, a) {
    var o, s, l;
    let u = e.hasConnectedAccount(),
        c = (0, i.PY)(e),
        d = e.getTrack(),
        f = e.getSyncingWith(),
        p = e.getActivity(),
        h = null !== (l = null !== (s = null == d ? void 0 : d.id) && void 0 !== s ? s : null == p ? void 0 : p.sync_id) && void 0 !== l ? l : e.getLastPlayedTrackId(),
        _ = r.id === n.getId(),
        m = u && !c,
        g = null != h && h === (null == a ? void 0 : a.sync_id),
        E = (null == p ? void 0 : p.party) != null && (null == a ? void 0 : null === (o = a.party) || void 0 === o ? void 0 : o.id) === p.party.id,
        v = (null == f ? void 0 : f.userId) != null && (null == f ? void 0 : f.userId) === r.id,
        y = _ || m || g,
        b = _ || v || E;
    return {
        user: r,
        activity: a,
        hasSpotifyAccount: u,
        canPlaySpotify: c,
        notPlayable: m,
        syncingWithParty: E,
        syncingWithUser: v,
        isCurrentUser: _,
        currentUserTrackId: h,
        playingSameTrack: g,
        playDisabled: y,
        syncDisabled: b
    };
}

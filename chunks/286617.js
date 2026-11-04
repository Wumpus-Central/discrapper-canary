var i = r(981616);
r.d(
    n,
    {},
    {
        A: function (t, n, r, a) {
            let e = t.hasConnectedAccount(),
                l = (0, i.d3)(t),
                u = t.getTrack(),
                s = t.getSyncingWith(),
                c = t.getActivity(),
                d = u?.id ?? c?.sync_id ?? t.getLastPlayedTrackId(),
                o = r.id === n.getId(),
                f = e && !l,
                y = null != d && d === a?.sync_id,
                S = c?.party != null && a?.party?.id === c.party.id,
                p = s?.userId != null && s?.userId === r.id;
            return {
                user: r,
                activity: a,
                hasSpotifyAccount: e,
                canPlaySpotify: l,
                notPlayable: f,
                syncingWithParty: S,
                syncingWithUser: p,
                isCurrentUser: o,
                currentUserTrackId: d,
                playingSameTrack: y,
                playDisabled: o || f || y,
                syncDisabled: o || p || S,
            };
        },
    },
);

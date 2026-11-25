var r = i(981616);
i.d(
    n,
    {},
    {
        A: function (t, n, i, e) {
            let l = t.hasConnectedAccount(),
                a = (0, r.d3)(t),
                u = t.getTrack(),
                o = t.getSyncingWith(),
                c = t.getActivity(),
                d = u?.id ?? c?.sync_id ?? t.getLastPlayedTrackId(),
                s = i.id === n.getId(),
                f = l && !a,
                p = null != d && d === e?.sync_id,
                y = c?.party != null && e?.party?.id === c.party.id,
                A = o?.userId != null && o?.userId === i.id;
            return {
                user: i,
                activity: e,
                hasSpotifyAccount: l,
                canPlaySpotify: a,
                notPlayable: f,
                syncingWithParty: y,
                syncingWithUser: A,
                isCurrentUser: s,
                currentUserTrackId: d,
                playingSameTrack: p,
                playDisabled: s || f || p,
                syncDisabled: s || A || y,
            };
        },
    },
);

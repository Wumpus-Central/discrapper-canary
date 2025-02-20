n.d(t, { Z: () => o });
var r = n(616922),
    i = n(388032);
function o(e, t) {
    switch (t) {
        case r.kG.USER_ACTIVITY_PLAY:
            return e.hasSpotifyAccount ? i.NW.formatToPlainString(i.t.LEgD7u, { platform: r.ai }) : i.NW.formatToPlainString(i.t.XWSHTU, { platform: r.ai });
        case r.kG.EMBED_SYNC:
            if (!e.hasSpotifyAccount) return i.NW.formatToPlainString(i.t.XWSHTU, { platform: r.ai });
            if (e.syncingWithUser || e.syncingWithParty) return i.NW.string(i.t.KC26NT);
            return i.NW.string(i.t.VJlc0d);
        case r.kG.USER_ACTIVITY_SYNC:
        default:
            return;
    }
}

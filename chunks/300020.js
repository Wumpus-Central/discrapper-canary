n.d(t, { Z: () => a });
var r = n(616922),
    i = n(388032);
function a(e, t) {
    switch (t) {
        case r.kG.USER_ACTIVITY_PLAY:
            return e.hasSpotifyAccount ? i.intl.formatToPlainString(i.t.LEgD7u, { platform: r.ai }) : i.intl.formatToPlainString(i.t.XWSHTU, { platform: r.ai });
        case r.kG.EMBED_SYNC:
            if (!e.hasSpotifyAccount) return i.intl.formatToPlainString(i.t.XWSHTU, { platform: r.ai });
            if (e.syncingWithUser || e.syncingWithParty) return i.intl.string(i.t.KC26NT);
            return i.intl.string(i.t.VJlc0d);
        case r.kG.USER_ACTIVITY_SYNC:
        default:
            return;
    }
}

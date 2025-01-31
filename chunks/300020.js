n.d(t, { Z: () => a });
var i = n(616922),
    r = n(388032);
function a(e, t) {
    switch (t) {
        case i.kG.USER_ACTIVITY_PLAY:
            return e.hasSpotifyAccount ? r.intl.formatToPlainString(r.t.LEgD7u, { platform: i.ai }) : r.intl.formatToPlainString(r.t.XWSHTU, { platform: i.ai });
        case i.kG.EMBED_SYNC:
            if (!e.hasSpotifyAccount) return r.intl.formatToPlainString(r.t.XWSHTU, { platform: i.ai });
            if (e.syncingWithUser || e.syncingWithParty) return r.intl.string(r.t.KC26NT);
            return r.intl.string(r.t.VJlc0d);
        case i.kG.USER_ACTIVITY_SYNC:
        default:
            return;
    }
}

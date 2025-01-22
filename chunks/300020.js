r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(616922),
    a = r(388032);
function o(e, n) {
    switch (n) {
        case i.kG.USER_ACTIVITY_PLAY:
            return e.hasSpotifyAccount ? a.intl.formatToPlainString(a.t.LEgD7u, { platform: i.ai }) : a.intl.formatToPlainString(a.t.XWSHTU, { platform: i.ai });
        case i.kG.EMBED_SYNC:
            if (!e.hasSpotifyAccount) return a.intl.formatToPlainString(a.t.XWSHTU, { platform: i.ai });
            if (e.syncingWithUser || e.syncingWithParty) return a.intl.string(a.t.KC26NT);
            return a.intl.string(a.t.VJlc0d);
        case i.kG.USER_ACTIVITY_SYNC:
        default:
            return;
    }
}

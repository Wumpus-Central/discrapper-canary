n.d(t, { Z: () => a });
var r = n(616922),
    i = n(388032);
function a(e, t) {
    switch (t) {
        case r.kG.USER_ACTIVITY_PLAY:
            return e.hasSpotifyAccount
                ? i.intl.formatToPlainString(i.t.LEgD7t, { platform: r.ai })
                : i.intl.formatToPlainString(i.t.XWSHTb, { platform: r.ai });
        case r.kG.EMBED_SYNC:
            if (!e.hasSpotifyAccount) return i.intl.formatToPlainString(i.t.XWSHTb, { platform: r.ai });
            if (e.syncingWithUser || e.syncingWithParty) return i.intl.string(i.t.KC26NR);
            return i.intl.string(i.t.VJlc0S);
        case r.kG.USER_ACTIVITY_SYNC:
        default:
            return;
    }
}

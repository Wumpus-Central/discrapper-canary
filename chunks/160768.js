i.d(n, { A: () => e });
var r = i(272984),
    a = i(375708);
function e(t, n) {
    switch (n) {
        case r.Qp.USER_ACTIVITY_PLAY:
            return t.hasSpotifyAccount
                ? a.intl.formatToPlainString(a.t.LEgD7t, { platform: r.HD })
                : a.intl.formatToPlainString(a.t.XWSHTb, { platform: r.HD });
        case r.Qp.EMBED_SYNC:
            if (!t.hasSpotifyAccount) return a.intl.formatToPlainString(a.t.XWSHTb, { platform: r.HD });
            if (t.syncingWithUser || t.syncingWithParty) return a.intl.string(a.t.KC26NR);
            return a.intl.string(a.t.VJlc0S);
        case r.Qp.USER_ACTIVITY_SYNC:
        default:
            return;
    }
}

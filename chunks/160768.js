r.d(n, { A: () => e });
var i = r(272984),
    a = r(985018);
function e(t, n) {
    switch (n) {
        case i.Qp.USER_ACTIVITY_PLAY:
            return t.hasSpotifyAccount
                ? a.intl.formatToPlainString(a.t.LEgD7t, { platform: i.HD })
                : a.intl.formatToPlainString(a.t.XWSHTb, { platform: i.HD });
        case i.Qp.EMBED_SYNC:
            if (!t.hasSpotifyAccount) return a.intl.formatToPlainString(a.t.XWSHTb, { platform: i.HD });
            if (t.syncingWithUser || t.syncingWithParty) return a.intl.string(a.t.KC26NR);
            return a.intl.string(a.t.VJlc0S);
        case i.Qp.USER_ACTIVITY_SYNC:
        default:
            return;
    }
}

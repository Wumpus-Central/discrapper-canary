n.d(t, { A: () => i });
var l = n(272984),
    a = n(985018);
function i(e, t) {
    switch (t) {
        case l.Qp.USER_ACTIVITY_PLAY:
            return e.hasSpotifyAccount
                ? a.intl.formatToPlainString(a.t.LEgD7t, { platform: l.HD })
                : a.intl.formatToPlainString(a.t.XWSHTb, { platform: l.HD });
        case l.Qp.EMBED_SYNC:
            if (!e.hasSpotifyAccount) return a.intl.formatToPlainString(a.t.XWSHTb, { platform: l.HD });
            if (e.syncingWithUser || e.syncingWithParty) return a.intl.string(a.t.KC26NR);
            return a.intl.string(a.t.VJlc0S);
        case l.Qp.USER_ACTIVITY_SYNC:
        default:
            return;
    }
}

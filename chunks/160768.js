n.d(t, { A: () => l });
var a = n(272984),
    i = n(985018);
function l(e, t) {
    switch (t) {
        case a.Qp.USER_ACTIVITY_PLAY:
            return e.hasSpotifyAccount
                ? i.intl.formatToPlainString(i.t.LEgD7t, { platform: a.HD })
                : i.intl.formatToPlainString(i.t.XWSHTb, { platform: a.HD });
        case a.Qp.EMBED_SYNC:
            if (!e.hasSpotifyAccount) return i.intl.formatToPlainString(i.t.XWSHTb, { platform: a.HD });
            if (e.syncingWithUser || e.syncingWithParty) return i.intl.string(i.t.KC26NR);
            return i.intl.string(i.t.VJlc0S);
        case a.Qp.USER_ACTIVITY_SYNC:
        default:
            return;
    }
}

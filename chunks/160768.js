"use strict";
n.d(t, { A: () => i });
var a = n(272984),
    r = n(985018);
function i(e, t) {
    switch (t) {
        case a.Qp.USER_ACTIVITY_PLAY:
            return e.hasSpotifyAccount
                ? r.intl.formatToPlainString(r.t.LEgD7t, { platform: a.HD })
                : r.intl.formatToPlainString(r.t.XWSHTb, { platform: a.HD });
        case a.Qp.EMBED_SYNC:
            if (!e.hasSpotifyAccount) return r.intl.formatToPlainString(r.t.XWSHTb, { platform: a.HD });
            if (e.syncingWithUser || e.syncingWithParty) return r.intl.string(r.t.KC26NR);
            return r.intl.string(r.t.VJlc0S);
        case a.Qp.USER_ACTIVITY_SYNC:
        default:
            return;
    }
}

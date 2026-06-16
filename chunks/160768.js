"use strict";
n.d(t, { A: () => s });
var i = n(272984),
    r = n(375708);
function s(e, t) {
    switch (t) {
        case i.Qp.USER_ACTIVITY_PLAY:
            return e.hasSpotifyAccount
                ? r.intl.formatToPlainString(r.t.LEgD7t, { platform: i.HD })
                : r.intl.formatToPlainString(r.t.XWSHTb, { platform: i.HD });
        case i.Qp.EMBED_SYNC:
            if (!e.hasSpotifyAccount) return r.intl.formatToPlainString(r.t.XWSHTb, { platform: i.HD });
            if (e.syncingWithUser || e.syncingWithParty) return r.intl.string(r.t.KC26NR);
            return r.intl.string(r.t.VJlc0S);
        case i.Qp.USER_ACTIVITY_SYNC:
        default:
            return;
    }
}

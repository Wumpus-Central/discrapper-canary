var r = i(272984),
    e = i(792996);
i.d(
    n,
    {},
    {
        A: function (t, n) {
            switch (n) {
                case r.Qp.USER_ACTIVITY_PLAY:
                    return t.hasSpotifyAccount
                        ? e.intl.formatToPlainString(e.t.LEgD7t, { platform: r.HD })
                        : e.intl.formatToPlainString(e.t.XWSHTb, { platform: r.HD });
                case r.Qp.EMBED_SYNC:
                    if (!t.hasSpotifyAccount) return e.intl.formatToPlainString(e.t.XWSHTb, { platform: r.HD });
                    if (t.syncingWithUser || t.syncingWithParty) return e.intl.string(e.t.KC26NR);
                    return e.intl.string(e.t.VJlc0S);
                case r.Qp.USER_ACTIVITY_SYNC:
                default:
                    return;
            }
        },
    },
);

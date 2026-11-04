var i = n(723702),
    o = n(210528),
    r = n(981616),
    l = n(272984);
function a(t, e, n) {
    let a;
    ((0, i.xl)() || (a = window.open("", "_blank")),
        (0, r.getSpotifyMetadataFromActivity)(t, e)
            .then((t) => n(t))
            .then((t) => {
                let { resourceType: e, resourceId: n } = t,
                    i = o.A.isProtocolRegistered() ? l.RQ.PLAYER_OPEN(e, n) : l.RQ.WEB_OPEN(e, n);
                null != a ? (a.location.href = i) : window.open(i);
            })
            .catch(() => {
                null != a && a.close();
            }));
}
n.d(
    e,
    {},
    {
        Mp: function (t) {
            let { sync_id: e, metadata: n } = t;
            if (null == e) return;
            let i = (0, l.NJ)(n?.type ?? l.M0.TRACK);
            if (null == i) return;
            let r = o.A.isProtocolRegistered() ? l.RQ.PLAYER_OPEN(i, e) : l.RQ.WEB_OPEN(i, e);
            window.open(r);
        },
        Pt: function () {
            window.open(l.RQ.PREMIUM_SITE);
        },
        QX: function (t, e) {
            a(t, e, (e) => {
                let { album_id: n } = e;
                return {
                    resourceType: (0, l.NJ)(t.metadata?.type) === l.M0.EPISODE ? l.M0.SHOW : l.M0.ALBUM,
                    resourceId: n,
                };
            });
        },
        mN: function (t, e, n) {
            a(t, e, (t) => {
                let { artist_ids: e } = t;
                if (null == e) throw Error("no artist ids in metadata");
                let i = e[n];
                if (null == i) throw Error("invalid artist index");
                return { resourceType: l.M0.ARTIST, resourceId: i };
            });
        },
    },
);

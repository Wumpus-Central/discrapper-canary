i.d(n, { Mp: () => u, Pt: () => s, QX: () => c, mN: () => d });
var e = i(723702),
    r = i(210528),
    o = i(981616),
    l = i(272984);
function a(t, n, i) {
    let a;
    (0, e.isDesktop)() || (a = window.open("", "_blank")),
        (0, o.LI)(t, n)
            .then((t) => i(t))
            .then((t) => {
                let { resourceType: n, resourceId: i } = t,
                    e = r.A.isProtocolRegistered() ? l.RQ.PLAYER_OPEN(n, i) : l.RQ.WEB_OPEN(n, i);
                null != a ? (a.location.href = e) : window.open(e);
            })
            .catch(() => {
                null != a && a.close();
            });
}
function s() {
    window.open(l.RQ.PREMIUM_SITE);
}
function u(t) {
    let { sync_id: n, metadata: i } = t;
    if (null == n) return;
    let e = (0, l.NJ)(i?.type ?? l.M0.TRACK);
    if (null == e) return;
    let o = r.A.isProtocolRegistered() ? l.RQ.PLAYER_OPEN(e, n) : l.RQ.WEB_OPEN(e, n);
    window.open(o);
}
function c(t, n) {
    a(t, n, (n) => {
        let { album_id: i } = n;
        return { resourceType: (0, l.NJ)(t.metadata?.type) === l.M0.EPISODE ? l.M0.SHOW : l.M0.ALBUM, resourceId: i };
    });
}
function d(t, n, i) {
    a(t, n, (t) => {
        let { artist_ids: n } = t;
        if (null == n) throw Error("no artist ids in metadata");
        let e = n[i];
        if (null == e) throw Error("invalid artist index");
        return { resourceType: l.M0.ARTIST, resourceId: e };
    });
}

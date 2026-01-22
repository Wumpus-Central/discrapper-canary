n.d(t, {
    Mp: () => c,
    Pt: () => l,
    QX: () => u,
    mN: () => d,
}),
    n(65821);
var r = n(723702),
    i = n(210528),
    a = n(981616),
    s = n(272984);
function o(e, t, n) {
    let o;
    (0, r.isDesktop)() || (o = window.open("", "_blank")),
        (0, a.LI)(e, t)
            .then((e) => n(e))
            .then((e) => {
                let { resourceType: t, resourceId: n } = e,
                    r = i.A.isProtocolRegistered() ? s.RQ.PLAYER_OPEN(t, n) : s.RQ.WEB_OPEN(t, n);
                null != o ? (o.location.href = r) : window.open(r);
            })
            .catch(() => {
                null != o && o.close();
            });
}
function l() {
    window.open(s.RQ.PREMIUM_SITE);
}
function c(e) {
    var t;
    let { sync_id: n, metadata: r } = e;
    if (null == n) return;
    let a = (0, s.NJ)(null != (t = null == r ? void 0 : r.type) ? t : s.M0.TRACK);
    if (null == a) return;
    let o = i.A.isProtocolRegistered() ? s.RQ.PLAYER_OPEN(a, n) : s.RQ.WEB_OPEN(a, n);
    window.open(o);
}
function u(e, t) {
    o(e, t, (t) => {
        var n;
        let { album_id: r } = t;
        return {
            resourceType:
                (0, s.NJ)(null == (n = e.metadata) ? void 0 : n.type) === s.M0.EPISODE ? s.M0.SHOW : s.M0.ALBUM,
            resourceId: r,
        };
    });
}
function d(e, t, n) {
    o(e, t, (e) => {
        let { artist_ids: t } = e;
        if (null == t) throw Error("no artist ids in metadata");
        let r = t[n];
        if (null == r) throw Error("invalid artist index");
        return {
            resourceType: s.M0.ARTIST,
            resourceId: r,
        };
    });
}

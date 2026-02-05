"use strict";
n.d(t, { Mp: () => u, Pt: () => l, QX: () => c, mN: () => d });
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
function u(e) {
    let { sync_id: t, metadata: n } = e;
    if (null == t) return;
    let r = (0, s.NJ)(n?.type ?? s.M0.TRACK);
    if (null == r) return;
    let a = i.A.isProtocolRegistered() ? s.RQ.PLAYER_OPEN(r, t) : s.RQ.WEB_OPEN(r, t);
    window.open(a);
}
function c(e, t) {
    o(e, t, (t) => {
        let { album_id: n } = t;
        return { resourceType: (0, s.NJ)(e.metadata?.type) === s.M0.EPISODE ? s.M0.SHOW : s.M0.ALBUM, resourceId: n };
    });
}
function d(e, t, n) {
    o(e, t, (e) => {
        let { artist_ids: t } = e;
        if (null == t) throw Error("no artist ids in metadata");
        let r = t[n];
        if (null == r) throw Error("invalid artist index");
        return { resourceType: s.M0.ARTIST, resourceId: r };
    });
}

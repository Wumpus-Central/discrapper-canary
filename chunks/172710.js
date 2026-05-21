"use strict";
n.d(t, { Mp: () => u, Pt: () => l, QX: () => c, mN: () => d });
var i = n(723702),
    r = n(210528),
    s = n(981616),
    a = n(272984);
function o(e, t, n) {
    let o;
    (0, i.isDesktop)() || (o = window.open("", "_blank")),
        (0, s.LI)(e, t)
            .then((e) => n(e))
            .then((e) => {
                let { resourceType: t, resourceId: n } = e,
                    i = r.A.isProtocolRegistered() ? a.RQ.PLAYER_OPEN(t, n) : a.RQ.WEB_OPEN(t, n);
                null != o ? (o.location.href = i) : window.open(i);
            })
            .catch(() => {
                null != o && o.close();
            });
}
function l() {
    window.open(a.RQ.PREMIUM_SITE);
}
function u(e) {
    let { sync_id: t, metadata: n } = e;
    if (null == t) return;
    let i = (0, a.NJ)(n?.type ?? a.M0.TRACK);
    if (null == i) return;
    let s = r.A.isProtocolRegistered() ? a.RQ.PLAYER_OPEN(i, t) : a.RQ.WEB_OPEN(i, t);
    window.open(s);
}
function c(e, t) {
    o(e, t, (t) => {
        let { album_id: n } = t;
        return { resourceType: (0, a.NJ)(e.metadata?.type) === a.M0.EPISODE ? a.M0.SHOW : a.M0.ALBUM, resourceId: n };
    });
}
function d(e, t, n) {
    o(e, t, (e) => {
        let { artist_ids: t } = e;
        if (null == t) throw Error("no artist ids in metadata");
        let i = t[n];
        if (null == i) throw Error("invalid artist index");
        return { resourceType: a.M0.ARTIST, resourceId: i };
    });
}

"use strict";
n.d(t, { Mp: () => c, Pt: () => o, QX: () => u, mN: () => d });
var l = n(723702),
    i = n(210528),
    s = n(981616),
    a = n(272984);
function r(e, t, n) {
    let r;
    (0, l.isDesktop)() || (r = window.open("", "_blank")),
        (0, s.LI)(e, t)
            .then((e) => n(e))
            .then((e) => {
                let { resourceType: t, resourceId: n } = e,
                    l = i.A.isProtocolRegistered() ? a.RQ.PLAYER_OPEN(t, n) : a.RQ.WEB_OPEN(t, n);
                null != r ? (r.location.href = l) : window.open(l);
            })
            .catch(() => {
                null != r && r.close();
            });
}
function o() {
    window.open(a.RQ.PREMIUM_SITE);
}
function c(e) {
    let { sync_id: t, metadata: n } = e;
    if (null == t) return;
    let l = (0, a.NJ)(n?.type ?? a.M0.TRACK);
    if (null == l) return;
    let s = i.A.isProtocolRegistered() ? a.RQ.PLAYER_OPEN(l, t) : a.RQ.WEB_OPEN(l, t);
    window.open(s);
}
function u(e, t) {
    r(e, t, (t) => {
        let { album_id: n } = t;
        return { resourceType: (0, a.NJ)(e.metadata?.type) === a.M0.EPISODE ? a.M0.SHOW : a.M0.ALBUM, resourceId: n };
    });
}
function d(e, t, n) {
    r(e, t, (e) => {
        let { artist_ids: t } = e;
        if (null == t) throw Error("no artist ids in metadata");
        let l = t[n];
        if (null == l) throw Error("invalid artist index");
        return { resourceType: a.M0.ARTIST, resourceId: l };
    });
}

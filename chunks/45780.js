"use strict";
n.d(t, { G$: () => f, _$: () => p, hk: () => E, zs: () => _ });
var i = n(17928),
    r = n(554146),
    s = n(594061),
    a = n(617617),
    o = n(174459),
    l = n(460288),
    u = n(652215),
    c = n(49999),
    d = n(355097);
function _(e, t) {
    let n = a.A.getDismissedGuildContent(t);
    return null != n && (0, l.c0)(n, e);
}
function f(e, t) {
    return (0, i.bG)([a.A], () => _(e, t));
}
function h(e, t, n, i, a) {
    (0, s.TG)(
        n,
        (i) => {
            let r = _(t, n);
            if ((e && r) || (!e && !r)) return !1;
            i.dismissedGuildContent = (e ? l.Vf : l.We)(i.dismissedGuildContent, t);
        },
        e ? d.Sb.INFREQUENT_USER_ACTION : d.Sb.FREQUENT_USER_ACTION,
    ),
        i &&
            o.default.track(u.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
                type: r.V[t],
                guild_id: n,
                action: a ?? c.i.UNKNOWN,
            });
}
function p(e, t, n, i) {
    h(!0, e, t, n, i);
}
function E(e, t) {
    h(!1, e, t);
}

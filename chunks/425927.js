"use strict";
n.d(t, { U1: () => _, fS: () => c }), n(321073);
var r = n(250119),
    i = n(381438),
    s = n(550630),
    a = n(692603),
    o = n(199585),
    l = n(665260),
    u = n(96914),
    c = (function (e) {
        return (e.FULL = "full"), (e.MINIMAL = "minimal"), e;
    })({});
let d = { source: r.j.NO_CLASSIFICATION, status: i.Y.EVERYONE };
function _(e) {
    return f(e).status;
}
function f(e) {
    if (null == e) return d;
    let t = [],
        { type: n, data: i } = e;
    return (
        "minimal" === n
            ? null != i.discord_classifications && t.push(p(r.j.DISCORD_CLASSIFICATION, i.discord_classifications))
            : null != i.manual_classifications
              ? t.push(p(r.j.MANUAL_CLASSIFICATION, i.manual_classifications))
              : null != i.automated_classifications &&
                t.push(p(r.j.AUTOMATED_CLASSIFICATION, i.automated_classifications)),
        null != i.agency_ratings &&
            (null != i.agency_ratings.esrb && t.push(h(i.agency_ratings.esrb)),
            null != i.agency_ratings.pegi && t.push(m(i.agency_ratings.pegi))),
        E(t)
    );
}
function p(e, t) {
    return l.Lt(t, o.H.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)
        ? { source: e, status: i.Y.ADULT }
        : { source: e, status: l.br(t, o.M.RESTRICTED_TO_ADULT) ? i.Y.ADULT : i.Y.EVERYONE };
}
function h(e) {
    let t = s.j.IS_ADULT_ONLY.has(e.rating) ? i.Y.ADULT : i.Y.EVERYONE;
    return { source: r.j.AGENCY_CLASSIFICATION_ESRB, status: t };
}
function m(e) {
    let t = a.C.IS_ADULT_ONLY.has(e.rating) ? i.Y.ADULT : i.Y.EVERYONE;
    return { source: r.j.AGENCY_CLASSIFICATION_PEGI, status: t };
}
function E(e) {
    let t = null;
    for (let n of e) {
        if (null == t) {
            t = n;
            continue;
        }
        u.U(n.status, t.status) > 0 && (t = n);
    }
    return t ?? d;
}

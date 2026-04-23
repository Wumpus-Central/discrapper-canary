"use strict";
n.d(t, { U1: () => f, fS: () => d }), n(321073);
var r,
    i = n(250119),
    s = n(381438),
    a = n(550630),
    o = n(692603),
    l = n(199585),
    u = n(665260),
    c = n(96914),
    d = (((r = {}).FULL = "full"), (r.MINIMAL = "minimal"), r);
let _ = { source: i.j.NO_CLASSIFICATION, status: s.Y.EVERYONE };
function f(e) {
    return (function (e) {
        var t, n;
        let r, l;
        if (null == e) return _;
        let u = [],
            { type: d, data: f } = e;
        return (
            "minimal" === d
                ? null != f.discord_classifications && u.push(p(i.j.DISCORD_CLASSIFICATION, f.discord_classifications))
                : null != f.manual_classifications
                  ? u.push(p(i.j.MANUAL_CLASSIFICATION, f.manual_classifications))
                  : null != f.automated_classifications &&
                    u.push(p(i.j.AUTOMATED_CLASSIFICATION, f.automated_classifications)),
            null != f.agency_ratings &&
                (null != f.agency_ratings.esrb &&
                    u.push(
                        ((t = f.agency_ratings.esrb),
                        (r = a.j.IS_ADULT_ONLY.has(t.rating) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: i.j.AGENCY_CLASSIFICATION_ESRB, status: r }),
                    ),
                null != f.agency_ratings.pegi &&
                    u.push(
                        ((n = f.agency_ratings.pegi),
                        (l = o.C.IS_ADULT_ONLY.has(n.rating) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: i.j.AGENCY_CLASSIFICATION_PEGI, status: l }),
                    )),
            (function (e) {
                let t = null;
                for (let n of e) {
                    if (null == t) {
                        t = n;
                        continue;
                    }
                    c.U(n.status, t.status) > 0 && (t = n);
                }
                return t ?? _;
            })(u)
        );
    })(e).status;
}
function p(e, t) {
    return u.Lt(t, l.H.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)
        ? { source: e, status: s.Y.ADULT }
        : { source: e, status: u.br(t, l.M.RESTRICTED_TO_ADULT) ? s.Y.ADULT : s.Y.EVERYONE };
}

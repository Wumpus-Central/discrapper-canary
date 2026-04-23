"use strict";
n.d(t, { z: () => l }), n(801541);
var i = n(889137),
    s = n(546727),
    r = n(985018);
function l(e) {
    return (0, i.YW)(e)
        .with({ rateLimited: !0 }, () => ({ type: s.q.RATE_LIMIT, message: r.intl.string(r.t.T15lqn) }))
        .with({ error: i.P.not(i.P.nullish) }, (e) => {
            let { error: t } = e;
            return { type: s.q.ERROR, message: t };
        })
        .with({ taken: !1 }, () => ({ type: s.q.AVAILABLE, message: r.intl.string(r.t.PgfBSx) }))
        .with({ taken: !0 }, () => ({ type: s.q.ERROR, message: r.intl.string(r.t.mCrAUb) }))
        .with({ error: i.P.nullish }, () => ({ type: s.q.INTERNAL_ERROR, message: "" }))
        .otherwise(() => void 0);
}

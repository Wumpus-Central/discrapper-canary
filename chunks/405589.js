"use strict";
n.d(t, { L: () => o });
var r = n(608768),
    i = n(847745);
function o(e, { metadata: t, tunnel: n, dsn: a }) {
    let s = {
            event_id: e.event_id,
            sent_at: new Date().toISOString(),
            ...(t && t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }),
            ...(!!n && !!a && { dsn: (0, r.SB)(a) }),
        },
        l = [{ type: "user_report" }, e];
    return (0, i.h4)(s, [l]);
}

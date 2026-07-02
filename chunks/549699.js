"use strict";
n.d(t, { Q: () => s }), n(323874), n(14289), n(35956);
var i = n(636537),
    r = n(776231);
function s(e, t, n) {
    let s = new URL(
        null != window.GLOBAL_ENV.CDN_HOST
            ? `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/app-assets/${e}/${t.asset_id}.webp`
            : `${(0, i.TP)()}/applications/${e}/app-assets/${t.asset_id}.webp`,
    );
    return (
        null != n && s.searchParams.set("size", (0, r.kr)(n).toString()),
        t.metadata.is_animated && s.searchParams.set("animated", "true"),
        s.toString()
    );
}

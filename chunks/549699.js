l.d(t, { Q: () => s }), l(323874), l(14289), l(35956);
var n = l(636537),
    a = l(776231);
function s(e, t, l) {
    let s = new URL(
        null != window.GLOBAL_ENV.CDN_HOST
            ? `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/app-assets/${e}/${t.asset_id}.webp`
            : `${(0, n.TP)()}/applications/${e}/app-assets/${t.asset_id}.webp`,
    );
    return (
        null != l && s.searchParams.set("size", (0, a.kr)(l).toString()),
        t.metadata.is_animated && s.searchParams.set("animated", "true"),
        s.toString()
    );
}

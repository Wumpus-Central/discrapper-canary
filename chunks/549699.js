(l(323874), l(14289), l(35956));
var a = l(620632),
    n = l(776231);
l.d(
    t,
    {},
    {
        Q: function (e, t, l) {
            let s = new URL(
                null != window.GLOBAL_ENV.CDN_HOST
                    ? `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/app-assets/${e}/${t.asset_id}.webp`
                    : `${(0, a.TP)()}/applications/${e}/app-assets/${t.asset_id}.webp`,
            );
            return (
                null != l && s.searchParams.set("size", (0, n.kr)(l).toString()),
                t.metadata.is_animated && s.searchParams.set("animated", "true"),
                s.toString()
            );
        },
    },
);

(t(323874), t(14289), t(35956));
var l = t(620632),
    s = t(776231);
t.d(
    n,
    {},
    {
        Q: function (e, n, t) {
            let a = new URL(
                null != window.GLOBAL_ENV.CDN_HOST
                    ? `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/app-assets/${e}/${n.asset_id}.webp`
                    : `${(0, l.TP)()}/applications/${e}/app-assets/${n.asset_id}.webp`,
            );
            return (
                null != t && a.searchParams.set("size", (0, s.kr)(t).toString()),
                n.metadata.is_animated && a.searchParams.set("animated", "true"),
                a.toString()
            );
        },
    },
);

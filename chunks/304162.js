var i = n(273185);
n.d(
    t,
    {},
    {
        et: function (e) {
            if (null == e) return;
            let { url: t, proxy_url: n } = e;
            return null != t && null != n ? ((0, i.r1)(t) ? `${n}?format=webp` : n) : t;
        },
        m3: function (e) {
            if (null == e) return;
            let { thumbnail: t, image: n } = e;
            return null != t ? (t.proxy_url ?? t.url) : null != n ? (n.proxy_url ?? n.url) : void 0;
        },
    },
);

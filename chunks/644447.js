t.d(
    s,
    {},
    {
        E: function (p) {
            let { proxyURL: s, url: t } = p;
            return null != s && "" !== s ? s : t;
        },
    },
);

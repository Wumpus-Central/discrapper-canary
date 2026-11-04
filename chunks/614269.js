e.d(
    r,
    {},
    {
        u: class {
            static isHlsUrl(t) {
                return null != t && t.split("?")[0].endsWith(".m3u8");
            }
        },
    },
);

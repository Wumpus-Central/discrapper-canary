let r = null,
    l = null;
n.d(
    t,
    {},
    {
        Ap: function () {
            if (null != r) return r.isSupported();
            let e = window.ManagedMediaSource ?? window.MediaSource;
            return (
                null != e &&
                "function" == typeof e.isTypeSupported &&
                e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
            );
        },
        E: function () {
            return (l ??= n
                .e(357423)
                .then(n.bind(n, 771253))
                .then((e) => ((r = e.default), e.default)));
        },
    },
);

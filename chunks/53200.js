n.d(t, { Ap: () => a, E: () => i });
let r = null,
    l = null;
function i() {
    return (l ??= n
        .e("357423")
        .then(n.bind(n, 771253))
        .then((e) => ((r = e.default), e.default)));
}
function a() {
    if (null != r) return r.isSupported();
    let e = window.ManagedMediaSource ?? window.MediaSource;
    return (
        null != e &&
        "function" == typeof e.isTypeSupported &&
        e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
    );
}

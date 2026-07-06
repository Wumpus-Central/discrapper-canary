"use strict";
n.d(t, { Ap: () => o, E: () => s, LA: () => a });
let i = null,
    r = null;
function s() {
    return (r ??= n
        .e("57423")
        .then(n.bind(n, 771253))
        .then((e) => ((i = e.default), e.default)));
}
function a() {
    return i;
}
function o() {
    if (null != i) return i.isSupported();
    let e = window.ManagedMediaSource ?? window.MediaSource;
    return (
        null != e &&
        "function" == typeof e.isTypeSupported &&
        e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
    );
}

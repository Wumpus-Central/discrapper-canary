n.d(a, { A: () => d });
var t = n(256905),
    i = n(625494),
    l = n(652215);
let s = { width: 1920, height: 1080 };
async function r(e) {
    if (null == e) return s;
    try {
        let { width: a, height: n } = await new Promise((a, n) => {
            let t = new Image();
            ((t.onload = () => a({ width: t.naturalWidth, height: t.naturalHeight })),
                (t.onerror = () => n(Error("measureImage: the image failed to load"))),
                (t.src = e));
        });
        return a > 0 && n > 0 ? { width: a, height: n } : s;
    } catch {
        return s;
    }
}
async function c(e, a) {
    let { videoURL: n, thumbnailURL: t, title: s } = e,
        { width: c, height: d } = await r(t);
    return {
        type: "VIDEO",
        url: n,
        proxyUrl: n,
        poster: t,
        width: c,
        height: d,
        alt: s,
        onEnded: a ? () => i._.dispatch(l.jej.MODAL_CAROUSEL_NEXT) : void 0,
    };
}
async function d(e) {
    let { clips: a, startingIndex: n } = e;
    if (0 === a.length) return;
    let i = a.length > 1,
        l = await Promise.all(a.map((e) => c(e, i)));
    (0, t.R)({ location: "user_profile_widget_clip", items: l, startingIndex: n, shouldHideMediaOptions: !0 });
}

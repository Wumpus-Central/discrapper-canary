a.d(t, { A: () => d });
var i = a(256905),
    n = a(625494),
    l = a(652215);
let s = { width: 1920, height: 1080 };
async function r(e) {
    if (null == e) return s;
    try {
        let { width: t, height: a } = await new Promise((t, a) => {
            let i = new Image();
            ((i.onload = () => t({ width: i.naturalWidth, height: i.naturalHeight })),
                (i.onerror = () => a(Error("measureImage: the image failed to load"))),
                (i.src = e));
        });
        return t > 0 && a > 0 ? { width: t, height: a } : s;
    } catch {
        return s;
    }
}
async function o(e, t) {
    let { videoURL: a, thumbnailURL: i, title: s } = e,
        { width: o, height: d } = await r(i);
    return {
        type: "VIDEO",
        url: a,
        proxyUrl: a,
        poster: i,
        width: o,
        height: d,
        alt: s,
        onEnded: t ? () => n._.dispatch(l.jej.MODAL_CAROUSEL_NEXT) : void 0,
    };
}
async function d(e) {
    let { clips: t, startingIndex: a } = e;
    if (0 === t.length) return;
    let n = t.length > 1,
        l = await Promise.all(t.map((e) => o(e, n)));
    (0, i.R)({ location: "user_profile_widget_clip", items: l, startingIndex: a, shouldHideMediaOptions: !0 });
}

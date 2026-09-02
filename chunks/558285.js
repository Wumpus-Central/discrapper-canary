a.d(t, { A: () => c });
var l = a(256905),
    i = a(625494),
    n = a(652215);
let s = { width: 1920, height: 1080 };
async function r(e) {
    if (null == e) return s;
    try {
        let { width: t, height: a } = await new Promise((t, a) => {
            let l = new Image();
            (l.onload = () => t({ width: l.naturalWidth, height: l.naturalHeight })),
                (l.onerror = () => a(Error("measureImage: the image failed to load"))),
                (l.src = e);
        });
        return t > 0 && a > 0 ? { width: t, height: a } : s;
    } catch {
        return s;
    }
}
async function o(e, t) {
    let { videoURL: a, thumbnailURL: l, title: s } = e,
        { width: o, height: c } = await r(l);
    return {
        type: "VIDEO",
        url: a,
        proxyUrl: a,
        poster: l,
        width: o,
        height: c,
        alt: s,
        onEnded: t ? () => i._.dispatch(n.jej.MODAL_CAROUSEL_NEXT) : void 0,
    };
}
async function c(e) {
    let { clips: t, startingIndex: a } = e;
    if (0 === t.length) return;
    let i = t.length > 1,
        n = await Promise.all(t.map((e) => o(e, i)));
    (0, l.R)({ location: "user_profile_widget_clip", items: n, startingIndex: a, shouldHideMediaOptions: !0 });
}

t.d(a, { A: () => d });
var i = t(256905),
    n = t(625494),
    l = t(652215);
let s = { width: 1920, height: 1080 };
async function r(e) {
    if (null == e) return s;
    try {
        let { width: a, height: t } = await new Promise((a, t) => {
            let i = new Image();
            ((i.onload = () => a({ width: i.naturalWidth, height: i.naturalHeight })),
                (i.onerror = () => t(Error("measureImage: the image failed to load"))),
                (i.src = e));
        });
        return a > 0 && t > 0 ? { width: a, height: t } : s;
    } catch {
        return s;
    }
}
async function c(e, a) {
    let { key: t, videoURL: i, thumbnailURL: s, title: c, spritesheetImageURL: d, spritesheetVttURL: o } = e,
        { width: u, height: m } = await r(s);
    return {
        type: "VIDEO",
        url: i,
        proxyUrl: i,
        poster: s,
        width: u,
        height: m,
        alt: c,
        clip: { id: t, url: i, width: u, height: m, title: c, spritesheet_image_url: d, spritesheet_vtt_url: o },
        onEnded: a ? () => n._.dispatch(l.jej.MODAL_CAROUSEL_NEXT) : void 0,
    };
}
async function d(e) {
    let { clips: a, startingIndex: t } = e;
    if (0 === a.length) return;
    let n = a.length > 1,
        l = await Promise.all(a.map((e) => c(e, n)));
    (0, i.R)({ location: "user_profile_widget_clip", items: l, startingIndex: t, shouldHideMediaOptions: !0 });
}

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
    let { key: t, gameId: i, videoURL: s, thumbnailURL: c, title: d, spritesheetImageURL: o, spritesheetVttURL: u } = e,
        { width: m, height: h } = await r(c);
    return {
        type: "VIDEO",
        url: s,
        proxyUrl: s,
        poster: c,
        width: m,
        height: h,
        alt: d,
        clip: {
            id: t,
            url: s,
            width: m,
            height: h,
            title: d,
            application: { id: i },
            spritesheet_image_url: o,
            spritesheet_vtt_url: u,
        },
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

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
async function c(e, t) {
    let {
            key: a,
            gameId: i,
            videoURL: s,
            thumbnailURL: c,
            title: d,
            spritesheetImageURL: o,
            spritesheetVttURL: u,
            clipEventsTimeline: m,
        } = e,
        { width: h, height: p } = await r(c);
    return {
        type: "VIDEO",
        url: s,
        proxyUrl: s,
        poster: c,
        width: h,
        height: p,
        alt: d,
        clip: {
            id: a,
            url: s,
            width: h,
            height: p,
            title: d,
            application: { id: i },
            spritesheet_image_url: o,
            spritesheet_vtt_url: u,
            clip_events_timeline: m,
        },
        onEnded: t ? () => n._.dispatch(l.jej.MODAL_CAROUSEL_NEXT) : void 0,
    };
}
async function d(e) {
    let { clips: t, startingIndex: a } = e;
    if (0 === t.length) return;
    let n = t.length > 1,
        l = await Promise.all(t.map((e) => c(e, n)));
    (0, i.R)({ location: "user_profile_widget_clip", items: l, startingIndex: a, shouldHideMediaOptions: !0 });
}

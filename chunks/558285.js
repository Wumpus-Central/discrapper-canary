a.d(t, { A: () => r });
var l = a(256905);
let i = { width: 1920, height: 1080 };
async function n(e) {
    if (null == e) return i;
    try {
        let { width: t, height: a } = await new Promise((t, a) => {
            let l = new Image();
            (l.onload = () => t({ width: l.naturalWidth, height: l.naturalHeight })),
                (l.onerror = () => a(Error("measureImage: the image failed to load"))),
                (l.src = e);
        });
        return t > 0 && a > 0 ? { width: t, height: a } : i;
    } catch {
        return i;
    }
}
async function s(e) {
    let { videoURL: t, thumbnailURL: a, title: l } = e,
        { width: i, height: s } = await n(a);
    return { type: "VIDEO", url: t, proxyUrl: t, poster: a, width: i, height: s, alt: l };
}
async function r(e) {
    let { clips: t, startingIndex: a } = e;
    if (0 === t.length) return;
    let i = await Promise.all(t.map(s));
    (0, l.R)({ location: "user_profile_widget_clip", items: i, startingIndex: a, shouldHideMediaOptions: !0 });
}

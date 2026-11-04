var i = a(256905),
    n = a(188567),
    l = a(652215);
let s = { width: 1920, height: 1080 };
a.d(
    t,
    {},
    {
        A: async function (e) {
            let { clips: t, startingIndex: a } = e;
            if (0 === t.length) return;
            let r = t.length > 1,
                c = await Promise.all(
                    t.map((e) =>
                        (async function (e, t) {
                            let {
                                    key: a,
                                    gameId: i,
                                    videoURL: r,
                                    thumbnailURL: c,
                                    title: d,
                                    spritesheetImageURL: o,
                                    spritesheetVttURL: u,
                                    clipEventsTimeline: m,
                                } = e,
                                { width: h, height: p } = await (async function (e) {
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
                                })(c);
                            return {
                                type: "VIDEO",
                                url: r,
                                proxyUrl: r,
                                poster: c,
                                width: h,
                                height: p,
                                alt: d,
                                clip: {
                                    id: a,
                                    url: r,
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
                        })(e, r),
                    ),
                );
            (0, i.R)({ location: "user_profile_widget_clip", items: c, startingIndex: a, shouldHideMediaOptions: !0 });
        },
    },
);
